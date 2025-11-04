import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-blue-600">Alex Johnson</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto">
              Full-Stack Developer & Creative Problem Solver
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            I craft beautiful, functional web experiences and bring ideas to life through code.
            Passionate about creating user-centered digital solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => scrollToSection('projects')} size="lg">
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Erick09-0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="hover:text-blue-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-block pt-8 animate-bounce hover:text-blue-600 transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
