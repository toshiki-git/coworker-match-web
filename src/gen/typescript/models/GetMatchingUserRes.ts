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
 * @interface GetMatchingUserRes
 */
export interface GetMatchingUserRes {
    /**
     * 
     * @type {string}
     * @memberof GetMatchingUserRes
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingUserRes
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingUserRes
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingUserRes
     */
    avatarUrl: string;
}

/**
 * Check if a given object implements the GetMatchingUserRes interface.
 */
export function instanceOfGetMatchingUserRes(value: object): value is GetMatchingUserRes {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('userName' in value) || value['userName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
    return true;
}

export function GetMatchingUserResFromJSON(json: any): GetMatchingUserRes {
    return GetMatchingUserResFromJSONTyped(json, false);
}

export function GetMatchingUserResFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMatchingUserRes {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'userName': json['userName'],
        'email': json['email'],
        'avatarUrl': json['avatarUrl'],
    };
}

export function GetMatchingUserResToJSON(value?: GetMatchingUserRes | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'userId': value['userId'],
        'userName': value['userName'],
        'email': value['email'],
        'avatarUrl': value['avatarUrl'],
    };
}

