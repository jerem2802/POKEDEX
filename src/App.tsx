import { useState } from "react";
import PokemonCard from "./Components/PokemonCard";

function App() {
	const [pokemonIndex, setpokemonIndex] = useState(0);
	const Precedent = () => {
		setpokemonIndex(pokemonIndex - 1);
	};
	const Suivant = () => {
		setpokemonIndex(pokemonIndex + 1);
	};
	return (
		<section>
			<div>
				{pokemonIndex > 0 ? (
					<button type="button" onClick={Precedent}>
						Précedent
					</button>
				) : null}
				{pokemonIndex < pokemonList.length - 1 ? (
					<button type="button" onClick={Suivant}>
						Suivant
					</button>
				) : (
					""
				)}
			</div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</section>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];
export default App;
