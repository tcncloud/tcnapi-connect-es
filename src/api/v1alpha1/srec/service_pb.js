// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/v1alpha1/srec/service.proto (package api.v1alpha1.srec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * ListScreenRecordingsRequest is a request for listing screen recordings.
 *
 * @generated from message api.v1alpha1.srec.ListScreenRecordingsRequest
 */
export const ListScreenRecordingsRequest = proto3.makeMessageType(
  "api.v1alpha1.srec.ListScreenRecordingsRequest",
  () => [
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListScreenRecordingsResponse is a response for listing screen recordings.
 *
 * @generated from message api.v1alpha1.srec.ListScreenRecordingsResponse
 */
export const ListScreenRecordingsResponse = proto3.makeMessageType(
  "api.v1alpha1.srec.ListScreenRecordingsResponse",
  () => [
    { no: 1, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "recordings", kind: "message", T: ScreenRecording, repeated: true },
  ],
);

/**
 * ScreenRecording is a resource in the SREC API.
 *
 * @generated from message api.v1alpha1.srec.ScreenRecording
 */
export const ScreenRecording = proto3.makeMessageType(
  "api.v1alpha1.srec.ScreenRecording",
  () => [
    { no: 2, name: "session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "agent_first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "agent_last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "audio_time", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "audio_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetScreenRecordingURLRequest is a request for getting a screen recording url.
 *
 * @generated from message api.v1alpha1.srec.GetScreenRecordingURLRequest
 */
export const GetScreenRecordingURLRequest = proto3.makeMessageType(
  "api.v1alpha1.srec.GetScreenRecordingURLRequest",
  () => [
    { no: 2, name: "session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetScreenRecordingURLResponse is a response for getting a screen recording url.
 *
 * @generated from message api.v1alpha1.srec.GetScreenRecordingURLResponse
 */
export const GetScreenRecordingURLResponse = proto3.makeMessageType(
  "api.v1alpha1.srec.GetScreenRecordingURLResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteScreenRecordingRequest is a request for deleting a screen recording.
 *
 * @generated from message api.v1alpha1.srec.DeleteScreenRecordingRequest
 */
export const DeleteScreenRecordingRequest = proto3.makeMessageType(
  "api.v1alpha1.srec.DeleteScreenRecordingRequest",
  () => [
    { no: 1, name: "session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteScreenRecordingResponse is a response for deleting a screen recording.
 *
 * @generated from message api.v1alpha1.srec.DeleteScreenRecordingResponse
 */
export const DeleteScreenRecordingResponse = proto3.makeMessageType(
  "api.v1alpha1.srec.DeleteScreenRecordingResponse",
  [],
);

