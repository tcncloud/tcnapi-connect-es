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

// @generated by protoc-gen-connect-es v0.10.0
// @generated from file api/v0alpha/acd.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ACDGetAllAgentsStatusesReply, ACDGetAllAgentsStatusesRequest, AgentDisconnectReply, AgentDisconnectRequest, AgentGetCallFromHoldReply, AgentGetCallFromHoldRequest, AgentGetConnectedPartyReply, AgentGetConnectedPartyRequest, AgentGetSpecificCallFromHoldReply, AgentGetSpecificCallFromHoldRequest, AgentGetStatusReply, AgentGetStatusRequest, AgentGUIBusyReply, AgentGUIBusyRequest, AgentIntercomAcceptReply, AgentIntercomAcceptRequest, AgentIntercomCancelReply, AgentIntercomCancelRequest, AgentIntercomRejectReply, AgentIntercomRejectRequest, AgentIntercomReply, AgentIntercomRequest, AgentInviteTransferCallerToConferenceReply, AgentInviteTransferCallerToConferenceRequest, AgentMonitorCallsReply, AgentMonitorCallsRequest, AgentMuteReply, AgentMuteRequest, AgentPauseReply, AgentPauseRequest, AgentPBXApproveCallReply, AgentPBXApproveCallRequest, AgentPBXRejectCallReply, AgentPBXRejectCallRequest, AgentPutCallOnHoldReply, AgentPutCallOnHoldRequest, AgentReceiveMessageReply, AgentReceiveMessageRequest, AgentSessionEventReq, AgentSessionEventRes, AgentSetReadyReply, AgentSetReadyRequest, AgentUnmuteReply, AgentUnmuteRequest, CallerGetRawEventReply, CallerGetRawEventRequest, CallerRequeueReply, CallerRequeueRequest, CallerSendToVoicemailReply, CallerSendToVoicemailRequest, CreateWarmOutboundTransferMemberReply, CreateWarmOutboundTransferMemberRequest, DialManualCancelReply, DialManualCancelRequest, DialManualPrepareReply, DialManualPrepareRequest, DialPreviewPrepareReply, DialPreviewPrepareRequest, GetAgentCallCountsReq, GetAgentCallCountsRes, GetCallerLostPeerReply, GetCallerLostPeerRequest, HoldTransferMemberReq, HoldTransferMemberRes, ManagerAgentGetConnectedPartyReply, ManagerAgentGetConnectedPartyRequest, PeerAgentWithCallerReply, PeerAgentWithCallerRequest, PlayDTMFReply, PlayDTMFRequest, PlaySoundboardEntityReq, PlaySoundboardEntityRes, RemoveTransferMemberReply, RemoveTransferMemberRequest, StopSoundboardEntityReq, StopSoundboardEntityRes, TransferColdToAgentReply, TransferColdToAgentRequest, TransferColdToOutboundReply, TransferColdToOutboundRequest, TransferWarmToAgentApproveReply, TransferWarmToAgentApproveRequest, TransferWarmToAgentCancelReply, TransferWarmToAgentCancelRequest, TransferWarmToAgentStartReply, TransferWarmToAgentStartRequest, TransferWarmToOutboundApproveReply, TransferWarmToOutboundApproveRequest, TransferWarmToOutboundCancelReply, TransferWarmToOutboundCancelRequest, TransferWarmToOutboundStartReply, TransferWarmToOutboundStartRequest, UnholdTransferMemberReq, UnholdTransferMemberRes, UpdateAgentSkillsReply, UpdateAgentSkillsRequest, WarmCallerTransferApproveReq, WarmCallerTransferApproveRes, WarmCallerTransferCancelReq, WarmCallerTransferCancelRes, WarmCallerTransferStartReq, WarmCallerTransferStartRes } from "./acd_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for interacting with TCN's Agent Call Distribution system.
 * Accessing all of the methods require an authenticated user with the correct
 * permissions.
 *
 * Register an agent defined by AgentRegisterRequest message.
 * This method can be used only once, recalling this method for an
 * existing agent it will terminate the audio and web stream.
 * The method will return an AgentRegisterReply message that will
 * contain all the necessary informations to establish the audio channel
 * for the agent.
 * See also:
 * api/p3api.proto#P3Api.GetAgentSession() method
 * Required permissions:
 *      TODO: add the required permissions here
 * Errors:
 *      TODO: add the real error messages here
 *    - grpc.Invalid: either the session_sid or hunt_group_id provided in request are invalid,
 *              check the associated error message for extra information
 *    - grpc.NotFound:
 *
 * @generated from service api.v0alpha.Acd
 */
