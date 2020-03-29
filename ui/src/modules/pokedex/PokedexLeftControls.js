import React from 'react';
import {
  ControlPad,
  PillButton,
  PillScreen,
  RoundButton
} from './PokedexControls';

export default function PokedexButtonControls() {
  return (
    <section className="flex py-8">
      <RoundButton />
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 flex justify-center">
          <PillButton color="red-800" />
        </div>
        <div className="w-1/2 flex justify-center">
          <PillButton />
        </div>
        <div className="w-full flex justify-center mt-6">
          <PillScreen />
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <ControlPad />
      </div>
    </section>
  );
}
