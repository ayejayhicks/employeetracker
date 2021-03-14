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

-- DEPARTMENT SEEDS --
INSERT INTO department (name) VALUE ("Sales");
INSERT INTO department (name) VALUE ("Engineering");
INSERT INTO department (name) VALUE ("Finance");
INSERT INTO department (name) VALUE ("Legal");

-- EMPLOYEE ROLE SEEDS --
INSERT INTO role (title, salary, department_id) VALUE ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id) VALUE ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id) VALUE ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id) VALUE ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id) VALUE ("Lawyer", 190000, 4);

-- EMPLOYEE SEEDS --
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Alaina", "Hicks", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Cannon", "Hicks", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Grae", "Hicks", null, 3); 
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Verner", "Geddes Jr.", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Melinda", "Geddes", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Melita", "Meekins", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id) VALUE ("Liana", "Geddes", 2, 7);

-- SELECTING FOR CREATING -- 
-- TABLES IN OUR SQL WORKBENCH --
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;