import { AnimatedGroup } from "@/components/ui/animated-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "SaaS Founder",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Working with this developer transformed our web platform. The attention to detail and technical expertise resulted in a 40% increase in user engagement.",
  },
  {
    name: "Jane Doe",
    role: "E-commerce Manager",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "Our new website delivered exceptional results - mobile conversions increased by 35% thanks to the responsive design and optimized performance.",
  },
  {
    name: "John Doe",
    role: "Startup CEO",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "The developer delivered a complex web application ahead of schedule. Their React expertise and clean code made future enhancements effortless.",
  },
  {
    name: "Jane Doe",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "From concept to deployment, the process was seamless. Our new corporate site perfectly captures our brand while exceeding accessibility standards.",
  },
  {
    name: "John Doe",
    role: "Product Owner",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Technical excellence meets creative design. The developer implemented advanced animations and transitions that make our dashboard intuitive and engaging.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section id="testimonial">
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <AnimatedGroup preset="slide">
              <h2 className="text-balance text-center font-semibold text-3xl text-muted-foreground md:text-4xl">
                feedbacks
              </h2>
            </AnimatedGroup>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div className="space-y-4" key={chunkIndex}>
                {chunk.map(({ name, role, quote, image }, index) => (
                  <AnimatedGroup key={index} once={true} preset="slide">
                    <Card>
                      <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                        <Avatar className="size-9">
                          <AvatarImage
                            alt={name}
                            height="120"
                            loading="lazy"
                            src={image}
                            width="120"
                          />
                          <AvatarFallback>ST</AvatarFallback>
                        </Avatar>

                        <div>
                          <h3 className="font-medium">{name}</h3>

                          <span className="block text-muted-foreground text-sm tracking-wide">
                            {role}
                          </span>

                          <blockquote className="mt-3">
                            <p className="text-foreground/75 italic">{quote}</p>
                          </blockquote>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedGroup>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
