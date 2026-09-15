"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-gold border border-gold-500",
  secondary:
    "bg-transparent text-offwhite border border-offwhite/30 hover:border-gold-400 hover:text-gold-300",
  ghost: "bg-transparent text-navy-800 border border-navy-800/20 hover:border-gold-500 hover:text-gold-600",
  accent:
    "bg-transparent text-gold-300 border border-gold-400/70 hover:border-gold-300 hover:bg-gold-500/10 hover:text-gold-200",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: AsButton | AsLink) {
  const { children, variant = "primary", className, icon } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900",
    variantClasses[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripped so {...rest} can't leak them onto the DOM node
  const { children: _children, variant: _variant, className: _className, icon: _icon, onClick, type = "button", ...rest } = props as AsButton;

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
