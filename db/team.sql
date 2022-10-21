DROP DATABASE IF EXISTS team_db;
CREATE DATABASE team_db;

USE team_db;

CREATE TABLE department(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) UNIQUE 
);

CREATE TABLE employee_roles (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) UNIQUE ,
salary INT UNSIGNED ,
department_id INT UNSIGNED ,
FOREIGN KEY (department_id)
REFERENCES department(id) ON DELETE
);

CREATE TABLE employee(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) UNIQUE ,
last_name VARCHAR(30) UNIQUE,
role_id INT UNSIGNED ,
FOREIGN KEY (role_id)
REFERENCES employee_roles(id),
manager_id INT UNSIGNED,
FOREIGN KEY(manager_id)
REFERENCES employee(id) ON DELETE
);


