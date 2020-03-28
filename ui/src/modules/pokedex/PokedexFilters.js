import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { debounce } from 'lodash';
import React, { useCallback } from 'react';

export default function PokedexFilters(props) {
  const debounceSearchText = useCallback(
    debounce(props.onChangeSearchText, 800),
    []
  );

  function onSearchTextChange(e) {
    debounceSearchText(e.target.value);
  }

  return (
    <section className="p-4 h-full">
      <form className="flex flex-col justify-center h-full">
        <div className="w-full">
          <TextField
            onChange={onSearchTextChange}
            value={props.searchText}
            variant="outlined"
            className="w-full"
            placeholder="Search Pokemon"
          />
        </div>
        <div className="mt-2 w-full">
          <Autocomplete
            variant="outlined"
            multiple
            className="w-full"
            filterSelectedOptions
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
            options={[{ label: 'Foo' }]}
            getOptionLabel={option => option.label}
          />
        </div>
        <div className="mt-2 w-full">
          <Autocomplete
            variant="outlined"
            multiple
            filterSelectedOptions
            className="w-full"
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
              <TextField
                {...params}
                variant="outlined"
                placeholder="Weaknesses"
              />
            )}
            options={[{ label: 'Foo' }]}
            getOptionLabel={option => option.label}
          />
        </div>
      </form>
    </section>
  );
}
