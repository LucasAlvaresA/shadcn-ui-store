import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import type { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";

type Tab = {
    title: string;
    value: string;
    products: Product[];
};

export const ProductTabs = () => {
    const tabs: Tab[] = [
        {
            title: "Sushi",
            value: "sushi",
            products: products.filter((item) => item.category === "sushi"),
        },
        {
            title: "Temaki",
            value: "temaki",
            products: products.filter((item) => item.category === "temaki"),
        },
        {
            title: "Combinados",
            value: "pack",
            products: products.filter((item) => item.category === "pack"),
        },
        {
            title: "Bebidas",
            value: "beverages",
            products: products.filter((item) => item.category === "beverages"),
        },
    ];

    return (
        <div>
            <div className="mb-6 flex flex-col gap-2 sm:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Nosso cardápio
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Feito para saborear
                </h2>
                <p className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                    Escolha uma categoria e encontre algo especial para o seu
                    momento.
                </p>
            </div>
            <Tabs defaultValue="sushi">
                <TabsList className="grid h-auto w-full grid-cols-4 rounded-xl bg-muted p-1">
                    {tabs.map((item) => (
                        <TabsTrigger
                            key={item.value}
                            value={item.value}
                            className="min-h-10 rounded-lg px-2 text-xs sm:text-sm"
                        >
                            {item.title}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((item) => (
                    <TabsContent
                        key={item.value}
                        value={item.value}
                        className="mt-6"
                    >
                        {item.products.length > 0 && (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {item.products.map((product) => (
                                    <ProductItem
                                        key={product.id}
                                        item={product}
                                    />
                                ))}
                            </div>
                        )}
                        {item.products.length === 0 && <ProductEmpty />}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};
