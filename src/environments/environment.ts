import { EnvironmentModel, defaultEnvironment } from './environment.model';

export const environment: EnvironmentModel = {
  ...defaultEnvironment,
  backend: {
    host: defaultEnvironment.backend.host,
    contexts: {
      authentication: '',
      orders: '',
      products: 'api/pizza/v0',
      pizzaToppings: 'api/pizza-toppings/v0'
    }
  },
  isProductionBuild: false
};

// import 'zone.js/dist/zone-error';
