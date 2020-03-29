import { filter as _filter } from 'lodash';

// MOCKS: back end data query
async function getPokeData(cache) {
  // TODO check if cache has data and return cache if so
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    );
    const data = await res.json();
    return data.pokemon;
  } catch (e) {
    console.error(`Something went wrong with the data source: ${e}`);
  }
  return;
}

// MOCKS: filter on the backend
function filterPokemon(pokemon, filter) {
  Object.keys(filter).forEach(key => {
    if (typeof filter[key] === 'string') {
      pokemon = pokemon.filter(
        p => p[key].toLowerCase().indexOf(filter[key].toLowerCase()) > -1
      );
    } else if (Array.isArray(filter[key])) {
      pokemon = pokemon.filter(p => filter[key].every(k => p[key].includes(k)));
    } else {
      pokemon = _filter(pokemon, filter[key]);
    }
  });
  return pokemon;
}

// MOCKS: backend request for the poke types
function mapPokeTypes(pokemon) {
  let types = [];
  pokemon.forEach(p => {
    p.type.forEach(type => (types.includes(type) ? null : types.push(type)));
  });
  return types;
}

const POKEMON_TYPENAME = 'Pokemon';

// MOCKS: backend resolvers
export default {
  Query: {
    pokedex: async (_, args, { cache }) => {
      let pokemon = await getPokeData(cache);
      if (args && args.filter) {
        pokemon = filterPokemon(pokemon, args.filter);
      }
      return pokemon.map(p => {
        p.__typename = POKEMON_TYPENAME;
        return p;
      });
    },
    pokeTypes: async (_, args, { cache }) => {
      let pokemon = await getPokeData(cache);
      return mapPokeTypes(pokemon);
    },
    pokemon: async (_, args, { cache }) => {
      let pokemon = await getPokeData(cache);
      const poke = pokemon.find(p => p.id.toString() === args.id);
      if (poke.next_evolution) {
        poke.next_evolution = poke.next_evolution.map(ne => {
          const p = pokemon.find(p => p.num === ne.num);
          p.__typename = POKEMON_TYPENAME;
          return p;
        });
      } else {
        poke.next_evolution = null;
      }
      if (poke.prev_evolution) {
        poke.prev_evolution = poke.prev_evolution.map(ne => {
          const p = pokemon.find(p => p.num === ne.num);
          p.__typename = POKEMON_TYPENAME;
          return p;
        });
      } else {
        poke.prev_evolution = null;
      }
      poke.__typename = POKEMON_TYPENAME;
      return poke;
    }
  }
};
