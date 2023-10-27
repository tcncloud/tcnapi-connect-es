// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/chat.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.ChatMessageSenderType
 */
export const ChatMessageSenderType = proto3.makeEnum(
  "api.commons.ChatMessageSenderType",
  [
    {no: 0, name: "CHAT_MESSAGE_SENDER_TYPE_AGENT", localName: "AGENT"},
    {no: 1, name: "CHAT_MESSAGE_SENDER_TYPE_CUSTOMER", localName: "CUSTOMER"},
    {no: 2, name: "CHAT_MESSAGE_SENDER_TYPE_MANAGER", localName: "MANAGER"},
  ],
);

/**
 * The status for a chat campaign
 *
 * @generated from enum api.commons.ChatCampaignStatus
 */
export const ChatCampaignStatus = proto3.makeEnum(
  "api.commons.ChatCampaignStatus",
  [
    {no: 0, name: "CHAT_CAMPAIGN_UNKNOWN"},
    {no: 15010, name: "CHAT_CAMPAIGN_RUNNING"},
    {no: 15050, name: "CHAT_CAMPAIGN_STOPPED"},
    {no: 15060, name: "CHAT_CAMPAIGN_ARCHIVED"},
    {no: 15070, name: "CHAT_CAMPAIGN_PAUSED"},
  ],
);

/**
 * The type of events for chat campaigns
 *
 * @generated from enum api.commons.ChatCampaignEvent
 */
export const ChatCampaignEvent = proto3.makeEnum(
  "api.commons.ChatCampaignEvent",
  [
    {no: 0, name: "CHAT_CAMPAIGN_EVENT_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "CHAT_CAMPAIGN_EVENT_SCHEDULED", localName: "SCHEDULED"},
    {no: 2, name: "CHAT_CAMPAIGN_EVENT_STOPPED", localName: "STOPPED"},
    {no: 3, name: "CHAT_CAMPAIGN_EVENT_ARCHIVED", localName: "ARCHIVED"},
    {no: 4, name: "CHAT_CAMPAIGN_EVENT_PAUSED", localName: "PAUSED"},
  ],
);

/**
 * @generated from enum api.commons.ChatMessageType
 */
export const ChatMessageType = proto3.makeEnum(
  "api.commons.ChatMessageType",
  [
    {no: 0, name: "CHAT_REPLY_FROM_CUSTOMER"},
    {no: 1, name: "CHAT_REPLY_FROM_AGENT"},
  ],
);

/**
 * @generated from message api.commons.ChatColorProperties
 */
export const ChatColorProperties = proto3.makeMessageType(
  "api.commons.ChatColorProperties",
  () => [
    { no: 1, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "header_text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "paragraph_text_color", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The header data for the chat widget associated to a given chat campaign
 *
 * @generated from message api.commons.ChatHeader
 */
export const ChatHeader = proto3.makeMessageType(
  "api.commons.ChatHeader",
  () => [
    { no: 1, name: "header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subheader", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.HoursOfOperation
 */
export const HoursOfOperation = proto3.makeMessageType(
  "api.commons.HoursOfOperation",
  () => [
    { no: 1, name: "monday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 2, name: "tuesday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 3, name: "wednesday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 4, name: "thursday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 5, name: "friday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 6, name: "saturday", kind: "message", T: HoursOfOperationRange, repeated: true },
    { no: 7, name: "sunday", kind: "message", T: HoursOfOperationRange, repeated: true },
  ],
);

/**
 * @generated from message api.commons.HoursOfOperationRange
 */
export const HoursOfOperationRange = proto3.makeMessageType(
  "api.commons.HoursOfOperationRange",
  () => [
    { no: 1, name: "start_hour", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "start_minute", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "end_hour", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "end_minute", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

