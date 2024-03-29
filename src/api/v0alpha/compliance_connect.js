// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/compliance.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddScrubListEntriesReq, AssignRuleSetReq, AssignRuleSetRes, AssignScenarioReq, CheckRuleSetReq, CheckRuleSetRes, Consent, ConsentProfile, ConsentTopic, CreateConsentProfileReq, CreateConsentProfileRes, CreateConsentReq, CreateConsentRes, CreateRuleSetReq, CreateScenarioReq, CreateScenarioRes, CreateScrubListReq, DeleteConsentReq, DeleteScenarioReq, DeleteScenarioRes, DeleteScrubListEntriesReq, DeleteScrubListReq, DisableConsentProfileReq, DisableRuleSetReq, DisableRuleSetRes, DisableScenarioReq, Empty as Empty$1, EnableConsentProfileReq, EnableRuleSetReq, EnableRuleSetRes, EnableScenarioReq, ExpireConsentReq, ExportConsentListRequest, ExportConsentListResponse, ExportScrubListReq, ExportScrubListRes, FieldNames, GetConsentByContentReq, GetConsentByContentRes, GetConsentByProfileAndContentReq, GetConsentByProfileAndContentRes, GetConsentProfileReq, GetConsentReq, GetConsentTopicReq, GetConsentUploadUrlReq, GetConsentUploadUrlRes, GetDefaultRulesReq, GetDefaultRulesRes, GetFieldNamesReq, GetResultDescriptionsReq, GetRuleSetByNameReq, GetRuleSetReq, GetScenarioReq, GetScenarioRes, GetScrubListReq, GetScrubListsReq, GetScrubListUploadUrlReq, GetScrubListUploadUrlRes, ListAllScenariosReq, ListAllScenariosRes, ListAssignedRuleSetsReq, ListAssignedRuleSetsRes, ListAssignedScenariosReq, ListAssignedScenariosRes, ListConsentProfilesReq, ListConsentProfilesRes, ListConsentTopicsReq, ListConsentTopicsRes, ListRuleSetsReq, ListRuleSetsRes, ListUnassignedScenariosReq, ListUnassignedScenariosRes, ProcessConsentListDeleteUploadReq, ProcessConsentUploadReq, ProcessOutboundCallReq, ProcessRes, ProcessScrubListDeleteUploadReq, ProcessScrubListUploadReq, PurgeScrubListReq, PurgeScrubListRes, QueryHolidaysRequest, QueryHolidaysResponse, RenameRuleSetReq, RenameRuleSetRes, RevokeConsentReq, RuleAutoCompleteReq, RuleAutoCompleteRes, RuleSet, RunAssignedScenariosReq, RunAssignedScenariosRes, ScrubList, ScrubListRes, ScrubListsRes, SearchConsentByContentReq, SearchConsentByContentRes, SearchScrubListReq, UnassignScenarioReq, UpdateConsentReq, UpdateConsentTopicReq, UpdateScenarioReq, UpdateScenarioRes, UpdateScrubEntryReq, UpdateScrubEntryRes } from "./compliance_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { Operation } from "../../google/longrunning/operations_pb.js";

/**
 * @generated from service api.v0alpha.Compliance
 */
