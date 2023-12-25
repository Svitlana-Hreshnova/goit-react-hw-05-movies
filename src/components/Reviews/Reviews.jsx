import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviewsContainer}>
      <h2 className={css.reviewsTitle}>Reviews</h2>
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={css.reviewItem}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
