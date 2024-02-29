// @generated by protoc-gen-connect-es v0.13.0
// @generated from file wfo/vanalytics/v2/service.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SearchTranscriptsRequest, SearchTranscriptsResponse } from "./transcript_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFlagRequest, DeleteFlagRequest, DeleteFlagResponse, Flag, GetFlagRequest, ListFlagsRequest, ListFlagsResponse, UpdateFlagRequest } from "./flag_pb.js";
import { BulkCreateFlagReviewRequest, BulkCreateFlagReviewResponse, CreateFlagReviewRequest, FlagReview, ListFlagReviewsRequest, ListFlagReviewsResponse } from "./flag_review_pb.js";
import { CreateFlagTranscriptRequest, CreateFlagTranscriptResponse, SearchFlagTranscriptsRequest, SearchFlagTranscriptsResponse } from "./flag_transcript_pb.js";
import { ListFlagSnapshotsRequest, ListFlagSnapshotsResponse } from "./flag_snapshot_pb.js";
import { Correction, CreateCorrectionRequest, CreateCorrectionResponse, DeleteCorrectionRequest, DeleteCorrectionResponse, GetCorrectionRequest, ListCorrectionsRequest, ListCorrectionsResponse, UpdateCorrectionRequest, UpdateCorrectionResponse } from "./correction_pb.js";

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
     * GetFlag gets a flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetFlag
     */
    getFlag: {
      name: "GetFlag",
      I: GetFlagRequest,
      O: Flag,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFlag creates a new flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlag
     */
    createFlag: {
      name: "CreateFlag",
      I: CreateFlagRequest,
      O: Flag,
      kind: MethodKind.Unary,
    },
    /**
     * ListFlags lists flags in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlags
     */
    listFlags: {
      name: "ListFlags",
      I: ListFlagsRequest,
      O: ListFlagsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateFlag updates a flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateFlag
     */
    updateFlag: {
      name: "UpdateFlag",
      I: UpdateFlagRequest,
      O: Flag,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFlag deletes the flag identified by the given flag_sid.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteFlag
     */
    deleteFlag: {
      name: "DeleteFlag",
      I: DeleteFlagRequest,
      O: DeleteFlagResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFlagReview creates a flag review.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlagReview
     */
    createFlagReview: {
      name: "CreateFlagReview",
      I: CreateFlagReviewRequest,
      O: FlagReview,
      kind: MethodKind.Unary,
    },
    /**
     * BulkCreateFlagReview creates flag reviews.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.BulkCreateFlagReview
     */
    bulkCreateFlagReview: {
      name: "BulkCreateFlagReview",
      I: BulkCreateFlagReviewRequest,
      O: BulkCreateFlagReviewResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListFlagReviews lists reviews in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagReviews
     */
    listFlagReviews: {
      name: "ListFlagReviews",
      I: ListFlagReviewsRequest,
      O: ListFlagReviewsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFlagTranscript creates a flag transcript.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlagTranscript
     */
    createFlagTranscript: {
      name: "CreateFlagTranscript",
      I: CreateFlagTranscriptRequest,
      O: CreateFlagTranscriptResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SearchFlagTranscripts searches flag transcripts.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.SearchFlagTranscripts
     */
    searchFlagTranscripts: {
      name: "SearchFlagTranscripts",
      I: SearchFlagTranscriptsRequest,
      O: SearchFlagTranscriptsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListFlagSnapshots lists flag snapshots in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagSnapshots
     */
    listFlagSnapshots: {
      name: "ListFlagSnapshots",
      I: ListFlagSnapshotsRequest,
      O: ListFlagSnapshotsResponse,
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
    /**
     * GetCorrection gets a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetCorrection
     */
    getCorrection: {
      name: "GetCorrection",
      I: GetCorrectionRequest,
      O: Correction,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteCorrection deletes a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteCorrection
     */
    deleteCorrection: {
      name: "DeleteCorrection",
      I: DeleteCorrectionRequest,
      O: DeleteCorrectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListCorrections lists corrections.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListCorrections
     */
    listCorrections: {
      name: "ListCorrections",
      I: ListCorrectionsRequest,
      O: ListCorrectionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCorrection updates a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateCorrection
     */
    updateCorrection: {
      name: "UpdateCorrection",
      I: UpdateCorrectionRequest,
      O: UpdateCorrectionResponse,
      kind: MethodKind.Unary,
    },
  }
};

