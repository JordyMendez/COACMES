// Tipos de datos
export interface Location {
  name: string
  country: string
  latitude: number
  longitude: number
}

export interface Weather {
  temperature: number
  windspeed: number
  weathercode: number
}


export async function getCoordinates(city: string): Promise<Location> {
  const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)
  if (!res.ok) throw new Error("No se pudo buscar la ciudad")

  const data = await res.json()
  if (!data.results || data.results.length === 0) throw new Error("Ciudad no encontrada")

  const { name, country, latitude, longitude } = data.results[0]
  return { name, country, latitude, longitude }
}

export async function getWeather(lat: number, lon: number): Promise<Weather> {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
  if (!res.ok) throw new Error("No se pudo obtener el clima")

  const data = await res.json()
  return data.current_weather
}
