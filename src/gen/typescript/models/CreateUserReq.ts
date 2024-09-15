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
 * @interface CreateUserReq
 */
export interface CreateUserReq {
    /**
     * 
     * @type {string}
     * @memberof CreateUserReq
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserReq
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserReq
     */
    avatarUrl: string;
}

/**
 * Check if a given object implements the CreateUserReq interface.
 */
export function instanceOfCreateUserReq(value: object): value is CreateUserReq {
    if (!('userName' in value) || value['userName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
    return true;
}

export function CreateUserReqFromJSON(json: any): CreateUserReq {
    return CreateUserReqFromJSONTyped(json, false);
}

export function CreateUserReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUserReq {
    if (json == null) {
        return json;
    }
    return {
        
        'userName': json['userName'],
        'email': json['email'],
        'avatarUrl': json['avatarUrl'],
    };
}

export function CreateUserReqToJSON(value?: CreateUserReq | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userName': value['userName'],
        'email': value['email'],
        'avatarUrl': value['avatarUrl'],
    };
}

