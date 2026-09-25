import { services, timelineItems } from '../data/portfolioData';

export const About = () => (
  <div className="space-y-24 mt-12">
    <section className="flex flex-col lg:flex-row gap-16 items-start">
      <div className="lg:w-3/5 space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 mb-4">
          About Me
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Who <span className="text-[#5D5FEF]">I Am</span>
        </h1>

        <div className="text-slate-400 space-y-4 text-lg leading-relaxed">
          <p>
            I'm Edidiong Godwin, a passionate frontend developer with a focus on creating clean, responsive and user-friendly web experiences. I enjoy learning new technologies, solving problems and turning ideas into real projects.
          </p>
        </div>

        <div className="flex gap-12 pt-8 border-t border-slate-800 mt-8">
          <div>
            <p className="text-3xl font-bold text-white mb-1">1+</p>
            <p className="text-slate-500 text-sm">Years Learning</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">5+</p>
            <p className="text-slate-500 text-sm">Projects Built</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-1">100%</p>
            <p className="text-slate-500 text-sm">Commitment</p>
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-sm h-80 bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden relative shadow-2xl shadow-[#5D5FEF]/10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          <img
            src="/images/edex123.jpeg"
            alt="Edidiong Godwin"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>

    <section className="grid lg:grid-cols-2 gap-16">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-800">
          {timelineItems.map((item) => (
            <div
              key={item.year}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-slate-500 group-[.is-active]:border-[#5D5FEF] group-[.is-active]:text-[#5D5FEF] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 bg-[#5D5FEF] rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="text-white font-bold mb-1">{item.year}</div>
                <div className="text-slate-400 text-sm">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-8">What I Do</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <h4 className="text-white font-medium">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
