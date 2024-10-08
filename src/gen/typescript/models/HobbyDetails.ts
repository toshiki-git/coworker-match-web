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
 * @interface HobbyDetails
 */
export interface HobbyDetails {
    /**
     * 
     * @type {string}
     * @memberof HobbyDetails
     */
    hobbyId: string;
    /**
     * 
     * @type {string}
     * @memberof HobbyDetails
     */
    hobbyName: string;
    /**
     * 
     * @type {string}
     * @memberof HobbyDetails
     */
    creatorId: string;
    /**
     * 
     * @type {string}
     * @memberof HobbyDetails
     */
    categoryId: string;
}

/**
 * Check if a given object implements the HobbyDetails interface.
 */
export function instanceOfHobbyDetails(value: object): value is HobbyDetails {
    if (!('hobbyId' in value) || value['hobbyId'] === undefined) return false;
    if (!('hobbyName' in value) || value['hobbyName'] === undefined) return false;
    if (!('creatorId' in value) || value['creatorId'] === undefined) return false;
    if (!('categoryId' in value) || value['categoryId'] === undefined) return false;
    return true;
}

export function HobbyDetailsFromJSON(json: any): HobbyDetails {
    return HobbyDetailsFromJSONTyped(json, false);
}

export function HobbyDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HobbyDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'hobbyId': json['hobbyId'],
        'hobbyName': json['hobbyName'],
        'creatorId': json['creatorId'],
        'categoryId': json['categoryId'],
    };
}

export function HobbyDetailsToJSON(value?: HobbyDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hobbyId': value['hobbyId'],
        'hobbyName': value['hobbyName'],
        'creatorId': value['creatorId'],
        'categoryId': value['categoryId'],
    };
}

