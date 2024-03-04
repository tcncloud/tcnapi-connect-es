// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/auth/perms.proto (package api.commons.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * Permission enum contains the permissions to be used for access control.
 *
 * @generated from enum api.commons.auth.Permission
 */
export declare enum Permission {
  /**
   * 0 explicitly means unspecified or invalid.
   *
   * @generated from enum value: PERMISSION_UNSPECIFIED = 0;
   */
  PERMISSION_UNSPECIFIED = 0,

  /**
   * Enables viewing WIP or unreleased features in development.
   *
   * @generated from enum value: PERMISSION_DEV = 1;
   */
  PERMISSION_DEV = 1,

  /**
   * Enables editing learning center materials.
   *
   * @generated from enum value: PERMISSION_LEARN_EDIT = 10;
   */
  PERMISSION_LEARN_EDIT = 10,

  /**
   * Enables editing organization data using the organization tools.
   *
   * @generated from enum value: PERMISSION_ORG_EDIT = 100;
   */
  PERMISSION_ORG_EDIT = 100,

  /**
   * Enables viewing organization related views and data using the
   * organization tools.
   *
   * @generated from enum value: PERMISSION_ORG_VIEW = 101;
   */
  PERMISSION_ORG_VIEW = 101,

  /**
   * Enables user account imitation for users within the p3 client hierarchy.
   *
   * @generated from enum value: PERMISSION_OWNING_ORG_IMITATION = 130;
   */
  PERMISSION_OWNING_ORG_IMITATION = 130,

  /**
   * Enables ability to create users.
   *
   * @generated from enum value: PERMISSION_USER_CREATE = 118;
   */
  PERMISSION_USER_CREATE = 118,

  /**
   * Enables ability to edit users.
   *
   * @generated from enum value: PERMISSION_USER_EDIT = 119;
   */
  PERMISSION_USER_EDIT = 119,

  /**
   * Enable ability for user to change their own password.
   *
   * @generated from enum value: PERMISSION_USER_EDIT_PASSWORD = 120;
   */
  PERMISSION_USER_EDIT_PASSWORD = 120,

  /**
   * Enable ability for user to change their user options.
   *
   * @generated from enum value: PERMISSION_USER_EDIT_OPTIONS = 121;
   */
  PERMISSION_USER_EDIT_OPTIONS = 121,

  /**
   * Allows viewing and editing delegated login connections.
   *
   * @generated from enum value: PERMISSION_LOGIN_CONNECTIONS = 260;
   */
  PERMISSION_LOGIN_CONNECTIONS = 260,

  /**
   * Allows viewing and editing of Agent Caller ID.
   *
   * @generated from enum value: PERMISSION_USER_EDIT_AGENT_CALLER_ID = 122;
   */
  PERMISSION_USER_EDIT_AGENT_CALLER_ID = 122,

  /**
   * Enables access to agent management app for assigning skills,
   * huntgroup, etc.
   *
   * @generated from enum value: PERMISSION_AGENT_MANAGEMENT = 400;
   */
  PERMISSION_AGENT_MANAGEMENT = 400,

  /**
   * Enables creating and editing of permission groups.
   *
   * @generated from enum value: PERMISSION_PERMISSION_GROUP_EDIT = 110;
   */
  PERMISSION_PERMISSION_GROUP_EDIT = 110,

  /**
   * Enables ability to assign permission groups to users.
   *
   * @generated from enum value: PERMISSION_PERMISSION_GROUP_ASSIGN = 111;
   */
  PERMISSION_PERMISSION_GROUP_ASSIGN = 111,

  /**
   * Enables CRUD operations for Labels.
   *
   * @generated from enum value: PERMISSION_LABEL_MANAGEMENT = 150;
   */
  PERMISSION_LABEL_MANAGEMENT = 150,

  /**
   * Enables CRUD operations for Trusts.
   *
   * @generated from enum value: PERMISSION_TRUST_MANAGEMENT = 160;
   */
  PERMISSION_TRUST_MANAGEMENT = 160,

  /**
   * Enables access to get hunt group properties and settings.
   *
   * @generated from enum value: PERMISSION_HUNTGROUP_VIEW = 1900;
   */
  PERMISSION_HUNTGROUP_VIEW = 1900,

  /**
   * Enables access to update hunt group properties and settings.
   *
   * @generated from enum value: PERMISSION_HUNTGROUP_EDIT = 1901;
   */
  PERMISSION_HUNTGROUP_EDIT = 1901,

