package com.javagnomes.TaroCards.cfg;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

/**
 * Класс для изменения конфигурации репозиториев
 */
@Configuration
public class SpringRestConfiguration implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.setDefaultMediaType(MediaType.APPLICATION_JSON)
                .useHalAsDefaultJsonMediaType(false);
    }
}