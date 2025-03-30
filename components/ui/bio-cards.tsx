import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  heading: string;
  description: string;
};

const BioCard: React.FC<Props> = ({ icon: Icon, heading, description }) => {
  return (
    <div className="my-12 h-60 mx-auto gap-10 p-6 text-center border-1 border-b-card text-pretty rounded-lg shadow-md lg:w-100 w-70 dark:bg-card">
      <Icon className="w-8 h-8 m-auto" /> {/* Render the icon */}
      <div className="lg:text-xl sm:text-lg font-bold mt-4 dark:text-primary">{heading}</div>
      <div className="mt-3 dark:text-primary leading-8 opacity-60">{description}</div>
    </div>
  );
};

export default BioCard;
