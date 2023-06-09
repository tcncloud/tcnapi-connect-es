// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/room303.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.RoomType
 */
export const RoomType = proto3.makeEnum(
  "api.commons.RoomType",
  [
    {no: 0, name: "ROOM_TYPE_DIRECT", localName: "DIRECT"},
    {no: 1, name: "ROOM_TYPE_MULTI", localName: "MULTI"},
    {no: 2, name: "ROOM_TYPE_SYSTEM", localName: "SYSTEM"},
  ],
);

/**
 * @generated from enum api.commons.MessageStatus
 */
export const MessageStatus = proto3.makeEnum(
  "api.commons.MessageStatus",
  [
    {no: 0, name: "MESSAGE_STATUS_ACTIVE", localName: "ACTIVE"},
    {no: 1, name: "MESSAGE_STATUS_EDITED", localName: "EDITED"},
    {no: 2, name: "MESSAGE_STATUS_ARCHIVED", localName: "ARCHIVED"},
  ],
);

/**
 * @generated from enum api.commons.RoomStatus
 */
export const RoomStatus = proto3.makeEnum(
  "api.commons.RoomStatus",
  [
    {no: 0, name: "ROOM_STATUS_ACTIVE", localName: "ACTIVE"},
    {no: 1, name: "ROOM_STATUS_ARCHIVED", localName: "ARCHIVED"},
    {no: 2, name: "ROOM_STATUS_DELETED", localName: "DELETED"},
  ],
);

/**
 * @generated from message api.commons.UserSid
 */
export const UserSid = proto3.makeMessageType(
  "api.commons.UserSid",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Entity used in the member api service for room303.
 *
 * @generated from message api.commons.Member
 */
export const Member = proto3.makeMessageType(
  "api.commons.Member",
  () => [
    { no: 1, name: "user_sid", kind: "message", T: UserSid },
    { no: 2, name: "added_by", kind: "message", T: UserSid },
    { no: 3, name: "added_at", kind: "message", T: Timestamp },
    { no: 4, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.commons.Room
 */
export const Room = proto3.makeMessageType(
  "api.commons.Room",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(RoomType) },
    { no: 5, name: "created_at", kind: "message", T: Timestamp },
    { no: 6, name: "updated_at", kind: "message", T: Timestamp },
    { no: 7, name: "status", kind: "enum", T: proto3.getEnumType(RoomStatus) },
    { no: 8, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.Message
 */
export const Message = proto3.makeMessageType(
  "api.commons.Message",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "from_user", kind: "message", T: UserSid },
    { no: 5, name: "status", kind: "enum", T: proto3.getEnumType(MessageStatus) },
    { no: 6, name: "received_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_at", kind: "message", T: Timestamp },
    { no: 8, name: "payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "unread", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "nonce", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.MessageStat
 */
export const MessageStat = proto3.makeMessageType(
  "api.commons.MessageStat",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "unread_messages", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

