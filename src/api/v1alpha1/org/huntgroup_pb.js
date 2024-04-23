// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/huntgroup.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { AgentResponseAutoRuleSet, AgentTrigger, CallbackSettings, CallerIdBucketData, ClientInfoDisplayTemplate, CommunicationSettings, DataDipConfig, GeneralSettings, HuntGroupDetails, HuntGroupScript, HuntGroupScriptDetails, HuntGroupType, HuntGroupWithClientInfoTemplateData, IntegrationLink, ManualDialSettings, NumberHistorySettings, PreviewDialSettings, TransferCallSettings, WebLink } from "../../commons/org/huntgroup_pb.js";
import { DataDipTemplateFilterType } from "../../commons/org_pb.js";

/**
 * Request message for the GetHuntGroupSettings RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupSettingsRequest
 */
export const GetHuntGroupSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupSettingsRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response message for the GetHuntGroupSettings RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupSettingsResponse
 */
export const GetHuntGroupSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupSettingsResponse",
  () => [
    { no: 1, name: "general_settings", kind: "message", T: GeneralSettings },
    { no: 2, name: "communication_settings", kind: "message", T: CommunicationSettings },
    { no: 3, name: "callback_settings", kind: "message", T: CallbackSettings },
    { no: 4, name: "preview_dial_settings", kind: "message", T: PreviewDialSettings },
    { no: 5, name: "manual_dial_settings", kind: "message", T: ManualDialSettings },
    { no: 6, name: "transfer_call_settings", kind: "message", T: TransferCallSettings },
    { no: 7, name: "number_history_settings", kind: "message", T: NumberHistorySettings },
  ],
);

/**
 * Request message for the UpdateHuntGroupSettings RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupSettingsRequest
 */
export const UpdateHuntGroupSettingsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupSettingsRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "general_settings", kind: "message", T: GeneralSettings },
    { no: 3, name: "communication_settings", kind: "message", T: CommunicationSettings },
    { no: 4, name: "callback_settings", kind: "message", T: CallbackSettings },
    { no: 5, name: "preview_dial_settings", kind: "message", T: PreviewDialSettings },
    { no: 6, name: "manual_dial_settings", kind: "message", T: ManualDialSettings },
    { no: 7, name: "transfer_call_settings", kind: "message", T: TransferCallSettings },
    { no: 8, name: "number_history_settings", kind: "message", T: NumberHistorySettings },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response message for the UpdateHuntGroupSettings RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupSettingsResponse
 */
export const UpdateHuntGroupSettingsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupSettingsResponse",
  [],
);

/**
 * CreateHuntGroupRequest represents the request message for the CreateHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupRequest
 */
export const CreateHuntGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(HuntGroupType) },
  ],
);

/**
 * CreateHuntGroupResponse represents the response message for the CreateHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupResponse
 */
export const CreateHuntGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupResponse",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * UpdateHuntGroupGeneralDetailsRequest represents the request message for the UpdateHuntGroupGeneralDetails RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest
 */
export const UpdateHuntGroupGeneralDetailsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupGeneralDetailsRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(HuntGroupType) },
  ],
);

/**
 * UpdateHuntGroupGeneralDetailsResponse represents the response message for the UpdateHuntGroupGeneralDetails RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse
 */
export const UpdateHuntGroupGeneralDetailsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse",
  [],
);

/**
 * DeleteHuntGroupRequest represents the request message for the DeleteHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupRequest
 */
export const DeleteHuntGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteHuntGroupResponse represents the response message for the DeleteHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupResponse
 */
export const DeleteHuntGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupResponse",
  [],
);

/**
 * GetHuntGroupDetailsRequest is the request message for the GetHuntGroupDetails RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupDetailsRequest
 */
export const GetHuntGroupDetailsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupDetailsRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetHuntGroupDetailsResponse is the response message for the GetHuntGroupDetails RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupDetailsResponse
 */
export const GetHuntGroupDetailsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupDetailsResponse",
  () => [
    { no: 1, name: "hunt_group_details", kind: "message", T: HuntGroupDetails },
  ],
);

/**
 * Request messsage for getting the org related list of Caller ID Bucket Data.
 *
 * @generated from message api.v1alpha1.org.ListCallerIdBucketsRequest
 */
export const ListCallerIdBucketsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListCallerIdBucketsRequest",
  [],
);

/**
 * Response message for getting the org related list of Caller ID Bucket Data.
 *
 * @generated from message api.v1alpha1.org.ListCallerIdBucketsResponse
 */
export const ListCallerIdBucketsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListCallerIdBucketsResponse",
  () => [
    { no: 1, name: "caller_id_bucket_data", kind: "message", T: CallerIdBucketData, repeated: true },
  ],
);

/**
 * Request messsage for the GetDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.GetDataDipTemplateRequest
 */
