// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/lms.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CjsSearchDefinition, CjsSecureSearchCriteria, CollectionEntry, CollectionMetadata, DeleteCjsSearchDefinitionReq, DeleteCollectionEntryReq, DeleteCollectionReq, EHREntityType, Element, ElementPK, Events, ExecuteCjsSearchDefinitionReq, ExecuteCjsSearchDefinitionRes, Field, Fields, FileTemplate, FindFieldUsagesReq, FindFieldUsagesRes, FindInvalidElementsReq, FindInvalidElementsRes, GetCjsSearchDefinitionReq, GetCjsSecureSearchCriteriaReq, GetCollectionEntriesReq, GetCollectionEntriesRes, GetCollectionReq, GetComplianceScrubListsReq, GetComplianceScrubListsRes, GetFileTemplatesReq, GetHistoryReq, GetHistoryRes, GetPublicKeyReq, ListAutocompleteFieldsReq, ListAutocompleteFieldsRes, ListAvailableFieldsByElementIdReq, ListCampaignLinksRes, ListCjsSearchDefinitionsReq, ListCjsSearchDefinitionsRes, ListCollectionsReq, ListCollectionsRes, ListElementsReq, ListFieldsForElementReq, ListFieldsForElementRes, ListFieldsReq, PaginatedSearchRes, ParseReq, ParseRes, PeekListReq, PeekListRes, ProcessElementReq, ProcessFields, ProcessListRequest, ProcessListResponse, PublicKey, ResetCollectionReq, SampleRequest, SearchCollectionsPaginatedReq, StreamCollectionReq, StreamListRequest, StreamListResponse, UpdateFieldReq, ViewQueueReq } from "./lms_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.LMS
 */
