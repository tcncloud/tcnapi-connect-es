// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/commons/billing/invoice.proto (package api.commons.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.billing.Product
 * @deprecated
 */
export declare enum Product {
  /**
   * @generated from enum value: PRODUCT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRODUCT_OTHER = 1;
   */
  OTHER = 1,

  /**
   * @generated from enum value: PRODUCT_AGENT_SEATS = 100;
   */
  AGENT_SEATS = 100,

  /**
   * @generated from enum value: PRODUCT_EMAILS_SENT = 200;
   */
  EMAILS_SENT = 200,

  /**
   * @generated from enum value: PRODUCT_EMAILS_RECEIVED = 201;
   */
  EMAILS_RECEIVED = 201,

  /**
   * @generated from enum value: PRODUCT_SMS_SENT = 202;
   */
  SMS_SENT = 202,

  /**
   * @generated from enum value: PRODUCT_SMS_RECEIVED = 203;
   */
  SMS_RECEIVED = 203,

  /**
   * @generated from enum value: PRODUCT_CHAT_SENT = 204;
   */
  CHAT_SENT = 204,

  /**
   * @generated from enum value: PRODUCT_CHAT_RECEIVED = 205;
   */
  CHAT_RECEIVED = 205,

  /**
   * @generated from enum value: PRODUCT_OMNI = 300;
   */
  OMNI = 300,

  /**
   * @generated from enum value: PRODUCT_VANA = 400;
   */
  VANA = 400,

  /**
   * @generated from enum value: PRODUCT_COMPLIANCE = 500;
   */
  COMPLIANCE = 500,
}

/**
 * @generated from enum api.commons.billing.InvoiceFormat
 * @deprecated
 */
export declare enum InvoiceFormat {
  /**
   * @generated from enum value: INVOICE_FORMAT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: INVOICE_FORMAT_PROTO = 1;
   */
  PROTO = 1,

  /**
   * @generated from enum value: INVOICE_FORMAT_CSV = 2;
   */
  CSV = 2,
}

/**
 * @generated from message api.commons.billing.Invoice
 * @deprecated
 */
export declare class Invoice extends Message<Invoice> {
  /**
   * @generated from field: repeated api.commons.billing.InvoiceItem items = 1 [deprecated = true];
   * @deprecated
   */
  items: InvoiceItem[];

  /**
   * @generated from field: int64 invoice_id = 2 [jstype = JS_STRING, deprecated = true];
   * @deprecated
   */
  invoiceId: string;

  /**
   * @generated from field: string billing_cycle = 3 [deprecated = true];
   * @deprecated
   */
  billingCycle: string;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 4 [deprecated = true];
   * @deprecated
   */
  createTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp update_time = 5 [deprecated = true];
   * @deprecated
   */
  updateTime?: Timestamp;

  constructor(data?: PartialMessage<Invoice>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.Invoice";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice;

  static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean;
}

/**
 * @generated from message api.commons.billing.InvoiceItem
 * @deprecated
 */
export declare class InvoiceItem extends Message<InvoiceItem> {
  /**
   * @generated from field: int64 invoice_item_sid = 1 [deprecated = true];
   * @deprecated
   */
  invoiceItemSid: bigint;

  /**
   * @generated from field: api.commons.billing.Product product = 2 [deprecated = true];
   * @deprecated
   */
  product: Product;

  /**
   * @generated from field: double amount = 3 [deprecated = true];
   * @deprecated
   */
  amount: number;

  /**
   * @generated from field: google.protobuf.Timestamp date_created = 4 [deprecated = true];
   * @deprecated
   */
  dateCreated?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp date_modified = 5 [deprecated = true];
   * @deprecated
   */
  dateModified?: Timestamp;

  /**
   * @generated from field: int64 invoice_id = 6 [jstype = JS_STRING, deprecated = true];
   * @deprecated
   */
  invoiceId: string;

  constructor(data?: PartialMessage<InvoiceItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.billing.InvoiceItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoiceItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoiceItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoiceItem;

  static equals(a: InvoiceItem | PlainMessage<InvoiceItem> | undefined, b: InvoiceItem | PlainMessage<InvoiceItem> | undefined): boolean;
}

