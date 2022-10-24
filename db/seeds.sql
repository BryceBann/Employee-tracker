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
('Receiver', 50000, 1),
('Receiving Manger', 75000, 1),
('Tester', 55000, 2),
('Testing Manager', 80000, 2),
('Shipper', 50000, 3),
('Bulk shipper', 50000, 3),
('Shipping Manager', 80000, 3),
('Inventory control', 55000, 4),
('Inventory Manager', 80000, 4 );

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Name1', 'Name1', 1, NULL),
('Name2', 'Name2', 2, 1),
('Name3', 'Name3', 3, NULL),
('Name4', 'Name4', 4, 3),
('Name5', 'Name5', 5, NULL),
('Name6', 'Name6', 6, NULL),
('Name7', 'Name7', 7, 5),
('Name8', 'Name8', 8, NULL),
('Name9', 'Name9', 9, 8);

