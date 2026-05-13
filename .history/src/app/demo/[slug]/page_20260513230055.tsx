import Image from "next/image";
import { demos } from "@/lib/demo-data";

interface Props {
  params: {
    slug: string;
  };
}

export default function DemoDetailsPage({ params }: Props) {
  const demo = demos.find(
    (item) => item.slug === params.slug
  );

  if (!demo) {
    return <div>Demo not found</div>;
  }

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative min-h-[500px] overflow-hidden rounded-3xl">
          <Image
            src={demo.image}
            alt={demo.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-5xl font-black">
            {demo.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            {demo.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {demo.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-violet-100 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}