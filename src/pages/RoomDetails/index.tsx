import { Container } from './styles';
import homePageSection2Figure from 'assets/homePageSection2Figure.svg';
import { InfoContainer } from 'components/InfoContainer';
import { OutlinedButton, PrimaryButton } from 'components/Buttons';
import { Navbar } from 'components/Navbar';
import favoriteIconUrl from 'assets/selectedFavoriteIcon.svg';
import shareIconUrl from 'assets/shareIcon.svg';
import reportIconUrl from 'assets/reportIcon.svg';
import phoneIcon from 'assets/phoneIcon.svg';
import whatsappIcon from 'assets/whatsappIcon.svg';
import instagramIcon from 'assets/instagramIcon.svg';
import emailIcon from 'assets/emailIcon.svg';
import { useState } from 'react';
import fotoCozinha from 'assets/exampleImages/cozinha.jpg';
import fotoQuarto from 'assets/exampleImages/quarto.jpg';
import fotoSala from 'assets/exampleImages/sala.jpg';
import arrowBack from 'assets/arrow_back.svg';
import arrowForward from 'assets/arrow_forward.svg';
import { TextField } from 'components/Inputs';
import { useAuth } from 'hooks/auth';
import { UserWithoutPassword } from 'types/services';

export const RoomDetails = () => {
  const [propertyTitle, setPropertyTitle] = useState(
    'Procuro alguém para dividir apartamento, com 2 quartos e 2 banheiros',
  );

  const [publishedAt, setPublishedAt] = useState('17/05/2023');

  const [street, setStreet] = useState('Maria de Medeiros Miranda');
  const [district, setDistrict] = useState('Belo Horizonte');
  const [city, setCity] = useState('Mossoró');

  const [propertyValue, setPropertyValue] = useState(640.0);
  const [rentPeriod, setRentPeriod] = useState('A negociar');

  const [shareWithSameGender, setShareWithSameGender] = useState(false);
  const [allowPets, setAllowPets] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [hasGarage, setHasGarage] = useState(false);

  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);

  const [description, setDescription] = useState(
    'Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl.',
  );

  const [ownerPictureUrl, setOwnerPictureUrl] = useState('');
  const [ownerName, setOwnerName] = useState('Lucas Paulino');

  const [callNumber, setCallNumber] = useState('+55 84 9134-4148');
  const [whatsappNumber, setWhatsappNumber] = useState('+55 84 9134-4148');
  const [instagram, setInstagram] = useState('lucaspaulinoh');
  const [email, setEmail] = useState('lucas@email.com');

  const [currentImageSliderIndex, setCurrentImageSliderIndex] =
    useState<number>(0);

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

  const { userData } = useAuth();
  const user = userData?.user ?? ({} as UserWithoutPassword);

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

  const renderFirstSection = (
    <section
      className="first-section"
      style={{
        backgroundImage: `url(${homePageSection2Figure})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'scaleX(-1)',
      }}
    >
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
    </section>
  );

  const renderSecondSection = (
    <section className="second-section">
      <div className="room-details-container">
        <div className="button-container">
          <OutlinedButton className="button">
            Favoritar <img src={favoriteIconUrl} alt="Favorite icon" />
          </OutlinedButton>
          <OutlinedButton className="button">
            Compartilhar
            <img src={shareIconUrl} alt="Share icon" />
          </OutlinedButton>
          <OutlinedButton className="button">
            Denunciar <img src={reportIconUrl} alt="Report icon" />
          </OutlinedButton>
        </div>
        <div className="title-container">
          <h2 id="title">{propertyTitle}</h2>
        </div>
        <div className="publish-at-container">
          <p id="publish-at">Publicado em {publishedAt}</p>
        </div>
        <div className="address-container">
          <p id="street">{street}</p>
          <div className="full-address-container">
            <p id="district">{district}</p>,<p id="city">{city}</p>
          </div>
        </div>
        <div className="rent-period-container">
          <label htmlFor="rent-period" id="rent-period-title">
            Período
          </label>
          <p id="rent-period">{rentPeriod}</p>
        </div>
        <hr />
        <div className="aspects-container">
          <div className="aspect-container">
            <label htmlFor="bedrooms">Quartos</label>
            <p id="bedrooms">{bedrooms}</p>
          </div>
          <div className="aspect-container">
            <label htmlFor="bathrooms">Banheiros</label>
            <p id="bathrooms">{bathrooms}</p>
          </div>
          <div className="aspect-container">
            <label htmlFor="share-with-same-gender">Mesmo gênero</label>
            <p id="share-with-same-gender">
              {shareWithSameGender ? 'Sim' : 'Não'}
            </p>
          </div>

          <div className="aspect-container">
            <label htmlFor="are-pets-allowed">Pets</label>
            <p id="are-pets-allowed">{allowPets ? 'Sim' : 'Não'}</p>
          </div>
          <div className="aspect-container">
            <label htmlFor="is-furnished">Mobiliado</label>
            <p id="is-furnished">{furnished ? 'Sim' : 'Não'}</p>
          </div>
          <div className="aspect-container">
            <label htmlFor="garage-slots">Garagem</label>
            <p id="garage-slots">{hasGarage ? 'Sim' : 'Não'}</p>
          </div>
        </div>
        <hr />
        <div className="description-container">
          <label htmlFor="description" id="description-title">
            Descrição do proprietário
          </label>
          <p id="description">{description}</p>
        </div>
      </div>
      <div className="value-and-contacts-container">
        <InfoContainer className="value-and-contacts-group">
          <div className="value-group">
            <label id="value-label">Valor</label>
            <p id="value">R$ {propertyValue}</p>
          </div>
          <hr />
          <div className="contacts-group">
            <div className="owner-info">
              <img
                src={ownerPictureUrl}
                alt="Owner picture"
                id="owner-picture"
              />
              <h2>{ownerName}</h2>
            </div>
            <div className="owner-contacts">
              <div className="contact">
                <div className="contact-type-group">
                  <img src={phoneIcon} alt="Phone icon" />
                  Telefone
                </div>
                <p id="call-number-contact">{callNumber}</p>
              </div>
              <div className="contact">
                <div className="contact-type-group">
                  <img src={whatsappIcon} alt="Whatsapp icon" />
                  Whatsapp
                </div>
                <p id="whatsapp-contact">{whatsappNumber}</p>
              </div>
              <div className="contact">
                <div className="contact-type-group">
                  <img src={instagramIcon} alt="Instagram icon" />
                  Instagram
                </div>
                <p id="instagram-contact">{instagram}</p>
              </div>
              <div className="contact">
                <div className="contact-type-group">
                  <img src={emailIcon} alt="Email icon" />
                  Email
                </div>
                <p id="email-contact">{email}</p>
              </div>
            </div>
            <div id="connect-button">
              <PrimaryButton>Entrar em contato</PrimaryButton>
            </div>
          </div>
        </InfoContainer>
      </div>
    </section>
  );

  const renderThirdSection = (
    <section className="third-section">
      <h3>Dúvidas</h3>
      <div className="add-question-container">
        {user.avatarLink ? (
          <img
            src={user.avatarLink}
            alt="Foto de perfil"
            id="user-profile-image"
          />
        ) : (
          <div id="user-profile-image" />
        )}
        <TextField
          placeholder="Escreva sua dúvida..."
          id="new-question-input"
        />
        <PrimaryButton id="add-question-button">+</PrimaryButton>
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <Container>
        {renderFirstSection}
        {renderSecondSection}
      </Container>
    </>
  );
};
