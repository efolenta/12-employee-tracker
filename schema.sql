DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db
-- Create the Department Table --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

-- Create the Role Table --
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary decimal,
  department_id INT,
  PRIMARY KEY (id),
  CONSTRAINT fk_department
  FOREIGN KEY (department_id) 
  REFERENCES department(id)
);

-- Create the Employee Table --
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  CONSTRAINT fk_role
  FOREIGN KEY (role_id) 
  REFERENCES role(id)
);