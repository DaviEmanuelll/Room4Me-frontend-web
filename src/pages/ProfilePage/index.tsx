import ProfileImage from 'assets/img/profileImage.png';
import CallIcon from 'assets/img/call-icon.png';
import MesageIcon from 'assets/img/mesage-icon.png';
import AlternateIcon from 'assets/img/alternate_icon.png';
import MailIcon from 'assets/img/mail-icon.png';

import { Container } from './styles';
import { Navbar } from 'components/Navbar';
import { useAuth } from 'hooks/auth';

export const ProfilePage = () => {
  const { userData } = useAuth();

  return (
    <>
      <Navbar />
      <Container>
        <section id="header">
          <img id="image-profile" src={ProfileImage} alt="" />
          <div id="heading">
            <span id="user-name">{userData?.user.name}</span>
            <span id="user-gender">{userData?.user.gender}</span>
          </div>
          <div id="user-data">
            <div id="user-contact">
              <label className="title">Dados para contato</label>
              <div className="line">
                <div className="in-line">
                  <div className="contact">
                    <label className="contact-name">Ligação</label>
                    <img
                      className="contact-image"
                      src={CallIcon}
                      alt="Icone telefone"
                    />
                  </div>
                  <span>(99)9.9999-9999</span>
                </div>
                <div className="in-line">
                  <div className="contact">
                    <label className="contact-name">Instagram</label>
                    <img
                      className="contact-image"
                      src={AlternateIcon}
                      alt="Icone telefone"
                    />
                  </div>
                  <span>(99)9.9999-9999</span>
                </div>
              </div>
              <div className="line">
                <div className="in-line">
                  <div className="contact">
                    <label className="contact-name">Mensagem</label>
                    <img
                      className="contact-image"
                      src={MesageIcon}
                      alt="Icone telefone"
                    />
                  </div>
                  <span>(99)9.9999-9999</span>
                </div>
                <div className="in-line">
                  <div className="contact">
                    <label className="contact-name">Email</label>
                    <img
                      className="contact-image"
                      src={MailIcon}
                      alt="Icone telefone"
                    />
                  </div>
                  <span>{userData?.user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