  /**
   * Enables access to get and list soundboard files.
   *
   * @generated from enum value: PERMISSION_SOUNDBOARD_VIEW = 1700;
   */
  PERMISSION_SOUNDBOARD_VIEW = 1700,

  /**
   * Enables access to create, update, or delete soundboard files.
   *
   * @generated from enum value: PERMISSION_SOUNDBOARD_EDIT = 1701;
   */
  PERMISSION_SOUNDBOARD_EDIT = 1701,

  /**
   * Enables user to view and mangage all org subscriptions.
   *
   * @generated from enum value: PERMISSION_SUBSCRIPTION_MANAGEMENT = 140;
   */
  PERMISSION_SUBSCRIPTION_MANAGEMENT = 140,

  /**
   * Enables copying resources from one organization to another.  eg. Data Dip templates.
   *
   * @generated from enum value: PERMISSION_COPY_TO_ORGANIZATION = 170;
   */
  PERMISSION_COPY_TO_ORGANIZATION = 170,

  /**
   * Enables the customer support tools.
   *
   * @generated from enum value: PERMISSION_CUSTOMER_SUPPORT = 200;
   */
  PERMISSION_CUSTOMER_SUPPORT = 200,

  /**
   * Enables user account imitation.
   *
   * @generated from enum value: PERMISSION_IMITATION = 210;
   */
  PERMISSION_IMITATION = 210,

  /**
   * Enables editing data using billing related tools.
   *
   * @generated from enum value: PERMISSION_BILLING_EDIT = 220;
   */
  PERMISSION_BILLING_EDIT = 220,

  /**
   * gives access to and editing of admin settings.
   *
   * @generated from enum value: PERMISSION_TCN_ADMIN_SETTINGS = 230;
   */
  PERMISSION_TCN_ADMIN_SETTINGS = 230,

  /**
   * Enables sensitive and specific billing tools for TCN employees only.
   *
   * @generated from enum value: PERMISSION_TCN_BILLING = 240;
   */
  PERMISSION_TCN_BILLING = 240,

  /**
   * Enables sensitive and specific billing tools for TCN employees only.
   *
   * @generated from enum value: PERMISSION_TCN_BILLING_ADMIN = 241;
   */
  PERMISSION_TCN_BILLING_ADMIN = 241,

  /**
   * Enables admin access to insights (TCN standard insights).
   *
   * @generated from enum value: PERMISSION_SUPPORT_TCN_INSIGHTS_ADMIN = 250;
   */
  PERMISSION_SUPPORT_TCN_INSIGHTS_ADMIN = 250,

  /**
   * Enables admin access to dashboards (TCN standard dashboards).
   *
   * @generated from enum value: PERMISSION_SUPPORT_TCN_DASHBOARDS_ADMIN = 251;
   */
  PERMISSION_SUPPORT_TCN_DASHBOARDS_ADMIN = 251,

  /**
   * Enables access to agent.
   *
   * @generated from enum value: PERMISSION_AGENT = 300;
   */
  PERMISSION_AGENT = 300,

  /**
   * @generated from enum value: PERMISSION_ACCEPT_QUEUED_CALLS = 310;
   */
  PERMISSION_ACCEPT_QUEUED_CALLS = 310,

  /**
   * Enables ability to view the campaign completion box.
   *
   * @generated from enum value: PERMISSION_VIEW_CAMPAIGN_COMPLETION = 320;
   */
  PERMISSION_VIEW_CAMPAIGN_COMPLETION = 320,

  /**
   * Ability to view voice mails for agents.
   *
   * @generated from enum value: PERMISSION_VIEW_VOICE_MAIL = 321;
   */
  PERMISSION_VIEW_VOICE_MAIL = 321,

  /**
   * Enabled access to scrublist options on calls.
   *
   * @generated from enum value: PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS = 330;
   */
  PERMISSION_AGENT_COMPLIANCE_SCRUBLIST_OPTIONS = 330,

  /**
   * Enables access to edit extensions.
   *
   * @generated from enum value: PERMISSION_EXTENSION_EDIT = 1400;
   */
  PERMISSION_EXTENSION_EDIT = 1400,

  /**
   * Enables downloading of voicemails.
   *
   * @generated from enum value: PERMISSION_VOICEMAIL_DOWNLOAD = 1401;
   */
  PERMISSION_VOICEMAIL_DOWNLOAD = 1401,

