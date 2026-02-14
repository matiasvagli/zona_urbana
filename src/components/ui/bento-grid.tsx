import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[20rem]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-2xl group/bento hover:shadow-2xl transition duration-300 shadow-none p-4",
                "bg-black/20 border border-white/10 backdrop-blur-sm",
                "flex flex-col space-y-4 hover:-translate-y-2 overflow-hidden relative",
                className
            )}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex-1 overflow-hidden rounded-xl relative">
                {header}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
            </div>

            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <div className="font-sans font-bold text-neutral-200">
                        {title}
                    </div>
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs">
                    {description}
                </div>
            </div>
        </div>
    );
};
