import { Component } from '@angular/core';
import {
  ToasterNotificationsConfigurationModel,
  ToasterNotificationsConfigurationModelDefaults
} from './core/domain/models/toaster-notifications-configuration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly options: ToasterNotificationsConfigurationModel = ToasterNotificationsConfigurationModelDefaults;

}
