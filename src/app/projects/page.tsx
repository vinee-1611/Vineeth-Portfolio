import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '@/components/projects/project-card';
import { projects } from './project-data';

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen parallax-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-glow">
            Featured Projects
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-muted-foreground">
            Selected Cloud & DevOps work focused on AWS with multi-cloud experience (Azure, GCP).
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="neon-glow-accent group">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
