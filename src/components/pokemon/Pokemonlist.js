import React, { Component } from 'react';
 
import Pokemoncard from './Pokemoncard';

import axios from 'axios';

export default class Pokemonlist extends Component {
state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
};

async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
}

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                <div className="row">
                {this.state.pokemon.map(pokemon => (
                    <Pokemoncard key={pokemon.name} name={pokemon.name} url={pokemon.url}>
                    </Pokemoncard>
                ))}
            </div>
            ) : (
                <h1>Loading</h1>
            )}
            </React.Fragment>
        );
    }
}
