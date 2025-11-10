import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Vineeth Gattu | Cloud & DevOps Engineer',
  description: 'Personal portfolio of Vineeth Gattu, a Cloud & DevOps Engineer passionate about scalable infrastructure.',
  openGraph: {
    title: 'Vineeth Gattu | Cloud & DevOps Engineer',
    description: 'Cloud practitioner across AWS, Azure, and GCP; fully confident leading end-to-end AWS solutions.',
    type: 'website',
    url: 'https://gattu.cloud', // Replace with actual URL
    images: [
      {
        url: 'https://gattu.cloud/og-image.png', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Vineeth Gattu - Cloud & DevOps Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vineeth Gattu | Cloud & DevOps Engineer',
    description: 'Personal portfolio of Vineeth Gattu, a Cloud & DevOps Engineer passionate about scalable infrastructure.',
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: ['https://gattu.cloud/og-image.png'], // Replace with actual OG image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{scrollBehavior: 'smooth'}}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
