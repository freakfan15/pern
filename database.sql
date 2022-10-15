CREATE DATABASE todo_db;

-- \c todo_db

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);