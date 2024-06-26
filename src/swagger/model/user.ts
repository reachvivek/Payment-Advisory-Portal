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

export interface User { 
    userId?: number;
    empCode?: string;
    empName?: string;
    empRoleID?: number;
    active?: number;
    createdOn?: Date;
    createdBy?: number;
    modifiedOn?: Date;
    modifiedBy?: number;
    empEmail?: string;
    empMobNo?: string;
    empPassword?: string;
    empOldPassword?: string;
    empOldPassword_1?: string;
    empOldPassword_2?: string;
    loginAttempt?: number;
    lockoutStartDate?: Date;
    lastLoginDate?: Date;
    setInactiveDate?: Date;
    newPassCreateDate?: Date;
    passExpireDate?: Date;
}