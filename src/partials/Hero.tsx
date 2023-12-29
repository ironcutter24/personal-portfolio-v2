import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

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
          I'm Damiano Tagliaferri, a{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            software developer
          </a>{' '}
          and{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            game dev generalist
          </a>{' '}
          who loves to design and develop interactive experiences. My main
          skills are C# / C++ for Unity and Unreal.
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
          <a href="/">
            <HeroSocial
              src="/assets/images/icons/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/icons/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
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
