import React from 'react';

export default function PokedexFilters(props) {
  return (
    <section className="p-4">
      <form className="text-gray-800">
        <label>Search pokemon:</label>
        <input
          className="bg-red-400 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal placeholder-red-800"
          onChange={props.onChangeSearchText}
          value={props.searchText}
          placeholder="Enter Pokemon name..."
        ></input>
      </form>
    </section>
  );
}
