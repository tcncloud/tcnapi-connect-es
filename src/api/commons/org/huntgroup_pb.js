// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/org/huntgroup.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AgentCallHistoryScope, AgentRouting, AlphanumericKeypadDelimiter, CommunicationExpiration, DefaultCallbackRouting, DefaultManualDialCallerId, DefaultTransferCallerId, HuntGroupOrgDefaultCustom, InitialAgentStatus, ManualDialDataDipHandling, ManualDialDataDipIntegration, ManualDialDataDipScope, ManualDialTimeZoneValidation, PhonePostalDisplayOptions, RequeueTransferQueueConfig, TransferRecordingStatus } from "../org_pb.js";
import { Country } from "../country_pb.js";

/**
 * HuntGroupSettings contains all of the hunt group settings.
 *
 * @generated from message api.commons.org.HuntGroupSettings
 */
export const HuntGroupSettings = proto3.makeMessageType(
  "api.commons.org.HuntGroupSettings",
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
 * GeneralSettings is an entity containing a section of the hunt group settings
 * for the hunt group manager.
 *
 * MAIN SETTINGS
 *
 * @generated from message api.commons.org.GeneralSettings
 */
export const GeneralSettings = proto3.makeMessageType(
  "api.commons.org.GeneralSettings",
  () => [
    { no: 1, name: "enable_agent_gateway_title_bar", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "default_agent_dial_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "require_end_call_confirmation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "enable_authorization_by_ip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "authorized_ip_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 100, name: "initial_agent_status", kind: "enum", T: proto3.getEnumType(InitialAgentStatus) },
    { no: 101, name: "enable_agent_pause", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 102, name: "agent_pause_option_set", kind: "message", T: GeneralSettings_PauseOptionSet },
    { no: 103, name: "default_agent_pause_option", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 104, name: "enable_pause_option_reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 200, name: "display_recording_indicator", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 201, name: "enable_call_recording_pause", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 202, name: "call_recording_pause_confirmation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 203, name: "call_recording_delay", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 204, name: "enable_pause_recording_on_hold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 300, name: "enable_envision_screen_recording", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 400, name: "enable_agent_simple_hold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 401, name: "enable_agent_multi_accept", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 402, name: "pause_agent_after_multi_accept", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 403, name: "hold_queue_monitoring", kind: "message", T: GeneralSettings_HoldQueueMonitoring },
    { no: 500, name: "display_machine_deliver", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 501, name: "display_linkback_hunt_group", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 502, name: "display_sip_header_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 503, name: "display_ivr_navigation_keys", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 504, name: "display_data_collect_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 505, name: "display_data_dipped_data", kind: "message", T: GeneralSettings_DataDipDataDisplay },
    { no: 506, name: "integration_data_display", kind: "message", T: GeneralSettings_IntegrationDataDisplay },
    { no: 507, name: "journey_data_display", kind: "message", T: GeneralSettings_JourneyDataDisplay },
    { no: 508, name: "agent_call_history_scope", kind: "enum", T: proto3.getEnumType(AgentCallHistoryScope) },
    { no: 509, name: "agent_login_gui_statistics_display", kind: "message", T: GeneralSettings_AgentLoginGuiStatisticsDisplay },
    { no: 510, name: "phone_zip_metadata_display", kind: "message", T: GeneralSettings_PhoneZipMetadataDisplay },
    { no: 511, name: "display_skills", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 512, name: "display_web_links", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 600, name: "enable_agent_hunt_group_reassignment", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 601, name: "disallowed_hunt_groups", kind: "message", T: GeneralSettings_DisallowedHuntGroups },
    { no: 700, name: "enable_manual_approval_of_calls", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 701, name: "require_manual_approval_number", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 702, name: "enable_manual_approval_of_sms", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 703, name: "require_manual_approval_number_sms", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 800, name: "alphanumeric_keypad", kind: "message", T: GeneralSettings_AlphanumericKeypad },
    { no: 801, name: "enable_call_desktop_notifications", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 802, name: "inbound_compliance_metadata", kind: "message", T: GeneralSettings_InboundComplianceMetadata },
    { no: 803, name: "enable_agent_intercom", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Pause option set properties.
 *
 * @generated from message api.commons.org.GeneralSettings.PauseOptionSet
 */
export const GeneralSettings_PauseOptionSet = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.PauseOptionSet",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "set_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "GeneralSettings_PauseOptionSet"},
);

/**
 * Hold queue monitoring options.
 *
 * @generated from message api.commons.org.GeneralSettings.HoldQueueMonitoring
 */
export const GeneralSettings_HoldQueueMonitoring = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.HoldQueueMonitoring",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "agent_routing", kind: "enum", T: proto3.getEnumType(AgentRouting) },
    { no: 3, name: "required_hunt_group_routing", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "preferred_hunt_group_routing", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "GeneralSettings_HoldQueueMonitoring"},
);

/**
 * Data Dip data display options.
 *
 * @generated from message api.commons.org.GeneralSettings.DataDipDataDisplay
 */
export const GeneralSettings_DataDipDataDisplay = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.DataDipDataDisplay",
  () => [
    { no: 1, name: "display_data_dip_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "data_dip_display_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "GeneralSettings_DataDipDataDisplay"},
);

/**
 * Payment Integration data display options.
 *
 * @generated from message api.commons.org.GeneralSettings.IntegrationDataDisplay
 */
export const GeneralSettings_IntegrationDataDisplay = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.IntegrationDataDisplay",
  () => [
    { no: 1, name: "display_integration_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "integration_display_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "GeneralSettings_IntegrationDataDisplay"},
);

/**
 * Journey Integration data display options.
 *
 * @generated from message api.commons.org.GeneralSettings.JourneyDataDisplay
 */
export const GeneralSettings_JourneyDataDisplay = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.JourneyDataDisplay",
  () => [
    { no: 1, name: "display_journey_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "journey_display_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "GeneralSettings_JourneyDataDisplay"},
);

/**
 * Agent Login GUI Statistics display and template.
 *
 * @generated from message api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay
 */
export const GeneralSettings_AgentLoginGuiStatisticsDisplay = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.AgentLoginGuiStatisticsDisplay",
  () => [
    { no: 1, name: "display_agent_login_gui_statistics", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "agent_login_gui_statistics_template", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "GeneralSettings_AgentLoginGuiStatisticsDisplay"},
);

/**
 * Phone / Postal Metadata display options.
 *
 * @generated from message api.commons.org.GeneralSettings.PhoneZipMetadataDisplay
 */
export const GeneralSettings_PhoneZipMetadataDisplay = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.PhoneZipMetadataDisplay",
  () => [
    { no: 1, name: "display_phone_zip_metadata", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "phone_zip_metadata_keys", kind: "enum", T: proto3.getEnumType(PhonePostalDisplayOptions), repeated: true },
  ],
  {localName: "GeneralSettings_PhoneZipMetadataDisplay"},
);

