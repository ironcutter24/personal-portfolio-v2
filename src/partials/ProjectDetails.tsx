type IProjectDetailsProps = {
  role: string;
  company: string;
  platforms: string;
  time: string;
};

const ProjectDetails = (props: IProjectDetailsProps) => (
  <>
    <p>
      <b style={{ color: '#FCB711' }}>Role:</b> <i>{props.role}</i>
      <br />
      <b style={{ color: '#F37021' }}>Company:</b> <i>{props.company}</i>
      <br />
      <b style={{ color: '#0089D0' }}>Platforms:</b> <i>{props.platforms}</i>
      <br />
      <b style={{ color: '#0DB14B' }}>Work time:</b> <i>{props.time}</i>
      <br />
    </p>
  </>
);

export { ProjectDetails };