  /**
   * Enables agents to view manual approve tasks
   *
   * @generated from enum value: PERMISSION_MANUAL_APPROVE = 341;
   */
  PERMISSION_MANUAL_APPROVE = 341,

  /**
   * Enables Agents to view plugins.
   *
   * @generated from enum value: PERMISSION_AGENT_PLUGINS_VIEW = 342;
   */
  PERMISSION_AGENT_PLUGINS_VIEW = 342,

  /**
   * Enables Agents to view plugins.
   *
   * @generated from enum value: PERMISSION_AGENT_HUNTGROUP_INTEGRATIONS_VIEW = 343;
   */
  PERMISSION_AGENT_HUNTGROUP_INTEGRATIONS_VIEW = 343,

  /**
   * Enables Agents to view portals.
   *
   *
   * Voice Analytics
   *
   * @generated from enum value: PERMISSION_AGENT_PORTALS_VIEW = 340;
   */
  PERMISSION_AGENT_PORTALS_VIEW = 340,

  /**
   * Enables access to voice analytics app.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS = 500;
   */
  PERMISSION_VOICE_ANALYTICS = 500,

  /**
   * Enables access to managing flags within voice analytics.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_FLAG = 501;
   */
  PERMISSION_VOICE_ANALYTICS_FLAG = 501,

  /**
   * Enables access to configuration within voice analytics.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_CONFIG = 502;
   */
  PERMISSION_VOICE_ANALYTICS_CONFIG = 502,

  /**
   * Enables ability to download recordings within voice analytics.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD = 503;
   */
  PERMISSION_VOICE_ANALYTICS_RECORDING_DOWNLOAD = 503,

  /**
   * Enables ability to download transcripts within voice analytics.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD = 504;
   */
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DOWNLOAD = 504,

  /**
   * Enables access to voice analytics screenRecording navigation.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING = 505;
   */
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING = 505,

  /**
   * Enables ability to delete transcripts within voice analytics.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE = 506;
   */
  PERMISSION_VOICE_ANALYTICS_TRANSCRIPT_DELETE = 506,

  /**
   * Enables ability to delete screen recordings.
   *
   * @generated from enum value: PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE = 507;
   */
  PERMISSION_VOICE_ANALYTICS_SCREEN_RECORDING_DELETE = 507,

  /**
   * Enables access to BI analytics app.
   *
   * @generated from enum value: PERMISSION_BUSINESS_INTELLIGENCE = 600;
   */
  PERMISSION_BUSINESS_INTELLIGENCE = 600,

  /**
   * Enables ability to view BI dashboards.
   *
   * @generated from enum value: PERMISSION_DASHBOARDS_VIEW = 601;
   */
  PERMISSION_DASHBOARDS_VIEW = 601,

  /**
   * Enables ability to edit BI dashboards.
   *
   * @generated from enum value: PERMISSION_DASHBOARDS_EDIT = 602;
   */
  PERMISSION_DASHBOARDS_EDIT = 602,

  /**
   * Enables writes for common library insights.
   * deprecated
   *
   * @generated from enum value: PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE = 603;
   */
  PERMISSION_INSIGHTS_COMMON_LIBRARY_MANAGE = 603,

  /**
   * Enables access to insights.
   * deprecated
   *
   * @generated from enum value: PERMISSION_INSIGHTS_MANAGE = 604;
   */
  PERMISSION_INSIGHTS_MANAGE = 604,

  /**
   * allows access to read insights
   *
   * @generated from enum value: PERMISSION_INSIGHTS_INSIGHT_VIEW = 605;
   */
  PERMISSION_INSIGHTS_INSIGHT_VIEW = 605,

  /**
   * allows access to edit insights
   *
   * @generated from enum value: PERMISSION_INSIGHTS_INSIGHT_EDIT = 606;
   */
  PERMISSION_INSIGHTS_INSIGHT_EDIT = 606,

  /**
   * allows user to read insights for dashboards
   * deprecated
   *
   * @generated from enum value: PERMISSION_INSIGHTS_DASHBOARD_VIEW = 607;
   */
  PERMISSION_INSIGHTS_DASHBOARD_VIEW = 607,

  /**
   * allows user to edit insights for dashboards
   * deprecated
   *
   * @generated from enum value: PERMISSION_INSIGHTS_DASHBOARD_EDIT = 608;
   */
  PERMISSION_INSIGHTS_DASHBOARD_EDIT = 608,

