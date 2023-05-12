import { Container } from './styles';
import Navbar from 'components/Navbar';
import { InfoContainer } from 'components/InfoContainer';
import { InputLabel } from 'components/InputLabels';
import { Select, TextField } from 'components/Inputs';
import { PrimaryButton, SecondaryButton } from 'components/Buttons';
import { useState } from 'react';
import homePageImage1 from 'assets/homePageImage1.svg';
import homePageImage2 from 'assets/homePageImage2.svg';
import homeBannerOne from 'assets/homeBannerOne.svg';
import homeBannerTwo from 'assets/homeBannerTwo.svg';
import homePageSection3Figure from 'assets/homePageSection3Figure.svg';
import homePageSection2Figure from 'assets/homePageSection2Figure.svg';
import Card from 'components/Card';

/*const cardExample = {
  street: 'Maria de Medeiros Miranda',
  address: 'Belo Horizonte, Mossoró',
  bedroomsQuantity: 2,
  bathroomsQuantity: 1,
  arePetsAllowed: false,
  isFavorite: true,
  value: 30.0,
};*/

export const HomePage = () => {
  const [city, setCity] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [maxValue, setMaxValue] = useState<number>(0);
  const [bedrooms, setBedrooms] = useState<number>(1);

  function handleSearchRoom() {}

  const renderFirstSection = (
    <section className="first-section">
      <div>
        <img
          src={homePageImage1}
          alt="Girl sitting at the bed with a notebook"
        />
      </div>
      <InfoContainer id="info-container">
        <div className="header">
          <h1>
            O melhor quarto para <p>você!</p>
          </h1>
        </div>
        <div className="city-input-group">
          <InputLabel htmlFor="city-input">Cidade</InputLabel>
          <TextField
            id="city-input"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className="district-input-group">
          <InputLabel htmlFor="district-input">Bairro</InputLabel>
          <TextField
            id="district-input"
            value={district}
            onChange={e => setDistrict(e.target.value)}
          />
        </div>
        <div className="filters-group">
          <div className="value-range-input-group">
            <InputLabel htmlFor="city-input">Valor até</InputLabel>
            <Select
              id="value-range-input"
              onChange={e => setMaxValue(e.target.value)}
            >
              <option value={500}>até R$ 500</option>
              <option value={1000}>até R$ 1000</option>
              <option value={2000}>até R$ 2000</option>
              <option value={2500}>até R$ 2500</option>
            </Select>
          </div>
          <div className="bedrooms-input-group">
            <InputLabel htmlFor="bedrooms-input">N° Quartos</InputLabel>
            <TextField
              id="bedrooms-input"
              type="number"
              min={1}
              value={bedrooms}
              onChange={e => setBedrooms(e.target.value)}
            />
          </div>
        </div>
        <div className="search-button-group">
          <PrimaryButton onClick={handleSearchRoom}>
            Procurar quarto
          </PrimaryButton>
        </div>
      </InfoContainer>
    </section>
  );

  const renderSecondSection = (
    <section
      className="second-section"
      style={{
        backgroundImage: `url(${homePageSection2Figure})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner-section">
        <div className="banner-subsection">
          <div className="banner-card">
            <img className="banner-image" src={homeBannerOne} />
            <a href="#"></a>
          </div>
        </div>
        <div className="banner-subsection">
          <div className="banner-card">
            <img className="banner-image" src={homeBannerTwo} />
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  );

  const renderThirdSection = (
    <section
      className="third-section"
      style={{
        backgroundImage: `url(${homePageSection3Figure})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div id="info-group">
        <h1>
          Encontre alguém para o seu quarto desocupado <p>sem complicações.</p>
        </h1>
        <SecondaryButton>Anunciar quartos</SecondaryButton>
      </div>
      <div id="third-image-container">
        <img src={homePageImage2} alt="Girl letting people in a room" />
      </div>
    </section>
  );
  return (
    <>
      <Navbar />
      <Container>
        {renderFirstSection}
        {renderSecondSection}
        {renderThirdSection}
      </Container>
    </>
  );
};
