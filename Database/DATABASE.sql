DROP DATABASE IF EXISTS TaskData;
CREATE DATABASE IF NOT EXISTS TaskData;

CREATE TABLE TaskData.Task_Status (
    status_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status_name VARCHAR(30) NOT NULL
)  ENGINE=INNODB;

CREATE TABLE TaskData.Tasks (
    task_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(30) NOT NULL,
    task_message TEXT NOT NULL,
    task_status_id INT NOT NULL DEFAULT 1,
    task_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_status_id)
        REFERENCES TaskData.Task_Status (status_id)
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO TaskData.Task_Status (status_id, status_name) VALUES
    (1, "Pendente"),
    (2, "Em Andamento"),
    (3, "Pronto");

INSERT INTO TaskData.Tasks (task_id, task_name, task_message, task_status_id, task_date) VALUES
    (1, "Task 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et venenatis sapien, non blandit odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;", 1, (NOW())),
    (2, "Task 2", "Maecenas ut turpis ac sem ornare mattis. Donec orci mi, ornare non vestibulum et, gravida vitae tellus. Phasellus vehicula ante ipsum, ut suscipit erat laoreet vel. ", 2, (NOW())),
    (3, "Task 3", "Sed tincidunt auctor tempus. Integer lacinia elit ac nulla dignissim, eu convallis lacus lacinia. Aliquam ullamcorper ante nisl, id suscipit leo lobortis non.", 3, (NOW()));

