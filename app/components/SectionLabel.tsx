interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-widest text-[#52525B] ${className}`}
    >
      {children}
    </span>
  );
}
