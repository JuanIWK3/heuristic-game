import type { Problem, Site } from '@/data/sites';
import { ProblemDialog } from './problem-dialog';

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
        <h2 className={'font-bold bg-white flex my-2 border p-4 rounded'}>
          {site.name}
        </h2>
      )}
    </div>
  );
}
