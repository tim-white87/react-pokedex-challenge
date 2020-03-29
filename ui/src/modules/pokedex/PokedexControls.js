import { css, StyleSheet } from 'aphrodite';
import React from 'react';

export function LargeIndicator() {
  return (
    <div
      className={`${css(
        styles.outerCircle
      )} bg-gray-400 flex items-center justify-center shadow-2xl`}
    >
      <div className={`${css(styles.innerCircle)} bg-blue-500`}></div>
    </div>
  );
}

export function SmallIndicator(props) {
  return (
    <div
      className={`${css(styles.smallCircle)} bg-${
        props.color
      } border shadow-2xl`}
    ></div>
  );
}

export function RoundButton() {
  return (
    <div className={`${css(styles.circle)} bg-gray-800 border shadow`}></div>
  );
}

export function PillButton(props) {
  return (
    <div
      className={`${css(styles.pillButton)} bg-${props.color ||
        'gray-800'} border rounded shadow`}
    ></div>
  );
}

export function PillScreen(props) {
  return (
    <div
      className={`${css(styles.pillScreen)} bg-${props.color ||
        'green-600'} border rounded shadow`}
    ></div>
  );
}

export function LargePillScreen(props) {
  return (
    <div
      className={`w-full bg-${props.color ||
        'gray-800'} h-12 border rounded shadow p-2 text-white`}
    >
      {props.children}
    </div>
  );
}

export function ControlPad(props) {
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

export function SquareButton(props) {
  return (
    <div
      className={`border border-gray-800 bg-${props.color ||
        'gray-400'} h-8 w-8 shadow`}
    ></div>
  );
}

export function LargePillButton(props) {
  return (
    <div
      className={`${css(styles.largePillButton)} bg-${props.color ||
        'gray-800'} border rounded shadow`}
    ></div>
  );
}

const styles = StyleSheet.create({
  outerCircle: {
    width: '4em',
    height: '4em',
    borderRadius: '50%'
  },
  innerCircle: {
    width: '3.5em',
    height: '3.5em',
    borderRadius: '50%'
  },
  smallCircle: {
    width: '1em',
    height: '1em',
    borderRadius: '50%'
  },
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
  },
  largePillButton: {
    width: '10em',
    height: '3em'
  }
});
