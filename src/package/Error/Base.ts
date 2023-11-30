import {LogConfig} from "../Interface/Sdk.ts";
import {Router as InterfaceRouter} from "vue-router";



export abstract class BaseInitConfig {
  protected initConfig(config: LogConfig):void {
    if (!config.app) {
      throw new Error('VueApp is required')
    }
  }

  protected Router(router: InterfaceRouter):void {
    if (!router) {
      throw new Error('Router is required')
    }
  }

}