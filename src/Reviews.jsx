import React from "react";
// import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      text: "Unexpectedly found a fantastic pre-owned Oris Chronoris at a great price. Watch was in excellent condition. Quick shipping to boot! I'd definitely shop here again!",
      author: "Bill B.",
      location: "Las Vegas",
    },
    {
      text: "Just wonderful. Well priced watches in great condition. I also don’t remember the last time I enjoyed speaking to customer service as much as I did… almost didn’t want to hang up!",
      author: "Carlo L.",
      location: "Dallas",
    },
    {
      text: "Never had purchased a pre-owned watch until Bob’s. My experience was outstanding in every way. Will use Bob’s again for my next purchase.",
      author: "Gary H.",
      location: "New York",
    },
  ];

  return (
    <div className="reviews">
      <div className="reviews-title">
        <p>,,</p>
        <h2 className="reviews-header">The Reviews</h2>
        <p className="reviews-subtitle">What People Are Saying</p>
      </div>

      <div className="reviews-box">
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            {/* آیکون ۵ ستاره */}
            <div className="review-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">
              <strong>{review.author}</strong> — {review.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
