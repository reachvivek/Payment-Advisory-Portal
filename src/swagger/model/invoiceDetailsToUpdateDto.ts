/**
 * PaymentAdvisoryPortalAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface InvoiceDetailsToUpdateDto { 
    billID?: number;
    invoiceNo?: string;
    invoiceAmountPaid?: number;
    invoiceAmountPaidDate?: string;
    cnDetails?: string;
    incentiveDNDetails?: string;
    withoutCNDetails?: string;
    tdsDetails?: string;
    gsttdsDetails?: string;
    remainingDetails?: string;
    fosDetails?: string;
    downtimeDetails?: string;
    cashOutPenaltyDetails?: string;
    houseKeepingDetails?: string;
    rejectBinDetails?: string;
    consumableDetails?: string;
    dosDetails?: string;
    excessBillingDetails?: string;
    slaPenaltyDetails?: string;
    reconPenaltyDetails?: string;
    ejDeductionDetails?: string;
    essFootagesDetails?: string;
    eSurDowntimeDetails?: string;
    eSurNotInstalledDetails?: string;
    craServicesDetails?: string;
    robberyDetails?: string;
    cashMisappropriationDetails?: string;
    withoutDNDetails?: string;
}