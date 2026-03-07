import { Instagram } from 'lucide-react';

interface InstagramButtonProps {
    className?: string;
    variant?: 'floating' | 'footer';
}

export default function InstagramButton({ className = '', variant = 'floating' }: InstagramButtonProps) {
    const baseClasses = "group flex items-center justify-center transition-all duration-300 relative";

    // Gradiente icônico do Instagram (usado no hover ou como fundo)
    const instagramGradient = "bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]";

    if (variant === 'floating') {
        return (
            <a
                href="https://instagram.com/wesdigitalstudio"
                target="_blank"
                rel="noopener noreferrer"
                title="Siga no Instagram"
                className={`${baseClasses} w-10 h-10 md:w-12 md:h-12 rounded-full glass hover:scale-110 active:scale-95 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${className}`}
            >
                <div className={`absolute inset-0 rounded-full ${instagramGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10 text-slate-600 dark:text-zinc-400 aura:text-zinc-400 ruby:text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </div>
            </a>
        );
    }

    // Variantes de Rodapé (Estilo botão minimalista animado e sem texto)
    return (
        <a
            href="https://instagram.com/wesdigitalstudio"
            target="_blank"
            rel="noopener noreferrer"
            title="Acompanhe pelo Instagram"
            className={`${baseClasses} w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-white/5 aura:border-white/5 ruby:border-white/5 bg-transparent backdrop-blur-md hover:border-transparent ${className} animate-float opacity-60 hover:opacity-100 hover:scale-110 active:scale-95`}
        >
            <div className={`absolute inset-0 rounded-full ${instagramGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <span className="relative z-10 flex items-center justify-center text-slate-500 dark:text-zinc-500 aura:text-zinc-500 ruby:text-zinc-500 group-hover:text-white transition-colors duration-300">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </span>
        </a>
    );
}
