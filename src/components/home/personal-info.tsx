import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactItems = [
  { icon: MapPin, text: 'Chittoor, Andhra Pradesh' },
  { icon: Mail, text: 'vineethgattu065@gmail.com', href: 'mailto:vineethgattu065@gmail.com' },
  { icon: Phone, text: '+91 9441450417', href: 'tel:+91 9441450417' },
  { icon: Github, text: 'GitHub', href: 'https://github.com/vinee-1611' },
  { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/vineeth-gattu-a2a565390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
];

export default function PersonalInfo() {
  const headshot = PlaceHolderImages.find(img => img.id === 'vineeth-headshot');

  return (
    <section id="personal-info" className="py-16 sm:py-24 bg-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative">
          {headshot && (
            <Image
              src={headshot.imageUrl}
              alt={headshot.description}
              data-ai-hint={headshot.imageHint}
              width={200}
              height={200}
              className="rounded-full object-cover ring-2 ring-accent/50 neon-ring-accent"
              priority
            />
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-center md:text-left mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map(({ icon: Icon, text, href }) => (
              <div key={text} className="flex items-center space-x-4">
                <Icon className="h-6 w-6 text-accent" />
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground/90 hover:text-accent transition-colors neon-glow-accent rounded-md px-2 py-1 -m-2"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="text-lg text-foreground/90">{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
