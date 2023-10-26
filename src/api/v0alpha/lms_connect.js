// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/lms.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CjsSearchDefinition, CjsSecureSearchCriteria, CollectionEntry, CollectionMetadata, DeleteCjsSearchDefinitionReq, DeleteCollectionEntryReq, DeleteCollectionReq, Element, ElementPK, Events, ExecuteCjsSearchDefinitionReq, ExecuteCjsSearchDefinitionRes, Field, Fields, FileTemplate, FindFieldUsagesReq, FindFieldUsagesRes, FindInvalidElementsReq, FindInvalidElementsRes, GetCjsSearchDefinitionReq, GetCjsSecureSearchCriteriaReq, GetCollectionEntriesReq, GetCollectionEntriesRes, GetCollectionReq, GetComplianceScrubListsReq, GetComplianceScrubListsRes, GetFileTemplatesReq, GetHistoryReq, GetHistoryRes, GetPublicKeyReq, ListAutocompleteFieldsReq, ListAutocompleteFieldsRes, ListAvailableFieldsByElementIdReq, ListCampaignLinksRes, ListCjsSearchDefinitionsReq, ListCjsSearchDefinitionsRes, ListCollectionsReq, ListCollectionsRes, ListElementsReq, ListFieldsForElementReq, ListFieldsForElementRes, ListFieldsReq, PaginatedSearchRes, ParseReq, ParseRes, PeekListReq, PeekListRes, ProcessElementReq, ProcessFields, ProcessListRequest, ProcessListResponse, PublicKey, ResetCollectionReq, SampleRequest, SearchCollectionsPaginatedReq, StreamCollectionReq, StreamListRequest, StreamListResponse, UpdateFieldReq, ViewQueueReq } from "./lms_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.LMS
 */
