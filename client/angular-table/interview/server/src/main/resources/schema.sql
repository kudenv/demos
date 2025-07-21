create table if not exists payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE
);
