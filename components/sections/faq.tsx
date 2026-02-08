"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqItems } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "cursor-pointer transition-all",
                openId === item.id && "border-primary"
              )}
              onClick={() => toggleFaq(item.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-left">{item.question}</h3>
                  <button className="flex-shrink-0">
                    {openId === item.id ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    openId === item.id ? "mt-4 max-h-96" : "max-h-0"
                  )}
                >
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
