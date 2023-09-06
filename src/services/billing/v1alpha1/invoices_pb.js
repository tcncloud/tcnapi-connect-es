// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/invoices.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Invoice } from "../../../data/billing/v1alpha1/invoices_pb.js";
import { OrderBy } from "./core_pb.js";

/**
 * CreateInvoiceRequest is a request to create a new invoice for
 * an organization in the specified billing cycle. Only the
 * billing cycle is required, all other fields are ignored.
 *
 * @generated from message services.billing.v1alpha1.CreateInvoiceRequest
 */
export const CreateInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateInvoiceRequest",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * CreateInvoiceResponse is a response to creating a new invoice.
 *
 * @generated from message services.billing.v1alpha1.CreateInvoiceResponse
 */
export const CreateInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.CreateInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * DeleteInvoiceRequest is a request to delete an invoice.
 *
 * @generated from message services.billing.v1alpha1.DeleteInvoiceRequest
 */
export const DeleteInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteInvoiceResponse is a response to deleting an invoice.
 *
 * @generated from message services.billing.v1alpha1.DeleteInvoiceResponse
 */
export const DeleteInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.DeleteInvoiceResponse",
  [],
);

/**
 * GetInvoiceRequest is a request to get an invoice.
 *
 * @generated from message services.billing.v1alpha1.GetInvoiceRequest
 */
export const GetInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.GetInvoiceRequest",
  () => [
    { no: 1, name: "invoice_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetInvoiceResponse is a response to getting an invoice.
 *
 * @generated from message services.billing.v1alpha1.GetInvoiceResponse
 */
export const GetInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.GetInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

/**
 * ListInvoicesRequest is a request to list invoices.
 *
 * @generated from message services.billing.v1alpha1.ListInvoicesRequest
 */
export const ListInvoicesRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.ListInvoicesRequest",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
    { no: 2, name: "selector_fields", kind: "message", T: FieldMask },
    { no: 3, name: "return_fields", kind: "message", T: FieldMask },
    { no: 4, name: "order_by", kind: "message", T: OrderBy },
  ],
);

/**
 * ListInvoicesResponse is a response to listing invoices.
 *
 * @generated from message services.billing.v1alpha1.ListInvoicesResponse
 */
export const ListInvoicesResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.ListInvoicesResponse",
  () => [
    { no: 1, name: "invoices", kind: "message", T: Invoice, repeated: true },
  ],
);

/**
 * UpdateInvoiceRequest is a request to update an invoice.
 *
 * @generated from message services.billing.v1alpha1.UpdateInvoiceRequest
 */
export const UpdateInvoiceRequest = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateInvoiceRequest",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
    { no: 2, name: "update_fields", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateInvoiceResponse is a response to updating an invoice.
 *
 * @generated from message services.billing.v1alpha1.UpdateInvoiceResponse
 */
export const UpdateInvoiceResponse = proto3.makeMessageType(
  "services.billing.v1alpha1.UpdateInvoiceResponse",
  () => [
    { no: 1, name: "invoice", kind: "message", T: Invoice },
  ],
);

