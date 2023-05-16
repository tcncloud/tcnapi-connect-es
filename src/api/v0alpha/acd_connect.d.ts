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

// @generated by protoc-gen-connect-es v0.8.6
// @generated from file api/v0alpha/acd.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ACDGetAllAgentsStatusesReply, ACDGetAllAgentsStatusesRequest, AgentDisconnectReply, AgentDisconnectRequest, AgentGetCallFromHoldReply, AgentGetCallFromHoldRequest, AgentGetConnectedPartyReply, AgentGetConnectedPartyRequest, AgentGetSpecificCallFromHoldReply, AgentGetSpecificCallFromHoldRequest, AgentGetStatusReply, AgentGetStatusRequest, AgentGUIBusyReply, AgentGUIBusyRequest, AgentIntercomAcceptReply, AgentIntercomAcceptRequest, AgentIntercomCancelReply, AgentIntercomCancelRequest, AgentIntercomRejectReply, AgentIntercomRejectRequest, AgentIntercomReply, AgentIntercomRequest, AgentInviteTransferCallerToConferenceReply, AgentInviteTransferCallerToConferenceRequest, AgentMonitorCallsReply, AgentMonitorCallsRequest, AgentMuteReply, AgentMuteRequest, AgentPauseReply, AgentPauseRequest, AgentPBXApproveCallReply, AgentPBXApproveCallRequest, AgentPBXRejectCallReply, AgentPBXRejectCallRequest, AgentPutCallOnHoldReply, AgentPutCallOnHoldRequest, AgentReceiveMessageReply, AgentReceiveMessageRequest, AgentSessionEventReq, AgentSessionEventRes, AgentSetReadyReply, AgentSetReadyRequest, AgentUnmuteReply, AgentUnmuteRequest, CallerGetRawEventReply, CallerGetRawEventRequest, CallerRequeueReply, CallerRequeueRequest, CallerSendToVoicemailReply, CallerSendToVoicemailRequest, CreateWarmOutboundTransferMemberReply, CreateWarmOutboundTransferMemberRequest, DialManualCancelReply, DialManualCancelRequest, DialManualPrepareReply, DialManualPrepareRequest, DialPreviewPrepareReply, DialPreviewPrepareRequest, GetAgentCallCountsReq, GetAgentCallCountsRes, GetCallerLostPeerReply, GetCallerLostPeerRequest, HoldTransferMemberReq, HoldTransferMemberRes, PeerAgentWithCallerReply, PeerAgentWithCallerRequest, PlayDTMFReply, PlayDTMFRequest, PlaySoundboardEntityReq, PlaySoundboardEntityRes, RemoveTransferMemberReply, RemoveTransferMemberRequest, StopSoundboardEntityReq, StopSoundboardEntityRes, TransferColdToAgentReply, TransferColdToAgentRequest, TransferColdToOutboundReply, TransferColdToOutboundRequest, TransferWarmToAgentApproveReply, TransferWarmToAgentApproveRequest, TransferWarmToAgentCancelReply, TransferWarmToAgentCancelRequest, TransferWarmToAgentStartReply, TransferWarmToAgentStartRequest, TransferWarmToOutboundApproveReply, TransferWarmToOutboundApproveRequest, TransferWarmToOutboundCancelReply, TransferWarmToOutboundCancelRequest, TransferWarmToOutboundStartReply, TransferWarmToOutboundStartRequest, UnholdTransferMemberReq, UnholdTransferMemberRes, UpdateAgentSkillsReply, UpdateAgentSkillsRequest, WarmCallerTransferApproveReq, WarmCallerTransferApproveRes, WarmCallerTransferCancelReq, WarmCallerTransferCancelRes, WarmCallerTransferStartReq, WarmCallerTransferStartRes } from "./acd_pb.js";
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
export declare const Acd: {
  readonly typeName: "api.v0alpha.Acd",
  readonly methods: {
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetStatusStream
     */
    readonly agentGetStatusStream: {
      readonly name: "AgentGetStatusStream",
      readonly I: typeof AgentGetStatusRequest,
      readonly O: typeof AgentGetStatusReply,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetStatus
     */
    readonly agentGetStatus: {
      readonly name: "AgentGetStatus",
      readonly I: typeof AgentGetStatusRequest,
      readonly O: typeof AgentGetStatusReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetConnectedParty
     */
    readonly agentGetConnectedParty: {
      readonly name: "AgentGetConnectedParty",
      readonly I: typeof AgentGetConnectedPartyRequest,
      readonly O: typeof AgentGetConnectedPartyReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercom
     */
    readonly agentIntercom: {
      readonly name: "AgentIntercom",
      readonly I: typeof AgentIntercomRequest,
      readonly O: typeof AgentIntercomReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomAccept
     */
    readonly agentIntercomAccept: {
      readonly name: "AgentIntercomAccept",
      readonly I: typeof AgentIntercomAcceptRequest,
      readonly O: typeof AgentIntercomAcceptReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomReject
     */
    readonly agentIntercomReject: {
      readonly name: "AgentIntercomReject",
      readonly I: typeof AgentIntercomRejectRequest,
      readonly O: typeof AgentIntercomRejectReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentIntercomCancel
     */
    readonly agentIntercomCancel: {
      readonly name: "AgentIntercomCancel",
      readonly I: typeof AgentIntercomCancelRequest,
      readonly O: typeof AgentIntercomCancelReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialManualPrepare
     */
    readonly dialManualPrepare: {
      readonly name: "DialManualPrepare",
      readonly I: typeof DialManualPrepareRequest,
      readonly O: typeof DialManualPrepareReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialManualCancel
     */
    readonly dialManualCancel: {
      readonly name: "DialManualCancel",
      readonly I: typeof DialManualCancelRequest,
      readonly O: typeof DialManualCancelReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.DialPreviewPrepare
     */
    readonly dialPreviewPrepare: {
      readonly name: "DialPreviewPrepare",
      readonly I: typeof DialPreviewPrepareRequest,
      readonly O: typeof DialPreviewPrepareReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPause
     */
    readonly agentPause: {
      readonly name: "AgentPause",
      readonly I: typeof AgentPauseRequest,
      readonly O: typeof AgentPauseReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentSetReady
     */
    readonly agentSetReady: {
      readonly name: "AgentSetReady",
      readonly I: typeof AgentSetReadyRequest,
      readonly O: typeof AgentSetReadyReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGUIBusy
     */
    readonly agentGUIBusy: {
      readonly name: "AgentGUIBusy",
      readonly I: typeof AgentGUIBusyRequest,
      readonly O: typeof AgentGUIBusyReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.ReportAgentSessionEvent
     */
    readonly reportAgentSessionEvent: {
      readonly name: "ReportAgentSessionEvent",
      readonly I: typeof AgentSessionEventReq,
      readonly O: typeof AgentSessionEventRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerRequeue
     */
    readonly callerRequeue: {
      readonly name: "CallerRequeue",
      readonly I: typeof CallerRequeueRequest,
      readonly O: typeof CallerRequeueReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentDisconnect
     */
    readonly agentDisconnect: {
      readonly name: "AgentDisconnect",
      readonly I: typeof AgentDisconnectRequest,
      readonly O: typeof AgentDisconnectReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundCancel
     */
    readonly transferWarmToOutboundCancel: {
      readonly name: "TransferWarmToOutboundCancel",
      readonly I: typeof TransferWarmToOutboundCancelRequest,
      readonly O: typeof TransferWarmToOutboundCancelReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentCancel
     */
    readonly transferWarmToAgentCancel: {
      readonly name: "TransferWarmToAgentCancel",
      readonly I: typeof TransferWarmToAgentCancelRequest,
      readonly O: typeof TransferWarmToAgentCancelReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundApprove
     */
    readonly transferWarmToOutboundApprove: {
      readonly name: "TransferWarmToOutboundApprove",
      readonly I: typeof TransferWarmToOutboundApproveRequest,
      readonly O: typeof TransferWarmToOutboundApproveReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentApprove
     */
    readonly transferWarmToAgentApprove: {
      readonly name: "TransferWarmToAgentApprove",
      readonly I: typeof TransferWarmToAgentApproveRequest,
      readonly O: typeof TransferWarmToAgentApproveReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerSendToVoicemail
     */
    readonly callerSendToVoicemail: {
      readonly name: "CallerSendToVoicemail",
      readonly I: typeof CallerSendToVoicemailRequest,
      readonly O: typeof CallerSendToVoicemailReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentInviteTransferCallerToConference
     */
    readonly agentInviteTransferCallerToConference: {
      readonly name: "AgentInviteTransferCallerToConference",
      readonly I: typeof AgentInviteTransferCallerToConferenceRequest,
      readonly O: typeof AgentInviteTransferCallerToConferenceReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentMonitorCalls
     */
    readonly agentMonitorCalls: {
      readonly name: "AgentMonitorCalls",
      readonly I: typeof AgentMonitorCallsRequest,
      readonly O: typeof AgentMonitorCallsReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferColdToOutbound
     */
    readonly transferColdToOutbound: {
      readonly name: "TransferColdToOutbound",
      readonly I: typeof TransferColdToOutboundRequest,
      readonly O: typeof TransferColdToOutboundReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferColdToAgent
     */
    readonly transferColdToAgent: {
      readonly name: "TransferColdToAgent",
      readonly I: typeof TransferColdToAgentRequest,
      readonly O: typeof TransferColdToAgentReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToOutboundStart
     */
    readonly transferWarmToOutboundStart: {
      readonly name: "TransferWarmToOutboundStart",
      readonly I: typeof TransferWarmToOutboundStartRequest,
      readonly O: typeof TransferWarmToOutboundStartReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * creates a new outbound transfer member using the given src/dst numbers
     *
     * @generated from rpc api.v0alpha.Acd.CreateWarmOutboundTransferMember
     */
    readonly createWarmOutboundTransferMember: {
      readonly name: "CreateWarmOutboundTransferMember",
      readonly I: typeof CreateWarmOutboundTransferMemberRequest,
      readonly O: typeof CreateWarmOutboundTransferMemberReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * hangups a transfer member using the given member identifier
     *
     * @generated from rpc api.v0alpha.Acd.RemoveTransferMember
     */
    readonly removeTransferMember: {
      readonly name: "RemoveTransferMember",
      readonly I: typeof RemoveTransferMemberRequest,
      readonly O: typeof RemoveTransferMemberReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.TransferWarmToAgentStart
     */
    readonly transferWarmToAgentStart: {
      readonly name: "TransferWarmToAgentStart",
      readonly I: typeof TransferWarmToAgentStartRequest,
      readonly O: typeof TransferWarmToAgentStartReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetCallFromHold
     */
    readonly agentGetCallFromHold: {
      readonly name: "AgentGetCallFromHold",
      readonly I: typeof AgentGetCallFromHoldRequest,
      readonly O: typeof AgentGetCallFromHoldReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentGetSpecificCallFromHold
     */
    readonly agentGetSpecificCallFromHold: {
      readonly name: "AgentGetSpecificCallFromHold",
      readonly I: typeof AgentGetSpecificCallFromHoldRequest,
      readonly O: typeof AgentGetSpecificCallFromHoldReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.ACDGetAllAgentsStatuses
     */
    readonly aCDGetAllAgentsStatuses: {
      readonly name: "ACDGetAllAgentsStatuses",
      readonly I: typeof ACDGetAllAgentsStatusesRequest,
      readonly O: typeof ACDGetAllAgentsStatusesReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPutCallOnHold
     */
    readonly agentPutCallOnHold: {
      readonly name: "AgentPutCallOnHold",
      readonly I: typeof AgentPutCallOnHoldRequest,
      readonly O: typeof AgentPutCallOnHoldReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentReceiveMessage
     */
    readonly agentReceiveMessage: {
      readonly name: "AgentReceiveMessage",
      readonly I: typeof AgentReceiveMessageRequest,
      readonly O: typeof AgentReceiveMessageReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPBXApproveCall
     */
    readonly agentPBXApproveCall: {
      readonly name: "AgentPBXApproveCall",
      readonly I: typeof AgentPBXApproveCallRequest,
      readonly O: typeof AgentPBXApproveCallReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.AgentPBXRejectCall
     */
    readonly agentPBXRejectCall: {
      readonly name: "AgentPBXRejectCall",
      readonly I: typeof AgentPBXRejectCallRequest,
      readonly O: typeof AgentPBXRejectCallReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.GetCallerLostPeer
     */
    readonly getCallerLostPeer: {
      readonly name: "GetCallerLostPeer",
      readonly I: typeof GetCallerLostPeerRequest,
      readonly O: typeof GetCallerLostPeerReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.CallerGetRawEvent
     */
    readonly callerGetRawEvent: {
      readonly name: "CallerGetRawEvent",
      readonly I: typeof CallerGetRawEventRequest,
      readonly O: typeof CallerGetRawEventReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.PeerAgentWithCaller
     */
    readonly peerAgentWithCaller: {
      readonly name: "PeerAgentWithCaller",
      readonly I: typeof PeerAgentWithCallerRequest,
      readonly O: typeof PeerAgentWithCallerReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.HoldTransferMember
     */
    readonly holdTransferMember: {
      readonly name: "HoldTransferMember",
      readonly I: typeof HoldTransferMemberReq,
      readonly O: typeof HoldTransferMemberRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.UnholdTransferMember
     */
    readonly unholdTransferMember: {
      readonly name: "UnholdTransferMember",
      readonly I: typeof UnholdTransferMemberReq,
      readonly O: typeof UnholdTransferMemberRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v0alpha.Acd.GetAgentCallCounts
     */
    readonly getAgentCallCounts: {
      readonly name: "GetAgentCallCounts",
      readonly I: typeof GetAgentCallCountsReq,
      readonly O: typeof GetAgentCallCountsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to start a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferStart
     */
    readonly warmCallerTransferStart: {
      readonly name: "WarmCallerTransferStart",
      readonly I: typeof WarmCallerTransferStartReq,
      readonly O: typeof WarmCallerTransferStartRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to cancel a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferCancel
     */
    readonly warmCallerTransferCancel: {
      readonly name: "WarmCallerTransferCancel",
      readonly I: typeof WarmCallerTransferCancelReq,
      readonly O: typeof WarmCallerTransferCancelRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to approve a warm caller transfer
     *
     * @generated from rpc api.v0alpha.Acd.WarmCallerTransferApprove
     */
    readonly warmCallerTransferApprove: {
      readonly name: "WarmCallerTransferApprove",
      readonly I: typeof WarmCallerTransferApproveReq,
      readonly O: typeof WarmCallerTransferApproveRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to play a soundboard file for a customer
     *
     * @generated from rpc api.v0alpha.Acd.PlaySoundboardEntity
     */
    readonly playSoundboardEntity: {
      readonly name: "PlaySoundboardEntity",
      readonly I: typeof PlaySoundboardEntityReq,
      readonly O: typeof PlaySoundboardEntityRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to stop a soundboard file for a customer
     *
     * @generated from rpc api.v0alpha.Acd.StopSoundboardEntity
     */
    readonly stopSoundboardEntity: {
      readonly name: "StopSoundboardEntity",
      readonly I: typeof StopSoundboardEntityReq,
      readonly O: typeof StopSoundboardEntityRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to update an agent's skills
     *
     * @generated from rpc api.v0alpha.Acd.UpdateAgentSkills
     */
    readonly updateAgentSkills: {
      readonly name: "UpdateAgentSkills",
      readonly I: typeof UpdateAgentSkillsRequest,
      readonly O: typeof UpdateAgentSkillsReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to play a dtmf tone to all members of a the agent's conference
     *
     * @generated from rpc api.v0alpha.Acd.PlayDTMF
     */
    readonly playDTMF: {
      readonly name: "PlayDTMF",
      readonly I: typeof PlayDTMFRequest,
      readonly O: typeof PlayDTMFReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to mute and agent's mic
     *
     * @generated from rpc api.v0alpha.Acd.AgentMute
     */
    readonly agentMute: {
      readonly name: "AgentMute",
      readonly I: typeof AgentMuteRequest,
      readonly O: typeof AgentMuteReply,
      readonly kind: MethodKind.Unary,
    },
    /**
     * endpoint used to unmute and agent's mic
     *
     * @generated from rpc api.v0alpha.Acd.AgentUnmute
     */
    readonly agentUnmute: {
      readonly name: "AgentUnmute",
      readonly I: typeof AgentUnmuteRequest,
      readonly O: typeof AgentUnmuteReply,
      readonly kind: MethodKind.Unary,
    },
  }
};

