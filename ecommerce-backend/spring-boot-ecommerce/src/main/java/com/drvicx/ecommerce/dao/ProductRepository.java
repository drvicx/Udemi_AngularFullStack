package com.drvicx.ecommerce.dao;

import com.drvicx.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 *=DAO Interface for Product Entity
*/
public interface ProductRepository extends JpaRepository<Product, Long> {
}