/**
 * Available hunt group options.
 *
 * @generated from message api.commons.org.GeneralSettings.DisallowedHuntGroups
 */
export const GeneralSettings_DisallowedHuntGroups = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.DisallowedHuntGroups",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "hunt_groups", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "GeneralSettings_DisallowedHuntGroups"},
);

/**
 * Alphanumeric keypad options.
 *
 * @generated from message api.commons.org.GeneralSettings.AlphanumericKeypad
 */
export const GeneralSettings_AlphanumericKeypad = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.AlphanumericKeypad",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "delimiter", kind: "enum", T: proto3.getEnumType(AlphanumericKeypadDelimiter) },
  ],
  {localName: "GeneralSettings_AlphanumericKeypad"},
);

/**
 * Inbound natural compiance metadata options.
 *
 * @generated from message api.commons.org.GeneralSettings.InboundComplianceMetadata
 */
export const GeneralSettings_InboundComplianceMetadata = proto3.makeMessageType(
  "api.commons.org.GeneralSettings.InboundComplianceMetadata",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "optional_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "required_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "GeneralSettings_InboundComplianceMetadata"},
);

/**
 * CommunicationSettings is an entity containing the hunt group settings for the
 * communication compliance section of the hunt group manager.
 *
 * MAIN SETTINGS
 *
 * @generated from message api.commons.org.CommunicationSettings
 */