export const GetDataDipTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetDataDipTemplateRequest",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the GetDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.GetDataDipTemplateResponse
 */
export const GetDataDipTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetDataDipTemplateResponse",
  () => [
    { no: 1, name: "template", kind: "message", T: DataDipConfig },
  ],
);

/**
 * Request message for ListDataDipTemplates RPC method.
 *
 * @generated from message api.v1alpha1.org.ListDataDipTemplatesRequest
 */
export const ListDataDipTemplatesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListDataDipTemplatesRequest",
  () => [
    { no: 1, name: "filter", kind: "enum", T: proto3.getEnumType(DataDipTemplateFilterType) },
  ],
);

/**
 * Response message for ListDataDipTemplates RPC method.
 *
 * @generated from message api.v1alpha1.org.ListDataDipTemplatesResponse
 */
export const ListDataDipTemplatesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListDataDipTemplatesResponse",
  () => [
    { no: 1, name: "templates", kind: "message", T: DataDipConfig, repeated: true },
  ],
);

/**
 * Request message for creating a Data Dip template.
 *
 * @generated from message api.v1alpha1.org.CreateDataDipTemplateRequest
 */
export const CreateDataDipTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateDataDipTemplateRequest",
  () => [
    { no: 1, name: "template", kind: "message", T: DataDipConfig },
  ],
);

/**
 * Response message from creating a Data Dip template.
 *
 * @generated from message api.v1alpha1.org.CreateDataDipTemplateResponse
 */
export const CreateDataDipTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateDataDipTemplateResponse",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request message for UpdateDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateDataDipTemplateRequest
 */
export const UpdateDataDipTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDataDipTemplateRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "template", kind: "message", T: DataDipConfig },
  ],
);

/**
 * Response message for UpdateDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateDataDipTemplateResponse
 */
export const UpdateDataDipTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDataDipTemplateResponse",
  [],
);

/**
 * Request message for DeleteDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteDataDipTemplateRequest
 */
export const DeleteDataDipTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteDataDipTemplateRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for DeleteDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteDataDipTemplateResponse
 */
export const DeleteDataDipTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteDataDipTemplateResponse",
  [],
);

/**
 * Request message for CopyDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyDataDipTemplateRequest
 */
export const CopyDataDipTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyDataDipTemplateRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for CopyDataDipTemplate RPC method
 *
 * @generated from message api.v1alpha1.org.CopyDataDipTemplateResponse
 */
export const CopyDataDipTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyDataDipTemplateResponse",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request message for CopyDataDipTemplateToOrganization RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest
 */
export const CopyDataDipTemplateToOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyDataDipTemplateToOrganizationRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "destination_org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for CopyDataDipTemplateToOrganization RPC method
 *
 * @generated from message api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse
 */
export const CopyDataDipTemplateToOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse",
  [],
);

/**
 * Request message for the ListAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentResponseAutoRulesRequest
 */
export const ListAgentResponseAutoRulesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentResponseAutoRulesRequest",
  [],
);

/**
 * Response message for the ListAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentResponseAutoRulesResponse
 */
export const ListAgentResponseAutoRulesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentResponseAutoRulesResponse",
  () => [
    { no: 1, name: "rulesets", kind: "message", T: AgentResponseAutoRuleSet, repeated: true },
  ],
);

/**
 * Request message for the CreateAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateAgentResponseAutoRulesRequest
 */
export const CreateAgentResponseAutoRulesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateAgentResponseAutoRulesRequest",
  () => [
    { no: 1, name: "ruleset", kind: "message", T: AgentResponseAutoRuleSet },
  ],
);

/**
 * Response message for the CreateAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateAgentResponseAutoRulesResponse
 */
export const CreateAgentResponseAutoRulesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for the UpdateAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest
 */
export const UpdateAgentResponseAutoRulesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest",
  () => [
    { no: 1, name: "rulesetSid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "ruleset", kind: "message", T: AgentResponseAutoRuleSet },
  ],
);

/**
 * Response message for the UpdateAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse
 */
export const UpdateAgentResponseAutoRulesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for the DeleteAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest
 */
export const DeleteAgentResponseAutoRulesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest",
  () => [
    { no: 1, name: "rulesetSid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the DeleteAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse
 */
export const DeleteAgentResponseAutoRulesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for GetHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest
 */
export const GetHuntGroupClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for GetHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse
 */
export const GetHuntGroupClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateResponse",
  () => [
    { no: 1, name: "template", kind: "message", T: ClientInfoDisplayTemplate },
  ],
);

/**
 * Request message for CreateHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest
 */
export const CreateHuntGroupClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "template", kind: "message", T: ClientInfoDisplayTemplate },
  ],
);

/**
 * Response message for CreateHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse
 */