  /**
   * Enables access to room 303 chat at a base level
   * Lowest tier permissions for unconfigured rooms and direct messaging
   *
   * @generated from enum value: PERMISSION_ROOM303 = 700;
   */
  PERMISSION_ROOM303 = 700,

  /**
   * Provides middle level permissions for unconfigured
   * rooms and direct messaging in room303
   *
   * @generated from enum value: PERMISSION_ROOM303_MEMBER = 701;
   */
  PERMISSION_ROOM303_MEMBER = 701,

  /**
   * Provides top level permissions rooms and direct
   * messaging for all users in room303
   *
   * @generated from enum value: PERMISSION_ROOM303_SUPERVISOR = 702;
   */
  PERMISSION_ROOM303_SUPERVISOR = 702,

  /**
   * Enables access to the call scripts builder app.
   *
   * @generated from enum value: PERMISSION_AGENT_CALL_SCRIPTS = 800;
   */
  PERMISSION_AGENT_CALL_SCRIPTS = 800,

  /**
   * Enables access to the compliance app.
   *
   * @generated from enum value: PERMISSION_COMPLIANCE = 900;
   */
  PERMISSION_COMPLIANCE = 900,

  /**
   * Enables access to compliance consent profiles .
   *
   * @generated from enum value: PERMISSION_COMPLIANCE_CONSENT = 910;
   */
  PERMISSION_COMPLIANCE_CONSENT = 910,

  /**
   * Enables access to viewing the List Management Services app.
   *
   * @generated from enum value: PERMISSION_LMS_VIEW = 1000;
   */
  PERMISSION_LMS_VIEW = 1000,

  /**
   * Enables access to editing LMS properties.
   *
   * @generated from enum value: PERMISSION_LMS_EDIT = 1001;
   */
  PERMISSION_LMS_EDIT = 1001,

  /**
   * Enables access to omni boss app.
   *
   * @generated from enum value: PERMISSION_OMNI_BOSS = 1200;
   */
  PERMISSION_OMNI_BOSS = 1200,

  /**
   * @generated from enum value: PERMISSION_OMNI_PORTALS_VIEW = 1210;
   */
  PERMISSION_OMNI_PORTALS_VIEW = 1210,

  /**
   * Enables access to viewing the integrations app.
   *
   * @generated from enum value: PERMISSION_INTEGRATIONS_VIEW = 1300;
   */
  PERMISSION_INTEGRATIONS_VIEW = 1300,

  /**
   * Enables access to integrations payment menu options.
   *
   * @generated from enum value: PERMISSION_INTEGRATIONS_PAYMENT = 1301;
   */
  PERMISSION_INTEGRATIONS_PAYMENT = 1301,

  /**
   * Enables access to integrations journey menu options.
   *
   * @generated from enum value: PERMISSION_INTEGRATIONS_JOURNEY = 1302;
   */
  PERMISSION_INTEGRATIONS_JOURNEY = 1302,

  /**
   * Enables ability for key creation - only used by SROs and account managers
   *
   * @generated from enum value: PERMISSIONS_INTEGRATIONS_KEY_CREATION = 1310;
   */
  PERMISSIONS_INTEGRATIONS_KEY_CREATION = 1310,

  /**
   * Enables access to WFM app
   *
   * @generated from enum value: PERMISSION_WFM = 1500;
   */
  PERMISSION_WFM = 1500,

  /**
   * Enables access to the Agent Portal feature.
   *
   * @generated from enum value: PERMISSION_AGENT_PORTAL = 1501;
   */
  PERMISSION_AGENT_PORTAL = 1501,

  /**
   * Enables access to the Adherence app as an Admin user.
   *
   * @generated from enum value: PERMISSION_WFM_ADHERENCE_ADMIN = 1502;
   */
  PERMISSION_WFM_ADHERENCE_ADMIN = 1502,

  /**
   * Enables access to the Adherence app as a Manager user.
   *
   * @generated from enum value: PERMISSION_WFM_ADHERENCE_MANAGER = 1503;
   */
  PERMISSION_WFM_ADHERENCE_MANAGER = 1503,

  /**
   * Enables access to the Adherence app as a Monitor user.
   *
   * @generated from enum value: PERMISSION_WFM_ADHERENCE_MONITOR = 1504;
   */
  PERMISSION_WFM_ADHERENCE_MONITOR = 1504,

  /**
   * Enables access to Scorecards app.
   *
   * @generated from enum value: PERMISSION_SCORECARDS = 1600;
   */
  PERMISSION_SCORECARDS = 1600,

