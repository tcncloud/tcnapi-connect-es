// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/auth/perms.proto (package api.commons.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Permission enum contains the permissions to be used for access control.
 *
 * @generated from enum api.commons.auth.Permission
 */
export const Permission = proto3.makeEnum(
  "api.commons.auth.Permission",
  [
    {no: 0, name: "PERMISSION_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PERMISSION_DEV", localName: "DEV"},
    {no: 10, name: "PERMISSION_LEARN_EDIT", localName: "LEARN_EDIT"},
    {no: 100, name: "PERMISSION_ORG_EDIT", localName: "ORG_EDIT"},
    {no: 101, name: "PERMISSION_ORG_VIEW", localName: "ORG_VIEW"},
    {no: 130, name: "PERMISSION_OWNING_ORG_IMITATION", localName: "OWNING_ORG_IMITATION"},
    {no: 118, name: "PERMISSION_USER_CREATE", localName: "USER_CREATE"},
    {no: 119, name: "PERMISSION_USER_EDIT", localName: "USER_EDIT"},
    {no: 120, name: "PERMISSION_USER_EDIT_PASSWORD", localName: "USER_EDIT_PASSWORD"},
    {no: 121, name: "PERMISSION_USER_EDIT_OPTIONS", localName: "USER_EDIT_OPTIONS"},
    {no: 260, name: "PERMISSION_LOGIN_CONNECTIONS", localName: "LOGIN_CONNECTIONS"},
    {no: 122, name: "PERMISSION_USER_EDIT_AGENT_CALLER_ID", localName: "USER_EDIT_AGENT_CALLER_ID"},
    {no: 400, name: "PERMISSION_AGENT_MANAGEMENT", localName: "AGENT_MANAGEMENT"},
    {no: 110, name: "PERMISSION_PERMISSION_GROUP_EDIT", localName: "PERMISSION_GROUP_EDIT"},
    {no: 111, name: "PERMISSION_PERMISSION_GROUP_ASSIGN", localName: "PERMISSION_GROUP_ASSIGN"},
    {no: 150, name: "PERMISSION_LABEL_MANAGEMENT", localName: "LABEL_MANAGEMENT"},
    {no: 160, name: "PERMISSION_TRUST_MANAGEMENT", localName: "TRUST_MANAGEMENT"},
    {no: 1900, name: "PERMISSION_HUNTGROUP_VIEW", localName: "HUNTGROUP_VIEW"},
    {no: 1901, name: "PERMISSION_HUNTGROUP_EDIT", localName: "HUNTGROUP_EDIT"},
    {no: 1700, name: "PERMISSION_SOUNDBOARD_VIEW", localName: "SOUNDBOARD_VIEW"},
    {no: 1701, name: "PERMISSION_SOUNDBOARD_EDIT", localName: "SOUNDBOARD_EDIT"},
    {no: 140, name: "PERMISSION_SUBSCRIPTION_MANAGEMENT", localName: "SUBSCRIPTION_MANAGEMENT"},
    {no: 200, name: "PERMISSION_CUSTOMER_SUPPORT", localName: "CUSTOMER_SUPPORT"},
    {no: 210, name: "PERMISSION_IMITATION", localName: "IMITATION"},
    {no: 220, name: "PERMISSION_BILLING_EDIT", localName: "BILLING_EDIT"},
    {no: 230, name: "PERMISSION_TCN_ADMIN_SETTINGS", localName: "TCN_ADMIN_SETTINGS"},
    {no: 240, name: "PERMISSION_TCN_BILLING", localName: "TCN_BILLING"},
    {no: 241, name: "PERMISSION_TCN_BILLING_ADMIN", localName: "TCN_BILLING_ADMIN"},
    {no: 300, name: "PERMISSION_AGENT", localName: "AGENT"},
    {no: 310, name: "PERMISSION_ACCEPT_QUEUED_CALLS", localName: "ACCEPT_QUEUED_CALLS"},
    {no: 320, name: "PERMISSION_VIEW_CAMPAIGN_COMPLETION", localName: "VIEW_CAMPAIGN_COMPLETION"},
    {no: 321, name: "PERMISSION_VIEW_VOICE_MAIL", localName: "VIEW_VOICE_MAIL"},
    {no: 330, name: "PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS", localName: "AGENT_COMPLIANCE_SCRUBLIST_OPTIONS"},
    {no: 1400, name: "PERMISSION_EXTENSION_EDIT", localName: "EXTENSION_EDIT"},
    {no: 1401, name: "PERMISSION_VOICEMAIL_DOWNLOAD", localName: "VOICEMAIL_DOWNLOAD"},
    {no: 340, name: "PERMISSION_AGENT_PORTALS_VIEW", localName: "AGENT_PORTALS_VIEW"},
    {no: 500, name: "PERMISSION_VOICE_ANALYTICS", localName: "VOICE_ANALYTICS"},
    {no: 501, name: "PERMISSION_VOICE_ANALYTICS_FLAG", localName: "VOICE_ANALYTICS_FLAG"},
    {no: 502, name: "PERMISSION_VOICE_ANALYTICS_CONFIG", localName: "VOICE_ANALYTICS_CONFIG"},
    {no: 503, name: "PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD", localName: "VOICE_ANALYTICS_RECORDING_DOWNLOAD"},
    {no: 504, name: "PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD", localName: "VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD"},
    {no: 505, name: "PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING", localName: "VOICE_ANALYTICS_SCREEN_RECORDING"},
    {no: 506, name: "PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE", localName: "VOICE_ANALYTICS_TRANSCRIPT_DELETE"},
    {no: 507, name: "PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE", localName: "VOICE_ANALYTICS_SCREEN_RECORDING_DELETE"},
    {no: 600, name: "PERMISSION_BUSINESS_INTELLIGENCE", localName: "BUSINESS_INTELLIGENCE"},
    {no: 601, name: "PERMISSION_DASHBOARDS_VIEW", localName: "DASHBOARDS_VIEW"},
    {no: 602, name: "PERMISSION_DASHBOARDS_EDIT", localName: "DASHBOARDS_EDIT"},
    {no: 603, name: "PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE", localName: "INSIGHTS_COMMON_LIBRARY_MANAGE"},
    {no: 604, name: "PERMISSION_INSIGHTS_MANAGE", localName: "INSIGHTS_MANAGE"},
    {no: 700, name: "PERMISSION_ROOM303", localName: "ROOM303"},
    {no: 800, name: "PERMISSION_AGENT_CALL_SCRIPTS", localName: "AGENT_CALL_SCRIPTS"},
    {no: 900, name: "PERMISSION_COMPLIANCE", localName: "COMPLIANCE"},
    {no: 910, name: "PERMISSION_COMPLIANCE_CONSENT", localName: "COMPLIANCE_CONSENT"},
    {no: 1000, name: "PERMISSION_LMS_VIEW", localName: "LMS_VIEW"},
    {no: 1001, name: "PERMISSION_LMS_EDIT", localName: "LMS_EDIT"},
    {no: 1200, name: "PERMISSION_OMNI_BOSS", localName: "OMNI_BOSS"},
    {no: 1210, name: "PERMISSION_OMNI_PORTALS_VIEW", localName: "OMNI_PORTALS_VIEW"},
    {no: 1300, name: "PERMISSION_INTEGRATIONS_VIEW", localName: "INTEGRATIONS_VIEW"},
    {no: 1301, name: "PERMISSION_INTEGRATIONS_PAYMENT", localName: "INTEGRATIONS_PAYMENT"},
    {no: 1302, name: "PERMISSION_INTEGRATIONS_JOURNEY", localName: "INTEGRATIONS_JOURNEY"},
    {no: 1500, name: "PERMISSION_WFM", localName: "WFM"},
    {no: 1600, name: "PERMISSION_SCORECARDS", localName: "SCORECARDS"},
    {no: 1601, name: "PERMISSION_SCORECARDS_MANAGE", localName: "SCORECARDS_MANAGE"},
    {no: 1602, name: "PERMISSION_SCORECARDS_EVALUATE", localName: "SCORECARDS_EVALUATE"},
    {no: 1603, name: "PERMISSION_SCORECARDS_FLAG_EVAL", localName: "SCORECARDS_FLAG_EVAL"},
    {no: 1800, name: "PERMISSION_DEV_TOOLS", localName: "DEV_TOOLS"},
    {no: 2000, name: "PERMISSION_DELIVERY_NOTIFICATIONS_VIEW", localName: "DELIVERY_NOTIFICATIONS_VIEW"},
    {no: 2001, name: "PERMISSION_DELIVERY_NOTIFICATIONS_EDIT", localName: "DELIVERY_NOTIFICATIONS_EDIT"},
    {no: 3100, name: "PERMISSION_TICKETS_APP", localName: "TICKETS_APP"},
    {no: 3101, name: "PERMISSION_TICKETS_ADMIN", localName: "TICKETS_ADMIN"},
    {no: 4000, name: "PERMISSION_WORKFLOWS", localName: "WORKFLOWS"},
    {no: 4100, name: "PERMISSION_PBX_MANAGER_VIEW", localName: "PBX_MANAGER_VIEW"},
    {no: 4101, name: "PERMISSION_PBX_MANAGER_EDIT", localName: "PBX_MANAGER_EDIT"},
    {no: 4200, name: "PERMISSION_NEWSROOM_EDIT", localName: "NEWSROOM_EDIT"},
    {no: 4201, name: "PERMISSION_NEWSROOM_PUBLISH", localName: "NEWSROOM_PUBLISH"},
  ],
);

