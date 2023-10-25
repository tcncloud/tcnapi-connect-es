// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/commons/p3api.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * States for interrupting peering
 *
 * @generated from enum api.commons.InterruptedPeeringStatus
 */
export declare enum InterruptedPeeringStatus {
  /**
   * @generated from enum value: InterruptPeeringStatus_MANUAL = 0;
   */
  InterruptPeeringStatus_MANUAL = 0,

  /**
   * @generated from enum value: InterruptPeeringStatus_PREVIEW = 1;
   */
  InterruptPeeringStatus_PREVIEW = 1,
}

/**
 * @generated from enum api.commons.RecalculateBillingMonth
 */
export declare enum RecalculateBillingMonth {
  /**
   * @generated from enum value: RECALCULATE_BILLING_MONTH_CURRENT = 0;
   */
  CURRENT = 0,

  /**
   * @generated from enum value: RECALCULATE_BILLING_MONTH_PREVIOUS = 1;
   */
  PREVIOUS = 1,
}

/**
 * @generated from enum api.commons.RecalculateBillingType
 */
export declare enum RecalculateBillingType {
  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_OUTBOUND_CALLS = 0;
   */
  OUTBOUND_CALLS = 0,

  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_INBOUND_CALLS = 1;
   */
  INBOUND_CALLS = 1,

  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_AGENTS = 2;
   */
  AGENTS = 2,

  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_SMS = 3;
   */
  SMS = 3,

  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_EMAIL = 4;
   */
  EMAIL = 4,

  /**
   * @generated from enum value: RECALCULATE_BILLING_TYPE_MANUAL_DIAL_CALLS = 6;
   */
  MANUAL_DIAL_CALLS = 6,
}

/**
 * @generated from enum api.commons.PhoneBookSIPType
 */
export declare enum PhoneBookSIPType {
  /**
   * @generated from enum value: PHONE_BOOK_SIP_TYPE_OUTBOUND = 0;
   */
  PHONE_BOOK_SIP_TYPE_OUTBOUND = 0,

  /**
   * @generated from enum value: PHONE_BOOK_SIP_TYPE_TRANSFER = 1;
   */
  PHONE_BOOK_SIP_TYPE_TRANSFER = 1,
}

/**
 * @generated from enum api.commons.PhoneBookPhoneNumberType
 */
export declare enum PhoneBookPhoneNumberType {
  /**
   * @generated from enum value: PHONE_BOOK_PHONE_NUMBER_TYPE_CALLER_ID = 0;
   */
  CALLER_ID = 0,

  /**
   * @generated from enum value: PHONE_BOOK_PHONE_NUMBER_TYPE_OUTBOUND = 1;
   */
  OUTBOUND = 1,

  /**
   * @generated from enum value: PHONE_BOOK_PHONE_NUMBER_TYPE_TRANSFER = 2;
   */
  TRANSFER = 2,
}

/**
 * @generated from message api.commons.ClientInfoDataRow
 */
export declare class ClientInfoDataRow extends Message<ClientInfoDataRow> {
  /**
   * @generated from field: string field_label = 1;
   */
  fieldLabel: string;

  /**
   * @generated from field: string field_value = 2;
   */
  fieldValue: string;

  /**
   * @generated from field: bool is_phone = 3;
   */
  isPhone: boolean;

  /**
   * @generated from field: bool dialed_number = 4;
   */
  dialedNumber: boolean;

  /**
   * @generated from field: int64 contact_field_description_sid = 5;
   */
  contactFieldDescriptionSid: bigint;

  constructor(data?: PartialMessage<ClientInfoDataRow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ClientInfoDataRow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientInfoDataRow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientInfoDataRow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientInfoDataRow;

  static equals(a: ClientInfoDataRow | PlainMessage<ClientInfoDataRow> | undefined, b: ClientInfoDataRow | PlainMessage<ClientInfoDataRow> | undefined): boolean;
}

/**
 * @generated from message api.commons.RGBColor
 */
export declare class RGBColor extends Message<RGBColor> {
  /**
   * @generated from field: int32 red = 1;
   */
  red: number;

