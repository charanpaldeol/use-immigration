// Purpose: Homepage four-step client process overview.
import { HOME_PROCESS_STEPS } from "../../lib/home-content";
import { Eyebrow } from "./eyebrow";

export function ProcessSection() {
  return (
    <section className="scroll-mt-20 border-y border-outline-variant bg-surface-container-low py-section-padding">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="max-w-2xl">
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="mt-stack-sm font-headline text-headline-lg-mobile font-semibold text-primary md:text-headline-lg">
            A Clear Path From First Call to Decision
          </h2>
          <p className="mt-stack-md font-body text-body-md text-on-surface-variant md:text-body-lg">
            Every file follows the same disciplined process. You always know the
            current step and the next action.
          </p>
        </div>
        <ol className="mt-section-padding grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {HOME_PROCESS_STEPS.map((step) => (
            <li
              key={step.step}
              className="rounded-xl border border-outline-variant bg-surface-container-lowest p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline text-display-lg font-bold leading-none text-primary-container/15">
                  {step.step}
                </span>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded border border-outline-variant bg-surface-container-low text-primary"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {step.icon}
                  </span>
                </span>
              </div>
              <h3 className="mt-stack-md font-headline text-headline-md font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-stack-sm font-body text-body-md text-on-surface-variant">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
