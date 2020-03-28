import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader() {
  return (
    <section className="w-full shadow bg-white flex justify-between">
      <h2 className="text-lg mr-4 self-center ml-6">Pokedex Challenge</h2>
      <nav className="flex text-sm h-12">
        <ul className="flex">
          <li className="mr-4 hover:bg-yellow-200 h-full flex px-4 items-center">
            <Link to="/" className="text-red-600">
              Pokedex
            </Link>
          </li>
          <li className="mr-4 hover:bg-yellow-200 h-full flex px-4 items-center">
            <Link to="/about" className="text-red-600">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
