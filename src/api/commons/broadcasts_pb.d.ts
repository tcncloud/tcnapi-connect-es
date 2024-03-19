// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/broadcasts.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.BroadcastType
 */
export declare enum BroadcastType {
  /**
   * @generated from enum value: TYPE_UNKNOWN = 0;
   */
  TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: TYPE_OUTBOUND = 1000;
   */
  TYPE_OUTBOUND = 1000,

  /**
   * @generated from enum value: TYPE_OUTBOUND_PREVIEW_ONLY = 1100;
   */
  TYPE_OUTBOUND_PREVIEW_ONLY = 1100,

  /**
   * @generated from enum value: TYPE_OUTBOUND_MAC_ONLY = 1200;
   */
  TYPE_OUTBOUND_MAC_ONLY = 1200,

  /**
   * @generated from enum value: TYPE_OUTBOUND_RINGLESS_VOICEMAIL = 1300;
   */
  TYPE_OUTBOUND_RINGLESS_VOICEMAIL = 1300,

  /**
   * @generated from enum value: TYPE_INBOUND = 2000;
   */
  TYPE_INBOUND = 2000,

  /**
   * @generated from enum value: TYPE_MANUAL = 3000;
   */
  TYPE_MANUAL = 3000,

  /**
   * @generated from enum value: TYPE_SMS = 4000;
   */
  TYPE_SMS = 4000,

  /**
   * @generated from enum value: TYPE_EMAIL = 5000;
   */
  TYPE_EMAIL = 5000,

  /**
   * @generated from enum value: TYPE_OUTBOUND_INBOUND = 7000;
   */
  TYPE_OUTBOUND_INBOUND = 7000,

  /**
   * @generated from enum value: TYPE_OUTBOUND_MANUAL = 8000;
   */
  TYPE_OUTBOUND_MANUAL = 8000,

  /**
   * @generated from enum value: TYPE_INBOUND_MANUAL = 9000;
   */
  TYPE_INBOUND_MANUAL = 9000,

  /**
   * @generated from enum value: TYPE_OUTBOUND_INBOUND_MANUAL = 10000;
   */
  TYPE_OUTBOUND_INBOUND_MANUAL = 10000,
}

/**
 * Enum to represent the different template types that broadcast templates can be.
 *
 * @generated from message api.commons.TemplateType
 */
export declare class TemplateType extends Message<TemplateType> {
  constructor(data?: PartialMessage<TemplateType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.TemplateType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TemplateType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TemplateType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TemplateType;

  static equals(a: TemplateType | PlainMessage<TemplateType> | undefined, b: TemplateType | PlainMessage<TemplateType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.TemplateType.Enum
 */
export declare enum TemplateType_Enum {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: STANDARD = 1;
   */
  STANDARD = 1,

  /**
   * @generated from enum value: LAYERED = 2;
   */
  LAYERED = 2,

  /**
   * @generated from enum value: INBOUND = 3;
   */
  INBOUND = 3,

  /**
   * @generated from enum value: MAC_ONLY = 4;
   */
  MAC_ONLY = 4,

  /**
   * @generated from enum value: PREVIEW_ONLY = 5;
   */
  PREVIEW_ONLY = 5,

  /**
   * @generated from enum value: RINGLESS_VOICEMAIL = 6;
   */
  RINGLESS_VOICEMAIL = 6,
}

