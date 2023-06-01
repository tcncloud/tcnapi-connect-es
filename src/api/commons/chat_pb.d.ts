// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/chat.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.ChatMessageSenderType
 */
export declare enum ChatMessageSenderType {
  /**
   * @generated from enum value: CHAT_MESSAGE_SENDER_TYPE_AGENT = 0;
   */
  AGENT = 0,

  /**
   * @generated from enum value: CHAT_MESSAGE_SENDER_TYPE_CUSTOMER = 1;
   */
  CUSTOMER = 1,

  /**
   * @generated from enum value: CHAT_MESSAGE_SENDER_TYPE_MANAGER = 2;
   */
  MANAGER = 2,
}

/**
 * The status for a chat campaign
 *
 * @generated from enum api.commons.ChatCampaignStatus
 */
export declare enum ChatCampaignStatus {
  /**
   * @generated from enum value: CHAT_CAMPAIGN_UNKNOWN = 0;
   */
  CHAT_CAMPAIGN_UNKNOWN = 0,

  /**
   * Chat campaign started running
   *
   * @generated from enum value: CHAT_CAMPAIGN_RUNNING = 15010;
   */
  CHAT_CAMPAIGN_RUNNING = 15010,

  /**
   * Chat campaign has been executed
   *
   * @generated from enum value: CHAT_CAMPAIGN_STOPPED = 15050;
   */
  CHAT_CAMPAIGN_STOPPED = 15050,

  /**
   * Chat campaign has been archived
   *
   * @generated from enum value: CHAT_CAMPAIGN_ARCHIVED = 15060;
   */
  CHAT_CAMPAIGN_ARCHIVED = 15060,

  /**
   * Chat campaign has been paused
   *
   * @generated from enum value: CHAT_CAMPAIGN_PAUSED = 15070;
   */
  CHAT_CAMPAIGN_PAUSED = 15070,
}

/**
 * The type of events for chat campaigns
 *
 * @generated from enum api.commons.ChatCampaignEvent
 */
export declare enum ChatCampaignEvent {
  /**
   * @generated from enum value: CHAT_CAMPAIGN_EVENT_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * when the chat campaign is scheduled
   *
   * @generated from enum value: CHAT_CAMPAIGN_EVENT_SCHEDULED = 1;
   */
  SCHEDULED = 1,

  /**
   * when the manager stops the chat campaign
   *
   * @generated from enum value: CHAT_CAMPAIGN_EVENT_STOPPED = 2;
   */
  STOPPED = 2,

  /**
   * when the manager archives the chat campaign
   *
   * @generated from enum value: CHAT_CAMPAIGN_EVENT_ARCHIVED = 3;
   */
  ARCHIVED = 3,

  /**
   * when the chat campaign paused by manager
   *
   * @generated from enum value: CHAT_CAMPAIGN_EVENT_PAUSED = 4;
   */
  PAUSED = 4,
}

/**
 * @generated from enum api.commons.ChatMessageType
 */
export declare enum ChatMessageType {
  /**
   * Received chat message reply from customer
   *
   * @generated from enum value: CHAT_REPLY_FROM_CUSTOMER = 0;
   */
  CHAT_REPLY_FROM_CUSTOMER = 0,

  /**
   * Its a chat message reply by an agent
   *
   * @generated from enum value: CHAT_REPLY_FROM_AGENT = 1;
   */
  CHAT_REPLY_FROM_AGENT = 1,
}

/**
 * @generated from message api.commons.ChatColorProperties
 */
export declare class ChatColorProperties extends Message<ChatColorProperties> {
  /**
   * @generated from field: string primary_color = 1;
   */
  primaryColor: string;

  /**
   * @generated from field: string header_text_color = 2;
   */
  headerTextColor: string;

  /**
   * @generated from field: string paragraph_text_color = 3;
   */
  paragraphTextColor: string;

  constructor(data?: PartialMessage<ChatColorProperties>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ChatColorProperties";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatColorProperties;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatColorProperties;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatColorProperties;

  static equals(a: ChatColorProperties | PlainMessage<ChatColorProperties> | undefined, b: ChatColorProperties | PlainMessage<ChatColorProperties> | undefined): boolean;
}

/**
 * The header data for the chat widget associated to a given chat campaign
 *
 * @generated from message api.commons.ChatHeader
 */
export declare class ChatHeader extends Message<ChatHeader> {
  /**
   * the main text to display
   *
   * @generated from field: string header = 1;
   */
  header: string;

  /**
   * the text to display beneath the header
   *
   * @generated from field: string subheader = 2;
   */
  subheader: string;

  constructor(data?: PartialMessage<ChatHeader>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ChatHeader";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatHeader;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatHeader;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatHeader;

  static equals(a: ChatHeader | PlainMessage<ChatHeader> | undefined, b: ChatHeader | PlainMessage<ChatHeader> | undefined): boolean;
}

/**
 * @generated from message api.commons.HoursOfOperation
 */
export declare class HoursOfOperation extends Message<HoursOfOperation> {
  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange monday = 1;
   */
  monday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange tuesday = 2;
   */
  tuesday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange wednesday = 3;
   */
  wednesday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange thursday = 4;
   */
  thursday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange friday = 5;
   */
  friday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange saturday = 6;
   */
  saturday: HoursOfOperationRange[];

  /**
   * @generated from field: repeated api.commons.HoursOfOperationRange sunday = 7;
   */
  sunday: HoursOfOperationRange[];

  constructor(data?: PartialMessage<HoursOfOperation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.HoursOfOperation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HoursOfOperation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HoursOfOperation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HoursOfOperation;

  static equals(a: HoursOfOperation | PlainMessage<HoursOfOperation> | undefined, b: HoursOfOperation | PlainMessage<HoursOfOperation> | undefined): boolean;
}

/**
 * @generated from message api.commons.HoursOfOperationRange
 */
export declare class HoursOfOperationRange extends Message<HoursOfOperationRange> {
  /**
   * @generated from field: int64 start_hour = 1;
   */
  startHour: bigint;

  /**
   * @generated from field: int64 start_minute = 2;
   */
  startMinute: bigint;

  /**
   * @generated from field: int64 end_hour = 3;
   */
  endHour: bigint;

  /**
   * @generated from field: int64 end_minute = 4;
   */
  endMinute: bigint;

  constructor(data?: PartialMessage<HoursOfOperationRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.HoursOfOperationRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HoursOfOperationRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HoursOfOperationRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HoursOfOperationRange;

  static equals(a: HoursOfOperationRange | PlainMessage<HoursOfOperationRange> | undefined, b: HoursOfOperationRange | PlainMessage<HoursOfOperationRange> | undefined): boolean;
}

