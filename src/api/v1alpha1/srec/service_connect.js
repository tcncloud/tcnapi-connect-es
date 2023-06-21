// @generated by protoc-gen-connect-es v0.10.0
// @generated from file api/v1alpha1/srec/service.proto (package api.v1alpha1.srec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteScreenRecordingRequest, DeleteScreenRecordingResponse, GetScreenRecordingURLRequest, GetScreenRecordingURLResponse, ListScreenRecordingsRequest, ListScreenRecordingsResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.srec.Srec
 */
export const Srec = {
  typeName: "api.v1alpha1.srec.Srec",
  methods: {
    /**
     * ListScreenRecordings returns screen recordings.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.ListScreenRecordings
     */
    listScreenRecordings: {
      name: "ListScreenRecordings",
      I: ListScreenRecordingsRequest,
      O: ListScreenRecordingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetScreenRecordingURL returns the screen recording url.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.GetScreenRecordingURL
     */
    getScreenRecordingURL: {
      name: "GetScreenRecordingURL",
      I: GetScreenRecordingURLRequest,
      O: GetScreenRecordingURLResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteScreenRecording deletes a screen recording.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.DeleteScreenRecording
     */
    deleteScreenRecording: {
      name: "DeleteScreenRecording",
      I: DeleteScreenRecordingRequest,
      O: DeleteScreenRecordingResponse,
      kind: MethodKind.Unary,
    },
  }
};

