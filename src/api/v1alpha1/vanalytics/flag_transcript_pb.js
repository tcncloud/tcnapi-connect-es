// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/flag_transcript.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Flag } from "./flag_pb.js";
import { Transcript } from "./transcript_pb.js";

/**
 * FlagReviewStatus is an enum for the review status of a flagged transcript.
 *
 * @generated from enum api.v1alpha1.vanalytics.FlagReviewStatus
 */
export const FlagReviewStatus = proto3.makeEnum(
  "api.v1alpha1.vanalytics.FlagReviewStatus",
  [
    {no: 0, name: "ANY"},
    {no: 1, name: "TODO"},
    {no: 2, name: "DONE"},
    {no: 3, name: "NONE"},
  ],
);

/**
 * CreateFlagTranscriptRequest is a request for creating a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagTranscriptRequest
 */
export const CreateFlagTranscriptRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CreateFlagTranscriptRequest",
  () => [
    { no: 1, name: "transcript_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "flag", kind: "message", T: Flag },
  ],
);

/**
 * CreateFlagTranscriptResponse is a response for creating a flag transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.CreateFlagTranscriptResponse
 */
export const CreateFlagTranscriptResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CreateFlagTranscriptResponse",
  [],
);

/**
 * SearchFlagTranscriptsRequest is a request for searching flagged transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest
 */
export const SearchFlagTranscriptsRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "flag_sid", kind: "message", T: SearchFlagTranscriptsRequest_FlagSid },
    { no: 6, name: "flag_review_status", kind: "enum", T: proto3.getEnumType(FlagReviewStatus) },
    { no: 7, name: "notify_group_id", kind: "message", T: SearchFlagTranscriptsRequest_NotifyGroupId },
    { no: 8, name: "review_group_id", kind: "message", T: SearchFlagTranscriptsRequest_ReviewGroupId },
    { no: 10, name: "start_transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "end_transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * FlagSid filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.FlagSid
 */
export const SearchFlagTranscriptsRequest_FlagSid = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.FlagSid",
  () => [
    { no: 1, name: "filter", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "match", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "SearchFlagTranscriptsRequest_FlagSid"},
);

/**
 * NotifyGroupId filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.NotifyGroupId
 */
export const SearchFlagTranscriptsRequest_NotifyGroupId = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.NotifyGroupId",
  () => [
    { no: 1, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "match", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "SearchFlagTranscriptsRequest_NotifyGroupId"},
);

/**
 * ReviewGroupId filtering.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.ReviewGroupId
 */
export const SearchFlagTranscriptsRequest_ReviewGroupId = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsRequest.ReviewGroupId",
  () => [
    { no: 1, name: "is_null", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "match", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "SearchFlagTranscriptsRequest_ReviewGroupId"},
);

/**
 * SearchFlagTranscriptsResponse is a response for searching flagged transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse
 */
export const SearchFlagTranscriptsResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hits", kind: "message", T: SearchFlagTranscriptsResponse_Hit, repeated: true },
    { no: 3, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * Hits for searching flag transcripts.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse.Hit
 */
export const SearchFlagTranscriptsResponse_Hit = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchFlagTranscriptsResponse.Hit",
  () => [
    { no: 1, name: "transcript", kind: "message", T: Transcript },
    { no: 2, name: "flag_snapshot_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "reviewed", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 4, name: "flag_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "SearchFlagTranscriptsResponse_Hit"},
);

