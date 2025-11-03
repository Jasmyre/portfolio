import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <AnimatedGroup once={false} amount={0.1}>
          <h2 className="text-muted-foreground text-center text-3xl font-semibold text-balance md:text-4xl">
            About me
          </h2>
        </AnimatedGroup>
        <AnimatedGroup once={false} amount={0.1}>
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
              <div>
                <p className="text-muted-foreground text-pretty">
                  I&apos;m Jasmyre Lanuza, a{" "}
                  <span className="text-accent-foreground font-bold">
                    web developer
                  </span>{" "}
                  based in the Philippines. I focus on building simple, fast,
                  and functional websites that help people share their ideas
                  online without stressing over the tech side.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground text-pretty">
                  I started coding by creating small projects for personal use,
                  which quickly grew into building websites for friends and
                  clients. Over time, I&apos;ve learned to focus on the
                  essentials clean design, strong performance, and smooth user
                  experience. Most of my work is with individuals and small
                  teams who need a reliable developer to turn their vision into
                  a working website.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground text-pretty">
                  I like keeping things simple—clear communication, realistic
                  timelines, and results that meet your needs. Whether it&apos;s
                  a personal project or a small business site, I aim for
                  websites that are straightforward to use and easy to update.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground text-pretty">
                  If you&apos;re looking for someone to build a website that
                  works well and is easy to manage, feel free to check my
                  projects or get in touch.
                </p>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