export declare const LMS: {
  readonly typeName: "api.v0alpha.LMS",
  readonly methods: {
    /**
     * @generated from rpc api.v0alpha.LMS.GetPublicKey
     */
    readonly getPublicKey: {
      readonly name: "GetPublicKey",
      readonly I: typeof GetPublicKeyReq,
      readonly O: typeof PublicKey,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateFileTemplate
     */
    readonly createFileTemplate: {
      readonly name: "CreateFileTemplate",
      readonly I: typeof FileTemplate,
      readonly O: typeof FileTemplate,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFileTemplates
     */
    readonly listFileTemplates: {
      readonly name: "ListFileTemplates",
      readonly I: typeof GetFileTemplatesReq,
      readonly O: typeof FileTemplate,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateFileTemplate
     */
    readonly updateFileTemplate: {
      readonly name: "UpdateFileTemplate",
      readonly I: typeof FileTemplate,
      readonly O: typeof FileTemplate,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteFileTemplate
     */
    readonly deleteFileTemplate: {
      readonly name: "DeleteFileTemplate",
      readonly I: typeof FileTemplate,
      readonly O: typeof FileTemplate,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetFileTemplate
     */
    readonly getFileTemplate: {
      readonly name: "GetFileTemplate",
      readonly I: typeof FileTemplate,
      readonly O: typeof FileTemplate,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateField
     */
    readonly createField: {
      readonly name: "CreateField",
      readonly I: typeof Field,
      readonly O: typeof Field,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFields
     */
    readonly listFields: {
      readonly name: "ListFields",
      readonly I: typeof ListFieldsReq,
      readonly O: typeof Fields,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetField
     */
    readonly getField: {
      readonly name: "GetField",
      readonly I: typeof Field,
      readonly O: typeof Field,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateField
     */
    readonly updateField: {
      readonly name: "UpdateField",
      readonly I: typeof UpdateFieldReq,
      readonly O: typeof Field,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteField
     */
    readonly deleteField: {
      readonly name: "DeleteField",
      readonly I: typeof Field,
      readonly O: typeof Field,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListAvailableFieldsByElementId
     */
    readonly listAvailableFieldsByElementId: {
      readonly name: "ListAvailableFieldsByElementId",
      readonly I: typeof ListAvailableFieldsByElementIdReq,
      readonly O: typeof ProcessFields,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFieldsForElement
     */
    readonly listFieldsForElement: {
      readonly name: "ListFieldsForElement",
      readonly I: typeof ListFieldsForElementReq,
      readonly O: typeof ListFieldsForElementRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListAutocompleteFields
     */
    readonly listAutocompleteFields: {
      readonly name: "ListAutocompleteFields",
      readonly I: typeof ListAutocompleteFieldsReq,
      readonly O: typeof ListAutocompleteFieldsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list campaign links and descriptions
     *
     * @generated from rpc api.v0alpha.LMS.ListCampaignLinks
     */
    readonly listCampaignLinks: {
      readonly name: "ListCampaignLinks",
      readonly I: typeof Empty,
      readonly O: typeof ListCampaignLinksRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.PeekList
     */
    readonly peekList: {
      readonly name: "PeekList",
      readonly I: typeof PeekListReq,
      readonly O: typeof PeekListRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetHistory
     */
    readonly getHistory: {
      readonly name: "GetHistory",
      readonly I: typeof GetHistoryReq,
      readonly O: typeof GetHistoryRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateElement
     */
    readonly createElement: {
      readonly name: "CreateElement",
      readonly I: typeof Element,
      readonly O: typeof Element,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListElements
     */
    readonly listElements: {
      readonly name: "ListElements",
      readonly I: typeof ListElementsReq,
      readonly O: typeof Element,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetElement
     */
    readonly getElement: {
      readonly name: "GetElement",
      readonly I: typeof ElementPK,
      readonly O: typeof Element,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateElement
     */
    readonly updateElement: {
      readonly name: "UpdateElement",
      readonly I: typeof Element,
      readonly O: typeof Element,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteElement
     */
    readonly deleteElement: {
      readonly name: "DeleteElement",
      readonly I: typeof Element,
      readonly O: typeof Element,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CopyPipelineUpstream copies an Element and all of its' parents
     *
     * @generated from rpc api.v0alpha.LMS.CopyPipelineUpstream
     */
    readonly copyPipelineUpstream: {
      readonly name: "CopyPipelineUpstream",
      readonly I: typeof Element,
      readonly O: typeof Element,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * CopyPipelineDownstream copies an Element and all of its' children
     *
     * @generated from rpc api.v0alpha.LMS.CopyPipelineDownstream
     */
    readonly copyPipelineDownstream: {
      readonly name: "CopyPipelineDownstream",
      readonly I: typeof Element,
      readonly O: typeof Element,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ProcessElement
     */
    readonly processElement: {
      readonly name: "ProcessElement",
      readonly I: typeof ProcessElementReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ProcessList
     */
    readonly processList: {
      readonly name: "ProcessList",
      readonly I: typeof ProcessListRequest,
      readonly O: typeof ProcessListResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.StreamList
     */
    readonly streamList: {
      readonly name: "StreamList",
      readonly I: typeof StreamListRequest,
      readonly O: typeof StreamListResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetAvailableFields
     */
    readonly getAvailableFields: {
      readonly name: "GetAvailableFields",
      readonly I: typeof Empty,
      readonly O: typeof ProcessFields,
      readonly kind: MethodKind.Unary,
    },
    /**
     * returns queue events for the last 30 minutes
     *
     * @generated from rpc api.v0alpha.LMS.ListNewEvents
     */
    readonly listNewEvents: {
      readonly name: "ListNewEvents",
      readonly I: typeof Empty,
      readonly O: typeof Events,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ViewQueue
     */
    readonly viewQueue: {
      readonly name: "ViewQueue",
      readonly I: typeof ViewQueueReq,
      readonly O: typeof Events,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.Autocomplete
     */
    readonly autocomplete: {
      readonly name: "Autocomplete",
      readonly I: typeof ParseReq,
      readonly O: typeof ParseRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetComplianceScrubLists
     */
    readonly getComplianceScrubLists: {
      readonly name: "GetComplianceScrubLists",
      readonly I: typeof GetComplianceScrubListsReq,
      readonly O: typeof GetComplianceScrubListsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.FindFieldUsages
     */
    readonly findFieldUsages: {
      readonly name: "FindFieldUsages",
      readonly I: typeof FindFieldUsagesReq,
      readonly O: typeof FindFieldUsagesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.FindInvalidElements
     */
    readonly findInvalidElements: {
      readonly name: "FindInvalidElements",
      readonly I: typeof FindInvalidElementsReq,
      readonly O: typeof FindInvalidElementsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CJS calls 
     *
     * @generated from rpc api.v0alpha.LMS.CreateCollection
     */
    readonly createCollection: {
      readonly name: "CreateCollection",
      readonly I: typeof CollectionMetadata,
      readonly O: typeof CollectionMetadata,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetCollection
     */
    readonly getCollection: {
      readonly name: "GetCollection",
      readonly I: typeof GetCollectionReq,
      readonly O: typeof CollectionMetadata,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateCollection
     */
    readonly updateCollection: {
      readonly name: "UpdateCollection",
      readonly I: typeof CollectionMetadata,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteCollection
     */
    readonly deleteCollection: {
      readonly name: "DeleteCollection",
      readonly I: typeof DeleteCollectionReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListCollections
     */
    readonly listCollections: {
      readonly name: "ListCollections",
      readonly I: typeof ListCollectionsReq,
      readonly O: typeof ListCollectionsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ResetCollection
     */
    readonly resetCollection: {
      readonly name: "ResetCollection",
      readonly I: typeof ResetCollectionReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.AddCollectionEntry
     */
    readonly addCollectionEntry: {
      readonly name: "AddCollectionEntry",
      readonly I: typeof CollectionEntry,
      readonly O: typeof CollectionEntry,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteCollectionEntry
     */
    readonly deleteCollectionEntry: {
      readonly name: "DeleteCollectionEntry",
      readonly I: typeof DeleteCollectionEntryReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateCollectionEntry
     */
    readonly updateCollectionEntry: {
      readonly name: "UpdateCollectionEntry",
      readonly I: typeof CollectionEntry,
      readonly O: typeof CollectionEntry,
      readonly kind: MethodKind.Unary,
    },
    /**
     * StreamCollection needs to be used in conjunction with GetCollection
     * to have the metadata associated with it
     *
     * @generated from rpc api.v0alpha.LMS.StreamCollection
     */
    readonly streamCollection: {
      readonly name: "StreamCollection",
      readonly I: typeof StreamCollectionReq,
      readonly O: typeof CollectionEntry,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * SearchCollectionsWithQueryPaginated needs to be used in conjunction with GetCollection
     * to have the metadata associated with it
     *
     * @generated from rpc api.v0alpha.LMS.SearchCollectionsPaginated
     */
    readonly searchCollectionsPaginated: {
      readonly name: "SearchCollectionsPaginated",
      readonly I: typeof SearchCollectionsPaginatedReq,
      readonly O: typeof PaginatedSearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetCollectionEntries fetches a page (size specified by the page_size param) of entries for
     * the specified collection_id, org_id, region_id starting at location specified by from
     *
     * @generated from rpc api.v0alpha.LMS.GetCollectionEntries
     */
    readonly getCollectionEntries: {
      readonly name: "GetCollectionEntries",
      readonly I: typeof GetCollectionEntriesReq,
      readonly O: typeof GetCollectionEntriesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateCjsSearchDefinition creates a search definition
     *
     * @generated from rpc api.v0alpha.LMS.CreateCjsSearchDefinition
     */
    readonly createCjsSearchDefinition: {
      readonly name: "CreateCjsSearchDefinition",
      readonly I: typeof CjsSearchDefinition,
      readonly O: typeof CjsSearchDefinition,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetCjsSearchDefinition gets the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.GetCjsSearchDefinition
     */
    readonly getCjsSearchDefinition: {
      readonly name: "GetCjsSearchDefinition",
      readonly I: typeof GetCjsSearchDefinitionReq,
      readonly O: typeof CjsSearchDefinition,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCjsSearchDefinition updates the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.UpdateCjsSearchDefinition
     */
    readonly updateCjsSearchDefinition: {
      readonly name: "UpdateCjsSearchDefinition",
      readonly I: typeof CjsSearchDefinition,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteCjsSearchDefinition deletes the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.DeleteCjsSearchDefinition
     */
    readonly deleteCjsSearchDefinition: {
      readonly name: "DeleteCjsSearchDefinition",
      readonly I: typeof DeleteCjsSearchDefinitionReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListCjsSearchDefinitions lists the search definitions
     *
     * @generated from rpc api.v0alpha.LMS.ListCjsSearchDefinitions
     */
    readonly listCjsSearchDefinitions: {
      readonly name: "ListCjsSearchDefinitions",
      readonly I: typeof ListCjsSearchDefinitionsReq,
      readonly O: typeof ListCjsSearchDefinitionsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ExecuteCjsSearchDefinition executes the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.ExecuteCjsSearchDefinition
     */
    readonly executeCjsSearchDefinition: {
      readonly name: "ExecuteCjsSearchDefinition",
      readonly I: typeof ExecuteCjsSearchDefinitionReq,
      readonly O: typeof ExecuteCjsSearchDefinitionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetCjsSecureSearchCriteria gets the secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.GetCjsSecureSearchCriteria
     */
    readonly getCjsSecureSearchCriteria: {
      readonly name: "GetCjsSecureSearchCriteria",
      readonly I: typeof GetCjsSecureSearchCriteriaReq,
      readonly O: typeof CjsSecureSearchCriteria,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateCjsSecureSearchCriteria creates a secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.CreateCjsSecureSearchCriteria
     */
    readonly createCjsSecureSearchCriteria: {
      readonly name: "CreateCjsSecureSearchCriteria",
      readonly I: typeof CjsSecureSearchCriteria,
      readonly O: typeof CjsSecureSearchCriteria,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCjsSecureSearchCriteria updates the secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.UpdateCjsSecureSearchCriteria
     */
    readonly updateCjsSecureSearchCriteria: {
      readonly name: "UpdateCjsSecureSearchCriteria",
      readonly I: typeof CjsSecureSearchCriteria,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SampleEndpoint is to test that values come through to the api appropriately
     *
     * @generated from rpc api.v0alpha.LMS.SampleEndpoint
     */
    readonly sampleEndpoint: {
      readonly name: "SampleEndpoint",
      readonly I: typeof SampleRequest,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * returns all fields possible that an ehr entity type could return (that we know of)
     *
     * @generated from rpc api.v0alpha.LMS.GetAvailableEHRFields
     */
    readonly getAvailableEHRFields: {
      readonly name: "GetAvailableEHRFields",
      readonly I: typeof EHREntityType,
      readonly O: typeof Fields,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetQueuedEventsStatusByElementId
     */
    readonly getQueuedEventsStatusByElementId: {
      readonly name: "GetQueuedEventsStatusByElementId",
      readonly I: typeof ElementPK,
      readonly O: typeof Events,
      readonly kind: MethodKind.Unary,
    },
  }
};

