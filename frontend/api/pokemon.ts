import { $axios } from "../utils/api"

const pokemons: string[] = [
  'https://pokeapi.co/api/v2/pokemon/ditto'
]

export const getPokemonURL = ()=> {
  return pokemons[0]
}

export default {};