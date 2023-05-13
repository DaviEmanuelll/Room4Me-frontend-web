import Navbar from 'components/Navbar';
import { Container } from './styles';
import FiltersBar from 'components/FiltersBar';

export const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <FiltersBar />
      </Container>
    </>
  );
};
