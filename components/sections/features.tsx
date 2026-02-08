"use client";

import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Headphones: <Headphones className="h-6 w-6" />,
  RefreshCw: <RefreshCw className="h-6 w-6" />,
};

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing the best shopping experience with premium service and quality products.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative rounded-2xl bg-background p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[feature.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
