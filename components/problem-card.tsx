import type { Problem, Site } from '@/data/sites';
import { ProblemDialog } from './problem-dialog';
import { Button } from './ui/button';

export function ProblemCard({
  site,
  selected,
}: {
  site: Site;
  selected: { site: Site; problem: Problem } | null;
}) {
  return (
    <div key={site.name}>
      {selected && selected.site.name === site.name ? (
        <ProblemDialog problem={selected?.problem} name={site.name} />
      ) : (
        <Button className={''} variant={'secondary'}>
          {site.name}
        </Button>
      )}
    </div>
  );
}