export const Compliance = {
  typeName: "api.v0alpha.Compliance",
  methods: {
    /**
     * @generated from rpc api.v0alpha.Compliance.RuleAutoComplete
     */
    ruleAutoComplete: {
      name: "RuleAutoComplete",
      I: RuleAutoCompleteReq,
      O: RuleAutoCompleteRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.CheckRuleSet
     */
    checkRuleSet: {
      name: "CheckRuleSet",
      I: CheckRuleSetReq,
      O: CheckRuleSetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.AssignRuleSet
     */
    assignRuleSet: {
      name: "AssignRuleSet",
      I: AssignRuleSetReq,
      O: AssignRuleSetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.ListRuleSets
     */
    listRuleSets: {
      name: "ListRuleSets",
      I: ListRuleSetsReq,
      O: ListRuleSetsRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetRuleSet
     */
    getRuleSet: {
      name: "GetRuleSet",
      I: GetRuleSetReq,
      O: RuleSet,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetRuleSetByName
     */
    getRuleSetByName: {
      name: "GetRuleSetByName",
      I: GetRuleSetByNameReq,
      O: RuleSet,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.CreateRuleSet
     */
    createRuleSet: {
      name: "CreateRuleSet",
      I: CreateRuleSetReq,
      O: RuleSet,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.RenameRuleSet
     */
    renameRuleSet: {
      name: "RenameRuleSet",
      I: RenameRuleSetReq,
      O: RenameRuleSetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.EnableRuleSet
     */
    enableRuleSet: {
      name: "EnableRuleSet",
      I: EnableRuleSetReq,
      O: EnableRuleSetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.DisableRuleSet
     */
    disableRuleSet: {
      name: "DisableRuleSet",
      I: DisableRuleSetReq,
      O: DisableRuleSetRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.CreateScrubList
     */
    createScrubList: {
      name: "CreateScrubList",
      I: CreateScrubListReq,
      O: ScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * Add entries to an existing scrub list defined by AddScrubListEntriesReq message.
     * The method will return a ScrubListRes message that will
     * contain the results.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.AddScrubListEntries
     */
    addScrubListEntries: {
      name: "AddScrubListEntries",
      I: AddScrubListEntriesReq,
      O: ScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update scrub list entry defined by UpdateScrubEntryReq message.
     * The method will update a scrub list entry with the specified fields
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.UpdateScrubEntry
     */
    updateScrubEntry: {
      name: "UpdateScrubEntry",
      I: UpdateScrubEntryReq,
      O: UpdateScrubEntryRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.DeleteScrubListEntries
     */
    deleteScrubListEntries: {
      name: "DeleteScrubListEntries",
      I: DeleteScrubListEntriesReq,
      O: ScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetScrubList
     */
    getScrubList: {
      name: "GetScrubList",
      I: GetScrubListReq,
      O: ScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.DeleteScrubList
     */
    deleteScrubList: {
      name: "DeleteScrubList",
      I: DeleteScrubListReq,
      O: ScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetDefaultRules
     */
    getDefaultRules: {
      name: "GetDefaultRules",
      I: GetDefaultRulesReq,
      O: GetDefaultRulesRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetScrubLists
     */
    getScrubLists: {
      name: "GetScrubLists",
      I: GetScrubListsReq,
      O: ScrubListsRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.SearchScrubList
     */
    searchScrubList: {
      name: "SearchScrubList",
      I: SearchScrubListReq,
      O: ScrubList,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.GetScrubListUploadUrl
     */
    getScrubListUploadUrl: {
      name: "GetScrubListUploadUrl",
      I: GetScrubListUploadUrlReq,
      O: GetScrubListUploadUrlRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.ProcessScrubListUpload
     */
    processScrubListUpload: {
      name: "ProcessScrubListUpload",
      I: ProcessScrubListUploadReq,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.ProcessScrubListDeleteUpload
     */
    processScrubListDeleteUpload: {
      name: "ProcessScrubListDeleteUpload",
      I: ProcessScrubListDeleteUploadReq,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Compliance.ExportScrubList
     */
    exportScrubList: {
      name: "ExportScrubList",
      I: ExportScrubListReq,
      O: ExportScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * Purge entries from a scrub list defined by PurgeScrubListReq message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.PurgeScrubList
     */
    purgeScrubList: {
      name: "PurgeScrubList",
      I: PurgeScrubListReq,
      O: PurgeScrubListRes,
      kind: MethodKind.Unary,
    },
    /**
     * Creates a new Scenario
     *
     * @generated from rpc api.v0alpha.Compliance.CreateScenario
     */
    createScenario: {
      name: "CreateScenario",
      I: CreateScenarioReq,
      O: CreateScenarioRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets one Scenario
     *
     * @generated from rpc api.v0alpha.Compliance.GetScenario
     */
    getScenario: {
      name: "GetScenario",
      I: GetScenarioReq,
      O: GetScenarioRes,
      kind: MethodKind.Unary,
    },
    /**
     * Updates a Scenario
     *
     * @generated from rpc api.v0alpha.Compliance.UpdateScenario
     */
    updateScenario: {
      name: "UpdateScenario",
      I: UpdateScenarioReq,
      O: UpdateScenarioRes,
      kind: MethodKind.Unary,
    },
    /**
     * Deletes a Scenario
     *
     * @generated from rpc api.v0alpha.Compliance.DeleteScenario
     */
    deleteScenario: {
      name: "DeleteScenario",
      I: DeleteScenarioReq,
      O: DeleteScenarioRes,
      kind: MethodKind.Unary,
    },
    /**
     * Run scenarios against ruleset
     *
     * @generated from rpc api.v0alpha.Compliance.RunAssignedScenarios
     */
    runAssignedScenarios: {
      name: "RunAssignedScenarios",
      I: RunAssignedScenariosReq,
      O: RunAssignedScenariosRes,
      kind: MethodKind.Unary,
    },
    /**
     * Lists all scenarios
     *
     * @generated from rpc api.v0alpha.Compliance.ListAllScenarios
     */
    listAllScenarios: {
      name: "ListAllScenarios",
      I: ListAllScenariosReq,
      O: ListAllScenariosRes,
      kind: MethodKind.Unary,
    },
    /**
     * List currently unassigned scenarios available to be assigned to a given ruleset
     *
     * @generated from rpc api.v0alpha.Compliance.ListUnassignedScenarios
     */
    listUnassignedScenarios: {
      name: "ListUnassignedScenarios",
      I: ListUnassignedScenariosReq,
      O: ListUnassignedScenariosRes,
      kind: MethodKind.Unary,
    },
    /**
     * List rule sets currently assigned to a given scenario
     *
     * @generated from rpc api.v0alpha.Compliance.ListAssignedRuleSets
     */
    listAssignedRuleSets: {
      name: "ListAssignedRuleSets",
      I: ListAssignedRuleSetsReq,
      O: ListAssignedRuleSetsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List scenarios currently assigned to a given ruleset
     *
     * @generated from rpc api.v0alpha.Compliance.ListAssignedScenarios
     */
    listAssignedScenarios: {
      name: "ListAssignedScenarios",
      I: ListAssignedScenariosReq,
      O: ListAssignedScenariosRes,
      kind: MethodKind.Unary,
    },
    /**
     * Assign a scenario to a given ruleset
     *
     * @generated from rpc api.v0alpha.Compliance.AssignScenario
     */
    assignScenario: {
      name: "AssignScenario",
      I: AssignScenarioReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Unassign a scenario from a given ruleset
     *
     * @generated from rpc api.v0alpha.Compliance.UnassignScenario
     */
    unassignScenario: {
      name: "UnassignScenario",
      I: UnassignScenarioReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Enable an scenario
     *
     * @generated from rpc api.v0alpha.Compliance.EnableScenario
     */
    enableScenario: {
      name: "EnableScenario",
      I: EnableScenarioReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Disable an scenario
     *
     * @generated from rpc api.v0alpha.Compliance.DisableScenario
     */
    disableScenario: {
      name: "DisableScenario",
      I: DisableScenarioReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Frequency data calls
     * This will get all available Meta Fields
     *
     * @generated from rpc api.v0alpha.Compliance.GetFieldNames
     */
    getFieldNames: {
      name: "GetFieldNames",
      I: GetFieldNamesReq,
      O: FieldNames,
      kind: MethodKind.Unary,
    },
    /**
     * This will get all possible results (Answered, Answered Machine, Busy, etc.)
     *
     * @generated from rpc api.v0alpha.Compliance.GetResultDescriptions
     */
    getResultDescriptions: {
      name: "GetResultDescriptions",
      I: GetResultDescriptionsReq,
      O: FieldNames,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a consent profile defined by CreateConsentProfileReq
     * message.  The method will return a CreateConsentProfileRes message
     * that will contain the newly created consent_profile_id.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.CreateConsentProfile
     */
    createConsentProfile: {
      name: "CreateConsentProfile",
      I: CreateConsentProfileReq,
      O: CreateConsentProfileRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a consent defined by CreateConsentReq message.
     * The method will return a CreateConsentRes message that will
     * contain the newly created consent_id.
     * Required permissions:
     *      none
     *
     * @generated from rpc api.v0alpha.Compliance.CreateConsent
     */
    createConsent: {
      name: "CreateConsent",
      I: CreateConsentReq,
      O: CreateConsentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a consent profile defined by GetConsentProfileReq message
     * for the specified consent_profile_id and org_id.
     * The method will return a ConsentProfile message/entity.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsentProfile
     */
    getConsentProfile: {
      name: "GetConsentProfile",
      I: GetConsentProfileReq,
      O: ConsentProfile,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a consent defined by GetConsentReq message
     * for the specified consent_id and org_id.
     * The method will return a Consent entity.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsent
     */
    getConsent: {
      name: "GetConsent",
      I: GetConsentReq,
      O: Consent,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a consent defined by GetConsentByProfileAndContentReq message
     * for the specified consent_profile_id and content.
     * The method will return a GetConsentByProfileAndContentRes message/entity.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsentByProfileAndContent
     */
    getConsentByProfileAndContent: {
      name: "GetConsentByProfileAndContent",
      I: GetConsentByProfileAndContentReq,
      O: GetConsentByProfileAndContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a consent defined by GetConsentByContentReq message
     * for the specified consent_profile_id and content and channel_type.
     * The method will return a GetConsentByContentRes message/entity.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsentByContent
     */
    getConsentByContent: {
      name: "GetConsentByContent",
      I: GetConsentByContentReq,
      O: GetConsentByContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Searches for a consent defined by SearchConsentByContentReq message
     * for the specified content.
     * The method will return a SearchConsentByContentRes message/entity.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.SearchConsentByContent
     */
    searchConsentByContent: {
      name: "SearchConsentByContent",
      I: SearchConsentByContentReq,
      O: SearchConsentByContentRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a consent defined by UpdateConsentReq message for
     * the specified consent_id, and will update the following
     * consent fields:
     *    Content
     *    Recorded
     *    Revoked
     *    Expire
     *    ReferringUrl
     * The method will return a google.protobuf.Empty message.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.UpdateConsent
     */
    updateConsent: {
      name: "UpdateConsent",
      I: UpdateConsentReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Expire a consent defined by ExpireConsentReq message.
     * Set the expiration date for the specified consent_id field.
     * The method will return a google.protobuf.Empty message.
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.ExpireConsent
     */
    expireConsent: {
      name: "ExpireConsent",
      I: ExpireConsentReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Revoke a consent defined by RevokeConsentReq message.
     * Set the revoked date for the specified consent_id and
     * consent_profile_id fields.
     * The method will return a google.protobuf.Empty message.
     * Required permissions:
     *      none
     *
     * @generated from rpc api.v0alpha.Compliance.RevokeConsent
     */
    revokeConsent: {
      name: "RevokeConsent",
      I: RevokeConsentReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a consent defined by DeleteConsentReq message
     * The method will return a google.protobuf.Empty message
     * Required permissions:
     *      PERMISSION_COMPLIANCE_CONSENT
     *
     * @generated from rpc api.v0alpha.Compliance.DeleteConsent
     */
    deleteConsent: {
      name: "DeleteConsent",
      I: DeleteConsentReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Process a consent delete list defined by DeleteConsentReq message
     * The method will return a google.protobuf.Empty message
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.ProcessConsentListDeleteUpload
     */
    processConsentListDeleteUpload: {
      name: "ProcessConsentListDeleteUpload",
      I: ProcessConsentListDeleteUploadReq,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Enable a consent profile defined by EnableConsentProfileReq message.
     * Set the disabled field to false for the specified
     * consent_profile_id field.
     * The method will return a google.protobuf.Empty message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.EnableConsentProfile
     */
    enableConsentProfile: {
      name: "EnableConsentProfile",
      I: EnableConsentProfileReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Disable a consent profile defined by DisableConsentProfileReq message.
     * Set the disabled field to true for the specified
     * consent_profile_id field.
     * The method will return a google.protobuf.Empty message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.DisableConsentProfile
     */
    disableConsentProfile: {
      name: "DisableConsentProfile",
      I: DisableConsentProfileReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * List consent profiles defined by ListConsentProfilesReq message.
     * Gets all of the unique consent profiles.
     * The method will return a ListConsentProfilesRes message
     * containing consent_profile_id, profile_name, the number of consents
     * belonging to the profile, and disabled.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.ListConsentProfiles
     */
    listConsentProfiles: {
      name: "ListConsentProfiles",
      I: ListConsentProfilesReq,
      O: ListConsentProfilesRes,
      kind: MethodKind.Unary,
    },
    /**
     * Get consent upload url defined by GetConsentUploadUrlReq message.
     * The method will return a GetConsentUploadUrlRes messages
     * containing a url with which to upload an import file.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsentUploadUrl
     */
    getConsentUploadUrl: {
      name: "GetConsentUploadUrl",
      I: GetConsentUploadUrlReq,
      O: GetConsentUploadUrlRes,
      kind: MethodKind.Unary,
    },
    /**
     * Process consent upload defined by ProcessConsentUploadReq message.
     * The method will process an uploaded consent file.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.ProcessConsentUpload
     */
    processConsentUpload: {
      name: "ProcessConsentUpload",
      I: ProcessConsentUploadReq,
      O: Operation,
      kind: MethodKind.Unary,
    },
    /**
     * Export consent list defined by ExportConsentListRequest message.
     * The method will create a consent download file in CSV format and return a URL for download.
     *
     * @generated from rpc api.v0alpha.Compliance.ExportConsentList
     */
    exportConsentList: {
      name: "ExportConsentList",
      I: ExportConsentListRequest,
      O: ExportConsentListResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List consent topics defined by ListConsentTopicsReq message.
     * Gets all of the unique consent topics.
     * The method will return a ListConsentTopicsRes message
     * containing topic, org_id, and deleted.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.ListConsentTopics
     */
    listConsentTopics: {
      name: "ListConsentTopics",
      I: ListConsentTopicsReq,
      O: ListConsentTopicsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a consent topic defined by GetConsentTopicReq message
     * for the specified topic and org_id.
     * The method will return a ConsentTopic message/entity.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.GetConsentTopic
     */
    getConsentTopic: {
      name: "GetConsentTopic",
      I: GetConsentTopicReq,
      O: ConsentTopic,
      kind: MethodKind.Unary,
    },
    /**
     * Create a consent topic defined by ConsentTopic
     * message.  The method will return an Empty message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.CreateConsentTopic
     */
    createConsentTopic: {
      name: "CreateConsentTopic",
      I: ConsentTopic,
      O: Empty$1,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a consent topic defined by ConsentTopic message.
     * The method will return an Empty message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.DeleteConsentTopic
     */
    deleteConsentTopic: {
      name: "DeleteConsentTopic",
      I: ConsentTopic,
      O: Empty$1,
      kind: MethodKind.Unary,
    },
    /**
     * Update a consent topic defined by UpdateConsentTopicReq message.
     * The method will return an Empty message.
     * Required permissions:
     *      EXECUTE_DO_NOT_CALL_LIST
     *
     * @generated from rpc api.v0alpha.Compliance.UpdateConsentTopic
     */
    updateConsentTopic: {
      name: "UpdateConsentTopic",
      I: UpdateConsentTopicReq,
      O: Empty$1,
      kind: MethodKind.Unary,
    },
    /**
     * Process and Outbound Phone Number against a rule set.
     * The method will return a response indicating
     * if the call would be permited or not and the list
     * of rules checked against.
     * Required permissions:
     *      AGENT
     *
     * @generated from rpc api.v0alpha.Compliance.ProcessOutboundCall
     */
    processOutboundCall: {
      name: "ProcessOutboundCall",
      I: ProcessOutboundCallReq,
      O: ProcessRes,
      kind: MethodKind.Unary,
    },
    /**
     * Return the holidays that match the request.
     * The method will return a stream of the matching holidays.
     * Required permissions:
     *      none
     *
     * @generated from rpc api.v0alpha.Compliance.QueryHolidays
     */
    queryHolidays: {
      name: "QueryHolidays",
      I: QueryHolidaysRequest,
      O: QueryHolidaysResponse,
      kind: MethodKind.Unary,
    },
  }
};

