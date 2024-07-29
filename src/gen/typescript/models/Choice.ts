/* tslint:disable */
/* eslint-disable */
/**
 * CoWorkerMatch API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Choice
 */
export interface Choice {
  /**
   *
   * @type {string}
   * @memberof Choice
   */
  choiceText: string;
  /**
   *
   * @type {string}
   * @memberof Choice
   */
  choiceImageUrl: string;
}

/**
 * Check if a given object implements the Choice interface.
 */
export function instanceOfChoice(value: object): value is Choice {
  if (!('choiceText' in value) || value['choiceText'] === undefined)
    return false;
  if (!('choiceImageUrl' in value) || value['choiceImageUrl'] === undefined)
    return false;
  return true;
}

export function ChoiceFromJSON(json: any): Choice {
  return ChoiceFromJSONTyped(json, false);
}

export function ChoiceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Choice {
  if (json == null) {
    return json;
  }
  return {
    choiceText: json['choiceText'],
    choiceImageUrl: json['choiceImageUrl'],
  };
}

export function ChoiceToJSON(value?: Choice | null): any {
  if (value == null) {
    return value;
  }
  return {
    choiceText: value['choiceText'],
    choiceImageUrl: value['choiceImageUrl'],
  };
}
