import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usuarioStore } from "../store/auhtStore";
import { Login } from "../sesion/sesion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import React from "react"
import { useNavigate } from "@tanstack/react-router"


type LoginFormProps = React.ComponentPropsWithoutRef<"div">

export default function LoginForm({ className, ...props }: LoginFormProps) {
  const loginMutation = Login()
  const navigate = useNavigate()

  const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const formData = new FormData(evt.currentTarget)
    const username = formData.get("username")?.toString() || ""
    const password = formData.get("password")?.toString() || ""

    if (!username || !password) {
      toast.warning("Completa todos los campos", { position: "bottom-right" })
      return
    }

    try {
      await loginMutation.mutateAsync({ username, password })

      console.log("🟢 Estado del store después del login:", usuarioStore.state)

      if (usuarioStore.state.autenticado) {
        toast.success("¡Inicio de sesión exitoso!", { position: "bottom-right" })
        navigate({ to: "/home" })
      } else {
        toast.error("Usuario o contraseña incorrectos", { position: "bottom-right" })
      }
    } catch (error) {
      toast.error(`Error: ${(error as Error).message}`, {
        position: "bottom-right",
      })
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Ingresa tu contraseña y usuario para iniciar sesión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onFormSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="username"
                  id="username"
                  placeholder="Usuario"
  
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input id="password" 
                name="password" 
                type="password" 
                placeholder="Contraseña"/>
              </div>
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="underline underline-offset-4">
                Regístrate
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
