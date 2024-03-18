// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/plan.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * BillingPlanStatus represents the status of a billing plan
 *
 * @generated from enum services.billing.entities.v1alpha1.BillingPlanStatus
 */
export const BillingPlanStatus = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.entities.v1alpha1.BillingPlanStatus",
  [
    {no: 0, name: "BILLING_PLAN_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 100, name: "BILLING_PLAN_STATUS_CREATING", localName: "CREATING"},
    {no: 200, name: "BILLING_PLAN_STATUS_CREATED", localName: "CREATED"},
  ],
);

/**
 * BillingPlan represents a collection of rate definitions
 *
 * @generated from message services.billing.entities.v1alpha1.BillingPlan
 */
export const BillingPlan = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.BillingPlan",
  () => [
    { no: 1, name: "billing_plan_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 3, name: "update_time", kind: "message", T: Timestamp },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
    { no: 6, name: "delete_time", kind: "message", T: Timestamp },
    { no: 7, name: "rate_definition_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(BillingPlanStatus) },
    { no: 9, name: "actual_start_time", kind: "message", T: Timestamp },
  ],
);

