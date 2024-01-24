import { Newsletter, Section } from 'astro-boilerplate-components';

import { GradientText } from './GradientText';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Get juicy updates on what I'm up to!"
    />
  </Section>
);

export { CTA };
