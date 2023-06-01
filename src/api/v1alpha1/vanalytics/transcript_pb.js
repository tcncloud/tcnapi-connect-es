// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/transcript.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BoolValue, DoubleValue, Duration, FieldMask, Int32Value, Int64Value, proto3, Timestamp } from "@bufbuild/protobuf";
import { TimestampExpr, Uint32Expr, Uint32Range } from "./expr_pb.js";
import { AgentCallLogCallEnded, CallType_Enum } from "../../commons/acd_pb.js";
import { AgentCallLog } from "./aclpb/aclpb_pb.js";

/**
 * TranscriptReviewStatus is an enumeration of a flagged transcripts review
 * statuses. Todo means there are flags that need review and have not been
 * reviewed. Done means every flag that needs review has been reviewed. None
 * means zero flags require review.
 *
 * @generated from enum api.v1alpha1.vanalytics.TranscriptReviewStatus
 */
export const TranscriptReviewStatus = proto3.makeEnum(
  "api.v1alpha1.vanalytics.TranscriptReviewStatus",
  [
    {no: 0, name: "TRANSCRIPT_REVIEW_STATUS_TODO", localName: "TODO"},
    {no: 1, name: "TRANSCRIPT_REVIEW_STATUS_DONE", localName: "DONE"},
    {no: 2, name: "TRANSCRIPT_REVIEW_STATUS_NONE", localName: "NONE"},
  ],
);

/**
 * BulkDeleteTranscriptsRequest defines the bulk delete transcripts request.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest
 */
export const BulkDeleteTranscriptsRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkDeleteTranscriptsRequest",
  () => [
    { no: 1, name: "query", kind: "message", T: SearchRequest },
  ],
);

/**
 * BulkDeleteTranscriptsResponse defines the bulk delete transcripts response.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse
 */
export const BulkDeleteTranscriptsResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkDeleteTranscriptsResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * BulkRestoreTranscriptsRequest defines the bulk restore transcripts request.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest
 */
export const BulkRestoreTranscriptsRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkRestoreTranscriptsRequest",
  () => [
    { no: 1, name: "query", kind: "message", T: SearchRequest },
  ],
);

/**
 * BulkRestoreTranscriptsResponse defines the bulk restore transcripts response.
 *
 * @generated from message api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse
 */
export const BulkRestoreTranscriptsResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BulkRestoreTranscriptsResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest
 */
