import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Code } from "lucide-react";
import ProjectModal from "./project-modal";
import type { ElementType } from "react";

export interface Project {
  id: string;
  title: string;
  icon: ElementType;
  impact: string;
  bullets: string[];
  tech: string[];
  details: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300 neon-glow-primary">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          <project.icon className="h-8 w-8 text-primary" />
        </div>
        <CardDescription className="pt-2">{project.impact}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {project.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-accent" />
              <span className="text-sm text-muted-foreground">{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <ProjectModal project={project} />
        <Button variant="ghost" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" />
            Code/Docs
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
