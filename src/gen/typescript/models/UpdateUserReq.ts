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
 * @interface UpdateUserReq
 */
export interface UpdateUserReq {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReq
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReq
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserReq
     */
    avatarUrl: string;
}

/**
 * Check if a given object implements the UpdateUserReq interface.
 */
export function instanceOfUpdateUserReq(value: object): value is UpdateUserReq {
    if (!('userName' in value) || value['userName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
    return true;
}

export function UpdateUserReqFromJSON(json: any): UpdateUserReq {
    return UpdateUserReqFromJSONTyped(json, false);
}

export function UpdateUserReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserReq {
    if (json == null) {
        return json;
    }
    return {
        
        'userName': json['userName'],
        'email': json['email'],
        'avatarUrl': json['avatarUrl'],
    };
}

export function UpdateUserReqToJSON(value?: UpdateUserReq | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userName': value['userName'],
        'email': value['email'],
        'avatarUrl': value['avatarUrl'],
    };
}

