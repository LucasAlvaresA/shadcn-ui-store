import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductTabs } from "@/components/products/tab";
import { ArrowDown, Sparkles } from "lucide-react";

const Page = () => {
    return (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Header />
            <main>
                <section className="relative my-6 overflow-hidden rounded-3xl border bg-card sm:my-10">
                    <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
                        <div className="relative z-10">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                <Sparkles className="size-3.5" />
                                Sabor japonês, do seu jeito
                            </div>
                            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                                Um momento especial começa{" "}
                                <span className="text-primary">à mesa.</span>
                            </h1>
                            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
                                Escolha seus favoritos, monte seu pedido e
                                aproveite cada peça feita para saborear.
                            </p>
                            <a
                                href="#cardapio"
                                className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                                Explorar cardápio
                                <ArrowDown className="size-4" />
                            </a>
                        </div>
                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src="/images/combo/combo1.png"
                                    alt="Seleção de sushi e combinados"
                                    className="aspect-[4/3] w-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
                                    <p className="text-sm font-medium text-white/75">
                                        Uma boa escolha para hoje
                                    </p>
                                    <p className="mt-1 text-xl font-semibold">
                                        Descubra o seu próximo favorito
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="cardapio" className="scroll-mt-8 py-4 sm:py-6">
                    <ProductTabs />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
