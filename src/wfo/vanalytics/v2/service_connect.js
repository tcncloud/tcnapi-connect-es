// @generated by protoc-gen-connect-es v0.13.0
// @generated from file wfo/vanalytics/v2/service.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AuditRequest, AuditResponse, GetRecordingUrlRequest, GetRecordingUrlResponse, ListBillingSpanRequest, ListBillingSpanResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BulkDeleteTranscriptsRequest, BulkDeleteTranscriptsResponse, BulkRestoreTranscriptsRequest, BulkRestoreTranscriptsResponse, ListAgentResponseValuesRequest, ListAgentResponseValuesResponse, ListTranscriptGroupNamesRequest, ListTranscriptGroupNamesResponse, SearchTranscriptsRequest, SearchTranscriptsResponse } from "./transcript_pb.js";
import { GetTranscriptSummaryRequest, GetTranscriptSummaryResponse } from "./transcript_summary_pb.js";
import { CreateFilterRequest, DeleteFilterRequest, DeleteFilterResponse, Filter, GetFilterRequest, ListFiltersRequest, ListFiltersResponse, UpdateFilterRequest } from "./filter_pb.js";
import { ListFlagTranscriptFiltersRequest, ListFlagTranscriptFiltersResponse } from "./flag_transcript_filter_pb.js";
import { ListFlagFiltersRequest, ListFlagFiltersResponse } from "./flag_filter_pb.js";
import { CreateFlagRequest, DeleteFlagRequest, DeleteFlagResponse, Flag, GetFlagRequest, ListFlagsRequest, ListFlagsResponse, UpdateFlagRequest } from "./flag_pb.js";
import { BulkCreateFlagReviewRequest, BulkCreateFlagReviewResponse, CreateFlagReviewRequest, FlagReview, ListFlagReviewsRequest, ListFlagReviewsResponse } from "./flag_review_pb.js";
import { CreateFlagTranscriptRequest, CreateFlagTranscriptResponse } from "./flag_transcript_pb.js";
import { ListFlagSnapshotsRequest, ListFlagSnapshotsResponse } from "./flag_snapshot_pb.js";
import { Correction, CreateCorrectionRequest, CreateCorrectionResponse, DeleteCorrectionRequest, DeleteCorrectionResponse, GetCorrectionRequest, ListCorrectionsRequest, ListCorrectionsResponse, UpdateCorrectionRequest, UpdateCorrectionResponse } from "./correction_pb.js";

/**
 * @generated from service wfo.vanalytics.v2.Vanalytics
 */
export const Vanalytics = {
  typeName: "wfo.vanalytics.v2.Vanalytics",
  methods: {
    /**
     * Audit audits the used transcription audio time for a client. The window
     * of time to audit can be widened or narrowed using the request since and
     * until fields.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.Audit
     */
    audit: {
      name: "Audit",
      I: AuditRequest,
      O: AuditResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetRecordingUrl gets a signed url to download a transcript recording.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetRecordingUrl
     */
    getRecordingUrl: {
      name: "GetRecordingUrl",
      I: GetRecordingUrlRequest,
      O: GetRecordingUrlResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListBillingSpan lists billing spans.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListBillingSpan
     */
    listBillingSpan: {
      name: "ListBillingSpan",
      I: ListBillingSpanRequest,
      O: ListBillingSpanResponse,
      kind: MethodKind.Unary,
    },
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
     * BulkDeleteTranscripts bulk deletes transcripts matching the provided query.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.BulkDeleteTranscripts
     */
    bulkDeleteTranscripts: {
      name: "BulkDeleteTranscripts",
      I: BulkDeleteTranscriptsRequest,
      O: BulkDeleteTranscriptsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * BulkRestoreTranscripts bulk restores transcripts matching the provided query.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.BulkRestoreTranscripts
     */
    bulkRestoreTranscripts: {
      name: "BulkRestoreTranscripts",
      I: BulkRestoreTranscriptsRequest,
      O: BulkRestoreTranscriptsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListTranscriptGroupNames lists transcript group names.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListTranscriptGroupNames
     */
    listTranscriptGroupNames: {
      name: "ListTranscriptGroupNames",
      I: ListTranscriptGroupNamesRequest,
      O: ListTranscriptGroupNamesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListAgentResponseValues lists transcript agent response values.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListAgentResponseValues
     */
    listAgentResponseValues: {
      name: "ListAgentResponseValues",
      I: ListAgentResponseValuesRequest,
      O: ListAgentResponseValuesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetTranscriptSummary gets a transcript summary for a provided transcript.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetTranscriptSummary
     */
    getTranscriptSummary: {
      name: "GetTranscriptSummary",
      I: GetTranscriptSummaryRequest,
      O: GetTranscriptSummaryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateFilter creates a new filter. The filter contains a transcript query
     * to filter transcripts.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFilter
     */
    createFilter: {
      name: "CreateFilter",
      I: CreateFilterRequest,
      O: Filter,
      kind: MethodKind.Unary,
    },
    /**
     * ListFilters lists filters.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFilters
     */
    listFilters: {
      name: "ListFilters",
      I: ListFiltersRequest,
      O: ListFiltersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateFilter updates a filter transcript query and/or name.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateFilter
     */
    updateFilter: {
      name: "UpdateFilter",
      I: UpdateFilterRequest,
      O: Filter,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteFilter deletes filter given a filter_sid.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteFilter
     */
    deleteFilter: {
      name: "DeleteFilter",
      I: DeleteFilterRequest,
      O: DeleteFilterResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetFilter gets filter given a filter_sid or name.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetFilter
     */
    getFilter: {
      name: "GetFilter",
      I: GetFilterRequest,
      O: Filter,
      kind: MethodKind.Unary,
    },
    /**
     * ListFlagTranscriptFilters lists flag transcript filters in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagTranscriptFilters
     */
    listFlagTranscriptFilters: {
      name: "ListFlagTranscriptFilters",
      I: ListFlagTranscriptFiltersRequest,
      O: ListFlagTranscriptFiltersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListFlagFilters lists flag filter associations.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagFilters
     */
    listFlagFilters: {
      name: "ListFlagFilters",
      I: ListFlagFiltersRequest,
      O: ListFlagFiltersResponse,
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

