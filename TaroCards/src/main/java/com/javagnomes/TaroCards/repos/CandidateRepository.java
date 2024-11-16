package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.Candidate;
import com.javagnomes.TaroCards.model.Employee;
import com.javagnomes.TaroCards.model.PotentialVariants;
import com.javagnomes.TaroCards.model.Team;
import jakarta.data.repository.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * CRUD методы для таблички Candidates и метод findByLastName
 */
@RepositoryRestResource
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    List<Employee> findByLastName(@Param("lastName") String lastName);

}
