import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'secondary';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyle =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out text-sm';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#5D5FEF] text-white hover:bg-[#4a4cbf] shadow-lg shadow-[#5D5FEF]/20',
    outline:
      'bg-transparent text-white border border-slate-700 hover:border-slate-500',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
