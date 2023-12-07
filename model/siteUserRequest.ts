/**
 * ManageSpace Onboarding API
 * ManageSpace Onboarding API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface SiteUserRequest { 
    /**
     * First name
     */
    firstName: string;
    /**
     * Middle name
     */
    middleInitial?: string;
    /**
     * Last name
     */
    lastName: string;
    /**
     * Email address
     */
    email: string;
    /**
     * Mobile number
     */
    mobileNumber: string;
    /**
     * Job title
     */
    jobTitle: SiteUserRequest.JobTitleEnum;
}
export namespace SiteUserRequest {
    export type JobTitleEnum = 'property_manager';
    export const JobTitleEnum = {
        PropertyManager: 'property_manager' as JobTitleEnum
    };
}


