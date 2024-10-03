import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import '../styles/body.css';

const Body = ({ updateScore }) => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const fetchPokemons = async () => {
    try {
      const responses = await Promise.all(
        [...Array(20).keys()].map((i) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`).then((res) =>
            res.json()
          )
        )
      );
      const pokemonData = responses.map((pokemon) => ({
        name: pokemon.name,
        image: pokemon.sprites.front_default,
      }));
      setPokemons(shuffleCards(pokemonData));
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  const shuffleCards = (cards) => {
    return cards
      .map((card) => ({ ...card, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((card) => ({ name: card.name, image: card.image }));
  };

  useEffect(() => {
    fetchPokemons(); 
  }, []);

  const handleCardClick = (name) => {
    if (clickedCards.includes(name)) {
      alert("You clicked the same card! Game over!");
      setClickedCards([]);
      updateScore(0);
    } else {
      setClickedCards([...clickedCards, name]);
      updateScore((prevScore) => prevScore + 1);
      setPokemons(shuffleCards(pokemons)); 
    }
  };

  return (
    <div className="card-grid">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.image}
          onClick={() => handleCardClick(pokemon.name)}
        />
      ))}
    </div>
  );
};

Body.propTypes = {
  updateScore: PropTypes.func.isRequired,
};

export default Body;
