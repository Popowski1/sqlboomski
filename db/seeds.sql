INSERT INTO department (name)
VALUES  
('art'),
('bombs'),
('paint'),
('toys');

INSTER INTO role (title, department_id, salary)
VALUES
('natterdog', 1, 10),
('cleanKing', 1, 12),
('PorcelainBiz', 2, 19),
('rocketRacing', 2, 4),
('springSmelling', 3, 200),
('sniffSurfing', 3, 32),
('chainGanging', 4, 9),
('bigWhistlers', 4, 2);

INSERT INTO employee(last_name, first_name, eRole_id, eManager_id)
VALUES
('nong', 'Chuck', 1, null),
('nong', 'John', 2, null),
('nong', 'Naan', 3, 1),
('nong', 'Stacy', 4, 2),
('nong', 'Lacy', 5, 7),
('nong', 'Blaze', 6, 8),
('nong', 'Nancy', 7, null),
('nong', 'Bard', 8, null);




