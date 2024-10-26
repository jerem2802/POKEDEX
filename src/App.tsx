import PokemonCard from "./Components/PokemonCard";

function App() {
	return (
		<section>
			<PokemonCard pokemon={pokemonList[0]} />
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
		name: "mew",
	},

	{
		name: "mewtoo",
	},
];

export default App;
