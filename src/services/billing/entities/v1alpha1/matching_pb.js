// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/matching.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * MatchingRule represents a rule for matching an event to a
 * rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha1.MatchingRule
 */
export const MatchingRule = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.entities.v1alpha1.MatchingRule",
  [
    {no: 0, name: "MATCHING_RULE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MATCHING_RULE_AREA_CODE", localName: "AREA_CODE"},
    {no: 2, name: "MATCHING_RULE_COUNTRY_PREFIX", localName: "COUNTRY_PREFIX"},
  ],
);

/**
 * MatchingConfig represents the configuration for matching
 * an event to a rate definition.
 *
 * @generated from message services.billing.entities.v1alpha1.MatchingConfig
 */
export const MatchingConfig = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.MatchingConfig",
  () => [
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 1, name: "area_code", kind: "message", T: MatchingConfigAreaCode, oneof: "config" },
    { no: 100, name: "country_prefix", kind: "message", T: MatchingConfigCountryPrefix, oneof: "config" },
  ],
);

/**
 * @generated from message services.billing.entities.v1alpha1.MatchingConfigAreaCode
 * @deprecated
 */
export const MatchingConfigAreaCode = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.MatchingConfigAreaCode",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "area_codes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * MatchingConfigCountryPrefix represents the configuration for matching
 * an event to a rate definition using the country code and a set of
 * prefixes. The longest prefix match is used.
 *
 * @generated from message services.billing.entities.v1alpha1.MatchingConfigCountryPrefix
 */
export const MatchingConfigCountryPrefix = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.MatchingConfigCountryPrefix",
  () => [
    { no: 1, name: "country_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

