package com.javagnomes.TaroCards.model;

import jakarta.persistence.*;

@Entity
public class PotentialVariants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
