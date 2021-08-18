package io.sawa.ipl.data;

import io.sawa.ipl.model.Team;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager entityManager;

    @Autowired
    public JobCompletionNotificationListener(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");

            Map<String, Team> teamData = new HashMap<>();

            this.entityManager.createQuery("SELECT tm.team1, count(*) FROM Match tm GROUP BY tm.team1", Object[].class)
                    .getResultList()
                    .stream()
                    .map(element -> new Team((String) element[0], (long) element[1]))
                    .forEach(team -> teamData.put(team.getTeamName(), team));

            this.entityManager.createQuery("SELECT tm.team2, count(*) FROM Match tm GROUP BY tm.team2", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(element -> {
                        Team team = teamData.get((String) element[0]);
                        team.setTotalMatches(team.getTotalMatches() + (long) element[1]);
                    });

            this.entityManager.createQuery("SELECT tm.matchWinner, count(*) FROM Match tm GROUP BY tm.matchWinner", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(element -> {
                        Team team = teamData.get((String) element[0]);
                        if (team != null)
                            team.setTotalWins((long) element[1]);
                    });

            teamData.values().forEach(team -> this.entityManager.persist(team));
            teamData.values().forEach(System.out::println);
        }
    }
}

