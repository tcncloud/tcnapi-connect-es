// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/integrationspublic/service.proto (package api.v1alpha1.integrationspublic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { FieldDefinition, Flow, InvoiceFlow, Invoices, PaymentFlow, Validation, VerificationFlow } from "../../commons/integrations/integrations_pb.js";

/**
 * @generated from message api.v1alpha1.integrationspublic.Values
 */
export const Values = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.Values",
  () => [
    { no: 1, name: "values", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * kind of like a json value, but we don't support circular references
 *
 * @generated from message api.v1alpha1.integrationspublic.Value
 */
export const Value = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.Value",
  () => [
    { no: 1, name: "str_val", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "val" },
    { no: 2, name: "num_val", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "val" },
    { no: 3, name: "bool_val", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "val" },
    { no: 4, name: "time_val", kind: "message", T: Timestamp, oneof: "val" },
    { no: 6, name: "comp_val", kind: "message", T: CompositeVal, oneof: "val" },
    { no: 7, name: "int_val", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "val" },
    { no: 5, name: "sensitive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "validation", kind: "enum", T: proto3.getEnumType(Validation) },
  ],
);

/**
 * represents the individual parts of a string, where some of the parts are
 * fields in the payload, and other parts are static strings
 * CompositeVal cannot handle circular references. Meaning you cannot have two
 * values that contain fields of each other in the same payload.
 * Fields that are not found when built into a string will throw an error
 *
 * @generated from message api.v1alpha1.integrationspublic.CompositeVal
 */
export const CompositeVal = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.CompositeVal",
  () => [
    { no: 1, name: "parts", kind: "message", T: FieldOrStr, repeated: true },
  ],
);

/**
 * represents either a field name whose value needs to be looked up in the payload
 * or a static string value
 *
 * @generated from message api.v1alpha1.integrationspublic.FieldOrStr
 */
export const FieldOrStr = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.FieldOrStr",
  () => [
    { no: 1, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "val" },
    { no: 2, name: "str_val", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "val" },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalConfigId
 */
export const PortalConfigId = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.PortalConfigId",
  () => [
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * all these things will show up on the portal screen to the receiver of the link
 * contact info should look like the company who is using the portal(not tcn)
 *
 * @generated from message api.v1alpha1.integrationspublic.PortalConfig
 */
export const PortalConfig = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.PortalConfig",
  () => [
    { no: 21, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "chat_client_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contact_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contact_phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "postal_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "city", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "company_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "logo", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 14, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "secondary_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "street_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalLinkId
 */
export const PortalLinkId = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.PortalLinkId",
  () => [
    { no: 3, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataReq
 */
export const GetLinkDataReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetLinkDataReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataRes
 */
export const GetLinkDataRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetLinkDataRes",
  () => [
    { no: 2, name: "complete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "expired", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "portal_config", kind: "message", T: PortalConfig },
    { no: 5, name: "verification", kind: "message", T: VerificationFlow },
    { no: 6, name: "invoice", kind: "message", T: InvoiceFlow },
    { no: 7, name: "payments", kind: "message", T: PaymentFlow, repeated: true },
    { no: 9, name: "flow_forms", kind: "message", T: GetLinkDataRes_FieldNames, repeated: true },
    { no: 15, name: "portal_text", kind: "message", T: PortalText },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames
 */
export const GetLinkDataRes_FieldNames = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetLinkDataRes.FieldNames",
  () => [
    { no: 8, name: "flow", kind: "message", T: Flow },
    { no: 9, name: "field_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "fields", kind: "message", T: FieldDefinition, repeated: true },
  ],
  {localName: "GetLinkDataRes_FieldNames"},
);

/**
 * @generated from message api.v1alpha1.integrationspublic.PortalText
 */
export const PortalText = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.PortalText",
  () => [
    { no: 1, name: "verification_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_footer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "payment_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "payment_footer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "receipt_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "receipt_footer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "invoice_header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "invoice_footer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitVerificationReq
 */
export const SubmitVerificationReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SubmitVerificationReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "verification_fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitVerificationRes
 */
export const SubmitVerificationRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SubmitVerificationRes",
  () => [
    { no: 1, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SessionKeepAliveReq
 */
export const SessionKeepAliveReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SessionKeepAliveReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SessionKeepAliveRes
 */
export const SessionKeepAliveRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SessionKeepAliveRes",
  () => [
    { no: 1, name: "ok", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetInvoiceReq
 */
export const GetInvoiceReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetInvoiceReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetInvoiceRes
 */
export const GetInvoiceRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetInvoiceRes",
  () => [
    { no: 1, name: "fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 2, name: "amount_due", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "amount_due_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "invoices", kind: "message", T: Invoices },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitPaymentReq
 */
export const SubmitPaymentReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SubmitPaymentReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "payment_fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 4, name: "payment_flow", kind: "message", T: PaymentFlow },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.SubmitPaymentRes
 */
export const SubmitPaymentRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.SubmitPaymentRes",
  () => [
    { no: 1, name: "fields", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 2, name: "amount_paid", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "amount_paid_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetReceiptReq
 */
export const GetReceiptReq = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetReceiptReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: PortalLinkId },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.integrationspublic.GetReceiptRes
 */
export const GetReceiptRes = proto3.makeMessageType(
  "api.v1alpha1.integrationspublic.GetReceiptRes",
  () => [
    { no: 1, name: "receipt_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "request", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 3, name: "response", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Value} },
    { no: 4, name: "amount_paid", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "amount_paid_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "payment_flow", kind: "message", T: PaymentFlow },
  ],
);

