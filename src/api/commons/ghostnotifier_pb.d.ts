// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/commons/ghostnotifier.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { OmniConversation } from "./omnichannel_pb.js";
import type { AgentBackofficeMessageAlert, AgentDirectedCallHangupAlert, AgentDirectedCallRingingAlert, CallType_Enum, QueuedNotificationType } from "./acd_pb.js";

/**
 * a notificaiton used to return a response for an asyncronous request or
 * data for or about a backend initiated process that needs to be consumed by the user
 *
 * @generated from message api.commons.GhostNotification
 */
export declare class GhostNotification extends Message<GhostNotification> {
  /**
   * a structured id used to identify the given notification
   *
   * @generated from field: string reference_id = 1;
   */
  referenceId: string;

  /**
   * @generated from oneof api.commons.GhostNotification.payload
   */
  payload: {
    /**
     * payload used when no other oneof type has been defined
     *
     * @generated from field: google.protobuf.Any any = 2;
     */
    value: Any;
    case: "any";
  } | {
    /**
     * A way to return a message with a status code and message.
     *
     * @generated from field: api.commons.Status status = 3;
     */
    value: Status;
    case: "status";
  } | {
    /**
     * An omni conversation
     *
     * @generated from field: api.commons.OmniConversation omni_conversation = 4;
     */
    value: OmniConversation;
    case: "omniConversation";
  } | {
    /**
     * an alert to an agent that a message from backoffice came in
     *
     * @generated from field: api.commons.AgentBackofficeMessageAlert backoffice_message = 6;
     */
    value: AgentBackofficeMessageAlert;
    case: "backofficeMessage";
  } | {
    /**
     * alert that a direct agent call is ringing
     *
     * @generated from field: api.commons.AgentDirectedCallRingingAlert directed_call_ringing = 7;
     */
    value: AgentDirectedCallRingingAlert;
    case: "directedCallRinging";
  } | {
    /**
     * alert that a direct agent call hungup
     *
     * @generated from field: api.commons.AgentDirectedCallHangupAlert directed_call_hangup = 8;
     */
    value: AgentDirectedCallHangupAlert;
    case: "directedCallHangup";
  } | {
    /**
     * notification about the current state of queued call for an agent
     *
     * ... undetermined other possible payloads
     *
     * @generated from field: api.commons.AgentQueuedCallsNotification agent_queued_calls_notification = 9;
     */
    value: AgentQueuedCallsNotification;
    case: "agentQueuedCallsNotification";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GhostNotification>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.GhostNotification";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GhostNotification;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GhostNotification;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GhostNotification;

  static equals(a: GhostNotification | PlainMessage<GhostNotification> | undefined, b: GhostNotification | PlainMessage<GhostNotification> | undefined): boolean;
}

/**
 * This is based on googles status proto message
 *
 * @generated from message api.commons.Status
 */
export declare class Status extends Message<Status> {
  /**
   * The status code
   *
   * @generated from field: int32 code = 1;
   */
  code: number;

  /**
   * A developer-facing error message, which should be in English
   *
   * @generated from field: string message = 2;
   */
  message: string;

  constructor(data?: PartialMessage<Status>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Status";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Status;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Status;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Status;

  static equals(a: Status | PlainMessage<Status> | undefined, b: Status | PlainMessage<Status> | undefined): boolean;
}

/**
 * @generated from message api.commons.AgentQueuedCallsNotification
 */
export declare class AgentQueuedCallsNotification extends Message<AgentQueuedCallsNotification> {
  /**
   * calls that were queued and have a matching subset of the agent_skills from the request.
   *
   * @generated from field: repeated api.commons.AgentQueuedCallsNotification.QueuedCallData agent_queue_calls = 16;
   */
  agentQueueCalls: AgentQueuedCallsNotification_QueuedCallData[];

  /**
   * calls that were placed on multi-hold by the agent_sid from the request.
   *
   * @generated from field: repeated api.commons.AgentQueuedCallsNotification.QueuedCallData on_hold_calls = 17;
   */
  onHoldCalls: AgentQueuedCallsNotification_QueuedCallData[];

  /**
   * calls that were placed in the Hold Queue Monitor, are still on hold by the destination (hold music is being played by the other party) and have
   * a matching subset of the agent_skills from the request.
   *
   * @generated from field: repeated api.commons.AgentQueuedCallsNotification.QueuedCallData hqm_calls = 18;
   */
  hqmCalls: AgentQueuedCallsNotification_QueuedCallData[];

  constructor(data?: PartialMessage<AgentQueuedCallsNotification>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.AgentQueuedCallsNotification";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentQueuedCallsNotification;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentQueuedCallsNotification;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentQueuedCallsNotification;

  static equals(a: AgentQueuedCallsNotification | PlainMessage<AgentQueuedCallsNotification> | undefined, b: AgentQueuedCallsNotification | PlainMessage<AgentQueuedCallsNotification> | undefined): boolean;
}

/**
 * @generated from message api.commons.AgentQueuedCallsNotification.QueuedCallData
 */
export declare class AgentQueuedCallsNotification_QueuedCallData extends Message<AgentQueuedCallsNotification_QueuedCallData> {
  /**
   * id of the found call.
   *
   * @generated from field: int64 call_sid = 1;
   */
  callSid: bigint;

  /**
   * number dialed when the call was placed.
   *
   * @generated from field: string phone_number = 2;
   */
  phoneNumber: string;

  /**
   * caller_id used when the call was placed.
   *
   * @generated from field: string caller_id = 3;
   */
  callerId: string;

  /**
   * call type of the found call.
   *
   * @generated from field: api.commons.CallType.Enum call_type = 4;
   */
  callType: CallType_Enum;

  /**
   * timestamp indicating when the call started.
   *
   * @generated from field: google.protobuf.Timestamp start_date = 5;
   */
  startDate?: Timestamp;

  /**
   * timestamp indicating when the call was put on hold (only set when call is a hold call).
   *
   * @generated from field: google.protobuf.Timestamp hold_date = 6;
   */
  holdDate?: Timestamp;

  /**
   * formatted skills that the call requires.
   *
   * @generated from field: repeated string skills = 7;
   */
  skills: string[];

  /**
   * indicates if the call is specific to the agent (multi-hold) or it can be picked up by multiple agents (queued and HQM calls).
   *
   * @generated from field: bool agent_specific = 8;
   */
  agentSpecific: boolean;

  /**
   * queued notification type of the call.
   *
   * @generated from field: api.commons.QueuedNotificationType queued_notification_type = 9;
   */
  queuedNotificationType: QueuedNotificationType;

  constructor(data?: PartialMessage<AgentQueuedCallsNotification_QueuedCallData>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.AgentQueuedCallsNotification.QueuedCallData";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentQueuedCallsNotification_QueuedCallData;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentQueuedCallsNotification_QueuedCallData;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentQueuedCallsNotification_QueuedCallData;

  static equals(a: AgentQueuedCallsNotification_QueuedCallData | PlainMessage<AgentQueuedCallsNotification_QueuedCallData> | undefined, b: AgentQueuedCallsNotification_QueuedCallData | PlainMessage<AgentQueuedCallsNotification_QueuedCallData> | undefined): boolean;
}