export const SearchRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest",
  () => [
    { no: 2, name: "silence", kind: "message", T: SearchRequest_Silence },
    { no: 3, name: "talk_time", kind: "message", T: Uint32Expr },
    { no: 4, name: "agent", kind: "message", T: SearchRequest_Agent },
    { no: 5, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "sort", kind: "message", T: Sort },
    { no: 7, name: "create_time", kind: "message", T: TimestampExpr },
    { no: 8, name: "talk_over", kind: "message", T: SearchRequest_TalkOver },
    { no: 9, name: "terms", kind: "message", T: SearchRequest_Terms },
    { no: 10, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 11, name: "phrase", kind: "message", T: SearchRequest_Phrase },
    { no: 12, name: "transcript_mask", kind: "message", T: FieldMask },
    { no: 13, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "transcript_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 17, name: "call_start_time", kind: "message", T: TimestampExpr },
    { no: 18, name: "call_types", kind: "enum", T: proto3.getEnumType(CallType_Enum), repeated: true },
    { no: 19, name: "call_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 20, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 21, name: "group_names", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 22, name: "agent_call_log", kind: "message", T: AgentCallLogQuery },
    { no: 23, name: "where", kind: "message", T: SearchQuery },
    { no: 24, name: "time_frame", kind: "message", T: Uint32Range },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Phrase
 */
export const SearchRequest_Phrase = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Phrase",
  () => [
    { no: 1, name: "words", kind: "message", T: SearchRequest_Phrase_Word, repeated: true },
    { no: 2, name: "slop", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "in_order", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "highlight", kind: "message", T: SearchRequest_Phrase_Highlight },
    { no: 5, name: "not", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "agent", kind: "message", T: SearchRequest_Agent },
    { no: 7, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 8, name: "position_offset", kind: "message", T: SearchRequest_PositionOffset },
  ],
  {localName: "SearchRequest_Phrase"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Phrase.Word
 */
export const SearchRequest_Phrase_Word = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Phrase.Word",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fuzziness", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "SearchRequest_Phrase_Word"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight
 */
export const SearchRequest_Phrase_Highlight = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Phrase.Highlight",
  () => [
    { no: 1, name: "pre_tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "post_tags", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SearchRequest_Phrase_Highlight"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.PositionOffset
 */
export const SearchRequest_PositionOffset = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.PositionOffset",
  () => [
    { no: 1, name: "start", kind: "message", T: Duration },
    { no: 2, name: "stop", kind: "message", T: Duration },
  ],
  {localName: "SearchRequest_PositionOffset"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Silence
 */
export const SearchRequest_Silence = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Silence",
  () => [
    { no: 1, name: "duration_total", kind: "message", T: Uint32Expr },
    { no: 2, name: "duration_max", kind: "message", T: Uint32Expr },
    { no: 3, name: "occurrence_total", kind: "message", T: Uint32Expr },
    { no: 4, name: "duration_percentage", kind: "message", T: Uint32Expr },
  ],
  {localName: "SearchRequest_Silence"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.TalkOver
 */
export const SearchRequest_TalkOver = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.TalkOver",
  () => [
    { no: 1, name: "duration_total", kind: "message", T: Uint32Expr },
    { no: 2, name: "duration_max", kind: "message", T: Uint32Expr },
    { no: 3, name: "occurrence_total", kind: "message", T: Uint32Expr },
    { no: 4, name: "duration_percentage", kind: "message", T: Uint32Expr },
  ],
  {localName: "SearchRequest_TalkOver"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Terms
 */
export const SearchRequest_Terms = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Terms",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "not", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "agent", kind: "message", T: SearchRequest_Agent },
    { no: 5, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "position_offset", kind: "message", T: SearchRequest_PositionOffset },
  ],
  {localName: "SearchRequest_Terms"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Agent
 */
export const SearchRequest_Agent = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Agent",
  () => [
    { no: 1, name: "user_name", kind: "message", T: SearchRequest_Agent_UserName },
  ],
  {localName: "SearchRequest_Agent"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchRequest.Agent.UserName
 */
export const SearchRequest_Agent_UserName = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchRequest.Agent.UserName",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SearchRequest_Agent_UserName"},
);

/**
 * SearchQuery defines a query on transcript fields.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery
 */
export const SearchQuery = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery",
  () => [
    { no: 1, name: "transcript_sid", kind: "message", T: SearchQuery_TranscriptSid },
    { no: 2, name: "flag_summary", kind: "message", T: SearchQuery_FlagSummary },
    { no: 3, name: "or", kind: "message", T: SearchQuery, repeated: true },
    { no: 4, name: "and", kind: "message", T: SearchQuery, repeated: true },
    { no: 5, name: "audio_time", kind: "message", T: SearchQuery_AudioTime },
    { no: 6, name: "delete_time", kind: "message", T: SearchQuery_DeleteTime },
    { no: 7, name: "not", kind: "message", T: SearchQuery },
    { no: 8, name: "results", kind: "message", T: SearchQuery_Results },
    { no: 9, name: "agent_response", kind: "message", T: SearchQuery_AgentResponse },
    { no: 10, name: "agent_call_log", kind: "message", T: SearchQuery_AgentCallLog },
  ],
);

/**
 * AgentCallLog is a query for the agent call log.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AgentCallLog
 */
export const SearchQuery_AgentCallLog = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AgentCallLog",
  () => [
    { no: 1, name: "call_skills_initial", kind: "message", T: SearchQuery_CallSkillsInitial },
    { no: 2, name: "call_ended", kind: "message", T: SearchQuery_CallEnded },
  ],
  {localName: "SearchQuery_AgentCallLog"},
);

/**
 * CallEnded is a query for the call ended.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.CallEnded
 */
export const SearchQuery_CallEnded = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.CallEnded",
  () => [
    { no: 1, name: "reasons", kind: "enum", T: proto3.getEnumType(AgentCallLogCallEnded), repeated: true },
  ],
  {localName: "SearchQuery_CallEnded"},
);

/**
 * CallSkillsInitial is a query for the initial call skills.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial
 */
export const SearchQuery_CallSkillsInitial = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.CallSkillsInitial",
  () => [
    { no: 1, name: "need", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "want", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SearchQuery_CallSkillsInitial"},
);

/**
 * AgentResponse defines a query on agent responses.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AgentResponse
 */
export const SearchQuery_AgentResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AgentResponse",
  () => [
    { no: 1, name: "key", kind: "message", T: SearchQuery_AgentResponse_Key },
    { no: 2, name: "values", kind: "message", T: SearchQuery_AgentResponse_Values },
    { no: 3, name: "numbers", kind: "message", T: SearchQuery_AgentResponse_Numbers },
  ],
  {localName: "SearchQuery_AgentResponse"},
);

/**
 * Values defines a query on values.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values
 */
export const SearchQuery_AgentResponse_Values = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Values",
  () => [
    { no: 1, name: "in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "starts_with", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contains", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "SearchQuery_AgentResponse_Values"},
);

/**
 * Numbers defines a query on values as numbers.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers
 */
export const SearchQuery_AgentResponse_Numbers = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Numbers",
  () => [
    { no: 1, name: "in", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 2, name: "gte", kind: "message", T: DoubleValue },
    { no: 3, name: "lte", kind: "message", T: DoubleValue },
    { no: 4, name: "gt", kind: "message", T: DoubleValue },
    { no: 5, name: "lt", kind: "message", T: DoubleValue },
    { no: 6, name: "eq", kind: "message", T: DoubleValue },
  ],
  {localName: "SearchQuery_AgentResponse_Numbers"},
);

/**
 * Key defines a query on keys.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key
 */
export const SearchQuery_AgentResponse_Key = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AgentResponse.Key",
  () => [
    { no: 1, name: "in", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "starts_with", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contains", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "SearchQuery_AgentResponse_Key"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results
 */
export const SearchQuery_Results = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results",
  () => [
    { no: 1, name: "channel", kind: "message", T: SearchQuery_Results_Channel },
    { no: 2, name: "agent_user_name", kind: "message", T: SearchQuery_Results_AgentUserName },
    { no: 3, name: "segments", kind: "message", T: SearchQuery_Results_Segments },
  ],
  {localName: "SearchQuery_Results"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.Channel
 */
export const SearchQuery_Results_Channel = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.Channel",
  () => [
    { no: 1, name: "eq", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "SearchQuery_Results_Channel"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName
 */
export const SearchQuery_Results_AgentUserName = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.AgentUserName",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "SearchQuery_Results_AgentUserName"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.Segments
 */
export const SearchQuery_Results_Segments = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.Segments",
  () => [
    { no: 1, name: "text", kind: "message", T: SearchQuery_Results_Segments_Text },
  ],
  {localName: "SearchQuery_Results_Segments"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text
 */
export const SearchQuery_Results_Segments_Text = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text",
  () => [
    { no: 1, name: "phrase", kind: "message", T: SearchQuery_Results_Segments_Text_Phrase },
  ],
  {localName: "SearchQuery_Results_Segments_Text"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase
 */
export const SearchQuery_Results_Segments_Text_Phrase = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase",
  () => [
    { no: 1, name: "words", kind: "message", T: SearchQuery_Results_Segments_Text_Phrase_Word, repeated: true },
    { no: 2, name: "slop", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "in_order", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "SearchQuery_Results_Segments_Text_Phrase"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word
 */
export const SearchQuery_Results_Segments_Text_Phrase_Word = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.Results.Segments.Text.Phrase.Word",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fuzziness", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "SearchQuery_Results_Segments_Text_Phrase_Word"},
);

/**
 * DeleteTime defines a query on delete time.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.DeleteTime
 */
export const SearchQuery_DeleteTime = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.DeleteTime",
  () => [
    { no: 1, name: "exists", kind: "message", T: BoolValue },
  ],
  {localName: "SearchQuery_DeleteTime"},
);

/**
 * TranscriptSid defines a query on transcript sid.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.TranscriptSid
 */
export const SearchQuery_TranscriptSid = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.TranscriptSid",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "gte", kind: "message", T: Int64Value },
  ],
  {localName: "SearchQuery_TranscriptSid"},
);

/**
 * AudioTime defines a query on audio_time.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.AudioTime
 */
export const SearchQuery_AudioTime = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.AudioTime",
  () => [
    { no: 1, name: "gte", kind: "message", T: Int32Value },
    { no: 2, name: "lte", kind: "message", T: Int32Value },
    { no: 3, name: "gt", kind: "message", T: Int32Value },
    { no: 4, name: "lt", kind: "message", T: Int32Value },
  ],
  {localName: "SearchQuery_AudioTime"},
);

/**
 * FlagSummary defines a query on flag summary fields.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary
 */
export const SearchQuery_FlagSummary = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary",
  () => [
    { no: 1, name: "need_review", kind: "message", T: SearchQuery_FlagSummary_NeedReview },
    { no: 2, name: "review_status", kind: "message", T: SearchQuery_FlagSummary_ReviewStatus },
    { no: 3, name: "flags", kind: "message", T: SearchQuery_FlagSummary_Flags },
    { no: 4, name: "count", kind: "message", T: SearchQuery_FlagSummary_Count },
  ],
  {localName: "SearchQuery_FlagSummary"},
);

/**
 * NeedReview defines a query on need review fields.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview
 */
export const SearchQuery_FlagSummary_NeedReview = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview",
  () => [
    { no: 1, name: "flag_sids", kind: "message", T: SearchQuery_FlagSummary_NeedReview_FlagSids },
  ],
  {localName: "SearchQuery_FlagSummary_NeedReview"},
);

/**
 * FlagSids defines a query on flag sids.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids
 */
export const SearchQuery_FlagSummary_NeedReview_FlagSids = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.NeedReview.FlagSids",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "SearchQuery_FlagSummary_NeedReview_FlagSids"},
);

/**
 * ReviewStatus defines a query on review status.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus
 */
export const SearchQuery_FlagSummary_ReviewStatus = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.ReviewStatus",
  () => [
    { no: 1, name: "any", kind: "enum", T: proto3.getEnumType(TranscriptReviewStatus), repeated: true },
  ],
  {localName: "SearchQuery_FlagSummary_ReviewStatus"},
);

/**
 * Flags defines a query on flags.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags
 */
export const SearchQuery_FlagSummary_Flags = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags",
  () => [
    { no: 1, name: "flag_sid", kind: "message", T: SearchQuery_FlagSummary_Flags_FlagSid },
  ],
  {localName: "SearchQuery_FlagSummary_Flags"},
);

/**
 * FlagSid defines a query on flag sid.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid
 */
export const SearchQuery_FlagSummary_Flags_FlagSid = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Flags.FlagSid",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "all", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "SearchQuery_FlagSummary_Flags_FlagSid"},
);

/**
 * Count defines a query on count.
 *
 * @generated from message api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count
 */
export const SearchQuery_FlagSummary_Count = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchQuery.FlagSummary.Count",
  () => [
    { no: 1, name: "gte", kind: "message", T: Int32Value },
    { no: 2, name: "lte", kind: "message", T: Int32Value },
    { no: 3, name: "gt", kind: "message", T: Int32Value },
    { no: 4, name: "lt", kind: "message", T: Int32Value },
    { no: 5, name: "eq", kind: "message", T: Int32Value },
  ],
  {localName: "SearchQuery_FlagSummary_Count"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchResponse
 */
export const SearchResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchResponse",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "hits", kind: "message", T: SearchResponse_Hit, repeated: true },
    { no: 5, name: "sort", kind: "message", T: Sort },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.SearchResponse.Hit
 */
export const SearchResponse_Hit = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.SearchResponse.Hit",
  () => [
    { no: 1, name: "transcript", kind: "message", T: Transcript },
  ],
  {localName: "SearchResponse_Hit"},
);

/**
 * AgentCallLogQuery is a query for the agent call log.
 *
 * @generated from message api.v1alpha1.vanalytics.AgentCallLogQuery
 */
export const AgentCallLogQuery = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.AgentCallLogQuery",
  () => [
    { no: 1, name: "call_skills_initial", kind: "message", T: CallSkillsInitialQuery },
  ],
);

