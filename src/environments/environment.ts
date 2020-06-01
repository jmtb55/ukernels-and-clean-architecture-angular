import { EnvironmentModel, defaultEnvironment } from './environment.model';

export const environment: EnvironmentModel = {
  ...defaultEnvironment,
  backend: {
    host: defaultEnvironment.backend.host,
    contexts: {
      authentication: '',
      orders: '',
      products: 'api/pizza/v1',
      pizzaToppings: 'api/pizza-toppings/v1'
    }
  },
  isProductionBuild: false
};

// import 'zone.js/dist/zone-error';
