USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("HR"), ("Warehouse"), ("Front");

INSERT INTO role (title, salary, department_id)
VALUES
("Manager", 75000, 1),
("Manager", 75000, 2),
("Manager", 75000, 3),
("Supervisor", 50000, 2),
("Human Resource Representative", 70000, 1),
("Cashier", 36000, 3),
("Worker", 38000, 2),
("Warehouse Manager", 70000, 2),
("Sales Associate", 40000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith",1 ,null), ("mary", "Smith", 4,2),