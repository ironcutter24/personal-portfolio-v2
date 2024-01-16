import { HeroAvatar, Section } from 'astro-boilerplate-components';

import { GradientText } from '@/partials/GradientText';
import SocialIcon from '@/partials/SocialIcon';

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
            src="/assets/images/icons/fi-brands-youtube.svg"
            alt="YouTube icon"
            href="https://www.youtube.com/@ironcutter-dev"
            color="#FF0000"
          />
        </>
      }
    />
  </Section>
);

export { Hero };
