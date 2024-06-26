// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/agentsmith/service.proto (package api.v1alpha1.agentsmith, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * AgentState is the state of the agent
 *
 * @generated from enum api.v1alpha1.agentsmith.AgentState
 */
export declare enum AgentState {
  /**
   * TBD - in the works
   *
   * TODO should we even have an unknown state? just use unavailable?
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: UNAVAILABLE = 1;
   */
  UNAVAILABLE = 1,

  /**
   * @generated from enum value: IDLE = 2;
   */
  IDLE = 2,

  /**
   * @generated from enum value: READY = 3;
   */
  READY = 3,

  /**
   * @generated from enum value: HUNGUP = 4;
   */
  HUNGUP = 4,

  /**
   * @generated from enum value: DESTROYED = 5;
   */
  DESTROYED = 5,

  /**
   * @generated from enum value: PEERED = 6;
   */
  PEERED = 6,

  /**
   * @generated from enum value: PAUSED = 7;
   */
  PAUSED = 7,

  /**
   * @generated from enum value: WRAPUP = 8;
   */
  WRAPUP = 8,

  /**
   * @generated from enum value: PREPARING_AFTER_IDLE = 10;
   */
  PREPARING_AFTER_IDLE = 10,
}

/**
 * FollowAgentReq is the request for the FollowAgent method.
 *
 * @generated from message api.v1alpha1.agentsmith.FollowAgentReq
 */
export declare class FollowAgentReq extends Message<FollowAgentReq> {
  /**
   * the agent could be identified by user_id or asm_session_id
   *
   * @generated from oneof api.v1alpha1.agentsmith.FollowAgentReq.id
   */
  id: {
    /**
     * user_id of the given agent that can be obtain from ...
     *
     * @generated from field: string user_id = 1;
     */
    value: string;
    case: "userId";
  } | {
    /**
     * asm_session_sid of the given agent that can be obtain from ...
     *
     * @generated from field: int64 asm_session_sid = 2;
     */
    value: bigint;
    case: "asmSessionSid";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FollowAgentReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.FollowAgentReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FollowAgentReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FollowAgentReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FollowAgentReq;

  static equals(a: FollowAgentReq | PlainMessage<FollowAgentReq> | undefined, b: FollowAgentReq | PlainMessage<FollowAgentReq> | undefined): boolean;
}

/**
 * FollowAgentRes is the response for the FollowAgent method. Each message is an event associated with the
 * agent session and represents a change in the state of the agent session.
 *
 * @generated from message api.v1alpha1.agentsmith.FollowAgentRes
 */
export declare class FollowAgentRes extends Message<FollowAgentRes> {
  /**
   * the timestamp of the event
   *
   * @generated from field: google.protobuf.Timestamp ts = 1;
   */
  ts?: Timestamp;

  /**
   * the event type
   *
   * @generated from oneof api.v1alpha1.agentsmith.FollowAgentRes.event
   */
  event: {
    /**
     * A generic state change event that has been triggered in the agent interface
     *
     * @generated from field: api.v1alpha1.agentsmith.AgentStateChangeEvent agent_state_change = 10;
     */
    value: AgentStateChangeEvent;
    case: "agentStateChange";
  } | {
    /**
     * The voice agent session start event
     *
     * @generated from field: api.v1alpha1.agentsmith.AgentVoiceStartEvent agent_voice_start = 11;
     */
    value: AgentVoiceStartEvent;
    case: "agentVoiceStart";
  } | {
    /**
     * the voice agent session end event
     *
     * @generated from field: api.v1alpha1.agentsmith.AgentVoiceEndEvent agent_voice_end = 12;
     */
    value: AgentVoiceEndEvent;
    case: "agentVoiceEnd";
  } | {
    /**
     * the agent session end event that is triggered when the agent session is closed. After this event the connection
     * will be closed by the server.
     *
     * @generated from field: api.v1alpha1.agentsmith.AgentSessionEndEvent agent_session_end = 13;
     */
    value: AgentSessionEndEvent;
    case: "agentSessionEnd";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FollowAgentRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.FollowAgentRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FollowAgentRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FollowAgentRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FollowAgentRes;

  static equals(a: FollowAgentRes | PlainMessage<FollowAgentRes> | undefined, b: FollowAgentRes | PlainMessage<FollowAgentRes> | undefined): boolean;
}

/**
 * AgentStateChangeEvent is the event that is triggered when the agent state changes in the agent interface.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentStateChangeEvent
 */
export declare class AgentStateChangeEvent extends Message<AgentStateChangeEvent> {
  /**
   * the old state of the agent
   *
   * @generated from field: api.v1alpha1.agentsmith.AgentState old_state = 1;
   */
  oldState: AgentState;