  /**
   * @generated from field: int32 green = 2;
   */
  green: number;

  /**
   * @generated from field: int32 blue = 3;
   */
  blue: number;

  constructor(data?: PartialMessage<RGBColor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.RGBColor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RGBColor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RGBColor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RGBColor;

  static equals(a: RGBColor | PlainMessage<RGBColor> | undefined, b: RGBColor | PlainMessage<RGBColor> | undefined): boolean;
}

/**
 * Dialed Number Field Settings
 *
 * @generated from message api.commons.DialedNumberFieldSettings
 */
export declare class DialedNumberFieldSettings extends Message<DialedNumberFieldSettings> {
  /**
   * Should the dialed number be displayed?
   *
   * @generated from field: bool should_display = 1;
   */
  shouldDisplay: boolean;

  /**
   * Color of the text of the dialed number
   *
   * @generated from field: api.commons.RGBColor color = 2;
   */
  color?: RGBColor;

  /**
   * Color of the background of the dialed number
   *
   * @generated from field: api.commons.RGBColor bg_color = 3;
   */
  bgColor?: RGBColor;

  /**
   * Shows a copy button in the row that copies the field value to your clipboard
   *
   * @generated from field: bool allow_agent_copy = 4;
   */
  allowAgentCopy: boolean;

  constructor(data?: PartialMessage<DialedNumberFieldSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DialedNumberFieldSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DialedNumberFieldSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DialedNumberFieldSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DialedNumberFieldSettings;

  static equals(a: DialedNumberFieldSettings | PlainMessage<DialedNumberFieldSettings> | undefined, b: DialedNumberFieldSettings | PlainMessage<DialedNumberFieldSettings> | undefined): boolean;
}

/**
 * ClientInfoDisplayTemplateRow
 *
 * @generated from message api.commons.ClientInfoDisplayTemplateRow
 */
export declare class ClientInfoDisplayTemplateRow extends Message<ClientInfoDisplayTemplateRow> {
  /**
   * Field label for the row
   *
   * @generated from field: string field_label = 1;
   */
  fieldLabel: string;

  /**
   * Color of the text in the row
   *
   * @generated from field: api.commons.RGBColor color = 2;
   */
  color?: RGBColor;

  /**
   * Backgorund color in the row
   *
   * @generated from field: api.commons.RGBColor bg_color = 3;
   */
  bgColor?: RGBColor;

  /**
   * Sid that relates the row to a contact field description
   *
   * @generated from field: int64 contact_field_description_sid = 4;
   */
  contactFieldDescriptionSid: bigint;

  /**
   * Shows a copy button in the row that copies the field value to your clipboard
   *
   * @generated from field: bool allow_agent_copy = 5;
   */
  allowAgentCopy: boolean;

