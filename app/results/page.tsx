'use client';

import { Suspense } from 'react';
import { ResultsContent } from './result-content';

export default function ResultsPage() {
  return (
    <Suspense fallback={<p>Loading results</p>}>
      <ResultsContent />
    </Suspense>
  );
}