export const LMS = {
  typeName: "api.v0alpha.LMS",
  methods: {
    /**
     * @generated from rpc api.v0alpha.LMS.GetPublicKey
     */
    getPublicKey: {
      name: "GetPublicKey",
      I: GetPublicKeyReq,
      O: PublicKey,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateFileTemplate
     */
    createFileTemplate: {
      name: "CreateFileTemplate",
      I: FileTemplate,
      O: FileTemplate,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFileTemplates
     */
    listFileTemplates: {
      name: "ListFileTemplates",
      I: GetFileTemplatesReq,
      O: FileTemplate,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateFileTemplate
     */
    updateFileTemplate: {
      name: "UpdateFileTemplate",
      I: FileTemplate,
      O: FileTemplate,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteFileTemplate
     */
    deleteFileTemplate: {
      name: "DeleteFileTemplate",
      I: FileTemplate,
      O: FileTemplate,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetFileTemplate
     */
    getFileTemplate: {
      name: "GetFileTemplate",
      I: FileTemplate,
      O: FileTemplate,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateField
     */
    createField: {
      name: "CreateField",
      I: Field,
      O: Field,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFields
     */
    listFields: {
      name: "ListFields",
      I: ListFieldsReq,
      O: Fields,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetField
     */
    getField: {
      name: "GetField",
      I: Field,
      O: Field,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateField
     */
    updateField: {
      name: "UpdateField",
      I: UpdateFieldReq,
      O: Field,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteField
     */
    deleteField: {
      name: "DeleteField",
      I: Field,
      O: Field,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListAvailableFieldsByElementId
     */
    listAvailableFieldsByElementId: {
      name: "ListAvailableFieldsByElementId",
      I: ListAvailableFieldsByElementIdReq,
      O: ProcessFields,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListFieldsForElement
     */
    listFieldsForElement: {
      name: "ListFieldsForElement",
      I: ListFieldsForElementReq,
      O: ListFieldsForElementRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListAutocompleteFields
     */
    listAutocompleteFields: {
      name: "ListAutocompleteFields",
      I: ListAutocompleteFieldsReq,
      O: ListAutocompleteFieldsRes,
      kind: MethodKind.Unary,
    },
    /**
     * list campaign links and descriptions
     *
     * @generated from rpc api.v0alpha.LMS.ListCampaignLinks
     */
    listCampaignLinks: {
      name: "ListCampaignLinks",
      I: Empty,
      O: ListCampaignLinksRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.PeekList
     */
    peekList: {
      name: "PeekList",
      I: PeekListReq,
      O: PeekListRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetHistory
     */
    getHistory: {
      name: "GetHistory",
      I: GetHistoryReq,
      O: GetHistoryRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.CreateElement
     */
    createElement: {
      name: "CreateElement",
      I: Element,
      O: Element,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListElements
     */
    listElements: {
      name: "ListElements",
      I: ListElementsReq,
      O: Element,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetElement
     */
    getElement: {
      name: "GetElement",
      I: ElementPK,
      O: Element,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateElement
     */
    updateElement: {
      name: "UpdateElement",
      I: Element,
      O: Element,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteElement
     */
    deleteElement: {
      name: "DeleteElement",
      I: Element,
      O: Element,
      kind: MethodKind.Unary,
    },
    /**
     * CopyPipelineUpstream copies an Element and all of its' parents
     *
     * @generated from rpc api.v0alpha.LMS.CopyPipelineUpstream
     */
    copyPipelineUpstream: {
      name: "CopyPipelineUpstream",
      I: Element,
      O: Element,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * CopyPipelineDownstream copies an Element and all of its' children
     *
     * @generated from rpc api.v0alpha.LMS.CopyPipelineDownstream
     */
    copyPipelineDownstream: {
      name: "CopyPipelineDownstream",
      I: Element,
      O: Element,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ProcessElement
     */
    processElement: {
      name: "ProcessElement",
      I: ProcessElementReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ProcessList
     */
    processList: {
      name: "ProcessList",
      I: ProcessListRequest,
      O: ProcessListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.StreamList
     */
    streamList: {
      name: "StreamList",
      I: StreamListRequest,
      O: StreamListResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetAvailableFields
     */
    getAvailableFields: {
      name: "GetAvailableFields",
      I: Empty,
      O: ProcessFields,
      kind: MethodKind.Unary,
    },
    /**
     * returns queue events for the last 30 minutes
     *
     * @generated from rpc api.v0alpha.LMS.ListNewEvents
     */
    listNewEvents: {
      name: "ListNewEvents",
      I: Empty,
      O: Events,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ViewQueue
     */
    viewQueue: {
      name: "ViewQueue",
      I: ViewQueueReq,
      O: Events,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.Autocomplete
     */
    autocomplete: {
      name: "Autocomplete",
      I: ParseReq,
      O: ParseRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetComplianceScrubLists
     */
    getComplianceScrubLists: {
      name: "GetComplianceScrubLists",
      I: GetComplianceScrubListsReq,
      O: GetComplianceScrubListsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.FindFieldUsages
     */
    findFieldUsages: {
      name: "FindFieldUsages",
      I: FindFieldUsagesReq,
      O: FindFieldUsagesRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.FindInvalidElements
     */
    findInvalidElements: {
      name: "FindInvalidElements",
      I: FindInvalidElementsReq,
      O: FindInvalidElementsRes,
      kind: MethodKind.Unary,
    },
    /**
     * CJS calls 
     *
     * @generated from rpc api.v0alpha.LMS.CreateCollection
     */
    createCollection: {
      name: "CreateCollection",
      I: CollectionMetadata,
      O: CollectionMetadata,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetCollection
     */
    getCollection: {
      name: "GetCollection",
      I: GetCollectionReq,
      O: CollectionMetadata,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateCollection
     */
    updateCollection: {
      name: "UpdateCollection",
      I: CollectionMetadata,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteCollection
     */
    deleteCollection: {
      name: "DeleteCollection",
      I: DeleteCollectionReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ListCollections
     */
    listCollections: {
      name: "ListCollections",
      I: ListCollectionsReq,
      O: ListCollectionsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.ResetCollection
     */
    resetCollection: {
      name: "ResetCollection",
      I: ResetCollectionReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.AddCollectionEntry
     */
    addCollectionEntry: {
      name: "AddCollectionEntry",
      I: CollectionEntry,
      O: CollectionEntry,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.DeleteCollectionEntry
     */
    deleteCollectionEntry: {
      name: "DeleteCollectionEntry",
      I: DeleteCollectionEntryReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.UpdateCollectionEntry
     */
    updateCollectionEntry: {
      name: "UpdateCollectionEntry",
      I: CollectionEntry,
      O: CollectionEntry,
      kind: MethodKind.Unary,
    },
    /**
     * StreamCollection needs to be used in conjunction with GetCollection
     * to have the metadata associated with it
     *
     * @generated from rpc api.v0alpha.LMS.StreamCollection
     */
    streamCollection: {
      name: "StreamCollection",
      I: StreamCollectionReq,
      O: CollectionEntry,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * SearchCollectionsWithQueryPaginated needs to be used in conjunction with GetCollection
     * to have the metadata associated with it
     *
     * @generated from rpc api.v0alpha.LMS.SearchCollectionsPaginated
     */
    searchCollectionsPaginated: {
      name: "SearchCollectionsPaginated",
      I: SearchCollectionsPaginatedReq,
      O: PaginatedSearchRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetCollectionEntries fetches a page (size specified by the page_size param) of entries for
     * the specified collection_id, org_id, region_id starting at location specified by from
     *
     * @generated from rpc api.v0alpha.LMS.GetCollectionEntries
     */
    getCollectionEntries: {
      name: "GetCollectionEntries",
      I: GetCollectionEntriesReq,
      O: GetCollectionEntriesRes,
      kind: MethodKind.Unary,
    },
    /**
     * CreateCjsSearchDefinition creates a search definition
     *
     * @generated from rpc api.v0alpha.LMS.CreateCjsSearchDefinition
     */
    createCjsSearchDefinition: {
      name: "CreateCjsSearchDefinition",
      I: CjsSearchDefinition,
      O: CjsSearchDefinition,
      kind: MethodKind.Unary,
    },
    /**
     * GetCjsSearchDefinition gets the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.GetCjsSearchDefinition
     */
    getCjsSearchDefinition: {
      name: "GetCjsSearchDefinition",
      I: GetCjsSearchDefinitionReq,
      O: CjsSearchDefinition,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCjsSearchDefinition updates the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.UpdateCjsSearchDefinition
     */
    updateCjsSearchDefinition: {
      name: "UpdateCjsSearchDefinition",
      I: CjsSearchDefinition,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteCjsSearchDefinition deletes the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.DeleteCjsSearchDefinition
     */
    deleteCjsSearchDefinition: {
      name: "DeleteCjsSearchDefinition",
      I: DeleteCjsSearchDefinitionReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * ListCjsSearchDefinitions lists the search definitions
     *
     * @generated from rpc api.v0alpha.LMS.ListCjsSearchDefinitions
     */
    listCjsSearchDefinitions: {
      name: "ListCjsSearchDefinitions",
      I: ListCjsSearchDefinitionsReq,
      O: ListCjsSearchDefinitionsRes,
      kind: MethodKind.Unary,
    },
    /**
     * ExecuteCjsSearchDefinition executes the search definition specified by search_definition_id
     *
     * @generated from rpc api.v0alpha.LMS.ExecuteCjsSearchDefinition
     */
    executeCjsSearchDefinition: {
      name: "ExecuteCjsSearchDefinition",
      I: ExecuteCjsSearchDefinitionReq,
      O: ExecuteCjsSearchDefinitionRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetCjsSecureSearchCriteria gets the secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.GetCjsSecureSearchCriteria
     */
    getCjsSecureSearchCriteria: {
      name: "GetCjsSecureSearchCriteria",
      I: GetCjsSecureSearchCriteriaReq,
      O: CjsSecureSearchCriteria,
      kind: MethodKind.Unary,
    },
    /**
     * CreateCjsSecureSearchCriteria creates a secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.CreateCjsSecureSearchCriteria
     */
    createCjsSecureSearchCriteria: {
      name: "CreateCjsSecureSearchCriteria",
      I: CjsSecureSearchCriteria,
      O: CjsSecureSearchCriteria,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCjsSecureSearchCriteria updates the secure search criteria
     *
     * @generated from rpc api.v0alpha.LMS.UpdateCjsSecureSearchCriteria
     */
    updateCjsSecureSearchCriteria: {
      name: "UpdateCjsSecureSearchCriteria",
      I: CjsSecureSearchCriteria,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * SampleEndpoint is to test that values come through to the api appropriately
     *
     * @generated from rpc api.v0alpha.LMS.SampleEndpoint
     */
    sampleEndpoint: {
      name: "SampleEndpoint",
      I: SampleRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.LMS.GetQueuedEventsStatusByElementId
     */
    getQueuedEventsStatusByElementId: {
      name: "GetQueuedEventsStatusByElementId",
      I: ElementPK,
      O: Events,
      kind: MethodKind.Unary,
    },
  }
};

