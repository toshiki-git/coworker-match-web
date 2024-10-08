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


import * as runtime from '../runtime';
import type {
  CreateQuestionReq,
  CreateQuestionRes,
  GetQuestionRes,
} from '../models/index';
import {
    CreateQuestionReqFromJSON,
    CreateQuestionReqToJSON,
    CreateQuestionResFromJSON,
    CreateQuestionResToJSON,
    GetQuestionResFromJSON,
    GetQuestionResToJSON,
} from '../models/index';

export interface MatchingQuestionsPostRequest {
    createQuestionReq: CreateQuestionReq;
}

/**
 * 
 */
export class MatchingQuestionsApi extends runtime.BaseAPI {

    /**
     * Get user questions
     */
    async matchingQuestionsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetQuestionRes>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/matching-questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetQuestionResFromJSON(jsonValue));
    }

    /**
     * Get user questions
     */
    async matchingQuestionsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetQuestionRes> {
        const response = await this.matchingQuestionsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create a new matching
     */
    async matchingQuestionsPostRaw(requestParameters: MatchingQuestionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateQuestionRes>> {
        if (requestParameters['createQuestionReq'] == null) {
            throw new runtime.RequiredError(
                'createQuestionReq',
                'Required parameter "createQuestionReq" was null or undefined when calling matchingQuestionsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/matching-questions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateQuestionReqToJSON(requestParameters['createQuestionReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateQuestionResFromJSON(jsonValue));
    }

    /**
     * Create a new matching
     */
    async matchingQuestionsPost(requestParameters: MatchingQuestionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateQuestionRes> {
        const response = await this.matchingQuestionsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
