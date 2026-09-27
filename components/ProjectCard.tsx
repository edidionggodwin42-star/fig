import { ExternalLink, MonitorPlay, Youtube, ShoppingBag, PanelsTopLeft } from 'lucide-react';

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
        {project.title.toLowerCase().includes('youtube') ? (
          <Youtube className="text-red-600 w-16 h-16" strokeWidth={2.5} aria-label="YouTube" />
        ) : project.title.toLowerCase().includes('spotify') ? (
          <svg
            className="w-16 h-16 text-[#1DB954]"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="img"
            aria-label="Spotify"
          >
            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.83-1.73-6.4-2.12-10.6-1.16a.75.75 0 1 1-.34-1.46c4.6-1.05 8.55-.6 11.72 1.34.36.22.47.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.24-1.99-8.18-2.56-12.01-1.4a.94.94 0 1 1-.55-1.8c4.38-1.33 9.82-.69 13.54 1.59.44.27.58.85.31 1.3Zm.13-3.4c-3.88-2.3-10.29-2.51-14-1.39a1.13 1.13 0 1 1-.65-2.16c4.26-1.29 11.34-1.04 15.81 1.61a1.13 1.13 0 0 1-1.16 1.94Z" />
          </svg>
        ) : project.title.toLowerCase().includes('e-commerce') ? (
          <ShoppingBag className="text-amber-400 w-16 h-16" strokeWidth={1.8} aria-label="E-commerce" />
        ) : project.title.toLowerCase().includes('landing page') ? (
          <PanelsTopLeft className="text-[#5D5FEF] w-16 h-16" strokeWidth={1.8} aria-label="Landing page" />
        ) : (
          <MonitorPlay className="text-slate-500 w-12 h-12" />
        )}
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
