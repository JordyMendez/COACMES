import { Store } from "@tanstack/react-store";
interface UsuarioState {
    usuario: string | null;
    autenticado: boolean;
    nombre: string | null;
}

export const usuarioStore = new Store<UsuarioState>({
    usuario: null,
    autenticado: false,
    nombre: null,
})