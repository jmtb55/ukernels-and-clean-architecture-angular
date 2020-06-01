import { GenericOptionModel } from '../../../../../core/domain/models/generic-option.model';

/**
 * Clean-Architecture domain-level model
 * 
 * holds all necessary properties for desired pizza topping functionality
 */
export interface PizzaToppingModel extends GenericOptionModel {
  /**
   * Used to render svg, necessary because of label language 
   * (label might not match our available file names)
   */
  svgFileName: string;

  /**
   * Used for some frontend logic only.
   */
  selected: boolean;
}
