INSERT INTO department (name)
    VALUES  ("Engineering"),
            ("Finance"),
            ("Legal"),
            ("Sales");

INSERT INTO test (title, salary, department_id)
    VALUES  ("Sales Lead", 100000,1),
            ("Salesperson", 80000,2),
            ("Lead Engineer", 150000,3),
            ("Software Engineer", 120000,4),
            ("Account Manager", 160000,5),
            ("Accountant", 125000,6),
            ("Legal Team Lead", 250000,7),
            ("Lawyer", 190000,8),
            ("Customer Service", 80000,9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ('John','Doe',1,3),
            ('Mike','Chan',2,1),
            ('Ashley','Rodriguez',3,null),
            ('Kevin','Tupik',4,2),
            ('Kunal','Singh',5,2),
            ('Malia','Brown',6,4);