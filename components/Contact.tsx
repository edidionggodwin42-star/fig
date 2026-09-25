import { Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';

const contactEmail = 'edidionggodwin42@gmail.com';

export const Contact = () => {
  return (
  <div className="space-y-12 mt-12">
    <div>
      <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 mb-4">
        Get in Touch
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Contact <span className="text-[#5D5FEF]">Me</span>
      </h1>
      <p className="text-slate-400 max-w-xl text-lg">
        Have a project in mind or just want to say hello? Feel free to reach out. I'd love to hear from you.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-[#5D5FEF] rounded-full flex items-center justify-center shrink-0">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-1">Email</h4>
            <a className="text-slate-400 hover:text-white transition-colors" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-[#5D5FEF] rounded-full flex items-center justify-center shrink-0">
            <Phone className="text-white w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
            <a className="text-slate-400 hover:text-white transition-colors" href="tel:+2349122424338">
              +234 9122424338
            </a>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-[#5D5FEF] rounded-full flex items-center justify-center shrink-0">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white font-medium text-lg mb-1">Location</h4>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="https://www.google.com/maps/search/?api=1&query=Lagos%2C%20Nigeria"
              target="_blank"
              rel="noreferrer"
            >
              Lagos, Nigeria
            </a>
          </div>
        </div>
      </div>

      <form
        action={`https://formsubmit.co/${contactEmail}`}
        method="POST"
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6"
      >
        <input type="hidden" name="_subject" value="New portfolio message" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="true" />
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#5D5FEF] focus:ring-1 focus:ring-[#5D5FEF] transition-all"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#5D5FEF] focus:ring-1 focus:ring-[#5D5FEF] transition-all"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            required
            placeholder="Your message..."
            rows={4}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#5D5FEF] focus:ring-1 focus:ring-[#5D5FEF] transition-all resize-none"
          ></textarea>
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
