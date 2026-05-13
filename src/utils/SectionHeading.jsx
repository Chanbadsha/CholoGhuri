const SectionHeading = ({ title, subtitle, textColor }) => {
  return (
    <div>
      <p className={`${textColor} leading-relaxed lg:text-lg`}>{subtitle}</p>
      <h2 className="font-bold text-white leading-relaxed text-2xl lg:text-4xl md:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
