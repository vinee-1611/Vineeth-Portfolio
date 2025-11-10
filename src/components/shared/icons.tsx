import type { FC, SVGProps } from "react";
import { Server, Terminal, GitBranch, Database, Code, Cloud, HardDrive } from "lucide-react";

type IconComponent = FC<SVGProps<SVGSVGElement>>;

export const Aws: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Amazon Web Services</title>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.53 14.23c-.23.23-.53.33-.83.29-.3-.04-.57-.2-.76-.43l-2.09-2.43-2.1 2.43c-.19.23-.46.39-.76.43-.3.04-.6-.06-.83-.29-.48-.48-.48-1.26 0-1.74l3.05-3.53-3.05-3.53c-.48-.48-.48-1.26 0-1.74s1.26-.48 1.74 0l2.1 2.43 2.09-2.43c.48-.48 1.26-.48 1.74 0s.48 1.26 0 1.74l-3.05 3.53 3.05 3.53c.48.49.48 1.27 0 1.74z"/>
  </svg>
);

export const Azure: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Microsoft Azure</title>
    <path fill="currentColor" d="M1.38 15.65l6.5-9.15L14.03 2.1l-6.5 9.14zM14.94 3.1l- производителей.16 8.65 8.12 3.65-4.2-11.45zM8.75 16.34l-5.4 3.56h16.3L8.75 16.34z"/>
  </svg>
);

export const Gcp: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Google Cloud</title>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.4c-2.33 0-4.2-1.87-4.2-4.2s1.87-4.2 4.2-4.2c1.1 0 2.1.43 2.85 1.13l-1.34 1.34c-.38-.38-.9-.61-1.51-.61-1.29 0-2.34 1.05-2.34 2.34s1.05 2.34 2.34 2.34c1.47 0 2.05-.9 2.18-1.4h-2.18v-1.8h4.09c.04.22.06.44.06.69 0 2.47-1.67 4.23-4.15 4.23zM18 12.2h-1.4v-1.4H18v1.4zm0-2.8h-1.4V8H18v1.4z"/>
  </svg>
);

export const Python: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Python</title>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 5.5h2v3h-2v-3zm0 4h2v7h-2v-7z"/>
  </svg>
);

export const Bash: IconComponent = (props) => <Terminal {...props} />;

export const Kubernetes: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Kubernetes</title>
    <path fill="currentColor" d="M12 2l8.5 4.5v9L12 20l-8.5-4.5v-9L12 2zm0 2.47L5.5 8.5v7l6.5 3.47 6.5-3.47v-7L12 4.47zM12 10.5l4-2-4-2-4 2 4 2z"/>
  </svg>
);

export const Docker: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Docker</title>
    <path fill="currentColor" d="M22.1 9.9c-.3-.4-.8-.6-1.3-.6h-3.3V5.5c0-.6-.4-1-1-1h-3.3V.7c0-.4-.3-.7-.7-.7h-5c-.4 0-.7.3-.7.7v3.8H2.7c-.6 0-1 .4-1 1v3.8H.8c-.5 0-.9.2-1.3.6-.3.4-.4.9-.1 1.4l1.8 3.3c.3.4.8.6 1.3.6h.4v3.3c0 .6.4 1 1 1h3.3v3.8c0 .4.3.7.7.7h5c.4 0 .7-.3.7-.7v-3.8h3.3c.6 0 1-.4 1-1v-3.3h.4c.5 0 .9-.2 1.3-.6l1.8-3.3c.3-.5.2-1-.1-1.4zM7 5.5h2v2H7v-2zm2 9.8H7v-2h2v2zm2-2.3H9v-2h2v2zm2 2.3h-2v-2h2v2zm2-2.3h-2v-2h2v2zm0 0h-2v-2h2v2zm2-2.2H9v-2h2v2h2v-2h2v2z"/>
  </svg>
);

export const Terraform: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Terraform</title>
    <path fill="currentColor" d="M2 2v8.7h8.7V2H2zm1.7 1.7h5.3v5.3H3.7V3.7zM13.3 2v8.7h8.7V2h-8.7zm1.7 1.7h5.3v5.3h-5.3V3.7zM2 13.3v8.7h8.7v-8.7H2zm1.7 1.7h5.3v5.3H3.7v-5.3z"/>
  </svg>
);

export const Jenkins: IconComponent = (props) => <GitBranch {...props} />;

export const Github: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);


export const Linux: IconComponent = (props) => <HardDrive {...props} />;

export const Prometheus: IconComponent = (props) => (
  <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Prometheus</title>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.11 5.34l7.77 4.5-7.77 4.5V7.34z"/>
  </svg>
);

export const AwsS3: IconComponent = (props) => <Database {...props} />;
export const AwsIam: IconComponent = (props) => <Server {...props} />;
export const AwsEc2: IconComponent = (props) => <Cloud {...props} />;

export { Server, Terminal, GitBranch, Database, Code, Cloud, HardDrive };
