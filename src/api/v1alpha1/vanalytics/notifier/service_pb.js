// @generated by protoc-gen-es v1.4.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vanalytics/notifier/service.proto (package api.v1alpha1.vanalytics.notifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * GetNotifyRequest is a request for getting a notify.
 *
 * @generated from message api.v1alpha1.vanalytics.notifier.GetNotifyRequest
 */
export const GetNotifyRequest = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.notifier.GetNotifyRequest",
  () => [
    { no: 1, name: "notify_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * A notify resource in the vana notifier API.
 *
 * @generated from message api.v1alpha1.vanalytics.notifier.Notify
 */
export const Notify = proto3.makeMessageType(
  "api.v1alpha1.vanalytics.notifier.Notify",
  () => [
    { no: 1, name: "notify_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end_transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "create_time", kind: "message", T: Timestamp },
  ],
);

