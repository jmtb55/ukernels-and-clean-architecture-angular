import { EnvironmentModel, defaultEnvironment } from './environment.model';

export const environment: EnvironmentModel = {
  ...defaultEnvironment,
  isProductionBuild: false
};

// import 'zone.js/dist/zone-error';