  /**
   * the new state of the agent
   *
   * @generated from field: api.v1alpha1.agentsmith.AgentState new_state = 2;
   */
  newState: AgentState;

  /**
   *  state definition
   *
   * @generated from oneof api.v1alpha1.agentsmith.AgentStateChangeEvent.state_details
   */
  stateDetails: {
    /**
     * TBD - in the works
     *
     * @generated from field: api.v1alpha1.agentsmith.EmptyState empty = 10;
     */
    value: EmptyState;
    case: "empty";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<AgentStateChangeEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.AgentStateChangeEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentStateChangeEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentStateChangeEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentStateChangeEvent;

  static equals(a: AgentStateChangeEvent | PlainMessage<AgentStateChangeEvent> | undefined, b: AgentStateChangeEvent | PlainMessage<AgentStateChangeEvent> | undefined): boolean;
}

/**
 * EmptyState is a debugging state (for now)
 *
 * @generated from message api.v1alpha1.agentsmith.EmptyState
 */
export declare class EmptyState extends Message<EmptyState> {
  constructor(data?: PartialMessage<EmptyState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.EmptyState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmptyState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmptyState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmptyState;

  static equals(a: EmptyState | PlainMessage<EmptyState> | undefined, b: EmptyState | PlainMessage<EmptyState> | undefined): boolean;
}

/**
 * AgentVoiceStartEvent is the event that is triggered when the agent starts a voice session.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentVoiceStartEvent
 */
export declare class AgentVoiceStartEvent extends Message<AgentVoiceStartEvent> {
  /**
   * the sip dial url that can be used to connect to the agent's voice session.
   *
   * TBD
   *
   * @generated from field: string sip_dial_url = 1;
   */
  sipDialUrl: string;

  constructor(data?: PartialMessage<AgentVoiceStartEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.AgentVoiceStartEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentVoiceStartEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentVoiceStartEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentVoiceStartEvent;

  static equals(a: AgentVoiceStartEvent | PlainMessage<AgentVoiceStartEvent> | undefined, b: AgentVoiceStartEvent | PlainMessage<AgentVoiceStartEvent> | undefined): boolean;
}

/**
 * AgentVoiceEndEvent is the event that is triggered when the agent ends a voice session.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentVoiceEndEvent
 */
export declare class AgentVoiceEndEvent extends Message<AgentVoiceEndEvent> {
  constructor(data?: PartialMessage<AgentVoiceEndEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.AgentVoiceEndEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentVoiceEndEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentVoiceEndEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentVoiceEndEvent;

  static equals(a: AgentVoiceEndEvent | PlainMessage<AgentVoiceEndEvent> | undefined, b: AgentVoiceEndEvent | PlainMessage<AgentVoiceEndEvent> | undefined): boolean;
}

/**
 * AgentSessionEndEvent is the event that is triggered when the agent session is closed.
 *
 * @generated from message api.v1alpha1.agentsmith.AgentSessionEndEvent
 */
export declare class AgentSessionEndEvent extends Message<AgentSessionEndEvent> {
  constructor(data?: PartialMessage<AgentSessionEndEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.agentsmith.AgentSessionEndEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentSessionEndEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentSessionEndEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentSessionEndEvent;

  static equals(a: AgentSessionEndEvent | PlainMessage<AgentSessionEndEvent> | undefined, b: AgentSessionEndEvent | PlainMessage<AgentSessionEndEvent> | undefined): boolean;
}

