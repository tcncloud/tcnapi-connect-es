// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/event.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { StatusState } from "./asm_pb.js";
import type { OmniConversation } from "./omnichannel_pb.js";

/**
 * this event will be depricated and asmevent will be used instead
 *
 * @generated from message api.commons.Event
 */
export declare class Event extends Message<Event> {
  /**
   * @generated from field: api.commons.StatusState state = 1;
   */
  state: StatusState;

  /**
   * @generated from field: int64 event_time = 2;
   */
  eventTime: bigint;

  /**
   * @generated from oneof api.commons.Event.event
   */
  event: {
    /**
     * @generated from field: api.commons.ActivatedConversationEvent activated_conversation_event = 5;
     */
    value: ActivatedConversationEvent;
    case: "activatedConversationEvent";
  } | {
    /**
     * @generated from field: api.commons.DeactivatedConversationEvent deactivated_conversation_event = 6;
     */
    value: DeactivatedConversationEvent;
    case: "deactivatedConversationEvent";
  } | {
    /**
     * @generated from field: api.commons.SentMessageEvent sent_message_event = 7;
     */
    value: SentMessageEvent;
    case: "sentMessageEvent";
  } | {
    /**
     * An event to indicate that the status has changed
     *
     * @generated from field: api.commons.SendStatusEvent send_status_event = 8;
     */
    value: SendStatusEvent;
    case: "sendStatusEvent";
  } | {
    /**
     * @generated from field: api.commons.PauseEvent pause_event = 9;
     */
    value: PauseEvent;
    case: "pauseEvent";
  } | {
    /**
     * @generated from field: api.commons.ResumeEvent resume_event = 10;
     */
    value: ResumeEvent;
    case: "resumeEvent";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Event>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Event";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}

/**
 * @generated from message api.commons.ActivatedConversationEvent
 */
export declare class ActivatedConversationEvent extends Message<ActivatedConversationEvent> {
  /**
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<ActivatedConversationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ActivatedConversationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivatedConversationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivatedConversationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivatedConversationEvent;

  static equals(a: ActivatedConversationEvent | PlainMessage<ActivatedConversationEvent> | undefined, b: ActivatedConversationEvent | PlainMessage<ActivatedConversationEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.DeactivatedConversationEvent
 */
export declare class DeactivatedConversationEvent extends Message<DeactivatedConversationEvent> {
  /**
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<DeactivatedConversationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DeactivatedConversationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeactivatedConversationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeactivatedConversationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeactivatedConversationEvent;

  static equals(a: DeactivatedConversationEvent | PlainMessage<DeactivatedConversationEvent> | undefined, b: DeactivatedConversationEvent | PlainMessage<DeactivatedConversationEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.SentMessageEvent
 */
export declare class SentMessageEvent extends Message<SentMessageEvent> {
  /**
   * the time between the first customer message from the last set of customer messages and the current agent message
   * this will be 0 for subsequest agent messages. i.e. the agent sends more than one message before the customer respnds
   *
   * @generated from field: int64 response_time_seconds = 1;
   */
  responseTimeSeconds: bigint;

  /**
   * if this is the first agent message in this set of agent messages
   *
   * @generated from field: bool is_initial_agent_message = 2;
   */
  isInitialAgentMessage: boolean;

  /**
   * which conversation this message was sent in
   *
   * @generated from field: api.commons.OmniConversation conversation = 3;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<SentMessageEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SentMessageEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SentMessageEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SentMessageEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SentMessageEvent;

  static equals(a: SentMessageEvent | PlainMessage<SentMessageEvent> | undefined, b: SentMessageEvent | PlainMessage<SentMessageEvent> | undefined): boolean;
}

/**
 * Indicate that the status has changed
 *
 * @generated from message api.commons.SendStatusEvent
 */
export declare class SendStatusEvent extends Message<SendStatusEvent> {
  /**
   * the status to send
   *
   * @generated from field: api.commons.StatusState status = 1;
   */
  status: StatusState;

  constructor(data?: PartialMessage<SendStatusEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SendStatusEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendStatusEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendStatusEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendStatusEvent;

  static equals(a: SendStatusEvent | PlainMessage<SendStatusEvent> | undefined, b: SendStatusEvent | PlainMessage<SendStatusEvent> | undefined): boolean;
}

/**
 * AsmEvent
 *
 * @generated from message api.commons.AsmEvent
 */
export declare class AsmEvent extends Message<AsmEvent> {
  /**
   * @generated from field: api.commons.StatusState state = 1;
   */
  state: StatusState;

  /**
   * @generated from field: int64 event_time = 2;
   */
  eventTime: bigint;

  /**
   * @generated from oneof api.commons.AsmEvent.event
   */
  event: {
    /**
     * @generated from field: api.commons.ActivatedConversationAsmEvent activated_conversation_asm_event = 5;
     */
    value: ActivatedConversationAsmEvent;
    case: "activatedConversationAsmEvent";
  } | {
    /**
     * @generated from field: api.commons.DeactivatedConversationAsmEvent deactivated_conversation_asm_event = 6;
     */
    value: DeactivatedConversationAsmEvent;
    case: "deactivatedConversationAsmEvent";
  } | {
    /**
     * @generated from field: api.commons.SentMessageAsmEvent sent_message_asm_event = 7;
     */
    value: SentMessageAsmEvent;
    case: "sentMessageAsmEvent";
  } | {
    /**
     * An event to indicate that the status has changed
     *
     * @generated from field: api.commons.SendStatusAsmEvent send_status_asm_event = 8;
     */
    value: SendStatusAsmEvent;
    case: "sendStatusAsmEvent";
  } | {
    /**
     * @generated from field: api.commons.PauseEvent pause_event = 9;
     */
    value: PauseEvent;
    case: "pauseEvent";
  } | {
    /**
     * @generated from field: api.commons.ResumeEvent resume_event = 10;
     */
    value: ResumeEvent;
    case: "resumeEvent";
  } | {
    /**
     * @generated from field: api.commons.ConversationPulledEvent conversation_pulled_event = 11;
     */
    value: ConversationPulledEvent;
    case: "conversationPulledEvent";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<AsmEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.AsmEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AsmEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AsmEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AsmEvent;

  static equals(a: AsmEvent | PlainMessage<AsmEvent> | undefined, b: AsmEvent | PlainMessage<AsmEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.ActivatedConversationAsmEvent
 */
export declare class ActivatedConversationAsmEvent extends Message<ActivatedConversationAsmEvent> {
  /**
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<ActivatedConversationAsmEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ActivatedConversationAsmEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActivatedConversationAsmEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActivatedConversationAsmEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActivatedConversationAsmEvent;

  static equals(a: ActivatedConversationAsmEvent | PlainMessage<ActivatedConversationAsmEvent> | undefined, b: ActivatedConversationAsmEvent | PlainMessage<ActivatedConversationAsmEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.DeactivatedConversationAsmEvent
 */
export declare class DeactivatedConversationAsmEvent extends Message<DeactivatedConversationAsmEvent> {
  /**
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<DeactivatedConversationAsmEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DeactivatedConversationAsmEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeactivatedConversationAsmEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeactivatedConversationAsmEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeactivatedConversationAsmEvent;

  static equals(a: DeactivatedConversationAsmEvent | PlainMessage<DeactivatedConversationAsmEvent> | undefined, b: DeactivatedConversationAsmEvent | PlainMessage<DeactivatedConversationAsmEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.SentMessageAsmEvent
 */
export declare class SentMessageAsmEvent extends Message<SentMessageAsmEvent> {
  /**
   * the time between the first customer message from the last set of customer messages and the current agent message
   * this will be 0 for subsequest agent messages. i.e. the agent sends more than one message before the customer respnds
   *
   * @generated from field: int64 response_time_seconds = 1;
   */
  responseTimeSeconds: bigint;

  /**
   * if this is the first agent message in this set of agent messages
   *
   * @generated from field: bool is_initial_agent_message = 2;
   */
  isInitialAgentMessage: boolean;

  /**
   * which conversation this message was sent in
   *
   * @generated from field: api.commons.OmniConversation conversation = 3;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<SentMessageAsmEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SentMessageAsmEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SentMessageAsmEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SentMessageAsmEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SentMessageAsmEvent;

  static equals(a: SentMessageAsmEvent | PlainMessage<SentMessageAsmEvent> | undefined, b: SentMessageAsmEvent | PlainMessage<SentMessageAsmEvent> | undefined): boolean;
}

/**
 * Indicate that the status has changed
 *
 * @generated from message api.commons.SendStatusAsmEvent
 */
export declare class SendStatusAsmEvent extends Message<SendStatusAsmEvent> {
  constructor(data?: PartialMessage<SendStatusAsmEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SendStatusAsmEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendStatusAsmEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendStatusAsmEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendStatusAsmEvent;

  static equals(a: SendStatusAsmEvent | PlainMessage<SendStatusAsmEvent> | undefined, b: SendStatusAsmEvent | PlainMessage<SendStatusAsmEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.PauseEvent
 */
export declare class PauseEvent extends Message<PauseEvent> {
  constructor(data?: PartialMessage<PauseEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.PauseEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PauseEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PauseEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PauseEvent;

  static equals(a: PauseEvent | PlainMessage<PauseEvent> | undefined, b: PauseEvent | PlainMessage<PauseEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.ResumeEvent
 */
export declare class ResumeEvent extends Message<ResumeEvent> {
  constructor(data?: PartialMessage<ResumeEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ResumeEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResumeEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResumeEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResumeEvent;

  static equals(a: ResumeEvent | PlainMessage<ResumeEvent> | undefined, b: ResumeEvent | PlainMessage<ResumeEvent> | undefined): boolean;
}

/**
 * @generated from message api.commons.ConversationPulledEvent
 */
export declare class ConversationPulledEvent extends Message<ConversationPulledEvent> {
  /**
   * @generated from field: api.commons.OmniConversation conversation = 1;
   */
  conversation?: OmniConversation;

  constructor(data?: PartialMessage<ConversationPulledEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ConversationPulledEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConversationPulledEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConversationPulledEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConversationPulledEvent;

  static equals(a: ConversationPulledEvent | PlainMessage<ConversationPulledEvent> | undefined, b: ConversationPulledEvent | PlainMessage<ConversationPulledEvent> | undefined): boolean;
}

