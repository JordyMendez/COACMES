import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { toast } from "sonner";
import { editUserData } from "@/data-base/data-base"; // ajusta si la ruta es distinta

export default function ChangeUsernameForm() {
  const [currentUsername] = useState("usuario_actual"); // Sustituir con valor real
  const [currentPassword, setCurrentPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newUsername.trim()) {
      toast.warning("El nuevo nombre de usuario no puede estar vacío");
      return;
    }

    if (!currentPassword.trim()) {
      toast.warning("Debes ingresar tu contraseña actual");
      return;
    }

    try {
      await editUserData({
        username: currentUsername,
        currentPassword,
        newNombre: newUsername, // Reutilizamos el campo newNombre para el nuevo username
        newApellido: "", // o valores actuales si se requieren
        newProvincia: "",
        newCanton: "",
      });

      toast.success(`Nombre de usuario cambiado a "${newUsername}"`);
      setNewUsername("");
      setCurrentPassword("");
    } catch (error: any) {
      toast.error(error.message || "Error al cambiar el nombre de usuario");
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 px-98">
      <Card className="w-full max-w-md shadow-lg px-20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Cambiar Nombre de Usuario
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">
                Nombre de usuario actual
              </label>
              <Input
                type="text"
                value={currentUsername}
                className="text-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Contraseña actual
              </label>
              <Input
                type="password"
                placeholder="Escribe tu contraseña"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="text-lg"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Nuevo nombre de usuario
              </label>
              <Input
                type="text"
                placeholder="Escribe tu nuevo nombre de usuario"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                required
                className="text-lg"
              />
            </div>

            <Button type="submit" className="w-full">
              Guardar cambios
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
