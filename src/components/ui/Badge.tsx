const Badge: React.FC<{ variant?: string; className?: string; children?: React.ReactNode }> = ({
  variant = "default",
  className,
  children,
}) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
        variant === "outline" ? "border border-gray-300" : "bg-gray-200"
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;