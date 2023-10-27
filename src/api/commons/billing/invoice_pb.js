// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/billing/invoice.proto (package api.commons.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Product - represents a billed product. A product should show up only
 * once in a monthly invoice.
 *
 * @generated from enum api.commons.billing.Product
 */
export const Product = proto3.makeEnum(
  "api.commons.billing.Product",
  [
    {no: 0, name: "PRODUCT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PRODUCT_OTHER", localName: "OTHER"},
    {no: 100, name: "PRODUCT_AGENT_SEATS", localName: "AGENT_SEATS"},
    {no: 200, name: "PRODUCT_EMAILS_SENT", localName: "EMAILS_SENT"},
    {no: 201, name: "PRODUCT_EMAILS_RECEIVED", localName: "EMAILS_RECEIVED"},
    {no: 202, name: "PRODUCT_SMS_SENT", localName: "SMS_SENT"},
    {no: 203, name: "PRODUCT_SMS_RECEIVED", localName: "SMS_RECEIVED"},
    {no: 204, name: "PRODUCT_CHAT_SENT", localName: "CHAT_SENT"},
    {no: 205, name: "PRODUCT_CHAT_RECEIVED", localName: "CHAT_RECEIVED"},
    {no: 300, name: "PRODUCT_OMNI", localName: "OMNI"},
    {no: 400, name: "PRODUCT_VANA", localName: "VANA"},
    {no: 500, name: "PRODUCT_COMPLIANCE", localName: "COMPLIANCE"},
  ],
);

/**
 * @generated from enum api.commons.billing.InvoiceFormat
 */
export const InvoiceFormat = proto3.makeEnum(
  "api.commons.billing.InvoiceFormat",
  [
    {no: 0, name: "INVOICE_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "INVOICE_FORMAT_PROTO", localName: "PROTO"},
    {no: 2, name: "INVOICE_FORMAT_CSV", localName: "CSV"},
  ],
);

/**
 * Invoice - a collection of products with their total rated amount for
 * a selected month or month-to-date.
 *
 * @generated from message api.commons.billing.Invoice
 */
export const Invoice = proto3.makeMessageType(
  "api.commons.billing.Invoice",
  () => [
    { no: 1, name: "items", kind: "message", T: InvoiceItem, repeated: true },
    { no: 2, name: "invoice_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "billing_cycle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
    { no: 5, name: "update_time", kind: "message", T: Timestamp },
  ],
);

/**
 * InvoiceItem -
 *
 * @generated from message api.commons.billing.InvoiceItem
 */
export const InvoiceItem = proto3.makeMessageType(
  "api.commons.billing.InvoiceItem",
  () => [
    { no: 1, name: "invoice_item_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "product", kind: "enum", T: proto3.getEnumType(Product) },
    { no: 3, name: "amount", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "date_created", kind: "message", T: Timestamp },
    { no: 5, name: "date_modified", kind: "message", T: Timestamp },
    { no: 6, name: "invoice_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

