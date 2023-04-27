import { LoginAndRegisterWrapper } from 'components/LoginAndRegisterWrapper';
import RegisterBackgroundImageUrl from '../../assets/signup-background.jpg';

export const StepTwoRegister = () => {
  return (
    <>
      <LoginAndRegisterWrapper
        imgUrl={RegisterBackgroundImageUrl}
      ></LoginAndRegisterWrapper>
    </>
  );
};
