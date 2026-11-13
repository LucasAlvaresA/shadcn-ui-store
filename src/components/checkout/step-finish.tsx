import { useCheckoutStore } from "@/stores/checkout-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";
import { SendHorizontal } from "lucide-react";

export const StepFinish = () => {
    const { name } = useCheckoutStore((state) => state);

    const message = generateMessage();
    const linkWhatsApp = `https://wa.me/${
        process.env.NEXT_PUBLIC_WHATSAPP
    }?text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    return (
        <div className="text-center flex flex-col gap-5">
            <p>
                Pedido pronto, <strong>{name}</strong>!
            </p>
            <p>
                Envie seu pedido pelo WhatsApp. Nossa equipe vai ajudar você
                com os próximos passos.
            </p>
            <Button asChild>
                <Link
                    target="_blank"
                    href={linkWhatsApp}
                    className="w-full flex justify-center"
                    onClick={handleClick}
                >
                    <SendHorizontal className="mr-1" /> Enviar pelo WhatsApp
                </Link>
            </Button>
        </div>
    );
};
