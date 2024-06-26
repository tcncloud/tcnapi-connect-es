// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_transcript.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Flag } from "./flag_pb.js";
import type { Transcript } from "./transcript_pb.js";

/**
 * FlagReviewStatus is an enum for the review status of a flagged transcript.
 *
 * @generated from enum api.v1alpha1.vanalytics.FlagReviewStatus
 */
export declare enum FlagReviewStatus {
  /**
   * @generated from enum value: ANY = 0;
   */
  ANY = 0,

  /**
   * @generated from enum value: TODO = 1;
   */
  TODO = 1,

  /**
   * @generated from enum value: DONE = 2;
   */
  DONE = 2,

  /**
   * @generated from enum value: NONE = 3;
   */
  NONE = 3,
}

/**
 * CreateFlagTranscriptRequest is a request for creating a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagTranscriptRequest
 */
export declare class CreateFlagTranscriptRequest extends Message<CreateFlagTranscriptRequest> {
  /**
   * Required. The transcript sids to be flagged.
   *
   * @generated from field: repeated int64 transcript_sids = 1;
   */
  transcriptSids: bigint[];

  /**
   * Required. The flag for flagging the transcripts.
   *
   * @generated from field: api.v1alpha1.vanalytics.Flag flag = 2;
   */
  flag?: Flag;

  constructor(data?: PartialMessage<CreateFlagTranscriptRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFlagTranscriptRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlagTranscriptRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlagTranscriptRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlagTranscriptRequest;

  static equals(a: CreateFlagTranscriptRequest | PlainMessage<CreateFlagTranscriptRequest> | undefined, b: CreateFlagTranscriptRequest | PlainMessage<CreateFlagTranscriptRequest> | undefined): boolean;
}

/**
 * CreateFlagTranscriptResponse is a response for creating a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagTranscriptResponse
 */
export declare class CreateFlagTranscriptResponse extends Message<CreateFlagTranscriptResponse> {
  constructor(data?: PartialMessage<CreateFlagTranscriptResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFlagTranscriptResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlagTranscriptResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlagTranscriptResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlagTranscriptResponse;

  static equals(a: CreateFlagTranscriptResponse | PlainMessage<CreateFlagTranscriptResponse> | undefined, b: CreateFlagTranscriptResponse | PlainMessage<CreateFlagTranscriptResponse> | undefined): boolean;
}

/**
 * DeleteFlagTranscriptRequest is a request for deleting a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagTranscriptRequest
 */
export declare class DeleteFlagTranscriptRequest extends Message<DeleteFlagTranscriptRequest> {
  /**
   * Required. The org id of the flag transcripts to be deleted.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Required. The transcript sids for the flag transcripts to be deleted.
   *
   * @generated from field: repeated int64 transcript_sids = 2;
   */
  transcriptSids: bigint[];

  constructor(data?: PartialMessage<DeleteFlagTranscriptRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagTranscriptRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagTranscriptRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagTranscriptRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagTranscriptRequest;

  static equals(a: DeleteFlagTranscriptRequest | PlainMessage<DeleteFlagTranscriptRequest> | undefined, b: DeleteFlagTranscriptRequest | PlainMessage<DeleteFlagTranscriptRequest> | undefined): boolean;
}

/**
 * DeleteFlagTranscriptResponse is a response for deleting a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.DeleteFlagTranscriptResponse
 */
export declare class DeleteFlagTranscriptResponse extends Message<DeleteFlagTranscriptResponse> {
  constructor(data?: PartialMessage<DeleteFlagTranscriptResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.DeleteFlagTranscriptResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFlagTranscriptResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFlagTranscriptResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFlagTranscriptResponse;

  static equals(a: DeleteFlagTranscriptResponse | PlainMessage<DeleteFlagTranscriptResponse> | undefined, b: DeleteFlagTranscriptResponse | PlainMessage<DeleteFlagTranscriptResponse> | undefined): boolean;
}

/**
 * SearchFlagTranscriptsRequest is a request for searching flagged transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest
 */
export declare class SearchFlagTranscriptsRequest extends Message<SearchFlagTranscriptsRequest> {
  /**
   * Optional. The number of hits to include in a single response. When not
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
   * Optional. Filter by flag sid.
   *
   * @generated from field: api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.FlagSid flag_sid = 5;
   */
  flagSid?: SearchFlagTranscriptsRequest_FlagSid;

