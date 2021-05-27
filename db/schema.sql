-- CREATING DATABASE --
DROP DATABASE IF EXISTS employeetrackerdb;
CREATE DATABASE employeetrackerdb;
USE employeetrackerdb;

-- DEPARTMENT TABLE --
CREATE TABLE department (
  id INT PRIMARY KEY,
	name VARCHAR(30)
);

-- DEPARTMENT TABLE --
CREATE TABLE role (
	id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int
);

-- EMPLOYEE ROLE TABLE --
CREATE TABLE employee (
	id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

-- SELECTING FOR CREATING -- 
-- TABLES IN OUR SQL WORKBENCH --
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;