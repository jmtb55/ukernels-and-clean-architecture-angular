import { PizzaToppingModel } from './pizza-topping.model';
import { GenericOptionModelAdapter } from './../../../../../core/domain/models/generic-option.adapter.model';

/**
 * Creates an object whose attributes match those of
 * a pizza topping
 * Maps known formats
 */
export class PizzaToppingModelAdapter extends GenericOptionModelAdapter implements PizzaToppingModel {

  /**
   * identifier that will be sent to the backend upon selection
   */
  value: string;

  /**
   * Text that makes sense to the user, relatable to the option itself
   */
  label: string;

  /**
   * Used to render svg, necessary because of label language 
   * (label might not match our available file names)
   */
  svgFileName: string;

  /**
   * AutocompleteAdapter class constructor.
   * @param adaptee data in a known format
   */
  constructor(adaptee: any) {
    super(adaptee);
    this.svgFileName = '';
    if (adaptee) {
      this._adaptFrom(adaptee);
    } 
  }

  private _adaptFrom(adaptee: any) {
    if (adaptee.name && typeof name === 'string') {
      this.svgFileName = `${adaptee.name.toLowerCase()}.svg`;
    }
  }

}
