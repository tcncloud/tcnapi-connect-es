// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/omnichannel_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Int64Value, proto3 } from "@bufbuild/protobuf";
import { CampaignDirection, ChannelType, ConnectedInbox, ConversationCollectedData, OmniCampaign, OmniConversation, OmniMessage, OmniProjectComplianceConfig, OmniTask } from "../omnichannel_pb.js";

/**
 * OmnichannelCreateProjectEvent - whenever a project is created
 *
 * @generated from message api.commons.audit.OmnichannelCreateProjectEvent
 */
export const OmnichannelCreateProjectEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCreateProjectEvent",
  () => [
    { no: 1, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "compliance_config", kind: "message", T: OmniProjectComplianceConfig },
  ],
);

/**
 * OmnichannelCreateCampaignEvent - whenever a campaign is created
 *
 * @generated from message api.commons.audit.OmnichannelCreateCampaignEvent
 */
export const OmnichannelCreateCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCreateCampaignEvent",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "campaign_direction", kind: "enum", T: proto3.getEnumType(CampaignDirection) },
    { no: 5, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 6, name: "omni_campaign", kind: "message", T: OmniCampaign },
    { no: 7, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * OmnichannelT10Event - whenever a T10 is triggered
 *
 * @generated from message api.commons.audit.OmnichannelT10Event
 */
export const OmnichannelT10Event = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelT10Event",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "conversation", kind: "message", T: OmniConversation },
    { no: 5, name: "message", kind: "message", T: OmniMessage },
  ],
);

/**
 * OmnichannelDailyReportEvent - whenever a daily project report is generated
 *
 * @generated from message api.commons.audit.OmnichannelDailyProjectReportEvent
 */
export const OmnichannelDailyProjectReportEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelDailyProjectReportEvent",
  () => [
    { no: 1, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelDailyReportEvent - whenever a daily conversation report is generated
 *
 * @generated from message api.commons.audit.OmnichannelDailyConversationReportEvent
 */
export const OmnichannelDailyConversationReportEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelDailyConversationReportEvent",
  () => [
    { no: 1, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelAgentAssignConversationEvent - handle agent assign conversation event
 *
 * @generated from message api.commons.audit.OmnichannelAgentAssignConversationEvent
 */
export const OmnichannelAgentAssignConversationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentAssignConversationEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "conversation", kind: "message", T: OmniConversation },
    { no: 6, name: "message", kind: "message", T: OmniMessage },
    { no: 7, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelAgentUnassignConversationEvent - handle agent unassign conversation event
 *
 * @generated from message api.commons.audit.OmnichannelAgentUnassignConversationEvent
 */
export const OmnichannelAgentUnassignConversationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentUnassignConversationEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "conversation", kind: "message", T: OmniConversation },
    { no: 6, name: "message", kind: "message", T: OmniMessage },
    { no: 7, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelAgentReassignConversationEvent - handle agent reassign conversation event
 *
 * @generated from message api.commons.audit.OmnichannelAgentReassignConversationEvent
 */
export const OmnichannelAgentReassignConversationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentReassignConversationEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "current_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "new_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "conversation", kind: "message", T: OmniConversation },
    { no: 8, name: "message", kind: "message", T: OmniMessage },
    { no: 9, name: "new_user_asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelCustomerTextMessageEvent - whenever a customer sends a text message
 *
 * @generated from message api.commons.audit.OmnichannelCustomerTextMessageEvent
 */
export const OmnichannelCustomerTextMessageEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCustomerTextMessageEvent",
  () => [
    { no: 3, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "message", kind: "message", T: OmniMessage },
    { no: 5, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * OmnichannelAgentTextMessageEvent - whenever an agent send a text message
 *
 * @generated from message api.commons.audit.OmnichannelAgentTextMessageEvent
 */
export const OmnichannelAgentTextMessageEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentTextMessageEvent",
  () => [
    { no: 3, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "message", kind: "message", T: OmniMessage },
    { no: 5, name: "conversation", kind: "message", T: OmniConversation },
    { no: 6, name: "asm_session_sid", kind: "message", T: Int64Value },
    { no: 7, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelManagerTextMessageEvent - whenever an agent send a text message
 *
 * @generated from message api.commons.audit.OmnichannelManagerTextMessageEvent
 */
export const OmnichannelManagerTextMessageEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManagerTextMessageEvent",
  () => [
    { no: 3, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "message", kind: "message", T: OmniMessage },
    { no: 5, name: "conversation", kind: "message", T: OmniConversation },
    { no: 6, name: "asm_session_sid", kind: "message", T: Int64Value },
    { no: 7, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelFinishWrapUpEvent - when an agent has finished wrap up
 *
 * @generated from message api.commons.audit.OmnichannelFinishWrapUpEvent
 */
export const OmnichannelFinishWrapUpEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelFinishWrapUpEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "conversation", kind: "message", T: OmniConversation },
    { no: 5, name: "message", kind: "message", T: OmniMessage },
    { no: 6, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelBeginWrapUpEvent - when a conversation closes and moves to wrap up
 *
 * @generated from message api.commons.audit.OmnichannelBeginWrapUpEvent
 */
export const OmnichannelBeginWrapUpEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelBeginWrapUpEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "conversation", kind: "message", T: OmniConversation },
    { no: 5, name: "message", kind: "message", T: OmniMessage },
    { no: 6, name: "asm_session_sid", kind: "message", T: Int64Value },
    { no: 7, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelT11Event - whenever the t11 timer went off
 *
 * @generated from message api.commons.audit.OmnichannelT11Event
 */
export const OmnichannelT11Event = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelT11Event",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "conversation", kind: "message", T: OmniConversation },
  ],
);

/**
 * // create conversation when customer sends initial message and T1 starts
 *
 * @generated from message api.commons.audit.OmnichannelCreateConversationEvent
 */
export const OmnichannelCreateConversationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCreateConversationEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 3, name: "conversation", kind: "message", T: OmniConversation },
    { no: 4, name: "message", kind: "message", T: OmniMessage },
  ],
);

/**
 * OmnichannelAgentSuspendEvent - whenever agent suspends the conversation
 *
 * @generated from message api.commons.audit.OmnichannelAgentSuspendEvent
 */
export const OmnichannelAgentSuspendEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentSuspendEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "conversation", kind: "message", T: OmniConversation },
    { no: 3, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelCloseConversationEvent - close conversation
 *
 * @generated from message api.commons.audit.OmnichannelCloseConversationEvent
 */
export const OmnichannelCloseConversationEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCloseConversationEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "conversation", kind: "message", T: OmniConversation },
    { no: 3, name: "asm_session_sid", kind: "message", T: Int64Value },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.audit.OmnichannelTranscriptSavedEvent
 */
export const OmnichannelTranscriptSavedEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelTranscriptSavedEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "transcript_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelUpdateCampaignEvent - whenever a campaign is update
 *
 * @generated from message api.commons.audit.OmnichannelUpdateCampaignEvent
 */
export const OmnichannelUpdateCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelUpdateCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelSetConversationCollectedDataEvent - handle set conversation collected data event
 *
 * @generated from message api.commons.audit.OmnichannelSetConversationCollectedDataEvent
 */
export const OmnichannelSetConversationCollectedDataEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelSetConversationCollectedDataEvent",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 4, name: "campaign_direction", kind: "enum", T: proto3.getEnumType(CampaignDirection) },
    { no: 5, name: "collected_data", kind: "message", T: ConversationCollectedData },
    { no: 6, name: "asm_session_sid", kind: "message", T: Int64Value },
  ],
);

/**
 * OmnichannelCompleteCampaignEvent - whenever a campaign is completed
 *
 * @generated from message api.commons.audit.OmnichannelCompleteCampaignEvent
 */
export const OmnichannelCompleteCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCompleteCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelArchiveCampaignEvent - whenever a campaign is archived
 *
 * @generated from message api.commons.audit.OmnichannelArchiveCampaignEvent
 */
export const OmnichannelArchiveCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelArchiveCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelStartCampaignEvent - whenever a campaign is completed
 *
 * @generated from message api.commons.audit.OmnichannelStartCampaignEvent
 */
export const OmnichannelStartCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelStartCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelPauseCampaignEvent - whenever a campaign is paused
 *
 * @generated from message api.commons.audit.OmnichannelPauseCampaignEvent
 */
export const OmnichannelPauseCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelPauseCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelResumeCampaignEvent - whenever a campaign is resumed
 *
 * @generated from message api.commons.audit.OmnichannelResumeCampaignEvent
 */
export const OmnichannelResumeCampaignEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelResumeCampaignEvent",
  () => [
    { no: 1, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 5, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelScheduleModuleEvent - whenever a module is schedule status
 *
 * @generated from message api.commons.audit.OmnichannelScheduleModuleEvent
 */
export const OmnichannelScheduleModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelScheduleModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelStartModuleEvent - whenever a module is start status
 *
 * @generated from message api.commons.audit.OmnichannelStartModuleEvent
 */
export const OmnichannelStartModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelStartModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelPauseModuleEvent - whenever a module is pause status
 *
 * @generated from message api.commons.audit.OmnichannelPauseModuleEvent
 */
export const OmnichannelPauseModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelPauseModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelResumeModuleEvent - whenever a module is resume status
 *
 * @generated from message api.commons.audit.OmnichannelResumeModuleEvent
 */
export const OmnichannelResumeModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelResumeModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelErrorModuleEvent - whenever a module is error status
 *
 * @generated from message api.commons.audit.OmnichannelErrorModuleEvent
 */
export const OmnichannelErrorModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelErrorModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelSuccessModuleEvent - whenever a module is success status
 *
 * @generated from message api.commons.audit.OmnichannelSuccessModuleEvent
 */
export const OmnichannelSuccessModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelSuccessModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelFailModuleEvent - whenever a module is fail status
 *
 * @generated from message api.commons.audit.OmnichannelFailModuleEvent
 */
export const OmnichannelFailModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelFailModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelCompleteModuleEvent - whenever a module is complete status
 *
 * @generated from message api.commons.audit.OmnichannelCompleteModuleEvent
 */
export const OmnichannelCompleteModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCompleteModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelArchiveModuleEvent - whenever a module is archive status
 *
 * @generated from message api.commons.audit.OmnichannelArchiveModuleEvent
 */
export const OmnichannelArchiveModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelArchiveModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelUpdateModuleEvent - whenever a module is update status
 *
 * @generated from message api.commons.audit.OmnichannelUpdateModuleEvent
 */
export const OmnichannelUpdateModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelUpdateModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "omni_campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelAddSmsMessageSentAuditEvent - handle omnimessage and messageunits
 *
 * @generated from message api.commons.audit.OmnichannelSmsMessageSentModuleEvent
 */
export const OmnichannelSmsMessageSentModuleEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelSmsMessageSentModuleEvent",
  () => [
    { no: 1, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "message_units", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "omni_campaign", kind: "message", T: OmniCampaign },
    { no: 4, name: "message", kind: "message", T: OmniMessage },
  ],
);

/**
 * OmniChannelModuleInitialReplyEvent -
 *
 * @generated from message api.commons.audit.OmnichannelModuleInitialReplyEvent
 */
export const OmnichannelModuleInitialReplyEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelModuleInitialReplyEvent",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "campaign_module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 6, name: "message", kind: "message", T: OmniMessage },
    { no: 7, name: "campaign", kind: "message", T: OmniCampaign },
  ],
);

