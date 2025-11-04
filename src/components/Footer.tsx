import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl">Alex Johnson</h3>
            <p className="text-gray-400">
              Full-Stack Developer passionate about creating meaningful digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Erick09-0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Alex Johnson. Made with <Heart className="w-4 h-4 text-red-500" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
