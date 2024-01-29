// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/invoices.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Invoice } from "../entities/v1alpha1/invoice_pb.js";
import { Page, Sort } from "./core_pb.js";

/**
 * @generated from enum services.billing.v1alpha1.InvoiceFormat
 */
export const InvoiceFormat = proto3.makeEnum(
  "services.billing.v1alpha1.InvoiceFormat",
  [
    {no: 0, name: "INVOICE_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "INVOICE_FORMAT_CSV", localName: "CSV"},
  ],
);

/**
 * @generated from message services.billing.v1alpha1.CreateInvoiceRequest
 */
export const CreateInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.CreateInvoiceResponse
 */
export const CreateInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateInvoiceResponse",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.DeleteInvoiceRequest
 */
export const DeleteInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.DeleteInvoiceResponse
 */
export const DeleteInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteInvoiceResponse",
  [],
);

/**
 * @generated from message services.billing.v1alpha1.ExportInvoiceRequest
 */
export const ExportInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.ExportInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "format", kind: "enum", T: proto3.getEnumType(InvoiceFormat) },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.ExportInvoiceResponse
 */
export const ExportInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.ExportInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.GetInvoiceRequest
 */
export const GetInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.GetInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.GetInvoiceResponse
 */
export const GetInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.GetInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.ListInvoicesRequest
 */
export const ListInvoicesRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.ListInvoicesRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "fields", kind: "message", T: FieldMask },
    { no: 4, name: "sort", kind: "message", T: Sort, repeated: true },
    { no: 5, name: "page", kind: "message", T: Page },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.ListInvoicesResponse
 */
export const ListInvoicesResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.ListInvoicesResponse",
  () => [
    { no: 1, name: "invoices", kind: "message", T: Invoice, repeated: true },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.UpdateInvoiceRequest
 */
export const UpdateInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "invoice", kind: "message", T: Invoice },
    { no: 3, name: "update_fields", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.billing.v1alpha1.UpdateInvoiceResponse
 */
export const UpdateInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateInvoiceResponse",
  [],
);

