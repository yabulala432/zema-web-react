import { useState } from "react";

import FlipperButton from "../flipper-button/FlipperButton";

import "./FlipImagesCard.css";

const FlipImagesCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [buttonName, setButtonName] = useState<{
    label: string;
    value: string;
  }>({
    label: "አማርኛ",
    value: "amharic",
  });
  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
    setButtonName({
      label: isFlipped ? "አማርኛ" : "ግእዝ",
      value: isFlipped ? "geez" : "amharic",
    });
  };

  return (
    <div className="container">
      <div
        className={`card`}
        style={{
          transform: isFlipped ? "rotateY(0.5turn)" : "rotateY(0)",
          transition: "transform 2.5s",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="card__content">
          <div className="card__front">
            <img
              style={{
                height: "500px",
                width: "500px",
                borderRadius: "10px",
              }}
              className="card__body"
              src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?cs=srgb&dl=pexels-kawaiiart-1767434.jpg&fm=jpg"
              alt="animal"
            />
          </div>

          <div className="card__back">
            <img
              style={{
                height: "500px",
                width: "500px",
                borderRadius: "10px",
              }}
              className="card__body card__title"
              src="https://imgupscaler.com/images/samples/animal-before.webp"
              alt="animal"
            />
          </div>
        </div>
      </div>
      <FlipperButton onClick={handleButtonClick} label={buttonName.label} />
    </div>
  );
};

export default FlipImagesCard;
