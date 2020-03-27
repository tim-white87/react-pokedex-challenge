import React from 'react';
import PageHeader from './PageHeader';

export default function Page(props) {
  return (
    <section>
      <PageHeader></PageHeader>
      <div className="flex justify-center p-4">{props.content}</div>
    </section>
  );
}
