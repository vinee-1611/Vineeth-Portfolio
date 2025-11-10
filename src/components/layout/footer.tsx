import Link from 'next/link';
import { Github, Linkedin, Rss } from 'lucide-react';
import GlowToggle from '@/components/shared/glow-toggle';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} Vineeth Gattu. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Built with Next.js + Tailwind CSS</span>
          </div>
          <div className="flex items-center space-x-6">
            <GlowToggle />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><span className="sr-only">GitHub</span><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
