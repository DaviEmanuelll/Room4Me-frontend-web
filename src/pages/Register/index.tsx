import registerBackgroundImageUrl from 'assets/signup-background.jpg';
import nameLogo from 'assets/logo-name.svg';
import addImageIcon from 'assets/add-img-icon.svg';
import stepOneIcon from 'assets/signup-state-one.svg';
import stepTwoIcon from 'assets/signup-state-two.svg';

import { MainContainer } from './styles';
import { useCallback, useState } from 'react';
import { OutlinedButton, PrimaryButton } from 'components/Buttons';
import { InfoContainer } from 'components/InfoContainer';
import { LoginAndRegisterWrapper } from 'components/LoginAndRegisterWrapper';
import { Select, TextField } from 'components/Inputs';
import { InputLabel } from 'components/InputLabels';

import * as yup from 'yup';
import { Gender } from 'types/Gender';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');

  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [gender, setGender] = useState<Gender>('Male');

  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);

  const handleImageChange = ({
    currentTarget: { files },
  }: React.FormEvent<HTMLInputElement>) => {
    if (files === null) return;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = ({ target }) => {
      if (target === null) return;
      setImageUrl(target.result as string);
    };
  };

  const handleFirstStepSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Preencha o campo de email')
        .email('O email deve ser um endereço válido'),
      password: yup
        .string()
        .required('Preencha o campo de senha')
        .min(8, 'A senha deve conter pelo menos 8 caracteres'),
      passwordConfirmation: yup
        .string()
        .required('Preencha o campo de confirmação de senha')
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
    });

    try {
      await schema.validate(
        {
          email,
          password,
          passwordConfirmation,
        },
        { abortEarly: false },
      );
      setIsFirstStepComplete(true);
    } catch (error) {
      const errorStates = {
        email: setEmailError,
        password: setPasswordError,
        passwordConfirmation: setPasswordConfirmationError,
      };
      const parsedError = error as yup.ValidationError;

      const keysAlreadyVisited: string[] = [];
      parsedError.inner.forEach(({ path, message }) => {
        const key = path as keyof typeof errorStates;
        if (keysAlreadyVisited.includes(key)) return;

        errorStates[key](message);
        keysAlreadyVisited.push(key);
      });
    }
  }, [email, password, passwordConfirmation]);

  const handleSecondStepSubmit = useCallback(async () => {
    const schema = yup.object().shape({
      name: yup.string().required('Preencha o campo de nome'),
    });

    try {
      await schema.validate({ name }, { abortEarly: false });
    } catch (error) {
      const parsedError = error as yup.ValidationError;
      setNameError(parsedError.message);
    }
  }, [name]);

  const renderFirstStepRegistration = (
    <LoginAndRegisterWrapper imageUrl={registerBackgroundImageUrl}>
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
                  onChange={({ target: { value } }) => {
                    setPasswordConfirmation(value);
                    setPasswordConfirmationError('');
                  }}
                  style={{
                    borderColor: passwordConfirmationError ? '#ff0033' : '',
                  }}
                />
                <div className="span-area">
                  <span id="password-confirmation-error-span">
                    {passwordConfirmationError}
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
    <LoginAndRegisterWrapper imageUrl={registerBackgroundImageUrl}>
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
                  onChange={({ target: { value } }) => {
                    setName(value);
                    setNameError('');
                  }}
                  style={{ borderColor: nameError ? '#ff0033' : '' }}
                />
                <div className="span-area">
                  <span id="name-error-span">{nameError}</span>
                </div>
              </div>
            </div>
            <div className="input-group">
              <div id="gender-group">
                <InputLabel htmlFor="gender-select">Gênero*</InputLabel>
                <Select
                  id="gender-select"
                  value={gender}
                  onChange={({ target: { value } }) =>
                    setGender(value as Gender)
                  }
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
