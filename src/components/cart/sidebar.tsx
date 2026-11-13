"use client";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../checkout/dialog";
import { formatCurrency } from "@/lib/utils";

export const CartSidebar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const { cart } = useCartStore((state) => state);

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cart.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
    );

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative gap-2 rounded-full px-4">
                    <ShoppingBag className="size-4" />
                    <span className="hidden sm:inline">Sacola</span>
                    {itemCount > 0 && (
                        <span className="flex size-5 items-center justify-center rounded-full bg-background text-xs font-semibold text-foreground">
                            {itemCount}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Sua sacola</SheetTitle>
                    <SheetDescription>
                        Revise seus itens antes de finalizar o pedido.
                    </SheetDescription>
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3">
                    {cart.map((item) => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                    {cart.length === 0 && (
                        <p className="py-8 text-center text-sm text-muted-foreground">
                            Sua sacola ainda está vazia.
                        </p>
                    )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal</div>
                    <div className="font-semibold">{formatCurrency(subtotal)}</div>
                </div>

                <Separator className="my-4" />

                <div className="text-center">
                    <Button
                        disabled={cart.length === 0}
                        onClick={() => setCheckoutOpen(true)}
                    >
                        Finalizar pedido
                    </Button>
                </div>

                <CheckoutDialog
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                />
            </SheetContent>
        </Sheet>
    );
};
