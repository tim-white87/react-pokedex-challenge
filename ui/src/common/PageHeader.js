import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader() {
  return (
    <section className="w-full shadow p-4 bg-gray-100">
      <nav className="flex">
        <h2 className="text-lg text-red-600 mr-4">Pokedex Challenge</h2>
        <ul className="flex">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
