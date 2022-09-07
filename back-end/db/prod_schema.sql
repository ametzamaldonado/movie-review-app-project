CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER,
    author TEXT,
    username TEXT,
    avatar_path TEXT,
    content TEXT,
    created_at DATE
);
