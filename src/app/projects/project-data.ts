import { AwsS3, AwsIam, AwsEc2 } from '@/components/shared/icons';
import type { Project } from '@/components/projects/project-card';

export const projects: Project[] = [
  {
    id: 's3-storage',
    title: 'S3 Bucket Storage Solution',
    icon: AwsS3,
    impact: 'Engineered a secure and cost-effective S3 storage solution for static web hosting and data lake staging.',
    bullets: [
      'Provisioned S3 buckets with automated lifecycle rules for intelligent tiering, reducing storage costs by 40%.',
      'Enforced server-side encryption (SSE-S3) and bucket policies to secure data at rest.',
      'Configured static website hosting with CloudFront distribution and Origin Access Control (OAC) for performance and security.',
      'Enabled versioning and server access logging for data durability and auditability.',
    ],
    tech: ['AWS S3', 'CloudFront', 'IAM', 'Terraform'],
    details: [
      'Utilized Terraform to define S3 buckets as code, ensuring repeatable and consistent deployments across environments.',
      'Implemented cross-region replication for disaster recovery, achieving a 99.99% data durability SLA.',
      'Set up S3 event notifications to trigger Lambda functions for automated data processing pipelines.',
    ],
    link: '#',
  },
  {
    id: 'iam-users',
    title: 'IAM User and Group Management',
    icon: AwsIam,
    impact: 'Strengthened security posture by implementing a robust IAM framework based on the principle of least privilege.',
    bullets: [
      'Designed and created IAM groups with fine-grained permissions tailored to specific developer and operational roles.',
      'Enforced mandatory Multi-Factor Authentication (MFA) for all IAM users to prevent unauthorized access.',
      'Implemented a strict access key rotation policy, automatically disabling keys older than 90 days.',
      'Integrated with AWS CloudTrail and Access Analyzer for continuous monitoring and auditing of IAM activity.',
    ],
    tech: ['AWS IAM', 'CloudTrail', 'MFA', 'JSON'],
    details: [
      'Crafted custom IAM policies using JSON to grant specific API permissions on resources like EC2, S3, and RDS.',
      'Used IAM Roles for service-to-service communication, eliminating the need for long-lived access keys in applications.',
      'Performed regular access reviews using Access Analyzer findings to identify and remediate overly permissive policies.',
    ],
    link: '#',
  },
  {
    id: 'ec2-instances',
    title: 'Scalable EC2 Compute Fleet',
    icon: AwsEc2,
    impact: 'Built a scalable and resilient compute footprint using EC2 Auto Scaling and hardened launch templates.',
    bullets: [
      'Developed standardized EC2 launch templates with hardened AMIs and defined security group rules.',
      'Configured Auto Scaling Groups (ASG) with target tracking policies to automatically scale based on CPU utilization.',
      'Utilized Application Load Balancers (ALB) and target groups to distribute traffic efficiently across the instance fleet.',
      'Integrated with CloudWatch to create alarms for instance health checks (CPU, Status) and trigger notifications.',
    ],
    tech: ['AWS EC2', 'Auto Scaling', 'ELB', 'CloudWatch', 'SSM'],
    details: [
      'Leveraged AWS Systems Manager (SSM) OpsCenter and Patch Manager for automated system hardening and operational tasks.',
      'Attached IAM instance profiles to EC2 instances to provide secure, temporary credentials for accessing other AWS services.',
      'Implemented a cost-optimization strategy using a mix of On-Demand and Spot Instances within the Auto Scaling Groups.',
    ],
    link: '#',
  },
];
