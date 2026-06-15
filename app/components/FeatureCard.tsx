interface Props {
  icon: string;
  title: string;
  description: string;
  accent?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function FeatureCard({
  icon,
  title,
  description,
  accent,
  className = "",
  children,
}: Props) {
  const iconBg = accent ? "bg-accent/20" : "bg-primary/10";
  const iconColor = accent ? "text-accent" : "text-primary";

  return (
    <div className={`glass-card rounded-xl p-12 group ${className}`}>
      <div
        className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-6`}
      >
        <span className={`material-symbols-outlined ${iconColor} text-2xl`}>
          {icon}
        </span>
      </div>
      <h3 className="font-heading text-headline-md font-semibold text-primary mb-4">
        {title}
      </h3>
      <p className="text-on-surface-variant">{description}</p>
      {children}
    </div>
  );
}
