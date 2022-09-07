DROP DATABASE IF EXISTS reviews_dev;
CREATE DATABASE reviews_dev;

\c reviews_dev;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER,
    author TEXT,
    username TEXT,
    avatar_path TEXT,
    content TEXT,
    created_at DATE
);


