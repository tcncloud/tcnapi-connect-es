// @generated by protoc-gen-connect-es v0.13.0
// @generated from file wfo/vanalytics/v2/service.proto (package wfo.vanalytics.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SearchTranscriptsRequest, SearchTranscriptsResponse } from "./transcript_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { CreateFilterRequest, DeleteFilterRequest, DeleteFilterResponse, Filter, GetFilterRequest, ListFiltersRequest, ListFiltersResponse, UpdateFilterRequest } from "./filter_pb.js";
import { ListFlagTranscriptFiltersRequest, ListFlagTranscriptFiltersResponse } from "./flag_transcript_filter_pb.js";

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
     * CreateFilter creates a new filter. The filter contains a transcript query
     * to filter transcripts.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.CreateFilter
     */
    readonly createFilter: {
      readonly name: "CreateFilter",
      readonly I: typeof CreateFilterRequest,
      readonly O: typeof Filter,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListFilters lists filters.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFilters
     */
    readonly listFilters: {
      readonly name: "ListFilters",
      readonly I: typeof ListFiltersRequest,
      readonly O: typeof ListFiltersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateFilter updates a filter transcript query and/or name.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.UpdateFilter
     */
    readonly updateFilter: {
      readonly name: "UpdateFilter",
      readonly I: typeof UpdateFilterRequest,
      readonly O: typeof Filter,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteFilter deletes filter given a filter_sid.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.DeleteFilter
     */
    readonly deleteFilter: {
      readonly name: "DeleteFilter",
      readonly I: typeof DeleteFilterRequest,
      readonly O: typeof DeleteFilterResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetFilter gets filter given a filter_sid or name.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.GetFilter
     */
    readonly getFilter: {
      readonly name: "GetFilter",
      readonly I: typeof GetFilterRequest,
      readonly O: typeof Filter,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListFlagTranscriptFilters lists flag transcript filters in an organization.
     *
     * @generated from rpc wfo.vanalytics.v2.Vanalytics.ListFlagTranscriptFilters
     */
    readonly listFlagTranscriptFilters: {
      readonly name: "ListFlagTranscriptFilters",
      readonly I: typeof ListFlagTranscriptFiltersRequest,
      readonly O: typeof ListFlagTranscriptFiltersResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

