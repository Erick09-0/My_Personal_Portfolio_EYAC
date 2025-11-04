import { Code2, Database, Layout, Smartphone, GitBranch, Palette } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Skills() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'React Native, Progressive Web Apps',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Version Control',
      description: 'Git, GitHub, CI/CD Pipelines',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Design',
      description: 'Branding, Animation, User Research',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse skill set to bring your ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="text-blue-600">{skill.icon}</div>
                <h3 className="text-xl">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
