import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCoordinates, getWeather } from "@/consumo -de-apis/clima-api"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function ClimaPage() {
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("")

  const {
    data: location,
    isLoading: loadingCoords,
    isError: coordsError,
  } = useQuery({
    queryKey: ["coords", search],
    queryFn: () => getCoordinates(search),
    enabled: !!search,
  })

  const {
    data: weather,
    isLoading: loadingWeather,
    isError: weatherError,
  } = useQuery({
    queryKey: ["weather", location?.latitude, location?.longitude],
    queryFn: () => getWeather(location!.latitude, location!.longitude),
    enabled: !!location,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) setSearch(city)
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen px-100">
      <div className="w-full max-w-md space-y-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Escribe una ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit" disabled={loadingCoords || loadingWeather}>
            {loadingCoords || loadingWeather ? (
              <Loader2 className="animate-spin w-4 h-4" />
            ) : (
              "Buscar"
            )}
          </Button>
        </form>

        {coordsError && <p className="text-red-500">Ciudad no encontrada</p>}
        {weatherError && <p className="text-red-500">Error obteniendo clima</p>}

        {location && weather && (
          <Card>
            <CardHeader>
              <CardTitle>
                Clima en {location.name}, {location.country}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-center">
              <p><strong>Temperatura:</strong> {weather.temperature}°C</p>
              <p><strong>Viento:</strong> {weather.windspeed} km/h</p>
              <p><strong>Código clima:</strong> {weather.weathercode}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
  
