import React from 'react';
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiOutlineWhatsApp,
} from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

import User from './../assets/user.svg';
import './../styles/components/info-geral.scss';

function InfoGeral() {
    return (
        <section className="info-pessoa">
            <div className="row informacoes">
                <div className="col-auto">
                    <div className="img-pessoa">
                        <img src={User} />
                    </div>
                </div>
                <div className="col">
                    <div className="nome">Junior Anzolin</div>
                    <div className="empresa">Acme inc</div>
                    <div className="status">Ativo</div>
                </div>
            </div>
            <div className="row contato">
                <div className="col-auto icon">
                    <FaPhoneAlt />
                </div>
                <div className="col">
                    <div className="value">45 9 8404 9324</div>
                    <div className="label">Celular</div>
                </div>
            </div>
            <div className="row contato">
                <div className="col-auto icon">
                    <IoMdMail />
                </div>
                <div className="col">
                    <div className="value">junioranzolin58@gmail.com</div>
                    <div className="label">Trabalho</div>
                </div>
            </div>
            <div className="row redes">
                <div className="item">
                    <AiOutlineWhatsApp />
                </div>
                <div className="item">
                    <AiFillFacebook />
                </div>
                <div className="item">
                    <AiOutlineInstagram />
                </div>
                <div className="item">
                    <AiOutlineTwitter />
                </div>
                <div className="item">
                    <AiFillLinkedin />
                </div>
            </div>
        </section>
    );
}

export default InfoGeral;
