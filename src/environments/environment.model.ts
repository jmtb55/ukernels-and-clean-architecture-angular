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
    }
  }

}

/**
 * Default production configuration
 */
export const defaultEnvironment: EnvironmentModel = {
  isProductionBuild: true,
  backend: {
    host: '',
    contexts: {
      authentication: '',
      orders: '',
      products: ''
    }
  }
}