export const CreateHuntGroupClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupClientInfoDisplayTemplateResponse",
  () => [
    { no: 1, name: "template_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request message for UpdateHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest
 */
export const UpdateHuntGroupClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "template", kind: "message", T: ClientInfoDisplayTemplate },
  ],
);

/**
 * Response message for UpdateHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse
 */
export const UpdateHuntGroupClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * Request message for DeleteHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest
 */
export const DeleteHuntGroupClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "template_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for DeleteHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse
 */
export const DeleteHuntGroupClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * CopyHuntGroupClientInfoDisplayTemplate is the request message for the CopyHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest
 */
export const CopyHuntGroupClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "to_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "template", kind: "message", T: ClientInfoDisplayTemplate },
  ],
);

/**
 * CopyHuntGroupClientInfoDisplayTemplateResponse is the response message for the CopyHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse
 */
export const CopyHuntGroupClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * CreateCampaignClientInfoDisplayTemplateRequest is the request message for the CreateCampaignClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest
 */
export const CreateCampaignClientInfoDisplayTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest",
  () => [
    { no: 1, name: "template", kind: "message", T: ClientInfoDisplayTemplate },
  ],
);

/**
 * CreateCampaignClientInfoDisplayTemplateResponse is the response message for the CreateCampaignClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse
 */
export const CreateCampaignClientInfoDisplayTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse",
  () => [
    { no: 1, name: "template_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListHuntGroupsWithClientInfoTemplateDataRequest is the request message for the ListHuntGroupsWithClientInfoTemplateData RPC method.
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest
 */
export const ListHuntGroupsWithClientInfoTemplateDataRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest",
  () => [
    { no: 1, name: "filter", kind: "enum", T: proto3.getEnumType(ListHuntGroupsWithClientInfoTemplateDataRequest_Filter) },
  ],
);

/**
 * Filter is the entity for the filter to list the hunt groups with their client info display template.
 *
 * @generated from enum api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter
 */
export const ListHuntGroupsWithClientInfoTemplateDataRequest_Filter = /*@__PURE__*/ proto3.makeEnum(
  "api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataRequest.Filter",
  [
    {no: 0, name: "FILTER_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FILTER_ALL", localName: "ALL"},
    {no: 2, name: "FILTER_HUNT_GROUPS_WITH_TEMPLATE", localName: "HUNT_GROUPS_WITH_TEMPLATE"},
    {no: 3, name: "FILTER_HUNT_GROUPS_WITHOUT_TEMPLATE", localName: "HUNT_GROUPS_WITHOUT_TEMPLATE"},
  ],
);

/**
 * ListHuntGroupsWithClientInfoTemplateDataResponse is the response message for the ListHuntGroupsWithClientInfoTemplateData RPC method.
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse
 */
export const ListHuntGroupsWithClientInfoTemplateDataResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupsWithClientInfoTemplateDataResponse",
  () => [
    { no: 1, name: "hunt_groups_with_template_data", kind: "message", T: HuntGroupWithClientInfoTemplateData, repeated: true },
  ],
);

/**
 * Request message for ListHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupWebLinksRequest
 */
export const ListHuntGroupWebLinksRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupWebLinksRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for ListHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupWebLinksResponse
 */
export const ListHuntGroupWebLinksResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupWebLinksResponse",
  () => [
    { no: 1, name: "web_links", kind: "message", T: WebLink, repeated: true },
  ],
);

/**
 * Request message for CopyHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupWebLinkRequest
 */
export const CopyHuntGroupWebLinkRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupWebLinkRequest",
  () => [
    { no: 1, name: "from_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "to_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "web_link", kind: "message", T: WebLink },
  ],
);

/**
 * Response message for CopyHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupWebLinkResponse
 */
export const CopyHuntGroupWebLinkResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupWebLinkResponse",
  [],
);

/**
 * Request message for UpdateHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupWebLinksRequest
 */
export const UpdateHuntGroupWebLinksRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupWebLinksRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "web_links", kind: "message", T: WebLink, repeated: true },
  ],
);

/**
 * Response message for UpdateHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupWebLinksResponse
 */
export const UpdateHuntGroupWebLinksResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupWebLinksResponse",
  [],
);

/**
 * ListHuntGroupIntegrationLinksRequest is the request message for the ListHuntGroupIntegrationLinks RPC method.
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest
 */
export const ListHuntGroupIntegrationLinksRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListHuntGroupIntegrationLinksResponse is the response message for the ListHuntGroupIntegrationLinks RPC method.
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse
 */
export const ListHuntGroupIntegrationLinksResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse",
  () => [
    { no: 1, name: "links", kind: "message", T: IntegrationLink, repeated: true },
  ],
);

