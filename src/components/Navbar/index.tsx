import './styles.css';
import Room4MeWrittenLogo from 'assets/logo-name.svg';
import Room4MeLogo from 'assets/logo.png';

import { PrimaryButton } from 'components/Buttons';
import { useAuth } from 'hooks/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routesAddresses } from 'routes/routesAddresses';
import { UserWithoutPassword } from 'types/services';

export const Navbar = () => {
  const navigate = useNavigate();
  const { userData, signOut } = useAuth();
  const user = userData?.user ?? ({} as UserWithoutPassword);
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
      <button
        type="button"
        className="room4me-logo"
        onClick={() => navigate(routesAddresses.homePage)}
      >
        <img
          src={isMobile ? Room4MeLogo : Room4MeWrittenLogo}
          alt="Room4Me logo"
        />
      </button>
      <ul
        className="nav-links"
        style={{
          gap: isMobile ? '8px' : '40px',
          margin: isMobile ? '0px' : '0px 30px',
        }}
      >
        <li>
          <button
            type="button"
            onClick={() => navigate(routesAddresses.searchPage)}
          >
            Procurar quarto
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => navigate(routesAddresses.announcePage)}
          >
            Anunciar quarto
          </button>
        </li>
      </ul>
      <div className="login-container">
        {userData === null ? (
          <PrimaryButton
            type="button"
            onClick={() => navigate(routesAddresses.loginPage)}
          >
            Entrar
          </PrimaryButton>
        ) : (
          <>
            {user.avatarLink ? (
              <img
                src={user.avatarLink}
                alt="Foto de perfil"
                id="user-profile-image"
              />
            ) : (
              <div id="user-profile-image" />
            )}
            <button
              type="button"
              onClick={signOut}
              style={{ display: isMobile ? 'none' : '' }}
            >
              {user.name}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
