// Purpose: Immersive photo card for a homepage service pathway (travel-card layout).
import Image from "next/image";
import Link from "next/link";
import type { HomeService } from "../../lib/home-content";

type HomeServiceCardProps = {
  service: HomeService;
};

export function HomeServiceCard({ service }: HomeServiceCardProps) {
  return (
    <article className="group relative h-[420px] w-full overflow-hidden rounded-eight shadow-[var(--shadow-service-card)]">
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        className="z-0 object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
      />

      <div className="service-card-glass relative z-10 flex h-full w-full flex-col justify-end p-6 text-white">
        <div className="mb-6">
          <h3 className="mb-3 font-headline text-2xl font-bold tracking-tight">
            {service.title}
          </h3>
          <p className="line-clamp-3 font-body text-sm leading-relaxed text-gray-200">
            {service.body}
          </p>
        </div>

        <Link
          href={service.href}
          className="inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 font-label text-sm font-bold tracking-wide text-primary transition-all hover:bg-secondary hover:text-on-secondary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
        >
          {service.cta}
        </Link>
      </div>
    </article>
  );
}
