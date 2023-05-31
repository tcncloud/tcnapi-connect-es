// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/p3api.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * States for interrupting peering
 *
 * @generated from enum api.commons.InterruptedPeeringStatus
 */
export const InterruptedPeeringStatus = proto3.makeEnum(
  "api.commons.InterruptedPeeringStatus",
  [
    {no: 0, name: "InterruptPeeringStatus_MANUAL"},
    {no: 1, name: "InterruptPeeringStatus_PREVIEW"},
  ],
);

/**
 * @generated from enum api.commons.RecalculateBillingMonth
 */
export const RecalculateBillingMonth = proto3.makeEnum(
  "api.commons.RecalculateBillingMonth",
  [
    {no: 0, name: "RECALCULATE_BILLING_MONTH_CURRENT", localName: "CURRENT"},
    {no: 1, name: "RECALCULATE_BILLING_MONTH_PREVIOUS", localName: "PREVIOUS"},
  ],
);

/**
 * @generated from enum api.commons.RecalculateBillingType
 */
export const RecalculateBillingType = proto3.makeEnum(
  "api.commons.RecalculateBillingType",
  [
    {no: 0, name: "RECALCULATE_BILLING_TYPE_OUTBOUND_CALLS", localName: "OUTBOUND_CALLS"},
    {no: 1, name: "RECALCULATE_BILLING_TYPE_INBOUND_CALLS", localName: "INBOUND_CALLS"},
    {no: 2, name: "RECALCULATE_BILLING_TYPE_AGENTS", localName: "AGENTS"},
    {no: 3, name: "RECALCULATE_BILLING_TYPE_SMS", localName: "SMS"},
    {no: 4, name: "RECALCULATE_BILLING_TYPE_EMAIL", localName: "EMAIL"},
    {no: 6, name: "RECALCULATE_BILLING_TYPE_MANUAL_DIAL_CALLS", localName: "MANUAL_DIAL_CALLS"},
  ],
);

/**
 * @generated from enum api.commons.PhoneBookSIPType
 */
export const PhoneBookSIPType = proto3.makeEnum(
  "api.commons.PhoneBookSIPType",
  [
    {no: 0, name: "PHONE_BOOK_SIP_TYPE_OUTBOUND"},
    {no: 1, name: "PHONE_BOOK_SIP_TYPE_TRANSFER"},
  ],
);

/**
 * @generated from enum api.commons.PhoneBookPhoneNumberType
 */
export const PhoneBookPhoneNumberType = proto3.makeEnum(
  "api.commons.PhoneBookPhoneNumberType",
  [
    {no: 0, name: "PHONE_BOOK_PHONE_NUMBER_TYPE_CALLER_ID", localName: "CALLER_ID"},
    {no: 1, name: "PHONE_BOOK_PHONE_NUMBER_TYPE_OUTBOUND", localName: "OUTBOUND"},
    {no: 2, name: "PHONE_BOOK_PHONE_NUMBER_TYPE_TRANSFER", localName: "TRANSFER"},
  ],
);

/**
 * @generated from message api.commons.ClientInfoDataRow
 */
export const ClientInfoDataRow = proto3.makeMessageType(
  "api.commons.ClientInfoDataRow",
  () => [
    { no: 1, name: "field_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "dialed_number", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "contact_field_description_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.commons.RGBColor
 */
export const RGBColor = proto3.makeMessageType(
  "api.commons.RGBColor",
  () => [
    { no: 1, name: "red", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "green", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "blue", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Dialed Number Field Settings
 *
 * @generated from message api.commons.DialedNumberFieldSettings
 */
export const DialedNumberFieldSettings = proto3.makeMessageType(
  "api.commons.DialedNumberFieldSettings",
  () => [
    { no: 1, name: "should_display", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "color", kind: "message", T: RGBColor },
    { no: 3, name: "bg_color", kind: "message", T: RGBColor },
    { no: 4, name: "allow_agent_copy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ClientInfoDisplayTemplateRow
 *
 * @generated from message api.commons.ClientInfoDisplayTemplateRow
 */
export const ClientInfoDisplayTemplateRow = proto3.makeMessageType(
  "api.commons.ClientInfoDisplayTemplateRow",
  () => [
    { no: 1, name: "field_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "color", kind: "message", T: RGBColor },
    { no: 3, name: "bg_color", kind: "message", T: RGBColor },
    { no: 4, name: "contact_field_description_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "allow_agent_copy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.commons.CallHistorySearchType
 */
export const CallHistorySearchType = proto3.makeMessageType(
  "api.commons.CallHistorySearchType",
  [],
);

/**
 * @generated from enum api.commons.CallHistorySearchType.Enum
 */
export const CallHistorySearchType_Enum = proto3.makeEnum(
  "api.commons.CallHistorySearchType.Enum",
  [
    {no: 0, name: "STANDARD"},
    {no: 1, name: "BY_ID"},
    {no: 2, name: "BY_AGENT"},
  ],
);

/**
 * @generated from message api.commons.CallHistorySearchScope
 */
export const CallHistorySearchScope = proto3.makeMessageType(
  "api.commons.CallHistorySearchScope",
  [],
);

/**
 * @generated from enum api.commons.CallHistorySearchScope.Enum
 */
export const CallHistorySearchScope_Enum = proto3.makeEnum(
  "api.commons.CallHistorySearchScope.Enum",
  [
    {no: 0, name: "ALL"},
    {no: 1, name: "TWENTY_FOUR_HOURS"},
    {no: 2, name: "TWO_DAYS"},
    {no: 3, name: "THREE_DAYS"},
    {no: 4, name: "FIVE_DAYS"},
    {no: 5, name: "SEVEN_DAYS"},
    {no: 6, name: "THIRTY_DAYS"},
    {no: 7, name: "SIXTY_DAYS"},
    {no: 8, name: "NINETY_DAYS"},
    {no: 9, name: "ONEHUNDRED_TWENTY_DAYS"},
    {no: 10, name: "ONEHUNDRED_FIFTY_DAYS"},
    {no: 11, name: "ONEHUNDRED_EIGHTY_DAYS"},
  ],
);

/**
 * @generated from message api.commons.ListPhoneBookOrderBy
 */
export const ListPhoneBookOrderBy = proto3.makeMessageType(
  "api.commons.ListPhoneBookOrderBy",
  [],
);

/**
 * @generated from enum api.commons.ListPhoneBookOrderBy.Enum
 */
export const ListPhoneBookOrderBy_Enum = proto3.makeEnum(
  "api.commons.ListPhoneBookOrderBy.Enum",
  [
    {no: 0, name: "PHONE_BOOK_SID"},
    {no: 1, name: "ENTRY_TYPE"},
    {no: 2, name: "ENTRY_NAME"},
    {no: 3, name: "CLIENT_SID"},
    {no: 4, name: "HUNT_GROUP_SID"},
    {no: 5, name: "PHONE_NUMBER"},
    {no: 6, name: "PHONE_NUMBER_TYPE"},
    {no: 7, name: "PHONE_NUMBER_HIDDEN"},
  ],
);

