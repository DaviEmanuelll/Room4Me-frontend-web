import './styles.css';
import arrowBack from 'assets/arrow_back.svg';
import arrowForward from 'assets/arrow_forward.svg';
import unselectedFavoriteIcon from 'assets/unselectedFavoriteIcon.svg';
import selectedFavoriteIcon from 'assets/selectedFavoriteIcon.svg';
import fotoCozinha from 'assets/exampleImages/cozinha.jpg';
import fotoQuarto from 'assets/exampleImages/quarto.jpg';
import fotoSala from 'assets/exampleImages/sala.jpg';

import { useState } from 'react';
import ImageSlider from 'components/ImageSlider';
interface CardProps {
  street: string;
  address: string;
  bedroomsQuantity: number;
  bathroomsQuantity: number;
  arePetsAllowed: boolean;
  isFavorite: boolean;
  value: number;
}

const Card = (props: CardProps) => {
  const exampleImages = [
    {
      url: fotoCozinha,
      title: 'Imagem 1',
    },
    {
      url: fotoQuarto,
      title: 'Imagem 2',
    },
    {
      url: fotoSala,
      title: 'Imagem 3',
    },
  ];

  const [currentImageSliderIndex, setCurrentImageSliderIndex] =
    useState<number>(0);

  const [isFavorite, setIsFavorite] = useState<boolean>(props.isFavorite);

  const handleGoToPreviousImage = () => {
    const isFirstImage: boolean = currentImageSliderIndex === 0;
    const newIndex: number = isFirstImage
      ? exampleImages.length - 1
      : currentImageSliderIndex - 1;
    setCurrentImageSliderIndex(newIndex);
  };

  const handleGoToNextImage = () => {
    const isLastImage: boolean =
      currentImageSliderIndex === exampleImages.length - 1;
    const newIndex: number = isLastImage ? 0 : currentImageSliderIndex + 1;
    setCurrentImageSliderIndex(newIndex);
  };

  const handleGoToEspecificImage = imageIndex => {
    setCurrentImageSliderIndex(imageIndex);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="main-container">
        <div className="image-slider">
          <div className="buttons-group">
            <button id="arrow-back" onClick={handleGoToPreviousImage}>
              <img src={arrowBack} alt="<" />
            </button>
            <button id="arrow-forward" onClick={handleGoToNextImage}>
              <img src={arrowForward} alt=">" />
            </button>
            <div id="image-selector-container">
              {exampleImages.map((image, imageIndex) => (
                <div
                  id="image-selector"
                  key={imageIndex}
                  onClick={() => handleGoToEspecificImage(imageIndex)}
                  style={{
                    color:
                      currentImageSliderIndex === imageIndex
                        ? '#FF6700'
                        : '#4C4652',
                  }}
                >
                  •
                </div>
              ))}
            </div>
          </div>
          <div
            className="images-container"
            style={{
              backgroundImage: `url(${exampleImages[currentImageSliderIndex].url})`,
            }}
          ></div>
        </div>

        <div className="info-container">
          <div className="description">
            <div id="tag-field"></div>
            <div className="address-group">
              <div id="street">{props.street}</div>
              <div id="address">{props.address}</div>
            </div>
            <div className="aspects">
              <div id="bedrooms">
                <label>Quartos</label>
                <span>{props.bedroomsQuantity}</span>
              </div>
              <hr />
              <div id="bathrooms">
                <label>Banheiros</label>
                <span>{props.bathroomsQuantity}</span>
              </div>
              <hr />
              <div id="pets">
                <label>Pets</label>
                <span>{props.arePetsAllowed ? 'Sim' : 'Não'}</span>
              </div>
            </div>
            <div className="bottom-container">
              <div id="favorite-button" onClick={handleFavoriteClick}>
                {isFavorite ? (
                  <img src={selectedFavoriteIcon} />
                ) : (
                  <img src={unselectedFavoriteIcon} />
                )}
              </div>
              <div id="value">
                <label htmlFor="price">Valor</label>
                <p id="price">{props.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
