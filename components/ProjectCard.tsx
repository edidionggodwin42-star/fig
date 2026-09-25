import { ExternalLink, MonitorPlay } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleProjectClick = () => {
    const subject = encodeURIComponent(`Project inquiry: ${project.title}`);
    const body = encodeURIComponent(`Hi Edidiong,\n\nI would like to discuss your ${project.title} project.`);
    window.location.href = `mailto:edidionggodwin42@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
  <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col group hover:border-slate-700 transition-colors">
    <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#5D5FEF] to-transparent mix-blend-overlay"></div>
      <div className="w-full h-full bg-slate-950/50 rounded-lg flex items-center justify-center border border-slate-700/50 relative z-10 shadow-xl group-hover:scale-105 transition-transform duration-500">
        <MonitorPlay className="text-slate-500 w-12 h-12" />
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={handleProjectClick}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label={`Email about ${project.title}`}
        >
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
