import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const awsStrengths = [
  'VPC & Networking',
  'EC2 & Compute',
  'S3 & Storage',
  'IAM & Security',
  'ASG/ELB & Scaling',
  'RDS & Databases',
  'CloudFront & CDN',
  'Lambda & Serverless',
  'CloudWatch & Monitoring',
];

export default function AwsHighlight() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card/50 border-primary/30 neon-glow-primary shadow-2xl shadow-primary/10">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary-foreground">
              AWS Specialist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-8">
              Fully confident in designing, deploying, and managing end-to-end solutions on AWS.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {awsStrengths.map((strength) => (
                <div key={strength} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-foreground/90">{strength}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
