/**
 * @type
 * @name Journey
 *
 * @description
 * Types referente a jornada.
 */
export interface Journey {
  id: string;
  name: string;
  recipients: number;
  step: number;
  status: number;
  success: number;
}

/**
 * @type
 * @name JourneyFilter
 *
 * @description
 * Types referente ao filtros.
 */
export interface JourneyFilter {
  id: number;
  name: string;
  quantity: number;
}
