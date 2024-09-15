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
 * Represents user's interest percentage for a specific category
 * @export
 * @interface CategoryInterest
 */
export interface CategoryInterest {
    /**
     * Category's unique identifier
     * @type {string}
     * @memberof CategoryInterest
     */
    categoryId: string;
    /**
     * Name of the category
     * @type {string}
     * @memberof CategoryInterest
     */
    categoryName: string;
    /**
     * User's interest percentage in this category (0-100%)
     * @type {number}
     * @memberof CategoryInterest
     */
    interestPercentage: number;
}

/**
 * Check if a given object implements the CategoryInterest interface.
 */
export function instanceOfCategoryInterest(value: object): value is CategoryInterest {
    if (!('categoryId' in value) || value['categoryId'] === undefined) return false;
    if (!('categoryName' in value) || value['categoryName'] === undefined) return false;
    if (!('interestPercentage' in value) || value['interestPercentage'] === undefined) return false;
    return true;
}

export function CategoryInterestFromJSON(json: any): CategoryInterest {
    return CategoryInterestFromJSONTyped(json, false);
}

export function CategoryInterestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryInterest {
    if (json == null) {
        return json;
    }
    return {
        
        'categoryId': json['categoryId'],
        'categoryName': json['categoryName'],
        'interestPercentage': json['interestPercentage'],
    };
}

export function CategoryInterestToJSON(value?: CategoryInterest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'categoryId': value['categoryId'],
        'categoryName': value['categoryName'],
        'interestPercentage': value['interestPercentage'],
    };
}

