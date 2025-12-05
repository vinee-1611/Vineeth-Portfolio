'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function ResumeButton() {
  const { toast } = useToast();

  return (
    <Button
      size="lg"
      className="neon-glow-primary group"
      variant="outline"
      onClick={() => {
        toast({
          title: "Opening Resume",
          description: "Your resume will open in a new tab.",
        });
        window.open('https://drive.google.com/file/d/1J8C9maWbCK1bQTUe9csf8dkawuJHn0ax/view?usp=sharing', '_blank');
      }}
    >
      <Eye className="mr-2 h-5 w-5" />
      View Resume
    </Button>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden parallax-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 leading-tight tracking-tighter mb-4">
          Vineeth Gattu
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-primary mb-6">
          Cloud & DevOps Engineer
        </p>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
          Passionate about scalable infrastructure. Cloud practitioner across AWS, Azure, and GCP; fully confident leading end-to-end AWS solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="neon-glow-primary group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <ResumeButton />
        </div>
      </div>
    </section>
  );
}
