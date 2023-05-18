import { InputLabel } from 'components/InputLabels';
import './styles.css';
import { Select, TextField } from 'components/Inputs';
import filterIcon from 'assets/filter-icon.svg';
import { Checkbox } from 'components/Checkbox';
import { useCallback, useEffect, useState } from 'react';
import { Property, PropertyTitle } from 'types/entities/property';
import { normalizeString } from 'utils/normalizeString';

interface FiltersBarProps {
  properties: Property[];
  setSearchedPropertiesIndexes: (indexes: number[]) => void;
}

type ShareOption = 'yes' | 'no' | 'whatever';

export const FiltersBar = ({
  properties,
  setSearchedPropertiesIndexes,
}: FiltersBarProps) => {
  const [region, setRegion] = useState('');

  const [titleFilters, setTitleFilters] = useState<PropertyTitle[]>([
    'Apartment',
    'Condominium',
    'House',
    'Kitnet',
  ]);

  const [maxValue, setMaxValue] = useState(500);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [shareRoom, setShareRoom] = useState<ShareOption>('yes');
  const [shareWithSameGenderOption, setShareWithSameGenderOption] =
    useState(true);
  const [allowPets, setAllowPets] = useState(true);

  const propertyCompliesSearchRequirements = useCallback(
    (property: Property) => {
      const { availableToShare } = property;
      const { city, state, country, street, district } = property.address;

      const parsedRegion = normalizeString(region);
      const isValidCity = normalizeString(city).includes(parsedRegion);
      const isValidState = normalizeString(state).includes(parsedRegion);
      const isValidCountry = normalizeString(country).includes(parsedRegion);
      const isValidStreet = normalizeString(street).includes(parsedRegion);
      const isValidDistrict = normalizeString(district).includes(parsedRegion);

      if (
        !isValidCity &&
        !isValidState &&
        !isValidCountry &&
        !isValidStreet &&
        !isValidDistrict
      ) {
        return false;
      }
      if (!titleFilters.includes(property.title)) return false;
      if (property.rent > maxValue) return false;

      const {
        bedroomsQuantity,
        bathroomsQuantity,
        shareWithSameGender,
        acceptAnimals,
      } = property.aspects;
      if (bedrooms > bedroomsQuantity) return false;
      if (bathrooms > bathroomsQuantity) return false;
      if (shareWithSameGenderOption !== shareWithSameGender) return false;

      if (shareRoom !== 'whatever') {
        const parsedShareRoom = shareRoom === 'yes';
        if (parsedShareRoom !== availableToShare) return false;
      }
      if (allowPets !== acceptAnimals) return false;

      return true;
    },
    [
      allowPets,
      bathrooms,
      bedrooms,
      maxValue,
      region,
      shareRoom,
      shareWithSameGenderOption,
      titleFilters,
    ],
  );

  useEffect(() => {
    const updatedSearchedPropertiesIndexes: number[] = [];
    properties.forEach((property, index) => {
      if (propertyCompliesSearchRequirements(property)) {
        updatedSearchedPropertiesIndexes.push(index);
      }
    });

    setSearchedPropertiesIndexes(updatedSearchedPropertiesIndexes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [properties, propertyCompliesSearchRequirements]);

  const handleChangeTitleFilters = useCallback(
    (title: PropertyTitle, active: boolean) => {
      if (active) {
        setTitleFilters(previousFilters => [...previousFilters, title]);
        return;
      }

      setTitleFilters(previousFilters =>
        previousFilters.filter(filter => filter !== title),
      );
    },
    [],
  );

  return (
    <div className="filters-bar-container">
      <main>
        <div className="search-container">
          <div className="input-group">
            <InputLabel>Região</InputLabel>
            <TextField
              placeholder="Mossoró, RN"
              onChange={({ target: { value } }) => setRegion(value)}
            />
          </div>
        </div>
        <div className="filters-container">
          <div className="header-group">
            <img src={filterIcon} alt="filter icon" />
            <h3>Filtros</h3>
            <hr />
          </div>
          <div className="bedroom-types-group">
            <h4>Tipo de quarto</h4>
            <Checkbox
              label="Apartamento"
              checked={titleFilters.includes('Apartment')}
              onChange={checked =>
                handleChangeTitleFilters('Apartment', checked)
              }
            />
            <Checkbox
              label="Casa"
              checked={titleFilters.includes('House')}
              onChange={checked => handleChangeTitleFilters('House', checked)}
            />
            <Checkbox
              label="Condomínio"
              checked={titleFilters.includes('Condominium')}
              onChange={checked =>
                handleChangeTitleFilters('Condominium', checked)
              }
            />
            <Checkbox
              label="Kitnet/Estúdio"
              checked={titleFilters.includes('Kitnet')}
              onChange={checked => handleChangeTitleFilters('Kitnet', checked)}
            />
          </div>
          <hr />
          <div className="max-value-group">
            <InputLabel htmlFor="max-value-input"> Valor</InputLabel>
            <Select
              id="max-value-input"
              value={maxValue}
              onChange={({ target: { value } }) => setMaxValue(Number(value))}
            >
              <option value={500}>até R$ 500</option>
              <option value={1000}>até R$ 1000</option>
              <option value={2000}>até R$ 2000</option>
              <option value={2500}>até R$ 2500</option>
            </Select>
          </div>
          <hr />
          <div className="bedrooms-bathrooms-group">
            <div className="bedrooms-input-group">
              <InputLabel htmlFor="bedrooms-input">N° quartos</InputLabel>
              <TextField
                id="bedrooms-input"
                type="number"
                value={bedrooms}
                onChange={({ target: { value } }) => setBedrooms(Number(value))}
                min={1}
              />
            </div>
            <div className="bathrooms-input-group">
              <InputLabel htmlFor="bathrooms-input">Banheiros</InputLabel>
              <TextField
                id="bathrooms-input"
                type="number"
                value={bathrooms}
                onChange={({ target: { value } }) =>
                  setBathrooms(Number(value))
                }
                min={1}
              />
            </div>
          </div>
          <hr />
          <div className="share-options-group">
            <div className="share-room-group">
              <InputLabel htmlFor="share-room-input">Dividir quarto</InputLabel>
              <Select
                id="share-room-input"
                onChange={({ target: { value } }) =>
                  setShareRoom(value as ShareOption)
                }
              >
                <option value={'yes'}>Sim</option>
                <option value={'no'}>Não</option>
                <option value={'whatever'}>Não importa</option>
              </Select>
            </div>
            <div className="share-with-gender-group">
              <InputLabel htmlFor="share-with-gender-input">
                Dividir com
              </InputLabel>
              <Select
                id="share-with-gender-input"
                value={
                  shareWithSameGenderOption ? 'same-gender' : 'different-gender'
                }
                onChange={({ target: { value } }) =>
                  setShareWithSameGenderOption(value === 'same-gender')
                }
              >
                <option value={'same-gender'}>Mesmo gênero</option>
                <option value={'different-gender'}>Gênero diferente</option>
              </Select>
            </div>
          </div>
          <Checkbox
            label="Permitir pets"
            checked={allowPets}
            onChange={setAllowPets}
          />
        </div>
      </main>
    </div>
  );
};
