import { PizzaToppingEntity } from './pizza-topping.entity';

export class PizzaToppingAdapterEntity implements PizzaToppingEntity {

  id: string;
  name: string;
  displayName: string;

  constructor(adaptee: any) {
    this.id = '';
    this.name = '';
    this.displayName = '';
    if (adaptee) {
      this.adaptFrom(adaptee);
    }
  }

  private adaptFrom(adaptee: any) {
    if (adaptee) {
      this.id = adaptee.value ? adaptee.value : '';
      this.displayName = adaptee.label ? adaptee.label : '';
      this.name = adaptee.svgFileName ? adaptee.svgFileName.substring(0, adaptee.svgFileName.indexOf('.')) : '';
    }
  }

}
