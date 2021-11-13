package com.drvicx.ecommerce.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;

//import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;


/**
 *=JPA ENTITY CLASS "ProductCategory"
 */
@Entity
@Table(name="product_category")
//--Lombok @Data -- known bug with OneToMany relation
@Getter
@Setter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    //--OneToMany relation with Product Entity/Table
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Product> products;

}
