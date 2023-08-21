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

// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/asm/public_service.proto (package api.v1alpha1.asm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AsmSession, AssignNewConversationReq, AssignNewConversationRes, CreateSessionReq, CreateSessionRes, DisableVoiceReq, DisableVoiceRes, EnableVoiceReq, EnableVoiceRes, EndSessionReq, EndSessionRes, GetCurrentSessionReq, GetQueuesDetailsReq, ListAgentsReq, ListAgentsRes, ListConversationsReq, ListConversationsRes, ManagerStreamAgentStateReq, PushEventsReq, PushEventsRes, SetConversationCollectedDataReq, SetConversationCollectedDataRes, StreamAgentStateReq } from "./service_pb.js";
import { ManagerStreamAgentStateRes, StreamAgentStateRes } from "../../commons/asm_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { GetQueuesDetailsRes } from "../../commons/omnichannel_pb.js";

/**
 * @generated from service api.v1alpha1.asm.Asm
 */
export const Asm = {
  typeName: "api.v1alpha1.asm.Asm",
  methods: {
    /**
     * Streams back status updates for the given asm session
     * only the asm session sid filter is allowed
     *
     * @generated from rpc api.v1alpha1.asm.Asm.StreamAgentState
     */
    streamAgentState: {
      name: "StreamAgentState",
      I: StreamAgentStateReq,
      O: StreamAgentStateRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Streams back statuses for the desired filter
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ManagerStreamAgentState
     */
    managerStreamAgentState: {
      name: "ManagerStreamAgentState",
      I: ManagerStreamAgentStateReq,
      O: ManagerStreamAgentStateRes,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1alpha1.asm.Asm.PushEvents
     */
    pushEvents: {
      name: "PushEvents",
      I: PushEventsReq,
      O: PushEventsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Creates an agent session and enables the voice channel
     *
     * @generated from rpc api.v1alpha1.asm.Asm.CreateSession
     */
    createSession: {
      name: "CreateSession",
      I: CreateSessionReq,
      O: CreateSessionRes,
      kind: MethodKind.Unary,
    },
    /**
     * Closes an asm session and all sub sessions
     *
     * @generated from rpc api.v1alpha1.asm.Asm.EndSession
     */
    endSession: {
      name: "EndSession",
      I: EndSessionReq,
      O: EndSessionRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an agent's current asm session
     *
     * @generated from rpc api.v1alpha1.asm.Asm.GetCurrentSession
     */
    getCurrentSession: {
      name: "GetCurrentSession",
      I: GetCurrentSessionReq,
      O: AsmSession,
      kind: MethodKind.Unary,
    },
    /**
     * Updates the currently active subsession
     *
     * @generated from rpc api.v1alpha1.asm.Asm.EnableVoice
     */
    enableVoice: {
      name: "EnableVoice",
      I: EnableVoiceReq,
      O: EnableVoiceRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.asm.Asm.DisableVoice
     */
    disableVoice: {
      name: "DisableVoice",
      I: DisableVoiceReq,
      O: DisableVoiceRes,
      kind: MethodKind.Unary,
    },
    /**
     * Lists the conversations for an assigned agent
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ListConversations
     */
    listConversations: {
      name: "ListConversations",
      I: ListConversationsReq,
      O: ListConversationsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Assign agent to matched conversation based on skills and channelTypes requested
     *
     * @generated from rpc api.v1alpha1.asm.Asm.AssignNewConversation
     */
    assignNewConversation: {
      name: "AssignNewConversation",
      I: AssignNewConversationReq,
      O: AssignNewConversationRes,
      kind: MethodKind.Unary,
    },
    /**
     * List all agents for the given user. Contains statistical enrichments for each agent and their conversations.
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ListAgents
     */
    listAgents: {
      name: "ListAgents",
      I: ListAgentsReq,
      O: ListAgentsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Set collected data per conversation
     *
     * @generated from rpc api.v1alpha1.asm.Asm.SetConversationCollectedData
     */
    setConversationCollectedData: {
      name: "SetConversationCollectedData",
      I: SetConversationCollectedDataReq,
      O: SetConversationCollectedDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * Set queue details
     *
     * @generated from rpc api.v1alpha1.asm.Asm.GetQueuesDetails
     */
    getQueuesDetails: {
      name: "GetQueuesDetails",
      I: GetQueuesDetailsReq,
      O: GetQueuesDetailsRes,
      kind: MethodKind.Unary,
    },
  }
};