/**
 * OmnichannelTaskMessageSentEvent -
 *
 * @generated from message api.commons.audit.OmnichannelTaskMessageSentEvent
 */
export const OmnichannelTaskMessageSentEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelTaskMessageSentEvent",
  () => [
    { no: 1, name: "task_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "campaign_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "message_units", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "campaign", kind: "message", T: OmniCampaign },
    { no: 6, name: "message", kind: "message", T: OmniMessage },
    { no: 7, name: "task", kind: "message", T: OmniTask },
  ],
);

/**
 * OmnichannelConnectedInboxPollEvent -
 *
 * @generated from message api.commons.audit.OmnichannelConnectedInboxPollEvent
 */
export const OmnichannelConnectedInboxPollEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelConnectedInboxPollEvent",
  () => [
    { no: 1, name: "omni_campaign", kind: "message", T: OmniCampaign },
    { no: 2, name: "campaign_module_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "connected_inbox", kind: "message", T: ConnectedInbox },
  ],
);

/**
 * OmnichannelConnectedInboxCreatedEvent -
 *
 * @generated from message api.commons.audit.OmnichannelConnectedInboxCreatedEvent
 */
export const OmnichannelConnectedInboxCreatedEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelConnectedInboxCreatedEvent",
  () => [
    { no: 1, name: "connected_inbox", kind: "message", T: ConnectedInbox },
  ],
);

