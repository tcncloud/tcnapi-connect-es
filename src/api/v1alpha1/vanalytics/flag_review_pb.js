// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_review.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * CreateFlagReviewRequest is a request for creating a flag review.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagReviewRequest
 */
export const CreateFlagReviewRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CreateFlagReviewRequest",
  () => [
    { no: 1, name: "flag_review", kind: "message", T: FlagReview },
  ],
);

/**
 * BulkCreateFlagReviewRequest is a request for creating many flag reviews.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkCreateFlagReviewRequest
 */
export const BulkCreateFlagReviewRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkCreateFlagReviewRequest",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * BulkCreateFlagReviewResponse is a response for creating many flag reviews.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkCreateFlagReviewResponse
 */
export const BulkCreateFlagReviewResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkCreateFlagReviewResponse",
  [],
);

/**
 * ListFlagReviewsRequest is a request for listing reviews on a transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagReviewsRequest
 */
export const ListFlagReviewsRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagReviewsRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListFlagReviewsResponse is a response for listing reviews on a transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.ListFlagReviewsResponse
 */
export const ListFlagReviewsResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListFlagReviewsResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_reviews", kind: "message", T: FlagReview, repeated: true },
  ],
);

/**
 * FlagReview resource in the Vanalytics API. It represents a flag review
 * for transcripts that have been flagged.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagReview
 */
export const FlagReview = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagReview",
  () => [
    { no: 1, name: "flag_review_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
    { no: 5, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "flag_snapshot_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

