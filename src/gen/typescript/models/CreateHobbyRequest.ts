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
 * @interface CreateHobbyRequest
 */
export interface CreateHobbyRequest {
  /**
   *
   * @type {string}
   * @memberof CreateHobbyRequest
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof CreateHobbyRequest
   */
  hobbyName: string;
  /**
   *
   * @type {string}
   * @memberof CreateHobbyRequest
   */
  categoryId: string;
}

/**
 * Check if a given object implements the CreateHobbyRequest interface.
 */
export function instanceOfCreateHobbyRequest(
  value: object
): value is CreateHobbyRequest {
  if (!('creatorId' in value) || value['creatorId'] === undefined) return false;
  if (!('hobbyName' in value) || value['hobbyName'] === undefined) return false;
  if (!('categoryId' in value) || value['categoryId'] === undefined)
    return false;
  return true;
}

export function CreateHobbyRequestFromJSON(json: any): CreateHobbyRequest {
  return CreateHobbyRequestFromJSONTyped(json, false);
}

export function CreateHobbyRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateHobbyRequest {
  if (json == null) {
    return json;
  }
  return {
    creatorId: json['creator_id'],
    hobbyName: json['hobby_name'],
    categoryId: json['category_id'],
  };
}

export function CreateHobbyRequestToJSON(
  value?: CreateHobbyRequest | null
): any {
  if (value == null) {
    return value;
  }
  return {
    creator_id: value['creatorId'],
    hobby_name: value['hobbyName'],
    category_id: value['categoryId'],
  };
}