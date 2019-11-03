import React, { Component } from 'react'

import styled from 'styled-components';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
`

export default class Pokemoncard extends Component {
state = {
    name:'',
    imageUrl:'',
    pokemonIndex:''
}

componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').lenght -2];
    const imageUrl = `https://github.com/PokeAPI/sprits/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({name, imageUrl, pokemonIndex});
}

    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className="card"></div>
                    <Sprite className="card-img-top rounded mx-auto mt-2"
                        src={this.state.imageUrl}
                    >
                    </Sprite>
                    <div className="card-body  mx-auto">
                        <h6 className="card-title mx-auto">{this.state.name}</h6>
                    </div>
            </div>
        )
    }
}
