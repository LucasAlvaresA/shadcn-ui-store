import { Logo } from "@/components/logo";
import { ThemeToggle } from "./theme-toggle";
import { CartSidebar } from "@/components/cart/sidebar";

export const Header = () => {
    return (
        <header className="flex items-center justify-between border-b py-4">
            <a href="/" aria-label="Nori — início">
                <Logo />
            </a>
            <div className="flex items-center gap-2">
                <CartSidebar />
                <ThemeToggle />
            </div>
        </header>
    );
};
