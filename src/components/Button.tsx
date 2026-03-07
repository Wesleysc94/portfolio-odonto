import type { ReactNode } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
    variant?: 'primary' | 'outline';
    href?: string;
    className?: string;
};

export default function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
    const baseStyles = "group relative flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full font-sans whitespace-nowrap overflow-hidden transition-all duration-500 hover:-translate-y-1";

    // Primary: Adapts to theme (Dark default, Aura = Gold, Ruby = Red)
    // - Light/Dark default: bg-zinc-900 text-white
    // - Aura (Gold): bg-amber-500 text-zinc-950 font-semibold tracking-wide
    // - Ruby: bg-rose-600 text-white font-medium tracking-wide
    const primaryStyles = "bg-zinc-900 text-white font-bold tracking-[0.2em] uppercase text-xs md:text-sm shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)] border border-white/5 " +
        "hover:shadow-[0_10px_40px_-10px_rgba(8,145,178,0.4)] hover:border-cyan-500/50 hover:bg-zinc-800 " +
        "aura:bg-amber-500 aura:text-zinc-950 aura:font-semibold aura:tracking-wide aura:normal-case aura:text-sm md:aura:text-base aura:hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] aura:hover:bg-amber-400 aura:border-transparent " +
        "ruby:bg-rose-600 ruby:text-white ruby:font-medium ruby:tracking-wide ruby:normal-case ruby:text-sm md:ruby:text-base ruby:hover:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.5)] ruby:hover:bg-rose-500 ruby:border-transparent";

    // Outline: Minimal border
    const outlineStyles = "bg-transparent border border-slate-300 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 font-bold tracking-[0.2em] uppercase text-xs md:text-sm " +
        "hover:bg-slate-100 dark:hover:bg-zinc-800/80 hover:border-cyan-500/50 aura:hover:border-amber-500/50 ruby:hover:border-rose-500/50 " +
        "hover:shadow-[0_10px_40px_-10px_rgba(8,145,178,0.2)] aura:hover:shadow-[0_10px_40px_-10px_rgba(245,158,11,0.15)] ruby:hover:shadow-[0_10px_40px_-10px_rgba(225,29,72,0.15)]";

    const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles} {...(props as any)}>
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 w-full h-full">{children}</span>
                {variant === 'primary' && (
                    <>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute top-0 -left-[100%] h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none" />
                    </>
                )}
            </a>
        );
    }

    return (
        <button className={styles} {...(props as any)}>
            <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 w-full h-full">{children}</span>
            {variant === 'primary' && (
                <>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-0 -left-[100%] h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none" />
                </>
            )}
        </button>
    );
}
