// Copyright (c) 2020, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/asm/service.proto (package api.v1alpha1.asm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { AsmSubsessionType, DashboardAgentInfo } from "../../commons/asm_pb.js";
import { AsmEvent, Event } from "../../commons/event_pb.js";
import { AgentAlert, AgentStatus_Enum, CallType_Enum, QueuedNotificationType, TransferMember } from "../../commons/acd_pb.js";
import { AgentConversationAssignmentStatus, AgentConversationAssignmentType, ChannelType, ConversationCollectedData, ConversationCustomerInformation, ConversationStatus, OmniConversation, OmniSenderType, SLATimeouts } from "../../commons/omnichannel_pb.js";
import { AuthenticatedUser } from "../../commons/auth/user_pb.js";

/**
 * @generated from message api.v1alpha1.asm.CreateSessionReq
 */
export const CreateSessionReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.CreateSessionReq",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 3, name: "subsession_type", kind: "enum", T: proto3.getEnumType(AsmSubsessionType) },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.CreateSessionRes
 */
export const CreateSessionRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.CreateSessionRes",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "voice_registration", kind: "message", T: VoiceRegistration },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.VoiceRegistration
 */
export const VoiceRegistration = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.VoiceRegistration",
  () => [
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "dial_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "pstn_phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "default_time_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "expiration_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * request used to establish a stream of status updates
 * based on the given asm session sid. Ths will return
 * all payload types in the responses
 *
 * @generated from message api.v1alpha1.asm.StreamAgentStateReq
 */
export const StreamAgentStateReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.StreamAgentStateReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "keep_alive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * request used to establish a stream of status updates
 * based on the current authenticated user's org_id
 * This will only return the AgentState payload type
 * in the reponses
 *
 * @generated from message api.v1alpha1.asm.ManagerStreamAgentStateReq
 */
export const ManagerStreamAgentStateReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ManagerStreamAgentStateReq",
  [],
);

/**
 * @generated from message api.v1alpha1.asm.GetStatusReq
 */
