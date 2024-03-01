// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
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
    {no: 0, name: "PERMISSION_UNSPECIFIED"},
    {no: 1, name: "PERMISSION_DEV"},
    {no: 10, name: "PERMISSION_LEARN_EDIT"},
    {no: 100, name: "PERMISSION_ORG_EDIT"},
    {no: 101, name: "PERMISSION_ORG_VIEW"},
    {no: 130, name: "PERMISSION_OWNING_ORG_IMITATION"},
    {no: 118, name: "PERMISSION_USER_CREATE"},
    {no: 119, name: "PERMISSION_USER_EDIT"},
    {no: 120, name: "PERMISSION_USER_EDIT_PASSWORD"},
    {no: 121, name: "PERMISSION_USER_EDIT_OPTIONS"},
    {no: 260, name: "PERMISSION_LOGIN_CONNECTIONS"},
    {no: 122, name: "PERMISSION_USER_EDIT_AGENT_CALLER_ID"},
    {no: 400, name: "PERMISSION_AGENT_MANAGEMENT"},
    {no: 110, name: "PERMISSION_PERMISSION_GROUP_EDIT"},
    {no: 111, name: "PERMISSION_PERMISSION_GROUP_ASSIGN"},
    {no: 150, name: "PERMISSION_LABEL_MANAGEMENT"},
    {no: 160, name: "PERMISSION_TRUST_MANAGEMENT"},
    {no: 1900, name: "PERMISSION_HUNTGROUP_VIEW"},
    {no: 1901, name: "PERMISSION_HUNTGROUP_EDIT"},
    {no: 1700, name: "PERMISSION_SOUNDBOARD_VIEW"},
    {no: 1701, name: "PERMISSION_SOUNDBOARD_EDIT"},
    {no: 140, name: "PERMISSION_SUBSCRIPTION_MANAGEMENT"},
    {no: 170, name: "PERMISSION_COPY_TO_ORGANIZATION"},
    {no: 200, name: "PERMISSION_CUSTOMER_SUPPORT"},
    {no: 210, name: "PERMISSION_IMITATION"},
    {no: 220, name: "PERMISSION_BILLING_EDIT"},
    {no: 230, name: "PERMISSION_TCN_ADMIN_SETTINGS"},
    {no: 240, name: "PERMISSION_TCN_BILLING"},
    {no: 241, name: "PERMISSION_TCN_BILLING_ADMIN"},
    {no: 250, name: "PERMISSION_SUPPORT_TCN_INSIGHTS_ADMIN"},
    {no: 251, name: "PERMISSION_SUPPORT_TCN_DASHBOARDS_ADMIN"},
    {no: 300, name: "PERMISSION_AGENT"},
    {no: 310, name: "PERMISSION_ACCEPT_QUEUED_CALLS"},
    {no: 320, name: "PERMISSION_VIEW_CAMPAIGN_COMPLETION"},
    {no: 321, name: "PERMISSION_VIEW_VOICE_MAIL"},
    {no: 330, name: "PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS"},
    {no: 1400, name: "PERMISSION_EXTENSION_EDIT"},
    {no: 1401, name: "PERMISSION_VOICEMAIL_DOWNLOAD"},
    {no: 341, name: "PERMISSION_MANUAL_APPROVE"},
    {no: 342, name: "PERMISSION_AGENT_PLUGINS_VIEW"},
    {no: 343, name: "PERMISSION_AGENT_HUNTGROUP_INTEGRATIONS_VIEW"},
    {no: 340, name: "PERMISSION_AGENT_PORTALS_VIEW"},
    {no: 500, name: "PERMISSION_VOICE_ANALYTICS"},
    {no: 501, name: "PERMISSION_VOICE_ANALYTICS_FLAG"},
    {no: 502, name: "PERMISSION_VOICE_ANALYTICS_CONFIG"},
    {no: 503, name: "PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD"},
    {no: 504, name: "PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD"},
    {no: 505, name: "PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING"},
    {no: 506, name: "PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE"},
    {no: 507, name: "PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE"},
    {no: 600, name: "PERMISSION_BUSINESS_INTELLIGENCE"},
    {no: 601, name: "PERMISSION_DASHBOARDS_VIEW"},
    {no: 602, name: "PERMISSION_DASHBOARDS_EDIT"},
    {no: 603, name: "PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE"},
    {no: 604, name: "PERMISSION_INSIGHTS_MANAGE"},
    {no: 605, name: "PERMISSION_INSIGHTS_INSIGHT_VIEW"},
    {no: 606, name: "PERMISSION_INSIGHTS_INSIGHT_EDIT"},
    {no: 607, name: "PERMISSION_INSIGHTS_DASHBOARD_VIEW"},
    {no: 608, name: "PERMISSION_INSIGHTS_DASHBOARD_EDIT"},
    {no: 700, name: "PERMISSION_ROOM303"},
    {no: 701, name: "PERMISSION_ROOM303_MEMBER"},
    {no: 702, name: "PERMISSION_ROOM303_SUPERVISOR"},
    {no: 800, name: "PERMISSION_AGENT_CALL_SCRIPTS"},
    {no: 900, name: "PERMISSION_COMPLIANCE"},
    {no: 910, name: "PERMISSION_COMPLIANCE_CONSENT"},
    {no: 1000, name: "PERMISSION_LMS_VIEW"},
    {no: 1001, name: "PERMISSION_LMS_EDIT"},
    {no: 1200, name: "PERMISSION_OMNI_BOSS"},
    {no: 1210, name: "PERMISSION_OMNI_PORTALS_VIEW"},
    {no: 1300, name: "PERMISSION_INTEGRATIONS_VIEW"},
    {no: 1301, name: "PERMISSION_INTEGRATIONS_PAYMENT"},
    {no: 1302, name: "PERMISSION_INTEGRATIONS_JOURNEY"},
    {no: 1310, name: "PERMISSIONS_INTEGRATIONS_KEY_CREATION"},
    {no: 1500, name: "PERMISSION_WFM"},
    {no: 1501, name: "PERMISSION_AGENT_PORTAL"},
    {no: 1502, name: "PERMISSION_WFM_ADHERENCE_ADMIN"},
    {no: 1503, name: "PERMISSION_WFM_ADHERENCE_MANAGER"},
    {no: 1504, name: "PERMISSION_WFM_ADHERENCE_MONITOR"},
    {no: 1600, name: "PERMISSION_SCORECARDS"},
    {no: 1601, name: "PERMISSION_SCORECARDS_MANAGE"},
    {no: 1602, name: "PERMISSION_SCORECARDS_EVALUATE"},
    {no: 1603, name: "PERMISSION_SCORECARDS_FLAG_EVAL"},
    {no: 1604, name: "PERMISSION_SCORECARDS_LEARNING_OPPORTUNITIES"},
    {no: 1800, name: "PERMISSION_DEV_TOOLS"},
    {no: 2000, name: "PERMISSION_DELIVERY_NOTIFICATIONS_VIEW"},
    {no: 2001, name: "PERMISSION_DELIVERY_NOTIFICATIONS_EDIT"},
    {no: 3100, name: "PERMISSION_TICKETS_APP"},
    {no: 3101, name: "PERMISSION_TICKETS_ADMIN"},
    {no: 4000, name: "PERMISSION_WORKFLOWS"},
    {no: 4100, name: "PERMISSION_PBX_MANAGER_VIEW"},
    {no: 4101, name: "PERMISSION_PBX_MANAGER_EDIT"},
    {no: 4110, name: "PERMISSION_PBX_SOFTPHONE_WIDGET"},
    {no: 4199, name: "PERMISSION_NEWSROOM_VIEW"},
    {no: 4200, name: "PERMISSION_NEWSROOM_EDIT"},
    {no: 4201, name: "PERMISSION_NEWSROOM_PUBLISH"},
    {no: 5100, name: "PERMISSION_CONTACTMANAGER_ADMIN"},
    {no: 5101, name: "PERMISSION_CONTACTMANAGER_APP"},
  ],
);

