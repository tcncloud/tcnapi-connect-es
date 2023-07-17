// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/filter.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SearchRequest } from "./transcript_pb.js";

/**
 * @generated from message api.v1alpha1.vanalytics.CreateFilterRequest
 */
export declare class CreateFilterRequest extends Message<CreateFilterRequest> {
  /**
   * The filter resource to create.
   *
   * @generated from field: api.v1alpha1.vanalytics.Filter filter = 1;
   */
  filter?: Filter;

  constructor(data?: PartialMessage<CreateFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFilterRequest;

  static equals(a: CreateFilterRequest | PlainMessage<CreateFilterRequest> | undefined, b: CreateFilterRequest | PlainMessage<CreateFilterRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.ListFiltersRequest
 */
export declare class ListFiltersRequest extends Message<ListFiltersRequest> {
  /**
   * Optional. The number of filters to include in a single response. When not
   * provided this defaults to 100.
   *
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The order by which filters will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "name".
   * Supported order by includes:
   *   + (name)
   *   + (name desc)
   *
   * @generated from field: string order_by = 3;
   */
  orderBy: string;

  /**
   * Optional. The next_page_token returned from a previous List request, if any.
   * When provided all other request fields are ignored.
   *
   * @generated from field: string page_token = 4;
   */
  pageToken: string;

  /**
   * @generated from oneof api.v1alpha1.vanalytics.ListFiltersRequest.where
   */
  where: {
    /**
     * Optional. The filter by which to find other filters which have conflicting
     * name or search request field(s).
     *
     * @generated from field: api.v1alpha1.vanalytics.Filter conflict = 5;
     */
    value: Filter;
    case: "conflict";
  } | {
    /**
     * Optional. Lists filters which are associated with given flag sid.
     *
     * @generated from field: int64 flag_sid = 6;
     */
    value: bigint;
    case: "flagSid";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ListFiltersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFiltersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFiltersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFiltersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFiltersRequest;

  static equals(a: ListFiltersRequest | PlainMessage<ListFiltersRequest> | undefined, b: ListFiltersRequest | PlainMessage<ListFiltersRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.ListFiltersResponse
 */
export declare class ListFiltersResponse extends Message<ListFiltersResponse> {
  /**
   * Token to retrieve the next page of filters, or empty if there are no
   * more filters in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of filters which contains at most one request page_size.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.Filter filters = 2;
   */
  filters: Filter[];

  constructor(data?: PartialMessage<ListFiltersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFiltersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFiltersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFiltersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFiltersResponse;

  static equals(a: ListFiltersResponse | PlainMessage<ListFiltersResponse> | undefined, b: ListFiltersResponse | PlainMessage<ListFiltersResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.UpdateFilterRequest
 */
export declare class UpdateFilterRequest extends Message<UpdateFilterRequest> {
  /**
   * The new filter data.
   *
   * @generated from field: api.v1alpha1.vanalytics.Filter filter = 1;
   */
  filter?: Filter;

  /**
   * Optional. update_mask contains a list of paths to be updated. Possible paths include
   * name and search_request. If no update_mask is provided it defaults to
   * using both name and search_request.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * The ID of the filter to be updated.
   *
   * @generated from field: int64 filter_sid = 3;
   */
  filterSid: bigint;

  constructor(data?: PartialMessage<UpdateFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.UpdateFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFilterRequest;

  static equals(a: UpdateFilterRequest | PlainMessage<UpdateFilterRequest> | undefined, b: UpdateFilterRequest | PlainMessage<UpdateFilterRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteFilterRequest
 */
export declare class DeleteFilterRequest extends Message<DeleteFilterRequest> {
  /**
   * Required. The unique id of the filter to be deleted.
   *
   * @generated from field: int64 filter_sid = 1;
   */
  filterSid: bigint;

  /**
   * Optional. Return the filter that was deleted.
   *
   * @generated from field: bool return = 3;
   */
  return: boolean;

  constructor(data?: PartialMessage<DeleteFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFilterRequest;

  static equals(a: DeleteFilterRequest | PlainMessage<DeleteFilterRequest> | undefined, b: DeleteFilterRequest | PlainMessage<DeleteFilterRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.DeleteFilterResponse
 */
export declare class DeleteFilterResponse extends Message<DeleteFilterResponse> {
  /**
   * Optional. The filter that was deleted.
   *
   * @generated from field: api.v1alpha1.vanalytics.Filter filter = 1;
   */
  filter?: Filter;

  constructor(data?: PartialMessage<DeleteFilterResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFilterResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFilterResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFilterResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFilterResponse;

  static equals(a: DeleteFilterResponse | PlainMessage<DeleteFilterResponse> | undefined, b: DeleteFilterResponse | PlainMessage<DeleteFilterResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vanalytics.GetFilterRequest
 */
export declare class GetFilterRequest extends Message<GetFilterRequest> {
  /**
   * @generated from oneof api.v1alpha1.vanalytics.GetFilterRequest.where
   */
  where: {
    /**
     * The search request to be used to filter transcripts.
     *
     * @generated from field: api.v1alpha1.vanalytics.SearchRequest search_request = 2;
     */
    value: SearchRequest;
    case: "searchRequest";
  } | {
    /**
     * The name of the filter.
     *
     * @generated from field: string name = 3;
     */
    value: string;
    case: "name";
  } | {
    /**
     * The unique id of the filter.
     *
     * @generated from field: int64 filter_sid = 4;
     */
    value: bigint;
    case: "filterSid";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GetFilterRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.GetFilterRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFilterRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFilterRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFilterRequest;

  static equals(a: GetFilterRequest | PlainMessage<GetFilterRequest> | undefined, b: GetFilterRequest | PlainMessage<GetFilterRequest> | undefined): boolean;
}

/**
 * A filter resource in the Vanalytics API.
 *
 * @generated from message api.v1alpha1.vanalytics.Filter
 */
export declare class Filter extends Message<Filter> {
  /**
   * Output only. The unique id of this filter.
   *
   * @generated from field: int64 filter_sid = 1;
   */
  filterSid: bigint;

  /**
   * Required. The name of this filter. Must be non empty and unique across all
   * filters within an organization.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The search request to be used to filter transcripts.
   *
   * @generated from field: api.v1alpha1.vanalytics.SearchRequest search_request = 4;
   */
  searchRequest?: SearchRequest;

  /**
   * Output only. The timestamp when this filter was created. Assigned by the
   * server.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  /**
   * Output only. The version of this filter.
   *
   * @generated from field: int64 version = 6;
   */
  version: bigint;

  constructor(data?: PartialMessage<Filter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.Filter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Filter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Filter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Filter;

  static equals(a: Filter | PlainMessage<Filter> | undefined, b: Filter | PlainMessage<Filter> | undefined): boolean;
}

