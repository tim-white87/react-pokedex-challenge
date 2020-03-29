import React from 'react';
import {
  LargePillButton,
  PillButton,
  SmallIndicator,
  SquareButton
} from './PokedexControls';

export default function PokedexRightControls() {
  return (
    <section className="flex flex-col py-8">
      <div className="w-full flex justify-end">
        <PillButton />
        <div className="ml-4">
          <PillButton />
        </div>
      </div>
      <div className="w-full flex justify-between mt-4 items-center">
        <div className="flex">
          <SquareButton />
          <SquareButton />
        </div>
        <SmallIndicator color="yellow-600" />
      </div>
      <div className="flex w-full mt-4">
        <div className="w-1/2 flex justify-center">
          <LargePillButton />
        </div>
        <div className="w-1/2 flex justify-center">
          <LargePillButton />
        </div>
      </div>
    </section>
  );
}
