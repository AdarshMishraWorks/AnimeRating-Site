import React, { useState } from 'react';

const AnimeCard = ({ animeName, imageUrl }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#2d2d2d', // Dark background for contrast
        color: '#fff', // White text color
      }}
    >
      <h3 style={{ fontFamily: 'monospace', color: '#fff' }}>{animeName}</h3>
      <img
        src={imageUrl}
        alt={animeName}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '16px',
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            style={{
              fontSize: '30px',
              color: star <= (hover || rating) ? '#ffc107' : '#555',
              cursor: 'pointer',
            }}
          >
            ★
          </span>
        ))}
      </div>
      {rating && (
        <p style={{ marginTop: '16px', fontFamily: 'monospace', color: '#fff' }}>
          You rated this {rating} out of 5 stars!
        </p>
      )}
    </div>
  );
};

export default AnimeCard;
