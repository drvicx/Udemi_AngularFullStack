# Udemi_AngularFullStack
Angular TypeScript REST App (frontend) + Java SpringBoot REST (backend) from UDEMI course <br>
["Full Stack: Angular and Java Spring Boot"](https://www.udemy.com/course/full-stack-angular-spring-boot-tutorial/) <br>
by Chad Darby<br>
<br>


**=INFO**

- linked projects:<br>
["jdm-timesheet-cloud"](https://github.com/drvicx/jdm-timesheet-cloud) <br>
["jdm-timesheet-client-angular"](https://github.com/drvicx/jdm-timesheet-client-angular) <br>

- environment:<br>
  Windows 10 + WSL2 <br>
  Docker Desktop v3.3.3 (Docker v20.10.6, Compose 1.29.1) <br>
  IntelliJ IDEA 2020.3 <br>

- dependencies (backend):<br>
  MySQL/MariaDB DBMS + database <br> 
  Oracle Java JDK 17.0.1 <br>
  Maven 3.6.3<br>
  Spring Boot 2.4.12 (some problems with v2.5.6) <br>
  
- dependencies (frontend):<br>
  Node Version Manager (nvm) v1.1.8 <br>
  NodeJS (node) v14.18.1 <br>
  Node Package Manager (npm) v6.14.15 <br>
  TypeScript v4.2.4 <br>
  TypeScript Compiler (tsc) v4.4.4 <br>
  Angular CLI v12.2.11 <br>

- frontend Angular web-app endpoint: <br>
  -1- [Angular App (main view)](http://localhost:4200) <br>
  -2- [Angular App (ProductCategory#1 view)](http://localhost:4200/category/1) <br>

- backend REST-endpoints (post, put, delete http-methods IS NOT allowed - 405): <br>
  -1- [Get API URLs](http://localhost:8080/api) <br>
  -2- [Get All Products](http://localhost:8080/api/products) <br>
  -3- [Get Single Product by ID](http://localhost:8080/api/products/1) <br>
  -4- [Get All Product Categories](http://localhost:8080/api/product-category) <br>
  -5- [Get Single Product Category by ID](http://localhost:8080/api/product-category/1) <br>
  -6- [Get Product Category by Product ID](http://localhost:8080/api/products/1/category) <br>
  -7- [Get Products by Category ID](http://localhost:8080/api/product-category/1/products) <br>
  -8- [NEW: Find Products by Category ID](http://localhost:8080/api/products/search/findByCategoryId?id=1) <br>

**=CHANGE LOG**<br>
*new at the beginning

**20211130_1850:** _13. eCommerce Project (v2.0) - Dynamic Category Menu Component_
<pre>
-- 081. Angular Project - Dynamic Search Component - Overview (081-082);
-- 083. Angular Project - Dynamic Search Component - Modify Spring Boot App;
-- 084. Angular Project - Dynamic Search Component - Create Component;
-- 085. Angular Project - Dynamic Search Component - Call Product Service;
-- 086. Angular Project - Dynamic Search Component - Add Dynamic Code to HTML;
-- 087. Angular Project - Dynamic Search Component - View Console Logs;
-- 088. Bonus: Display Category Name in Product List Grid;
</pre>

**20211117_1650:** _12. eCommerce Project (v2.0) - Search Products by Category_
<pre>
-- 073. Angular Project - Search for Products by Category - Overview (073-075);
-- 076. Angular Project - Search for Products by Category - Code - Define routes;
-- 077. Angular Project - Search for Products by Category - Code - Define Router Outlet;
-- 078. Angular Project - Search for Products by Category - Code - Enhance ProductList;
-- 079. Angular Project - Search for Products by Category - Code - Update Spring Boot;
-- 080. Angular Project - Search for Products by Category - Code - Update ProductService;
</pre>

**20211115_2100:** _11. eCommerce Project (v2.0) - Integrating Online Shop Template_
<pre>
-- 063. Angular Project - Template Integration Overview;
-- 064. Angular Project - Download Starter Files;
-- 065. Angular Project - Tour of HTML Template Files;
-- 066. Angular Project - Install Bootstrap CSS Styles with npm;
-- 067. Angular Project - Add local custom CSS styles;
-- 068. Angular Project - Integrate Template Files and Logos;
-- 069. Angular Project - Run the App;
-- 070. Angular Project - Add support for Product Grid;
-- 071. Angular Project - Enhance Application with Product Images;
-- 072. FAQ: Should I Store Images as BLOBs in Database or Files on file system?;
</pre>

**20211114_0720:** _10. eCommerce Project (v1.0) - Angular Front End - Product List_
<pre>
-- 054. Angular Project Overview (054-055);
-- 056. Angular Project - Setup (056);
-- 057. Angular Project - Create Product class and Product Service (057-058);
-- 059. Angular Project - Update Angular Component;
-- 060. Angular Project - Integrating Angular and Spring Boot for Full Stack App;
-- 061. Angular Project - Building an HTML Table;
-- 062. Angular Project - Adding Product Images;
</pre>

**20211113_1440:** _09. eCommerce Project (v1.0) - Spring Boot Backend_
<pre>
-- 044. Spring Boot REST API backend Project setup (044-048);
-- 049. Develop JPA Entities (049-050);
-- 051. Create REST APIs with Spring Data JPA Repositories and Spring Data REST (051);
-- 052. REST APIs - Configure for Read Only (052-053);
</pre>

**20211109_1900:** _08: Angular Crash Course - Bootstrap CSS, Conditionals and Formatting_
<pre>
-- 039. Integrating Angular and Bootstrap CSS (039-040);
-- 041. Angular Conditionals and Formatting (041-043);
</pre>

**20211108_1840:** _07: Angular Crash Course - Fundamentals (cont.)_
<pre>
-- 032. Behind The Scenes of An Angular Project (032-033);
-- 034. Creating a New Angular Component - Overview (034-035);
-- 036. Creating a New Angular Component - Write Some Code (036-038);
</pre>

**20210608_1830:** _07: Angular Crash Course - Fundamentals (beg.)_
<pre>
-- 029. Getting Started with Angular;
-- 030. Exploring the Angular Project;
-- 031. Creating a New Angular Project;
</pre>

**20210607_2120:** _06: TypeScript Classes: Inheritance and Interfaces_
<pre>
-- 020. Inheritance (020-024);
-- 025. Abstract Classes (025-026);
-- 027. Interfaces (027-028);
</pre>

**20210606_2315:** _05: TypeScript Classes: Basics_
<pre>
-- 013. Creating Classes (013,014);
-- 015. Defining Accessors (015,016);
-- 017. Compiler Options ("tsconfig.json");
-- 018. Parameter Properties;
-- 019. TypeScript Modules (Export and Import);
</pre>

**20210605_2010:** _04: TypeScript Fundamentals_
<pre>
-- 008. Defining Variables (008,009);
-- 010. Creating Loops and Arrays (010-012);
</pre>

**20210604_1840:** _04: Create "HelloWorld" TypeScript project_
<pre>
-- 006. TypeScript Overview;
-- 007. Creating our first TypeScript application;
</pre>
<br>

**=APP-PREVIEW**

- "Fronend Angular App" v2.0 (main view | all Product Category)

![preview](_preview/ecommerce-frontend_20211130_1850_1.png?raw=true)

- "Fronend Angular App" v2.0 ("Books" view / Category)

![preview](_preview/ecommerce-frontend_20211130_1850_2.png?raw=true)

- "Fronend Angular App" v2.0 ("Coffee Mugs" view / Category)

![preview](_preview/ecommerce-frontend_20211130_1850_3.png?raw=true)

- "Fronend Angular App" v1.0 (Product List v0.3: table+images)

![preview](_preview/ecommerce-frontend_20211114_0720.png?raw=true)

- "Fronend Angular App" v1.0 (Product List v0.2: table)

![preview](_preview/ecommerce-frontend_20211114_0600.png?raw=true)

- "Fronend Angular App" v1.0 (Product List v0.1: text)

![preview](_preview/ecommerce-frontend_20211114_0500.png?raw=true)

- "Backend eCommerce REST API Service" v2.0 (findByCategoryId)

![preview](_preview/ecommerce-backend_20211117_1650_1.png?raw=true)

- "Backend eCommerce REST API Service" v1.0 (api - endpoint)

![preview](_preview/ecommerce-backend_20211112_1400_1.png?raw=true)

- "Backend eCommerce REST API Service" v1.0 (products - endpoint)

![preview](_preview/ecommerce-backend_20211112_1400_2.png?raw=true)

- "Backend eCommerce REST API Service" v1.0 (categories - endpoint)

![preview](_preview/ecommerce-backend_20211112_1400_3.png?raw=true)
