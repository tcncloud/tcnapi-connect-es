// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/preferences.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { AdminClientPreferences, AgentPreferences, AuthenticationPreferences, BroadcastPreferences, BusinessPreferences, CompliancePreferences, ContactPreferences, DashboardPreferences, DashboardQueuePreferences, EmailSmsPreferences, EndOfDayPreferences, FilterPreferences, OrganizationPreferences, PhonePreferences, RecordingPreferences, SchedulePreferences, ScorecardsPreferences, VoiceAnalyticsPreferences, WebhookPreferences } from "../../commons/org/preferences_pb.js";

/**
 * Request for the GetOrganizationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetOrganizationPreferencesRequest
 */
export const GetOrganizationPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetOrganizationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetOrganizationPreferencesResponse
 */
export const GetOrganizationPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationPreferencesResponse",
  () => [
    { no: 1, name: "organization_preferences", kind: "message", T: OrganizationPreferences },
  ],
);

/**
 * Request for the UpdateOrganizationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationPreferencesRequest
 */
export const UpdateOrganizationPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateOrganizationPreferencesRequest",
  () => [
    { no: 1, name: "organization_preferences", kind: "message", T: OrganizationPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateOrganizationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationPreferencesResponse
 */
export const UpdateOrganizationPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateOrganizationPreferencesResponse",
  [],
);

/**
 * Request for the GetAgentPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAgentPreferencesRequest
 */
export const GetAgentPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAgentPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetAgentPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAgentPreferencesResponse
 */
export const GetAgentPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAgentPreferencesResponse",
  () => [
    { no: 1, name: "agent_preferences", kind: "message", T: AgentPreferences },
  ],
);

/**
 * Request for the UpdateAgentPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentPreferencesRequest
 */
export const UpdateAgentPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentPreferencesRequest",
  () => [
    { no: 1, name: "agent_preferences", kind: "message", T: AgentPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateAgentPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAgentPreferencesResponse
 */
export const UpdateAgentPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAgentPreferencesResponse",
  [],
);

/**
 * Request for the GetContactPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetContactPreferencesRequest
 */
export const GetContactPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetContactPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetContactPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetContactPreferencesResponse
 */
export const GetContactPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetContactPreferencesResponse",
  () => [
    { no: 1, name: "contact_preferences", kind: "message", T: ContactPreferences },
  ],
);

/**
 * Request for the UpdateContactPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateContactPreferencesRequest
 */
export const UpdateContactPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateContactPreferencesRequest",
  () => [
    { no: 1, name: "contact_preferences", kind: "message", T: ContactPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateContactPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateContactPreferencesResponse
 */
export const UpdateContactPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateContactPreferencesResponse",
  [],
);

/**
 * Request for the GetAuthenticationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAuthenticationPreferencesRequest
 */
export const GetAuthenticationPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAuthenticationPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetAuthenticationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAuthenticationPreferencesResponse
 */
export const GetAuthenticationPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAuthenticationPreferencesResponse",
  () => [
    { no: 1, name: "authentication_preferences", kind: "message", T: AuthenticationPreferences },
  ],
);

/**
 * Request for the UpdateAuthenticationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAuthenticationPreferencesRequest
 */
export const UpdateAuthenticationPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAuthenticationPreferencesRequest",
  () => [
    { no: 1, name: "authentication_preferences", kind: "message", T: AuthenticationPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateAuthenticationPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAuthenticationPreferencesResponse
 */
export const UpdateAuthenticationPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAuthenticationPreferencesResponse",
  [],
);

/**
 * Request for the GetWebhookPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetWebhookPreferencesRequest
 */
export const GetWebhookPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetWebhookPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetWebhookPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetWebhookPreferencesResponse
 */
export const GetWebhookPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetWebhookPreferencesResponse",
  () => [
    { no: 1, name: "webhook_preferences", kind: "message", T: WebhookPreferences },
  ],
);

/**
 * Request for the UpdateWebhookPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateWebhookPreferencesRequest
 */
export const UpdateWebhookPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateWebhookPreferencesRequest",
  () => [
    { no: 1, name: "webhook_preferences", kind: "message", T: WebhookPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateWebhookPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateWebhookPreferencesResponse
 */
export const UpdateWebhookPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateWebhookPreferencesResponse",
  [],
);

/**
 * Request for the GetDashboardGeneralPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetDashboardGeneralPreferencesRequest
 */
export const GetDashboardGeneralPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetDashboardGeneralPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetDashboardGeneralPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetDashboardGeneralPreferencesResponse
 */
export const GetDashboardGeneralPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetDashboardGeneralPreferencesResponse",
  () => [
    { no: 1, name: "dashboard_preferences", kind: "message", T: DashboardPreferences },
  ],
);

