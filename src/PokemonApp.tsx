import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { RootState } from "./store";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    page,
    pokemons = [],
  } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons(0));
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>
        Next page:{page}
      </button>
    </>
  );
};