/**
 * CallSkillsInitialQuery is a query for the initial call skills.
 *
 * @generated from message api.v1alpha1.vanalytics.CallSkillsInitialQuery
 */
export const CallSkillsInitialQuery = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.CallSkillsInitialQuery",
  () => [
    { no: 1, name: "need", kind: "message", T: VanaTermsQuery, repeated: true },
    { no: 2, name: "want", kind: "message", T: VanaTermsQuery, repeated: true },
  ],
);

/**
 * VanaTermsQuery is a query for none, all, or any terms.
 *
 * @generated from message api.v1alpha1.vanalytics.VanaTermsQuery
 */
export const VanaTermsQuery = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.VanaTermsQuery",
  () => [
    { no: 1, name: "terms", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "lacks", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "all", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Sort
 */
export const Sort = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Sort",
  () => [
    { no: 1, name: "fields", kind: "message", T: Sort_Field, repeated: true },
    { no: 2, name: "after", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Sort.Field
 */
export const Sort_Field = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Sort.Field",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "desc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "Sort_Field"},
);

/**
 * ListTranscriptGroupNamesRequest is a request for listing group names.
 *
 * @generated from message api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest
 */
export const ListTranscriptGroupNamesRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListTranscriptGroupNamesRequest",
  [],
);

/**
 * ListTranscriptGroupNamesResponse is a response for listing group names.
 *
 * @generated from message api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse
 */
export const ListTranscriptGroupNamesResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListTranscriptGroupNamesResponse",
  () => [
    { no: 1, name: "group_names", kind: "message", T: TranscriptGroupName, repeated: true },
  ],
);

