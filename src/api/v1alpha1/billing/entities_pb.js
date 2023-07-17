// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/billing/entities.proto (package api.v1alpha1.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Detail, Plan } from "../../commons/billing/detail_pb.js";
import { Invoice } from "../../commons/billing/invoice_pb.js";

/**
 * GetBillingPlanReq - request to get an organization's billing plan
 *
 * @generated from message api.v1alpha1.billing.GetBillingPlanReq
 */
export const GetBillingPlanReq = proto3.makeMessageType(
  "api.v1alpha1.billing.GetBillingPlanReq",
  [],
);

/**
 * GetBillingPlanRes - result of retrieving an organization's billing plan
 *
 * @generated from message api.v1alpha1.billing.GetBillingPlanRes
 */
export const GetBillingPlanRes = proto3.makeMessageType(
  "api.v1alpha1.billing.GetBillingPlanRes",
  () => [
    { no: 1, name: "billing_plan", kind: "message", T: Plan },
  ],
);

/**
 * UpdateBillingPlanReq - request to update a billing plan.
 *
 * @generated from message api.v1alpha1.billing.UpdateBillingPlanReq
 */
export const UpdateBillingPlanReq = proto3.makeMessageType(
  "api.v1alpha1.billing.UpdateBillingPlanReq",
  () => [
    { no: 1, name: "billing_details", kind: "message", T: Detail, repeated: true },
  ],
);

/**
 * UpdateBillingPlanRes - result of updating a billing plan; contains
 * only the details that were provided in the request
 *
 * @generated from message api.v1alpha1.billing.UpdateBillingPlanRes
 */
export const UpdateBillingPlanRes = proto3.makeMessageType(
  "api.v1alpha1.billing.UpdateBillingPlanRes",
  () => [
    { no: 1, name: "billing_plan", kind: "message", T: Plan },
  ],
);

/**
 * GetInvoiceReq - request to get an invoice
 *
 * @generated from message api.v1alpha1.billing.GetInvoiceReq
 */
export const GetInvoiceReq = proto3.makeMessageType(
  "api.v1alpha1.billing.GetInvoiceReq",
  () => [
    { no: 1, name: "invoice_date", kind: "message", T: Timestamp },
  ],
);

/**
 * GetInvoiceRes - result of retrieving an invoice
 *
 * @generated from message api.v1alpha1.billing.GetInvoiceRes
 */
export const GetInvoiceRes = proto3.makeMessageType(
  "api.v1alpha1.billing.GetInvoiceRes",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

