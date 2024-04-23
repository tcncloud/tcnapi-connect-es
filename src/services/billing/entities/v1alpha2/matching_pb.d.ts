// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha2/matching.proto (package services.billing.entities.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MatchingRule represents a rule for matching an event to a
 * rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha2.MatchingRule
 */
export declare enum MatchingRule {
  /**
   * @generated from enum value: MATCHING_RULE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MATCHING_RULE_COUNTRY_PREFIX = 1;
   */
  COUNTRY_PREFIX = 1,
}

/**
 * MatchingConfig represents the configuration for matching
 * an event to a rate definition.
 *
 * @generated from message services.billing.entities.v1alpha2.MatchingConfig
 */
export declare class MatchingConfig extends Message<MatchingConfig> {
  /**
   * the name of the matching configuration.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * the configuration data.
   *
   * @generated from oneof services.billing.entities.v1alpha2.MatchingConfig.config
   */
  config: {
    /**
     * @generated from field: services.billing.entities.v1alpha2.MatchingConfigCountryPrefix country_prefix = 100;
     */
    value: MatchingConfigCountryPrefix;
    case: "countryPrefix";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<MatchingConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha2.MatchingConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchingConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchingConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchingConfig;

  static equals(a: MatchingConfig | PlainMessage<MatchingConfig> | undefined, b: MatchingConfig | PlainMessage<MatchingConfig> | undefined): boolean;
}

/**
 * MatchingConfigCountryPrefix represents the configuration for matching
 * an event to a rate definition using the country code and a set of
 * prefixes. The longest prefix match is used.
 *
 * @generated from message services.billing.entities.v1alpha2.MatchingConfigCountryPrefix
 */
export declare class MatchingConfigCountryPrefix extends Message<MatchingConfigCountryPrefix> {
  /**
   * The country code to match.
   *
   * @generated from field: int32 country_code = 1;
   */
  countryCode: number;

  /**
   * The list of prefixes (if any) to match after successfully matching
   * the country code.
   *
   * @generated from field: repeated string prefixes = 2;
   */
  prefixes: string[];

  constructor(data?: PartialMessage<MatchingConfigCountryPrefix>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha2.MatchingConfigCountryPrefix";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchingConfigCountryPrefix;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchingConfigCountryPrefix;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchingConfigCountryPrefix;

  static equals(a: MatchingConfigCountryPrefix | PlainMessage<MatchingConfigCountryPrefix> | undefined, b: MatchingConfigCountryPrefix | PlainMessage<MatchingConfigCountryPrefix> | undefined): boolean;
}

