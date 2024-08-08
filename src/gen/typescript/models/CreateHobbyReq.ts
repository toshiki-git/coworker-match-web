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
 * @interface CreateHobbyReq
 */
export interface CreateHobbyReq {
  /**
   *
   * @type {string}
   * @memberof CreateHobbyReq
   */
  creatorId: string;
  /**
   *
   * @type {string}
   * @memberof CreateHobbyReq
   */
  hobbyName: string;
  /**
   *
   * @type {string}
   * @memberof CreateHobbyReq
   */
  categoryId: string;
}

/**
 * Check if a given object implements the CreateHobbyReq interface.
 */
export function instanceOfCreateHobbyReq(
  value: object
): value is CreateHobbyReq {
  if (!('creatorId' in value) || value['creatorId'] === undefined) return false;
  if (!('hobbyName' in value) || value['hobbyName'] === undefined) return false;
  if (!('categoryId' in value) || value['categoryId'] === undefined)
    return false;
  return true;
}

export function CreateHobbyReqFromJSON(json: any): CreateHobbyReq {
  return CreateHobbyReqFromJSONTyped(json, false);
}

export function CreateHobbyReqFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateHobbyReq {
  if (json == null) {
    return json;
  }
  return {
    creatorId: json['creatorId'],
    hobbyName: json['hobbyName'],
    categoryId: json['categoryId'],
  };
}

export function CreateHobbyReqToJSON(value?: CreateHobbyReq | null): any {
  if (value == null) {
    return value;
  }
  return {
    creatorId: value['creatorId'],
    hobbyName: value['hobbyName'],
    categoryId: value['categoryId'],
  };
}