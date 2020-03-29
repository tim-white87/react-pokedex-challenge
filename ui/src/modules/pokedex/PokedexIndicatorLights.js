import React from 'react';
import { LargeIndicator, SmallIndicator } from './PokedexControls';

export default function PokedexHeader() {
  return (
    <section className="py-8 flex">
      <LargeIndicator />
      {['red-500', 'yellow-500', 'green-500'].map((indicator, i) => (
        <div key={`indicator-${i}`} className="mx-2">
          <SmallIndicator color={indicator} />
        </div>
      ))}
    </section>
  );
}
