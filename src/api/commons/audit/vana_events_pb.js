// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/vana_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * VanaFlagEvent represents a flag occurrence in voice analytics.
 * It summarizes a set of transcripts flagged over an interval.
 *
 * @generated from message api.commons.audit.VanaFlagEvent
 */
export const VanaFlagEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaFlagEvent",
  () => [
    { no: 1, name: "flag_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "num_transcripts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "priority", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * VanaFlagReviewEvent represents a flag that needs review in voice analytics.
 * It summarizes a set of transcripts that need review.
 *
 * @generated from message api.commons.audit.VanaFlagReviewEvent
 */
export const VanaFlagReviewEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaFlagReviewEvent",
  () => [
    { no: 1, name: "flag_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "num_transcripts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "priority", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * VanaBillingReportEvent represents a billing report in voice analytics.
 * It gives a csv to a billing report of transcripts that occured that billing period.
 *
 * @generated from message api.commons.audit.VanaBillingReportEvent
 */
export const VanaBillingReportEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaBillingReportEvent",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * VanaFlagSummaryEvent is the summary of the flagging process.
 * It shows what transcripts were flagged.
 *
 * @generated from message api.commons.audit.VanaFlagSummaryEvent
 */
export const VanaFlagSummaryEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaFlagSummaryEvent",
  () => [
    { no: 1, name: "start_time", kind: "message", T: Timestamp },
    { no: 2, name: "end_time", kind: "message", T: Timestamp },
    { no: 3, name: "flag_summaries", kind: "message", T: VanaFlagSummaryEvent_FlagSummary, repeated: true },
  ],
);

/**
 * FlagSummary is an overview of the flags in the transcript.
 *
 * @generated from message api.commons.audit.VanaFlagSummaryEvent.FlagSummary
 */
export const VanaFlagSummaryEvent_FlagSummary = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaFlagSummaryEvent.FlagSummary",
  () => [
    { no: 1, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "flag_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "VanaFlagSummaryEvent_FlagSummary"},
);

/**
 * VanaPhraseCorrectionEvent is a user suggestion for what some words in a transcript
 * should be changed to when the original translation is off.
 *
 * @generated from message api.commons.audit.VanaPhraseCorrectionEvent
 */
export const VanaPhraseCorrectionEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.VanaPhraseCorrectionEvent",
  () => [
    { no: 1, name: "start_offset", kind: "message", T: Duration },
    { no: 2, name: "end_offset", kind: "message", T: Duration },
    { no: 3, name: "original_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "proposed_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "channel", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