  /**
   * Optional. Filters transcripts by review status.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagReviewStatus flag_review_status = 6;
   */
  flagReviewStatus: FlagReviewStatus;

  /**
   * Optional. Filter by notify group id.
   *
   * @generated from field: api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.NotifyGroupId notify_group_id = 7;
   */
  notifyGroupId?: SearchFlagTranscriptsRequest_NotifyGroupId;

  /**
   * Optional. Filter by review group id.
   *
   * @generated from field: api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.ReviewGroupId review_group_id = 8;
   */
  reviewGroupId?: SearchFlagTranscriptsRequest_ReviewGroupId;

  /**
   * Optional. Filter where transript sid >= start transcript sid.
   *
   * @generated from field: int64 start_transcript_sid = 10;
   */
  startTranscriptSid: bigint;

  /**
   * Optional. Filter where transript sid <= end transcript sid.
   *
   * @generated from field: int64 end_transcript_sid = 11;
   */
  endTranscriptSid: bigint;

  /**
   * Optional. The order by which flag transcripts will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "transcript_sid".
   * Supported order by includes:
   *   + (transcript_sid)
   *   + (transcript_sid desc)
   *   + (create_time, transcript_sid)
   *   + (create_time desc, transcript_sid desc)
   *   + (audio_time, transcript_sid)
   *   + (audio_time desc, transcript_sid desc)
   *
   * @generated from field: string order_by = 12;
   */
  orderBy: string;

  constructor(data?: PartialMessage<SearchFlagTranscriptsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest;

  static equals(a: SearchFlagTranscriptsRequest | PlainMessage<SearchFlagTranscriptsRequest> | undefined, b: SearchFlagTranscriptsRequest | PlainMessage<SearchFlagTranscriptsRequest> | undefined): boolean;
}

/**
 * FlagSid filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.FlagSid
 */
export declare class SearchFlagTranscriptsRequest_FlagSid extends Message<SearchFlagTranscriptsRequest_FlagSid> {
  /**
   * Required. The flag sids to filter by.
   *
   * @generated from field: repeated int64 filter = 1;
   */
  filter: bigint[];

  /**
   * Optional. Minimum number of flags sids within the filter that must be
   * matched on each flagged transcript. All flag sids must be matched when
   * (match <= 0) or (match >= len(filter)).
   *
   * @generated from field: int32 match = 2;
   */
  match: number;

  constructor(data?: PartialMessage<SearchFlagTranscriptsRequest_FlagSid>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.FlagSid";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsRequest_FlagSid;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_FlagSid;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_FlagSid;

  static equals(a: SearchFlagTranscriptsRequest_FlagSid | PlainMessage<SearchFlagTranscriptsRequest_FlagSid> | undefined, b: SearchFlagTranscriptsRequest_FlagSid | PlainMessage<SearchFlagTranscriptsRequest_FlagSid> | undefined): boolean;
}

/**
 * NotifyGroupId filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.NotifyGroupId
 */
export declare class SearchFlagTranscriptsRequest_NotifyGroupId extends Message<SearchFlagTranscriptsRequest_NotifyGroupId> {
  /**
   * Optional. When true include, when false exclude, transcripts which are
   * flagged with an undefined notify group id.
   *
   * @generated from field: bool is_null = 1;
   */
  isNull: boolean;

  /**
   * Optional. The notify group ids to filter by.
   *
   * @generated from field: repeated string filter = 2;
   */
  filter: string[];

  /**
   * Optional. Minimum number of notify group ids within the filter that must
   * be matched on each flagged transcript. All notify group ids must be
   * matched when (match <= 0) or (match >= len(filter)).
   *
   * @generated from field: int32 match = 3;
   */
  match: number;

