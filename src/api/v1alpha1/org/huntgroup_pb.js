// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/huntgroup.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { AgentResponseAutoRuleSet, CallbackSettings, CallerIdBucketData, CommunicationSettings, DataDipConfig, GeneralSettings, ManualDialSettings, NumberHistorySettings, PreviewDialSettings, TransferCallSettings } from "../../commons/org/huntgroup_pb.js";
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

