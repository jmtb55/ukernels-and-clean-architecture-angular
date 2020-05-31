/**
 * Environment variables for build configuration
 */
export interface EnvironmentModel {

  /**
   * true => its a production build
   * false => its not a production build, usually a local test
   */
  isProductionBuild: boolean;

  /**
   * environment-dependent vars used to consume backend API endpoints
   */
  backend: {
    /**
     * Base URL, precedes context. Refers to the domain and usually any port, api name and version.
     */
    host: string;
    /**
     * url tokens for each context
     */
    contexts: {
      /**
       * Authentication, Authorization and related context base URL
       */
      authentication: string;
      /**
       * Products context base url
       */
      products: string;
      /**
       * Orders context base url
       */
      orders: string;
      /**
       * Toppings context base url
       */
      pizzaToppings: string;
    }
  }

}

/**
 * Default production configuration
 */
export const defaultEnvironment: EnvironmentModel = {
  isProductionBuild: true,
  backend: {
    host: 'https://ukernels-and-clean-architecture-angular.getsandbox.com:443',
    contexts: {
      authentication: '',
      orders: '',
      products: '',
      pizzaToppings: 'api/pizza-toppings/v0'
    }
  }
}
