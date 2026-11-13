import { Fish } from "lucide-react";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Fish className="size-5" />
            </span>
            <span className="leading-tight">
                <span className="block text-lg font-bold tracking-tight">
                    nori
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    sushi & cozinha
                </span>
            </span>
        </div>
    );
};