  /**
   * Enables access to managing scorecards.
   *
   * @generated from enum value: PERMISSION_SCORECARDS_MANAGE = 1601;
   */
  PERMISSION_SCORECARDS_MANAGE = 1601,

  /**
   * Enables access to evaluating scorecards.
   *
   * @generated from enum value: PERMISSION_SCORECARDS_EVALUATE = 1602;
   */
  PERMISSION_SCORECARDS_EVALUATE = 1602,

  /**
   * Enables access to flag eval features.
   *
   * @generated from enum value: PERMISSION_SCORECARDS_FLAG_EVAL = 1603;
   */
  PERMISSION_SCORECARDS_FLAG_EVAL = 1603,

  /**
   * Enables access to manage learning opportunities.
   *
   * @generated from enum value: PERMISSION_SCORECARDS_LEARNING_OPPORTUNITIES = 1604;
   */
  PERMISSION_SCORECARDS_LEARNING_OPPORTUNITIES = 1604,

  /**
   * Enables access to Dev Tools app.
   *
   * @generated from enum value: PERMISSION_DEV_TOOLS = 1800;
   */
  PERMISSION_DEV_TOOLS = 1800,

  /**
   * Enables access to view delivery notifications.
   *
   * @generated from enum value: PERMISSION_DELIVERY_NOTIFICATIONS_VIEW = 2000;
   */
  PERMISSION_DELIVERY_NOTIFICATIONS_VIEW = 2000,

  /**
   * Enables access to create, update, or delete delivery notifications.
   *
   * @generated from enum value: PERMISSION_DELIVERY_NOTIFICATIONS_EDIT = 2001;
   */
  PERMISSION_DELIVERY_NOTIFICATIONS_EDIT = 2001,

  /**
   * ACCESS the Tickets APP: Routing, Listing the tickets, dashboard, reports.
   *
   * @generated from enum value: PERMISSION_TICKETS_APP = 3100;
   */
  PERMISSION_TICKETS_APP = 3100,

  /**
   * Adds Extra Access to: EnableProject
   *
   * @generated from enum value: PERMISSION_TICKETS_ADMIN = 3101;
   */
  PERMISSION_TICKETS_ADMIN = 3101,

  /**
   * Enables access to workflows builder
   *
   * @generated from enum value: PERMISSION_WORKFLOWS = 4000;
   */
  PERMISSION_WORKFLOWS = 4000,

  /**
   * Enables access to view PBX Manager.
   *
   * @generated from enum value: PERMISSION_PBX_MANAGER_VIEW = 4100;
   */
  PERMISSION_PBX_MANAGER_VIEW = 4100,

  /**
   * Enables access to create, update, or delete in PBX Manager.
   *
   * @generated from enum value: PERMISSION_PBX_MANAGER_EDIT = 4101;
   */
  PERMISSION_PBX_MANAGER_EDIT = 4101,

  /**
   * Enables access to the PBX Softphone Widget in the GlobalTopBar.
   *
   * @generated from enum value: PERMISSION_PBX_SOFTPHONE_WIDGET = 4110;
   */
  PERMISSION_PBX_SOFTPHONE_WIDGET = 4110,

  /**
   * Enables access to viewing the main newsroom app and showing the popup
   * This permission will be give to orgs automatically, but can be removed
   * manually to opt out of newsroom notifications
   *
   * @generated from enum value: PERMISSION_NEWSROOM_VIEW = 4199;
   */
  PERMISSION_NEWSROOM_VIEW = 4199,

  /**
   * Enables access to create, update, and archive in Newsroom manager
   *
   * @generated from enum value: PERMISSION_NEWSROOM_EDIT = 4200;
   */
  PERMISSION_NEWSROOM_EDIT = 4200,

  /**
   * Enables access to publish in Newsroom manager
   *
   * @generated from enum value: PERMISSION_NEWSROOM_PUBLISH = 4201;
   */
  PERMISSION_NEWSROOM_PUBLISH = 4201,

  /**
   * ACCESS the Contact Manager APP: Routing, Listing the Contact Manager, List,Get, KYC etc.
   *
   * @generated from enum value: PERMISSION_CONTACTMANAGER_ADMIN = 5100;
   */
  PERMISSION_CONTACTMANAGER_ADMIN = 5100,

  /**
   * @generated from enum value: PERMISSION_CONTACTMANAGER_APP = 5101;
   */
  PERMISSION_CONTACTMANAGER_APP = 5101,
}

