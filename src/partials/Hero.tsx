import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import { GradientText } from '@/partials/GradientText';

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
          a <span className="text-cyan-400">software engineer</span> and{' '}
          <span className="text-cyan-400">game dev generalist</span> who loves
          to design and develop interactive experiences. My main skills are C# /
          C++ for Unity and Unreal.
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          {/*
          <a href="/" target="_blank">
            <HeroSocial
              src="/assets/images/icons/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/" target="_blank">
            <HeroSocial
              src="/assets/images/icons/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          */}
          <a href="https://www.linkedin.com/in/taglia24/" target="_blank">
            <HeroSocial
              src="/assets/images/icons/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@ironcutter-dev" target="_blank">
            <HeroSocial
              src="/assets/images/icons/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
