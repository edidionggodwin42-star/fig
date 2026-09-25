import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Atom } from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { featuredProjects, skills } from '../data/portfolioData';

type HomeProps = {
  navigate: (page: string) => void;
};

export const Home = ({ navigate }: HomeProps) => (
  <div className="space-y-32">
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-12">
      <div className="lg:w-1/2 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">
          Hello, I'm
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Edidiong <span className="text-[#5D5FEF]">Godwin</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200">
          Frontend Developer
        </h2>

        <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
          I build modern, responsive and user-friendly websites that bring ideas to life. I love turning design into functional code.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button onClick={() => navigate('projects')}>
            View My Projects <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="outline" onClick={() => navigate('contact')}>
            Contact Me
          </Button>
        </div>

        <div className="flex gap-6 pt-8">
          {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
            <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center relative">
        <div className="relative w-72 h-96 md:w-80 md:h-[450px]">
          <div className="absolute inset-0 bg-[#5D5FEF] rounded-t-full rounded-bl-3xl rounded-br-[100px] transform rotate-3 scale-105 opacity-90"></div>
          <div className="absolute inset-0 bg-slate-800 rounded-t-full rounded-bl-3xl rounded-br-[100px] overflow-hidden border-4 border-[#0B1120]">
            <img
              src="/images/edex12.jpeg"
              alt="Edidiong Godwin portrait"
              className="w-full h-full object-cover object-center grayscale"
            />
          </div>

          <div className="absolute -top-12 -left-16 md:-left-24 transform -rotate-12">
            <p className="font-handwriting text-slate-300 text-sm md:text-base whitespace-nowrap">
              Building
              <br />
              Better Web
              <br />
              Experiences
            </p>
            <svg className="w-12 h-12 text-[#5D5FEF] mt-2 ml-4 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section>
      <SectionHeading title="My Skills" subtitle="TECH STACK" />
      <p className="text-slate-400 mb-8 max-w-2xl">
        I work with modern technologies to build fast, scalable and beautiful web applications.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-slate-600 transition-colors"
          >
            <div className={skill.color}>{skill.icon}</div>
            <span className="text-slate-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>

    <section>
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-[#5D5FEF] text-xs font-bold tracking-widest uppercase mb-2">
            SOME OF MY WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        </div>
        <button
          onClick={() => navigate('projects')}
          className="hidden md:flex items-center text-slate-300 hover:text-white transition-colors"
        >
          View all projects <ArrowRight size={18} className="ml-2" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <button
        onClick={() => navigate('projects')}
        className="md:hidden mt-8 flex items-center justify-center w-full text-slate-300 hover:text-white transition-colors"
      >
        View all projects <ArrowRight size={18} className="ml-2" />
      </button>
    </section>

    <section className="bg-gradient-to-r from-[#5D5FEF]/20 to-slate-900 border border-[#5D5FEF]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-[#5D5FEF] rounded-2xl flex items-center justify-center shrink-0">
          <Atom className="text-white w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Let's work together!</h3>
          <p className="text-slate-400">I'm always open to new opportunities and exciting projects.</p>
        </div>
      </div>
      <Button onClick={() => navigate('contact')} className="w-full md:w-auto whitespace-nowrap">
        Contact Me <ArrowRight size={18} className="ml-2" />
      </Button>
    </section>
  </div>
);

export default Home;
