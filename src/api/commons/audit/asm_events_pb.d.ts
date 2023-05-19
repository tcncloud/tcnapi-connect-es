// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/asm_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { OmniConversation } from "../omnichannel_pb.js";
import type { StatusState } from "../asm_pb.js";

/**
 * AsmAgentLoginEvent - whenever an agent logs into asm
 *
 * @generated from message api.commons.audit.AsmAgentLoginEvent
 */
export declare class AsmAgentLoginEvent extends Message<AsmAgentLoginEvent> {
  /**
   * the agent's ID
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the asm session sid generated when the agent logged in
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  constructor(data?: PartialMessage<AsmAgentLoginEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmAgentLoginEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmAgentLoginEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmAgentLoginEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmAgentLoginEvent;

  static equals(a: AsmAgentLoginEvent | PlainMessage<AsmAgentLoginEvent> | undefined, b: AsmAgentLoginEvent | PlainMessage<AsmAgentLoginEvent> | undefined): boolean;
}

/**
 * AsmOpenVoiceEvent - whenever an agent opens voice
 *
 * @generated from message api.commons.audit.AsmOpenVoiceEvent
 */
export declare class AsmOpenVoiceEvent extends Message<AsmOpenVoiceEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  /**
   * the session sid generated when voice started
   *
   * @generated from field: int64 voice_session_sid = 3;
   */
  voiceSessionSid: bigint;

  constructor(data?: PartialMessage<AsmOpenVoiceEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmOpenVoiceEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmOpenVoiceEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmOpenVoiceEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmOpenVoiceEvent;

  static equals(a: AsmOpenVoiceEvent | PlainMessage<AsmOpenVoiceEvent> | undefined, b: AsmOpenVoiceEvent | PlainMessage<AsmOpenVoiceEvent> | undefined): boolean;
}

/**
 * AsmOpenOmniAgentEvent - whenever an agent logs into omni agent
 *
 * @generated from message api.commons.audit.AsmOpenOmniAgentEvent
 */
export declare class AsmOpenOmniAgentEvent extends Message<AsmOpenOmniAgentEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  constructor(data?: PartialMessage<AsmOpenOmniAgentEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmOpenOmniAgentEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmOpenOmniAgentEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmOpenOmniAgentEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmOpenOmniAgentEvent;

  static equals(a: AsmOpenOmniAgentEvent | PlainMessage<AsmOpenOmniAgentEvent> | undefined, b: AsmOpenOmniAgentEvent | PlainMessage<AsmOpenOmniAgentEvent> | undefined): boolean;
}

/**
 * AsmActivateConversationEvent - whenever an agent activates a conversation
 *
 * @generated from message api.commons.audit.AsmActivateConversationEvent
 */
export declare class AsmActivateConversationEvent extends Message<AsmActivateConversationEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  /**
   * the conversation being activated
   *
   * @generated from field: api.commons.OmniConversation conversation = 3;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<AsmActivateConversationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmActivateConversationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmActivateConversationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmActivateConversationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmActivateConversationEvent;

  static equals(a: AsmActivateConversationEvent | PlainMessage<AsmActivateConversationEvent> | undefined, b: AsmActivateConversationEvent | PlainMessage<AsmActivateConversationEvent> | undefined): boolean;
}

/**
 * AsmDeactivateConversationEvent - whenever agent deactivates a conversation
 *
 * @generated from message api.commons.audit.AsmDeactivateConversationEvent
 */
export declare class AsmDeactivateConversationEvent extends Message<AsmDeactivateConversationEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  /**
   * the conversation being deactivated
   *
   * @generated from field: api.commons.OmniConversation conversation = 3;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<AsmDeactivateConversationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmDeactivateConversationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmDeactivateConversationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmDeactivateConversationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmDeactivateConversationEvent;

  static equals(a: AsmDeactivateConversationEvent | PlainMessage<AsmDeactivateConversationEvent> | undefined, b: AsmDeactivateConversationEvent | PlainMessage<AsmDeactivateConversationEvent> | undefined): boolean;
}

/**
 * AsmAgentStateChangedEvent - whenever an agent's state changes
 *
 * @generated from message api.commons.audit.AsmAgentStateChangedEvent
 */
export declare class AsmAgentStateChangedEvent extends Message<AsmAgentStateChangedEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  /**
   * the agent's new status
   *
   * @generated from field: api.commons.StatusState new_status = 3;
   */
  newStatus: StatusState;

  /**
   * the agent's old status
   *
   * @generated from field: api.commons.StatusState old_status = 4;
   */
  oldStatus: StatusState;

  constructor(data?: PartialMessage<AsmAgentStateChangedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmAgentStateChangedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmAgentStateChangedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmAgentStateChangedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmAgentStateChangedEvent;

  static equals(a: AsmAgentStateChangedEvent | PlainMessage<AsmAgentStateChangedEvent> | undefined, b: AsmAgentStateChangedEvent | PlainMessage<AsmAgentStateChangedEvent> | undefined): boolean;
}

/**
 * AsmAgentLogoutEvent - whenever an agent logs out of asm
 *
 * @generated from message api.commons.audit.AsmAgentLogoutEvent
 */
export declare class AsmAgentLogoutEvent extends Message<AsmAgentLogoutEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  /**
   * the reason for logging out
   *
   * @generated from field: string reason = 3;
   */
  reason: string;

  constructor(data?: PartialMessage<AsmAgentLogoutEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmAgentLogoutEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmAgentLogoutEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmAgentLogoutEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmAgentLogoutEvent;

  static equals(a: AsmAgentLogoutEvent | PlainMessage<AsmAgentLogoutEvent> | undefined, b: AsmAgentLogoutEvent | PlainMessage<AsmAgentLogoutEvent> | undefined): boolean;
}

/**
 * AsmPauseEvent -
 *
 * @generated from message api.commons.audit.AsmPauseEvent
 */
export declare class AsmPauseEvent extends Message<AsmPauseEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  constructor(data?: PartialMessage<AsmPauseEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmPauseEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmPauseEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmPauseEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmPauseEvent;

  static equals(a: AsmPauseEvent | PlainMessage<AsmPauseEvent> | undefined, b: AsmPauseEvent | PlainMessage<AsmPauseEvent> | undefined): boolean;
}

/**
 * AsmResumeEvent -
 *
 * @generated from message api.commons.audit.AsmResumeEvent
 */
export declare class AsmResumeEvent extends Message<AsmResumeEvent> {
  /**
   * the id of the agent
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * the session sid generated when the agent logged into asm
   *
   * @generated from field: int64 asm_session_sid = 2;
   */
  asmSessionSid: bigint;

  constructor(data?: PartialMessage<AsmResumeEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmResumeEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmResumeEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmResumeEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmResumeEvent;

  static equals(a: AsmResumeEvent | PlainMessage<AsmResumeEvent> | undefined, b: AsmResumeEvent | PlainMessage<AsmResumeEvent> | undefined): boolean;
}

/**
 * AsmConversationPulledEvent -
 *
 * @generated from message api.commons.audit.AsmConversationPulledEvent
 */
export declare class AsmConversationPulledEvent extends Message<AsmConversationPulledEvent> {
  /**
   * the conversation pulled
   *
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<AsmConversationPulledEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AsmConversationPulledEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmConversationPulledEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmConversationPulledEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmConversationPulledEvent;

  static equals(a: AsmConversationPulledEvent | PlainMessage<AsmConversationPulledEvent> | undefined, b: AsmConversationPulledEvent | PlainMessage<AsmConversationPulledEvent> | undefined): boolean;
}

