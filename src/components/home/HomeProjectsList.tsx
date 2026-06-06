import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export type HomeProjectItem = {
  id: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  npm?: string;
  domainLabel?: string;
};

function ProjectBlock({ project }: { project: HomeProjectItem }) {
  const primaryHref = project.url ?? project.github;
  const titleIsLink = Boolean(primaryHref);

  return (
    <article className="group">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        {titleIsLink ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg font-semibold tracking-tight text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary sm:text-xl"
          >
            {project.title}
          </a>
        ) : (
          <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground sm:text-xl">{project.title}</h3>
        )}
        {project.domainLabel ? (
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {project.domainLabel}
          </span>
        ) : null}
      </div>
      <p
        className={cn(
          'mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted-foreground',
          titleIsLink && 'group-hover:text-foreground/80',
        )}
      >
        {project.description}
        {(project.github || project.npm) && (
          <>
            {' '}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
              >
                GitHub
              </a>
            ) : null}
            {project.github && project.npm ? (
              <span className="text-foreground/40" aria-hidden="true">
                {' '}
                ·{' '}
              </span>
            ) : null}
            {project.npm ? (
              <a
                href={project.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-border underline-offset-4 hover:decoration-primary"
              >
                npm
              </a>
            ) : null}
          </>
        )}
      </p>
    </article>
  );
}

export function HomeProjectsList({
  workProjects,
  openSourceProjects,
}: {
  workProjects: HomeProjectItem[];
  openSourceProjects: HomeProjectItem[];
}) {
  const hasWork = workProjects.length > 0;
  const hasOSS = openSourceProjects.length > 0;
  if (!hasWork && !hasOSS) return null;

  return (
    <div className="space-y-12">
      {hasWork ? (
        <div>
          <p className="section-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Work & experiments</p>
          <div>
            {workProjects.map((project, index) => (
              <div key={project.id}>
                {index > 0 ? <Separator className="my-10 bg-border" /> : null}
                <ProjectBlock project={project} />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {hasOSS ? (
        <div>
          {hasWork ? <Separator className="mb-10 bg-border" /> : null}
          <p className="section-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Open source</p>
          <div>
            {openSourceProjects.map((project, index) => (
              <div key={project.id}>
                {index > 0 ? <Separator className="my-10 bg-border" /> : null}
                <ProjectBlock project={project} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
