import React from 'react';

export default function AboutMe() {
  return (
    <section className="w-2/3 rounded bg-white p-8 shadow">
      <h3 className="text-xl text-center">Timothy J White</h3>
      <h4 className="mt-1 text-sm text-center">
        <a className="text-red-600" href="mailto:timma.j.white@gmail.com">
          timma.j.white@gmail.com
        </a>{' '}
      </h4>
      <p className="mt-2">
        A little about me - I got my start as a full stack web application
        developer building C#/.NET applications running on IIS servers at an
        on-premises data center at IHS Markit. As the web world evolved, I was
        an active member in helping move the existing stack from server-side
        driven apps, to front end SPAs using angular and a node/express backend
        RESTFUL APIs. I was also a part of a data center migration moving our
        infrastructure from bare metal servers to the cloud.
      </p>
      <p className="mt-2">
        My greatest strength is probably with Vue.js, but I have built
        applications with both Angular and React. I am very familiar with
        RESTful architecture, and recently have experience building out graphql
        schema as well.
      </p>
      <p className="mt-2">
        Along with componentry, I am familiar with modern build tools including
        Webpack, Gulp, and Grunt. I have strong CSS, LESS, and SASS skills as
        well, recently using TailwindCSS, Bulma, and Bootstrap styling
        libraries.
      </p>
      <p className="mt-2">
        In terms of teamwork, I have been working on agile teams for the last 5
        years, and have done several formal agile trainings. Understanding the
        importance of flexibility and change in the engineering process is
        critical in ensuring the product evolves with stake holder needs.
      </p>
      <p className="mt-2">
        Please take a look at my{' '}
        <a className="text-red-600" href="https://github.com/cecotw">
          github account
        </a>{' '}
        with a direct link to this repository located{' '}
        <a
          className="text-red-600"
          href="https://github.com/cecotw/react-pokedex-challenge"
        >
          here
        </a>
        .
      </p>
    </section>
  );
}
