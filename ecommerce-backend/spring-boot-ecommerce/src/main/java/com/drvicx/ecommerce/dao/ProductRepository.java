package com.drvicx.ecommerce.dao;

import com.drvicx.ecommerce.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;


/**
 *=DAO Interface for Product Entity
*/
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {

    //--12.6.1. Added Query method for get Product paginated data by ProductCategory ID (with param "id")
    //  - on the background JPA executes SQL like: select * from product where category_id=?
    //  - Spring Data REST automagically exposes endpoint for this method and process parameter "id", for example:
    //    http://localhost:8080/api/products/search/findByCategoryId?id=2
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable pageable);
}
