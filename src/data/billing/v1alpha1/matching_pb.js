// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file data/billing/v1alpha1/matching.proto (package data.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * MatchingRule represents a rule for matching an event to a
 * rate definition.
 *
 * @generated from enum data.billing.v1alpha1.MatchingRule
 */
export const MatchingRule = proto3.makeEnum(
  "data.billing.v1alpha1.MatchingRule",
  [
    {no: 0, name: "MATCHING_RULE_UNSPECIFIED", localName: "UNSPECIFIED"},
  ],
);

/**
 * MatchingConfig represents the configuration for matching
 * an event to a rate definition.
 *
 * oneof config
 *
 * @generated from message data.billing.v1alpha1.MatchingConfig
 */
export const MatchingConfig = proto3.makeMessageType(
  "data.billing.v1alpha1.MatchingConfig",
  [],
);