  constructor(data?: PartialMessage<SearchFlagTranscriptsRequest_NotifyGroupId>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.NotifyGroupId";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsRequest_NotifyGroupId;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_NotifyGroupId;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_NotifyGroupId;

  static equals(a: SearchFlagTranscriptsRequest_NotifyGroupId | PlainMessage<SearchFlagTranscriptsRequest_NotifyGroupId> | undefined, b: SearchFlagTranscriptsRequest_NotifyGroupId | PlainMessage<SearchFlagTranscriptsRequest_NotifyGroupId> | undefined): boolean;
}

/**
 * ReviewGroupId filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.ReviewGroupId
 */
export declare class SearchFlagTranscriptsRequest_ReviewGroupId extends Message<SearchFlagTranscriptsRequest_ReviewGroupId> {
  /**
   * Optional. When true include, when false exclude, transcripts which are
   * flagged with an undefined review group id.
   *
   * @generated from field: bool is_null = 1;
   */
  isNull: boolean;

  /**
   * Optional. The review group ids to filter by.
   *
   * @generated from field: repeated string filter = 2;
   */
  filter: string[];

  /**
   * Optional. Minimum number of review group ids within the filter that must
   * be matched on each flagged transcript. All review group ids must be
   * matched when (match <= 0) or (match >= len(filter)).
   *
   * @generated from field: int32 match = 3;
   */
  match: number;

  constructor(data?: PartialMessage<SearchFlagTranscriptsRequest_ReviewGroupId>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.ReviewGroupId";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsRequest_ReviewGroupId;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_ReviewGroupId;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsRequest_ReviewGroupId;

  static equals(a: SearchFlagTranscriptsRequest_ReviewGroupId | PlainMessage<SearchFlagTranscriptsRequest_ReviewGroupId> | undefined, b: SearchFlagTranscriptsRequest_ReviewGroupId | PlainMessage<SearchFlagTranscriptsRequest_ReviewGroupId> | undefined): boolean;
}

/**
 * SearchFlagTranscriptsResponse is a response for searching flagged transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse
 */
export declare class SearchFlagTranscriptsResponse extends Message<SearchFlagTranscriptsResponse> {
  /**
   * Token to retrieve the next page of transcripts, or empty if there are no
   * more transcripts in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of hits.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse.Hit hits = 2;
   */
  hits: SearchFlagTranscriptsResponse_Hit[];

  /**
   * Total number of hits in query.
   *
   * @generated from field: uint64 total = 3;
   */
  total: bigint;

  constructor(data?: PartialMessage<SearchFlagTranscriptsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsResponse;

  static equals(a: SearchFlagTranscriptsResponse | PlainMessage<SearchFlagTranscriptsResponse> | undefined, b: SearchFlagTranscriptsResponse | PlainMessage<SearchFlagTranscriptsResponse> | undefined): boolean;
}

/**
 * Hits for searching flag transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse.Hit
 */
export declare class SearchFlagTranscriptsResponse_Hit extends Message<SearchFlagTranscriptsResponse_Hit> {
  /**
   * Transcript that is flaggged.
   *
   * @generated from field: api.v1alpha1.vanalytics.Transcript transcript = 1;
   */
  transcript?: Transcript;

  /**
   * List of flag_snapshot_sids that the transcript is flagged with.
   *
   * @generated from field: repeated int64 flag_snapshot_sids = 2;
   */
  flagSnapshotSids: bigint[];

  /**
   * Map of review statuses. If it exists in the map and has value true it has
   * been reviewed. If it exists in the map and has value false it needs to be
   * reviewed. If it does not exist in the map then it does not require review.
   *
   * @generated from field: map<int64, bool> reviewed = 3;
   */
  reviewed: { [key: string]: boolean };

  /**
   * List of flag_sids that the transcript is flagged with.
   *
   * @generated from field: repeated int64 flag_sids = 4;
   */
  flagSids: bigint[];

  constructor(data?: PartialMessage<SearchFlagTranscriptsResponse_Hit>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse.Hit";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchFlagTranscriptsResponse_Hit;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsResponse_Hit;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchFlagTranscriptsResponse_Hit;

  static equals(a: SearchFlagTranscriptsResponse_Hit | PlainMessage<SearchFlagTranscriptsResponse_Hit> | undefined, b: SearchFlagTranscriptsResponse_Hit | PlainMessage<SearchFlagTranscriptsResponse_Hit> | undefined): boolean;
}

