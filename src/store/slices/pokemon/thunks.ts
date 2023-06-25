import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  console.log(page);
  return async (dispatch) => {
    dispatch(startLoading());

    //const res = await fetch(`https://pokeapi.co/api/v2//pokemon?limit=10&offset=${page * 10}`)
    //const data = await res.json();

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
