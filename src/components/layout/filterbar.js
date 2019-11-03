import React, { Component } from 'react';
import styled from 'styled-components';


export default class Filterbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a
                    href=""
                     className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">pokedex</a>
                    <form class="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
}
