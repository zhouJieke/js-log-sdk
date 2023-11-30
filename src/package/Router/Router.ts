import {BaseInitConfig} from "../Error/Base.ts";
import {Router as InterfaceRouter} from "vue-router";


export class Router extends BaseInitConfig {
  constructor() {
    super();
  }
  protected createRouterProbe(router: InterfaceRouter) {
    super.Router(router)

    console.log(router)
  }


}