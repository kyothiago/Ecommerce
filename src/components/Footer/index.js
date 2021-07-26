import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrapper } from './styles/FooterWrapper';

export default function Footer(props) {
  return (
    <FooterWrapper>
      <a href="https://www.linkedin.com/in/thiago-oberle-92401821">
        Criado por Thiago Oberle para o desafio da Hiring Coders.
      </a>
    </FooterWrapper>
  );
}