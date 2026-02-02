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
  <div className="group bg-main-bg border border-gray-200/50 dark:border-gray-700/50 rounded-lg px-4 py-3 mb-3 mr-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary-bg/20 hover:scale-105 hover:border-primary-bg/50">
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-primary group-hover:text-primary-bg transition-colors duration-300">
        {title}
      </span>
    </div>
  </div>
);

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className="mb-10 last:mb-0">
    <h3 className="text-xl font-semibold text-primary mb-4 relative">
      {title}
      <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary-bg rounded-full"></div>
    </h3>
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
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4 relative inline-block">
          {heading}
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-primary-bg to-primary-bg/50 rounded-full"></div>
        </h2>
        <p className="text-primary/70 text-lg">
          Technologies and tools I work with to build amazing projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <SkillGroup title="CSS Frameworks" skills={frontend?.css_frameworks || []} />
          <SkillGroup title="JS Frameworks" skills={frontend?.js_frameworks || []} />
          <SkillGroup title="CMS" skills={cms || []} />
          <SkillGroup title="Build dev tools" skills={build_dev_tools || []} />
        </div>

        <div className="space-y-8">
          <SkillGroup title="API Design Architectures" skills={api_design_architectures || []} />
          <SkillGroup title="Database Management" skills={database_management || []} />
          <SkillGroup title="Project Management" skills={project_management || []} />
          <SkillGroup title="Others" skills={others || []} />
        </div>
      </div>
    </div>
  );
};

export default BlockSkills;
