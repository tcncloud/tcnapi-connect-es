// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/org/preferences.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Country } from "../country_pb.js";
import { AgentInfoSortBy, DefaultDuplicateHandling, DisplayLanguage, QueueInfoSortBy, RecordingFileType, StandardImportFormat, TimeZone } from "../org_pb.js";
import { AnsweringMachineDetection, BroadcastTemplateOrdering, ScheduleByTimeZoneScope, StandardReportFilter } from "../org_preferences_pb.js";
import { DialOrderType } from "../lms_pb.js";
import { AnaTimeZone } from "../ana_pb.js";

/**
 * General preferences controlling organization properties.
 *
 * @generated from message api.commons.org.OrganizationPreferences
 */
export const OrganizationPreferences = proto3.makeMessageType(
  "api.commons.org.OrganizationPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_country", kind: "enum", T: proto3.getEnumType(Country) },
    { no: 11, name: "time_zone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 12, name: "display_language", kind: "enum", T: proto3.getEnumType(DisplayLanguage) },
  ],
);

/**
 * Preferences controlling direct agent properties.
 *
 * @generated from message api.commons.org.AgentPreferences
 */
export const AgentPreferences = proto3.makeMessageType(
  "api.commons.org.AgentPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_agent_dial_in", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "pbx_extension_length", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "default_softphone_volume_in", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "default_softphone_volume_out", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 14, name: "config_dial_in_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 15, name: "client_dial_in_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 16, name: "manual_dial_caller_id_privacy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "use_manual_dial_caller_id_privacy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Preferences for contact lists.
 *
 * @generated from message api.commons.org.ContactPreferences
 */
export const ContactPreferences = proto3.makeMessageType(
  "api.commons.org.ContactPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_contact_import_format", kind: "message", T: ImportFormat },
    { no: 11, name: "use_contact_import_format", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "default_contact_area_code", kind: "message", T: ContactAreaCode },
    { no: 13, name: "use_contact_area_code", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "discard_record_default_absent_numbers_handling", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "default_contacts_import_randomization", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "default_email_column", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "default_duplicate_handling", kind: "enum", T: proto3.getEnumType(DefaultDuplicateHandling) },
  ],
);

/**
 * Contact import template type.
 *
 * @generated from message api.commons.org.ImportFormat
 */
export const ImportFormat = proto3.makeMessageType(
  "api.commons.org.ImportFormat",
  () => [
    { no: 1, name: "standard", kind: "enum", T: proto3.getEnumType(StandardImportFormat), oneof: "format" },
    { no: 2, name: "custom", kind: "message", T: CustomImportFormat, oneof: "format" },
  ],
);

/**
 * Contact import format properties.
 *
 * @generated from message api.commons.org.CustomImportFormat
 */
