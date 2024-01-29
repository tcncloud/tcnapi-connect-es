// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/modules.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BasicConfig represents the basic config for a rating module when
 * there is no other data needed
 *
 * @generated from message services.billing.entities.v1alpha1.BasicConfig
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
  static readonly typeName = "services.billing.entities.v1alpha1.BasicConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BasicConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BasicConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BasicConfig;

  static equals(a: BasicConfig | PlainMessage<BasicConfig> | undefined, b: BasicConfig | PlainMessage<BasicConfig> | undefined): boolean;
}

/**
 * BasicUnitConfig represents basic config for a rating module that
 * rates based on event units
 *
 * @generated from message services.billing.entities.v1alpha1.BasicUnitConfig
 */
export declare class BasicUnitConfig extends Message<BasicUnitConfig> {
  /**
   * Required. the size of an individual unit. For example, a unit
   * size of 300 (with bytes as a unit of measurement) and an event
   * of size 400 bytes will get billed as if it were 2 units.
   *
   * @generated from field: int64 unit_size = 1;
   */
  unitSize: bigint;

  /**
   * Required. the amount to rate each unit
   *
   * @generated from field: double rate = 2;
   */
  rate: number;

  /**
   * Optional. the minimum number of units to rate; for example, a
   * unit size of 5 seconds and a min_units of 2 would mean that
   * any event less than 10 seconds would be billed as if it were
   * two units (10 seconds).
   *
   * @generated from field: google.protobuf.Int64Value min_units = 3;
   */
  minUnits?: bigint;

  /**
   * Optional. the maximum number of units to rate; for example, a
   * unit size of 5 seconds and a max_units of 2 would mean that
   * any event more than 10 seconds would be billed as if it were
   * two units (10 seconds).
   *
   * @generated from field: google.protobuf.Int64Value max_units = 4;
   */
  maxUnits?: bigint;

  constructor(data?: PartialMessage<BasicUnitConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.BasicUnitConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BasicUnitConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BasicUnitConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BasicUnitConfig;

  static equals(a: BasicUnitConfig | PlainMessage<BasicUnitConfig> | undefined, b: BasicUnitConfig | PlainMessage<BasicUnitConfig> | undefined): boolean;
}

