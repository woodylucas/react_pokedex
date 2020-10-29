import React, {Component} from 'react'; 
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component {
    render() {
        const {id, name, type, exp} = this.props; 
        let imgSrc = `${POKE_API}${id}.png`
        return (
            // standard thing to do is give the div a className as Pokecard
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <img src={imgSrc} alt={name}/>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {exp}</div>
            </div>
        )
    }
}

export default Pokecard; 