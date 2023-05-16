// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/communication.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallType_Enum } from "./acd_pb.js";

/**
 * type of communication
 *
 * @generated from message api.commons.CommType
 */
export declare class CommType extends Message<CommType> {
  /**
   * @generated from oneof api.commons.CommType.type
   */
  type: {
    /**
     * @generated from field: api.commons.CallType.Enum call_type = 1;
     */
    value: CallType_Enum;
    case: "callType";
  } | {
    /**
     * @generated from field: api.commons.EmailType.Enum email_type = 2;
     */
    value: EmailType_Enum;
    case: "emailType";
  } | {
    /**
     * @generated from field: api.commons.SmsType.Enum sms_type = 3;
     */
    value: SmsType_Enum;
    case: "smsType";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CommType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CommType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommType;

  static equals(a: CommType | PlainMessage<CommType> | undefined, b: CommType | PlainMessage<CommType> | undefined): boolean;
}

/**
 * @generated from message api.commons.EmailType
 */
export declare class EmailType extends Message<EmailType> {
  constructor(data?: PartialMessage<EmailType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.EmailType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmailType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmailType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmailType;

  static equals(a: EmailType | PlainMessage<EmailType> | undefined, b: EmailType | PlainMessage<EmailType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.EmailType.Enum
 */
export declare enum EmailType_Enum {
  /**
   * @generated from enum value: OUTBOUND = 0;
   */
  OUTBOUND = 0,
}

/**
 * @generated from message api.commons.SmsType
 */
export declare class SmsType extends Message<SmsType> {
  constructor(data?: PartialMessage<SmsType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SmsType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SmsType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SmsType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SmsType;

  static equals(a: SmsType | PlainMessage<SmsType> | undefined, b: SmsType | PlainMessage<SmsType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.SmsType.Enum
 */
export declare enum SmsType_Enum {
  /**
   * @generated from enum value: OUTBOUND = 0;
   */
  OUTBOUND = 0,
}