export const Acd = {
  typeName: "api.v0alpha.Acd",
  methods: {
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetStatusStream
     */
    agentGetStatusStream: {
      name: "AgentGetStatusStream",
      I: AgentGetStatusRequest,
      O: AgentGetStatusReply,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetStatus
     */
    agentGetStatus: {
      name: "AgentGetStatus",
      I: AgentGetStatusRequest,
      O: AgentGetStatusReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetConnectedParty
     */
    agentGetConnectedParty: {
      name: "AgentGetConnectedParty",
      I: AgentGetConnectedPartyRequest,
      O: AgentGetConnectedPartyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.ManagerAgentGetConnectedParty
     */
    managerAgentGetConnectedParty: {
      name: "ManagerAgentGetConnectedParty",
      I: ManagerAgentGetConnectedPartyRequest,
      O: ManagerAgentGetConnectedPartyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercom
     */
    agentIntercom: {
      name: "AgentIntercom",
      I: AgentIntercomRequest,
      O: AgentIntercomReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomAccept
     */
    agentIntercomAccept: {
      name: "AgentIntercomAccept",
      I: AgentIntercomAcceptRequest,
      O: AgentIntercomAcceptReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomReject
     */
    agentIntercomReject: {
      name: "AgentIntercomReject",
      I: AgentIntercomRejectRequest,
      O: AgentIntercomRejectReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomCancel
     */
    agentIntercomCancel: {
      name: "AgentIntercomCancel",
      I: AgentIntercomCancelRequest,
      O: AgentIntercomCancelReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialManualPrepare
     */
    dialManualPrepare: {
      name: "DialManualPrepare",
      I: DialManualPrepareRequest,
      O: DialManualPrepareReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialManualCancel
     */
    dialManualCancel: {
      name: "DialManualCancel",
      I: DialManualCancelRequest,
      O: DialManualCancelReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialPreviewPrepare
     */
    dialPreviewPrepare: {
      name: "DialPreviewPrepare",
      I: DialPreviewPrepareRequest,
      O: DialPreviewPrepareReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPause
     */
    agentPause: {
      name: "AgentPause",
      I: AgentPauseRequest,
      O: AgentPauseReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentSetReady
     */
    agentSetReady: {
      name: "AgentSetReady",
      I: AgentSetReadyRequest,
      O: AgentSetReadyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGUIBusy
     */
    agentGUIBusy: {
      name: "AgentGUIBusy",
      I: AgentGUIBusyRequest,
      O: AgentGUIBusyReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.ReportAgentSessionEvent
     */
    reportAgentSessionEvent: {
      name: "ReportAgentSessionEvent",
      I: AgentSessionEventReq,
      O: AgentSessionEventRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerRequeue
     */
    callerRequeue: {
      name: "CallerRequeue",
      I: CallerRequeueRequest,
      O: CallerRequeueReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentDisconnect
     */
    agentDisconnect: {
      name: "AgentDisconnect",
      I: AgentDisconnectRequest,
      O: AgentDisconnectReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundCancel
     */
    transferWarmToOutboundCancel: {
      name: "TransferWarmToOutboundCancel",
      I: TransferWarmToOutboundCancelRequest,
      O: TransferWarmToOutboundCancelReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentCancel
     */
    transferWarmToAgentCancel: {
      name: "TransferWarmToAgentCancel",
      I: TransferWarmToAgentCancelRequest,
      O: TransferWarmToAgentCancelReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundApprove
     */
    transferWarmToOutboundApprove: {
      name: "TransferWarmToOutboundApprove",
      I: TransferWarmToOutboundApproveRequest,
      O: TransferWarmToOutboundApproveReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentApprove
     */
    transferWarmToAgentApprove: {
      name: "TransferWarmToAgentApprove",
      I: TransferWarmToAgentApproveRequest,
      O: TransferWarmToAgentApproveReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerSendToVoicemail
     */
    callerSendToVoicemail: {
      name: "CallerSendToVoicemail",
      I: CallerSendToVoicemailRequest,
      O: CallerSendToVoicemailReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentInviteTransferCallerToConference
     */
    agentInviteTransferCallerToConference: {
      name: "AgentInviteTransferCallerToConference",
      I: AgentInviteTransferCallerToConferenceRequest,
      O: AgentInviteTransferCallerToConferenceReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentMonitorCalls
     */
    agentMonitorCalls: {
      name: "AgentMonitorCalls",
      I: AgentMonitorCallsRequest,
      O: AgentMonitorCallsReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferColdToOutbound
     */
    transferColdToOutbound: {
      name: "TransferColdToOutbound",
      I: TransferColdToOutboundRequest,
      O: TransferColdToOutboundReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferColdToAgent
     */
    transferColdToAgent: {
      name: "TransferColdToAgent",
      I: TransferColdToAgentRequest,
      O: TransferColdToAgentReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundStart
     */
    transferWarmToOutboundStart: {
      name: "TransferWarmToOutboundStart",
      I: TransferWarmToOutboundStartRequest,
      O: TransferWarmToOutboundStartReply,
      kind: MethodKind.Unary,
    },
    /**
     * creates a new outbound transfer member using the given src/dst numbers
     *
     * @generated from rpc api.v0alpha.Acd.CreateWarmOutboundTransferMember
     */
    createWarmOutboundTransferMember: {
      name: "CreateWarmOutboundTransferMember",
      I: CreateWarmOutboundTransferMemberRequest,
      O: CreateWarmOutboundTransferMemberReply,
      kind: MethodKind.Unary,
    },
    /**
     * hangups a transfer member using the given member identifier
     *
     * @generated from rpc api.v0alpha.Acd.RemoveTransferMember
     */
    removeTransferMember: {
      name: "RemoveTransferMember",
      I: RemoveTransferMemberRequest,
      O: RemoveTransferMemberReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentStart
     */
    transferWarmToAgentStart: {
      name: "TransferWarmToAgentStart",
      I: TransferWarmToAgentStartRequest,
      O: TransferWarmToAgentStartReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetCallFromHold
     */
    agentGetCallFromHold: {
      name: "AgentGetCallFromHold",
      I: AgentGetCallFromHoldRequest,
      O: AgentGetCallFromHoldReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetSpecificCallFromHold
     */
    agentGetSpecificCallFromHold: {
      name: "AgentGetSpecificCallFromHold",
      I: AgentGetSpecificCallFromHoldRequest,
      O: AgentGetSpecificCallFromHoldReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.ACDGetAllAgentsStatuses
     */
    aCDGetAllAgentsStatuses: {
      name: "ACDGetAllAgentsStatuses",
      I: ACDGetAllAgentsStatusesRequest,
      O: ACDGetAllAgentsStatusesReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPutCallOnHold
     */
    agentPutCallOnHold: {
      name: "AgentPutCallOnHold",
      I: AgentPutCallOnHoldRequest,
      O: AgentPutCallOnHoldReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentReceiveMessage
     */
    agentReceiveMessage: {
      name: "AgentReceiveMessage",
      I: AgentReceiveMessageRequest,
      O: AgentReceiveMessageReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPBXApproveCall
     */
    agentPBXApproveCall: {
      name: "AgentPBXApproveCall",
      I: AgentPBXApproveCallRequest,
      O: AgentPBXApproveCallReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPBXRejectCall
     */
    agentPBXRejectCall: {
      name: "AgentPBXRejectCall",
      I: AgentPBXRejectCallRequest,
      O: AgentPBXRejectCallReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.GetCallerLostPeer
     */
    getCallerLostPeer: {
      name: "GetCallerLostPeer",
      I: GetCallerLostPeerRequest,
      O: GetCallerLostPeerReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerGetRawEvent
     */
    callerGetRawEvent: {
      name: "CallerGetRawEvent",
      I: CallerGetRawEventRequest,
      O: CallerGetRawEventReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.PeerAgentWithCaller
     */
    peerAgentWithCaller: {
      name: "PeerAgentWithCaller",
      I: PeerAgentWithCallerRequest,
      O: PeerAgentWithCallerReply,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.HoldTransferMember
     */
    holdTransferMember: {
      name: "HoldTransferMember",
      I: HoldTransferMemberReq,
      O: HoldTransferMemberRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.UnholdTransferMember
     */
    unholdTransferMember: {
      name: "UnholdTransferMember",
      I: UnholdTransferMemberReq,
      O: UnholdTransferMemberRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.GetAgentCallCounts
     */
    getAgentCallCounts: {
      name: "GetAgentCallCounts",
      I: GetAgentCallCountsReq,
      O: GetAgentCallCountsRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to start a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferStart
     */
    warmCallerTransferStart: {
      name: "WarmCallerTransferStart",
      I: WarmCallerTransferStartReq,
      O: WarmCallerTransferStartRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to cancel a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferCancel
     */
    warmCallerTransferCancel: {
      name: "WarmCallerTransferCancel",
      I: WarmCallerTransferCancelReq,
      O: WarmCallerTransferCancelRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to approve a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferApprove
     */
    warmCallerTransferApprove: {
      name: "WarmCallerTransferApprove",
      I: WarmCallerTransferApproveReq,
      O: WarmCallerTransferApproveRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to play a soundboard file for a customer
     *
     * @generated from rpc api.v0alpha.Acd.PlaySoundboardEntity
     */
    playSoundboardEntity: {
      name: "PlaySoundboardEntity",
      I: PlaySoundboardEntityReq,
      O: PlaySoundboardEntityRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to stop a soundboard file for a customer
     *
     * @generated from rpc api.v0alpha.Acd.StopSoundboardEntity
     */
    stopSoundboardEntity: {
      name: "StopSoundboardEntity",
      I: StopSoundboardEntityReq,
      O: StopSoundboardEntityRes,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to update an agent's skills
     *
     * @generated from rpc api.v0alpha.Acd.UpdateAgentSkills
     */
    updateAgentSkills: {
      name: "UpdateAgentSkills",
      I: UpdateAgentSkillsRequest,
      O: UpdateAgentSkillsReply,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to play a dtmf tone to all members of a the agent's conference
     *
     * @generated from rpc api.v0alpha.Acd.PlayDTMF
     */
    playDTMF: {
      name: "PlayDTMF",
      I: PlayDTMFRequest,
      O: PlayDTMFReply,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to mute and agent's mic
     *
     * @generated from rpc api.v0alpha.Acd.AgentMute
     */
    agentMute: {
      name: "AgentMute",
      I: AgentMuteRequest,
      O: AgentMuteReply,
      kind: MethodKind.Unary,
    },
    /**
     * endpoint used to unmute and agent's mic
     *
     * @generated from rpc api.v0alpha.Acd.AgentUnmute
     */
    agentUnmute: {
      name: "AgentUnmute",
      I: AgentUnmuteRequest,
      O: AgentUnmuteReply,
      kind: MethodKind.Unary,
    },
  }
};

