import Navbar from 'components/Navbar';
import { Container } from './styles';
import FiltersBar from 'components/FiltersBar';
import Card from 'components/Card';

export const SearchPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <FiltersBar />
        <main>
         
        </main>
      </Container>
    </>
  );
};
