import { useState } from 'react';
import { Container } from './styles';
import Navbar from 'components/Navbar';
import { InfoContainer } from 'components/InfoContainer';
import { InputLabel } from 'components/InputLabels';
import { Select, TextField } from 'components/Inputs';
import { PrimaryButton } from 'components/Buttons';

export const AnnouncePage = () => {
  const [title, setTitle] = useState<string>('');
  const [rentPeriod, setRentPeriod] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const [street, setStreet] = useState<string>('');
  const [propertyNumber, setPropertyNumber] = useState<string>('');
  const [condominiumNumber, setCondominiumNumber] = useState<string>('');
  const [block, setBlock] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [zipCode, setZipCode] = useState<number>();
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();
  const [allowPets, setAllowPets] = useState<boolean>();

  return (
    <>
      <Navbar />
      <Container>
        <InfoContainer id="main-container">
          <div className="room-data-container">
            <h3>Dados do quarto</h3>
            <div className="title-input-group">
              <InputLabel htmlFor="title-input">Título</InputLabel>
              <TextField id="title-input" />
            </div>
            <div className="rent=period-input-group">
              <InputLabel htmlFor="rent=period-input">Período</InputLabel>
              <TextField id="rent=period-input" />
            </div>
            <div className="description-input-group">
              <InputLabel htmlFor="description-input">Descrição</InputLabel>
              <TextField id="description-input" />
            </div>
          </div>
          <hr />
          <div className="second-container">
            <div className="address-container">
              <div className="address-header">
                <h3>Endereço</h3>
              </div>
              <div className="first-line-address">
                <div className="street-input-group">
                  <InputLabel htmlFor="street-input">Rua</InputLabel>
                  <TextField id="street-input" />
                </div>
                <div className="number-input-group">
                  <InputLabel htmlFor="number-input">N°</InputLabel>
                  <TextField id="number-input" />
                </div>
              </div>
              <div className="second-line-address">
                <div className="condominium-input-group">
                  <InputLabel htmlFor="condominium-input">
                    Condomínio
                  </InputLabel>
                  <TextField id="condominium-input" />
                </div>
                <div className="apartment-input-group">
                  <InputLabel htmlFor="apartment-input">Apto</InputLabel>
                  <TextField id="apartment-input" />
                </div>
                <div className="block-input-group">
                  <InputLabel htmlFor="block-input">Quadra</InputLabel>
                  <TextField id="block-input" />
                </div>
              </div>
              <div className="third-line-address">
                <div className="district-input-group">
                  <InputLabel htmlFor="district-input">Bairro</InputLabel>
                  <TextField id="district-input" />
                </div>
                <div className="cep-input-group">
                  <InputLabel htmlFor="cep-input">CEP</InputLabel>
                  <TextField id="cep-input" />
                </div>
                <div className="city-input-group">
                  <InputLabel htmlFor="city-input">Cidade</InputLabel>
                  <TextField id="city-input" />
                </div>
                <div className="state-input-group">
                  <InputLabel htmlFor="state-input">Estado</InputLabel>
                  <TextField id="state-input" />
                </div>
              </div>
            </div>
            <hr />
            <div className="aspects-container">
              <div className="aspects-header">
                <h3>Aspectos</h3>
                <div className="first-line-aspects">
                  <div className="room-type-input-group">
                    <InputLabel htmlFor="room-type-input">
                      Tipo de quarto
                    </InputLabel>
                    <Select id="room-type-input" />
                  </div>
                  <div className="bedrooms-input-group">
                    <InputLabel htmlFor="bedrooms-input">Quartos</InputLabel>
                    <TextField id="bedrooms-input" type="number" min={1} />
                  </div>
                  <div className="bathrooms-input-group">
                    <InputLabel htmlFor="bathrooms-input">Banheiros</InputLabel>
                    <TextField id="bathrooms-input" type="number" min={1} />
                  </div>
                  <div className="capacity-input-group">
                    <InputLabel htmlFor="capacity-input">Capacidade</InputLabel>
                    <TextField id="capacity-input" type="number" min={1} />
                  </div>
                </div>
                <div className="second-line-aspects">
                  <div className="share-room-input-group">
                    <InputLabel htmlFor="share-room-input">
                      Dividir quarto
                    </InputLabel>
                    <Select id="share-room-input" />
                  </div>

                  <div className="gender-input-group">
                    <InputLabel htmlFor="gender-input">Gênero</InputLabel>
                    <Select id="gender-input" />
                  </div>
                  <div className="allow-pets-input-group">
                    <InputLabel htmlFor="allow-pets-input">
                      Permitir pets
                    </InputLabel>
                    <Select id="allow-pets-input" />
                  </div>
                </div>
                <div className="button-container">
                  <PrimaryButton>Anunciar quarto</PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </InfoContainer>
      </Container>
    </>
  );
};
