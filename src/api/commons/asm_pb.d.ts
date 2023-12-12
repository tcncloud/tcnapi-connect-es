// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file api/commons/asm.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AgentState, CallerSid, QueuedNotificationType } from "./acd_pb.js";

/**
 * @generated from enum api.commons.AsmSubsessionType
 */
export declare enum AsmSubsessionType {
  /**
   * @generated from enum value: VOICE = 0;
   */
  VOICE = 0,

  /**
   * @generated from enum value: OMNI = 1;
   */
  OMNI = 1,
}

/**
 * @generated from enum api.commons.StatusState
 */
export declare enum StatusState {
  /**
   * unknown
   *
   * @generated from enum value: STATUS_STATE_UNKNOWN = 0;
   */
  STATUS_STATE_UNKNOWN = 0,

  /**
   * no conversations assigned
   *
   * @generated from enum value: WAITING = 1;
   */
  WAITING = 1,

  /**
   * conversations assigned but none open
   *
   * @generated from enum value: IDLE = 2;
   */
  IDLE = 2,

  /**
   * conversation is open
   *
   * @generated from enum value: CONVERSATION_OPEN = 3;
   */
  CONVERSATION_OPEN = 3,
}

/**
 * TODO remove unused fields
 *
 * @generated from message api.commons.DashboardAgentInfo
 */
export declare class DashboardAgentInfo extends Message<DashboardAgentInfo> {
  /**
   * agents user id
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * agents name
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * agents user name
   *
   * @generated from field: string user_name = 3;
   */
  userName: string;

  /**
   * agents hunt group name
   *
   * @generated from field: string hunt_group_name = 4;
   */
  huntGroupName: string;

  /**
   * partner agent id
   *
   * @generated from field: string partner_agent_id = 6;
   */
  partnerAgentId: string;

  /**
   * the agents hunt group sid
   *
   * @generated from field: int64 hunt_group_sid = 9;
   */
  huntGroupSid: bigint;

  /**
   * the agents sid
   *
   * @generated from field: int64 agent_sid = 10;
   */
  agentSid: bigint;

  /**
   * the user caller id
   *
   * @generated from field: string user_caller_id = 12;
   */
  userCallerId: string;

  /**
   * agents first name
   *
   * @generated from field: string first_name = 13;
   */
  firstName: string;

  /**
   * agents last name
   *
   * @generated from field: string last_name = 14;
   */
  lastName: string;

  /**
   * the date of creation
   *
   * @generated from field: google.protobuf.Timestamp created = 15;
   */
  created?: Timestamp;

  /**
   * the date of last update
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 16;
   */
  lastUpdated?: Timestamp;

  /**
   * agents profile group id
   *
   * @generated from field: string agent_profile_group_id = 17;
   */
  agentProfileGroupId: string;

  /**
   * agents profile group name
   *
   * TODO add loginTime
   *
   * @generated from field: string agent_profile_group_name = 18;
   */
  agentProfileGroupName: string;

  /**
   * enum of agents status
   *
   * @generated from field: api.commons.StatusState agent_status = 19;
   */
  agentStatus: StatusState;

  /**
   * the agents current conversation
   *
   * @generated from field: int64 current_conversation_sid = 20 [jstype = JS_STRING];
   */
  currentConversationSid: string;

  /**
   * time from first customer message to agent response. between all conversations.
   *
   * @generated from field: int64 average_customer_wait_time_seconds = 22;
   */
  averageCustomerWaitTimeSeconds: bigint;

  /**
   * responste time between all conversations.
   *
   * @generated from field: int64 average_time_to_respond_seconds = 23;
   */
  averageTimeToRespondSeconds: bigint;

  /**
   * time from first customer message to conversation close. between all conversations.
   *
   * @generated from field: int64 average_conversation_duration_seconds = 24;
   */
  averageConversationDurationSeconds: bigint;

  /**
   * login time
   *
   * @generated from field: google.protobuf.Timestamp login_time = 25;
   */
  loginTime?: Timestamp;

  /**
   * last event time
   *
   * @generated from field: google.protobuf.Timestamp last_event_time = 26;
   */
  lastEventTime?: Timestamp;

  /**
   * the list of response events
   *
   * @generated from field: repeated api.commons.DashboardAgentInfo.DashboardAgentResponseEvent events = 27;
   */
  events: DashboardAgentInfo_DashboardAgentResponseEvent[];

  /**
   * Agents Skills
   *
   * @generated from field: map<string, int64> skills = 28;
   */
  skills: { [key: string]: bigint };

  /**
   * Asm Session Sid
   *
   * @generated from field: google.protobuf.Int64Value asm_session_sid = 29;
   */
  asmSessionSid?: bigint;

  constructor(data?: PartialMessage<DashboardAgentInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DashboardAgentInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardAgentInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardAgentInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardAgentInfo;

  static equals(a: DashboardAgentInfo | PlainMessage<DashboardAgentInfo> | undefined, b: DashboardAgentInfo | PlainMessage<DashboardAgentInfo> | undefined): boolean;
}

/**
 * The response event information for an agent
 *
 * @generated from message api.commons.DashboardAgentInfo.DashboardAgentResponseEvent
 */
export declare class DashboardAgentInfo_DashboardAgentResponseEvent extends Message<DashboardAgentInfo_DashboardAgentResponseEvent> {
  /**
   * the time it took to respond in seconds
   *
   * @generated from field: int64 response_time_seconds = 1;
   */
  responseTimeSeconds: bigint;

  /**
   * the time of the event
   *
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * whether or not this was the initial message sent by the agent
   *
   * @generated from field: bool is_initial_agent_message = 3;
   */
  isInitialAgentMessage: boolean;

