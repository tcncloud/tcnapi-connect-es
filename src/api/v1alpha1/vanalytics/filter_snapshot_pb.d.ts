// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/filter_snapshot.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SearchRequest } from "./transcript_pb.js";

/**
 * Filter snapshot resource.
 *
 * @generated from message api.v1alpha1.vanalytics.FilterSnapshot
 */
export declare class FilterSnapshot extends Message<FilterSnapshot> {
  /**
   * Output only. The unique id of this filter snapshot.
   *
   * @generated from field: int64 filter_snapshot_sid = 1;
   */
  filterSnapshotSid: bigint;

  /**
   * Output only. The unique id of this filter.
   *
   * @generated from field: int64 filter_sid = 2;
   */
  filterSid: bigint;

  /**
   * Required. The name of this filter. Must be non empty and unique across all
   * filters within an organization.
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * The search request to be used to filter transcripts.
   *
   * @generated from field: api.v1alpha1.vanalytics.SearchRequest search_request = 5;
   */
  searchRequest?: SearchRequest;

  /**
   * Output only. Assigned by the server. The timestamp when this filter was
   * created.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 6;
   */
  createTime?: Timestamp;

  /**
   * Output only. The version of this filter.
   *
   * @generated from field: int64 version = 7;
   */
  version: bigint;

  constructor(data?: PartialMessage<FilterSnapshot>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FilterSnapshot";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilterSnapshot;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilterSnapshot;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilterSnapshot;

  static equals(a: FilterSnapshot | PlainMessage<FilterSnapshot> | undefined, b: FilterSnapshot | PlainMessage<FilterSnapshot> | undefined): boolean;
}

