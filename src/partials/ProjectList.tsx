import { Section } from 'astro-boilerplate-components';

import { GradientText } from './GradientText';
import { Project } from './Project';
import { Shield } from './Shield';
import { ShieldFull } from './ShieldFull';

const ProjectList = () => (
  <Section
    title={
      <>
        Open <GradientText>Source</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Curly Formatter"
        description="VSCode extension that enforces Allman-style braces formatting across multiple languages, especially when the default formatter fails."
        link="https://marketplace.visualstudio.com/items?itemName=Ironcutter24.cscurlyformatter"
        category={
          <>
            <Shield url="VS%20Code%20Extension-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white" />
            <Shield url="Typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" />
            <ShieldFull url="https://img.shields.io/visual-studio-marketplace/d/Ironcutter24.cscurlyformatter?label=Downloads&style=flat" />
            <ShieldFull url="https://img.shields.io/visual-studio-marketplace/stars/Ironcutter24.cscurlyformatter?label=Rating&style=flat" />
          </>
        }
      />
      <Project
        name="TiledCS MonoGame example"
        description="Sample project demonstrating how to render Tiled maps in MonoGame using TiledCS, featured in the TiledCS repo README."
        link="https://github.com/ironcutter24/TiledCS-example-MonoGame"
        category={
          <>
            <Shield url="Example Project-%23239120.svg?style=flat&logoColor=white" />
            <Shield url="MonoGame-3.8.1-blue.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEcElEQVR4nOyaf0icdRzHX/fc+ePOs3ZT8AerraU2JkeeBFlWssgMFGoarGK4IlgxKmIsGhGNRZCQjCiI/ioSaQ02LUiYKawVGwalG4cyddiWKzWcTr1fqXfGx3TdbD7fx/PRm+HrD897no+f9/vz+Hm+3+fH14YCK1h2uCh+bCPlnlSKcuxsc1hJB7TpGcauhLjk9dNxepSTTVdpujZNQC/fBhuO8jTKS1w84U7BsymZLTYLtwORQJjhi0EudEzQ1jpC06lRzoRhRi+fZbEdGrArg5377+DwpmTcqkKFqQhjdYN8VPsbNQsLEeMH7uRgdSavJWizhpVcCeE90s+hY0M0RpZSwNZksj/O47PC2ygzIrSQ4Ul+fbuPl78Z5jv5/mQ6j7+3lU/TE7krlnzt4zS/2sOLfSF+X7jvPwWUbqT4kzxOOG1kxCIWTd0A78pndRbvLDeXb5qhfT1UtYxwJnr7DQWUuij+fDstVgv25QquBOEZgi90Udoy+m8R1wuQtmkuoN2MI7+SyH+i7ByFfSH+YO5cnf0hPX+rmxfEo3jV5r7Pfu7K4KlYT9h4IF7Fs/xukXG+7T7OGx0qZazu9NPxV4RQroNtGYnkLsfM0CS9vQEuJGkk56fgmZtjlMgQW/Qz99pkkjJi3h/m6geXOVA3SH0wwvT89kc2UHhoCx9ud/LwUox3+fjx8CVe/+Ea7fPb7Bq26kx2v7GZ2hQraXp/L57Fu6Xmbt7fk8VBlfmnvTx4zkfPzfY7rSQ0uGl2O9lhxLzXx6lKL2W+MFM321/gJO+4m7OqIr4YoEbzOClSCcqRX8y8IEZe6WbPVET/MoJ/ZuuAxC5mXhAt0VTlEu9ajoN79IKk56VtVMl6gvSfHOFLVZzESKwqTjRFWy9GvGuqk0ZO2Oie16Nt7MZZMtYYQTRFWy9GvMswmqAXFAgzYURQmJxh3IyYJWgnaEaT3aqsFxBv1guIN8p74qUwOsWfXX5aVDFG810Ocb7LT6pejGXgIf2b5tOjNDzTSZVR0dVmzbfQmi/A1HPgURcP7M3mLTNzqjC1gOwkskpcVJiZU8Wab6H1AuLNegHxZs0XYOowCkTkvt3EfFbVQTa1gPpBvq4fJNGsfF/lc6LERaVejKY6Yg6r/tXgSmJAe0pTPbrIT8Fj10xvNSWiKdp6MeJduxigWy/IYSW9OpPdpjtUIJqqRz7iXevw0aZK9uZmaguc5JnqUAfREk1VnHjXWkdoUgXaraQdd3P2pWyeX8l2ktyiIVp2xXNRQbzH/Hg9EMaH4hXoErA4rDhjebw++4rp2Qx2HsmlwSQzq8L+XiqPDtE4O0kcG6KxfZzmeJsyingVz/xvXvIJsmFfN1XhGYJxdaiDeBOP8+aZu9a4Tl+Ifq+f70tdlCdqOOPichHkyO/tpiL6HTELCxD6gvQ3DXPU4yQ/K4mcVXW5CNLzz3VS/ssEnQv3mbrYw2xiXuwRTdRymwpPKvdHLbcxe0Kbjlpu81PrCN8aWW7zdwAAAP//bJam1p3XAXAAAAAASUVORK5CYII=" />
            <Shield url="C%23-%23239120.svg?style=flat&logo=csharp&logoColor=white" />
          </>
        }
      />
      <Project
        name="C# State Machine"
        description="A flexible Finite State Machine with elegant syntax and support for hierarchical states."
        link="https://github.com/ironcutter24/cs-state-machine"
        category={
          <>
            <Shield url="Library-%23239120.svg?style=flat&logoColor=white" />
            <Shield url="C%23-%23239120.svg?style=flat&logo=csharp&logoColor=white" />
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
