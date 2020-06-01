import { GenericOptionModel } from "./generic-option.model";

/**
 * Creates an object whose attributes match those of
 * a generic option
 * Maps known formats
 */
export class GenericOptionModelAdapter implements GenericOptionModel {

  /**
   * identifier that will be sent to the backend upon selection
   */
  value: string;

  /**
   * Text that makes sense to the user, relatable to the option itself
   */
  label: string;

  /**
   * AutocompleteAdapter class constructor.
   * @param adaptee data in a known format
   */
  constructor(adaptee: any) {
    this.value = '';
    this.label = '';
    if (adaptee) {
      this.adaptFrom(adaptee);
    } 
  }

  private adaptFrom(adaptee: any) {
    if (adaptee.id) {
      this.value = adaptee.id;
    }
    else if (adaptee.value) {
      this.value = adaptee.value;
    }
    if (adaptee.label) {
      this.label = adaptee.label;
    }
    else if (adaptee.displayName) {
      this.label = adaptee.displayName;
    }
    else if (adaptee.name) {
      this.label = adaptee.name;
    }
  }

}
