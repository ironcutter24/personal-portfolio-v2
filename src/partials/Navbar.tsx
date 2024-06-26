import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

import { GradientLogo } from './GradientLogo';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <GradientLogo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          }
          name="Damiano Tagliaferri"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Projects</NavMenuItem>
        <NavMenuItem href="https://github.com/ironcutter24">GitHub</NavMenuItem>
        <NavMenuItem href="https://ironcutter24.itch.io">itch.io</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
