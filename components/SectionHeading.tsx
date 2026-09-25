type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12">
    {subtitle && (
      <p className="text-[#5D5FEF] text-xs font-bold tracking-widest uppercase mb-2">
        {subtitle}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
  </div>
);

export default SectionHeading;