  constructor(data?: PartialMessage<ClientInfoDisplayTemplateRow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ClientInfoDisplayTemplateRow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientInfoDisplayTemplateRow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientInfoDisplayTemplateRow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientInfoDisplayTemplateRow;

  static equals(a: ClientInfoDisplayTemplateRow | PlainMessage<ClientInfoDisplayTemplateRow> | undefined, b: ClientInfoDisplayTemplateRow | PlainMessage<ClientInfoDisplayTemplateRow> | undefined): boolean;
}

/**
 * @generated from message api.commons.CallHistorySearchType
 */
export declare class CallHistorySearchType extends Message<CallHistorySearchType> {
  constructor(data?: PartialMessage<CallHistorySearchType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallHistorySearchType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallHistorySearchType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallHistorySearchType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallHistorySearchType;

  static equals(a: CallHistorySearchType | PlainMessage<CallHistorySearchType> | undefined, b: CallHistorySearchType | PlainMessage<CallHistorySearchType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.CallHistorySearchType.Enum
 */
export declare enum CallHistorySearchType_Enum {
  /**
   * @generated from enum value: STANDARD = 0;
   */
  STANDARD = 0,

  /**
   * @generated from enum value: BY_ID = 1;
   */
  BY_ID = 1,

  /**
   * @generated from enum value: BY_AGENT = 2;
   */
  BY_AGENT = 2,
}

/**
 * @generated from message api.commons.CallHistorySearchScope
 */
export declare class CallHistorySearchScope extends Message<CallHistorySearchScope> {
  constructor(data?: PartialMessage<CallHistorySearchScope>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallHistorySearchScope";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallHistorySearchScope;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallHistorySearchScope;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallHistorySearchScope;

  static equals(a: CallHistorySearchScope | PlainMessage<CallHistorySearchScope> | undefined, b: CallHistorySearchScope | PlainMessage<CallHistorySearchScope> | undefined): boolean;
}

/**
 * @generated from enum api.commons.CallHistorySearchScope.Enum
 */
export declare enum CallHistorySearchScope_Enum {
  /**
   * @generated from enum value: ALL = 0;
   */
  ALL = 0,

  /**
   * @generated from enum value: TWENTY_FOUR_HOURS = 1;
   */
  TWENTY_FOUR_HOURS = 1,

  /**
   * @generated from enum value: TWO_DAYS = 2;
   */
  TWO_DAYS = 2,

  /**
   * @generated from enum value: THREE_DAYS = 3;
   */
  THREE_DAYS = 3,

  /**
   * @generated from enum value: FIVE_DAYS = 4;
   */
  FIVE_DAYS = 4,

  /**
   * @generated from enum value: SEVEN_DAYS = 5;
   */
  SEVEN_DAYS = 5,

  /**
   * @generated from enum value: THIRTY_DAYS = 6;
   */
  THIRTY_DAYS = 6,

  /**
   * @generated from enum value: SIXTY_DAYS = 7;
   */
  SIXTY_DAYS = 7,

  /**
   * @generated from enum value: NINETY_DAYS = 8;
   */
  NINETY_DAYS = 8,

  /**
   * @generated from enum value: ONEHUNDRED_TWENTY_DAYS = 9;
   */
  ONEHUNDRED_TWENTY_DAYS = 9,

  /**
   * @generated from enum value: ONEHUNDRED_FIFTY_DAYS = 10;
   */
  ONEHUNDRED_FIFTY_DAYS = 10,

  /**
   * @generated from enum value: ONEHUNDRED_EIGHTY_DAYS = 11;
   */
  ONEHUNDRED_EIGHTY_DAYS = 11,
}

/**
 * @generated from message api.commons.ListPhoneBookOrderBy
 */
export declare class ListPhoneBookOrderBy extends Message<ListPhoneBookOrderBy> {
  constructor(data?: PartialMessage<ListPhoneBookOrderBy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ListPhoneBookOrderBy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPhoneBookOrderBy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPhoneBookOrderBy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPhoneBookOrderBy;

  static equals(a: ListPhoneBookOrderBy | PlainMessage<ListPhoneBookOrderBy> | undefined, b: ListPhoneBookOrderBy | PlainMessage<ListPhoneBookOrderBy> | undefined): boolean;
}

/**
 * @generated from enum api.commons.ListPhoneBookOrderBy.Enum
 */
export declare enum ListPhoneBookOrderBy_Enum {
  /**
   * @generated from enum value: PHONE_BOOK_SID = 0;
   */
  PHONE_BOOK_SID = 0,

  /**
   * @generated from enum value: ENTRY_TYPE = 1;
   */
  ENTRY_TYPE = 1,

  /**
   * @generated from enum value: ENTRY_NAME = 2;
   */
  ENTRY_NAME = 2,

  /**
   * @generated from enum value: CLIENT_SID = 3;
   */
  CLIENT_SID = 3,

  /**
   * @generated from enum value: HUNT_GROUP_SID = 4;
   */
  HUNT_GROUP_SID = 4,

  /**
   * @generated from enum value: PHONE_NUMBER = 5;
   */
  PHONE_NUMBER = 5,

  /**
   * @generated from enum value: PHONE_NUMBER_TYPE = 6;
   */
  PHONE_NUMBER_TYPE = 6,

  /**
   * @generated from enum value: PHONE_NUMBER_HIDDEN = 7;
   */
  PHONE_NUMBER_HIDDEN = 7,
}

