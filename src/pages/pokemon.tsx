import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPokemonByNameOrId } from "@/consumo -de-apis/poke-api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2, Search, Tag } from "lucide-react" // Iconos añadidos

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
    setSearch(query.toLowerCase())
    await refetch()
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 px-86 py-10">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white mb-2">
              Busca tu Pokémon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
              <Input
                placeholder="Nombre o ID del Pokémon"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-lg placeholder:text-lg px-4 py-3"
                autoComplete="off"
              />
              <Button
  type="submit"
  disabled={isFetching}
  className="flex items-center gap-2 transition-colors duration-300 disabled:cursor-wait disabled:bg-gray-500"
>
  {isFetching ? (
    <>
      <Loader2 className="animate-spin w-6 h-6 text-white" />
      <span className="sr-only">Buscando...</span> {/* accesibilidad */}
    </>
  ) : (
    <>
      <Search className="w-5 h-5" />
      Buscar
    </>
  )}
</Button>

            </form>

            {isError && (
              <p className="text-red-400 text-center font-semibold">
                Pokémon no encontrado
              </p>
            )}

            {pokemon && (
              <Card className="mt-4 bg-white/10 shadow-lg rounded-lg border border-white/20 ">
                <CardHeader >
                  <CardTitle className="capitalize text-xl text-center  from-purple-900">
                    {pokemon.name} (ID: {pokemon.id})
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 from-purple-900">
                  <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-40 h-40 object-contain "
                  />
                  <div className="flex gap-2 flex-wrap justify-cente">
                    <Tag className="w-5 h-5" />
                    <strong>Tipos:</strong>
                    {pokemon.types.map((t) => (
                      <span
                        key={t.type.name}
                        className="bg-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {t.type.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