export const CustomImportFormat = proto3.makeMessageType(
  "api.commons.org.CustomImportFormat",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Contact area code type.
 *
 * @generated from message api.commons.org.ContactAreaCode
 */
export const ContactAreaCode = proto3.makeMessageType(
  "api.commons.org.ContactAreaCode",
  () => [
    { no: 1, name: "cfd", kind: "message", T: ContactFieldDescription, oneof: "area_code" },
    { no: 2, name: "custom", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "area_code" },
  ],
);

/**
 * Contact field description information.
 *
 * @generated from message api.commons.org.ContactFieldDescription
 */
export const ContactFieldDescription = proto3.makeMessageType(
  "api.commons.org.ContactFieldDescription",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "field_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_phone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "display_format_string", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for controlling the organization's authentication properties.
 *
 * @generated from message api.commons.org.AuthenticationPreferences
 */
export const AuthenticationPreferences = proto3.makeMessageType(
  "api.commons.org.AuthenticationPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "authorization_via_ip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "allowed_ips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "agent_api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "enable_2fa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "block_unverified_users", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Preferences for web-hook push URLs.
 *
 * @generated from message api.commons.org.WebhookPreferences
 */
export const WebhookPreferences = proto3.makeMessageType(
  "api.commons.org.WebhookPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "push_urls_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "call_result_push_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "agent_response_push_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for agent dashboard controls.
 *
 * @generated from message api.commons.org.DashboardPreferences
 */
export const DashboardPreferences = proto3.makeMessageType(
  "api.commons.org.DashboardPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_info_view", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "default_table_inclusion", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "default_info_grouping", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "default_small_icon", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "default_descending_sort", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "table_template_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "default_call_types", kind: "message", T: IncludedCallTypes },
    { no: 17, name: "default_info_sort_by_value", kind: "enum", T: proto3.getEnumType(AgentInfoSortBy) },
    { no: 18, name: "default_barge_in_filtering", kind: "message", T: BargeInFiltering },
  ],
);

/**
 * Included call types.
 *
 * @generated from message api.commons.org.IncludedCallTypes
 */
export const IncludedCallTypes = proto3.makeMessageType(
  "api.commons.org.IncludedCallTypes",
  () => [
    { no: 1, name: "outbound", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "inbound", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "manual_dial", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "preview_dial", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Barge-in filtering properties.
 *
 * @generated from message api.commons.org.BargeInFiltering
 */
export const BargeInFiltering = proto3.makeMessageType(
  "api.commons.org.BargeInFiltering",
  () => [
    { no: 1, name: "hunt_group", kind: "message", T: BargeInFiltering_HuntGroup },
    { no: 2, name: "agent_status", kind: "message", T: BargeInFiltering_AgentStatus },
  ],
);

/**
 * @generated from message api.commons.org.BargeInFiltering.HuntGroup
 */
export const BargeInFiltering_HuntGroup = proto3.makeMessageType(
  "api.commons.org.BargeInFiltering.HuntGroup",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "BargeInFiltering_HuntGroup"},
);

/**
 * @generated from message api.commons.org.BargeInFiltering.AgentStatus
 */
export const BargeInFiltering_AgentStatus = proto3.makeMessageType(
  "api.commons.org.BargeInFiltering.AgentStatus",
  () => [
    { no: 1, name: "any", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "waiting", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "on_call", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "wrap_up", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "transfer", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "preview", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "manual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "pbx", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "intercom", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "BargeInFiltering_AgentStatus"},
);

/**
 * Preferences for controlling agent queue and hold table settings.
 *
 * @generated from message api.commons.org.DashboardQueuePreferences
 */
export const DashboardQueuePreferences = proto3.makeMessageType(
  "api.commons.org.DashboardQueuePreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_info_view", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "default_info_grouping", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "default_small_icon", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "default_descending_sort", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "default_agent_skills_filter", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "default_info_table_template", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "default_info_sort_by_value", kind: "enum", T: proto3.getEnumType(QueueInfoSortBy) },
  ],
);

/**
 * Preferences for phone dial options, call ID, and other call properties.
 *
 * @generated from message api.commons.org.PhonePreferences
 */
export const PhonePreferences = proto3.makeMessageType(
  "api.commons.org.PhonePreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "agent_preview_dialing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "default_ring_length_threshold", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "display_ring_length_threshold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "show_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "default_use_caller_id", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "override_linkback_recording", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "caller_id_cfd_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "default_dial_order", kind: "message", T: DialOrder },
    { no: 18, name: "answering_machine_detection", kind: "enum", T: proto3.getEnumType(AnsweringMachineDetection) },
    { no: 19, name: "linkback_recording", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Dial order holds either a type enum, or one or more contact field
 * description fields for custom order.
 *
 * @generated from message api.commons.org.DialOrder
 */
export const DialOrder = proto3.makeMessageType(
  "api.commons.org.DialOrder",
  () => [
    { no: 1, name: "standard", kind: "enum", T: proto3.getEnumType(DialOrderType), oneof: "type" },
    { no: 2, name: "custom", kind: "message", T: CustomDialOrder, oneof: "type" },
  ],
);

/**
 * Custom dial order fields holds one or more contact field descriptions to
 * indicate which fields in a contact record, and the order.
 *
 * @generated from message api.commons.org.CustomDialOrder
 */
export const CustomDialOrder = proto3.makeMessageType(
  "api.commons.org.CustomDialOrder",
  () => [
    { no: 1, name: "dial_order_fields", kind: "message", T: DialOrderField, repeated: true },
  ],
);

/**
 * Dial order field holds the ID for saving into preferences and the name
 * for display.
 *
 * @generated from message api.commons.org.DialOrderField
 */
export const DialOrderField = proto3.makeMessageType(
  "api.commons.org.DialOrderField",
  () => [
    { no: 1, name: "cfd_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "field_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for natural language compliance campaign settings.
 *
 * @generated from message api.commons.org.CompliancePreferences
 */
export const CompliancePreferences = proto3.makeMessageType(
  "api.commons.org.CompliancePreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "display_after_hours_calls", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "after_hours_calls", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "display_natural_compliance", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "use_natural_compliance", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "default_compliance_rule_set", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "display_cell_phone_scrub", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "cell_phone_scrub", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "display_schedule_rules", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "use_schedule_rules", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "default_schedule_rule", kind: "message", T: ScheduleRuleField },
    { no: 20, name: "do_zip_code_scrub", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "zip_code_scrub", kind: "message", T: ZipCodeField },
    { no: 22, name: "default_email_compliance_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "default_sms_compliance_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Compliance schedule rule field properties.
 *
 * @generated from message api.commons.org.ScheduleRuleField
 */
export const ScheduleRuleField = proto3.makeMessageType(
  "api.commons.org.ScheduleRuleField",
  () => [
    { no: 1, name: "rule_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ZIP/postal code scrubbing properties.
 *
 * @generated from message api.commons.org.ZipCodeField
 */
export const ZipCodeField = proto3.makeMessageType(
  "api.commons.org.ZipCodeField",
  () => [
    { no: 1, name: "cfd_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "field_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for editing templates and broadcast scheduling properties.
 *
 * @generated from message api.commons.org.BroadcastPreferences
 */
export const BroadcastPreferences = proto3.makeMessageType(
  "api.commons.org.BroadcastPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "display_list_penetration_strategy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "dial_list_penetration_strategy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "display_follow_the_sun", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "follow_the_sun", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "sequence_terminator_override", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "broadcast_template_ordering", kind: "enum", T: proto3.getEnumType(BroadcastTemplateOrdering) },
    { no: 16, name: "start_time_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "default_start_time", kind: "message", T: BroadcastTime },
    { no: 18, name: "stop_time_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "default_stop_time", kind: "message", T: BroadcastTime },
  ],
);

/**
 * Broadcast start/stop time properties.
 *
 * @generated from message api.commons.org.BroadcastTime
 */
export const BroadcastTime = proto3.makeMessageType(
  "api.commons.org.BroadcastTime",
  () => [
    { no: 1, name: "hours", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "timezone", kind: "enum", T: proto3.getEnumType(TimeZone) },
  ],
);

/**
 * Preferences for editing campaign scheduling properties.
 *
 * @generated from message api.commons.org.SchedulePreferences
 */
export const SchedulePreferences = proto3.makeMessageType(
  "api.commons.org.SchedulePreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "display_schedule_by_time_zone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "use_schedule_by_time_zone", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "schedule_by_time_zone_scope", kind: "enum", T: proto3.getEnumType(ScheduleByTimeZoneScope) },
    { no: 13, name: "display_schedule_as_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "schedule_as_paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "default_completion_threshold", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "display_campaign_linking", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "use_campaign_linking", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "campaign_links", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 19, name: "default_campaign_link_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "resend_cancelled_campaigns", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Preferences for email and SMS management.
 *
 * @generated from message api.commons.org.EmailSmsPreferences
 */
export const EmailSmsPreferences = proto3.makeMessageType(
  "api.commons.org.EmailSmsPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "use_custom_links", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "client_acknowledgement", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "email_from_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Preferences for business intelligence settings/controls in analytics.
 *
 * @generated from message api.commons.org.BusinessPreferences
 */
export const BusinessPreferences = proto3.makeMessageType(
  "api.commons.org.BusinessPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "weeks_of_data", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "time_zone", kind: "enum", T: proto3.getEnumType(AnaTimeZone) },
    { no: 12, name: "multi_client_access", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "custom_visualizations", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "time_filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for scorecards management and evaluation.
 *
 * @generated from message api.commons.org.ScorecardsPreferences
 */
export const ScorecardsPreferences = proto3.makeMessageType(
  "api.commons.org.ScorecardsPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "call_sample_percentage", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "max_user_evaluations", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "evaluation_interval", kind: "enum", T: proto3.getEnumType(Scorecards_EvaluationInterval) },
  ],
);

/**
 * Scorecards properties.
 *
 * @generated from message api.commons.org.Scorecards
 */
export const Scorecards = proto3.makeMessageType(
  "api.commons.org.Scorecards",
  [],
);

/**
 * EvaluationsInterval enumerates common time periods for evaluations.
 *
 * @generated from enum api.commons.org.Scorecards.EvaluationInterval
 */
export const Scorecards_EvaluationInterval = proto3.makeEnum(
  "api.commons.org.Scorecards.EvaluationInterval",
  [
    {no: 0, name: "EVALUATION_INTERVAL_DAY_UNSPECIFIED", localName: "DAY_UNSPECIFIED"},
    {no: 1, name: "EVALUATION_INTERVAL_WEEK", localName: "WEEK"},
    {no: 2, name: "EVALUATION_INTERVAL_MONTH", localName: "MONTH"},
  ],
);

/**
 * Preferences for voice analytics. Primarily consumed and interpreted by
 * localmixer when mixing and transcribing call recordings.
 *
 * @generated from message api.commons.org.VoiceAnalyticsPreferences
 */
export const VoiceAnalyticsPreferences = proto3.makeMessageType(
  "api.commons.org.VoiceAnalyticsPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "redact", kind: "message", T: VoiceAnalytics_Redact, repeated: true },
    { no: 4, name: "notify", kind: "message", T: VoiceAnalytics_Notify },
    { no: 5, name: "billing_notify", kind: "message", T: VoiceAnalytics_Notify },
    { no: 6, name: "number_format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "redact_all_digits", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 100, name: "silence_threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 200, name: "talk_over_threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * Namespace for voice analytics messages.
 *
 * @generated from message api.commons.org.VoiceAnalytics
 */
export const VoiceAnalytics = proto3.makeMessageType(
  "api.commons.org.VoiceAnalytics",
  [],
);

/**
 * @generated from message api.commons.org.VoiceAnalytics.Redact
 */
export const VoiceAnalytics_Redact = proto3.makeMessageType(
  "api.commons.org.VoiceAnalytics.Redact",
  () => [
    { no: 1, name: "number", kind: "message", T: VoiceAnalytics_Number, oneof: "where" },
  ],
  {localName: "VoiceAnalytics_Redact"},
);

/**
 * @generated from message api.commons.org.VoiceAnalytics.Number
 */
export const VoiceAnalytics_Number = proto3.makeMessageType(
  "api.commons.org.VoiceAnalytics.Number",
  () => [
    { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(VoiceAnalytics_Number_Kind) },
    { no: 2, name: "min_consecutive", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "max_consecutive", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "slop", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "VoiceAnalytics_Number"},
);

/**
 * @generated from enum api.commons.org.VoiceAnalytics.Number.Kind
 */
export const VoiceAnalytics_Number_Kind = proto3.makeEnum(
  "api.commons.org.VoiceAnalytics.Number.Kind",
  [
    {no: 0, name: "KIND_CARDINAL_UNSPECIFIED", localName: "CARDINAL_UNSPECIFIED"},
    {no: 1, name: "KIND_ORDINAL", localName: "ORDINAL"},
    {no: 2, name: "KIND_ANY", localName: "ANY"},
  ],
);

/**
 * @generated from message api.commons.org.VoiceAnalytics.Notify
 */
export const VoiceAnalytics_Notify = proto3.makeMessageType(
  "api.commons.org.VoiceAnalytics.Notify",
  () => [
    { no: 1, name: "cron", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "VoiceAnalytics_Notify"},
);

/**
 * Preferences for automated report jobs end-of-day delivery times.
 *
 * @generated from message api.commons.org.EndOfDayPreferences
 */
export const EndOfDayPreferences = proto3.makeMessageType(
  "api.commons.org.EndOfDayPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "eod_monday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "eod_tuesday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "eod_wednesday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "eod_thursday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 14, name: "eod_friday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "eod_saturday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 16, name: "eod_sunday", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Preferences for filters in reports and broadcasts.
 *
 * @generated from message api.commons.org.FilterPreferences
 */
export const FilterPreferences = proto3.makeMessageType(
  "api.commons.org.FilterPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "default_auto_report_filter", kind: "message", T: ReportFilter },
    { no: 11, name: "send_empty_auto_reports", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "display_broadcast_resend_filter", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "default_broadcast_resend_filter", kind: "message", T: ReportFilter },
  ],
);

/**
 * Report filter properties.
 *
 * @generated from message api.commons.org.ReportFilter
 */
export const ReportFilter = proto3.makeMessageType(
  "api.commons.org.ReportFilter",
  () => [
    { no: 1, name: "standard", kind: "enum", T: proto3.getEnumType(StandardReportFilter), oneof: "choice" },
    { no: 2, name: "custom", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "choice" },
  ],
);

/**
 * Preferences for audio recording properties.
 *
 * @generated from message api.commons.org.RecordingPreferences
 */
export const RecordingPreferences = proto3.makeMessageType(
  "api.commons.org.RecordingPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "convention_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "file_name_convention", kind: "message", T: RecordingsFileNamingConvention },
    { no: 12, name: "zip_convention_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "zip_file_name_convention", kind: "message", T: RecordingsZipFileNamingConvention },
    { no: 14, name: "export_file_type", kind: "enum", T: proto3.getEnumType(RecordingFileType) },
  ],
);

/**
 * Recording file naming convention properties (per call type).
 *
 * @generated from message api.commons.org.RecordingsFileNamingConvention
 */
export const RecordingsFileNamingConvention = proto3.makeMessageType(
  "api.commons.org.RecordingsFileNamingConvention",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "inbound", kind: "message", T: FileNamingConvention },
    { no: 3, name: "manual", kind: "message", T: FileNamingConvention },
    { no: 4, name: "outbound", kind: "message", T: FileNamingConvention },
    { no: 5, name: "preview", kind: "message", T: FileNamingConvention },
  ],
);

/**
 * Recording file naming convention properties for compressed call recordings.
 *
 * @generated from message api.commons.org.RecordingsZipFileNamingConvention
 */
export const RecordingsZipFileNamingConvention = proto3.makeMessageType(
  "api.commons.org.RecordingsZipFileNamingConvention",
  () => [
    { no: 1, name: "xml_client_property_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "inbound", kind: "message", T: FileNamingConvention },
    { no: 3, name: "manual", kind: "message", T: FileNamingConvention },
    { no: 4, name: "outbound", kind: "message", T: FileNamingConvention },
    { no: 5, name: "combined", kind: "message", T: FileNamingConvention },
  ],
);

/**
 * File naming convention properties containing name segments.
 *
 * @generated from message api.commons.org.FileNamingConvention
 */
export const FileNamingConvention = proto3.makeMessageType(
  "api.commons.org.FileNamingConvention",
  () => [
    { no: 1, name: "segments", kind: "message", T: FileNameSegment, repeated: true },
  ],
);

/**
 * File name segment type and attributes.
 *
 * @generated from message api.commons.org.FileNameSegment
 */
export const FileNameSegment = proto3.makeMessageType(
  "api.commons.org.FileNameSegment",
  () => [
    { no: 1, name: "segment_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "format_pattern", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "time_zone_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Preferences for essential organization properties only to be used by
 * account managers and customer support.
 *
 * @generated from message api.commons.org.AdminClientPreferences
 */
export const AdminClientPreferences = proto3.makeMessageType(
  "api.commons.org.AdminClientPreferences",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "use_reserved_carrier", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "reserved_carriers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "email_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "email_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "email_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "whitelist_ips", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 16, name: "whitelist_domains", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 17, name: "callbacks_service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "agent_screen_recording", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "allowed_countries", kind: "enum", T: proto3.getEnumType(Country), repeated: true },
  ],
);

/**
 * BusinessHours or operating hours.
 *
 * @generated from message api.commons.org.BusinessHours
 */
export const BusinessHours = proto3.makeMessageType(
  "api.commons.org.BusinessHours",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ranges", kind: "message", T: Range, repeated: true },
  ],
);

/**
 * Range including start and end times.
 *
 * @generated from message api.commons.org.Range
 */
export const Range = proto3.makeMessageType(
  "api.commons.org.Range",
  () => [
    { no: 1, name: "start_hour", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "start_minute", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "end_hour", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "end_minute", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

