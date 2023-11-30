// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/room303.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.RoomType
 */
export declare enum RoomType {
  /**
   * Direct Message types - can be muliple users in a direct message
   *
   * @generated from enum value: ROOM_TYPE_DIRECT = 0;
   */
  DIRECT = 0,

  /**
   * Multiple User channel
   *
   * @generated from enum value: ROOM_TYPE_MULTI = 1;
   */
  MULTI = 1,

  /**
   * System User channel - used for system notifications
   *
   * @generated from enum value: ROOM_TYPE_SYSTEM = 2;
   */
  SYSTEM = 2,

  /**
   * Global system channel - used for global messages
   *
   * @generated from enum value: ROOM_TYPE_GLOBAL_SYSTEM = 3;
   */
  GLOBAL_SYSTEM = 3,
}

/**
 * @generated from enum api.commons.MessageStatus
 */
export declare enum MessageStatus {
  /**
   * @generated from enum value: MESSAGE_STATUS_ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * @generated from enum value: MESSAGE_STATUS_EDITED = 1;
   */
  EDITED = 1,

  /**
   * @generated from enum value: MESSAGE_STATUS_ARCHIVED = 2;
   */
  ARCHIVED = 2,
}

/**
 * @generated from enum api.commons.RoomStatus
 */
export declare enum RoomStatus {
  /**
   * @generated from enum value: ROOM_STATUS_ACTIVE = 0;
   */
  ACTIVE = 0,

  /**
   * @generated from enum value: ROOM_STATUS_ARCHIVED = 1;
   */
  ARCHIVED = 1,

  /**
   * @generated from enum value: ROOM_STATUS_DELETED = 2;
   */
  DELETED = 2,
}

/**
 * ConfigPermissionEnum -
 *
 * @generated from enum api.commons.ConfigPermissionEnum
 */
export declare enum ConfigPermissionEnum {
  /**
   * @generated from enum value: LIMITED = 0;
   */
  LIMITED = 0,

  /**
   * @generated from enum value: ROOM303_MEMBER = 1;
   */
  ROOM303_MEMBER = 1,

  /**
   * @generated from enum value: ROOM303_SUPERVISOR = 2;
   */
  ROOM303_SUPERVISOR = 2,
}

/**
 * @generated from message api.commons.UserSid
 */
export declare class UserSid extends Message$1<UserSid> {
  /**
   * id of the user
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * name of the user
   *
   * @generated from field: string full_name = 2;
   */
  fullName: string;

  /**
   * name of the user
   *
   * @generated from field: string display_name = 3;
   */
  displayName: string;

  constructor(data?: PartialMessage<UserSid>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.UserSid";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserSid;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserSid;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserSid;

  static equals(a: UserSid | PlainMessage<UserSid> | undefined, b: UserSid | PlainMessage<UserSid> | undefined): boolean;
}

/**
 * Entity used in the member api service for room303.
 *
 * @generated from message api.commons.Member
 */
export declare class Member extends Message$1<Member> {
  /**
   * contains name and id of the member to add
   *
   * @generated from field: api.commons.UserSid user_sid = 1;
   */
  userSid?: UserSid;

  /**
   * contains the name and id of the person adding the member
   *
   * @generated from field: api.commons.UserSid added_by = 2;
   */
  addedBy?: UserSid;

  /**
   * Unix timestamp for the time added
   *
   * @generated from field: google.protobuf.Timestamp added_at = 3;
   */
  addedAt?: Timestamp;

  /**
   * Room Id for this member
   *
   * @generated from field: string room_id = 4;
   */
  roomId: string;

  /**
   * admin rights in the room
   *
   * @generated from field: bool admin = 5;
   */
  admin: boolean;

  constructor(data?: PartialMessage<Member>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Member";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Member;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Member;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Member;

  static equals(a: Member | PlainMessage<Member> | undefined, b: Member | PlainMessage<Member> | undefined): boolean;
}

/**
 * @generated from message api.commons.Room
 */
export declare class Room extends Message$1<Room> {
  /**
   * organization id
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * TODO: WIP deprecate - unique room id
   *
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * type - DIRECT, MULTI, SYSTEM
   *
   * @generated from field: api.commons.RoomType type = 4;
   */
  type: RoomType;

  /**
   * unix timestamp for time created
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * unix timestamp for time updated
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  /**
   * status of the room
   *
   * @generated from field: api.commons.RoomStatus status = 7;
   */
  status: RoomStatus;

  /**
   * Id's value will be a hash when room_type is DIRECT or the room name when MULTI.
   * Used in ui for routing when room type is not available.
   * Will replace room_id once it's fully deprecated
   *
   * @generated from field: string id = 8;
   */
  id: string;

  /**
   * display name for the room which is replacing the field "name".
   *
   * @generated from field: string display_name = 9;
   */
  displayName: string;

