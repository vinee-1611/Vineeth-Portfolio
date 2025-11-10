'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, CheckCircle } from "lucide-react";
import type { Project } from "./project-card";

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="neon-glow-accent group">
          <Eye className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-background border-primary/50">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">{project.title}</DialogTitle>
          <DialogDescription>
            {project.impact}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <h4 className="font-semibold">Key Implementation Details:</h4>
          <ul className="space-y-3">
            {project.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
