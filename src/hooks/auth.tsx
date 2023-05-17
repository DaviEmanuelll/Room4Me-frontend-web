import {
  LOCAL_STORAGE_TOKEN_KEY,
  LOCAL_STORAGE_USER_KEY,
} from 'constants/localStorageKeys';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from 'services/api';
import { AuthenticatedUserData } from 'types/AuthenticatedUserData';
import { ServerError } from 'types/ServerError';
import { UserWithoutPassword } from 'types/services';

interface Props {
  children: React.ReactNode;
}

interface IAuthContext {
  userData: AuthenticatedUserData | null;
  setUserLocalData(userLocalData: AuthenticatedUserData): void;
  signOut(): void;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContext: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<AuthenticatedUserData | null>(null);

  const signOut = useCallback(() => {
    localStorage.clear();
    setUserData(null);

    api.defaults.headers.authorization = '';
    api.interceptors.response.use(
      response => response,
      error => {
        throw error;
      },
    );
  }, []);

  const setApiConfigurationForAuthenticatedUser = useCallback(
    (token: string) => {
      api.defaults.headers.authorization = `Bearer ${token}`;
      api.interceptors.response.use(
        response => response,
        (error: ServerError) => {
          const {
            response: {
              data: { status },
            },
          } = error;

          if (status === 401 || status === 403) {
            return new Promise(() => {
              signOut();
              alert('Seu Token expirou, por favor, faça login novamente');
            });
          }

          throw error;
        },
      );
    },
    [signOut],
  );

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (!user || !token) return;

    const parsedUser = JSON.parse(user) as UserWithoutPassword;
    const parsedToken = JSON.parse(token) as string;
    setUserData({ user: parsedUser, token: parsedToken });
    setApiConfigurationForAuthenticatedUser(parsedToken);
  }, [setApiConfigurationForAuthenticatedUser]);

  const setUserLocalData = useCallback(
    ({ user, token }: AuthenticatedUserData) => {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(token));
      setUserData({ user, token });
      setApiConfigurationForAuthenticatedUser(token);
    },
    [setApiConfigurationForAuthenticatedUser],
  );

  return (
    <authContext.Provider
      value={{
        userData,
        setUserLocalData,
        signOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = (): IAuthContext => useContext(authContext);

export { AuthContext, useAuth };
