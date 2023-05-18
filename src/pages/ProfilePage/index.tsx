import ProfileImage from 'assets/img/profileImage.png';
import CallIcon from 'assets/img/call-icon.png';
import MesageIcon from 'assets/img/mesage-icon.png';
import AlternateIcon from 'assets/img/alternate_icon.png';
import MailIcon from 'assets/img/mail-icon.png';

import { useState } from 'react';
import { Container } from './styles';
import { Navbar } from 'components/Navbar';
import { InfoContainer } from 'components/InfoContainer';
import { InputLabel } from 'components/InputLabels';
import { Select, TextField } from 'components/Inputs';
import { PrimaryButton } from 'components/Buttons';
import { useAuth } from 'hooks/auth';

interface UserProps {
    name: string;
    gender: string;
    avatarLink: number;
    callNumber: string;
    whatsappNumber: string;
    instagram: string;
    email: string;
    favoriteProperties: number;
    announcedProperties: number;
}

export const ProfilePage = (props: UserProps) => {
    const {userData} = useAuth();

  return (
    <>
      <Navbar />
      <Container>
      <section id="header">
            <img id="image-profile" src={ProfileImage} alt=""/>
            <div id="heading">
                <span id="user-name">
                {props.name}
                </span>
                <span id="user-gender">{props.gender}</span>
            </div>
            <div id="user-data">
                <div id="user-contact">
                    <label className="title">Dados para contato</label>
                    <div className="line">
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Ligação</label>
                                <img className="contact-image" src= {CallIcon}  alt="Icone telefone"/>
                            </div>
                            <span>{props.callNumber}</span>
                        </div>
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Instagram</label>
                                <img className="contact-image" src= {AlternateIcon} alt="Icone telefone"/>
                            </div>
                            <span>{props.instagram}</span>
                        </div>
                    </div>
                    <div className="line">
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Mensagem</label>
                                <img className="contact-image" src={MesageIcon} alt="Icone telefone"/>
                            </div>
                            <span>{props.whatsappNumber}</span>
                        </div>
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Email</label>
                                <img className="contact-image" src={MailIcon} alt="Icone telefone"/>
                            </div>
                            <span>{props.email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="annouenced-rooms">
            <label>Anuciados</label>
        </section>
        <section id="favorites-rooms">
            <label>Favoritos</label>
        </section>
      </Container>
    </>
  );
};
