// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_transcript_filter.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FlagSnapshot } from "./flag_snapshot_pb.js";
import type { FilterSnapshot } from "./filter_snapshot_pb.js";

/**
 * ListFlagTranscriptFiltersRequest is a request for listing flag transcript filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagTranscriptFiltersRequest
 */
export declare class ListFlagTranscriptFiltersRequest extends Message<ListFlagTranscriptFiltersRequest> {
  /**
   * Required. The target transcript sid.
   *
   * @generated from field: int64 transcript_sid = 2;
   */
  transcriptSid: bigint;

  /**
   * Optional. Flag snapshot fields to include in response. All when empty.
   *
   * @generated from field: google.protobuf.FieldMask flag_snapshot_mask = 3;
   */
  flagSnapshotMask?: FieldMask;

  /**
   * Optional. Filter snapshot fields to include in response. All when empty.
   *
   * @generated from field: google.protobuf.FieldMask filter_snapshot_mask = 4;
   */
  filterSnapshotMask?: FieldMask;

  constructor(data?: PartialMessage<ListFlagTranscriptFiltersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagTranscriptFiltersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagTranscriptFiltersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagTranscriptFiltersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagTranscriptFiltersRequest;

  static equals(a: ListFlagTranscriptFiltersRequest | PlainMessage<ListFlagTranscriptFiltersRequest> | undefined, b: ListFlagTranscriptFiltersRequest | PlainMessage<ListFlagTranscriptFiltersRequest> | undefined): boolean;
}

/**
 * ListFlagTranscriptFiltersResponse is a response for listing flag transcript filters.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagTranscriptFiltersResponse
 */
export declare class ListFlagTranscriptFiltersResponse extends Message<ListFlagTranscriptFiltersResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagTranscriptFilter flag_transcript_filters = 1;
   */
  flagTranscriptFilters: FlagTranscriptFilter[];

  constructor(data?: PartialMessage<ListFlagTranscriptFiltersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagTranscriptFiltersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagTranscriptFiltersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagTranscriptFiltersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagTranscriptFiltersResponse;

  static equals(a: ListFlagTranscriptFiltersResponse | PlainMessage<ListFlagTranscriptFiltersResponse> | undefined, b: ListFlagTranscriptFiltersResponse | PlainMessage<ListFlagTranscriptFiltersResponse> | undefined): boolean;
}

/**
 * Flag transcript filter resource.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagTranscriptFilter
 */
export declare class FlagTranscriptFilter extends Message<FlagTranscriptFilter> {
  /**
   * FlagSnapshot which flagged target transcript.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagSnapshot flag_snapshot = 1;
   */
  flagSnapshot?: FlagSnapshot;

  /**
   * FilterSnapshot which filtered target transcript.
   *
   * @generated from field: api.v1alpha1.vanalytics.FilterSnapshot filter_snapshot = 2;
   */
  filterSnapshot?: FilterSnapshot;

  constructor(data?: PartialMessage<FlagTranscriptFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagTranscriptFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagTranscriptFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagTranscriptFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagTranscriptFilter;

  static equals(a: FlagTranscriptFilter | PlainMessage<FlagTranscriptFilter> | undefined, b: FlagTranscriptFilter | PlainMessage<FlagTranscriptFilter> | undefined): boolean;
}

