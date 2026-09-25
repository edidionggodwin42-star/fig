import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { allProjects, projectFilters } from '../data/portfolioData';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter(
          (project) => project.category === activeFilter || project.tags.includes(activeFilter),
        );

  return (
    <div className="space-y-12 mt-12">
      <div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 mb-4">
          My Work
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h1>
        <p className="text-slate-400 max-w-2xl text-lg">
          Here are some of the projects I've worked on. Each project helped me improve my skills and build real-world experience.
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              activeFilter === filter
                ? 'bg-[#5D5FEF] text-white'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
