interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="bg-[#111113] p-6">
      <p className="font-sans font-medium text-3xl text-[#F4F4F5] mb-2">
        {value}
      </p>
      <p className="font-mono text-xs text-[#52525B] uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
