package io.sawa.ipl.data;

import io.sawa.ipl.model.Match;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.item.ItemProcessor;

import java.time.LocalDate;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

    private static final Logger log = LoggerFactory.getLogger(MatchDataProcessor.class);

    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        Match match = new Match();
        match.setId(Long.parseLong(matchInput.getId()));
        match.setCity(matchInput.getCity());
        match.setDate(LocalDate.parse(matchInput.getDate()));
        match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
        match.setVenue(matchInput.getVenue());

        String firstInningsTeam, secondInningsTeam;

        if ("bat".equalsIgnoreCase(matchInput.getTossDecision())) {
            firstInningsTeam = matchInput.getTossWinner();
            secondInningsTeam = matchInput.getTossWinner().equalsIgnoreCase(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
        } else {
            secondInningsTeam = matchInput.getTossWinner();
            firstInningsTeam = matchInput.getTossWinner().equalsIgnoreCase(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
        }

        match.setTeam1(firstInningsTeam);
        match.setTeam2(secondInningsTeam);
        match.setTossWinner(matchInput.getTossWinner());
        match.setTossDecision(matchInput.getTossDecision());
        match.setMatchWinner(matchInput.getWinner());
        match.setResult(matchInput.getResult());
        match.setResultMargin(matchInput.getResultMargin());
        match.setUmpire1(matchInput.getUmpire1());
        match.setUmpire2(matchInput.getUmpire2());

        return match;
    }

}

