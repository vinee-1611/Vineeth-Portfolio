import {
  Aws, Python, Bash, Kubernetes, Docker, Terraform, Jenkins, Gcp, Azure, Linux, Prometheus, Github, Cloud, Code, Database,
} from '@/components/shared/icons';

const skills = [
  { name: 'AWS', icon: Aws, category: 'Cloud' },
  { name: 'Azure', icon: Azure, category: 'Cloud' },
  { name: 'GCP', icon: Gcp, category: 'Cloud' },
  { name: 'Python', icon: Python, category: 'Languages & Scripting' },
  { name: 'Bash', icon: Bash, category: 'Languages & Scripting' },
  { name: 'Kubernetes', icon: Kubernetes, category: 'Containers & Orchestration' },
  { name: 'Docker', icon: Docker, category: 'Containers & Orchestration' },
  { name: 'Terraform', icon: Terraform, category: 'IaC & Automation' },
  { name: 'CI/CD', icon: Github, category: 'IaC & Automation' },
  { name: 'Linux', icon: Linux, category: 'OS & Systems' },
  { name: 'Monitoring', icon: Prometheus, category: 'OS & Systems' },
];

const capabilities = [
  { text: "Designing highly available, scalable architectures", icon: Cloud },
  { text: "Automating infrastructure with IaC and CI/CD", icon: Code },
  { text: "Cost-aware, secure cloud operations", icon: Database },
];

export default function Skills() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Tools</h2>
          <p className="mt-4 text-lg text-muted-foreground">A snapshot of my technical capabilities.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center p-4 bg-card/30 rounded-lg border border-transparent hover:border-accent transition-all duration-300 transform hover:-translate-y-1 neon-glow-accent"
            >
              <skill.icon className="h-10 w-10 text-muted-foreground group-hover:text-accent transition-colors" />
              <p className="mt-4 font-semibold text-foreground/90">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map(cap => (
              <div key={cap.text} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                    <cap.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium text-foreground/90">{cap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
