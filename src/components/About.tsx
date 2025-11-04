import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl">About Me</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience
                building web applications that make a difference. My journey in tech
                started with a curiosity about how things work, which evolved into a
                career creating elegant solutions to complex problems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, responsive design, and
                creating seamless user experiences. When I'm not coding, you'll find
                me exploring new technologies, contributing to open-source projects,
                or mentoring aspiring developers.
              </p>
              <p>
                My approach combines technical expertise with creative thinking,
                ensuring that every project not only works flawlessly but also
                delights users.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755541516450-644adb257ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MTc3NTQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
