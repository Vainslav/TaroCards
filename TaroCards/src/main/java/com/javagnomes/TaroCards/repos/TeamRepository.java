package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.PotentialVariants;
import com.javagnomes.TaroCards.model.Team;
import com.javagnomes.TaroCards.model.enums.ProjectStage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * CRUD методы для таблички Teams и методы findByName, findByStage
 */
@RepositoryRestResource
public interface TeamRepository extends JpaRepository<Team, Long> {
    List<Team> findByName(String name);
    List<Team> findByStage(ProjectStage stage);
}
