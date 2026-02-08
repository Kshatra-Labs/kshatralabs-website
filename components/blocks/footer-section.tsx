import {
     Dribbble,
     Facebook,
     Github,
     Instagram,
     Mail,
     MapPin,
     Phone,
     Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
     facebookLink: '#',
     instaLink: '#',
     twitterLink: '#',
     githubLink: '#',
     dribbbleLink: '#',
     services: {
          platforms: '#platforms',
          technology: '#technology',
          vision: '#vision',
          defense: '#',
     },
     about: {
          history: '#',
          team: '#',
          handbook: '#',
          careers: '#',
     },
     help: {
          faqs: '#',
          support: '#',
          livechat: '#',
     },
     contact: {
          email: 'contact@kshatralabs.com',
          phone: '',
          address: 'Bangalore, India',
     },
     company: {
          name: 'Kshatra Labs',
          description:
               'Engineering AI-native robotic systems for the next era of national security. Built for contested environments.',
          logo: '', // No logo image yet, handles gracefully usually or we remove img tag
     },
};

const socialLinks = [
     { icon: Twitter, label: 'Twitter', href: data.twitterLink },
     { icon: Github, label: 'GitHub', href: data.githubLink },
     { icon: Mail, label: 'Email', href: `mailto:${data.contact.email}` },
];

const aboutLinks = [
     { text: 'Company History', href: data.about.history },
     { text: 'Careers', href: data.about.careers },
     { text: 'Legal', href: '#' },
];

const serviceLinks = [
     { text: 'Aerial Interceptors', href: data.services.platforms },
     { text: 'Sensor Fusion', href: data.services.technology },
     { text: 'Swarm Intelligence', href: data.services.technology },
     { text: 'Defense Solutions', href: data.services.defense },
];

const helpfulLinks = [
     { text: 'Contact Support', href: data.help.support },
     { text: 'Request Briefing', href: '#contact' },
];

const contactInfo = [
     { icon: Mail, text: data.contact.email },
     // { icon: Phone, text: data.contact.phone },
     { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
     return (
          <footer className="bg-black border-t border-white/10 w-full rounded-t-xl z-20 relative">
               <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                         <div>
                              <div className="text-white flex justify-center gap-2 sm:justify-start items-center">
                                   {/* <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                 <div className="h-4 w-4 bg-white rounded-full"></div>
              </div> */}
                                   <span className="text-2xl font-bold font-mono tracking-wider">
                                        {data.company.name.toUpperCase()}
                                   </span>
                              </div>

                              <p className="text-neutral-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left font-mono text-sm">
                                   {data.company.description}
                              </p>

                              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                   {socialLinks.map(({ icon: Icon, label, href }) => (
                                        <li key={label}>
                                             <Link
                                                  href={href}
                                                  className="text-neutral-400 hover:text-white transition"
                                             >
                                                  <span className="sr-only">{label}</span>
                                                  <Icon className="size-5" />
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>

                         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2 font-mono text-sm">
                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">About</p>
                                   <ul className="mt-8 space-y-4">
                                        {aboutLinks.map(({ text, href }) => (
                                             <li key={text}>
                                                  <a
                                                       className="text-neutral-400 hover:text-white transition"
                                                       href={href}
                                                  >
                                                       {text}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">Technology</p>
                                   <ul className="mt-8 space-y-4">
                                        {serviceLinks.map(({ text, href }) => (
                                             <li key={text}>
                                                  <a
                                                       className="text-neutral-400 hover:text-white transition"
                                                       href={href}
                                                  >
                                                       {text}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">Connect</p>
                                   <ul className="mt-8 space-y-4">
                                        {helpfulLinks.map(({ text, href }) => (
                                             <li key={text}>
                                                  <a
                                                       href={href}
                                                       className="text-neutral-400 hover:text-white transition"
                                                  >
                                                       {text}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="text-center sm:text-left">
                                   <p className="text-lg font-medium text-white">Contact</p>
                                   <ul className="mt-8 space-y-4">
                                        {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                                             <li key={text}>
                                                  <a
                                                       className="flex items-center justify-center gap-2 sm:justify-start text-neutral-400 hover:text-white transition"
                                                       href="#"
                                                  >
                                                       <Icon className="size-4 shrink-0" />
                                                       {isAddress ? (
                                                            <address className="not-italic">
                                                                 {text}
                                                            </address>
                                                       ) : (
                                                            <span>
                                                                 {text}
                                                            </span>
                                                       )}
                                                  </a>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         </div>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">
                         <div className="text-center sm:flex sm:justify-between sm:text-left text-neutral-500 font-mono text-xs">
                              <p>
                                   <span className="block sm:inline">All Systems Nominal.</span>
                              </p>

                              <p className="mt-4 sm:order-first sm:mt-0">
                                   &copy; {new Date().getFullYear()} {data.company.name}
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
}
