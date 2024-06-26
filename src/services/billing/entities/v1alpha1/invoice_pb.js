// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/invoice.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue, Timestamp } from "@bufbuild/protobuf";
import { Product } from "./product_pb.js";

/**
 * Invoice represents a collection of invoice items
 * billed to an org for a given billing cycle.
 *
 * @generated from message services.billing.entities.v1alpha1.Invoice
 */
export const Invoice = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.Invoice",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "billing_cycle", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "update_time", kind: "message", T: Timestamp },
    { no: 5, name: "delete_time", kind: "message", T: Timestamp },
    { no: 6, name: "items", kind: "message", T: InvoiceItem, repeated: true },
    { no: 7, name: "url", kind: "message", T: StringValue },
    { no: 8, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * InvoiceItem represents a single line item on an invoice.
 *
 * @generated from message services.billing.entities.v1alpha1.InvoiceItem
 */
export const InvoiceItem = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.InvoiceItem",
  () => [
    { no: 1, name: "invoice_item_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "product", kind: "enum", T: proto3.getEnumType(Product) },
    { no: 3, name: "price", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
    { no: 5, name: "update_time", kind: "message", T: Timestamp },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "date", kind: "message", T: Timestamp },
    { no: 8, name: "columns", kind: "message", T: InvoiceItemColumn, repeated: true },
    { no: 9, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * InvoiceItemColumn represents a single column on an invoice item.
 *
 * @generated from message services.billing.entities.v1alpha1.InvoiceItemColumn
 */
export const InvoiceItemColumn = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha1.InvoiceItemColumn",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "column_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

