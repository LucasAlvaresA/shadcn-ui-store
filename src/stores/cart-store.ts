import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
    cart: Cart[];
};

type Actions = {
    upsertCartItem: (product: Product, quantity: number) => void;
};

const initialState: States = {
    cart: [],
};

export const useCartStore = create<States & Actions>()((set) => ({
    ...initialState,
    upsertCartItem: (product, quantity) =>
        set((state) => {
            const existingItem = state.cart.find(
                (item) => item.product.id === product.id
            );

            if (!existingItem) {
                return quantity > 0
                    ? {
                          cart: [...state.cart, { product, quantity }],
                      }
                    : state;
            }

            const nextQuantity = existingItem.quantity + quantity;

            return {
                cart:
                    nextQuantity <= 0
                        ? state.cart.filter(
                              (item) => item.product.id !== product.id
                          )
                        : state.cart.map((item) =>
                              item.product.id === product.id
                                  ? { ...item, quantity: nextQuantity }
                                  : item
                          ),
            };
        }),
}));
