import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@tanstack/react-store"
import { usuarioStore } from "@/store/auhtStore"

export default function HomePage() {
  const { usuario} = useStore(usuarioStore)

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 px-50">
      <Card className="w-full max-w-2xl text-center shadow-xl px-50">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            ¡Bienvenido{usuario ? `, ${usuario}` : ""}!
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-lg text-gray-600 mb-4">
            Nos alegra tenerte de vuelta en el sistema.
          </p>
          <p className="text-sm text-gray-500">
            Desde aquí puedes acceder a tus funcionalidades favoritas.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
