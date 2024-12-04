import React from "react";
import PropTypes from "prop-types";
import "./ImageDisplay.css";

const ImageDisplay = ({ name, count, images }) => {
  // Check if any image has an error
  const hasError = images.some((img) => img.error);

  return (
    <div className="image-display-container">
      <h3 className="component-title">{name} ({count})</h3>

      {hasError && <div className="large-error-icon" title="An error occurred with one or more images.">!</div>}

      <div className="image-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="image-wrapper"
            title={
              img.ready
                ? "Image loaded successfully"
                : img.error
                ? "Image load failed"
                : "Image loading..."
            }
          >
            {img.ready && !img.error ? (
              <img src={img.url} alt={`Image ${index + 1}`} className="image" />
            ) : img.error ? (
              <div className="error-icon" title="Error loading image">X</div>
            ) : (
              <div className="placeholder">Placeholder</div>
            )}
          </div>
        ))}

        {/* Render placeholders for missing images */}
        {Array.from({ length: 4 - images.length }).map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="image-wrapper"
            title="No image available"
          >
            <div className="placeholder">Placeholder</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ImageDisplay;
