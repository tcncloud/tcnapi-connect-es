// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/service.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1alpha1.vanalytics.AuditRequest
 */
export const AuditRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.AuditRequest",
  () => [
    { no: 2, name: "since", kind: "message", T: Timestamp },
    { no: 3, name: "until", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.AuditResponse
 */
export const AuditResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.AuditResponse",
  () => [
    { no: 1, name: "audio_time", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "billed_audio_time", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "last_usage", kind: "message", T: Timestamp },
    { no: 4, name: "billed_transcripts", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.GetRecordingUrlRequest
 */
export const GetRecordingUrlRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.GetRecordingUrlRequest",
  () => [
    { no: 2, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "kind", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.GetRecordingUrlResponse
 */
export const GetRecordingUrlResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.GetRecordingUrlResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.ListBillingSpanRequest
 */
export const ListBillingSpanRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListBillingSpanRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.ListBillingSpanResponse
 */
export const ListBillingSpanResponse = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.ListBillingSpanResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "spans", kind: "message", T: BillingSpan, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.vanalytics.BillingSpan
 */
export const BillingSpan = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.BillingSpan",
  () => [
    { no: 1, name: "calls", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hours", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "cost", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "start_time", kind: "message", T: Timestamp },
    { no: 5, name: "end_time", kind: "message", T: Timestamp },
  ],
);

