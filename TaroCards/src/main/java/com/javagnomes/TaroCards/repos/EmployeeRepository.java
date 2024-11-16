package com.javagnomes.TaroCards.repos;

import com.javagnomes.TaroCards.model.Employee;
import com.javagnomes.TaroCards.model.PotentialVariants;
import com.javagnomes.TaroCards.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<PotentialVariants> findByLastName(String lastName);
    List<PotentialVariants> findByPosition(String position);
    List<PotentialVariants> findByTeam(Team team);


}
