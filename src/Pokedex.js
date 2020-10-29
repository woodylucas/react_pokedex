import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'; 

class Pokedex extends Component {
    
    render() {
        let title; 
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        return (
            <div className="Pokedex">
                <h1>{title}</h1>
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((poke) => (
                        <Pokecard 
                            id={poke.id}   
                            name={poke.name} 
                            type={poke.type} 
                            exp={poke.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex; 