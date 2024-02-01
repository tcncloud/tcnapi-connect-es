// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/invoices.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Invoice } from "../entities/v1alpha1/invoice_pb.js";
import type { Page, Sort } from "./core_pb.js";

/**
 * @generated from enum services.billing.v1alpha1.InvoiceFormat
 */
export declare enum InvoiceFormat {
  /**
   * @generated from enum value: INVOICE_FORMAT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: INVOICE_FORMAT_CSV = 1;
   */
  CSV = 1,
}

/**
 * @generated from message services.billing.v1alpha1.CreateInvoiceRequest
 */
export declare class CreateInvoiceRequest extends Message<CreateInvoiceRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.Invoice invoice = 2;
   */
  invoice?: Invoice;

  constructor(data?: PartialMessage<CreateInvoiceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateInvoiceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateInvoiceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateInvoiceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateInvoiceRequest;

  static equals(a: CreateInvoiceRequest | PlainMessage<CreateInvoiceRequest> | undefined, b: CreateInvoiceRequest | PlainMessage<CreateInvoiceRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.CreateInvoiceResponse
 */
export declare class CreateInvoiceResponse extends Message<CreateInvoiceResponse> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  constructor(data?: PartialMessage<CreateInvoiceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.CreateInvoiceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateInvoiceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateInvoiceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateInvoiceResponse;

  static equals(a: CreateInvoiceResponse | PlainMessage<CreateInvoiceResponse> | undefined, b: CreateInvoiceResponse | PlainMessage<CreateInvoiceResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteInvoiceRequest
 */
export declare class DeleteInvoiceRequest extends Message<DeleteInvoiceRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  constructor(data?: PartialMessage<DeleteInvoiceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteInvoiceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteInvoiceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteInvoiceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteInvoiceRequest;

  static equals(a: DeleteInvoiceRequest | PlainMessage<DeleteInvoiceRequest> | undefined, b: DeleteInvoiceRequest | PlainMessage<DeleteInvoiceRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.DeleteInvoiceResponse
 */
export declare class DeleteInvoiceResponse extends Message<DeleteInvoiceResponse> {
  constructor(data?: PartialMessage<DeleteInvoiceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.DeleteInvoiceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteInvoiceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteInvoiceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteInvoiceResponse;

  static equals(a: DeleteInvoiceResponse | PlainMessage<DeleteInvoiceResponse> | undefined, b: DeleteInvoiceResponse | PlainMessage<DeleteInvoiceResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ExportInvoiceRequest
 */
export declare class ExportInvoiceRequest extends Message<ExportInvoiceRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  /**
   * @generated from field: services.billing.v1alpha1.InvoiceFormat format = 2;
   */
  format: InvoiceFormat;

  constructor(data?: PartialMessage<ExportInvoiceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ExportInvoiceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportInvoiceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportInvoiceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportInvoiceRequest;

  static equals(a: ExportInvoiceRequest | PlainMessage<ExportInvoiceRequest> | undefined, b: ExportInvoiceRequest | PlainMessage<ExportInvoiceRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ExportInvoiceResponse
 */
export declare class ExportInvoiceResponse extends Message<ExportInvoiceResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.Invoice invoice = 1;
   */
  invoice?: Invoice;

  constructor(data?: PartialMessage<ExportInvoiceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ExportInvoiceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportInvoiceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportInvoiceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportInvoiceResponse;

  static equals(a: ExportInvoiceResponse | PlainMessage<ExportInvoiceResponse> | undefined, b: ExportInvoiceResponse | PlainMessage<ExportInvoiceResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetInvoiceRequest
 */
export declare class GetInvoiceRequest extends Message<GetInvoiceRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  constructor(data?: PartialMessage<GetInvoiceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetInvoiceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvoiceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvoiceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvoiceRequest;

  static equals(a: GetInvoiceRequest | PlainMessage<GetInvoiceRequest> | undefined, b: GetInvoiceRequest | PlainMessage<GetInvoiceRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.GetInvoiceResponse
 */
export declare class GetInvoiceResponse extends Message<GetInvoiceResponse> {
  /**
   * @generated from field: services.billing.entities.v1alpha1.Invoice invoice = 1;
   */
  invoice?: Invoice;

  constructor(data?: PartialMessage<GetInvoiceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.GetInvoiceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetInvoiceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetInvoiceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetInvoiceResponse;

  static equals(a: GetInvoiceResponse | PlainMessage<GetInvoiceResponse> | undefined, b: GetInvoiceResponse | PlainMessage<GetInvoiceResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListInvoicesRequest
 */
export declare class ListInvoicesRequest extends Message<ListInvoicesRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  /**
   * Optional: defaults to no filter.
   *
   * @generated from field: string filter = 2;
   */
  filter: string;

  /**
   * Optional: defaults to all fields.
   *
   * @generated from field: google.protobuf.FieldMask fields = 3;
   */
  fields?: FieldMask;

  /**
   * Optional: defaults to no sort.
   *
   * @generated from field: repeated services.billing.v1alpha1.Sort sort = 4;
   */
  sort: Sort[];

  /**
   * Optional: defaults to no paging.
   *
   * @generated from field: services.billing.v1alpha1.Page page = 5;
   */
  page?: Page;

  constructor(data?: PartialMessage<ListInvoicesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListInvoicesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInvoicesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInvoicesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInvoicesRequest;

  static equals(a: ListInvoicesRequest | PlainMessage<ListInvoicesRequest> | undefined, b: ListInvoicesRequest | PlainMessage<ListInvoicesRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.ListInvoicesResponse
 */
export declare class ListInvoicesResponse extends Message<ListInvoicesResponse> {
  /**
   * @generated from field: repeated services.billing.entities.v1alpha1.Invoice invoices = 1;
   */
  invoices: Invoice[];

  /**
   * Optional: only present if paginating.
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<ListInvoicesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.ListInvoicesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListInvoicesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListInvoicesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListInvoicesResponse;

  static equals(a: ListInvoicesResponse | PlainMessage<ListInvoicesResponse> | undefined, b: ListInvoicesResponse | PlainMessage<ListInvoicesResponse> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateInvoiceRequest
 */
export declare class UpdateInvoiceRequest extends Message<UpdateInvoiceRequest> {
  /**
   * @generated from field: string invoice_id = 1;
   */
  invoiceId: string;

  /**
   * @generated from field: services.billing.entities.v1alpha1.Invoice invoice = 2;
   */
  invoice?: Invoice;

  /**
   * @generated from field: google.protobuf.FieldMask update_fields = 3;
   */
  updateFields?: FieldMask;

  constructor(data?: PartialMessage<UpdateInvoiceRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateInvoiceRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInvoiceRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInvoiceRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInvoiceRequest;

  static equals(a: UpdateInvoiceRequest | PlainMessage<UpdateInvoiceRequest> | undefined, b: UpdateInvoiceRequest | PlainMessage<UpdateInvoiceRequest> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.UpdateInvoiceResponse
 */
export declare class UpdateInvoiceResponse extends Message<UpdateInvoiceResponse> {
  constructor(data?: PartialMessage<UpdateInvoiceResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.UpdateInvoiceResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInvoiceResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInvoiceResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInvoiceResponse;

  static equals(a: UpdateInvoiceResponse | PlainMessage<UpdateInvoiceResponse> | undefined, b: UpdateInvoiceResponse | PlainMessage<UpdateInvoiceResponse> | undefined): boolean;
}

