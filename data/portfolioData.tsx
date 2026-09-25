import React from 'react';
import {
  Code2,
  Layout,
  Terminal,
  Atom,
  Wind,
  GitBranch,
  Github,
  MonitorPlay,
} from 'lucide-react';

export const skills = [
  { name: 'HTML', color: 'text-orange-500', icon: <Code2 size={32} /> },
  { name: 'CSS', color: 'text-blue-500', icon: <Layout size={32} /> },
  { name: 'JavaScript', color: 'text-yellow-400', icon: <Terminal size={32} /> },
  { name: 'React', color: 'text-cyan-400', icon: <Atom size={32} /> },
  {
    name: 'TypeScript',
    color: 'text-blue-600',
    icon: <div className="font-bold text-xl border-2 border-blue-600 px-1 rounded">TS</div>,
  },
  { name: 'Tailwind CSS', color: 'text-cyan-500', icon: <Wind size={32} /> },
  { name: 'Git', color: 'text-orange-600', icon: <GitBranch size={32} /> },
  { name: 'GitHub', color: 'text-white', icon: <Github size={32} /> },
];

export const featuredProjects = [
  {
    title: 'YouTube Clone',
    description: 'A YouTube clone built with React, TypeScript and the YouTube API.',
    tags: ['React', 'TypeScript', 'API'],
  },
  {
    title: 'Spotify Clone',
    description: 'A responsive Spotify front page built with React and plain CSS.',
    tags: ['React', 'CSS'],
  },
  {
    title: 'E-commerce Website',
    description: 'A simple e-commerce site for shoes and clothing (HTML & CSS).',
    tags: ['HTML', 'CSS'],
  },
];

export const projectFilters = ['All', 'React', 'HTML & CSS', 'JavaScript'];

export const allProjects = [
  {
    title: 'YouTube Clone',
    description: 'A YouTube clone built with React, TypeScript and the YouTube API.',
    tags: ['React', 'TypeScript', 'API'],
    category: 'React',
  },
  {
    title: 'Spotify Clone',
    description: 'A responsive Spotify front page built with React and plain CSS.',
    tags: ['React', 'CSS'],
    category: 'React',
  },
  {
    title: 'E-commerce Website',
    description: 'A simple e-commerce site for shoes and clothing (HTML & CSS).',
    tags: ['HTML', 'CSS'],
    category: 'HTML & CSS',
  },
  {
    title: 'Landing Page',
    description: 'A modern landing page design with smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
  },
];

export const timelineItems = [
  { year: '2023', text: 'Started my journey in web development' },
  { year: '2024', text: 'Built my first real projects (HTML, CSS, JavaScript)' },
  { year: '2025', text: 'Started learning React and TypeScript' },
];

export const services = [
  { title: 'Build Websites and Web Apps', icon: <MonitorPlay className="w-6 h-6 text-[#5D5FEF]" /> },
  { title: 'Turn Designs into Code', icon: <Code2 className="w-6 h-6 text-[#5D5FEF]" /> },
  { title: 'Write Clean and Maintainable Code', icon: <Terminal className="w-6 h-6 text-[#5D5FEF]" /> },
  { title: 'Keep Learning and Improving', icon: <Wind className="w-6 h-6 text-[#5D5FEF]" /> },
];
