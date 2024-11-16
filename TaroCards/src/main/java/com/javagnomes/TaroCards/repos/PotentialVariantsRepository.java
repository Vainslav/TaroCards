package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.Candidate;
import com.javagnomes.TaroCards.model.PotentialVariants;
import com.javagnomes.TaroCards.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface PotentialVariantsRepository extends JpaRepository<PotentialVariants, Long> {
    List<PotentialVariants> findByTeam(Team team);
    List<PotentialVariants> findByCandidate(Candidate candidate);

}
