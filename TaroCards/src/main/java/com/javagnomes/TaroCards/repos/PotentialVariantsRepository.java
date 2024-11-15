package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.PotentialVariants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface PotentialVariantsRepository extends JpaRepository<PotentialVariants, Long> {
    List<PotentialVariants> findByTeam(String team);
    List<PotentialVariants> findByCandidate(String candidate);

}
