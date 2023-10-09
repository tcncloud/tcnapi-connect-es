// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/invoice.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Product } from "./product_pb.js";

/**
 * Invoice represents a collection of invoice items
 * billed to an org for a given billing cycle.
 *
 * @generated from message services.billing.entities.v1alpha1.Invoice
 */
export declare class Invoice extends Message<Invoice> {
  /**
   * the invoice identifier
   *
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  /**
   * the billing cycle this invoice was created for
   *
   * @generated from field: string billing_cycle = 2;
   */
  billingCycle: string;

  /**
   * the time this invoice was created
   *
   * @generated from field: google.protobuf.Timestamp create_time = 3;
   */
  createTime?: Timestamp;

  /**
   * the time this invoice was last updated
   *
   * @generated from field: google.protobuf.Timestamp update_time = 4;
   */
  updateTime?: Timestamp;

  /**
   * the time this invoice was deleted (if applicable)
   *
   * @generated from field: google.protobuf.Timestamp delete_time = 5;
   */
  deleteTime?: Timestamp;

  /**
   * the invoice items, where each product is
   * a separate item.
   *
   * @generated from field: repeated services.billing.entities.v1alpha1.InvoiceItem items = 6;
   */
  items: InvoiceItem[];

  /**
   * the url to download the invoice
   *
   * @generated from field: google.protobuf.StringValue url = 7;
   */
  url?: string;

  constructor(data?: PartialMessage<Invoice>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.Invoice";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Invoice;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Invoice;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Invoice;

  static equals(a: Invoice | PlainMessage<Invoice> | undefined, b: Invoice | PlainMessage<Invoice> | undefined): boolean;
}

/**
 * InvoiceItem represents a single line item on an invoice.
 *
 * @generated from message services.billing.entities.v1alpha1.InvoiceItem
 */
export declare class InvoiceItem extends Message<InvoiceItem> {
  /**
   * the invoice item identifier
   *
   * @generated from field: string invoice_item_id = 1;
   */
  invoiceItemId: string;

  /**
   * the product this item represents
   *
   * @generated from field: services.billing.entities.v1alpha1.Product product = 2;
   */
  product: Product;

  /**
   * the price for this product
   *
   * @generated from field: double price = 3;
   */
  price: number;

  /**
   * the time this invoice item was created
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * the time this invoice item was last updated
   *
   * @generated from field: google.protobuf.Timestamp update_time = 5;
   */
  updateTime?: Timestamp;

  constructor(data?: PartialMessage<InvoiceItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.entities.v1alpha1.InvoiceItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InvoiceItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InvoiceItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InvoiceItem;

  static equals(a: InvoiceItem | PlainMessage<InvoiceItem> | undefined, b: InvoiceItem | PlainMessage<InvoiceItem> | undefined): boolean;
}