/**
 * Request for the UpdateDashboardGeneralPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest
 */
export const UpdateDashboardGeneralPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDashboardGeneralPreferencesRequest",
  () => [
    { no: 1, name: "dashboard_preferences", kind: "message", T: DashboardPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateDashboardGeneralPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse
 */
export const UpdateDashboardGeneralPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDashboardGeneralPreferencesResponse",
  [],
);

/**
 * Request for the GetDashboardQueuePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetDashboardQueuePreferencesRequest
 */
export const GetDashboardQueuePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetDashboardQueuePreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetDashboardQueuePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetDashboardQueuePreferencesResponse
 */
export const GetDashboardQueuePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetDashboardQueuePreferencesResponse",
  () => [
    { no: 1, name: "dashboard_queue_preferences", kind: "message", T: DashboardQueuePreferences },
  ],
);

/**
 * Request for the UpdateDashboardQueuePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest
 */
export const UpdateDashboardQueuePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDashboardQueuePreferencesRequest",
  () => [
    { no: 1, name: "dashboard_queue_preferences", kind: "message", T: DashboardQueuePreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Respons for the UpdateDashboardQueuePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse
 */
export const UpdateDashboardQueuePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateDashboardQueuePreferencesResponse",
  [],
);

/**
 * Request for the GetPhonePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetPhonePreferencesRequest
 */
export const GetPhonePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetPhonePreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetPhonePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetPhonePreferencesResponse
 */
export const GetPhonePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetPhonePreferencesResponse",
  () => [
    { no: 1, name: "phone_preferences", kind: "message", T: PhonePreferences },
  ],
);

/**
 * Request for the UpdatePhonePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdatePhonePreferencesRequest
 */
