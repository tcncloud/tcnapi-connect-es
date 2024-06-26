// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_filter.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Flag } from "./flag_pb.js";
import type { Filter } from "./filter_pb.js";

/**
 * CreateFlagFilterRequest is a request for creating a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagFilterRequest
 */
export declare class CreateFlagFilterRequest extends Message<CreateFlagFilterRequest> {
  /**
   * The flag filter resource to create.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagFilter flag_filter = 1;
   */
  flagFilter?: FlagFilter;

  constructor(data?: PartialMessage<CreateFlagFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFlagFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlagFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlagFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlagFilterRequest;

  static equals(a: CreateFlagFilterRequest | PlainMessage<CreateFlagFilterRequest> | undefined, b: CreateFlagFilterRequest | PlainMessage<CreateFlagFilterRequest> | undefined): boolean;
}

/**
 * ListFlagFiltersRequest is a request for listing flag filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagFiltersRequest
 */
export declare class ListFlagFiltersRequest extends Message<ListFlagFiltersRequest> {
  /**
   * Optional. The number of flag filters to include in a single response. When not
   * provided this defaults to 100.
   *
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   * When provided all other request fields are ignored.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  /**
   * Optional. Field mask for response flag. A missing or empty field mask is
   * interpreted as a field mask containing all possible fields.
   *
   * @generated from field: google.protobuf.FieldMask flag_mask = 4;
   */
  flagMask?: FieldMask;

  /**
   * Optional. Field mask for response filter. A missing or empty field mask is
   * interpreted as a field mask containing all possible fields.
   *
   * @generated from field: google.protobuf.FieldMask filter_mask = 5;
   */
  filterMask?: FieldMask;

  /**
   * Optional. List of flag sids. Requires response filters to be associated
   * with at least one of the provided flag sids.
   *
   * @generated from field: repeated int64 flag_sids = 6;
   */
  flagSids: bigint[];

  constructor(data?: PartialMessage<ListFlagFiltersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagFiltersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagFiltersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagFiltersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagFiltersRequest;

  static equals(a: ListFlagFiltersRequest | PlainMessage<ListFlagFiltersRequest> | undefined, b: ListFlagFiltersRequest | PlainMessage<ListFlagFiltersRequest> | undefined): boolean;
}

/**
 * ListFlagFiltersResponse is a response for listing flag filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagFiltersResponse
 */
export declare class ListFlagFiltersResponse extends Message<ListFlagFiltersResponse> {
  /**
   * Token to retrieve the next page. Empty when there are no more pages.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of flag filters.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagFilter flag_filters = 2;
   */
  flagFilters: FlagFilter[];

  constructor(data?: PartialMessage<ListFlagFiltersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagFiltersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagFiltersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagFiltersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagFiltersResponse;

  static equals(a: ListFlagFiltersResponse | PlainMessage<ListFlagFiltersResponse> | undefined, b: ListFlagFiltersResponse | PlainMessage<ListFlagFiltersResponse> | undefined): boolean;
}

/**
 * DeleteFlagFilterRequest is a request for deleting a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagFilterRequest
 */
export declare class DeleteFlagFilterRequest extends Message<DeleteFlagFilterRequest> {
  /**
   * Optional. The unique id of the flag on the flag filter to be deleted.
   *
   * @generated from field: int64 flag_sid = 1;
   */
  flagSid: bigint;

  /**
   * Optional. The unique id of the filter on the flag filter to be deleted.
   *
   * @generated from field: int64 filter_sid = 2;
   */
  filterSid: bigint;

  /**
   * Optional. If true, then all flag filters with the given flag sid and/or
   * filter sid will be deleted.
   *
   * @generated from field: bool all = 3;
   */
  all: boolean;

  constructor(data?: PartialMessage<DeleteFlagFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagFilterRequest;

  static equals(a: DeleteFlagFilterRequest | PlainMessage<DeleteFlagFilterRequest> | undefined, b: DeleteFlagFilterRequest | PlainMessage<DeleteFlagFilterRequest> | undefined): boolean;
}

/**
 * DeleteFlagFilterResponse is a response for deleting a flag filter.
 * DEPRECATED
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagFilterResponse
 */
export declare class DeleteFlagFilterResponse extends Message<DeleteFlagFilterResponse> {
  constructor(data?: PartialMessage<DeleteFlagFilterResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagFilterResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagFilterResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagFilterResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagFilterResponse;

  static equals(a: DeleteFlagFilterResponse | PlainMessage<DeleteFlagFilterResponse> | undefined, b: DeleteFlagFilterResponse | PlainMessage<DeleteFlagFilterResponse> | undefined): boolean;
}

/**
 * FlagFilter is a resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagFilter
 */
export declare class FlagFilter extends Message<FlagFilter> {
  /**
   * Output only. The unique id of this flag filter.
   *
   * @generated from field: int64 flag_filter_sid = 1;
   */
  flagFilterSid: bigint;

  /**
   * Required. The unique id of the filter.
   *
   * @generated from field: int64 filter_sid = 2;
   */
  filterSid: bigint;

  /**
   * Required. The unique id of the flag.
   *
   * @generated from field: int64 flag_sid = 3;
   */
  flagSid: bigint;

  /**
   * Output only. The flag for this flag filter.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag flag = 5;
   */
  flag?: Flag;

  /**
   * Output only. The filter for this flag filter.
   *
   * @generated from field: api.v1alpha1.vanalytics.Filter filter = 6;
   */
  filter?: Filter;

  constructor(data?: PartialMessage<FlagFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagFilter;

  static equals(a: FlagFilter | PlainMessage<FlagFilter> | undefined, b: FlagFilter | PlainMessage<FlagFilter> | undefined): boolean;
}

