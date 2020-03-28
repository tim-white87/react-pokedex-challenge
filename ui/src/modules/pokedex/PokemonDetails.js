import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function PokemonDetails(props) {
  return (
    <section>
      <div className="bg-white shadow p-2">
        <Button variant="contained" color="primary" component={Link} to="/">
          Back
        </Button>
      </div>
    </section>
  );
}
