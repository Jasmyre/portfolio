import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="relative py-16" id="cta">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
          <CardContent className="space-y-6 p-8 text-center md:p-12">
            <div>
              <h3 className="mb-2 font-bold text-2xl text-foreground md:text-3xl">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground">
                Let&apos;s discuss how I can help transform your ideas into
                reality with expert development and design.
              </p>
            </div>
            <Button
              asChild
              className="bg-primary px-8 font-semibold text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Link href={"#contact"}>Get In Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
