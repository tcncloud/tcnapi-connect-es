// @generated by protoc-gen-connect-es v0.13.0
// @generated from file wfo/vanalytics/v2/service.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SearchTranscriptsRequest, SearchTranscriptsResponse } from "./transcript_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateCorrectionRequest, CreateCorrectionResponse } from "./correction_pb.js";

/**
 * @generated from service wfo.vanalytics.v2.Vanalytics
 */
export const Vanalytics = {
  typeName: "wfo.vanalytics.v2.Vanalytics",
  methods: {
    /**
     * SearchTranscripts searches transcripts by search criteria. The search response
     * contains one page of transcript hits. Traversing the paginated hits is
     * achieved by making use of the given page token.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.SearchTranscripts
     */
    searchTranscripts: {
      name: "SearchTranscripts",
      I: SearchTranscriptsRequest,
      O: SearchTranscriptsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateCorrection creates a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateCorrection
     */
    createCorrection: {
      name: "CreateCorrection",
      I: CreateCorrectionRequest,
      O: CreateCorrectionResponse,
      kind: MethodKind.Unary,
    },
  }
};

