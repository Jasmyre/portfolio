import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export async function CTASection() {
  return (
    <section id="cta" className="relative py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Card className="border-primary/20 from-primary/5 to-secondary/5 bg-gradient-to-br backdrop-blur-sm">
          <CardContent className="space-y-6 p-8 text-center md:p-12">
            <div>
              <h3 className="text-foreground mb-2 text-2xl font-bold md:text-3xl">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground text-lg">
                Let&apos;s discuss how I can help transform your ideas into
                reality with expert development and design.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
              asChild
            >
              <Link href={"#contact"}>Get In Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
