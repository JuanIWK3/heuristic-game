import type { Problem, Site } from '@/data/sites';
import { ProblemDialog } from './problem-dialog';
import { Button } from './ui/button';
import Image from 'next/image';

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
        <ProblemDialog problem={selected?.problem} site={site} />
      ) : (
        <Button className={'cursor-default'} variant={'secondary'}>
          <Image
            src={site.logo ?? 'https://picsum.photos/50'}
            alt="logo"
            height={50}
            width={50}
          />
        </Button>
      )}
    </div>
  );
}
