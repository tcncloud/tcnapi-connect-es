// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/asm/entities/v1alpha1/session.proto (package services.omnichannel.asm.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum services.omnichannel.asm.entities.v1alpha1.StatusState
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
 * @generated from message services.omnichannel.asm.entities.v1alpha1.AsmSession
 */
export declare class AsmSession extends Message<AsmSession> {
  /**
   * asm session sid
   *
   * @generated from field: int64 asm_session_sid = 1;
   */
  asmSessionSid: bigint;

  /**
   * time the asm session started
   *
   * @generated from field: google.protobuf.Timestamp asm_session_start = 4;
   */
  asmSessionStart?: Timestamp;

  /**
   * time the asm session ended
   *
   * @generated from field: google.protobuf.Timestamp asm_session_end = 5;
   */
  asmSessionEnd?: Timestamp;

  /**
   * voice session is there is one
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.VoiceSession voice_session = 6;
   */
  voiceSession?: VoiceSession;

  constructor(data?: PartialMessage<AsmSession>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.entities.v1alpha1.AsmSession";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmSession;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmSession;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmSession;

  static equals(a: AsmSession | PlainMessage<AsmSession> | undefined, b: AsmSession | PlainMessage<AsmSession> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.VoiceSession
 */
export declare class VoiceSession extends Message<VoiceSession> {
  /**
   * voice session sid
   *
   * @generated from field: int64 voice_session_sid = 1;
   */
  voiceSessionSid: bigint;

  /**
   * time the voice session started
   *
   * @generated from field: google.protobuf.Timestamp voice_session_start = 2;
   */
  voiceSessionStart?: Timestamp;

  /**
   * time the voice session ended
   *
   * @generated from field: google.protobuf.Timestamp voice_session_end = 3;
   */
  voiceSessionEnd?: Timestamp;

  constructor(data?: PartialMessage<VoiceSession>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.entities.v1alpha1.VoiceSession";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VoiceSession;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VoiceSession;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VoiceSession;

  static equals(a: VoiceSession | PlainMessage<VoiceSession> | undefined, b: VoiceSession | PlainMessage<VoiceSession> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.VoiceRegistration
 */
export declare class VoiceRegistration extends Message<VoiceRegistration> {
  /**
   * The pin used to log in via a connected phone
   *
   * @generated from field: string username = 2;
   */
  username: string;

  /**
   * The pass used to log in via a connected phone
   *
   * @generated from field: string password = 3;
   */
  password: string;

  /**
   * The extention appended
   *
   * @generated from field: string dial_url = 4;
   */
  dialUrl: string;

  /**
   * pstn phone number that will be used for the agent to dial in
   * if it's an empty string then the voip connection must be used
   *
   * @generated from field: string pstn_phone = 5;
   */
  pstnPhone: string;

  /**
   * default time zone -
   *
   * @generated from field: string default_time_zone = 6;
   */
  defaultTimeZone: string;

  /**
   * expiration Timestamp When the registration will expire
   *
   * @generated from field: int64 expiration_timestamp = 7;
   */
  expirationTimestamp: bigint;

  constructor(data?: PartialMessage<VoiceRegistration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.entities.v1alpha1.VoiceRegistration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VoiceRegistration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VoiceRegistration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VoiceRegistration;

  static equals(a: VoiceRegistration | PlainMessage<VoiceRegistration> | undefined, b: VoiceRegistration | PlainMessage<VoiceRegistration> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.entities.v1alpha1.AsmUserDetails
 */
export declare class AsmUserDetails extends Message<AsmUserDetails> {
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
   * the agents sid
   *
   * @generated from field: int64 agent_sid = 3;
   */
  agentSid: bigint;

  /**
   * enum of agents status
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.StatusState agent_status = 4;
   */
  agentStatus: StatusState;

  /**
   * agents profile group name
   *
   * @generated from field: string agent_profile_group_name = 5;
   */
  agentProfileGroupName: string;

  /**
   * the agents current conversation
   *
   * @generated from field: int64 current_conversation_sid = 6 [jstype = JS_STRING];
   */
  currentConversationSid: string;

  /**
   * time from first customer message to agent response. between all conversations.
   *
   * @generated from field: int64 average_customer_wait_time_seconds = 7;
   */
  averageCustomerWaitTimeSeconds: bigint;

  /**
   * responste time between all conversations.
   *
   * @generated from field: int64 average_time_to_respond_seconds = 8;
   */
  averageTimeToRespondSeconds: bigint;

  /**
   * last event time
   *
   * @generated from field: google.protobuf.Timestamp last_event_time = 9;
   */
  lastEventTime?: Timestamp;

  /**
   * Agents Skills
   *
   * @generated from field: map<string, int64> skills = 10;
   */
  skills: { [key: string]: bigint };

  /**
   * Asm Session Sid
   *
   * @generated from field: google.protobuf.Int64Value asm_session_sid = 11;
   */
  asmSessionSid?: bigint;

  /**
   * the list of response events
   *
   * @generated from field: repeated services.omnichannel.asm.entities.v1alpha1.DashboardAgentResponseEvent events = 12;
   */
  events: DashboardAgentResponseEvent[];

  /**
   * login time
   *
   * @generated from field: google.protobuf.Timestamp login_time = 13;
   */
  loginTime?: Timestamp;

  constructor(data?: PartialMessage<AsmUserDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.entities.v1alpha1.AsmUserDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmUserDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmUserDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmUserDetails;

  static equals(a: AsmUserDetails | PlainMessage<AsmUserDetails> | undefined, b: AsmUserDetails | PlainMessage<AsmUserDetails> | undefined): boolean;
}

/**
 * The response event information for an agent
 *
 * @generated from message services.omnichannel.asm.entities.v1alpha1.DashboardAgentResponseEvent
 */
export declare class DashboardAgentResponseEvent extends Message<DashboardAgentResponseEvent> {
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

  constructor(data?: PartialMessage<DashboardAgentResponseEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.entities.v1alpha1.DashboardAgentResponseEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DashboardAgentResponseEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DashboardAgentResponseEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DashboardAgentResponseEvent;

  static equals(a: DashboardAgentResponseEvent | PlainMessage<DashboardAgentResponseEvent> | undefined, b: DashboardAgentResponseEvent | PlainMessage<DashboardAgentResponseEvent> | undefined): boolean;
}

