import { useEffect, useState } from "react";
import { getReviews } from "../../services/api";
import { useParams } from "react-router-dom";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews data:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.containerReviews}>
      <h2>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
