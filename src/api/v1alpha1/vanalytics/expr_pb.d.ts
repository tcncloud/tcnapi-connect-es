// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/expr.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Interval } from "../../commons/vanalytics_pb.js";

/**
 * @generated from message api.v1alpha1.vanalytics.Uint32Expr
 */
export declare class Uint32Expr extends Message<Uint32Expr> {
  /**
   * @generated from oneof api.v1alpha1.vanalytics.Uint32Expr.where
   */
  where: {
    /**
     * @generated from field: uint32 gt = 1;
     */
    value: number;
    case: "gt";
  } | {
    /**
     * @generated from field: uint32 gte = 2;
     */
    value: number;
    case: "gte";
  } | {
    /**
     * @generated from field: uint32 lt = 3;
     */
    value: number;
    case: "lt";
  } | {
    /**
     * @generated from field: uint32 lte = 4;
     */
    value: number;
    case: "lte";
  } | {
    /**
     * @generated from field: uint32 eq = 5;
     */
    value: number;
    case: "eq";
  } | {
    /**
     * @generated from field: uint32 not_eq = 6;
     */
    value: number;
    case: "notEq";
  } | {
    /**
     * @generated from field: api.v1alpha1.vanalytics.Uint32Range range = 7;
     */
    value: Uint32Range;
    case: "range";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Uint32Expr>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Uint32Expr";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Uint32Expr;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Uint32Expr;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Uint32Expr;

  static equals(a: Uint32Expr | PlainMessage<Uint32Expr> | undefined, b: Uint32Expr | PlainMessage<Uint32Expr> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.Uint32Range
 */
export declare class Uint32Range extends Message<Uint32Range> {
  /**
   * @generated from field: uint32 from = 1;
   */
  from: number;

  /**
   * @generated from field: uint32 to = 2;
   */
  to: number;

  /**
   * @generated from field: bool include_from = 3;
   */
  includeFrom: boolean;

  /**
   * @generated from field: bool include_to = 4;
   */
  includeTo: boolean;

  constructor(data?: PartialMessage<Uint32Range>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Uint32Range";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Uint32Range;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Uint32Range;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Uint32Range;

  static equals(a: Uint32Range | PlainMessage<Uint32Range> | undefined, b: Uint32Range | PlainMessage<Uint32Range> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.TimestampExpr
 */
export declare class TimestampExpr extends Message<TimestampExpr> {
  /**
   * @generated from oneof api.v1alpha1.vanalytics.TimestampExpr.where
   */
  where: {
    /**
     * Optional. Static time period to match.
     *
     * @generated from field: api.v1alpha1.vanalytics.TimestampRange range = 1;
     */
    value: TimestampRange;
    case: "range";
  } | {
    /**
     * Optional. Dynamic time period to match.
     *
     * @generated from field: api.v1alpha1.vanalytics.Moment moment = 2;
     */
    value: Moment;
    case: "moment";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<TimestampExpr>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.TimestampExpr";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampExpr;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampExpr;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampExpr;

  static equals(a: TimestampExpr | PlainMessage<TimestampExpr> | undefined, b: TimestampExpr | PlainMessage<TimestampExpr> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.Moment
 */
export declare class Moment extends Message<Moment> {
  /**
   * Required. Timezone of the client.
   *
   * @generated from field: string time_zone = 1;
   */
  timeZone: string;

  /**
   * Optional. Dynamic time period to match which
   * defaults to today.
   *
   * @generated from field: api.commons.Interval interval = 2;
   */
  interval: Interval;

  constructor(data?: PartialMessage<Moment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Moment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Moment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Moment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Moment;

  static equals(a: Moment | PlainMessage<Moment> | undefined, b: Moment | PlainMessage<Moment> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.TimestampRange
 */
export declare class TimestampRange extends Message<TimestampRange> {
  /**
   * @generated from field: google.protobuf.Timestamp from = 1;
   */
  from?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp to = 2;
   */
  to?: Timestamp;

  /**
   * @generated from field: bool include_from = 3;
   */
  includeFrom: boolean;

  /**
   * @generated from field: bool include_to = 4;
   */
  includeTo: boolean;

  constructor(data?: PartialMessage<TimestampRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.TimestampRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampRange;

  static equals(a: TimestampRange | PlainMessage<TimestampRange> | undefined, b: TimestampRange | PlainMessage<TimestampRange> | undefined): boolean;
}