export const GetStatusReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.GetStatusReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "perform_keep_alive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "perform_get_queued_calls", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "perform_get_message", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "minimum_message_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "events", kind: "message", T: Event, repeated: true },
    { no: 8, name: "agent_pbx_extensions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.GetStatusRes
 */
export const GetStatusRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.GetStatusRes",
  () => [
    { no: 1, name: "voice_status", kind: "message", T: VoiceStatus },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.VoiceStatus
 */
export const VoiceStatus = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.VoiceStatus",
  () => [
    { no: 2, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "status_desc", kind: "enum", T: proto3.getEnumType(AgentStatus_Enum) },
    { no: 4, name: "paused", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "queue", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "current_session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "last_status_change", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "monitoring", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "calls_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "last_sip_code", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "agent_peer_is_lost_call", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "keep_alive_succeeded", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "message_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 16, name: "queued_calls", kind: "message", T: QueuedCalls },
    { no: 17, name: "caller_was_suspended", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 18, name: "transfer_members", kind: "message", T: TransferMember, repeated: true },
    { no: 19, name: "alert", kind: "message", T: AgentAlert },
    { no: 20, name: "agent_peer_is_direct_to_agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "agent_is_muted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.QueuedCalls
 */
export const QueuedCalls = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.QueuedCalls",
  () => [
    { no: 16, name: "agent_queue_calls", kind: "message", T: QueuedCalls_QueuedCallData, repeated: true },
    { no: 17, name: "on_hold_calls", kind: "message", T: QueuedCalls_QueuedCallData, repeated: true },
    { no: 18, name: "hqm_calls", kind: "message", T: QueuedCalls_QueuedCallData, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.QueuedCalls.QueuedCallData
 */
export const QueuedCalls_QueuedCallData = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.QueuedCalls.QueuedCallData",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "start_date", kind: "message", T: Timestamp },
    { no: 6, name: "hold_date", kind: "message", T: Timestamp },
    { no: 7, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "agent_specific", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "queued_notification_type", kind: "enum", T: proto3.getEnumType(QueuedNotificationType) },
  ],
  {localName: "QueuedCalls_QueuedCallData"},
);

/**
 * @generated from message api.v1alpha1.asm.EndSessionReq
 */
export const EndSessionReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.EndSessionReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.EndSessionRes
 */
export const EndSessionRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.EndSessionRes",
  [],
);

/**
 * @generated from message api.v1alpha1.asm.GetCurrentSessionReq
 */
export const GetCurrentSessionReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.GetCurrentSessionReq",
  [],
);

/**
 * @generated from message api.v1alpha1.asm.AsmSession
 */
export const AsmSession = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.AsmSession",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "asm_session_start", kind: "message", T: Timestamp },
    { no: 5, name: "asm_session_end", kind: "message", T: Timestamp },
    { no: 6, name: "voice_session", kind: "message", T: VoiceSession },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.VoiceSession
 */
export const VoiceSession = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.VoiceSession",
  () => [
    { no: 1, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "voice_session_start", kind: "message", T: Timestamp },
    { no: 3, name: "voice_session_end", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.SwitchSubsessionReq
 */
export const SwitchSubsessionReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.SwitchSubsessionReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 4, name: "channel_type", kind: "enum", T: proto3.getEnumType(AsmSubsessionType) },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.SwitchSubsessionRes
 */
export const SwitchSubsessionRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.SwitchSubsessionRes",
  () => [
    { no: 1, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "voice_registration", kind: "message", T: VoiceRegistration },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.Conversation
 */
export const Conversation = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.Conversation",
  () => [
    { no: 6, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 7, name: "conversation_created_time", kind: "message", T: Timestamp },
    { no: 8, name: "assigned_last_updated_time", kind: "message", T: Timestamp },
    { no: 9, name: "conversation_status", kind: "enum", T: proto3.getEnumType(ConversationStatus) },
    { no: 10, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 11, name: "customer_info", kind: "message", T: ConversationCustomerInformation },
    { no: 12, name: "last_message_time", kind: "message", T: Timestamp },
    { no: 13, name: "skills", kind: "message", T: ConversationSkills },
    { no: 14, name: "assignment_status", kind: "enum", T: proto3.getEnumType(AgentConversationAssignmentStatus) },
    { no: 15, name: "assignment_type", kind: "enum", T: proto3.getEnumType(AgentConversationAssignmentType) },
    { no: 16, name: "sla_timeouts", kind: "message", T: SLATimeouts },
    { no: 17, name: "conversation_collected_data", kind: "message", T: ConversationCollectedData },
    { no: 18, name: "last_message_group_time", kind: "message", T: Timestamp },
    { no: 19, name: "last_message_group_type", kind: "enum", T: proto3.getEnumType(OmniSenderType) },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.ConversationSkills
 */
export const ConversationSkills = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ConversationSkills",
  () => [
    { no: 1, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.AssignNewConversationReq
 */
export const AssignNewConversationReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.AssignNewConversationReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 3, name: "channel_types", kind: "enum", T: proto3.getEnumType(ChannelType), repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.AssignNewConversationRes
 */
export const AssignNewConversationRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.AssignNewConversationRes",
  () => [
    { no: 1, name: "conversation", kind: "message", T: Conversation },
    { no: 2, name: "reference_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.ListAgentsReq
 */
export const ListAgentsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ListAgentsReq",
  [],
);

/**
 * @generated from message api.v1alpha1.asm.ListAgentsRes
 */
export const ListAgentsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ListAgentsRes",
  () => [
    { no: 1, name: "agents", kind: "message", T: DashboardAgentInfo, repeated: true },
  ],
);

/**
 * request to set collected data for a conversation
 *
 * @generated from message api.v1alpha1.asm.SetConversationCollectedDataReq
 */
export const SetConversationCollectedDataReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.SetConversationCollectedDataReq",
  () => [
    { no: 1, name: "conversation_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "channel_type", kind: "enum", T: proto3.getEnumType(ChannelType) },
    { no: 3, name: "collected_data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 4, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * response after setting collected data for a conversation
 *
 * @generated from message api.v1alpha1.asm.SetConversationCollectedDataRes
 */
export const SetConversationCollectedDataRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.SetConversationCollectedDataRes",
  [],
);

/**
 * ListConversationsReq - request to list all conversations associated with a given user
 *
 * @generated from message api.v1alpha1.asm.ListConversationsReq
 */
export const ListConversationsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ListConversationsReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "authenticated_user", kind: "message", T: AuthenticatedUser },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "statuses", kind: "enum", T: proto3.getEnumType(ConversationStatus), repeated: true },
    { no: 5, name: "field_mask", kind: "message", T: FieldMask },
    { no: 6, name: "channel_types", kind: "enum", T: proto3.getEnumType(ChannelType), repeated: true },
  ],
);

/**
 * ListConversationsRes - result to listing a user's conversations
 *
 * @generated from message api.v1alpha1.asm.ListConversationsRes
 */
export const ListConversationsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.ListConversationsRes",
  () => [
    { no: 1, name: "conversations", kind: "message", T: OmniConversation, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetQueuesDetailsReq - request to get details of queues
 *
 * @generated from message api.v1alpha1.asm.GetQueuesDetailsReq
 */
export const GetQueuesDetailsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.GetQueuesDetailsReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "channel_types", kind: "enum", T: proto3.getEnumType(ChannelType), repeated: true },
    { no: 3, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
  ],
);

/**
 * PushEventsReq - request to push events
 *
 * @generated from message api.v1alpha1.asm.PushEventsReq
 */
export const PushEventsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.PushEventsReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "events", kind: "message", T: AsmEvent, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.PushEventsRes
 */
export const PushEventsRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.PushEventsRes",
  [],
);

/**
 * @generated from message api.v1alpha1.asm.EnableVoiceReq
 */
export const EnableVoiceReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.EnableVoiceReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.EnableVoiceRes
 */
export const EnableVoiceRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.EnableVoiceRes",
  () => [
    { no: 1, name: "voice_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "voice_registration", kind: "message", T: VoiceRegistration },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.DisableVoiceReq
 */
export const DisableVoiceReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.DisableVoiceReq",
  () => [
    { no: 1, name: "asm_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
  ],
);

/**
 * @generated from message api.v1alpha1.asm.DisableVoiceRes
 */
export const DisableVoiceRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.asm.DisableVoiceRes",
  [],
);

