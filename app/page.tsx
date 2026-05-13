// Purpose: This file builds the home page by arranging the main sections visitors see from top to bottom.
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "./components/contact-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const IMG = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG3XG6-9A0B7w8Y0Xag4QPOe3aoDw3BLC8X4wmx-x23spm0SGM_hRnP6-FiFVresu9tsyqGKY9sRY3o-ruImS62nfczbYtflVBH6EOutAQBe9EYkv6_mCWI0Mu9PbI3hh8OL3NudgcIhc1ibmD-tnT_h21Dxpib2fOdHfJMoZ2LvpN9wvQFdY5WjNVkFBA4TE-qNqQCeuL0ZgbotJPeTRpwdQ4kLyyexjwTMwRuyU6PyY_8l2Y9nhcL72s8-hjqQ-zMlJ8h4XD4kU",
  workCard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDl1xd6A_2HG4ZSe1mM_Pa0eavWmD9HiWVAWQdLb5AUUgjIhriCmZUgTbmSBRV5ftNIYRU_4Piwd4m3jjc99CCjSX1Lkap-as2qU1OSytIyWVoibwFeQ4OVFSr837sRC7nl44OsGAJKLU5B81tJwNico3ypGWnXYTiNh1lQC3tznbytsIbcXeDcHkhiSSFaLid0uLgZePEZ2nRB1sCwpZRlaN7X11_NRg0Uu9fwGMu1NXI2olhu-Q3dvB5n8WJOOGetB2kggK908Ow",
  businessCard:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzHHBC1hwue60IX7LOtM0iRDB1uVP4Gb9ukVsQU5GAeponl6A290fZA4ie9tiLa7PUKsq6AOefyrUJHKGRW8QejnnTTFmf9qc2DzNgtoiyR4IeTJ00KzQNBXh1O-qEljglz5JyfdI1KqUlKT7u2yHgXCQZiQANyxI4VFyk336FhbCQ9B5dvJMd56VBQPr7Q2LjAq-bXKfG65O3eAfRXvpb7xpXyjuiBkH8rWEoSdcCnXqtJd7wbWJJKH_ZdcpYNZqJ8NCvcA8vG9Q",
  testimonial:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAs3nmFpT730uEneuE-USWGQ1sA_P6aoQJLxxfjkyqcIkFd8S9IeQnXpklcLFnZRiJD-uYl_HbPuHtYT8sgkISGIoudICOQbac9nyFsZ1SBaBAJIgalH3Ciz_AMU-KxLUarEzoaUi05RP4D8VgMjOZl14TdxvpuY3doinaRtpBMEMfcxpXt4ulQ3cVmuh0MXGgE07uVSbTBuFnuAYrhTtNA9MqQkber4oyO7EVrCvMr8JoKHWuBkA5dRBIMkHw7nkRKFJ0My4wsWtw",
  blog1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAvuo5ZQy_CGiQZ_iseDzcsd-R34PUU2xHu9ZUY6zA5p0snAyG7E1P4oiuKgna3i63QoIrqzHdPzMUv5TQkBwIhg-HIuwvnzDcGxfWJMwy3GpXPtwF13Copbketsz5e02VgDcFBhTskbqBKDSbCXeuFi-4wLCFNu_E7P9uyvVn1F9XP75xyvUEGdjdRwvlIAg4vySfb4RbqJ2kkTOBdw5Xezr0bgzimfPkBNXxa9F3TlIVKMrUJwtvOGATpaJgDMejo2bLUlCnKro",
  blog2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAR7ywMDDWtJCSsqHVVL1TY2MWlYel_wkF-tRe4Gn22yz7ZMJvgKRSr4mmdSZlDiMNuI_LGN5-UApBuUKqUISLl60R_iFKyhqBZ5cn-jCqUc8wtVDz3BYFgTRUFJUsoXkmn4htz7202HZtS2S5Ujpb3WVi1QTuLiSlzew42orMiY83h-5wmU3YKHZfGiJjgGumAb9tWJIzfsf3v31HirUKjsCtXPEFQgoSQ_Viiw3K4QZ6Q7WRE1vorwfe9ds1qgm8kTynDpdwy5Fc",
  blog3:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBef4wZIC1twCvJR7KGajx_O1JRdCUR80hxElEWrAZPMNpzF78ADehVNmn1NoyifzS6UbiiuplWFcNr5Y-SWnt_AyfdR1TaWAyw7tR4aA2cAz7Z6pjc5FYIEc3tjDRz0V6cKYZXC6QFpB2G7_tG0kMTKKdOa8hqOdDNwRUCQdWXn4HvYYrBKwndojTDOE2Evzw0PWl1256G2R_GP4l28yaa0nWB-p0GpX-TouX9djkAFWla_zgFC8EDJ18ssizOmnEKg6s9Owe8sQQ",
} as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[min(100vh,600px)] items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            <Image
              src={IMG.hero}
              alt=""
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-padding">
            <div className="max-w-2xl">
              <span className="mb-stack-md inline-block rounded border border-on-primary/30 bg-on-primary/10 px-3 py-1 font-label text-label-md font-medium uppercase tracking-[0.12em] text-on-primary backdrop-blur-sm">
                Global Reach, Local Expertise
              </span>
              <h1 className="mb-stack-lg font-headline text-headline-lg-mobile font-bold tracking-tight text-on-primary md:text-display-lg">
                Your Trusted Partner in Global Migration
              </h1>
              <p className="mb-stack-lg font-body text-body-lg text-on-primary/90">
                Licensed consultants helping individuals, families, and
                businesses migrate to Canada, the US, the UK, and Australia —
                with end-to-end case management in five languages.
              </p>
              <div
                id="assessment"
                className="flex flex-wrap gap-stack-md scroll-mt-20"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary shadow-[var(--shadow-institutional)] transition-colors hover:bg-secondary-container"
                >
                  Start Free Assessment
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-on-primary px-8 py-4 font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary transition-colors hover:border-secondary hover:bg-secondary hover:text-on-primary"
                >
                  View Services
                </Link>
              </div>
              <div className="mt-stack-lg flex flex-wrap gap-gutter border-t border-on-primary/20 pt-stack-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined material-symbols-filled text-secondary text-2xl">
                    verified
                  </span>
                  <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                    ICCRC-Certified Consultants
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined material-symbols-filled text-secondary text-2xl">
                    trending_up
                  </span>
                  <span className="font-label text-label-lg font-semibold tracking-[0.05em] text-on-primary">
                    98% Success Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services — bento */}
        <section
          id="services"
          className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
        >
          <div className="mb-section-padding text-center">
            <h2 className="mb-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
              Immigration Pathways
            </h2>
            <p className="mx-auto max-w-xl font-body text-body-md text-on-surface-variant">
              Tailored legal strategies for individuals, families, and
              businesses looking to expand their horizons.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12 md:auto-rows-fr md:min-h-[500px]">
            <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-8">
              <div className="absolute inset-0 z-0">
                <Image
                  src={IMG.workCard}
                  alt=""
                  fill
                  className="object-cover opacity-10 transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                  work
                </span>
                <h3 className="mb-2 font-headline text-headline-md font-semibold text-primary">
                  Work &amp; Professional
                </h3>
                <p className="mb-6 max-w-md font-body text-body-md text-on-surface-variant">
                  Secure your career in a new country with our comprehensive
                  work permit and skilled worker visa solutions.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Learn more
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                school
              </span>
              <div>
                <h3 className="mb-2 font-headline text-headline-md font-semibold text-primary">
                  Education
                </h3>
                <p className="mb-4 font-body text-body-md text-on-surface-variant">
                  Study permits, institutional placements, and post-graduation
                  work pathways tailored to your field.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Details
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                family_restroom
              </span>
              <div>
                <h3 className="mb-2 font-headline text-headline-md font-semibold text-primary">
                  Family Reunion
                </h3>
                <p className="mb-4 font-body text-body-md text-on-surface-variant">
                  Spousal sponsorship, dependent visas, and reunification
                  programs that keep your family together throughout the
                  process.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Details
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>

            <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-8 md:col-span-8">
              <div className="absolute inset-0 z-0">
                <Image
                  src={IMG.businessCard}
                  alt=""
                  fill
                  className="object-cover opacity-10 transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                  business_center
                </span>
                <h3 className="mb-2 font-headline text-headline-md font-semibold text-primary">
                  Business &amp; Investment
                </h3>
                <p className="mb-6 max-w-md font-body text-body-md text-on-surface-variant">
                  Capitalize on global markets through entrepreneur and investor
                  visa categories.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary"
                >
                  Learn more
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why us */}
        <section
          id="about"
          className="scroll-mt-20 bg-surface-container-low py-section-padding"
        >
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-section-padding px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
            <div>
              <h2 className="mb-stack-lg font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
                Unwavering Commitment to Your Success
              </h2>
              <div className="space-y-stack-lg">
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="material-symbols-outlined text-on-primary">
                      gavel
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Legal Excellence
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Our team stays at the forefront of shifting global policies
                      to provide accurate advice.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="material-symbols-outlined text-on-primary">
                      visibility
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Total Transparency
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Real-time tracking of your application progress through our
                      secure portal.
                    </p>
                  </div>
                </div>
                <div className="flex gap-stack-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="material-symbols-outlined text-on-primary">
                      public
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-primary">
                      Global Presence
                    </h3>
                    <p className="font-body text-body-md text-on-surface-variant">
                      Offices strategically located in key migration hubs across
                      five continents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-[var(--shadow-institutional)] sm:h-[500px]">
              <Image
                src={IMG.testimonial}
                alt="Family in their home"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-outline-variant bg-white/95 p-6 backdrop-blur-sm">
                <p className="font-body text-body-lg italic text-primary">
                  &ldquo;USD Immigration turned our dream into reality. Their
                  precision was unmatched.&rdquo;
                </p>
                <p className="mt-2 font-label text-label-lg font-semibold tracking-[0.05em] text-on-surface-variant">
                  — The Rodriguez Family, Canada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog previews */}
        <section
          id="insights"
          className="mx-auto max-w-container-max scroll-mt-20 px-margin-mobile py-section-padding md:px-margin-desktop"
        >
          <div className="mb-section-padding flex flex-col justify-between gap-stack-md sm:flex-row sm:items-end">
            <div>
              <h2 className="font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
                Insights &amp; Updates
              </h2>
              <p className="mt-2 font-body text-body-md text-on-surface-variant">
                Latest news in global migration policy.
              </p>
            </div>
            <Link
              href="#insights"
              className="shrink-0 self-start border-b-2 border-secondary pb-1 font-label text-label-lg font-semibold tracking-[0.05em] text-secondary sm:self-auto"
            >
              View All Articles
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <article className="flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-outline-variant">
                <Image
                  src={IMG.blog1}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  POLICY UPDATE
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  2026 Changes to Skilled Worker Visas
                </h3>
                <p className="line-clamp-2 font-body text-body-md text-on-surface-variant">
                  How new points-based systems are affecting applicants from the
                  tech sector across North America and Europe.
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-outline-variant">
                <Image
                  src={IMG.blog2}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  TRAVEL GUIDE
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  Navigating Post-Pandemic Borders
                </h3>
                <p className="line-clamp-2 font-body text-body-md text-on-surface-variant">
                  A practical guide to current travel requirements and health
                  documentation for immigrants in 2026.
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-outline-variant">
                <Image
                  src={IMG.blog3}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label text-label-md font-medium text-secondary">
                  SUCCESS STORY
                </span>
                <h3 className="font-headline text-headline-md font-semibold leading-tight text-primary">
                  From Student to Startup Founder
                </h3>
                <p className="line-clamp-2 font-body text-body-md text-on-surface-variant">
                  How Sarah Chen used the Entrepreneur pathway to build her
                  company in London.
                </p>
              </div>
            </article>
          </div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
