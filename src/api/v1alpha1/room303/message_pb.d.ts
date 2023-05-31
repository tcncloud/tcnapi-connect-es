// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/message.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Message as Message$1, MessageStat } from "../../commons/room303_pb.js";

/**
 * @generated from message api.v1alpha1.room303.CreateMessageRequest
 */
export declare class CreateMessageRequest extends Message<CreateMessageRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string payload = 2;
   */
  payload: string;

  /**
   * nonce  is set by UI and used to tell if the message coming through the message update stream was created by that client.
   * this is so when the user is logged in on multiple clients (different device, tabs, browser) they can see their updated message on those clients.
   *
   * @generated from field: string nonce = 3;
   */
  nonce: string;

  constructor(data?: PartialMessage<CreateMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.CreateMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateMessageRequest;

  static equals(a: CreateMessageRequest | PlainMessage<CreateMessageRequest> | undefined, b: CreateMessageRequest | PlainMessage<CreateMessageRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.CreateMessageResponse
 */
export declare class CreateMessageResponse extends Message<CreateMessageResponse> {
  /**
   * @generated from field: api.commons.Message message = 1;
   */
  message?: Message$1;

  constructor(data?: PartialMessage<CreateMessageResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.CreateMessageResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateMessageResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateMessageResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateMessageResponse;

  static equals(a: CreateMessageResponse | PlainMessage<CreateMessageResponse> | undefined, b: CreateMessageResponse | PlainMessage<CreateMessageResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.EditMessageRequest
 */
export declare class EditMessageRequest extends Message<EditMessageRequest> {
  /**
   * @generated from field: string message_id = 1;
   */
  messageId: string;

  /**
   * @generated from field: string payload = 2;
   */
  payload: string;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  /**
   * nonce  is set by UI and used to tell if the message coming through the message update stream was created by that client.
   * this is so when the user is logged in on multiple clients (different device, tabs, browser) they can see their updated message on those clients.
   *
   * @generated from field: string nonce = 4;
   */
  nonce: string;

  constructor(data?: PartialMessage<EditMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.EditMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditMessageRequest;

  static equals(a: EditMessageRequest | PlainMessage<EditMessageRequest> | undefined, b: EditMessageRequest | PlainMessage<EditMessageRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.EditMessageResponse
 */
export declare class EditMessageResponse extends Message<EditMessageResponse> {
  /**
   * @generated from field: api.commons.Message message = 1;
   */
  message?: Message$1;

  constructor(data?: PartialMessage<EditMessageResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.EditMessageResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditMessageResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditMessageResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditMessageResponse;

  static equals(a: EditMessageResponse | PlainMessage<EditMessageResponse> | undefined, b: EditMessageResponse | PlainMessage<EditMessageResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetMessagesRequest
 */
export declare class GetMessagesRequest extends Message<GetMessagesRequest> {
  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * @generated from field: google.protobuf.Timestamp offset = 3;
   */
  offset?: Timestamp;

  constructor(data?: PartialMessage<GetMessagesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetMessagesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMessagesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMessagesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMessagesRequest;

  static equals(a: GetMessagesRequest | PlainMessage<GetMessagesRequest> | undefined, b: GetMessagesRequest | PlainMessage<GetMessagesRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetMessagesResponse
 */
export declare class GetMessagesResponse extends Message<GetMessagesResponse> {
  /**
   * @generated from field: repeated api.commons.Message messages = 1;
   */
  messages: Message$1[];

  constructor(data?: PartialMessage<GetMessagesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetMessagesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMessagesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMessagesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMessagesResponse;

  static equals(a: GetMessagesResponse | PlainMessage<GetMessagesResponse> | undefined, b: GetMessagesResponse | PlainMessage<GetMessagesResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.StreamMessageUpdatesRequest
 */
export declare class StreamMessageUpdatesRequest extends Message<StreamMessageUpdatesRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string member_id = 2;
   */
  memberId: string;

  constructor(data?: PartialMessage<StreamMessageUpdatesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.StreamMessageUpdatesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamMessageUpdatesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamMessageUpdatesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamMessageUpdatesRequest;

  static equals(a: StreamMessageUpdatesRequest | PlainMessage<StreamMessageUpdatesRequest> | undefined, b: StreamMessageUpdatesRequest | PlainMessage<StreamMessageUpdatesRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.StreamMessageUpdatesResponse
 */
export declare class StreamMessageUpdatesResponse extends Message<StreamMessageUpdatesResponse> {
  /**
   * @generated from field: api.commons.Message message = 1;
   */
  message?: Message$1;

  constructor(data?: PartialMessage<StreamMessageUpdatesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.StreamMessageUpdatesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamMessageUpdatesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamMessageUpdatesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamMessageUpdatesResponse;

  static equals(a: StreamMessageUpdatesResponse | PlainMessage<StreamMessageUpdatesResponse> | undefined, b: StreamMessageUpdatesResponse | PlainMessage<StreamMessageUpdatesResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.MarkMessageReadRequest
 */
export declare class MarkMessageReadRequest extends Message<MarkMessageReadRequest> {
  /**
   * @generated from field: string message_id = 1;
   */
  messageId: string;

  /**
   * @generated from field: string member_id = 2;
   */
  memberId: string;

  constructor(data?: PartialMessage<MarkMessageReadRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.MarkMessageReadRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkMessageReadRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkMessageReadRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkMessageReadRequest;

  static equals(a: MarkMessageReadRequest | PlainMessage<MarkMessageReadRequest> | undefined, b: MarkMessageReadRequest | PlainMessage<MarkMessageReadRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.MarkMessageReadResponse
 */
export declare class MarkMessageReadResponse extends Message<MarkMessageReadResponse> {
  constructor(data?: PartialMessage<MarkMessageReadResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.MarkMessageReadResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkMessageReadResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkMessageReadResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkMessageReadResponse;

  static equals(a: MarkMessageReadResponse | PlainMessage<MarkMessageReadResponse> | undefined, b: MarkMessageReadResponse | PlainMessage<MarkMessageReadResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.MarkAllMessagesReadRequest
 */
export declare class MarkAllMessagesReadRequest extends Message<MarkAllMessagesReadRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<MarkAllMessagesReadRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.MarkAllMessagesReadRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkAllMessagesReadRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkAllMessagesReadRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkAllMessagesReadRequest;

  static equals(a: MarkAllMessagesReadRequest | PlainMessage<MarkAllMessagesReadRequest> | undefined, b: MarkAllMessagesReadRequest | PlainMessage<MarkAllMessagesReadRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.MarkAllMessagesReadResponse
 */
export declare class MarkAllMessagesReadResponse extends Message<MarkAllMessagesReadResponse> {
  /**
   * @generated from field: repeated api.commons.Message rows_updated = 1;
   */
  rowsUpdated: Message$1[];

  constructor(data?: PartialMessage<MarkAllMessagesReadResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.MarkAllMessagesReadResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarkAllMessagesReadResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarkAllMessagesReadResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarkAllMessagesReadResponse;

  static equals(a: MarkAllMessagesReadResponse | PlainMessage<MarkAllMessagesReadResponse> | undefined, b: MarkAllMessagesReadResponse | PlainMessage<MarkAllMessagesReadResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetUnreadStatsRequest
 */
export declare class GetUnreadStatsRequest extends Message<GetUnreadStatsRequest> {
  constructor(data?: PartialMessage<GetUnreadStatsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetUnreadStatsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUnreadStatsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUnreadStatsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUnreadStatsRequest;

  static equals(a: GetUnreadStatsRequest | PlainMessage<GetUnreadStatsRequest> | undefined, b: GetUnreadStatsRequest | PlainMessage<GetUnreadStatsRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetUnreadStatsResponse
 */
export declare class GetUnreadStatsResponse extends Message<GetUnreadStatsResponse> {
  /**
   * @generated from field: repeated api.commons.MessageStat stats = 1;
   */
  stats: MessageStat[];

  constructor(data?: PartialMessage<GetUnreadStatsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetUnreadStatsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUnreadStatsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUnreadStatsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUnreadStatsResponse;

  static equals(a: GetUnreadStatsResponse | PlainMessage<GetUnreadStatsResponse> | undefined, b: GetUnreadStatsResponse | PlainMessage<GetUnreadStatsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.DeleteMessageRequest
 */
export declare class DeleteMessageRequest extends Message<DeleteMessageRequest> {
  /**
   * @generated from field: string message_id = 1;
   */
  messageId: string;

  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * nonce  is set by UI and used to tell if the message coming through the message update stream was created by that client.
   * this is so when the user is logged in on multiple clients (different device, tabs, browser) they can see their updated message on those clients.
   *
   * @generated from field: string nonce = 3;
   */
  nonce: string;

  constructor(data?: PartialMessage<DeleteMessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.DeleteMessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMessageRequest;

  static equals(a: DeleteMessageRequest | PlainMessage<DeleteMessageRequest> | undefined, b: DeleteMessageRequest | PlainMessage<DeleteMessageRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.DeleteMessageResponse
 */
export declare class DeleteMessageResponse extends Message<DeleteMessageResponse> {
  /**
   * @generated from field: api.commons.Message message = 1;
   */
  message?: Message$1;

  constructor(data?: PartialMessage<DeleteMessageResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.DeleteMessageResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteMessageResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteMessageResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteMessageResponse;

  static equals(a: DeleteMessageResponse | PlainMessage<DeleteMessageResponse> | undefined, b: DeleteMessageResponse | PlainMessage<DeleteMessageResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.BulkMarkMessageReadRequest
 */
export declare class BulkMarkMessageReadRequest extends Message<BulkMarkMessageReadRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: repeated string message_ids = 2;
   */
  messageIds: string[];

  constructor(data?: PartialMessage<BulkMarkMessageReadRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.BulkMarkMessageReadRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BulkMarkMessageReadRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BulkMarkMessageReadRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BulkMarkMessageReadRequest;

  static equals(a: BulkMarkMessageReadRequest | PlainMessage<BulkMarkMessageReadRequest> | undefined, b: BulkMarkMessageReadRequest | PlainMessage<BulkMarkMessageReadRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.BulkMarkMessageReadResponse
 */
export declare class BulkMarkMessageReadResponse extends Message<BulkMarkMessageReadResponse> {
  /**
   * @generated from field: repeated api.commons.Message messages = 1;
   */
  messages: Message$1[];

  constructor(data?: PartialMessage<BulkMarkMessageReadResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.BulkMarkMessageReadResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BulkMarkMessageReadResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BulkMarkMessageReadResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BulkMarkMessageReadResponse;

  static equals(a: BulkMarkMessageReadResponse | PlainMessage<BulkMarkMessageReadResponse> | undefined, b: BulkMarkMessageReadResponse | PlainMessage<BulkMarkMessageReadResponse> | undefined): boolean;
}