  constructor(data?: PartialMessage<DashboardAgentInfo_DashboardAgentResponseEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DashboardAgentInfo.DashboardAgentResponseEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardAgentInfo_DashboardAgentResponseEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardAgentInfo_DashboardAgentResponseEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardAgentInfo_DashboardAgentResponseEvent;

  static equals(a: DashboardAgentInfo_DashboardAgentResponseEvent | PlainMessage<DashboardAgentInfo_DashboardAgentResponseEvent> | undefined, b: DashboardAgentInfo_DashboardAgentResponseEvent | PlainMessage<DashboardAgentInfo_DashboardAgentResponseEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.StreamAgentStateRes
 */
export declare class StreamAgentStateRes extends Message<StreamAgentStateRes> {
  /**
   * @generated from oneof api.commons.StreamAgentStateRes.agent_state
   */
  agentState: {
    /**
     * @generated from field: api.commons.AgentState state = 1;
     */
    value: AgentState;
    case: "state";
  } | {
    /**
     * @generated from field: api.commons.KeepAlive heart_beat = 2;
     */
    value: KeepAlive;
    case: "heartBeat";
  } | {
    /**
     * @generated from field: api.commons.QueueCallAdd call_queue_add = 3;
     */
    value: QueueCallAdd;
    case: "callQueueAdd";
  } | {
    /**
     * @generated from field: api.commons.QueueCallRemove call_queue_remove = 4;
     */
    value: QueueCallRemove;
    case: "callQueueRemove";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<StreamAgentStateRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.StreamAgentStateRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamAgentStateRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamAgentStateRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamAgentStateRes;

  static equals(a: StreamAgentStateRes | PlainMessage<StreamAgentStateRes> | undefined, b: StreamAgentStateRes | PlainMessage<StreamAgentStateRes> | undefined): boolean;
}

/**
 * @generated from message api.commons.ManagerStreamAgentStateRes
 */
export declare class ManagerStreamAgentStateRes extends Message<ManagerStreamAgentStateRes> {
  /**
   * @generated from oneof api.commons.ManagerStreamAgentStateRes.manager_agent_state
   */
  managerAgentState: {
    /**
     * @generated from field: api.commons.AgentState state = 1;
     */
    value: AgentState;
    case: "state";
  } | {
    /**
     * @generated from field: api.commons.KeepAlive heart_beat = 2;
     */
    value: KeepAlive;
    case: "heartBeat";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ManagerStreamAgentStateRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ManagerStreamAgentStateRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ManagerStreamAgentStateRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ManagerStreamAgentStateRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ManagerStreamAgentStateRes;

  static equals(a: ManagerStreamAgentStateRes | PlainMessage<ManagerStreamAgentStateRes> | undefined, b: ManagerStreamAgentStateRes | PlainMessage<ManagerStreamAgentStateRes> | undefined): boolean;
}

/**
 * @generated from message api.commons.KeepAlive
 */
export declare class KeepAlive extends Message<KeepAlive> {
  constructor(data?: PartialMessage<KeepAlive>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.KeepAlive";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeepAlive;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeepAlive;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeepAlive;

  static equals(a: KeepAlive | PlainMessage<KeepAlive> | undefined, b: KeepAlive | PlainMessage<KeepAlive> | undefined): boolean;
}

/**
 * @generated from message api.commons.QueueCallAdd
 */
export declare class QueueCallAdd extends Message<QueueCallAdd> {
  /**
   * number dialed when the call was placed.
   *
   * @generated from field: string phone_number = 1;
   */
  phoneNumber: string;

  /**
   * caller_id used when the call was placed.
   *
   * @generated from field: string caller_id = 2;
   */
  callerId: string;

  /**
   * timestamp indicating when the call started.
   *
   * @generated from field: google.protobuf.Timestamp start_date = 3;
   */
  startDate?: Timestamp;

  /**
   * timestamp indicating when the call was put on hold (only set when call is a hold call).
   *
   * @generated from field: google.protobuf.Timestamp hold_date = 4;
   */
  holdDate?: Timestamp;

  /**
   * formatted skills that the call requires.
   *
   * @generated from field: map<string, string> formatted_skills = 5;
   */
  formattedSkills: { [key: string]: string };

  /**
   * indicates if the call is specific to the agent (multi-hold) or it can be picked up by multiple agents (queued and HQM calls).
   *
   * @generated from field: bool agent_specific = 6;
   */
  agentSpecific: boolean;

  /**
   * queued notification type of the call.
   *
   * @generated from field: api.commons.QueuedNotificationType queued_notification_type = 7;
   */
  queuedNotificationType: QueuedNotificationType;

  /**
   * callersid
   *
   * @generated from field: api.commons.CallerSid caller_sid = 8;
   */
  callerSid?: CallerSid;

  /**
   * skills
   *
   * @generated from field: map<string, bool> skills = 9;
   */
  skills: { [key: string]: boolean };

  constructor(data?: PartialMessage<QueueCallAdd>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.QueueCallAdd";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueueCallAdd;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueueCallAdd;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueueCallAdd;

  static equals(a: QueueCallAdd | PlainMessage<QueueCallAdd> | undefined, b: QueueCallAdd | PlainMessage<QueueCallAdd> | undefined): boolean;
}

/**
 * @generated from message api.commons.QueueCallRemove
 */
export declare class QueueCallRemove extends Message<QueueCallRemove> {
  /**
   * @generated from field: api.commons.CallerSid caller_sid = 1;
   */
  callerSid?: CallerSid;

  constructor(data?: PartialMessage<QueueCallRemove>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.QueueCallRemove";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueueCallRemove;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueueCallRemove;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueueCallRemove;

  static equals(a: QueueCallRemove | PlainMessage<QueueCallRemove> | undefined, b: QueueCallRemove | PlainMessage<QueueCallRemove> | undefined): boolean;
}

