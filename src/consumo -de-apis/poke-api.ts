export interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

export async function getPokemonByNameOrId(nameOrId: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`)
  if (!res.ok) {
    throw new Error('Pokémon no encontrado')
  }
  return res.json()
}
