import { InputLabel } from 'components/InputLabels';
import './styles.css';
import { Select, TextField } from 'components/Inputs';
import filterIcon from 'assets/filter-icon.svg';
import { Checkbox } from 'components/Checkbox';

interface FiltersBarProps {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  bedroomType: string;
  setBedroomType: React.Dispatch<React.SetStateAction<string>>;
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  bathrooms: number;
  setBathrooms: React.Dispatch<React.SetStateAction<number>>;
  shareRoom: string;
  setShareRoom: React.Dispatch<React.SetStateAction<string>>;
  shareWith: string;
  setShareWith: React.Dispatch<React.SetStateAction<string>>;
  allowPets: boolean;
  setAllowPets: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersBar = ({
  region,
  setRegion,
  orderBy,
  setOrderBy,
  bedroomType,
  setBedroomType,
  maxValue,
  setMaxValue,
  bedrooms,
  setBedrooms,
  bathrooms,
  setBathrooms,
  shareRoom,
  setShareRoom,
  shareWith,
  setShareWith,
  allowPets,
  setAllowPets,
}: FiltersBarProps) => {
  return (
    <div className="filters-bar-container">
      <main>
        <div className="search-container">
          <div className="input-group">
            <InputLabel>Região</InputLabel>
            <TextField placeholder="Mossoró, RN" />
          </div>
          <div className="input-group">
            <InputLabel>Ordenar por</InputLabel>
            <Select>
              <option value="Cheapest">Mais barato</option>
              <option value="Most expensive">Mais caro</option>
              <option value="Most recent">Mais recente</option>
              <option value="Oldest">Mais antigo</option>
            </Select>
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
            <Checkbox label="Apartamento" />
            <Checkbox label="Casa" />
            <Checkbox label="Condomínio" />
            <Checkbox label="Kitnet/Estúdio" />
          </div>
          <hr />
          <div className="max-value-group">
            <InputLabel htmlFor="max-value-input"> Valor</InputLabel>
            <Select id="max-value-input">
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
              <TextField id="bedrooms-input" type="number" min={1} />
            </div>
            <div className="bathrooms-input-group">
              <InputLabel htmlFor="bathrooms-input">Banheiros</InputLabel>
              <TextField id="bathrooms-input" type="number" min={1} />
            </div>
          </div>
          <hr />
          <div className="share-options-group">
            <div className="share-room-group">
              <InputLabel htmlFor="share-room-input">Dividir quarto</InputLabel>
              <Select id="share-room-input">
                <option value={'yes'}>Sim</option>
                <option value={'no'}>Não</option>
                <option value={'whatever'}>Não importa</option>
              </Select>
            </div>
            <div className="share-with-gender-group">
              <InputLabel htmlFor="share-with-gender-input">
                Dividir com
              </InputLabel>
              <Select id="share-with-gender-input">
                <option value={'same gender'}>Mesmo gênero</option>
                <option value={'whatever'}>Não importa</option>
              </Select>
            </div>
          </div>
          <Checkbox label="Permitir pets" />
        </div>
      </main>
    </div>
  );
};

export default FiltersBar;
