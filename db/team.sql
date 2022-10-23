-- deleting old data base and creating new one
DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;

USE team_db;
-- Making the table for department
CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30), 
PRIMARY KEY (id)
);
-- making the table for employee_roles
CREATE TABLE employee_roles(
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary DECIMAL(8,2) NOT NULL,
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id),
PRIMARY KEY (id) 
);
-- making the table for employees
CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT,
FOREIGN KEY (role_id)
REFERENCES employee_roles(id),
CONSTRAINT FOREIGN KEY(manager_id)
REFERENCES employee(id),
PRIMARY KEY (id)
);


