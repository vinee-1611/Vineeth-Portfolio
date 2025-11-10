'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, MapPin, Upload } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const contactItems = [
  { icon: MapPin, text: 'Chittoor, Andhra Pradesh' },
  { icon: Mail, text: 'vineethgattu065@gmail.com', href: 'mailto:vineethgattu065@gmail.com' },
  { icon: Phone, text: '+91 9441450417', href: 'tel:+91 9441450417' },
  { icon: Github, text: 'GitHub', href: 'https://github.com/vinee-1611' },
  { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/vineeth-gattu-a2a565390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
];

export default function PersonalInfo() {
  const defaultHeadshot = PlaceHolderImages.find(img => img.id === 'vineeth-headshot');
  const [headshot, setHeadshot] = useState(defaultHeadshot?.imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeadshot(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="personal-info" className="py-16 sm:py-24 bg-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="relative group">
          {headshot && (
            <Image
              src={headshot}
              alt="Headshot of Vineeth Gattu"
              data-ai-hint="man portrait"
              width={200}
              height={200}
              className="rounded-full object-cover ring-2 ring-accent/50 neon-ring-accent"
              priority
            />
          )}
          <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="outline" onClick={triggerFileUpload} className="neon-glow-accent">
              <Upload className="mr-2 h-4 w-4" />
              Change
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              accept="image/*"
            />
          </div>
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
