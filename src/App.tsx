import { Routes } from 'routes';
import { GlobalStyle } from 'components/GlobalStyle';
import { AuthContext } from 'hooks/auth';

export const App = () => {
  return (
    <AuthContext>
      <GlobalStyle />
      <Routes />
    </AuthContext>
  );
};
