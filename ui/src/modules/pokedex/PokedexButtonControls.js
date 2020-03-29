import { css, StyleSheet } from 'aphrodite';
import React from 'react';

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

function RoundButton() {
  return <div className={`${css(styles.circle)} bg-gray-800 border`}></div>;
}

function PillButton(props) {
  return (
    <div
      className={`${css(styles.pillButton)} bg-${props.color ||
        'gray-800'} border rounded`}
    ></div>
  );
}

function PillScreen(props) {
  return (
    <div
      className={`${css(styles.pillScreen)} bg-${props.color ||
        'green-600'} border rounded`}
    ></div>
  );
}

function ControlPad(props) {
  return (
    <div className="flex flex-col h-24 w-24">
      <div className="h-8 w-full flex justify-center">
        <div className={`w-8 border bg-${props.color || 'gray-800'}`}></div>
      </div>
      <div className="h-8 w-full flex justify-center">
        <div className={`w-8 border bg-${props.color || 'gray-800'}`}></div>
        <div className={`w-8 border bg-${props.color || 'gray-800'}`}></div>
        <div className={`w-8 border bg-${props.color || 'gray-800'}`}></div>
      </div>
      <div className="h-8 w-full flex justify-center">
        <div className={`w-8 border bg-${props.color || 'gray-800'}`}></div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: '2em',
    height: '2em',
    borderRadius: '50%'
  },
  pillButton: {
    width: '4em',
    height: '.5em'
  },
  pillScreen: {
    width: '6em',
    height: '4em'
  }
});