/**
 * Omnichannel
 *
 * @generated from message api.commons.audit.OmnichannelAgentMessageUnitsEvent
 */
export const OmnichannelAgentMessageUnitsEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelAgentMessageUnitsEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "message_units", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * OmniChannelManagerMessageUnitsEvent -
 *
 * @generated from message api.commons.audit.OmnichannelManagerMessageUnitsEvent
 */
export const OmnichannelManagerMessageUnitsEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManagerMessageUnitsEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "message_units", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * OmniChannelCustomerMessageUnitsEvent -
 *
 * @generated from message api.commons.audit.OmnichannelCustomerMessageUnitsEvent
 */
export const OmnichannelCustomerMessageUnitsEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelCustomerMessageUnitsEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "message_units", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * OmnichannelSystemMessageUnitsEvent -
 *
 * @generated from message api.commons.audit.OmnichannelSystemMessageUnitsEvent
 */
export const OmnichannelSystemMessageUnitsEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelSystemMessageUnitsEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "message_units", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * OmniChannelAgentMessageSentEvent -
 *
 * @generated from message api.commons.audit.OmnichannelPaymentLinkSentEvent
 */
export const OmnichannelPaymentLinkSentEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelPaymentLinkSentEvent",
  () => [
    { no: 1, name: "message", kind: "message", T: OmniMessage },
    { no: 2, name: "link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * OmnichannelManualApproveTaskAcceptedEvent -
 *
 * @generated from message api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent
 */
export const OmnichannelManualApproveTaskAcceptedEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManualApproveTaskAcceptedEvent",
  () => [
    { no: 1, name: "task", kind: "message", T: OmniTask },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * OmnichannelManualApproveTaskRejectedEvent -
 *
 * @generated from message api.commons.audit.OmnichannelManualApproveTaskRejectedEvent
 */
export const OmnichannelManualApproveTaskRejectedEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManualApproveTaskRejectedEvent",
  () => [
    { no: 1, name: "task", kind: "message", T: OmniTask },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * OmnichannelManualApproveTaskTimeoutEvent -
 *
 * @generated from message api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent
 */
export const OmnichannelManualApproveTaskTimeoutEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManualApproveTaskTimeoutEvent",
  () => [
    { no: 1, name: "task", kind: "message", T: OmniTask },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * OmnichannelManualApproveTaskRequeueEvent -
 *
 * @generated from message api.commons.audit.OmnichannelManualApproveTaskRequeueEvent
 */
export const OmnichannelManualApproveTaskRequeueEvent = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.audit.OmnichannelManualApproveTaskRequeueEvent",
  () => [
    { no: 1, name: "task", kind: "message", T: OmniTask },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

