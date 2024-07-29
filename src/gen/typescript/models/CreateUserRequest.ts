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
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   *
   * @type {string}
   * @memberof CreateUserRequest
   */
  userName: string;
  /**
   *
   * @type {string}
   * @memberof CreateUserRequest
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof CreateUserRequest
   */
  avatarUrl: string;
}

/**
 * Check if a given object implements the CreateUserRequest interface.
 */
export function instanceOfCreateUserRequest(
  value: object
): value is CreateUserRequest {
  if (!('userName' in value) || value['userName'] === undefined) return false;
  if (!('email' in value) || value['email'] === undefined) return false;
  if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
  return true;
}

export function CreateUserRequestFromJSON(json: any): CreateUserRequest {
  return CreateUserRequestFromJSONTyped(json, false);
}

export function CreateUserRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CreateUserRequest {
  if (json == null) {
    return json;
  }
  return {
    userName: json['user_name'],
    email: json['email'],
    avatarUrl: json['avatar_url'],
  };
}

export function CreateUserRequestToJSON(value?: CreateUserRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    user_name: value['userName'],
    email: value['email'],
    avatar_url: value['avatarUrl'],
  };
}