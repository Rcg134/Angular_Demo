import { InjectionToken } from '@angular/core';
import { AppConfig } from './appconfig.interface';
import { environment } from '../../environments/environment';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');
//create this so that you dont have to always import enviroment each of every component
export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiUrl,
};
