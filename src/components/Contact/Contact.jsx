import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Element } from 'react-scroll';
import Section from '../Section';

config.autoAddCss = false;

const Wrapper = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 4.5rem;
  transition: all 0.2s ease;
  bottom: 3rem;
  margin: 0rem 1rem;
`;

const Link = styled.a`
  color: var(--color-white);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    color: var(--color-primary);
    transform: scale(1.1);
  }
`;

const Contact = () => (
  <>
    <Element name="contact" />
    <Section title="contact" subTitle="You can find me at these places">
      <Wrapper>
        <Link
          href="https://t.me/BraisDev"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram Link"
        >
          <Icon icon={faTelegram} />
        </Link>
        <Link
          href="https://github.com/BraisC"
          target="_blank"
          rel="noreferrer"
          aria-label="Github Link"
        >
          <Icon icon={faGithub} />
        </Link>
        <Link
          href="https://www.instagram.com/braiscao.dev/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram Link"
        >
          <Icon icon={faInstagram} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/brais-cao-gonzalez/?locale=en_US"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin Link"
        >
          <Icon icon={faLinkedin} />
        </Link>
        <Link
          href="mailto:braiscao.dev@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Mail Link"
        >
          <Icon icon={faEnvelopeSquare} />
        </Link>
      </Wrapper>
    </Section>
  </>
);
export default Contact;
