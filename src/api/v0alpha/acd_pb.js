// Copyright (c) 2019, TCN Inc.
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

// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v0alpha/acd.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AgentSessionLogActionKey_Enum, AgentStatus_Enum, CallType_Enum, DTMFDigit, HoldType, ReplaceConfig_Enum, TransferMember } from "../commons/acd_pb.js";

/**
 * @generated from message api.v0alpha.AgentGetStatusRequest
 */
export const AgentGetStatusRequest = proto3.makeMessageType(
  "api.v0alpha.AgentGetStatusRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "perform_keep_alive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGetStatusReply
 */
export const AgentGetStatusReply = proto3.makeMessageType(
  "api.v0alpha.AgentGetStatusReply",
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
    { no: 14, name: "transfer_members", kind: "message", T: TransferMember, repeated: true },
    { no: 15, name: "agent_is_muted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGetConnectedPartyRequest
 */
export const AgentGetConnectedPartyRequest = proto3.makeMessageType(
  "api.v0alpha.AgentGetConnectedPartyRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGetConnectedPartyReply
 */
export const AgentGetConnectedPartyReply = proto3.makeMessageType(
  "api.v0alpha.AgentGetConnectedPartyReply",
  () => [
    { no: 2, name: "call_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.ManagerAgentGetConnectedPartyRequest
 */
export const ManagerAgentGetConnectedPartyRequest = proto3.makeMessageType(
  "api.v0alpha.ManagerAgentGetConnectedPartyRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.ManagerAgentGetConnectedPartyReply
 */
export const ManagerAgentGetConnectedPartyReply = proto3.makeMessageType(
  "api.v0alpha.ManagerAgentGetConnectedPartyReply",
  () => [
    { no: 2, name: "call_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.AgentIntercomRequest
 */
export const AgentIntercomRequest = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomRequest",
  () => [
    { no: 3, name: "target_agent_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentIntercomReply
 */
export const AgentIntercomReply = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentIntercomAcceptRequest
 */
export const AgentIntercomAcceptRequest = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomAcceptRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentIntercomAcceptReply
 */
export const AgentIntercomAcceptReply = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomAcceptReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentIntercomRejectRequest
 */
export const AgentIntercomRejectRequest = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomRejectRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentIntercomRejectReply
 */
export const AgentIntercomRejectReply = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomRejectReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentIntercomCancelRequest
 */
export const AgentIntercomCancelRequest = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomCancelRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentIntercomCancelReply
 */
export const AgentIntercomCancelReply = proto3.makeMessageType(
  "api.v0alpha.AgentIntercomCancelReply",
  [],
);

/**
 * @generated from message api.v0alpha.DialManualPrepareRequest
 */
export const DialManualPrepareRequest = proto3.makeMessageType(
  "api.v0alpha.DialManualPrepareRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DialManualPrepareReply
 */
export const DialManualPrepareReply = proto3.makeMessageType(
  "api.v0alpha.DialManualPrepareReply",
  [],
);

/**
 * @generated from message api.v0alpha.DialManualCancelRequest
 */
export const DialManualCancelRequest = proto3.makeMessageType(
  "api.v0alpha.DialManualCancelRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DialManualCancelReply
 */
export const DialManualCancelReply = proto3.makeMessageType(
  "api.v0alpha.DialManualCancelReply",
  [],
);

/**
 * @generated from message api.v0alpha.DialPreviewPrepareRequest
 */
export const DialPreviewPrepareRequest = proto3.makeMessageType(
  "api.v0alpha.DialPreviewPrepareRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.DialPreviewPrepareReply
 */
export const DialPreviewPrepareReply = proto3.makeMessageType(
  "api.v0alpha.DialPreviewPrepareReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentPauseRequest
 */
export const AgentPauseRequest = proto3.makeMessageType(
  "api.v0alpha.AgentPauseRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentPauseReply
 */
export const AgentPauseReply = proto3.makeMessageType(
  "api.v0alpha.AgentPauseReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentSetReadyRequest
 */
export const AgentSetReadyRequest = proto3.makeMessageType(
  "api.v0alpha.AgentSetReadyRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentSetReadyReply
 */
export const AgentSetReadyReply = proto3.makeMessageType(
  "api.v0alpha.AgentSetReadyReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentGUIBusyRequest
 */
export const AgentGUIBusyRequest = proto3.makeMessageType(
  "api.v0alpha.AgentGUIBusyRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGUIBusyReply
 */
export const AgentGUIBusyReply = proto3.makeMessageType(
  "api.v0alpha.AgentGUIBusyReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentDisconnectRequest
 */
export const AgentDisconnectRequest = proto3.makeMessageType(
  "api.v0alpha.AgentDisconnectRequest",
  () => [
    { no: 1, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentDisconnectReply
 */
export const AgentDisconnectReply = proto3.makeMessageType(
  "api.v0alpha.AgentDisconnectReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentSessionEventReq
 */
export const AgentSessionEventReq = proto3.makeMessageType(
  "api.v0alpha.AgentSessionEventReq",
  () => [
    { no: 3, name: "agent_session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "action_key", kind: "enum", T: proto3.getEnumType(AgentSessionLogActionKey_Enum) },
    { no: 11, name: "action_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentSessionEventRes
 */
export const AgentSessionEventRes = proto3.makeMessageType(
  "api.v0alpha.AgentSessionEventRes",
  [],
);

/**
 * @generated from message api.v0alpha.CallerRequeueRequest
 */
export const CallerRequeueRequest = proto3.makeMessageType(
  "api.v0alpha.CallerRequeueRequest",
  () => [
    { no: 3, name: "new_config_folder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 5, name: "replace_skills", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "replace_config", kind: "enum", T: proto3.getEnumType(ReplaceConfig_Enum) },
    { no: 7, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "voicemail_box", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.CallerRequeueReply
 */
export const CallerRequeueReply = proto3.makeMessageType(
  "api.v0alpha.CallerRequeueReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentCancelRequest
 */
export const TransferWarmToAgentCancelRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentCancelRequest",
  () => [
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentCancelReply
 */
export const TransferWarmToAgentCancelReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentCancelReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferWarmToOutboundCancelRequest
 */
export const TransferWarmToOutboundCancelRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundCancelRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToOutboundCancelReply
 */
export const TransferWarmToOutboundCancelReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundCancelReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentApproveRequest
 */
export const TransferWarmToAgentApproveRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentApproveRequest",
  () => [
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentApproveReply
 */
export const TransferWarmToAgentApproveReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentApproveReply",
  [],
);

/**
 * the request used to approve a warm outbound transfer
 *
 * @generated from message api.v0alpha.TransferWarmToOutboundApproveRequest
 */
export const TransferWarmToOutboundApproveRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundApproveRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "member_identifiers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToOutboundApproveReply
 */
export const TransferWarmToOutboundApproveReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundApproveReply",
  [],
);

/**
 * @generated from message api.v0alpha.CallerSendToVoicemailRequest
 */
export const CallerSendToVoicemailRequest = proto3.makeMessageType(
  "api.v0alpha.CallerSendToVoicemailRequest",
  () => [
    { no: 3, name: "mailbox", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.CallerSendToVoicemailReply
 */
export const CallerSendToVoicemailReply = proto3.makeMessageType(
  "api.v0alpha.CallerSendToVoicemailReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentInviteTransferCallerToConferenceRequest
 */
export const AgentInviteTransferCallerToConferenceRequest = proto3.makeMessageType(
  "api.v0alpha.AgentInviteTransferCallerToConferenceRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentInviteTransferCallerToConferenceReply
 */
export const AgentInviteTransferCallerToConferenceReply = proto3.makeMessageType(
  "api.v0alpha.AgentInviteTransferCallerToConferenceReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentMonitorCallsRequest
 */
export const AgentMonitorCallsRequest = proto3.makeMessageType(
  "api.v0alpha.AgentMonitorCallsRequest",
  () => [
    { no: 3, name: "monitor", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentMonitorCallsReply
 */
export const AgentMonitorCallsReply = proto3.makeMessageType(
  "api.v0alpha.AgentMonitorCallsReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferColdToOutboundRequest
 */
export const TransferColdToOutboundRequest = proto3.makeMessageType(
  "api.v0alpha.TransferColdToOutboundRequest",
  () => [
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "destination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reserved_carriers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferColdToOutboundReply
 */
export const TransferColdToOutboundReply = proto3.makeMessageType(
  "api.v0alpha.TransferColdToOutboundReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferColdToAgentRequest
 */
export const TransferColdToAgentRequest = proto3.makeMessageType(
  "api.v0alpha.TransferColdToAgentRequest",
  () => [
    { no: 3, name: "destination_agent_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferColdToAgentReply
 */
export const TransferColdToAgentReply = proto3.makeMessageType(
  "api.v0alpha.TransferColdToAgentReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferWarmToOutboundStartRequest
 */
export const TransferWarmToOutboundStartRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundStartRequest",
  () => [
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "destination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reserved_carriers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "caller_hold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToOutboundStartReply
 */
export const TransferWarmToOutboundStartReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToOutboundStartReply",
  [],
);

/**
 * request to add a new outbound transfer member
 *
 * @generated from message api.v0alpha.CreateWarmOutboundTransferMemberRequest
 */
export const CreateWarmOutboundTransferMemberRequest = proto3.makeMessageType(
  "api.v0alpha.CreateWarmOutboundTransferMemberRequest",
  () => [
    { no: 3, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "destination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "reserved_carriers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * request to add a new outbound transfer member
 *
 * @generated from message api.v0alpha.CreateWarmOutboundTransferMemberReply
 */
export const CreateWarmOutboundTransferMemberReply = proto3.makeMessageType(
  "api.v0alpha.CreateWarmOutboundTransferMemberReply",
  [],
);

/**
 * request to add a new outbound transfer member
 *
 * @generated from message api.v0alpha.RemoveTransferMemberRequest
 */
export const RemoveTransferMemberRequest = proto3.makeMessageType(
  "api.v0alpha.RemoveTransferMemberRequest",
  () => [
    { no: 1, name: "member_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * request to hangup a transfer member
 *
 * @generated from message api.v0alpha.RemoveTransferMemberReply
 */
export const RemoveTransferMemberReply = proto3.makeMessageType(
  "api.v0alpha.RemoveTransferMemberReply",
  [],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentStartRequest
 */
export const TransferWarmToAgentStartRequest = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentStartRequest",
  () => [
    { no: 3, name: "destination_agent_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "caller_hold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
  ],
);

/**
 * @generated from message api.v0alpha.TransferWarmToAgentStartReply
 */
export const TransferWarmToAgentStartReply = proto3.makeMessageType(
  "api.v0alpha.TransferWarmToAgentStartReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentGetCallFromHoldRequest
 */
export const AgentGetCallFromHoldRequest = proto3.makeMessageType(
  "api.v0alpha.AgentGetCallFromHoldRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGetCallFromHoldReply
 */
export const AgentGetCallFromHoldReply = proto3.makeMessageType(
  "api.v0alpha.AgentGetCallFromHoldReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentGetSpecificCallFromHoldRequest
 */
export const AgentGetSpecificCallFromHoldRequest = proto3.makeMessageType(
  "api.v0alpha.AgentGetSpecificCallFromHoldRequest",
  () => [
    { no: 3, name: "call_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentGetSpecificCallFromHoldReply
 */
export const AgentGetSpecificCallFromHoldReply = proto3.makeMessageType(
  "api.v0alpha.AgentGetSpecificCallFromHoldReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentPutCallOnHoldRequest
 */
export const AgentPutCallOnHoldRequest = proto3.makeMessageType(
  "api.v0alpha.AgentPutCallOnHoldRequest",
  () => [
    { no: 1, name: "hold_type", kind: "enum", T: proto3.getEnumType(HoldType) },
    { no: 2, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentPutCallOnHoldReply
 */
export const AgentPutCallOnHoldReply = proto3.makeMessageType(
  "api.v0alpha.AgentPutCallOnHoldReply",
  [],
);

/**
 * @generated from message api.v0alpha.ACDGetAllAgentsStatusesRequest
 */
export const ACDGetAllAgentsStatusesRequest = proto3.makeMessageType(
  "api.v0alpha.ACDGetAllAgentsStatusesRequest",
  () => [
    { no: 2, name: "skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "all_skills_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentStatusDetails
 */
export const AgentStatusDetails = proto3.makeMessageType(
  "api.v0alpha.AgentStatusDetails",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "current_session_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "status_desc", kind: "enum", T: proto3.getEnumType(AgentStatus_Enum) },
    { no: 5, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.ACDGetAllAgentsStatusesReply
 */
export const ACDGetAllAgentsStatusesReply = proto3.makeMessageType(
  "api.v0alpha.ACDGetAllAgentsStatusesReply",
  () => [
    { no: 1, name: "agent_status_details", kind: "message", T: AgentStatusDetails, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.AgentReceiveMessageRequest
 */
export const AgentReceiveMessageRequest = proto3.makeMessageType(
  "api.v0alpha.AgentReceiveMessageRequest",
  () => [
    { no: 3, name: "minimum_timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentReceiveMessageReply
 */
export const AgentReceiveMessageReply = proto3.makeMessageType(
  "api.v0alpha.AgentReceiveMessageReply",
  () => [
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentPBXRejectCallRequest
 */
export const AgentPBXRejectCallRequest = proto3.makeMessageType(
  "api.v0alpha.AgentPBXRejectCallRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentPBXRejectCallReply
 */
export const AgentPBXRejectCallReply = proto3.makeMessageType(
  "api.v0alpha.AgentPBXRejectCallReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentPBXApproveCallRequest
 */
export const AgentPBXApproveCallRequest = proto3.makeMessageType(
  "api.v0alpha.AgentPBXApproveCallRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentPBXApproveCallReply
 */
export const AgentPBXApproveCallReply = proto3.makeMessageType(
  "api.v0alpha.AgentPBXApproveCallReply",
  [],
);

/**
 * @generated from message api.v0alpha.GetCallerLostPeerRequest
 */
export const GetCallerLostPeerRequest = proto3.makeMessageType(
  "api.v0alpha.GetCallerLostPeerRequest",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.GetCallerLostPeerReply
 */
export const GetCallerLostPeerReply = proto3.makeMessageType(
  "api.v0alpha.GetCallerLostPeerReply",
  () => [
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.CallerGetRawEventRequest
 */
export const CallerGetRawEventRequest = proto3.makeMessageType(
  "api.v0alpha.CallerGetRawEventRequest",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
  ],
);

/**
 * @generated from message api.v0alpha.CallerGetRawEventReply
 */
export const CallerGetRawEventReply = proto3.makeMessageType(
  "api.v0alpha.CallerGetRawEventReply",
  () => [
    { no: 1, name: "event", kind: "message", T: CallerEvent },
  ],
);

/**
 * This is the front end version of the caller event. If more data is needed we can add.
 *
 * @generated from message api.v0alpha.CallerEvent
 */
export const CallerEvent = proto3.makeMessageType(
  "api.v0alpha.CallerEvent",
  () => [
    { no: 19, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
    { no: 20, name: "allSkills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 8 /* ScalarType.BOOL */} },
  ],
);

/**
 * @generated from message api.v0alpha.PeerAgentWithCallerRequest
 */
export const PeerAgentWithCallerRequest = proto3.makeMessageType(
  "api.v0alpha.PeerAgentWithCallerRequest",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 3, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.PeerAgentWithCallerReply
 */
export const PeerAgentWithCallerReply = proto3.makeMessageType(
  "api.v0alpha.PeerAgentWithCallerReply",
  [],
);

/**
 * @generated from message api.v0alpha.HoldTransferMemberReq
 */
export const HoldTransferMemberReq = proto3.makeMessageType(
  "api.v0alpha.HoldTransferMemberReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "member_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.HoldTransferMemberRes
 */
export const HoldTransferMemberRes = proto3.makeMessageType(
  "api.v0alpha.HoldTransferMemberRes",
  [],
);

/**
 * @generated from message api.v0alpha.UnholdTransferMemberReq
 */
export const UnholdTransferMemberReq = proto3.makeMessageType(
  "api.v0alpha.UnholdTransferMemberReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "member_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v0alpha.UnholdTransferMemberRes
 */
export const UnholdTransferMemberRes = proto3.makeMessageType(
  "api.v0alpha.UnholdTransferMemberRes",
  [],
);

/**
 * @generated from message api.v0alpha.GetAgentCallCountsReq
 */
export const GetAgentCallCountsReq = proto3.makeMessageType(
  "api.v0alpha.GetAgentCallCountsReq",
  () => [
    { no: 1, name: "agent_skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "agent_pbx_extensions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.GetAgentCallCountsRes
 */
export const GetAgentCallCountsRes = proto3.makeMessageType(
  "api.v0alpha.GetAgentCallCountsRes",
  () => [
    { no: 1, name: "agent_calls", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "skill_calls", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "on_hold_calls", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * message used to start a warm caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferStartReq
 */
export const WarmCallerTransferStartReq = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferStartReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 4, name: "caller_hold", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * message used in response to start a warm caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferStartRes
 */
export const WarmCallerTransferStartRes = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferStartRes",
  [],
);

/**
 * message used to cancel a warm caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferCancelReq
 */
export const WarmCallerTransferCancelReq = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferCancelReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * message used in response to canceling a wamr caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferCancelRes
 */
export const WarmCallerTransferCancelRes = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferCancelRes",
  [],
);

/**
 * message used to approve a warm caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferApproveReq
 */
export const WarmCallerTransferApproveReq = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferApproveReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * message used in response to approving a wamr caller transfer
 *
 * @generated from message api.v0alpha.WarmCallerTransferApproveRes
 */
export const WarmCallerTransferApproveRes = proto3.makeMessageType(
  "api.v0alpha.WarmCallerTransferApproveRes",
  [],
);

/**
 * message used in a request for playing audio from the soundboard
 *
 * @generated from message api.v0alpha.PlaySoundboardEntityReq
 */
export const PlaySoundboardEntityReq = proto3.makeMessageType(
  "api.v0alpha.PlaySoundboardEntityReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "soundboard_entity_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * message used in a response for playing audio from the soundboard
 *
 * @generated from message api.v0alpha.PlaySoundboardEntityRes
 */
export const PlaySoundboardEntityRes = proto3.makeMessageType(
  "api.v0alpha.PlaySoundboardEntityRes",
  () => [
    { no: 1, name: "sound_instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * message used in a request for stopping audio from the soundbooard
 *
 * @generated from message api.v0alpha.StopSoundboardEntityReq
 */
export const StopSoundboardEntityReq = proto3.makeMessageType(
  "api.v0alpha.StopSoundboardEntityReq",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "sound_instance_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * message used in a response for stopping audio from the soundbooard
 *
 * @generated from message api.v0alpha.StopSoundboardEntityRes
 */
export const StopSoundboardEntityRes = proto3.makeMessageType(
  "api.v0alpha.StopSoundboardEntityRes",
  [],
);

/**
 * message used to update an agent's skills
 *
 * @generated from message api.v0alpha.UpdateAgentSkillsRequest
 */
export const UpdateAgentSkillsRequest = proto3.makeMessageType(
  "api.v0alpha.UpdateAgentSkillsRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "skills", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 4, name: "replace_skills", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * message used in response to updating an agent's skills
 *
 * @generated from message api.v0alpha.UpdateAgentSkillsReply
 */
export const UpdateAgentSkillsReply = proto3.makeMessageType(
  "api.v0alpha.UpdateAgentSkillsReply",
  [],
);

/**
 * message used to play a dtmf tone in an agent's conference
 *
 * @generated from message api.v0alpha.PlayDTMFRequest
 */
export const PlayDTMFRequest = proto3.makeMessageType(
  "api.v0alpha.PlayDTMFRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "dtmf_digits", kind: "enum", T: proto3.getEnumType(DTMFDigit), repeated: true },
  ],
);

/**
 * message used in response to playing a dtmf tone in an agent's conference
 *
 * @generated from message api.v0alpha.PlayDTMFReply
 */
export const PlayDTMFReply = proto3.makeMessageType(
  "api.v0alpha.PlayDTMFReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentMuteRequest
 */
export const AgentMuteRequest = proto3.makeMessageType(
  "api.v0alpha.AgentMuteRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentMuteReply
 */
export const AgentMuteReply = proto3.makeMessageType(
  "api.v0alpha.AgentMuteReply",
  [],
);

/**
 * @generated from message api.v0alpha.AgentUnmuteRequest
 */
export const AgentUnmuteRequest = proto3.makeMessageType(
  "api.v0alpha.AgentUnmuteRequest",
  () => [
    { no: 1, name: "session_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v0alpha.AgentUnmuteReply
 */
export const AgentUnmuteReply = proto3.makeMessageType(
  "api.v0alpha.AgentUnmuteReply",
  [],
);