export const UpdatePhonePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdatePhonePreferencesRequest",
  () => [
    { no: 1, name: "phone_preferences", kind: "message", T: PhonePreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdatePhonePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdatePhonePreferencesResponse
 */
export const UpdatePhonePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdatePhonePreferencesResponse",
  [],
);

/**
 * Internal phone preferences entity only for interfacing with database.
 *
 * @generated from message api.v1alpha1.org.PhonePreferencesDB
 */
export const PhonePreferencesDB = proto3.makeMessageType(
  "api.v1alpha1.org.PhonePreferencesDB",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "phone_preferences_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request for the GetCompliancePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetCompliancePreferencesRequest
 */
export const GetCompliancePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetCompliancePreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetCompliancePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetCompliancePreferencesResponse
 */
export const GetCompliancePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetCompliancePreferencesResponse",
  () => [
    { no: 1, name: "compliance_preferences", kind: "message", T: CompliancePreferences },
  ],
);

/**
 * Request for the UpdateCompliancePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateCompliancePreferencesRequest
 */
export const UpdateCompliancePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateCompliancePreferencesRequest",
  () => [
    { no: 1, name: "compliance_preferences", kind: "message", T: CompliancePreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateCompliancePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateCompliancePreferencesResponse
 */
export const UpdateCompliancePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateCompliancePreferencesResponse",
  [],
);

/**
 * Request for the GetBroadcastPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetBroadcastPreferencesRequest
 */
export const GetBroadcastPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetBroadcastPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetBroadcastPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetBroadcastPreferencesResponse
 */
export const GetBroadcastPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetBroadcastPreferencesResponse",
  () => [
    { no: 1, name: "broadcast_preferences", kind: "message", T: BroadcastPreferences },
  ],
);

/**
 * Request for the UpdateBroadcastPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateBroadcastPreferencesRequest
 */
export const UpdateBroadcastPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateBroadcastPreferencesRequest",
  () => [
    { no: 1, name: "broadcast_preferences", kind: "message", T: BroadcastPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateBroadcastPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateBroadcastPreferencesResponse
 */
export const UpdateBroadcastPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateBroadcastPreferencesResponse",
  [],
);

/**
 * Request for the GetSchedulePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetSchedulePreferencesRequest
 */
export const GetSchedulePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetSchedulePreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetSchedulePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetSchedulePreferencesResponse
 */
export const GetSchedulePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetSchedulePreferencesResponse",
  () => [
    { no: 1, name: "schedule_preferences", kind: "message", T: SchedulePreferences },
  ],
);

/**
 * Request for the UpdateSchedulePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateSchedulePreferencesRequest
 */
export const UpdateSchedulePreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateSchedulePreferencesRequest",
  () => [
    { no: 1, name: "schedule_preferences", kind: "message", T: SchedulePreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateSchedulePreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateSchedulePreferencesResponse
 */
export const UpdateSchedulePreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateSchedulePreferencesResponse",
  [],
);

/**
 * Request for the GetEmailSmsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetEmailSmsPreferencesRequest
 */
export const GetEmailSmsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetEmailSmsPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetEmailSmsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetEmailSmsPreferencesResponse
 */
export const GetEmailSmsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetEmailSmsPreferencesResponse",
  () => [
    { no: 1, name: "email_sms_preferences", kind: "message", T: EmailSmsPreferences },
  ],
);

/**
 * Request for the UpdateEmailSmsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateEmailSmsPreferencesRequest
 */
export const UpdateEmailSmsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateEmailSmsPreferencesRequest",
  () => [
    { no: 1, name: "email_sms_preferences", kind: "message", T: EmailSmsPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateEmailSmsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateEmailSmsPreferencesResponse
 */
export const UpdateEmailSmsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateEmailSmsPreferencesResponse",
  [],
);

/**
 * Request for the GetBusinessPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetBusinessPreferencesRequest
 */
export const GetBusinessPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetBusinessPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetBusinessPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetBusinessPreferencesResponse
 */
export const GetBusinessPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetBusinessPreferencesResponse",
  () => [
    { no: 1, name: "business_preferences", kind: "message", T: BusinessPreferences },
  ],
);

/**
 * Request for the UpdateBusinessPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateBusinessPreferencesRequest
 */
export const UpdateBusinessPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateBusinessPreferencesRequest",
  () => [
    { no: 1, name: "business_preferences", kind: "message", T: BusinessPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateBusinessPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateBusinessPreferencesResponse
 */
export const UpdateBusinessPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateBusinessPreferencesResponse",
  [],
);

/**
 * Request for GetScorecardsPreferences
 *
 * @generated from message api.v1alpha1.org.GetScorecardsPreferencesRequest
 */
export const GetScorecardsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetScorecardsPreferencesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for GetScorecardsPreferences
 *
 * @generated from message api.v1alpha1.org.GetScorecardsPreferencesResponse
 */
export const GetScorecardsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetScorecardsPreferencesResponse",
  () => [
    { no: 1, name: "scorecards_preferences", kind: "message", T: ScorecardsPreferences },
  ],
);

/**
 * Request for UpdateScorecardsPreferences
 *
 * @generated from message api.v1alpha1.org.UpdateScorecardsPreferencesRequest
 */
export const UpdateScorecardsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateScorecardsPreferencesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "scorecards_preferences", kind: "message", T: ScorecardsPreferences },
    { no: 3, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for UpdateScorecardsPreferences
 *
 * @generated from message api.v1alpha1.org.UpdateScorecardsPreferencesResponse
 */
export const UpdateScorecardsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateScorecardsPreferencesResponse",
  [],
);

/**
 * Request for the GetVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest
 */
export const GetVoiceAnalyticsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetVoiceAnalyticsPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse
 */
export const GetVoiceAnalyticsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetVoiceAnalyticsPreferencesResponse",
  () => [
    { no: 1, name: "voice_analytics_preferences", kind: "message", T: VoiceAnalyticsPreferences },
  ],
);

/**
 * Request for the ListVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest
 */
export const ListVoiceAnalyticsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListVoiceAnalyticsPreferencesRequest",
  [],
);

/**
 * Response for the ListVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse
 */
export const ListVoiceAnalyticsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListVoiceAnalyticsPreferencesResponse",
  () => [
    { no: 1, name: "voice_analytics_preferences", kind: "message", T: VoiceAnalyticsPreferences, repeated: true },
  ],
);

/**
 * Request for the UpdateVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest
 */
export const UpdateVoiceAnalyticsPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesRequest",
  () => [
    { no: 1, name: "voice_analytics_preferences", kind: "message", T: VoiceAnalyticsPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateVoiceAnalyticsPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse
 */
export const UpdateVoiceAnalyticsPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateVoiceAnalyticsPreferencesResponse",
  [],
);

/**
 * Request for the GetEndOfDayPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetEndOfDayPreferencesRequest
 */
export const GetEndOfDayPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetEndOfDayPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetEndOfDayPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetEndOfDayPreferencesResponse
 */
export const GetEndOfDayPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetEndOfDayPreferencesResponse",
  () => [
    { no: 1, name: "end_of_day_preferences", kind: "message", T: EndOfDayPreferences },
  ],
);

