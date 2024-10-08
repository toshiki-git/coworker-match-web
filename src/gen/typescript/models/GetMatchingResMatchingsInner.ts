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
 * @interface GetMatchingResMatchingsInner
 */
export interface GetMatchingResMatchingsInner {
    /**
     * 
     * @type {string}
     * @memberof GetMatchingResMatchingsInner
     */
    matchingId: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingResMatchingsInner
     */
    avatarUrl: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingResMatchingsInner
     */
    matchUserName: string;
    /**
     * 
     * @type {string}
     * @memberof GetMatchingResMatchingsInner
     */
    lastMessage: string;
    /**
     * 
     * @type {number}
     * @memberof GetMatchingResMatchingsInner
     */
    unreadMessageCount: number;
}

/**
 * Check if a given object implements the GetMatchingResMatchingsInner interface.
 */
export function instanceOfGetMatchingResMatchingsInner(value: object): value is GetMatchingResMatchingsInner {
    if (!('matchingId' in value) || value['matchingId'] === undefined) return false;
    if (!('avatarUrl' in value) || value['avatarUrl'] === undefined) return false;
    if (!('matchUserName' in value) || value['matchUserName'] === undefined) return false;
    if (!('lastMessage' in value) || value['lastMessage'] === undefined) return false;
    if (!('unreadMessageCount' in value) || value['unreadMessageCount'] === undefined) return false;
    return true;
}

export function GetMatchingResMatchingsInnerFromJSON(json: any): GetMatchingResMatchingsInner {
    return GetMatchingResMatchingsInnerFromJSONTyped(json, false);
}

export function GetMatchingResMatchingsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMatchingResMatchingsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'matchingId': json['matchingId'],
        'avatarUrl': json['avatarUrl'],
        'matchUserName': json['matchUserName'],
        'lastMessage': json['lastMessage'],
        'unreadMessageCount': json['unreadMessageCount'],
    };
}

export function GetMatchingResMatchingsInnerToJSON(value?: GetMatchingResMatchingsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'matchingId': value['matchingId'],
        'avatarUrl': value['avatarUrl'],
        'matchUserName': value['matchUserName'],
        'lastMessage': value['lastMessage'],
        'unreadMessageCount': value['unreadMessageCount'],
    };
}