/**
 * TranscriptGroupName is the transcript group name.
 *
 * @generated from message api.v1alpha1.vanalytics.TranscriptGroupName
 */
export const TranscriptGroupName = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TranscriptGroupName",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListAgentResponseValuesRequest is a request for listing agent reponse values.
 *
 * @generated from message api.v1alpha1.vanalytics.ListAgentResponseValuesRequest
 */
export const ListAgentResponseValuesRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListAgentResponseValuesRequest",
  () => [
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListAgentResponseValuesResponse is a response for listing agent response values.
 *
 * @generated from message api.v1alpha1.vanalytics.ListAgentResponseValuesResponse
 */
export const ListAgentResponseValuesResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListAgentResponseValuesResponse",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Transcript
 */
export const Transcript = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Transcript",
  () => [
    { no: 1, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "results", kind: "message", T: Result, repeated: true },
    { no: 6, name: "silence", kind: "message", T: Silence },
    { no: 7, name: "talk_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "create_time", kind: "message", T: Timestamp },
    { no: 10, name: "call_start_time", kind: "message", T: Timestamp },
    { no: 11, name: "talk_over", kind: "message", T: TalkOver },
    { no: 12, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "audio_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 15, name: "audio_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "agent_call_log", kind: "message", T: AgentCallLog },
    { no: 19, name: "flag_summary", kind: "message", T: FlagSummary },
    { no: 20, name: "delete_time", kind: "message", T: Timestamp },
    { no: 21, name: "number_format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "agent_response", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: AgentResponse} },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Result
 */
export const Result = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Result",
  () => [
    { no: 1, name: "channel", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "segments", kind: "message", T: Segment, repeated: true },
    { no: 5, name: "agent_first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "agent_last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "agent_user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "begin_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 9, name: "duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 10, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Segment
 */
export const Segment = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Segment",
  () => [
    { no: 1, name: "begin_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "confidence", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "words", kind: "message", T: Word, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Word
 */
export const Word = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Word",
  () => [
    { no: 1, name: "begin_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "confidence", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "spoken", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "redacted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Silence
 */
export const Silence = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Silence",
  () => [
    { no: 1, name: "duration", kind: "message", T: Silence_Duration },
    { no: 2, name: "segments", kind: "message", T: Silence_Segment, repeated: true },
    { no: 3, name: "occurrence", kind: "message", T: Silence_Occurrence },
    { no: 4, name: "threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.Silence.Duration
 */
export const Silence_Duration = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Silence.Duration",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "percentage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Silence_Duration"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.Silence.Segment
 */
export const Silence_Segment = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Silence.Segment",
  () => [
    { no: 1, name: "begin_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Silence_Segment"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.Silence.Occurrence
 */
export const Silence_Occurrence = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.Silence.Occurrence",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Silence_Occurrence"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.TalkOver
 */
export const TalkOver = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TalkOver",
  () => [
    { no: 1, name: "occurrence", kind: "message", T: TalkOver_Occurrence },
    { no: 2, name: "duration", kind: "message", T: TalkOver_Duration },
    { no: 3, name: "results", kind: "message", T: TalkOver_Result, repeated: true },
    { no: 4, name: "threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.TalkOver.Duration
 */
export const TalkOver_Duration = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TalkOver.Duration",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "max", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "percentage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "TalkOver_Duration"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.TalkOver.Result
 */
export const TalkOver_Result = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TalkOver.Result",
  () => [
    { no: 1, name: "channel", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "occurrence", kind: "message", T: TalkOver_Occurrence },
    { no: 3, name: "duration", kind: "message", T: TalkOver_Duration },
    { no: 4, name: "segments", kind: "message", T: TalkOver_Segment, repeated: true },
    { no: 5, name: "agent_user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "agent_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "TalkOver_Result"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.TalkOver.Segment
 */
export const TalkOver_Segment = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TalkOver.Segment",
  () => [
    { no: 1, name: "begin_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "duration", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "TalkOver_Segment"},
);

/**
 * @generated from message api.v1alpha1.vanalytics.TalkOver.Occurrence
 */
export const TalkOver_Occurrence = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.TalkOver.Occurrence",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "TalkOver_Occurrence"},
);

/**
 * FlagSummary defines a summary of flags which were applied to a transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSummary
 */
export const FlagSummary = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSummary",
  () => [
    { no: 1, name: "count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "priority_sum", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "priority_max", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "need_review", kind: "message", T: FlagSummary_NeedReview },
    { no: 5, name: "flags", kind: "message", T: FlagSummary_Flag, repeated: true },
    { no: 6, name: "review_status", kind: "enum", T: proto3.getEnumType(TranscriptReviewStatus) },
  ],
);

/**
 * NeedReview defines flags which need to be reviewed.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSummary.NeedReview
 */
export const FlagSummary_NeedReview = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSummary.NeedReview",
  () => [
    { no: 1, name: "priority_sum", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "priority_max", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "flag_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "FlagSummary_NeedReview"},
);

/**
 * Flag defines a flag that was applied to a transcript by one or more filters
 * along with a user review when one exists.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSummary.Flag
 */
export const FlagSummary_Flag = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSummary.Flag",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "priority", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "filters", kind: "message", T: FlagSummary_Filter, repeated: true },
    { no: 6, name: "must_review", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "must_notify", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "reviews", kind: "message", T: FlagSummary_Review, repeated: true },
  ],
  {localName: "FlagSummary_Flag"},
);

/**
 * Filter defines a filter which applied some flag to some transcript.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSummary.Filter
 */
export const FlagSummary_Filter = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSummary.Filter",
  () => [
    { no: 1, name: "join_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "filter_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "FlagSummary_Filter"},
);

/**
 * Review contains info on the flag review when one exists.
 *
 * @generated from message api.v1alpha1.vanalytics.FlagSummary.Review
 */
export const FlagSummary_Review = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.FlagSummary.Review",
  () => [
    { no: 1, name: "join_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "FlagSummary_Review"},
);

/**
 * AgentResponse contains the agent responses aka dispositions.
 *
 * @generated from message api.v1alpha1.vanalytics.AgentResponse
 */
export const AgentResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.AgentResponse",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

