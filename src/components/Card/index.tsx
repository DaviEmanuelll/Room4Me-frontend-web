import './styles.css';
import arrowBack from 'assets/arrow_back.svg';
import arrowForward from 'assets/arrow_forward.svg';
import unselectedFavoriteIcon from 'assets/unselectedFavoriteIcon.svg';
import selectedFavoriteIcon from 'assets/selectedFavoriteIcon.svg';

import { useState } from 'react';
import { Property } from 'types/entities/property';
import { formatNumberToBRCurrency } from 'utils/formatNumberToBRCurrency';

interface CardProps {
  property: Property;
  isFavorite: boolean;
  toggleFavoriteProperty: (
    propertyId: string,
    favorite: boolean,
  ) => Promise<void>;
}

const Card = ({
  property: { id, address, aspects, rent, images },
  isFavorite,
  toggleFavoriteProperty,
}: CardProps) => {
  const [currentImageSliderIndex, setCurrentImageSliderIndex] = useState(0);

  const handleGoToPreviousImage = () => {
    const isFirstImage: boolean = currentImageSliderIndex === 0;
    const newIndex: number = isFirstImage
      ? images.length - 1
      : currentImageSliderIndex - 1;
    setCurrentImageSliderIndex(newIndex);
  };

  const handleGoToNextImage = () => {
    const isLastImage = currentImageSliderIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentImageSliderIndex + 1;
    setCurrentImageSliderIndex(newIndex);
  };

  const handleGoToEspecificImage = (imageIndex: number) => {
    setCurrentImageSliderIndex(imageIndex);
  };

  return (
    <>
      <div className="main-container">
        <div className="image-slider">
          <div className="buttons-group">
            {images.length > 1 && (
              <>
                <button id="arrow-back" onClick={handleGoToPreviousImage}>
                  <img src={arrowBack} alt="<" />
                </button>
                <button id="arrow-forward" onClick={handleGoToNextImage}>
                  <img src={arrowForward} alt=">" />
                </button>
              </>
            )}

            <div id="image-selector-container">
              {images.map(({ id }, index) => (
                <div
                  id="image-selector"
                  key={id}
                  onClick={() => handleGoToEspecificImage(index)}
                  style={{
                    color:
                      currentImageSliderIndex === index ? '#FF6700' : '#4C4652',
                  }}
                >
                  •
                </div>
              ))}
            </div>
          </div>

          {images.length > 0 && (
            <div
              className="images-container"
              style={{
                backgroundImage: `url(${images[currentImageSliderIndex].fileLink})`,
              }}
            />
          )}
        </div>

        <div className="info-container">
          <div className="description">
            <div id="tag-field"></div>
            <div className="address-group">
              <div id="street">{address.street}</div>
              <div id="address">
                {address.district}, {address.city}
              </div>
            </div>
            <div className="aspects">
              <div id="bedrooms">
                <label>Quartos</label>
                <span>{aspects.bedroomsQuantity}</span>
              </div>
              <hr />
              <div id="bathrooms">
                <label>Banheiros</label>
                <span>{aspects.bathroomsQuantity}</span>
              </div>
              <hr />
              <div id="pets">
                <label>Pets</label>
                <span>{aspects.acceptAnimals ? 'Sim' : 'Não'}</span>
              </div>
            </div>
            <div className="bottom-container">
              <button
                type="button"
                id="favorite-button"
                onClick={() => toggleFavoriteProperty(id, !isFavorite)}
              >
                <img
                  src={
                    isFavorite ? selectedFavoriteIcon : unselectedFavoriteIcon
                  }
                  alt="Favoritar"
                />
              </button>
              <div id="value">
                <label htmlFor="price">Valor</label>
                <p id="price">{formatNumberToBRCurrency(rent)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
