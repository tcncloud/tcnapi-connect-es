// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/vanalytics/support_service.proto (package api.v1alpha1.vanalytics, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteFlagTranscriptRequest, DeleteFlagTranscriptResponse } from "./flag_transcript_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { SearchByOrgIdRequest, SearchResponse } from "./transcript_pb.js";

/**
 * @generated from service api.v1alpha1.vanalytics.VanalyticsSupport
 */
export declare const VanalyticsSupport: {
  readonly typeName: "api.v1alpha1.vanalytics.VanalyticsSupport",
  readonly methods: {
    /**
     * DeleteFlagTranscript deletes a flag transcript.
     *
     * @generated from rpc api.v1alpha1.vanalytics.VanalyticsSupport.DeleteFlagTranscript
     */
    readonly deleteFlagTranscript: {
      readonly name: "DeleteFlagTranscript",
      readonly I: typeof DeleteFlagTranscriptRequest,
      readonly O: typeof DeleteFlagTranscriptResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SearchByOrgId searches transcripts for a specific org.
     *
     * @generated from rpc api.v1alpha1.vanalytics.VanalyticsSupport.SearchByOrgId
     */
    readonly searchByOrgId: {
      readonly name: "SearchByOrgId",
      readonly I: typeof SearchByOrgIdRequest,
      readonly O: typeof SearchResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