/**
 * Request for the UpdateEndOfDayPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateEndOfDayPreferencesRequest
 */
export const UpdateEndOfDayPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateEndOfDayPreferencesRequest",
  () => [
    { no: 1, name: "end_of_day_preferences", kind: "message", T: EndOfDayPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateEndOfDayPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateEndOfDayPreferencesResponse
 */
export const UpdateEndOfDayPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateEndOfDayPreferencesResponse",
  [],
);

/**
 * Request for the GetFilterPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetFilterPreferencesRequest
 */
export const GetFilterPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetFilterPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetFilterPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetFilterPreferencesResponse
 */
export const GetFilterPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetFilterPreferencesResponse",
  () => [
    { no: 1, name: "filter_preferences", kind: "message", T: FilterPreferences },
  ],
);

/**
 * Request for the UpdateFilterPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateFilterPreferencesRequest
 */
export const UpdateFilterPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateFilterPreferencesRequest",
  () => [
    { no: 1, name: "filter_preferences", kind: "message", T: FilterPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateFilterPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateFilterPreferencesResponse
 */
export const UpdateFilterPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateFilterPreferencesResponse",
  [],
);

/**
 * Request for the GetRecordingPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetRecordingPreferencesRequest
 */
export const GetRecordingPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetRecordingPreferencesRequest",
  () => [
    { no: 1, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetRecordingPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetRecordingPreferencesResponse
 */
export const GetRecordingPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetRecordingPreferencesResponse",
  () => [
    { no: 1, name: "recording_preferences", kind: "message", T: RecordingPreferences },
  ],
);

/**
 * Request for the UpdateRecordingPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateRecordingPreferencesRequest
 */
export const UpdateRecordingPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateRecordingPreferencesRequest",
  () => [
    { no: 1, name: "recording_preferences", kind: "message", T: RecordingPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateRecordingPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateRecordingPreferencesResponse
 */
export const UpdateRecordingPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateRecordingPreferencesResponse",
  [],
);

/**
 * Request for the GetAdminClientPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAdminClientPreferencesRequest
 */
export const GetAdminClientPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAdminClientPreferencesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the GetAdminClientPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.GetAdminClientPreferencesResponse
 */
export const GetAdminClientPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAdminClientPreferencesResponse",
  () => [
    { no: 1, name: "admin_client_preferences", kind: "message", T: AdminClientPreferences },
  ],
);

/**
 * Request for the UpdateAdminClientPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAdminClientPreferencesRequest
 */
export const UpdateAdminClientPreferencesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAdminClientPreferencesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "admin_client_preferences", kind: "message", T: AdminClientPreferences },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response for the UpdateAdminClientPreferences RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateAdminClientPreferencesResponse
 */
export const UpdateAdminClientPreferencesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateAdminClientPreferencesResponse",
  [],
);

/**
 * Request for accepting linkback recording terms agreement.
 *
 * @generated from message api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest
 */
export const AcceptLinkbackRecordingTermsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AcceptLinkbackRecordingTermsRequest",
  [],
);

/**
 * Response for accepting linkback recording terms agreement.
 *
 * @generated from message api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse
 */
export const AcceptLinkbackRecordingTermsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AcceptLinkbackRecordingTermsResponse",
  [],
);

/**
 * Request for updating broadcast template 'Record' property.
 *
 * @generated from message api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest
 */
export const LinkbackUpdateBroadcastTemplatesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesRequest",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Response for updating broadcast template 'Record' property.
 *
 * @generated from message api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse
 */
export const LinkbackUpdateBroadcastTemplatesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.LinkbackUpdateBroadcastTemplatesResponse",
  [],
);

/**
 * Request for recording email unsubscribe acknowledgement.
 *
 * @generated from message api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest
 */
export const RecordEmailUnsubscribeAcknowledgementRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementRequest",
  [],
);

/**
 * Response for recording email unsubscribe acknowledgement.
 *
 * @generated from message api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse
 */
export const RecordEmailUnsubscribeAcknowledgementResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RecordEmailUnsubscribeAcknowledgementResponse",
  [],
);

/**
 * Request for clearing email unsubscribe acknowledgement.
 *
 * @generated from message api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest
 */
export const ClearEmailUnsubscribeAcknowledgementRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementRequest",
  [],
);

/**
 * Response for clearing email unsubscribe acknowledgement.
 *
 * @generated from message api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse
 */
export const ClearEmailUnsubscribeAcknowledgementResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ClearEmailUnsubscribeAcknowledgementResponse",
  [],
);

