// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_review.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * CreateFlagReviewRequest is a request for creating a flag review.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagReviewRequest
 */
export declare class CreateFlagReviewRequest extends Message<CreateFlagReviewRequest> {
  /**
   * FlagReview resource to create.
   *
   * @generated from field: api.v1alpha1.vanalytics.FlagReview flag_review = 1;
   */
  flagReview?: FlagReview;

  constructor(data?: PartialMessage<CreateFlagReviewRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.CreateFlagReviewRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateFlagReviewRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateFlagReviewRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateFlagReviewRequest;

  static equals(a: CreateFlagReviewRequest | PlainMessage<CreateFlagReviewRequest> | undefined, b: CreateFlagReviewRequest | PlainMessage<CreateFlagReviewRequest> | undefined): boolean;
}

/**
 * BulkCreateFlagReviewRequest is a request for creating many flag reviews.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkCreateFlagReviewRequest
 */
export declare class BulkCreateFlagReviewRequest extends Message<BulkCreateFlagReviewRequest> {
  /**
   * Optional. The ID of the flag for the flag reviews. When not provided
   * all deleted flags will be given a review.
   *
   * @generated from field: int64 flag_sid = 1;
   */
  flagSid: bigint;

  /**
   * Optional. Any notes written for the flag reviews.
   *
   * @generated from field: string notes = 2;
   */
  notes: string;

  constructor(data?: PartialMessage<BulkCreateFlagReviewRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.BulkCreateFlagReviewRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BulkCreateFlagReviewRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BulkCreateFlagReviewRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BulkCreateFlagReviewRequest;

  static equals(a: BulkCreateFlagReviewRequest | PlainMessage<BulkCreateFlagReviewRequest> | undefined, b: BulkCreateFlagReviewRequest | PlainMessage<BulkCreateFlagReviewRequest> | undefined): boolean;
}

/**
 * BulkCreateFlagReviewResponse is a response for creating many flag reviews.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkCreateFlagReviewResponse
 */
export declare class BulkCreateFlagReviewResponse extends Message<BulkCreateFlagReviewResponse> {
  constructor(data?: PartialMessage<BulkCreateFlagReviewResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.BulkCreateFlagReviewResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BulkCreateFlagReviewResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BulkCreateFlagReviewResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BulkCreateFlagReviewResponse;

  static equals(a: BulkCreateFlagReviewResponse | PlainMessage<BulkCreateFlagReviewResponse> | undefined, b: BulkCreateFlagReviewResponse | PlainMessage<BulkCreateFlagReviewResponse> | undefined): boolean;
}

/**
 * ListFlagReviewsRequest is a request for listing reviews on a transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagReviewsRequest
 */
export declare class ListFlagReviewsRequest extends Message<ListFlagReviewsRequest> {
  /**
   * Optional. The number of reviews to include in a single response. When not
   * provided this defaults to 100.
   *
   * @generated from field: uint32 page_size = 2;
   */
  pageSize: number;

  /**
   * Optional. The order by which reviews will be listed. Follows sql order by
   * syntax. When not provided the order defaults to "flag_review_sid desc".
   * Supported order by includes:
   *   + (flag_review_sid desc)
   *   + (flag_review_sid)
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
   * Optional. The transcript sid to look for reviews on.
   *
   * @generated from field: int64 transcript_sid = 5;
   */
  transcriptSid: bigint;

  constructor(data?: PartialMessage<ListFlagReviewsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagReviewsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagReviewsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagReviewsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagReviewsRequest;

  static equals(a: ListFlagReviewsRequest | PlainMessage<ListFlagReviewsRequest> | undefined, b: ListFlagReviewsRequest | PlainMessage<ListFlagReviewsRequest> | undefined): boolean;
}

/**
 * ListFlagReviewsResponse is a response for listing reviews on a transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagReviewsResponse
 */
export declare class ListFlagReviewsResponse extends Message<ListFlagReviewsResponse> {
  /**
   * Token to retrieve the next page of reviews, or empty if there are no
   * more reviews in the list.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * List of flag reviews.
   *
   * @generated from field: repeated api.v1alpha1.vanalytics.FlagReview flag_reviews = 2;
   */
  flagReviews: FlagReview[];

  constructor(data?: PartialMessage<ListFlagReviewsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.ListFlagReviewsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFlagReviewsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFlagReviewsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFlagReviewsResponse;

  static equals(a: ListFlagReviewsResponse | PlainMessage<ListFlagReviewsResponse> | undefined, b: ListFlagReviewsResponse | PlainMessage<ListFlagReviewsResponse> | undefined): boolean;
}

/**
 * FlagReview resource in the Vanalytics API. It represents a flag review
 * for transcripts that have been flagged.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagReview
 */
export declare class FlagReview extends Message<FlagReview> {
  /**
   * Output only. The unique id of this flag review.
   *
   * @generated from field: int64 flag_review_sid = 1;
   */
  flagReviewSid: bigint;

  /**
   * Required. The transcript_sid of the reviewed transcript.
   *
   * @generated from field: int64 transcript_sid = 2;
   */
  transcriptSid: bigint;

  /**
   * DEPRECATED. Use flag_snapshot_sid instead.
   *
   * @generated from field: int64 flag_sid = 3 [deprecated = true];
   * @deprecated
   */
  flagSid: bigint;

  /**
   * Output only. The timestamp when this flag review was created. Assigned by the
   * server.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 4;
   */
  createTime?: Timestamp;

  /**
   * Optional. Any notes written for the flag review.
   *
   * @generated from field: string notes = 5;
   */
  notes: string;

  /**
   * The ID of the flag snapshot for this flag review.
   *
   * @generated from field: int64 flag_snapshot_sid = 8;
   */
  flagSnapshotSid: bigint;

  constructor(data?: PartialMessage<FlagReview>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vanalytics.FlagReview";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlagReview;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlagReview;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlagReview;

  static equals(a: FlagReview | PlainMessage<FlagReview> | undefined, b: FlagReview | PlainMessage<FlagReview> | undefined): boolean;
}

