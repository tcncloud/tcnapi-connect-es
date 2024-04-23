// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/billing/v1alpha1/core.proto (package services.billing.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum services.billing.v1alpha1.Order
 */
export declare enum Order {
  /**
   * If unspecified, sorts ascending
   *
   * @generated from enum value: ORDER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORDER_DESC = 1;
   */
  DESC = 1,
}

/**
 * @generated from message services.billing.v1alpha1.Page
 */
export declare class Page extends Message<Page> {
  /**
   * Optional: if not specified, will not paginate
   *
   * @generated from field: int64 limit = 1;
   */
  limit: bigint;

  /**
   * Optional: if not specified, will start from the beginning
   *
   * @generated from field: string token = 2;
   */
  token: string;

  constructor(data?: PartialMessage<Page>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.Page";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Page;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Page;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Page;

  static equals(a: Page | PlainMessage<Page> | undefined, b: Page | PlainMessage<Page> | undefined): boolean;
}

/**
 * @generated from message services.billing.v1alpha1.Sort
 */
export declare class Sort extends Message<Sort> {
  /**
   * Required: key to sort by
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * Required: direction to sort by
   *
   * @generated from field: services.billing.v1alpha1.Order direction = 2;
   */
  direction: Order;

  constructor(data?: PartialMessage<Sort>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.billing.v1alpha1.Sort";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sort;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sort;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sort;

  static equals(a: Sort | PlainMessage<Sort> | undefined, b: Sort | PlainMessage<Sort> | undefined): boolean;
}

