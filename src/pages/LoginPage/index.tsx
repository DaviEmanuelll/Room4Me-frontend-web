import { Container } from './styles';
import { MainContainer } from './styles';
import { useState } from 'react';
import loginBackgroundImageUrl from 'assets/login-background.png';
import { InfoContainer } from 'components/InfoContainer';
import { LoginAndRegisterWrapper } from 'components/LoginAndRegisterWrapper';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { TextFieldLabel } from 'components/TextFieldLabel';

export const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [keepConnected, setKeepConnected] = useState<boolean>(false);

  function handleSubmit() {
    if (email === '' || email === undefined) {
      setEmailErrorMessage('Preencha o campo de email');
      setEmailError(true);
    } else if (email.indexOf('@') === -1) {
      setEmailErrorMessage('O email digitado não é válido');
      setEmailError(true);
    } else {
      setEmailErrorMessage('');
      setEmailError(false);
    }

    if (password === '' || password === undefined) {
      setPasswordErrorMessage('Preencha o campo de senha');
      setPasswordError(true);
    } else if (password.length < 8) {
      setPasswordErrorMessage('A senha deve conter pelo menos 8 caracteres');
      setPasswordError(true);
    } else {
      setPasswordErrorMessage('');
      setPasswordError(false);
    }
  }

  return (
    <>
      <LoginAndRegisterWrapper imgUrl={loginBackgroundImageUrl}>
        <MainContainer>
          <InfoContainer>
            <main>
              <div className="header">
                <img src={nameLogo} alt="Logo Room4Me" id="logo" />
                <h2>Acesse sua conta</h2>
                <a id="create-new-account" href="#">
                  ou crie uma nova
                </a>
              </div>
              <div className="input-group">
                <div id="email-group">
                  <TextFieldLabel
                    htmlFor="email-textfield"
                    style={{ color: emailError ? '#ff0033' : '' }}
                  >
                    Email*
                  </TextFieldLabel>
                  <TextField
                    type="text"
                    id="email-textfield"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    style={{ borderColor: emailError ? '#ff0033' : '' }}
                  />
                  <div className="span-area">
                    <span id="email-error-span">{emailErrorMessage}</span>
                  </div>
                </div>
                <div id="password-group">
                  <TextFieldLabel
                    htmlFor="password-textfield"
                    style={{ color: passwordError ? '#ff0033' : '' }}
                  >
                    Senha*
                  </TextFieldLabel>
                  <TextField
                    type="password"
                    id="password-textfield"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    style={{ borderColor: passwordError ? '#ff0033' : '' }}
                  />
                  <div className="span-area">
                    <span id="password-error-span">{passwordErrorMessage}</span>
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
