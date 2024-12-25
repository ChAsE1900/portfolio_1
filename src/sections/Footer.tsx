import ArrowUpIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'Twitter',
    href: 'https://x.com/MDziwina',
  },
  {
    title: 'Github',
    href: 'https://github.com/ChAsE1900',
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center md:flex-row gap-8">
            {footerLinks.map(link => (
              <button>
              <a
                href={link.href}
                key={link.title}
                target="_blank"        // Opens the link in a new tab
                rel="noopener noreferrer" // Adds security to external links
                className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-all duration-300"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpIcon className="w-4 h-4" />  {/* Ensure proper size of the icon */}
              </a>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};