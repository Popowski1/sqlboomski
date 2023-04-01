DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

SET GLOBAL FOREIGN_KEY_CHECKS=0;

CREATE TABLE department (
    id INT AUTO_INCREMEN
    name VARCHAR(30)
    PRIMARY KEY (id)
    


 
);
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    salary DECIMAL,
   department_id INT,
    PRIMARY KEY (id)
 
);
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    eRole_id INT,
    eManager_id INT,
    PRIMARY KEY (id)
    
 
);
