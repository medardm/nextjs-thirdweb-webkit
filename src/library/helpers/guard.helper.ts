import {AuthUser} from "@/library/helpers/auth.helper";
import {GUARDS} from "@/library/enums/guards.enum";
import {HTTP_METHODS} from "@/library/helpers/http.helper";
import {RouteError} from "@/library/errors/RouteError";

export type RouteGuards = {
  [HTTP_METHODS.GET]?: GUARDS[]
  [HTTP_METHODS.POST]?: GUARDS[]
  [HTTP_METHODS.PUT]?: GUARDS[]
  [HTTP_METHODS.PATCH]?: GUARDS[]
  [HTTP_METHODS.DELETE]?: GUARDS[]
}

export const guardChecks = {
  [GUARDS.AUTH]: (user: AuthUser) => {
    if (!user) {
      throw new RouteError('User not logged in')
    }
    return true
  },
  [GUARDS.UNAUTH]: (user: AuthUser) => {
    if (user) {
      throw new RouteError('User is logged in')
    }
    return true
  },
  [GUARDS.PUBLIC]: (user: AuthUser) => {
    return true
  }
}

export const checkGuards = async (user: AuthUser, routeGuards: RouteGuards | undefined | null, routeMethod: HTTP_METHODS) => {
  if (routeGuards && routeGuards[routeMethod]) {
    const guards = <GUARDS[]> routeGuards[routeMethod]
    for (const apiGuard of guards) {
      guardChecks[apiGuard](user)
    }
  }
}


