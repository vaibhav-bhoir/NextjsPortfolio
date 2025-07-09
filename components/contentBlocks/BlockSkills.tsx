import React from 'react';

type Skill = {
  title: string;
  image_url?: string;
};

type SkillsData = {
  cms: Skill[];
  others: Skill[];
  frontend: {
    js_frameworks: Skill[];
    css_frameworks: Skill[];
  };
  build_dev_tools: Skill[];
  project_management: Skill[];
  database_management: Skill[];
  api_design_architectures: Skill[];
};

interface BlockSkillsProps {
  heading: string;
  skillGroups: SkillsData;
}

const SkillBadge = ({ title }: Skill) => (
  <div className="badge flex items-center gap-2 border rounded-full px-4 py-1 mb-2 mr-2">
    <span>{title}</span>
  </div>
);

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-lg font-medium mb-4">{title}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill, idx) => (
        <SkillBadge key={idx} {...skill} />
      ))}
    </div>
  </div>
);

const BlockSkills: React.FC<BlockSkillsProps> = ({ heading, skillGroups }) => {
  const {
    frontend,
    cms,
    database_management,
    api_design_architectures,
    build_dev_tools,
    project_management,
    others,
  } = skillGroups || {};

  if (!skillGroups) return null;

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-8">{heading}</h2>

      <SkillGroup title="CSS Frameworks" skills={frontend.css_frameworks} />
      <SkillGroup title="JS Frameworks" skills={frontend.js_frameworks} />
      <SkillGroup title="CMS" skills={cms} />
      <SkillGroup title="Build dev tools" skills={build_dev_tools} />
      <SkillGroup title="API Design Architectures" skills={api_design_architectures} />
      <SkillGroup title="Database Management" skills={database_management} />
      <SkillGroup title="Project Management" skills={project_management} />
      <SkillGroup title="Others" skills={others} />
    </div>
  );
};

export default BlockSkills;
