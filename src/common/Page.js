import React from 'react';

export default function Page(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.content}
    </section>
  );
}
