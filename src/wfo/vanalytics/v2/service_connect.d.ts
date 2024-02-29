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
export declare const Vanalytics: {
  readonly typeName: "wfo.vanalytics.v2.Vanalytics",
  readonly methods: {
    /**
     * SearchTranscripts searches transcripts by search criteria. The search response
     * contains one page of transcript hits. Traversing the paginated hits is
     * achieved by making use of the given page token.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.SearchTranscripts
     */
    readonly searchTranscripts: {
      readonly name: "SearchTranscripts",
      readonly I: typeof SearchTranscriptsRequest,
      readonly O: typeof SearchTranscriptsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetFlag gets a flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetFlag
     */
    readonly getFlag: {
      readonly name: "GetFlag",
      readonly I: typeof GetFlagRequest,
      readonly O: typeof Flag,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateFlag creates a new flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlag
     */
    readonly createFlag: {
      readonly name: "CreateFlag",
      readonly I: typeof CreateFlagRequest,
      readonly O: typeof Flag,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListFlags lists flags in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlags
     */
    readonly listFlags: {
      readonly name: "ListFlags",
      readonly I: typeof ListFlagsRequest,
      readonly O: typeof ListFlagsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateFlag updates a flag.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateFlag
     */
    readonly updateFlag: {
      readonly name: "UpdateFlag",
      readonly I: typeof UpdateFlagRequest,
      readonly O: typeof Flag,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteFlag deletes the flag identified by the given flag_sid.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteFlag
     */
    readonly deleteFlag: {
      readonly name: "DeleteFlag",
      readonly I: typeof DeleteFlagRequest,
      readonly O: typeof DeleteFlagResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateFlagReview creates a flag review.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlagReview
     */
    readonly createFlagReview: {
      readonly name: "CreateFlagReview",
      readonly I: typeof CreateFlagReviewRequest,
      readonly O: typeof FlagReview,
      readonly kind: MethodKind.Unary,
    },
    /**
     * BulkCreateFlagReview creates flag reviews.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.BulkCreateFlagReview
     */
    readonly bulkCreateFlagReview: {
      readonly name: "BulkCreateFlagReview",
      readonly I: typeof BulkCreateFlagReviewRequest,
      readonly O: typeof BulkCreateFlagReviewResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListFlagReviews lists reviews in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagReviews
     */
    readonly listFlagReviews: {
      readonly name: "ListFlagReviews",
      readonly I: typeof ListFlagReviewsRequest,
      readonly O: typeof ListFlagReviewsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateFlagTranscript creates a flag transcript.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFlagTranscript
     */
    readonly createFlagTranscript: {
      readonly name: "CreateFlagTranscript",
      readonly I: typeof CreateFlagTranscriptRequest,
      readonly O: typeof CreateFlagTranscriptResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SearchFlagTranscripts searches flag transcripts.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.SearchFlagTranscripts
     */
    readonly searchFlagTranscripts: {
      readonly name: "SearchFlagTranscripts",
      readonly I: typeof SearchFlagTranscriptsRequest,
      readonly O: typeof SearchFlagTranscriptsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListFlagSnapshots lists flag snapshots in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagSnapshots
     */
    readonly listFlagSnapshots: {
      readonly name: "ListFlagSnapshots",
      readonly I: typeof ListFlagSnapshotsRequest,
      readonly O: typeof ListFlagSnapshotsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateCorrection creates a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateCorrection
     */
    readonly createCorrection: {
      readonly name: "CreateCorrection",
      readonly I: typeof CreateCorrectionRequest,
      readonly O: typeof CreateCorrectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetCorrection gets a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetCorrection
     */
    readonly getCorrection: {
      readonly name: "GetCorrection",
      readonly I: typeof GetCorrectionRequest,
      readonly O: typeof Correction,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteCorrection deletes a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteCorrection
     */
    readonly deleteCorrection: {
      readonly name: "DeleteCorrection",
      readonly I: typeof DeleteCorrectionRequest,
      readonly O: typeof DeleteCorrectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListCorrections lists corrections.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListCorrections
     */
    readonly listCorrections: {
      readonly name: "ListCorrections",
      readonly I: typeof ListCorrectionsRequest,
      readonly O: typeof ListCorrectionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCorrection updates a correction.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateCorrection
     */
    readonly updateCorrection: {
      readonly name: "UpdateCorrection",
      readonly I: typeof UpdateCorrectionRequest,
      readonly O: typeof UpdateCorrectionResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

