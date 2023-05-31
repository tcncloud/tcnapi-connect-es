// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/notifications.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * FieldValueFilter resents a field mask and value to match on.
 * For now we are only supporting string matching.
 *
 * @generated from message api.commons.FieldValueFilter
 */
export declare class FieldValueFilter extends Message<FieldValueFilter> {
  /**
   * key is a valid field mask
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * value is the stringified value at the field mask
   *
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<FieldValueFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.FieldValueFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldValueFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldValueFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldValueFilter;

  static equals(a: FieldValueFilter | PlainMessage<FieldValueFilter> | undefined, b: FieldValueFilter | PlainMessage<FieldValueFilter> | undefined): boolean;
}

/**
 * @generated from message api.commons.NotificationType
 */
export declare class NotificationType extends Message<NotificationType> {
  constructor(data?: PartialMessage<NotificationType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.NotificationType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotificationType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotificationType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotificationType;

  static equals(a: NotificationType | PlainMessage<NotificationType> | undefined, b: NotificationType | PlainMessage<NotificationType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.NotificationType.Enum
 */
export declare enum NotificationType_Enum {
  /**
   * @generated from enum value: INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: EMAIL = 1;
   */
  EMAIL = 1,

  /**
   * @generated from enum value: SERVER_PUSH = 2;
   */
  SERVER_PUSH = 2,

  /**
   * @generated from enum value: IOS = 3;
   */
  IOS = 3,

  /**
   * @generated from enum value: ANDROID = 4;
   */
  ANDROID = 4,

  /**
   * @generated from enum value: SMS = 5;
   */
  SMS = 5,
}

