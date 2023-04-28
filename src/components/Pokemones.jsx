import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pokemones.css"

export default () => {
    const [pokemones, setPokemones] = useState([]);
    const [selectPokemon, setSelectPokemon] = useState('');
    const navigate = useNavigate();

    const getPokemones = async () => {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon");
        const data = await res.json();
        setPokemones(data.results);
    };

    useEffect(() => {
        getPokemones();
    }, []);

    const openPageDetailsOfPokemon = () => {
        navigate(`/pokemon/${selectPokemon}`);
    };

    return (
        <div>
            <h4>Selecciona un Pokemón</h4>
            <select 
                value={selectPokemon}
                onChange={({ target }) => setSelectPokemon(target.value)}
                >
                {pokemones.map((pokemon,i) => (
                    <option key={i} value={pokemon.name}> {pokemon.name} </option>
                ))}

            </select>

            <button onClick={ () => openPageDetailsOfPokemon()}>Ver detalle</button>
        </div>
    );
};