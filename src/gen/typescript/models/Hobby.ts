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
 * @interface Hobby
 */
export interface Hobby {
    /**
     * 
     * @type {string}
     * @memberof Hobby
     */
    hobbyId: string;
    /**
     * 
     * @type {string}
     * @memberof Hobby
     */
    hobbyName: string;
}

/**
 * Check if a given object implements the Hobby interface.
 */
export function instanceOfHobby(value: object): value is Hobby {
    if (!('hobbyId' in value) || value['hobbyId'] === undefined) return false;
    if (!('hobbyName' in value) || value['hobbyName'] === undefined) return false;
    return true;
}

export function HobbyFromJSON(json: any): Hobby {
    return HobbyFromJSONTyped(json, false);
}

export function HobbyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hobby {
    if (json == null) {
        return json;
    }
    return {
        
        'hobbyId': json['hobbyId'],
        'hobbyName': json['hobbyName'],
    };
}

export function HobbyToJSON(value?: Hobby | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'hobbyId': value['hobbyId'],
        'hobbyName': value['hobbyName'],
    };
}

