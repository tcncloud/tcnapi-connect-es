// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/types.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, Int32Value, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.Empty
 */
export declare class Empty extends Message<Empty> {
  constructor(data?: PartialMessage<Empty>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Empty";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Empty;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Empty;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Empty;

  static equals(a: Empty | PlainMessage<Empty> | undefined, b: Empty | PlainMessage<Empty> | undefined): boolean;
}

/**
 * nullable Int32
 *
 * @generated from message api.commons.Int32Nullable
 */
export declare class Int32Nullable extends Message<Int32Nullable> {
  /**
   * @generated from field: bool is_null = 1;
   */
  isNull: boolean;

  /**
   * @generated from field: int32 value = 2;
   */
  value: number;

  constructor(data?: PartialMessage<Int32Nullable>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int32Nullable";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32Nullable;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32Nullable;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32Nullable;

  static equals(a: Int32Nullable | PlainMessage<Int32Nullable> | undefined, b: Int32Nullable | PlainMessage<Int32Nullable> | undefined): boolean;
}

/**
 * nullable Int64
 *
 * @generated from message api.commons.Int64Nullable
 */
export declare class Int64Nullable extends Message<Int64Nullable> {
  /**
   * @generated from field: bool is_null = 1;
   */
  isNull: boolean;

  /**
   * @generated from field: int64 value = 2;
   */
  value: bigint;

  constructor(data?: PartialMessage<Int64Nullable>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int64Nullable";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64Nullable;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64Nullable;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64Nullable;

  static equals(a: Int64Nullable | PlainMessage<Int64Nullable> | undefined, b: Int64Nullable | PlainMessage<Int64Nullable> | undefined): boolean;
}

/**
 * @generated from message api.commons.SomeSidAndDateCompare
 */
export declare class SomeSidAndDateCompare extends Message<SomeSidAndDateCompare> {
  /**
   * @generated from field: int64 some_sid = 1;
   */
  someSid: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp date_greater = 2;
   */
  dateGreater?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp date_less = 3;
   */
  dateLess?: Timestamp;

  constructor(data?: PartialMessage<SomeSidAndDateCompare>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SomeSidAndDateCompare";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SomeSidAndDateCompare;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SomeSidAndDateCompare;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SomeSidAndDateCompare;

  static equals(a: SomeSidAndDateCompare | PlainMessage<SomeSidAndDateCompare> | undefined, b: SomeSidAndDateCompare | PlainMessage<SomeSidAndDateCompare> | undefined): boolean;
}

/**
 * if you want to use repeated fields in query parameters use these
 * these messages have type mappings in go/conversion/arrays.go
 *
 * @generated from message api.commons.Int64ArraySql
 */
export declare class Int64ArraySql extends Message<Int64ArraySql> {
  /**
   * @generated from field: repeated int64 values = 1;
   */
  values: bigint[];

  constructor(data?: PartialMessage<Int64ArraySql>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int64ArraySql";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64ArraySql;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64ArraySql;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64ArraySql;

  static equals(a: Int64ArraySql | PlainMessage<Int64ArraySql> | undefined, b: Int64ArraySql | PlainMessage<Int64ArraySql> | undefined): boolean;
}

/**
 * @generated from message api.commons.Int32ArraySql
 */
export declare class Int32ArraySql extends Message<Int32ArraySql> {
  /**
   * @generated from field: repeated int32 values = 1;
   */
  values: number[];

  constructor(data?: PartialMessage<Int32ArraySql>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int32ArraySql";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32ArraySql;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32ArraySql;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32ArraySql;

  static equals(a: Int32ArraySql | PlainMessage<Int32ArraySql> | undefined, b: Int32ArraySql | PlainMessage<Int32ArraySql> | undefined): boolean;
}

/**
 * @generated from message api.commons.StringArraySql
 */
export declare class StringArraySql extends Message<StringArraySql> {
  /**
   * @generated from field: repeated string values = 2;
   */
  values: string[];

  constructor(data?: PartialMessage<StringArraySql>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.StringArraySql";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringArraySql;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringArraySql;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringArraySql;

  static equals(a: StringArraySql | PlainMessage<StringArraySql> | undefined, b: StringArraySql | PlainMessage<StringArraySql> | undefined): boolean;
}

/**
 * @generated from message api.commons.BoolArraySql
 */
export declare class BoolArraySql extends Message<BoolArraySql> {
  /**
   * @generated from field: repeated bool values = 1;
   */
  values: boolean[];

  constructor(data?: PartialMessage<BoolArraySql>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.BoolArraySql";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BoolArraySql;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BoolArraySql;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BoolArraySql;

  static equals(a: BoolArraySql | PlainMessage<BoolArraySql> | undefined, b: BoolArraySql | PlainMessage<BoolArraySql> | undefined): boolean;
}

/**
 * @generated from message api.commons.Int32ValueArraySql
 */
export declare class Int32ValueArraySql extends Message<Int32ValueArraySql> {
  /**
   * @generated from field: repeated google.protobuf.Int32Value values = 1;
   */
  values: Int32Value[];

  constructor(data?: PartialMessage<Int32ValueArraySql>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int32ValueArraySql";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32ValueArraySql;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32ValueArraySql;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32ValueArraySql;

  static equals(a: Int32ValueArraySql | PlainMessage<Int32ValueArraySql> | undefined, b: Int32ValueArraySql | PlainMessage<Int32ValueArraySql> | undefined): boolean;
}

/**
 * wraps int64 values so they can be null, but also adds the JS_STRING
 * tag so that data isn't lost when using snowflake ids
 *
 * @generated from message api.commons.Int64Id
 */
export declare class Int64Id extends Message<Int64Id> {
  /**
   * @generated from field: int64 value = 1;
   */
  value: bigint;

  constructor(data?: PartialMessage<Int64Id>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Int64Id";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64Id;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64Id;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64Id;

  static equals(a: Int64Id | PlainMessage<Int64Id> | undefined, b: Int64Id | PlainMessage<Int64Id> | undefined): boolean;
}

