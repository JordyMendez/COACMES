import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoordinates, getWeather } from "@/consumo -de-apis/clima-api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { ThermometerSun, Wind, CloudSun } from "lucide-react";
export default function ClimaPage() {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  const {
    data: location,
    isLoading: loadingCoords,
    isError: coordsError,
  } = useQuery({
    queryKey: ["coords", search],
    queryFn: () => getCoordinates(search),
    enabled: !!search,
  });

  const {
    data: weather,
    isLoading: loadingWeather,
    isError: weatherError,
  } = useQuery({
    queryKey: ["weather", location?.latitude, location?.longitude],
    queryFn: () => getWeather(location!.latitude, location!.longitude),
    enabled: !!location,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) setSearch(city);
  };

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-violet-900 p-6 px-95">
      <div className="w-full max-w-md space-y-6">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            placeholder="Escribe una ciudad"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-lg placeholder:text-lg text-amber-50"
          />
          <Button
            type="submit"
            disabled={loadingCoords || loadingWeather}
            className="flex items-center gap-2 disabled:cursor-wait disabled:bg-gray-600 transition"
          >
            {loadingCoords || loadingWeather ? (
              <>
                <Loader2 className="animate-spin w-6 h-6" />
                <span className="sr-only">Buscando...</span>
              </>
            ) : (
              "Buscar"
            )}
          </Button>
        </form>

        {coordsError && (
          <p className="text-red-400 text-center">Ciudad no encontrada</p>
        )}
        {weatherError && (
          <p className="text-red-400 text-center">Error obteniendo clima</p>
        )}

        {location && weather && (
          <Card>
            <CardHeader>
              <CardTitle>
                Clima en {location.name}, {location.country}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-center text-lg">
              <p className="flex items-center justify-center gap-2">
                <ThermometerSun className="w-5 h-5 text-orange-500" />
                <strong>Temperatura:</strong> {weather.temperature}°C
              </p>
              <p className="flex items-center justify-center gap-2">
                <Wind className="w-5 h-5 text-blue-500" />
                <strong>Viento:</strong> {weather.windspeed} km/h
              </p>
              <p className="flex items-center justify-center gap-2">
                <CloudSun className="w-5 h-5 text-gray-500" />
                <strong>Código clima:</strong> {weather.weathercode}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
