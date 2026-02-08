"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-16 sm:py-24">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-foreground mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Transform Your Shopping Experience?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Join thousands of satisfied customers and discover premium products at unbeatable prices. Start your journey today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                asChild
              >
                <Link href="#products">
                  Start Shopping
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
