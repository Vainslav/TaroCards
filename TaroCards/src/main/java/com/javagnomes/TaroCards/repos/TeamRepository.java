package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.PotentialVariants;
import com.javagnomes.TaroCards.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface TeamRepository extends JpaRepository<Team, Long> {
    List<PotentialVariants> findByName(String name);
    List<PotentialVariants> findByStage(String stage);


}