/**
 * CopyHuntGroupIntegrationLinkRequest is the request message for the CopyHuntGroupIntegrationLink RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest
 */
export const CopyHuntGroupIntegrationLinkRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupIntegrationLinkRequest",
  () => [
    { no: 1, name: "to_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "link", kind: "message", T: IntegrationLink },
  ],
);

/**
 * CopyHuntGroupIntegrationLinkResponse is the response message for the CopyHuntGroupIntegrationLink RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse
 */
export const CopyHuntGroupIntegrationLinkResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupIntegrationLinkResponse",
  [],
);

/**
 * UpdateHuntGroupIntegrationLinksRequest is the request message for the UpdateHuntGroupIntegrationLinks RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest
 */
export const UpdateHuntGroupIntegrationLinksRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupIntegrationLinksRequest",
  () => [
    { no: 1, name: "links", kind: "message", T: IntegrationLink, repeated: true },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * UpdateHuntGroupIntegrationLinksResponse is the response message for the UpdateHuntGroupIntegrationLinks RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse
 */
export const UpdateHuntGroupIntegrationLinksResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupIntegrationLinksResponse",
  [],
);

/**
 * ListAgentTriggersRequest is the request message for the ListAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentTriggersRequest
 */
export const ListAgentTriggersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentTriggersRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListAgentTriggersResponse is the response message for the ListAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentTriggersResponse
 */
export const ListAgentTriggersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentTriggersResponse",
  () => [
    { no: 1, name: "agent_triggers", kind: "message", T: AgentTrigger, repeated: true },
  ],
);

/**
 * CopyAgentTriggerRequest is the request message for the CopyAgentTrigger RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyAgentTriggerRequest
 */
export const CopyAgentTriggerRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyAgentTriggerRequest",
  () => [
    { no: 1, name: "from_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "to_hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "agent_trigger", kind: "message", T: AgentTrigger },
  ],
);

/**
 * CopyAgentTriggerResponse is the response message for the CopyAgentTrigger RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyAgentTriggerResponse
 */
export const CopyAgentTriggerResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CopyAgentTriggerResponse",
  [],
);

/**
 * UpdateAgentTriggersRequest is the request message for the UpdateAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentTriggersRequest
 */
export const UpdateAgentTriggersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentTriggersRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "agent_triggers", kind: "message", T: AgentTrigger, repeated: true },
  ],
);

/**
 * UpdateAgentTriggersResponse is the response message for the UpdateAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentTriggersResponse
 */
export const UpdateAgentTriggersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentTriggersResponse",
  [],
);

/**
 * The request message for ListHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupScriptsRequest
 */
export const ListHuntGroupScriptsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupScriptsRequest",
  [],
);

/**
 * The response message for ListHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupScriptsResponse
 */
export const ListHuntGroupScriptsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupScriptsResponse",
  () => [
    { no: 1, name: "scripts", kind: "message", T: HuntGroupScript, repeated: true },
  ],
);

/**
 * The request message for GetHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupScriptRequest
 */
export const GetHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "script_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * The response message for GetHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupScriptResponse
 */
export const GetHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupScriptResponse",
  () => [
    { no: 1, name: "hunt_group_script", kind: "message", T: HuntGroupScript },
    { no: 2, name: "script_details", kind: "message", T: HuntGroupScriptDetails },
  ],
);

/**
 * The request message for CreateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupScriptRequest
 */
export const CreateHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_script", kind: "message", T: HuntGroupScript },
  ],
);

/**
 * The response message for CreateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupScriptResponse
 */
export const CreateHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupScriptResponse",
  [],
);

/**
 * The request message for UpdateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupScriptRequest
 */
export const UpdateHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_script", kind: "message", T: HuntGroupScript },
    { no: 3, name: "script_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * The response message for UpdateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupScriptResponse
 */
export const UpdateHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupScriptResponse",
  [],
);

/**
 * The request message for DeleteHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupScriptRequest
 */
export const DeleteHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "script_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * The response message for DeleteHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupScriptResponse
 */
export const DeleteHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupScriptResponse",
  [],
);

/**
 * The request message for AssignHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.AssignHuntGroupScriptRequest
 */
export const AssignHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.AssignHuntGroupScriptRequest",
  () => [
    { no: 1, name: "script_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * The response message for AssignHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.AssignHuntGroupScriptResponse
 */
export const AssignHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.AssignHuntGroupScriptResponse",
  [],
);

/**
 * The request message for UnassignHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UnassignHuntGroupScriptRequest
 */
export const UnassignHuntGroupScriptRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UnassignHuntGroupScriptRequest",
  () => [
    { no: 1, name: "script_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * The response message for UnassignHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UnassignHuntGroupScriptResponse
 */
export const UnassignHuntGroupScriptResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UnassignHuntGroupScriptResponse",
  [],
);

