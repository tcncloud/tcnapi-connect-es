// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha2/matching.proto (package services.billing.entities.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * MatchingRule represents a rule for matching an event to a
 * rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha2.MatchingRule
 */
export const MatchingRule = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.entities.v1alpha2.MatchingRule",
  [
    {no: 0, name: "MATCHING_RULE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MATCHING_RULE_COUNTRY_PREFIX", localName: "COUNTRY_PREFIX"},
  ],
);

/**
 * MatchingConfig represents the configuration for matching
 * an event to a rate definition.
 *
 * @generated from message services.billing.entities.v1alpha2.MatchingConfig
 */
export const MatchingConfig = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha2.MatchingConfig",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "country_prefix", kind: "message", T: MatchingConfigCountryPrefix, oneof: "config" },
  ],
);

/**
 * MatchingConfigCountryPrefix represents the configuration for matching
 * an event to a rate definition using the country code and a set of
 * prefixes. The longest prefix match is used.
 *
 * @generated from message services.billing.entities.v1alpha2.MatchingConfigCountryPrefix
 */
export const MatchingConfigCountryPrefix = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha2.MatchingConfigCountryPrefix",
  () => [
    { no: 1, name: "country_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

