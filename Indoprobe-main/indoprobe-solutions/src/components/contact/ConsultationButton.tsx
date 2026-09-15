"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/context/ContactModalContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ConsultationButton({
  children,
  variant = "primary",
  className,
  icon,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  className?: string;
  icon?: ReactNode;
}) {
  const { openModal } = useContactModal();

  return (
    <Button
      variant={variant}
      onClick={openModal}
      className={cn(className)}
      icon={icon}
    >
      {children}
    </Button>
  );
}
