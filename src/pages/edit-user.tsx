import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ChangeUsernameForm() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Cambiar Nombre de Usuario</CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Nombre de usuario actual</label>
              <Input
                type="text"
                placeholder="Ingresa tu usuario actual"
                disabled
                value="usuario_actual" // Puedes dejarlo vacío si lo vas a manejar con estado más tarde
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Nuevo nombre de usuario</label>
              <Input
                type="text"
                placeholder="Escribe tu nuevo nombre de usuario"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Guardar cambios
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
