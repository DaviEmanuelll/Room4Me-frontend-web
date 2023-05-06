import './styles.css';
import Room4MeWrittenLogo from 'assets/logo-name.svg';
import Room4MeLogo from 'assets/logo.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
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

  const renderNavbar = (
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
        <li id="search-for-rooms">
          <a href="#">Procurar quarto</a>
        </li>
        <li id="announce-a-room">
          <a href="#">Anunciar quarto</a>
        </li>
      </ul>
      <div className="login-container">
        {/*<PrimaryButton>Entrar</PrimaryButton>*/}
        <img src="" alt="" id="user-profile-image" />
        <label
          htmlFor="user-profile-image"
          style={{ display: isMobile ? 'none' : '' }}
        >
          Lucas Paulino
        </label>
      </div>
    </nav>
  );
  return <>{renderNavbar}</>;
};

export default Navbar;
