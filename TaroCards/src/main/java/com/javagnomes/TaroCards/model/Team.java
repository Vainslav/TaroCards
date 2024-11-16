package com.javagnomes.TaroCards.model;

import com.javagnomes.TaroCards.model.enums.ProjectStage;
import jakarta.persistence.*;

/**
 * Создает таблицу Teams и даёт шаблон объекта таблицы
 */
@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProjectStage stage;

    public Team() {}


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProjectStage getStage() {
        return stage;
    }

    public void setStage(ProjectStage stage) {
        this.stage = stage;
    }
}
