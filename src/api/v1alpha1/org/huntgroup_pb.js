// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/huntgroup.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { AgentResponseAutoRuleSet, AgentTrigger, CallbackSettings, CallerIdBucketData, ClientInfoDisplayTemplate, CommunicationSettings, DataDipConfig, GeneralSettings, HuntGroupDetails, HuntGroupScript, HuntGroupType, IntegrationLink, ManualDialSettings, NumberHistorySettings, PreviewDialSettings, TransferCallSettings, WebLink } from "../../commons/org/huntgroup_pb.js";
import { DataDipTemplateFilterType } from "../../commons/org_pb.js";

/**
 * Request message for the GetHuntGroupSettings RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupSettingsRequest
 */
export const GetHuntGroupSettingsRequest = proto3.makeMessageType(
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
export const GetHuntGroupSettingsResponse = proto3.makeMessageType(
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
export const UpdateHuntGroupSettingsRequest = proto3.makeMessageType(
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
export const UpdateHuntGroupSettingsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupSettingsResponse",
  [],
);

/**
 * CreateHuntGroupRequest represents the request message for the CreateHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupRequest
 */
export const CreateHuntGroupRequest = proto3.makeMessageType(
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
export const CreateHuntGroupResponse = proto3.makeMessageType(
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
export const UpdateHuntGroupGeneralDetailsRequest = proto3.makeMessageType(
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
export const UpdateHuntGroupGeneralDetailsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupGeneralDetailsResponse",
  [],
);

/**
 * DeleteHuntGroupRequest represents the request message for the DeleteHuntGroup RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupRequest
 */
export const DeleteHuntGroupRequest = proto3.makeMessageType(
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
export const DeleteHuntGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupResponse",
  [],
);

/**
 * GetHuntGroupDetailsRequest is the request message for the GetHuntGroupDetails RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupDetailsRequest
 */
export const GetHuntGroupDetailsRequest = proto3.makeMessageType(
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
export const GetHuntGroupDetailsResponse = proto3.makeMessageType(
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
export const ListCallerIdBucketsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListCallerIdBucketsRequest",
  [],
);

/**
 * Response message for getting the org related list of Caller ID Bucket Data.
 *
 * @generated from message api.v1alpha1.org.ListCallerIdBucketsResponse
 */
export const ListCallerIdBucketsResponse = proto3.makeMessageType(
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
export const GetDataDipTemplateRequest = proto3.makeMessageType(
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
export const GetDataDipTemplateResponse = proto3.makeMessageType(
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
export const ListDataDipTemplatesRequest = proto3.makeMessageType(
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
export const ListDataDipTemplatesResponse = proto3.makeMessageType(
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
export const CreateDataDipTemplateRequest = proto3.makeMessageType(
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
export const CreateDataDipTemplateResponse = proto3.makeMessageType(
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
export const UpdateDataDipTemplateRequest = proto3.makeMessageType(
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
export const UpdateDataDipTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDataDipTemplateResponse",
  [],
);

/**
 * Request message for DeleteDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteDataDipTemplateRequest
 */
export const DeleteDataDipTemplateRequest = proto3.makeMessageType(
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
export const DeleteDataDipTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteDataDipTemplateResponse",
  [],
);

/**
 * Request message for CopyDataDipTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyDataDipTemplateRequest
 */
export const CopyDataDipTemplateRequest = proto3.makeMessageType(
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
export const CopyDataDipTemplateResponse = proto3.makeMessageType(
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
export const CopyDataDipTemplateToOrganizationRequest = proto3.makeMessageType(
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
export const CopyDataDipTemplateToOrganizationResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CopyDataDipTemplateToOrganizationResponse",
  [],
);

/**
 * Request message for the ListAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentResponseAutoRulesRequest
 */
export const ListAgentResponseAutoRulesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentResponseAutoRulesRequest",
  [],
);

/**
 * Response message for the ListAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentResponseAutoRulesResponse
 */
export const ListAgentResponseAutoRulesResponse = proto3.makeMessageType(
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
export const CreateAgentResponseAutoRulesRequest = proto3.makeMessageType(
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
export const CreateAgentResponseAutoRulesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for the UpdateAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentResponseAutoRulesRequest
 */
export const UpdateAgentResponseAutoRulesRequest = proto3.makeMessageType(
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
export const UpdateAgentResponseAutoRulesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for the DeleteAgentResponseAutoRules RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteAgentResponseAutoRulesRequest
 */
export const DeleteAgentResponseAutoRulesRequest = proto3.makeMessageType(
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
export const DeleteAgentResponseAutoRulesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteAgentResponseAutoRulesResponse",
  [],
);

/**
 * Request message for GetHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupClientInfoDisplayTemplateRequest
 */
export const GetHuntGroupClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const GetHuntGroupClientInfoDisplayTemplateResponse = proto3.makeMessageType(
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
export const CreateHuntGroupClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const CreateHuntGroupClientInfoDisplayTemplateResponse = proto3.makeMessageType(
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
export const UpdateHuntGroupClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const UpdateHuntGroupClientInfoDisplayTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * Request message for DeleteHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateRequest
 */
export const DeleteHuntGroupClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const DeleteHuntGroupClientInfoDisplayTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * Request message for ListHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupWebLinksRequest
 */
export const ListHuntGroupWebLinksRequest = proto3.makeMessageType(
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
export const ListHuntGroupWebLinksResponse = proto3.makeMessageType(
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
export const CopyHuntGroupWebLinkRequest = proto3.makeMessageType(
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
export const CopyHuntGroupWebLinkResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupWebLinkResponse",
  [],
);

/**
 * Request message for UpdateHuntGroupWebLinks
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupWebLinksRequest
 */
export const UpdateHuntGroupWebLinksRequest = proto3.makeMessageType(
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
export const UpdateHuntGroupWebLinksResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupWebLinksResponse",
  [],
);

/**
 * ListHuntGroupIntegrationLinksRequest is the request message for the ListHuntGroupIntegrationLinks RPC method.
 *
 * @generated from message api.v1alpha1.org.ListHuntGroupIntegrationLinksRequest
 */
export const ListHuntGroupIntegrationLinksRequest = proto3.makeMessageType(
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
export const ListHuntGroupIntegrationLinksResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListHuntGroupIntegrationLinksResponse",
  () => [
    { no: 1, name: "links", kind: "message", T: IntegrationLink, repeated: true },
  ],
);

/**
 * ListAgentTriggersRequest is the request message for the ListAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.ListAgentTriggersRequest
 */
export const ListAgentTriggersRequest = proto3.makeMessageType(
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
export const ListAgentTriggersResponse = proto3.makeMessageType(
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
export const CopyAgentTriggerRequest = proto3.makeMessageType(
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
export const CopyAgentTriggerResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CopyAgentTriggerResponse",
  [],
);

/**
 * UpdateAgentTriggersRequest is the request message for the UpdateAgentTriggers RPC method.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentTriggersRequest
 */
export const UpdateAgentTriggersRequest = proto3.makeMessageType(
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
export const UpdateAgentTriggersResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentTriggersResponse",
  [],
);

/**
 * The request message for GetHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupScriptRequest
 */
export const GetHuntGroupScriptRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * The response message for GetHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.GetHuntGroupScriptResponse
 */
export const GetHuntGroupScriptResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetHuntGroupScriptResponse",
  () => [
    { no: 1, name: "hunt_group_script", kind: "message", T: HuntGroupScript },
  ],
);

/**
 * The request message for CreateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.CreateHuntGroupScriptRequest
 */
export const CreateHuntGroupScriptRequest = proto3.makeMessageType(
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
export const CreateHuntGroupScriptResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateHuntGroupScriptResponse",
  [],
);

/**
 * The request message for UpdateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupScriptRequest
 */
export const UpdateHuntGroupScriptRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupScriptRequest",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_script", kind: "message", T: HuntGroupScript },
  ],
);

/**
 * The response message for UpdateHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.UpdateHuntGroupScriptResponse
 */
export const UpdateHuntGroupScriptResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateHuntGroupScriptResponse",
  [],
);

/**
 * The request message for DeleteHuntGroupScript
 *
 * @generated from message api.v1alpha1.org.DeleteHuntGroupScriptRequest
 */
export const DeleteHuntGroupScriptRequest = proto3.makeMessageType(
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
export const DeleteHuntGroupScriptResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteHuntGroupScriptResponse",
  [],
);

/**
 * CopyHuntGroupClientInfoDisplayTemplate is the request message for the CopyHuntGroupClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateRequest
 */
export const CopyHuntGroupClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const CopyHuntGroupClientInfoDisplayTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CopyHuntGroupClientInfoDisplayTemplateResponse",
  [],
);

/**
 * CreateCampaignClientInfoDisplayTemplateRequest is the request message for the CreateCampaignClientInfoDisplayTemplate RPC method.
 *
 * @generated from message api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateRequest
 */
export const CreateCampaignClientInfoDisplayTemplateRequest = proto3.makeMessageType(
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
export const CreateCampaignClientInfoDisplayTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateCampaignClientInfoDisplayTemplateResponse",
  () => [
    { no: 1, name: "template_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

