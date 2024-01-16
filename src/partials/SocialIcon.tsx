type ISocialIconProps = {
  src: string;
  alt: string;
  href: string;
  color?: string;
};

const SocialIcon = (props: ISocialIconProps) => (
  <a
    className="relative ml-2 inline-flex items-center justify-center hover:translate-y-1"
    href={props.href}
  >
    <svg className="h-9 w-9" viewBox="0 0 160 160" fill={props.color}>
      <path
        d="M 0 80 C 0 20, 20 0, 80 0 S 160 20, 160 80, 140 160 80 160, 0 140, 0 80"
        transform="rotate(0, 80, 80) translate(0, 0)"
      ></path>
    </svg>
    <img
      style={{
        filter: 'invert(100%) drop-shadow(6px 6px 10px #000)',
      }}
      className="absolute h-6 w-6"
      src={props.src}
      alt={props.alt}
      loading="lazy"
    />
  </a>
);

export default SocialIcon;
