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
export declare const Asm: {
  readonly typeName: "api.v1alpha1.asm.Asm",
  readonly methods: {
    /**
     * Streams back status updates for the given asm session
     * only the asm session sid filter is allowed
     *
     * @generated from rpc api.v1alpha1.asm.Asm.StreamAgentState
     */
    readonly streamAgentState: {
      readonly name: "StreamAgentState",
      readonly I: typeof StreamAgentStateReq,
      readonly O: typeof StreamAgentStateRes,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * Streams back statuses for the desired filter
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ManagerStreamAgentState
     */
    readonly managerStreamAgentState: {
      readonly name: "ManagerStreamAgentState",
      readonly I: typeof ManagerStreamAgentStateReq,
      readonly O: typeof ManagerStreamAgentStateRes,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1alpha1.asm.Asm.PushEvents
     */
    readonly pushEvents: {
      readonly name: "PushEvents",
      readonly I: typeof PushEventsReq,
      readonly O: typeof PushEventsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates an agent session and enables the voice channel
     *
     * @generated from rpc api.v1alpha1.asm.Asm.CreateSession
     */
    readonly createSession: {
      readonly name: "CreateSession",
      readonly I: typeof CreateSessionReq,
      readonly O: typeof CreateSessionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Closes an asm session and all sub sessions
     *
     * @generated from rpc api.v1alpha1.asm.Asm.EndSession
     */
    readonly endSession: {
      readonly name: "EndSession",
      readonly I: typeof EndSessionReq,
      readonly O: typeof EndSessionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets an agent's current asm session
     *
     * @generated from rpc api.v1alpha1.asm.Asm.GetCurrentSession
     */
    readonly getCurrentSession: {
      readonly name: "GetCurrentSession",
      readonly I: typeof GetCurrentSessionReq,
      readonly O: typeof AsmSession,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates the currently active subsession
     *
     * @generated from rpc api.v1alpha1.asm.Asm.EnableVoice
     */
    readonly enableVoice: {
      readonly name: "EnableVoice",
      readonly I: typeof EnableVoiceReq,
      readonly O: typeof EnableVoiceRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.asm.Asm.DisableVoice
     */
    readonly disableVoice: {
      readonly name: "DisableVoice",
      readonly I: typeof DisableVoiceReq,
      readonly O: typeof DisableVoiceRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Lists the conversations for an assigned agent
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ListConversations
     */
    readonly listConversations: {
      readonly name: "ListConversations",
      readonly I: typeof ListConversationsReq,
      readonly O: typeof ListConversationsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Assign agent to matched conversation based on skills and channelTypes requested
     *
     * @generated from rpc api.v1alpha1.asm.Asm.AssignNewConversation
     */
    readonly assignNewConversation: {
      readonly name: "AssignNewConversation",
      readonly I: typeof AssignNewConversationReq,
      readonly O: typeof AssignNewConversationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List all agents for the given user. Contains statistical enrichments for each agent and their conversations.
     *
     * @generated from rpc api.v1alpha1.asm.Asm.ListAgents
     */
    readonly listAgents: {
      readonly name: "ListAgents",
      readonly I: typeof ListAgentsReq,
      readonly O: typeof ListAgentsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Set collected data per conversation
     *
     * @generated from rpc api.v1alpha1.asm.Asm.SetConversationCollectedData
     */
    readonly setConversationCollectedData: {
      readonly name: "SetConversationCollectedData",
      readonly I: typeof SetConversationCollectedDataReq,
      readonly O: typeof SetConversationCollectedDataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Set queue details
     *
     * @generated from rpc api.v1alpha1.asm.Asm.GetQueuesDetails
     */
    readonly getQueuesDetails: {
      readonly name: "GetQueuesDetails",
      readonly I: typeof GetQueuesDetailsReq,
      readonly O: typeof GetQueuesDetailsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

