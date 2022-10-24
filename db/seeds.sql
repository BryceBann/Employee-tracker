INSERT INTO department
(department_name)
VALUES
('HUB Receiving'),
('CMTx Testing'),
('HUB Shipping'),
('HUB Inventory');

INSERT INTO employee_roles
(title, salary, department_id)
VALUES
('Receiving manager', 75000, 1),
('Receiver', 50000, 1),
('Testing manager', 80000, 2),
('Tester', 55000, 2),
('Shipping Manager', 80000, 3),
('Bulk shipper', 50000, 3),
('Shipper', 50000, 3),
('Inventory manager', 80000, 4),
('Inventory control', 55000, 4 );

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jeff', 'Stevens', 1, NULL),
('Ashley', 'Jones', 2, 1),
('Justin', 'Thompson', 3, NULL),
('Cody', 'Ledbetter', 4, 3),
('Josh', 'Jacobs', 5, NULL),
('Nicole', 'Little', 6, 5),
('Brain', 'Wells', 7, 5),
('Sarah', 'Thompson', 8, NULL),
('Zach', 'Stevens', 9, 8);

