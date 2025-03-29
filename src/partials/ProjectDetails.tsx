import { GradientText } from './GradientText';

type IProjectDetailsProps = {
  role: string;
  company: string;
  platforms: string[];
  time: string;
};

const ProjectDetails = (props: IProjectDetailsProps) => (
  <>
    <hr className="mb-4 mt-8"></hr>
    <div
      className="grid grid-cols-2 gap-0 overflow-visible font-bold"
      style={{ gridTemplateColumns: '7em 1fr' }}
    >
      <GradientText>Role</GradientText>
      <i>{props.role}</i>

      <GradientText>Company</GradientText>
      <i>{props.company}</i>

      <GradientText>Platforms</GradientText>
      <i>{props.platforms.join(' - ')}</i>

      <GradientText>Work time</GradientText>
      <i>{props.time}</i>
    </div>
    <hr className="mb-8 mt-4"></hr>
  </>
);

export { ProjectDetails };
