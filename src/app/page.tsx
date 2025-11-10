import Hero from '@/components/home/hero';
import Skills from '@/components/home/skills';
import AwsHighlight from '@/components/home/aws-highlight';
import PersonalInfo from '@/components/home/personal-info';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <AwsHighlight />
      <PersonalInfo />
    </div>
  );
}
