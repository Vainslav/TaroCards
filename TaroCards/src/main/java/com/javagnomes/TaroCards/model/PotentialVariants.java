package com.javagnomes.TaroCards.model;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PotentialVariants {
    @ManyToOne
    @JoinColumn(name = "teamId", nullable = false)
    private Team team;
    @ManyToOne
    @JoinColumn(name = "candidateId", nullable = false)
    private Candidate candidate;
    public PotentialVariants(){}

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Candidate getCandidate() {
        return candidate;
    }

    public void setCandidate(Candidate candidate) {
        this.candidate = candidate;
    }
}
