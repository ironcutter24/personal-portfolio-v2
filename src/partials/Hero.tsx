import { HeroAvatar, Section } from 'astro-boilerplate-components';

import { GradientText } from './GradientText';
import SocialIcon from './SocialIcon';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Damiano</GradientText> 👋
        </>
      }
      description={
        <>
          a passionate <b>gameplay / AI programmer</b> and{' '}
          <b>technical game designer</b> dedicated to crafting immersive
          interactive experiences.
          <br />
          Proficient in <b>C#</b>, with expertise in <b>Unity</b>, <b>UE5</b>{' '}
          and <b>Godot</b>.
        </>
      }
      avatar={
        <img
          className="size-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <SocialIcon
            src="/assets/images/icons/fi-brands-linkedin.svg"
            alt="LinkedIn icon"
            href="https://www.linkedin.com/in/taglia24/"
            color="#019CE8"
          />
          <SocialIcon
            src="/assets/images/icons/fi-brands-github.svg"
            alt="GitHub icon"
            href="https://github.com/ironcutter24"
            color="#9132AD"
          />
          <SocialIcon
            src="/assets/images/icons/itchio-logo-textless-black.png"
            alt="itch.io icon"
            href="https://ironcutter24.itch.io"
            color="#fa5c5c"
          />

          {/*
          <SocialIcon
            src="/assets/images/icons/mail-logo-black.png"
            alt="eMail icon"
            href=""
            color="#6AC4F7"
          />
          <SocialIcon
            src="/assets/images/icons/fi-brands-youtube.svg"
            alt="YouTube icon"
            href="https://www.youtube.com/@ironcutter-dev"
            color="#FF0000"
          />
          */}
        </>
      }
    />
  </Section>
);

export { Hero };
