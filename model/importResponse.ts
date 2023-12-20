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


export interface ImportResponse { 
    /**
     * Unique identifier for the import.
     */
    importId: string;
    /**
     * Organization identifier.
     */
    orgId: string;
    /**
     * Site identifier.
     */
    siteId: string;
    /**
     * Code name of one of the entity type.
     */
    entityTypeCodeName: ImportResponse.EntityTypeCodeNameEnum;
    /**
     * File name of the import.
     */
    fileName: string;
    /**
     * Start time of the import.
     */
    startedAt: string;
    /**
     * Finish time of the import.
     */
    finishedAt?: string;
    /**
     * Indicates if the import was successful.
     */
    successful: boolean;
    /**
     * Error message if any.
     */
    errorMessage?: string;
    /**
     * Error line if any.
     */
    errorLine?: number;
    /**
     * Creation time of the import.
     */
    createdAt?: string;
    /**
     * Identifier of the creator of the import.
     */
    createdBy?: string;
    /**
     * Full name of the creator of the import.
     */
    createdByFullName?: string;
}
export namespace ImportResponse {
    export type EntityTypeCodeNameEnum = 'contacts' | 'invoices' | 'invoice_line_items' | 'map_features' | 'rentals' | 'units';
    export const EntityTypeCodeNameEnum = {
        Contacts: 'contacts' as EntityTypeCodeNameEnum,
        Invoices: 'invoices' as EntityTypeCodeNameEnum,
        InvoiceLineItems: 'invoice_line_items' as EntityTypeCodeNameEnum,
        MapFeatures: 'map_features' as EntityTypeCodeNameEnum,
        Rentals: 'rentals' as EntityTypeCodeNameEnum,
        Units: 'units' as EntityTypeCodeNameEnum
    };
}


