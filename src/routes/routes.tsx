import { usuarioStore } from '../store/auhtStore'
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect
} from '@tanstack/react-router'
import { lazy } from 'react'

const RootRoute = createRootRoute({
  component: () => <Outlet />,
});

const LoginRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/login',
  component: lazy(() => import('../pages/login')),
  beforeLoad: () => {
    if (usuarioStore.state.autenticado) throw redirect({ to: '/' })
  },
})

const RegisterRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/register',
  component: lazy(() => import('../pages/register')),
  beforeLoad: () => {
    if (usuarioStore.state.autenticado) throw redirect({ to: '/' })
  },
})
const DasRouter = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: lazy(() => import('../pages/dashboard')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) throw redirect({ to: '/login' })
  },
})


const PokemonRoute = createRoute({
  getParentRoute: () => DasRouter,
  path: '/pokemon',
  component: lazy(() => import('../pages/pokemon')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) throw redirect({ to: '/login' })
  },
})

const ClimaRoute = createRoute({
  getParentRoute: () => DasRouter,
  path: '/clima',
  component: lazy(() => import('../pages/clima')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) {
      throw redirect({
        to: '/login',
      })
    }
  },
})

const HomeRoute = createRoute({
  getParentRoute: () => DasRouter,
  path: '/home',
  component: lazy(() => import('../pages/home')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) {
      throw redirect({
        to: '/login',
      })
    }
  },
})
const ContraseñaRoute = createRoute({
  getParentRoute: () => DasRouter,
  path: '/ChangePassword',
  component: lazy(() => import('../pages/cambio-contraseña')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) {
      throw redirect({
        to: '/login',
      })
    }
  },
})
const editRoute = createRoute({
  getParentRoute: () => DasRouter,
  path: '/EditUser',
  component: lazy(() => import('../pages/edit')),
  beforeLoad: () => {
    if (!usuarioStore.state.autenticado) {
      throw redirect({
        to: '/login',
      })
    }
  },
})


const NotFoundRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '*',
  beforeLoad: () => {
    throw redirect({ to: '/login' })
  },
  component: () => null,
})

const routeTree = RootRoute.addChildren([
  LoginRoute,
  RegisterRoute,
  PokemonRoute,
  ClimaRoute,
  DasRouter,
  NotFoundRoute,
  ContraseñaRoute,
  editRoute,
  HomeRoute
])
export {
  HomeRoute,
  ClimaRoute,
  PokemonRoute,
  ContraseñaRoute,
  DasRouter, // si lo necesitas
  LoginRoute,
  RegisterRoute,
  editRoute,
} 
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}