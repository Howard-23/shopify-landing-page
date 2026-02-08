"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <Badge className="w-fit" variant="secondary">
                New Collection 2024
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                Discover Your
                <span className="text-primary"> Perfect Style</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                Explore our curated collection of premium products. From cutting-edge electronics to timeless fashion, find everything you need in one place.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" asChild>
                <Link href="#products">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-4 w-4" />
                Watch Video
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
                alt="Shopping showcase"
                className="h-full w-full object-cover"
              />
              {/* Floating cards */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-background/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-lg">📦</span>
                  </div>
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-6 top-6 rounded-xl bg-background/95 p-4 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                    <span className="text-lg">✨</span>
                  </div>
                  <div>
                    <p className="font-medium">Premium Quality</p>
                    <p className="text-sm text-muted-foreground">Curated selection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
