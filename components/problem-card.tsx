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
      <h2
        className={`font-bold flex my-2 border p-4 rounded ${selected?.site.name === site.name ? 'text-red-500' : ''}`}
      >
        {selected && selected.site.name === site.name ? (
          <ProblemDialog problem={selected?.problem} name={site.name} />
        ) : (
          site.name
        )}
      </h2>
    </div>
  );
}
