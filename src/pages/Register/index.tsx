import { MainContainer } from './styles';
import { useState } from 'react';
import registerBackgroundImageUrl from 'assets/signup-background.jpg';
import nameLogo from 'assets/logo-name.svg';
import addImageIcon from 'assets/add-img-icon.svg';
import stepOneIcon from 'assets/signup-state-one.svg';
import stepTwoIcon from 'assets/signup-state-two.svg';
import { OutlinedButton, PrimaryButton } from 'components/Buttons';
import { InfoContainer } from 'components/InfoContainer';
import { LoginAndRegisterWrapper } from 'components/LoginAndRegisterWrapper';
import { Select, TextField } from 'components/Inputs';
import { InputLabel } from 'components/InputLabels';

export const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState<boolean>(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');
  const [
    passwordConfirmationErrorMessage,
    setPasswordConfirmationErrorMessage,
  ] = useState<string>('');

  const [imageUrl, setImageUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const [profileImageUrlErrorMessage, setProfileImageUrlErrorMessage] =
    useState<string>('');
  const [nameErrorMessage, setNameErrorMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);

  //lembrar de deixar false
  const [isFirstStepComplete, setIsFirstStepComplete] =
    useState<boolean>(false);

  function handleImageChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = event => {
      const image = event.target.result;
      setImageUrl(image);
    };
  }

  function handleFirstStepSubmit() {
    let isValidFirstStep = true;

    if (email === '' || email === undefined) {
      isValidFirstStep = false;
      setEmailErrorMessage('Preencha o campo de email');
      setEmailError(true);
    } else if (email.indexOf('@') === -1) {
      isValidFirstStep = false;
      setEmailErrorMessage('O email deve ser um endereço válido');
      setEmailError(true);
    } else {
      setEmailErrorMessage('');
      setEmailError(false);
    }

    if (password === '' || password === undefined) {
      isValidFirstStep = false;
      setPasswordErrorMessage('Preencha o campo de senha');
      setPasswordError(true);
    } else if (password.length < 8) {
      isValidFirstStep = false;
      setPasswordErrorMessage('A senha deve conter pelo menos 8 caracteres');
      setPasswordError(true);
    } else {
      setPasswordErrorMessage('');
      setPasswordError(false);
    }

    if (passwordConfirmation === '' || passwordConfirmation === undefined) {
      isValidFirstStep = false;
      setPasswordConfirmationErrorMessage(
        'Preencha o campo de confirmação de senha',
      );
      setPasswordConfirmationError(true);
    } else if (passwordConfirmation.length < 8) {
      isValidFirstStep = false;
      setPasswordConfirmationErrorMessage(
        'A senha deve conter pelo menos 8 caracteres',
      );
      setPasswordConfirmationError(true);
    } else if (passwordConfirmation !== password) {
      isValidFirstStep = false;
      setPasswordConfirmationErrorMessage('As senhas devem ser iguais');
      setPasswordConfirmationError(true);
    } else {
      setPasswordConfirmationErrorMessage('');
      setPasswordConfirmationError(false);
    }

    if (isValidFirstStep) {
      setIsFirstStepComplete(true);
    }
  }

  function handleSecondStepSubmit() {
    if (name === '' || name === undefined) {
      setNameErrorMessage('Preencha o campo de nome');
      setNameError(true);
    } else if (name.length < 8) {
      setNameErrorMessage('O campo de nome deve conter no mínimo 8 caracteres');
      setNameError(true);
    } else {
      setNameErrorMessage('');
      setNameError(false);
    }
  }

  const renderFirstStepRegistration = (
    <LoginAndRegisterWrapper imgUrl={registerBackgroundImageUrl}>
      <MainContainer>
        <InfoContainer>
          <main>
            <div className="header">
              <img src={nameLogo} alt="Logo Room4Me" id="logo" />
              <div className="header-info">
                <h2>Crie sua conta</h2>
                <img src={stepOneIcon} alt="step one icon" />
              </div>
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
                  onChange={event => setEmail(event.target.value)}
                  style={{ borderColor: emailError ? '#ff0033' : '' }}
                />
                <div className="span-area">
                  <span id="email-error-span">{emailErrorMessage}</span>
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
                  onChange={event => setPassword(event.target.value)}
                  style={{ borderColor: passwordError ? '#ff0033' : '' }}
                />
                <div className="span-area">
                  <span id="password-error-span">{passwordErrorMessage}</span>
                </div>
              </div>
              <div id="password-confirmation-group">
                <InputLabel
                  htmlFor="password-confirmation-textfield"
                  style={{ color: passwordConfirmationError ? '#ff0033' : '' }}
                >
                  Confirme sua senha*
                </InputLabel>
                <TextField
                  type="password"
                  id="password-confirmation-textfield"
                  value={passwordConfirmation}
                  onChange={event =>
                    setPasswordConfirmation(event.target.value)
                  }
                  style={{
                    borderColor: passwordConfirmationError ? '#ff0033' : '',
                  }}
                />
                <div className="span-area">
                  <span id="password-confirmation-error-span">
                    {passwordConfirmationErrorMessage}
                  </span>
                </div>
              </div>
            </div>

            <PrimaryButton onClick={handleFirstStepSubmit}>
              Confirmar
            </PrimaryButton>
          </main>
        </InfoContainer>
      </MainContainer>
    </LoginAndRegisterWrapper>
  );

  const renderSecondStepRegistration = (
    <LoginAndRegisterWrapper imgUrl={registerBackgroundImageUrl}>
      <MainContainer>
        <InfoContainer style={{ height: '74%' }}>
          <main>
            <div className="header">
              <img src={nameLogo} alt="Logo Room4Me" id="logo" />
              <div className="header-info">
                <h2>Crie sua conta</h2>
                <img src={stepTwoIcon} alt="step one icon" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="profile-image-input">Foto de perfil</label>
              <div>
                <div id="profile-image-group">
                  <img
                    id="profile-image"
                    src={imageUrl || addImageIcon}
                    alt="add image icon"
                  />
                </div>
                <input
                  type="file"
                  id="profile-image-input"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="input-group">
              <div id="name-group">
                <InputLabel
                  htmlFor="name-textfield"
                  style={{
                    color: nameError ? '#ff0033' : '',
                  }}
                >
                  Nome*
                </InputLabel>
                <TextField
                  type="text"
                  id="name-textfield"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  style={{ borderColor: nameError ? '#ff0033' : '' }}
                />
                <div className="span-area">
                  <span id="name-error-span">{nameErrorMessage}</span>
                </div>
              </div>
            </div>
            <div className="input-group">
              <div id="gender-group">
                <InputLabel htmlFor="gender-select">Gênero*</InputLabel>
                <Select
                  id="gender-select"
                  onChange={event => setGender(event.target.value)}
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outro">Outro</option>
                </Select>
              </div>
            </div>

            <div className="buttons-group">
              <OutlinedButton onClick={() => setIsFirstStepComplete(false)}>
                Voltar
              </OutlinedButton>

              <PrimaryButton onClick={handleSecondStepSubmit}>
                Confirmar
              </PrimaryButton>
            </div>
          </main>
        </InfoContainer>
      </MainContainer>
    </LoginAndRegisterWrapper>
  );

  return (
    <>
      {isFirstStepComplete
        ? renderSecondStepRegistration
        : renderFirstStepRegistration}
    </>
  );
};
