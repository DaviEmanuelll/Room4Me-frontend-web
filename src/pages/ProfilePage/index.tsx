import ProfileImage from 'assets/img/profileImage.png';
import CallIcon from 'assets/img/call-icon.png';
import MesageIcon from 'assets/img/mesage-icon.png';
import AlternateIcon from 'assets/img/call-icon.png';
import MailIcon from 'assets/img/call-icon.png';

import { useState } from 'react';
import { Container } from './styles';
import { Navbar } from 'components/Navbar';
import { InfoContainer } from 'components/InfoContainer';
import { InputLabel } from 'components/InputLabels';
import { Select, TextField } from 'components/Inputs';
import { PrimaryButton } from 'components/Buttons';

export const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <Container>
      <section id="header">
            <img id="image-profile" src={ProfileImage} alt="">
            <div id="heading">
                <span id="user-name">
                    Nome
                </span>
                <span id="user-gender">Genero</span>
            </div>
            <div id="user-data">
                <label className="title">Descrição</label>
                <span>Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </span>
                <div id="user-contact">
                    <label className="title">Dados para contato</label>
                    <div className="line">
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Ligação</label>
                                <img className="contact-image" src= {CallIcon}  alt="Icone telefone">
                            </div>
                            <span>+55 84 98747-6062</span>
                        </div>
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Instagram</label>
                                <img className="contact-image" src="../../img/alternate_icon.png" alt="Icone telefone">
                            </div>
                            <span>daviemanuel</span>
                        </div>
                    </div>
                    <div className="line">
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Mensagem</label>
                                <img className="contact-image" src={MesageIcon} alt="Icone telefone">
                            </div>
                            <span>+55 84 98747-6062</span>
                        </div>
                        <div className="in-line">
                            <div className="contact">
                                <label className="contact-name">Email</label>
                                <img className="contact-image" src={MailIcon} alt="Icone telefone">
                            </div>
                            <span>davi@gmail.com</span>
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
