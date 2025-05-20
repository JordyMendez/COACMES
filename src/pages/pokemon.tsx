import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPokemonByNameOrId } from "@/consumo -de-apis/poke-api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function PokemonPage() {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")

  const {
    data: pokemon,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["pokemon", search],
    queryFn: () => getPokemonByNameOrId(search),
    enabled: false, // evitar auto-fetch
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setSearch(query)
    await refetch()
  }

return (
  <div className="flex-1 flex items-center justify-center min-h-screen px-100">
    <div className="flex flex-col items-center gap-6 w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <Input
          placeholder="Nombre o ID del Pokémon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" disabled={isFetching}>
          {isFetching ? <Loader2 className="animate-spin w-4 h-4" /> : "Buscar"}
        </Button>
      </form>

      {isError && (
        <p className="text-red-500 text-center">Pokémon no encontrado</p>
      )}

      {pokemon && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="capitalize">
              {pokemon.name} (ID: {pokemon.id})
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-2">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
              <strong>Tipos:</strong>{" "}
              {pokemon.types.map((t) => t.type.name).join(", ")}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  </div>
)
}