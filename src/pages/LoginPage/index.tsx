import { MainContainer } from './styles';
import { useCallback, useEffect, useState } from 'react';
import loginBackgroundImageUrl from 'assets/login-background.png';
import { InfoContainer } from 'components/InfoContainer';
import { LoginAndRegisterWrapper } from 'components/LoginAndRegisterWrapper';
import { TextField } from 'components/Inputs';
import { Checkbox } from 'components/Checkbox';
import { InputLabel } from 'components/InputLabels';
import nameLogo from 'assets/logo-name.svg';
import { PrimaryButton } from 'components/Buttons';
import { useAuth } from 'hooks/auth';
import { useNavigate } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';

import * as yup from 'yup';
import { createUserSession } from 'services/userServices';

export const LoginPage = () => {
  const { userData, setUserLocalData } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [keepConnected, setKeepConnected] = useState<boolean>(false);

  useEffect(() => {
    if (userData === null) return;
    navigate(routesAddresses.homePage);
  }, [navigate, userData]);

  const handleSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Preencha o campo de email')
        .email('O email deve ser um endereço válido'),
      password: yup.string().required('Preencha o campo de senha'),
    });

    try {
      await schema.validate(
        {
          email,
          password,
        },
        { abortEarly: false },
      );

      const userData = await createUserSession({ email, password });
      setUserLocalData(userData);
    } catch (error) {
      if (!(error instanceof yup.ValidationError)) {
        alert('Problema Inesperado!');
        return;
      }

      const errorStates = {
        email: setEmailError,
        password: setPasswordError,
      };

      const keysAlreadyVisited: string[] = [];
      error.inner.forEach(({ path, message }) => {
        const key = path as keyof typeof errorStates;
        if (keysAlreadyVisited.includes(key)) return;

        errorStates[key](message);
        keysAlreadyVisited.push(key);
      });
    }
  }, [email, password, setUserLocalData]);

  return (
    <>
      <LoginAndRegisterWrapper imageUrl={loginBackgroundImageUrl}>
        <MainContainer>
          <InfoContainer>
            <main>
              <div className="header">
                <img src={nameLogo} alt="Logo Room4Me" id="logo" />
                <h2>Acesse sua conta</h2>
                <a id="create-new-account" href="/register">
                  ou crie uma nova
                </a>
              </div>
              <div className="input-group">
                <div id="email-group">
                  <InputLabel
                    htmlFor="email-textfield"
                    style={{ color: emailError ? '#ff0033' : '' }}
                  >
                    Email*
                  </InputLabel>
                  <TextField
                    type="text"
                    id="email-textfield"
                    value={email}
                    onChange={({ target: { value } }) => {
                      setEmail(value);
                      setEmailError('');
                    }}
                    style={{ borderColor: emailError ? '#ff0033' : '' }}
                  />
                  <div className="span-area">
                    <span id="email-error-span">{emailError}</span>
                  </div>
                </div>
                <div id="password-group">
                  <InputLabel
                    htmlFor="password-textfield"
                    style={{ color: passwordError ? '#ff0033' : '' }}
                  >
                    Senha*
                  </InputLabel>
                  <TextField
                    type="password"
                    id="password-textfield"
                    value={password}
                    onChange={({ target: { value } }) => {
                      setPassword(value);
                      setPasswordError('');
                    }}
                    style={{ borderColor: passwordError ? '#ff0033' : '' }}
                  />
                  <div className="span-area">
                    <span id="password-error-span">{passwordError}</span>
                  </div>
                </div>
              </div>
              <div className="extra-options">
                <div id="keep-conected-group">
                  <Checkbox
                    label="Manter conectado"
                    checked={keepConnected}
                    onChange={setKeepConnected}
                  />
                </div>
                <div>
                  <a id="create-new-account" href="#">
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <PrimaryButton onClick={handleSubmit}>Entrar</PrimaryButton>
            </main>
          </InfoContainer>
        </MainContainer>
      </LoginAndRegisterWrapper>
    </>
  );
};
