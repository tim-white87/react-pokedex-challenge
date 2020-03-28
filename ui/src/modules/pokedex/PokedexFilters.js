import { useQuery } from '@apollo/react-hooks';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { gql } from 'apollo-boost';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';

const GET_POKETYPES = gql`
  query getPokeTypes {
    pokeTypes @client
  }
`;

export default function PokedexFilters(props) {
  const { loading, error, data } = useQuery(GET_POKETYPES);

  const debounceSearchText = useCallback(
    debounce(props.onChangeFilter, 800),
    []
  );

  function onChangeSearchText(e) {
    debounceSearchText({ name: e.target.value });
  }

  function onChangePokeTypes(e, val) {
    props.onChangeFilter({ type: val.map(t => t.label) });
  }

  function onChangePokeWeaknesses(e, val) {
    props.onChangeFilter({ weaknesses: val.map(t => t.label) });
  }

  // TODO make input loading component and use
  let statusText;
  let typesAutoComplete = <div className="text-center">{statusText}</div>;
  let weaknessesAutoComplete = <div className="text-center">{statusText}</div>;

  if (loading) {
    statusText = 'Loading...';
  } else if (error) {
    statusText = 'Something went wrong';
  } else if (data.pokeTypes) {
    const options = data.pokeTypes.map(label => ({ label }));
    typesAutoComplete = (
      <Autocomplete
        variant="outlined"
        multiple
        className="w-full"
        filterSelectedOptions
        onChange={onChangePokeTypes}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={params => (
          <TextField {...params} variant="outlined" placeholder="Type" />
        )}
        options={options}
        getOptionLabel={option => option.label}
      />
    );

    weaknessesAutoComplete = (
      <Autocomplete
        variant="outlined"
        multiple
        filterSelectedOptions
        className="w-full"
        onChange={onChangePokeWeaknesses}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={params => (
          <TextField {...params} variant="outlined" placeholder="Weaknesses" />
        )}
        options={options}
        getOptionLabel={option => option.label}
      />
    );
  }

  return (
    <section className="p-4 h-full">
      <form className="flex flex-col justify-center h-full">
        <div className="w-full">
          <TextField
            onChange={onChangeSearchText}
            variant="outlined"
            className="w-full"
            placeholder="Search Pokemon"
          />
        </div>
        <div className="mt-2 w-full">{typesAutoComplete}</div>
        <div className="mt-2 w-full">{weaknessesAutoComplete}</div>
      </form>
    </section>
  );
}
