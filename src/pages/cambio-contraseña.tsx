import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { changePassword } from "@/data-base/data-base"; 
import { toast } from "sonner"; 

export default function ChangePasswordPage() {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const username = "usuario_actual"; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPass !== confirmPass) {
      toast.error("La nueva contraseña y la confirmación no coinciden.");
      return;
    }

    try {
      await changePassword({
        username,
        currentPassword: currentPass,
        newPassword: newPass,
      });

      toast.success("Contraseña cambiada exitosamente.");

      setCurrentPass("");
      setNewPass("");
      setConfirmPass("");
    } catch (error: any) {
      toast.error(error.message || "Error al cambiar la contraseña");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 px-98">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md px-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Cambiar Contraseña
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Contraseña Actual</label>
            <Input
              type="password"
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
              placeholder="Ingrese su contraseña actual"
              required
              className="text-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Nueva Contraseña</label>
            <Input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              placeholder="Ingrese la nueva contraseña"
              required
              className="text-lg"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirmar Nueva Contraseña</label>
            <Input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirme la nueva contraseña"
              required
              className="text-lg"
            />
          </div>

          <Button type="submit" className="w-full">
            Cambiar Contraseña
          </Button>
        </form>
      </div>
    </div>
  );
}
