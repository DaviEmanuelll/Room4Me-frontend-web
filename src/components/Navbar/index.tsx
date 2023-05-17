import './styles.css';
import Room4MeWrittenLogo from 'assets/logo-name.svg';
import Room4MeLogo from 'assets/logo.png';

import { PrimaryButton } from 'components/Buttons';
import { useAuth } from 'hooks/auth';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { userData } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="room4me-logo">
        <img
          src={isMobile ? Room4MeLogo : Room4MeWrittenLogo}
          alt="Room4Me logo"
        />
      </div>
      <ul
        className="nav-links"
        style={{
          gap: isMobile ? '8px' : '40px',
          margin: isMobile ? '0px' : '0px 30px',
        }}
      >
        <li>
          <a href="#">Procurar quarto</a>
        </li>
        <li>
          <a href="#">Anunciar quarto</a>
        </li>
      </ul>
      <div className="login-container">
        {userData === null ? (
          <PrimaryButton type="button">Entrar</PrimaryButton>
        ) : (
          <>
            {userData.avatarLink ? (
              <img
                src={userData.avatarLink}
                alt="Foto de perfil"
                id="user-profile-image"
              />
            ) : (
              <img src={''} alt="Foto de perfil" id="user-profile-image" />
            )}
            <label
              htmlFor="user-profile-image"
              style={{ display: isMobile ? 'none' : '' }}
            >
              {userData.name}
            </label>
          </>
        )}
      </div>
    </nav>
  );
};
