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
import type { HobbyDetails } from './HobbyDetails';
import {
  HobbyDetailsFromJSON,
  HobbyDetailsFromJSONTyped,
  HobbyDetailsToJSON,
} from './HobbyDetails';

/**
 *
 * @export
 * @interface CreateHobbyResponse
 */
export interface CreateHobbyResponse {
  /**
   *
   * @type {HobbyDetails}
   * @memberof CreateHobbyResponse
   */
  hobby: HobbyDetails;
}

/**
 * Check if a given object implements the CreateHobbyResponse interface.
 */
export function instanceOfCreateHobbyResponse(
  value: object
): value is CreateHobbyResponse {
  if (!('hobby' in value) || value['hobby'] === undefined) return false;
  return true;
}

export function CreateHobbyResponseFromJSON(json: any): CreateHobbyResponse {
  return CreateHobbyResponseFromJSONTyped(json, false);
}

export function CreateHobbyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateHobbyResponse {
  if (json == null) {
    return json;
  }
  return {
    hobby: HobbyDetailsFromJSON(json['hobby']),
  };
}

export function CreateHobbyResponseToJSON(
  value?: CreateHobbyResponse | null
): any {
  if (value == null) {
    return value;
  }
  return {
    hobby: HobbyDetailsToJSON(value['hobby']),
  };
}