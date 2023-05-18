import { useCallback, useState } from 'react';
import { Container } from './styles';
import { Navbar } from 'components/Navbar';
import { InfoContainer } from 'components/InfoContainer';
import { InputLabel } from 'components/InputLabels';
import { Select, TextField } from 'components/Inputs';
import { PrimaryButton } from 'components/Buttons';
import { Checkbox } from 'components/Checkbox';
import addImageIcon from 'assets/add-img-icon.svg';

export const AnnouncePage = () => {
  const [title, setTitle] = useState<string>('');
  const [rentPeriod, setRentPeriod] = useState<string>('');
  const [rent, setRent] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const [street, setStreet] = useState<string>('');
  const [propertyNumber, setPropertyNumber] = useState<string>('');
  const [condominiumNumber, setCondominiumNumber] = useState<string>('');
  const [block, setBlock] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const [bedrooms, setBedrooms] = useState<number>(1);
  const [bathrooms, setBathrooms] = useState<number>(1);
  const [allowPets, setAllowPets] = useState<boolean>(false);
  const [hasGarage, setHasGarage] = useState<boolean>(false);
  const [shareWithSameGender, setShareWithSameGender] =
    useState<boolean>(false);
  const [furnished, setFurnished] = useState<boolean>(false);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = useCallback(
    ({ currentTarget: { files } }: React.FormEvent<HTMLInputElement>) => {
      if (files === null) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = ({ target }) => {
        if (target === null) return;
        setImageUrl(target.result as string);
        setImageFile(files[0]);
      };
    },
    [],
  );

  return (
    <>
      <Navbar />
      <Container>
        <InfoContainer id="main-container">
          <div className="room-data-container">
            <div className="input-group" id="room-image-input-group">
              <label htmlFor="image-input">Foto do quarto</label>
              <div>
                <div id="image-group">
                  <img
                    id="image"
                    src={imageUrl || addImageIcon}
                    alt="add image icon"
                  />
                </div>
                <input
                  type="file"
                  id="image-input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <h3>Dados do quarto</h3>
            <div className="title-input-group">
              <InputLabel htmlFor="title-input">Título</InputLabel>
              <TextField
                id="title-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="rent-period-input-group">
              <InputLabel htmlFor="rent=period-input">Período</InputLabel>
              <TextField
                id="rent=period-input"
                value={rentPeriod}
                onChange={e => setRentPeriod(e.target.value)}
              />
            </div>

            <div className="rent-period-input-group">
              <InputLabel htmlFor="rent=period-input">Valor (R$)</InputLabel>
              <TextField
                id="rent=period-input"
                type="number"
                min={0}
                value={rent}
                onChange={e => setRent(e.target.value)}
              />
            </div>
            <div className="description-input-group">
              <InputLabel htmlFor="description-input">Descrição</InputLabel>
              <textarea
                id="description-input"
                rows="4"
                cols="50"
                style={{ resize: 'none' }}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
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
                  <TextField
                    id="street-input"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
                </div>
                <div className="number-input-group">
                  <InputLabel htmlFor="number-input">N°</InputLabel>
                  <TextField
                    id="number-input"
                    value={propertyNumber}
                    onChange={e => setPropertyNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="second-line-address">
                <div className="condominium-input-group">
                  <InputLabel htmlFor="condominium-input">
                    Condomínio
                  </InputLabel>
                  <TextField
                    id="condominium-input"
                    value={condominiumNumber}
                    onChange={e => setCondominiumNumber(e.target.value)}
                  />
                </div>

                <div className="block-input-group">
                  <InputLabel htmlFor="block-input">Quadra</InputLabel>
                  <TextField
                    id="block-input"
                    value={block}
                    onChange={e => setBlock(e.target.value)}
                  />
                </div>
                <div className="complement-input-group">
                  <InputLabel htmlFor="complement-input">
                    Complemento
                  </InputLabel>
                  <TextField
                    id="complement-input"
                    value={complement}
                    onChange={e => setComplement(e.target.value)}
                  />
                </div>
              </div>
              <div className="third-line-address">
                <div className="district-input-group">
                  <InputLabel htmlFor="district-input">Bairro</InputLabel>
                  <TextField
                    id="district-input"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                  />
                </div>
                <div className="cep-input-group">
                  <InputLabel htmlFor="cep-input">CEP</InputLabel>
                  <TextField
                    id="cep-input"
                    value={zipCode}
                    onChange={e => setZipCode(e.target.value)}
                  />
                </div>
                <div className="city-input-group">
                  <InputLabel htmlFor="city-input">Cidade</InputLabel>
                  <TextField
                    id="city-input"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>
                <div className="state-input-group">
                  <InputLabel htmlFor="state-input">Estado</InputLabel>
                  <TextField
                    id="state-input"
                    value={state}
                    onChange={e => setState(e.target.value)}
                  />
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
                    <TextField
                      id="bedrooms-input"
                      type="number"
                      min={1}
                      value={bedrooms}
                      onChange={e => setBedrooms(e.target.value)}
                    />
                  </div>
                  <div className="bathrooms-input-group">
                    <InputLabel htmlFor="bathrooms-input">Banheiros</InputLabel>
                    <TextField
                      id="bathrooms-input"
                      type="number"
                      min={1}
                      value={bathrooms}
                      onChange={e => setBathrooms(e.target.value)}
                    />
                  </div>
                </div>
                <div className="second-line-aspects">
                  <div className="gender-input-group">
                    <Checkbox
                      label="Dividir (mesmo gênero)"
                      checked={shareWithSameGender}
                      onChange={e => {
                        setShareWithSameGender(e.target.value);
                      }}
                    />
                  </div>
                  <div className="allow-pets-input-group">
                    <Checkbox
                      label="Permitir pets"
                      checked={allowPets}
                      onChange={e => {
                        setAllowPets(e.target.value);
                      }}
                    />
                  </div>
                  <div className="furnished-input-group">
                    <Checkbox
                      label="Mobiliado"
                      checked={furnished}
                      onChange={e => {
                        setFurnished(e.target.value);
                      }}
                    />
                  </div>
                  <div className="garage-input-group">
                    <Checkbox
                      label="Garagem"
                      checked={hasGarage}
                      onChange={e => {
                        setHasGarage(e.target.value);
                      }}
                    />
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
