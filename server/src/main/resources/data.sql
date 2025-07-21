create table IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO payments (id, amount, status, email) VALUES (1, 275, 'success', 'luke.tan@example.org');
INSERT INTO payments (id, amount, status, email) VALUES (2, 333, 'pending', 'alice93@mail.ru');
INSERT INTO payments (id, amount, status, email) VALUES (3, 222, 'processing', 'john_smith@xmail.com');
INSERT INTO payments (id, amount, status, email) VALUES (4, 415, 'failed', 'ivy.chan@abc.com');
INSERT INTO payments (id, amount, status, email) VALUES (5, 118, 'success', 'zach_b@test.net');
INSERT INTO payments (id, amount, status, email) VALUES (6, 920, 'pending', 'kelly_fry@gmail.com');
INSERT INTO payments (id, amount, status, email) VALUES (7, 100, 'success', 'daniel.lee@demo.io');
INSERT INTO payments (id, amount, status, email) VALUES (8, 785, 'processing', 'mary88@yandex.ru');
INSERT INTO payments (id, amount, status, email) VALUES (9, 630, 'success', 'vlad@example.kz');
INSERT INTO payments (id, amount, status, email) VALUES (10, 380, 'pending', 'kate.bee@me.com');
INSERT INTO payments (id, amount, status, email) VALUES (11, 490, 'failed', 'ron_grey@fastmail.com');
INSERT INTO payments (id, amount, status, email) VALUES (12, 159, 'success', 'nina_p@mail.me');
INSERT INTO payments (id, amount, status, email) VALUES (13, 234, 'processing', 'aaron_x@protonmail.com');
INSERT INTO payments (id, amount, status, email) VALUES (14, 812, 'pending', 'carla.joe@outlook.com');
INSERT INTO payments (id, amount, status, email) VALUES (15, 673, 'success', 'jordan_king@xyz.org');
INSERT INTO payments (id, amount, status, email) VALUES (16, 289, 'failed', 'melanie_fox@beta.biz');