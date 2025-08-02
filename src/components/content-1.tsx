import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <h2 className="text-muted-foreground text-center text-3xl font-semibold text-balance md:text-4xl">
          About me
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/dev.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/dev.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Gemini is evolving to be more than just the models.{" "}
              <span className="text-accent-foreground font-bold">
                It supports an entire ecosystem
              </span>{" "}
              — from products innovate.
            </p>
            <p className="text-muted-foreground">
              It supports an entire ecosystem — from products to the APIs and
              platforms helping developers and businesses innovate
            </p>

            <div className="pt-6">
              <p className="text-muted-foreground">
                Gemini is evolving to be more than just the models.{" "}
                <span className="text-accent-foreground font-bold">
                  It supports an entire ecosystem
                </span>{" "}
                — from products innovate.
              </p>
              <p className="text-muted-foreground">
                It supports an entire ecosystem — from products to the APIs and
                platforms helping developers and businesses innovate
              </p>
              {/* <blockquote className="border-l-4 pl-4">
                  <p>
                    Using TailsUI has been like unlocking a secret design
                    superpower. It&apos;s the perfect fusion of simplicity and
                    versatility, enabling us to create UIs that are as stunning
                    as they are user-friendly.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium">John Doe, CEO</cite>
                    <Image
                      className="h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="20"
                    />
                  </div>
                </blockquote> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
