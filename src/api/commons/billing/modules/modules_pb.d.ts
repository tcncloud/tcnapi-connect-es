// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/billing/modules/modules.proto (package api.commons.billing.modules, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BasicConfig - basic config for a rating module when there is no
 * other data needed
 *
 * @generated from message api.commons.billing.modules.BasicConfig
 */
export declare class BasicConfig extends Message<BasicConfig> {
  /**
   * Required. the amount to rate a single event
   *
   * @generated from field: double rate = 1;
   */
  rate: number;

  constructor(data?: PartialMessage<BasicConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.modules.BasicConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BasicConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BasicConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BasicConfig;

  static equals(a: BasicConfig | PlainMessage<BasicConfig> | undefined, b: BasicConfig | PlainMessage<BasicConfig> | undefined): boolean;
}

/**
 * BasicSizeConfig - basic config for a rating module that rates based
 * on event size
 *
 * @generated from message api.commons.billing.modules.BasicAmountConfig
 */
export declare class BasicAmountConfig extends Message<BasicAmountConfig> {
  /**
   * Required. the amount of a unit to apply the rate to. This is the
   * increment amount; for example, an amount of 300 (with bytes as a
   * unit of measurement) and a message of size 400 bytes will get
   * billed as if it were a size of 600 bytes.
   *
   * @generated from field: int64 amount = 1;
   */
  amount: bigint;

  /**
   * Required. the amount to rate each size increment
   *
   * @generated from field: double rate = 2;
   */
  rate: number;

  /**
   * Optional. the minimum number of increments to rate; for example,
   * an amount of 5 seconds and a min_increment of 2 would mean that
   * any event less than 10 seconds would be billed as if it were 10
   * seconds.
   *
   * @generated from field: google.protobuf.Int64Value min_increment = 3;
   */
  minIncrement?: bigint;

  /**
   * Optional. the maximum number of increments to rate; for example,
   * an amount of 5 seconds and a max_increment of 2 would mean that
   * any event more than 10 seconds would be billed as if it were 10
   * seconds.
   *
   * @generated from field: google.protobuf.Int64Value max_increment = 4;
   */
  maxIncrement?: bigint;

  constructor(data?: PartialMessage<BasicAmountConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.modules.BasicAmountConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BasicAmountConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BasicAmountConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BasicAmountConfig;

  static equals(a: BasicAmountConfig | PlainMessage<BasicAmountConfig> | undefined, b: BasicAmountConfig | PlainMessage<BasicAmountConfig> | undefined): boolean;
}

