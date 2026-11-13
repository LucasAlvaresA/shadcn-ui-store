import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";
import { formatCurrency } from "@/lib/utils";

export const generateMessage = () => {
    const { name, address } = useCheckoutStore.getState();
    const { cart } = useCartStore.getState();

    const orderProducts = cart.map(
        (item) =>
            `${item.quantity}x ${item.product.name} — ${formatCurrency(
                item.quantity * item.product.price
            )}`
    );
    const complement = address.complement
        ? `, ${address.complement}`
        : "";

    return `*Dados do pedido*
Nome: ${name}
Endereço: ${address.street}, ${address.number}${complement},
${address.district}, ${address.city}/${address.state}
--------
*Itens*
${orderProducts.join("\n")}

Total: ${formatCurrency(
        cart.reduce(
            (total, item) => total + item.quantity * item.product.price,
            0
        )
    )}`;
};
