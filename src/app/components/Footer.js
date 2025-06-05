// src/app/components/Footer.js
const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
        {/* Left Side */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Augustine Ugwu</span>.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1 italic">
            Built with passion, precision, ☕ and clean code.
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200">
            GitHub
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-200">
            LinkedIn
          </a>
          <span className="hidden sm:inline opacity-30">|</span>
          <a
            href="mailto:you@example.com"
            className="hover:text-white transition-all duration-200">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
