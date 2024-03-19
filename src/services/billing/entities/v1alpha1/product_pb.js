// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/product.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Product represents a billing product. A product should
 * only show up once on an invoice.
 *
 * @generated from enum services.billing.entities.v1alpha1.Product
 */
export const Product = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.entities.v1alpha1.Product",
  [
    {no: 0, name: "PRODUCT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 100, name: "PRODUCT_AGENT_SEATS", localName: "AGENT_SEATS"},
    {no: 200, name: "PRODUCT_OMNI", localName: "OMNI"},
    {no: 201, name: "PRODUCT_OMNI_CHAT_SENT", localName: "OMNI_CHAT_SENT"},
    {no: 202, name: "PRODUCT_OMNI_CHAT_RECEIVED", localName: "OMNI_CHAT_RECEIVED"},
    {no: 203, name: "PRODUCT_OMNI_EMAILS_SENT", localName: "OMNI_EMAILS_SENT"},
    {no: 204, name: "PRODUCT_OMNI_EMAILS_RECEIVED", localName: "OMNI_EMAILS_RECEIVED"},
    {no: 205, name: "PRODUCT_OMNI_SMS_SENT", localName: "OMNI_SMS_SENT"},
    {no: 206, name: "PRODUCT_OMNI_SMS_RECEIVED", localName: "OMNI_SMS_RECEIVED"},
    {no: 300, name: "PRODUCT_COMPLIANCE", localName: "COMPLIANCE"},
  ],
);

