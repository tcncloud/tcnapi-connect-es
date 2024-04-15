// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha2/invoices.proto (package services.billing.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Invoice } from "../entities/v1alpha2/invoice_pb.js";

/**
 * @generated from enum services.billing.v1alpha2.InvoiceFormat
 */
export const InvoiceFormat = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.v1alpha2.InvoiceFormat",
  [
    {no: 0, name: "INVOICE_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "INVOICE_FORMAT_CSV", localName: "CSV"},
  ],
);

/**
 * @generated from message services.billing.v1alpha2.ExportInvoiceRequest
 */
export const ExportInvoiceRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.v1alpha2.ExportInvoiceRequest",
  () => [
    { no: 1, name: "format", kind: "enum", T: proto3.getEnumType(InvoiceFormat) },
    { no: 2, name: "invoice_date", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message services.billing.v1alpha2.ExportInvoiceResponse
 */
export const ExportInvoiceResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.v1alpha2.ExportInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);
