import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    asChild = false,
    children,
    ...props
}, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider font-heading";

    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 active:scale-95",
        secondary: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-95",
        outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
        ghost: "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-navy-800",
        link: "text-orange-500 hover:underline underline-offset-4"
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
    };

    return (
        <button
            ref={ref}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button };