  /**
   * room configuration details
   *
   * @generated from field: api.commons.RoomConfig config = 10;
   */
  config?: RoomConfig;

  constructor(data?: PartialMessage<Room>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Room";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Room;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Room;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Room;

  static equals(a: Room | PlainMessage<Room> | undefined, b: Room | PlainMessage<Room> | undefined): boolean;
}

/**
 * @generated from message api.commons.Message
 */
export declare class Message extends Message$1<Message> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: string message_id = 2;
   */
  messageId: string;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  /**
   * @generated from field: api.commons.UserSid from_user = 4;
   */
  fromUser?: UserSid;

  /**
   * @generated from field: api.commons.MessageStatus status = 5;
   */
  status: MessageStatus;

  /**
   * @generated from field: google.protobuf.Timestamp received_at = 6;
   */
  receivedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string payload = 8;
   */
  payload: string;

  /**
   * @generated from field: bool unread = 9;
   */
  unread: boolean;

  /**
   * nonce  is set by UI and used to tell if the message coming through the message update stream was created by that client.
   * this is so when the user is logged in on multiple clients (different device, tabs, browser) they can see their updated message on those clients.
   *
   * @generated from field: string nonce = 10;
   */
  nonce: string;

  constructor(data?: PartialMessage<Message>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Message";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message;

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean;
}

/**
 * @generated from message api.commons.MessageStat
 */
export declare class MessageStat extends Message$1<MessageStat> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: int32 unread_messages = 2;
   */
  unreadMessages: number;

  constructor(data?: PartialMessage<MessageStat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.MessageStat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MessageStat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MessageStat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MessageStat;

  static equals(a: MessageStat | PlainMessage<MessageStat> | undefined, b: MessageStat | PlainMessage<MessageStat> | undefined): boolean;
}

/**
 * global configuration settings
 *
 * @generated from message api.commons.GlobalConfig
 */
export declare class GlobalConfig extends Message$1<GlobalConfig> {
  /**
   * @generated from field: api.commons.ConfigPermissionEnum create_room = 1;
   */
  createRoom: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum join_existing_room = 2;
   */
  joinExistingRoom: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum send_message_to_supervisor = 3;
   */
  sendMessageToSupervisor: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum send_message_to_non_supervisor = 4;
   */
  sendMessageToNonSupervisor: ConfigPermissionEnum;

  constructor(data?: PartialMessage<GlobalConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.GlobalConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlobalConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlobalConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlobalConfig;

  static equals(a: GlobalConfig | PlainMessage<GlobalConfig> | undefined, b: GlobalConfig | PlainMessage<GlobalConfig> | undefined): boolean;
}

/**
 * room confirmation settings
 *
 * @generated from message api.commons.RoomConfig
 */
export declare class RoomConfig extends Message$1<RoomConfig> {
  /**
   * @generated from field: api.commons.ConfigPermissionEnum add_user = 1;
   */
  addUser: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum remove_user = 2;
   */
  removeUser: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum promote_to_admin = 3;
   */
  promoteToAdmin: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum read_messages = 4;
   */
  readMessages: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum send_message = 5;
   */
  sendMessage: ConfigPermissionEnum;

  /**
   * @generated from field: api.commons.ConfigPermissionEnum archive_room = 6;
   */
  archiveRoom: ConfigPermissionEnum;

  constructor(data?: PartialMessage<RoomConfig>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.RoomConfig";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomConfig;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomConfig;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomConfig;

  static equals(a: RoomConfig | PlainMessage<RoomConfig> | undefined, b: RoomConfig | PlainMessage<RoomConfig> | undefined): boolean;
}

/**
 * GlobalSystemMessage
 *
 * @generated from message api.commons.GlobalSystemMessage
 */
export declare class GlobalSystemMessage extends Message$1<GlobalSystemMessage> {
  /**
   * @generated from field: string message_id = 1;
   */
  messageId: string;

  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * @generated from field: api.commons.MessageStatus status = 3;
   */
  status: MessageStatus;

  /**
   * @generated from field: google.protobuf.Timestamp received_at = 4;
   */
  receivedAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 5;
   */
  updatedAt?: Timestamp;

  /**
   * @generated from field: string payload = 6;
   */
  payload: string;

  /**
   * @generated from field: bool unread = 7;
   */
  unread: boolean;

  /**
   * room configuration details
   *
   * @generated from field: api.commons.RoomConfig config = 8;
   */
  config?: RoomConfig;

  constructor(data?: PartialMessage<GlobalSystemMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.GlobalSystemMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlobalSystemMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlobalSystemMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlobalSystemMessage;

  static equals(a: GlobalSystemMessage | PlainMessage<GlobalSystemMessage> | undefined, b: GlobalSystemMessage | PlainMessage<GlobalSystemMessage> | undefined): boolean;
}

