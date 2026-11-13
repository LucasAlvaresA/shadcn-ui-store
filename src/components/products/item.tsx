"use client";

import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { useCartStore } from "@/stores/cart-store";
import { Plus } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type Props = {
    item: Product;
};

export const ProductItem = ({ item }: Props) => {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore((state) => state);

    const handleAddButton = () => {
        upsertCartItem(item, 1);
        toast({
            title: "Adicionado à sacola",
            description: `${item.name} foi adicionado ao seu pedido.`,
            action: <ToastAction altText="Fechar aviso">Fechar</ToastAction>,
            duration: 2200,
        });
    };

    return (
        <article className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
            <div className="overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                    <h3 className="truncate font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                        {formatCurrency(item.price)}
                    </p>
                </div>
                <Button
                    size="sm"
                    className="shrink-0 rounded-full"
                    onClick={handleAddButton}
                    aria-label={`Adicionar ${item.name} à sacola`}
                >
                    <Plus className="size-4" />
                    Adicionar
                </Button>
            </div>
        </article>
    );
};
