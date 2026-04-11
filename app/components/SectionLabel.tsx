interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] text-[#7CFFB2] ${className}`}
    >
      {children}
    </span>
  );
}
