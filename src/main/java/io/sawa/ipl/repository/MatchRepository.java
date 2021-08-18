package io.sawa.ipl.repository;

import io.sawa.ipl.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String team1, String team2, Pageable pageable);

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by m.date desc")
    List<Match> getMatchesByTeamBetweenDates(
            @Param("teamName") String teamName,
            @Param("dateStart") LocalDate dateStart,
            @Param("dateEnd") LocalDate dateEnd);

    /*List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
            String team1, LocalDate date1, LocalDate date2,
            String team2, LocalDate date3, LocalDate date4
    );*/
}
