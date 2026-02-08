"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart, Check } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = ["All", "Electronics", "Accessories", "Home", "Clothing", "Fitness"];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart, items } = useCart();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const isInCart = (productId: string) => items.some((item) => item.id === productId);

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked collection of premium products designed for modern living.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute left-3 top-3">
                    {product.badge}
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="secondary" className="absolute right-3 top-3">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    onClick={() => addToCart(product)}
                    className={cn(
                      "mb-4 translate-y-4 transition-transform group-hover:translate-y-0",
                      isInCart(product.id) && "bg-green-600 hover:bg-green-700"
                    )}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
                <h3 className="mt-2 font-semibold line-clamp-1">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
