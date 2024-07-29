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
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  userName: string;
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  avatarUrl: string;
}

/**
 * Check if a given object implements the UpdateUserRequest interface.
 */
export function instanceOfUpdateUserRequest(
  value: object
): value is UpdateUserRequest {
  if (!('userName' in value) || value['userName'] === undefined) return false;
  if (!('email' in value) || value['email'] === undefined) return false;
  if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
  return true;
}

export function UpdateUserRequestFromJSON(json: any): UpdateUserRequest {
  return UpdateUserRequestFromJSONTyped(json, false);
}

export function UpdateUserRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UpdateUserRequest {
  if (json == null) {
    return json;
  }
  return {
    userName: json['user_name'],
    email: json['email'],
    avatarUrl: json['avatar_url'],
  };
}

export function UpdateUserRequestToJSON(value?: UpdateUserRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    user_name: value['userName'],
    email: value['email'],
    avatar_url: value['avatarUrl'],
  };
}