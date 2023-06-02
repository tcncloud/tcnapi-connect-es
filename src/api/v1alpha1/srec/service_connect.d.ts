// @generated by protoc-gen-connect-es v0.9.1
// @generated from file api/v1alpha1/srec/service.proto (package api.v1alpha1.srec, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteScreenRecordingRequest, DeleteScreenRecordingResponse, GetScreenRecordingURLRequest, GetScreenRecordingURLResponse, ListScreenRecordingsRequest, ListScreenRecordingsResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.srec.Srec
 */
export declare const Srec: {
  readonly typeName: "api.v1alpha1.srec.Srec",
  readonly methods: {
    /**
     * ListScreenRecordings returns screen recordings.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.ListScreenRecordings
     */
    readonly listScreenRecordings: {
      readonly name: "ListScreenRecordings",
      readonly I: typeof ListScreenRecordingsRequest,
      readonly O: typeof ListScreenRecordingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetScreenRecordingURL returns the screen recording url.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.GetScreenRecordingURL
     */
    readonly getScreenRecordingURL: {
      readonly name: "GetScreenRecordingURL",
      readonly I: typeof GetScreenRecordingURLRequest,
      readonly O: typeof GetScreenRecordingURLResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteScreenRecording deletes a screen recording.
     *
     * @generated from rpc api.v1alpha1.srec.Srec.DeleteScreenRecording
     */
    readonly deleteScreenRecording: {
      readonly name: "DeleteScreenRecording",
      readonly I: typeof DeleteScreenRecordingRequest,
      readonly O: typeof DeleteScreenRecordingResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

