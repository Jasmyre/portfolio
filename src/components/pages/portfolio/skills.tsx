import { InfiniteSlider } from "@/components/infinite-slider";
import {
  Gemini,
  GooglePaLM,
  MagicUI,
  MediaWiki,
  Replit,
  VSCodium,
} from "@/components/logos";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function SkillsSection() {
  return (
    <section>
      <div className="bg-muted dark:bg-background py-24 md:py-32">
        <div className="mx-auto max-w-screen px-6">
          <div className="mx-auto mb-12 max-w-lg space-y-6 text-center">
            <h2 className="text-muted-foreground text-center text-3xl font-semibold text-balance md:text-4xl">
              Technologies i work with
            </h2>
            {/* <p className="text-muted-foreground">Connect seamlessly with popular platforms and services to enhance your workflow.</p>

                        <Button
                            variant="outline"
                            size="sm"
                            asChild>
                            <Link href="#">Get Started</Link>
                        </Button> */}
          </div>
          <div className="bg-muted/25 group relative mx-auto items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div>
              <InfiniteSlider
                className="py-12"
                gap={24}
                speed={60}
                speedOnHover={30}
              >
                <SkillsCard isCenter={true} className="size-24">
                  <Image src={"/svg-icon/javascript.svg"} width={80} height={80} alt="Javascript"/>
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Gemini />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Gemini />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
              </InfiniteSlider>
            </div>
          </div>
          <div className="bg-muted/25 group relative mx-auto items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
            <div>
              <InfiniteSlider
                className="py-12"
                gap={24}
                speed={60}
                speedOnHover={30}
              >
                <SkillsCard isCenter={true} className="size-24">
                  <Gemini />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Gemini />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Gemini />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <Replit />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MediaWiki />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <MagicUI />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <VSCodium />
                </SkillsCard>
                <SkillsCard isCenter={true} className="size-24">
                  <GooglePaLM />
                </SkillsCard>
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillsCard = ({
  children,
  className,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative z-20 flex size-12 cursor-pointer rounded-full border",
        className,
      )}
    >
      <div className={cn("m-auto size-fit *:size-5", isCenter && "*:size-8")}>
        {children}
      </div>
    </div>
  );
};
