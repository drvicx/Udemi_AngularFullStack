package com.drvicx.ecommerce.config;

import com.drvicx.ecommerce.entity.Product;
import com.drvicx.ecommerce.entity.ProductCategory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import java.util.Set;
import java.util.List;
import java.util.ArrayList;


/**
 *=Configuration Class for DISABLE some HTTP-Methods for Product REST Repository Class
 */
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    //--13.1. Inject/Autowire JPA entity manager
    private EntityManager entityManager;
    //- constructor injection
    @Autowired
    public MyDataRestConfig(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    //=ATTENTION:
    // - configureRepositoryRestConfiguration() Method IS NOT EXISTS in new version of Spring Boot (2.5.6)
    //   and this produce an error: "Method does not override method from its superclass";
    // - in previous Spring Boot version (2.4.12) this Method is Exists, but in deprecation status!
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        //--Use Method enumerators when create list of enums (возможно я не правильно понял.. это-же енумераторы?)
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        //--disable HTTP methods for Product: PUT, POST and DELETE
        //  *lambda-expression syntax
        config.getExposureConfiguration()
            // select Entity Class
            .forDomainType(Product.class)
            // disable single element/items modification
            .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
            // disable multiply elements/items (collection) modification
            .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        //--disable HTTP methods for ProductCategory: PUT, POST and DELETE
        //  *lambda-expression syntax
        config.getExposureConfiguration()
                // select Entity Class
                .forDomainType(ProductCategory.class)
                // disable single element/items modification
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                // disable multiply elements/items (collection) modification
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));

        //--13.3. Call internal helper-method for expose Entity ids
        exposeId(config);


    }

    //--13.2. Implement internal helper-method for expose Entity ids
    private void exposeId(RepositoryRestConfiguration config) {
        //- gets a list/collection of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
        //- create an array of the entity types
        List<Class> entityClasses = new ArrayList<>();
        //- get the entity types for the entities
        for (EntityType tempEntityType : entities) {
            entityClasses.add(tempEntityType.getJavaType());
        }
        //- expose the entity ids for the array of entity/domain types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        config.exposeIdsFor(domainTypes);
    }
}
