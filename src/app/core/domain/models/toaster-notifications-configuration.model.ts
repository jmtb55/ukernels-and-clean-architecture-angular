/**
 * Configuration for visualization and functioning of the toaster notifications service (GLOBAL)
 */
export type ToasterNotificationsConfigurationModel = {
  position: string[];
  timeOut: number;
  showProgressBar: boolean;
  pauseOnHover: boolean;
  lastOnBottom: boolean;
  clickToClose: boolean;
  maxLength: number;
  maxStack: number;
  preventDuplicates: boolean;
  preventLastDuplicates: boolean;
  rtl: boolean;
  animate: string;
}

export const ToasterNotificationsConfigurationModelDefaults = {
  position: ['bottom', 'right'],
  timeOut: 2990,
  showProgressBar: true,
  pauseOnHover: false,
  lastOnBottom: true,
  clickToClose: false,
  maxLength: 0,
  maxStack: 1,
  preventDuplicates: false,
  preventLastDuplicates: false,
  rtl: false,
  animate: 'fromRight'
}
