// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/enums.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.Month
 */
export declare enum Month {
  /**
   * @generated from enum value: MONTH_JANUARY = 0;
   */
  JANUARY = 0,

  /**
   * @generated from enum value: MONTH_FEBRUARY = 1;
   */
  FEBRUARY = 1,

  /**
   * @generated from enum value: MONTH_MARCH = 2;
   */
  MARCH = 2,

  /**
   * @generated from enum value: MONTH_APRIL = 3;
   */
  APRIL = 3,

  /**
   * @generated from enum value: MONTH_MAY = 4;
   */
  MAY = 4,

  /**
   * @generated from enum value: MONTH_JUNE = 5;
   */
  JUNE = 5,

  /**
   * @generated from enum value: MONTH_JULY = 6;
   */
  JULY = 6,

  /**
   * @generated from enum value: MONTH_AUGUST = 7;
   */
  AUGUST = 7,

  /**
   * @generated from enum value: MONTH_SEPTEMBER = 8;
   */
  SEPTEMBER = 8,

  /**
   * @generated from enum value: MONTH_OCTOBER = 9;
   */
  OCTOBER = 9,

  /**
   * @generated from enum value: MONTH_NOVEMBER = 10;
   */
  NOVEMBER = 10,

  /**
   * @generated from enum value: MONTH_DECEMBER = 11;
   */
  DECEMBER = 11,
}

/**
 * @generated from message api.commons.Weekday
 */
export declare class Weekday extends Message<Weekday> {
  constructor(data?: PartialMessage<Weekday>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Weekday";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Weekday;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Weekday;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Weekday;

  static equals(a: Weekday | PlainMessage<Weekday> | undefined, b: Weekday | PlainMessage<Weekday> | undefined): boolean;
}

/**
 * @generated from enum api.commons.Weekday.Enum
 */
export declare enum Weekday_Enum {
  /**
   * @generated from enum value: SUNDAY = 0;
   */
  SUNDAY = 0,

  /**
   * @generated from enum value: MONDAY = 1;
   */
  MONDAY = 1,

  /**
   * @generated from enum value: TUESDAY = 2;
   */
  TUESDAY = 2,

  /**
   * @generated from enum value: WEDNESDAY = 3;
   */
  WEDNESDAY = 3,

  /**
   * @generated from enum value: THURSDAY = 4;
   */
  THURSDAY = 4,

  /**
   * @generated from enum value: FRIDAY = 5;
   */
  FRIDAY = 5,

  /**
   * @generated from enum value: SATURDAY = 6;
   */
  SATURDAY = 6,
}

/**
 * @generated from message api.commons.CronRequestType
 */
export declare class CronRequestType extends Message<CronRequestType> {
  constructor(data?: PartialMessage<CronRequestType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CronRequestType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronRequestType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronRequestType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronRequestType;

  static equals(a: CronRequestType | PlainMessage<CronRequestType> | undefined, b: CronRequestType | PlainMessage<CronRequestType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.CronRequestType.Enum
 */
export declare enum CronRequestType_Enum {
  /**
   * @generated from enum value: INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: SFTP = 1;
   */
  SFTP = 1,
}

