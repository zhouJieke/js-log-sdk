import {BaseInitConfig} from "../Error/Base.ts";
import {Router as InterfaceRouter} from "vue-router";
import {RouterAfterEachTitle} from "../Interface/Router.ts";





export class Router extends BaseInitConfig {
  constructor() {
    super();

  }
  protected async createRouterProbe(router: InterfaceRouter) {
    super.Router(router)

    router.afterEach((to: { meta: RouterAfterEachTitle }) => {
      console.log(to.meta.title)
    })

  }

}