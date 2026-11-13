import { Separator } from "@/components/ui/separator";

export const Footer = () => {
    return (
        <footer className="mt-12 pb-6">
            <Separator />
            <div className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-muted-foreground sm:flex-row">
                <span>Feito com cuidado, peça por peça.</span>
                <span>© {new Date().getFullYear()} Nori Sushi</span>
            </div>
        </footer>
    );
};
