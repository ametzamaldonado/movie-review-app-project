const db = require("../db/dbConfig");

const getAllReviews = async () => {
    try {
        const allReviews = await db.any("SELECT * FROM reviews");
        return allReviews;
    } catch(err){
        return err;
    }
}

const getReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview;
    } catch (error){
        return error;
    }
}

const createReview = async (review) => {
    const { author, movie_id, username, avatar_path, content, created_at } = review; 
    try {
        const newReview = await db.one(
            "INSERT INTO reviews ( author, movie_id, username, avatar_path, content, created_at ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", 
            [ author, movie_id, username, avatar_path, content, created_at ]
        );
        return newReview;
    } catch (error){
        return error;
    }
}


const deleteReview = async(id) => {
    try {
        const deleteReview = await db.one("DELETE FROM reviews WHERE id=$1 RETURNING *", id);
        return deleteReview;
    } catch(err) {
        return err;
    }
}

const updateReview = async (review, id) => {
    const { author, movie_id, username, avatar_path, content, created_at } = review; 
    try {
        const updatedReview = await db.one("UPDATE reviews SET author = $1, movie_id = $2, username = $3, avatar_path = $4, content = $5, created_at = $6 WHERE id = $7 RETURNING *", 
        [author, movie_id, username, avatar_path, content, created_at, id]);
        return updatedReview;
    } catch(err) {
        return err;
    }
}

module.exports = { getAllReviews, getReview, createReview, deleteReview, updateReview }

