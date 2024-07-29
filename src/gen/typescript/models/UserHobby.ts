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
 * @interface UserHobby
 */
export interface UserHobby {
  /**
   *
   * @type {Array<string>}
   * @memberof UserHobby
   */
  hobbyIds: Array<string>;
}

/**
 * Check if a given object implements the UserHobby interface.
 */
export function instanceOfUserHobby(value: object): value is UserHobby {
  if (!('hobbyIds' in value) || value['hobbyIds'] === undefined) return false;
  return true;
}

export function UserHobbyFromJSON(json: any): UserHobby {
  return UserHobbyFromJSONTyped(json, false);
}

export function UserHobbyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UserHobby {
  if (json == null) {
    return json;
  }
  return {
    hobbyIds: json['hobbyIds'],
  };
}

export function UserHobbyToJSON(value?: UserHobby | null): any {
  if (value == null) {
    return value;
  }
  return {
    hobbyIds: value['hobbyIds'],
  };
}