export const CommunicationSettings = proto3.makeMessageType(
  "api.commons.org.CommunicationSettings",
  () => [
    { no: 1, name: "enable_scrub_list_adding", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "scrub_lists", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "enable_scrub_list_removal", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "scrub_lists_removal_allowed", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "compliance_default_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 6, name: "display_options_in_wrapup", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 100, name: "inbound_scrub_list_expiration", kind: "message", T: CommunicationSettings_ScrubListExpiration },
    { no: 101, name: "manual_scrub_list_expiration", kind: "message", T: CommunicationSettings_ScrubListExpiration },
    { no: 102, name: "outbound_scrub_list_expiration", kind: "message", T: CommunicationSettings_ScrubListExpiration },
    { no: 103, name: "preview_scrub_list_expiration", kind: "message", T: CommunicationSettings_ScrubListExpiration },
    { no: 200, name: "automate_manually_dialed_scrub_list", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 201, name: "automate_preview_dialed_scrub_list", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 202, name: "automate_response_rules", kind: "message", T: CommunicationSettings_AutomateResponseRules },
    { no: 203, name: "automate_scrub_list_call_data", kind: "message", T: CommunicationSettings_AutomateScrubListCallData },
  ],
);

/**
 * Scrub list expiration properties.
 *
 * @generated from message api.commons.org.CommunicationSettings.ScrubListExpiration
 */
export const CommunicationSettings_ScrubListExpiration = proto3.makeMessageType(
  "api.commons.org.CommunicationSettings.ScrubListExpiration",
  () => [
    { no: 1, name: "default_expiration", kind: "enum", T: proto3.getEnumType(CommunicationExpiration) },
    { no: 2, name: "limit_expiration", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "limited_expirations", kind: "enum", T: proto3.getEnumType(CommunicationExpiration), repeated: true },
  ],
  {localName: "CommunicationSettings_ScrubListExpiration"},
);

/**
 * Automate response rules properties.
 *
 * @generated from message api.commons.org.CommunicationSettings.AutomateResponseRules
 */
export const CommunicationSettings_AutomateResponseRules = proto3.makeMessageType(
  "api.commons.org.CommunicationSettings.AutomateResponseRules",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "rule_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "CommunicationSettings_AutomateResponseRules"},
);

/**
 * Automate response rules properties.
 *
 * @generated from message api.commons.org.CommunicationSettings.AutomateScrubListCallData
 */
export const CommunicationSettings_AutomateScrubListCallData = proto3.makeMessageType(
  "api.commons.org.CommunicationSettings.AutomateScrubListCallData",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "scrub_list_data_fields", kind: "message", T: CommunicationSettings_AutomateScrubListCallData_ScrubListDataField, repeated: true },
  ],
  {localName: "CommunicationSettings_AutomateScrubListCallData"},
);

/**
 * Scrub list data field properties.
 *
 * @generated from message api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField
 */
