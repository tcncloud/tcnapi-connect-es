// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/billing/entities.proto (package api.v1alpha1.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Detail, Plan } from "../../commons/billing/detail_pb.js";
import { Invoice, InvoiceFormat as InvoiceFormat$1 } from "../../commons/billing/invoice_pb.js";

/**
 * @generated from enum api.v1alpha1.billing.InvoiceFormat
 */
export const InvoiceFormat = proto3.makeEnum(
  "api.v1alpha1.billing.InvoiceFormat",
  [
    {no: 0, name: "INVOICE_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "INVOICE_FORMAT_PROTO", localName: "PROTO"},
    {no: 2, name: "INVOICE_FORMAT_CSV", localName: "CSV"},
  ],
);

/**
 * GetBillingPlanReq - request to get an organization's billing plan
 *
 * @generated from message api.v1alpha1.billing.GetBillingPlanReq
 */
export const GetBillingPlanReq = proto3.makeMessageType(
  "api.v1alpha1.billing.GetBillingPlanReq",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
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
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "format", kind: "enum", T: proto3.getEnumType(InvoiceFormat) },
    { no: 4, name: "invoice_format", kind: "enum", T: proto3.getEnumType(InvoiceFormat$1) },
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
    { no: 2, name: "proto", kind: "message", T: Invoice, oneof: "format" },
    { no: 3, name: "csv_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "format" },
    { no: 100, name: "invoice_proto", kind: "message", T: Invoice, oneof: "invoice_data" },
    { no: 101, name: "invoice_csv_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "invoice_data" },
    { no: 4, name: "billing_cycle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ExportGenerateInvoicesReq - request to export a generated invoice
 *
 * @generated from message api.v1alpha1.billing.ExportGeneratedInvoiceReq
 */
export const ExportGeneratedInvoiceReq = proto3.makeMessageType(
  "api.v1alpha1.billing.ExportGeneratedInvoiceReq",
  () => [
    { no: 1, name: "invoice_date", kind: "message", T: Timestamp },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "format", kind: "enum", T: proto3.getEnumType(InvoiceFormat) },
    { no: 4, name: "invoice_format", kind: "enum", T: proto3.getEnumType(InvoiceFormat$1) },
  ],
);

/**
 * ExportGeneratedInvoicesRes - result of exporting a generated invoice
 *
 * @generated from message api.v1alpha1.billing.ExportGeneratedInvoiceRes
 */
export const ExportGeneratedInvoiceRes = proto3.makeMessageType(
  "api.v1alpha1.billing.ExportGeneratedInvoiceRes",
  () => [
    { no: 1, name: "proto", kind: "message", T: Invoice, oneof: "format" },
    { no: 2, name: "csv_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "format" },
    { no: 100, name: "invoice_proto", kind: "message", T: Invoice, oneof: "invoice_data" },
    { no: 101, name: "invoice_csv_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "invoice_data" },
    { no: 4, name: "billing_cycle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

