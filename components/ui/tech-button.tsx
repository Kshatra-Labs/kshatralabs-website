import React from "react";
import { cn } from "@/lib/utils";

interface TechButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
     children: React.ReactNode;
}

export const TechButton = React.forwardRef<HTMLButtonElement, TechButtonProps>(
     ({ className, children, ...props }, ref) => {
          return (
               <button
                    ref={ref}
                    className={cn(
                         "relative px-5 lg:px-6 py-2 lg:py-2.5 bg-transparent text-white font-mono text-xs lg:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group cursor-pointer flex items-center justify-center",
                         className
                    )}
                    {...props}
               >
                    <span className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {children}
               </button>
          );
     }
);
TechButton.displayName = "TechButton";