export const CommunicationSettings_AutomateScrubListCallData_ScrubListDataField = proto3.makeMessageType(
  "api.commons.org.CommunicationSettings.AutomateScrubListCallData.ScrubListDataField",
  () => [
    { no: 1, name: "scrub_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "call_data_field", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "CommunicationSettings_AutomateScrubListCallData_ScrubListDataField"},
);

/**
 * CallbackSettings is an entity containing the hunt group settings for the
 * scheduled callbacks section of the hunt group manager.
 *
 * MAIN SETTINGS
 *
 * @generated from message api.commons.org.CallbackSettings
 */
export const CallbackSettings = proto3.makeMessageType(
  "api.commons.org.CallbackSettings",
  () => [
    { no: 1, name: "enable_callback_scheduling", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "default_callback_routing", kind: "message", T: CallbackSettings_DefaultRouting },
    { no: 3, name: "enable_callback_calling", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "enable_automatic_retrieval", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "callback_routing_disallowed", kind: "message", T: CallbackSettings_CallbackRoutingDisallowed },
    { no: 6, name: "enable_customizable_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "default_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "enable_callback_calendar", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Default callback routing properties.
 *
 * @generated from message api.commons.org.CallbackSettings.DefaultRouting
 */
export const CallbackSettings_DefaultRouting = proto3.makeMessageType(
  "api.commons.org.CallbackSettings.DefaultRouting",
  () => [
    { no: 1, name: "routing_mode", kind: "enum", T: proto3.getEnumType(DefaultCallbackRouting) },
    { no: 2, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "agent_skillsets", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "CallbackSettings_DefaultRouting"},
);

/**
 * Control which skills may be used when selecting routing.
 *
 * @generated from message api.commons.org.CallbackSettings.CallbackRoutingDisallowed
 */
export const CallbackSettings_CallbackRoutingDisallowed = proto3.makeMessageType(
  "api.commons.org.CallbackSettings.CallbackRoutingDisallowed",
  () => [
    { no: 1, name: "use_routing_limiting", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "agent_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "agent_skill_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "CallbackSettings_CallbackRoutingDisallowed"},
);

/**
 * PreviewDialSettings is an entity containing the hunt group settings for the
 * Preview Dial section of the hunt group manager.
 *
 * @generated from message api.commons.org.PreviewDialSettings
 */
export const PreviewDialSettings = proto3.makeMessageType(
  "api.commons.org.PreviewDialSettings",
  () => [
    { no: 1, name: "enable_preview_dial_cancel", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_auto_pause_on_cancel", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "timeout_minutes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "require_number_confirmation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "preview_queue_config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ManualDialSettings is an entity containing the hunt group settings for the
 * Manual Dial section of the hunt group settings manager.
 *
 * @generated from message api.commons.org.ManualDialSettings
 */
export const ManualDialSettings = proto3.makeMessageType(
  "api.commons.org.ManualDialSettings",
  () => [
    { no: 1, name: "enable_manual_dial", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "queue_configuration_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "default_call_recording", kind: "enum", T: proto3.getEnumType(HuntGroupOrgDefaultCustom) },
    { no: 4, name: "cell_phone_scrub", kind: "enum", T: proto3.getEnumType(HuntGroupOrgDefaultCustom) },
    { no: 5, name: "time_zone_restriction", kind: "enum", T: proto3.getEnumType(HuntGroupOrgDefaultCustom) },
    { no: 6, name: "time_zone_validation_postal_code", kind: "enum", T: proto3.getEnumType(ManualDialTimeZoneValidation) },
    { no: 7, name: "natural_compliance_scrub", kind: "message", T: NaturalLanguageComplianceScrub },
    { no: 8, name: "scrub_override", kind: "message", T: ManualDialSettings_ScrubOverride },
    { no: 9, name: "enable_whitelist", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "default_outbound_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 11, name: "display_outbound_country_selection", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "display_outbound_number_phone_book", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "default_caller_id_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 14, name: "display_caller_id_country_selection", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "display_caller_id_phone_book", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "enable_customizable_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "default_caller_id", kind: "message", T: ManualDialSettings_DefaultCallerId },
    { no: 18, name: "enable_caller_id_bucket", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "random_caller_id_bucket", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 20, name: "automate_random_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "enable_mask_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 22, name: "enable_sip_address", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "natural_language_compliance_metadata", kind: "message", T: NaturalLanguageComplianceMetadata },
    { no: 24, name: "data_dip_scope", kind: "enum", T: proto3.getEnumType(ManualDialDataDipScope) },
    { no: 25, name: "data_dip_config_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 26, name: "data_dip_result_handling", kind: "enum", T: proto3.getEnumType(ManualDialDataDipHandling) },
    { no: 27, name: "data_dip_integration_mappings", kind: "message", T: ManualDialSettings_DataDipIntegrationMapping, repeated: true },
    { no: 28, name: "data_dip_integration_handling", kind: "enum", T: proto3.getEnumType(ManualDialDataDipHandling) },
  ],
);

/**
 * Allow the agent to override scrub settings.
 *
 * @generated from message api.commons.org.ManualDialSettings.ScrubOverride
 */
export const ManualDialSettings_ScrubOverride = proto3.makeMessageType(
  "api.commons.org.ManualDialSettings.ScrubOverride",
  () => [
    { no: 1, name: "enable_dncl_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_cell_scrub_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "enable_time_zone_scrub_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "natural_compliance_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "ManualDialSettings_ScrubOverride"},
);

/**
 * DefaultCallerId: custom or "Agent Caller ID" and number (if needed).
 *
 * @generated from message api.commons.org.ManualDialSettings.DefaultCallerId
 */
export const ManualDialSettings_DefaultCallerId = proto3.makeMessageType(
  "api.commons.org.ManualDialSettings.DefaultCallerId",
  () => [
    { no: 1, name: "usage", kind: "enum", T: proto3.getEnumType(DefaultManualDialCallerId) },
    { no: 2, name: "custom_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ManualDialSettings_DefaultCallerId"},
);

/**
 * Describes a mapping of return keys to manual dial values.
 *
 * @generated from message api.commons.org.ManualDialSettings.DataDipIntegrationMapping
 */
export const ManualDialSettings_DataDipIntegrationMapping = proto3.makeMessageType(
  "api.commons.org.ManualDialSettings.DataDipIntegrationMapping",
  () => [
    { no: 1, name: "mapping_type", kind: "enum", T: proto3.getEnumType(ManualDialDataDipIntegration) },
    { no: 2, name: "data_dip_return_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contact_field_description_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "ManualDialSettings_DataDipIntegrationMapping"},
);

/**
 * Use Natural Language Compliance and rule set ID.
 *
 * @generated from message api.commons.org.NaturalLanguageComplianceScrub
 */
export const NaturalLanguageComplianceScrub = proto3.makeMessageType(
  "api.commons.org.NaturalLanguageComplianceScrub",
  () => [
    { no: 1, name: "compliance_scrub", kind: "enum", T: proto3.getEnumType(HuntGroupOrgDefaultCustom) },
    { no: 2, name: "rule_set_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Manual Dial natural compiance metadata options.
 *
 * @generated from message api.commons.org.NaturalLanguageComplianceMetadata
 */
export const NaturalLanguageComplianceMetadata = proto3.makeMessageType(
  "api.commons.org.NaturalLanguageComplianceMetadata",
  () => [
    { no: 1, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "optional_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "required_data", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * Caller ID Bucket Data includes bucket name and the related XML property SID.
 *
 * @generated from message api.commons.org.CallerIdBucketData
 */
export const CallerIdBucketData = proto3.makeMessageType(
  "api.commons.org.CallerIdBucketData",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "bucket_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TransferCallSettings is an entity containing the hunt group settings for the
 * Transfer Call section of the hunt group settings manager.
 *
 * @generated from message api.commons.org.TransferCallSettings
 */
export const TransferCallSettings = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings",
  () => [
    { no: 1, name: "enable_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "hand_off_types", kind: "message", T: TransferCallSettings_HandOffTypes },
    { no: 3, name: "recording_status", kind: "enum", T: proto3.getEnumType(TransferRecordingStatus) },
    { no: 4, name: "transfer_types", kind: "message", T: TransferCallSettings_TransferTypes },
    { no: 5, name: "display_transfer_number_phone_book", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "enable_transfer_number_editing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "default_transfer_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "start_recording_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "stop_recording_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "transfer_number_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 11, name: "display_transfer_country_selection", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "display_caller_id_phone_book", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "enable_caller_id_editing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "default_caller_id", kind: "message", T: TransferCallSettings_DefaultCallerId },
    { no: 15, name: "caller_id_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 16, name: "display_caller_id_country_selection", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "display_agent_transfer_filtering", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "default_agent_transfer_filtering", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "enable_hunt_group_filtering", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "requeue_queue_config", kind: "message", T: TransferCallSettings_RequeueQueueConfiguration },
    { no: 21, name: "requeue_transfer_disallowed", kind: "message", T: TransferCallSettings_RequeueTransferDisallowed },
    { no: 22, name: "pbx_transfer_disallowed", kind: "message", T: TransferCallSettings_PbxTransferDisallowed },
    { no: 23, name: "enable_scrub_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "enable_whitelist", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 25, name: "natural_compliance_scrub", kind: "message", T: NaturalLanguageComplianceScrub },
    { no: 26, name: "natural_language_compliance_metadata", kind: "message", T: NaturalLanguageComplianceMetadata },
  ],
);

/**
 * HandOffTypes indicates which Hand-off types the agent may use.
 *
 * @generated from message api.commons.org.TransferCallSettings.HandOffTypes
 */
export const TransferCallSettings_HandOffTypes = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.HandOffTypes",
  () => [
    { no: 1, name: "enable_conference", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_warm", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "enable_cold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "TransferCallSettings_HandOffTypes"},
);

/**
 * TransferTypes indicates which transfer types the agent may use.
 *
 * @generated from message api.commons.org.TransferCallSettings.TransferTypes
 */
export const TransferCallSettings_TransferTypes = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.TransferTypes",
  () => [
    { no: 1, name: "enable_agent_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_open_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "enable_requeue_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "enable_pbx_extension_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "enable_voicemail_transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "TransferCallSettings_TransferTypes"},
);

/**
 * RequeueTransferDisallowed if enabled, prohibits skills/hunt groups.
 *
 * @generated from message api.commons.org.TransferCallSettings.RequeueTransferDisallowed
 */
export const TransferCallSettings_RequeueTransferDisallowed = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.RequeueTransferDisallowed",
  () => [
    { no: 1, name: "enable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "agent_skill_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 3, name: "hunt_group_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
  {localName: "TransferCallSettings_RequeueTransferDisallowed"},
);

/**
 * PbxTransferDisallowed if enabled, prohibits these extensions.
 *
 * @generated from message api.commons.org.TransferCallSettings.PbxTransferDisallowed
 */
export const TransferCallSettings_PbxTransferDisallowed = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.PbxTransferDisallowed",
  () => [
    { no: 1, name: "enable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "extensions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "TransferCallSettings_PbxTransferDisallowed"},
);

/**
 * RequeueQueueConfiguration indicates which config to use on transfer.
 *
 * @generated from message api.commons.org.TransferCallSettings.RequeueQueueConfiguration
 */
export const TransferCallSettings_RequeueQueueConfiguration = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.RequeueQueueConfiguration",
  () => [
    { no: 1, name: "usage", kind: "enum", T: proto3.getEnumType(RequeueTransferQueueConfig) },
    { no: 2, name: "custom_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "TransferCallSettings_RequeueQueueConfiguration"},
);

/**
 * DefaultCallerId indicates custom or 3rd party and number (if needed).
 *
 * @generated from message api.commons.org.TransferCallSettings.DefaultCallerId
 */
export const TransferCallSettings_DefaultCallerId = proto3.makeMessageType(
  "api.commons.org.TransferCallSettings.DefaultCallerId",
  () => [
    { no: 1, name: "usage", kind: "enum", T: proto3.getEnumType(DefaultTransferCallerId) },
    { no: 2, name: "custom_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "TransferCallSettings_DefaultCallerId"},
);

/**
 * NumberHistorySettings is an entity containing the hunt group settings for the
 * Number History section of the hunt group settings manager.
 *
 * @generated from message api.commons.org.NumberHistorySettings
 */
export const NumberHistorySettings = proto3.makeMessageType(
  "api.commons.org.NumberHistorySettings",
  () => [
    { no: 1, name: "enable_search", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_report_download", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "enable_recordings_download", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "enable_agent_response_editing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Sets of rules that manage automatically adding responses to the DNCL
 *
 * @generated from message api.commons.org.AgentResponseAutoRuleSet
 */
export const AgentResponseAutoRuleSet = proto3.makeMessageType(
  "api.commons.org.AgentResponseAutoRuleSet",
  () => [
    { no: 1, name: "ruleset_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 5, name: "responses", kind: "message", T: AutoResponseChoice, repeated: true },
  ],
);

/**
 * An Agent Call Response with comparitors and duration
 *
 * @generated from message api.commons.org.AutoResponseChoice
 */
export const AutoResponseChoice = proto3.makeMessageType(
  "api.commons.org.AutoResponseChoice",
  () => [
    { no: 1, name: "agent_call_response", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "comparitors", kind: "message", T: AgentResponseComparitors, repeated: true },
  ],
);

/**
 * A list of agent entries and duration to use to determine addition to DNCL
 *
 * @generated from message api.commons.org.AgentResponseComparitors
 */
export const AgentResponseComparitors = proto3.makeMessageType(
  "api.commons.org.AgentResponseComparitors",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "expiration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

