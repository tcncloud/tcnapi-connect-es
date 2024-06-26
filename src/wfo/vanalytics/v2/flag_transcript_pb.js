// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file wfo/vanalytics/v2/flag_transcript.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Flag } from "./flag_pb.js";

/**
 * CreateFlagTranscriptRequest is a request for creating a flag transcript.
 *
 * @generated from message wfo.vanalytics.v2.CreateFlagTranscriptRequest
 */
export const CreateFlagTranscriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.CreateFlagTranscriptRequest",
  () => [
    { no: 1, name: "transcript_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "flag", kind: "message", T: Flag },
  ],
);

/**
 * CreateFlagTranscriptResponse is a response for creating a flag transcript.
 *
 * @generated from message wfo.vanalytics.v2.CreateFlagTranscriptResponse
 */
export const CreateFlagTranscriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "wfo.vanalytics.v2.CreateFlagTranscriptResponse",
  [],
);

