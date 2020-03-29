import { css, StyleSheet } from 'aphrodite';
import React from 'react';

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

function LargeIndicator() {
  return (
    <div
      className={`${css(
        styles.outerCircle
      )} bg-gray-400 flex items-center justify-center`}
    >
      <div className={`${css(styles.innerCircle)} bg-blue-500`}></div>
    </div>
  );
}

function SmallIndicator(props) {
  return (
    <div
      className={`${css(styles.smallCircle)} bg-${props.color} border`}
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
  }
});
