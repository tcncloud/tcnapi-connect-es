// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/room.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, StringValue, Timestamp } from "@bufbuild/protobuf";
import { GlobalConfig, Room, RoomConfig, RoomType } from "../../commons/room303_pb.js";
import { UserArchivedStateFilter } from "../../commons/user_pb.js";

/**
 * @generated from message api.v1alpha1.room303.CreateRoomRequest
 */
export const CreateRoomRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.CreateRoomRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(RoomType) },
    { no: 3, name: "members", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "permission_group_id", kind: "message", T: StringValue },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.GetRoomRequest
 */
export const GetRoomRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.GetRoomRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.ListAllRoomsRequest
 */
export const ListAllRoomsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ListAllRoomsRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomsForMemberRequest
 */
export const ListRoomsForMemberRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomsForMemberRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomsResponse
 */
export const ListRoomsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomsResponse",
  () => [
    { no: 1, name: "rooms", kind: "message", T: Room, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.ArchiveRoomRequest
 */
export const ArchiveRoomRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ArchiveRoomRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the ListUsersNames rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersNamesRequest
 */
export const ListUsersNamesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ListUsersNamesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "archived_filter", kind: "enum", T: proto3.getEnumType(UserArchivedStateFilter) },
  ],
);

/**
 * Response message for the ListUsersNames rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersNamesResponse
 */
export const ListUsersNamesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.ListUsersNamesResponse",
  () => [
    { no: 1, name: "user_details", kind: "message", T: UserDetails, repeated: true },
  ],
);

/**
 * wrapper for listing user names with ids
 *
 * @generated from message api.v1alpha1.room303.UserDetails
 */
export const UserDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.UserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * request to update room configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateRoomConfigRequest
 */
export const UpdateRoomConfigRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.UpdateRoomConfigRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: RoomConfig },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * request to update global configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateGlobalConfigRequest
 */
export const UpdateGlobalConfigRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.UpdateGlobalConfigRequest",
  () => [
    { no: 1, name: "config", kind: "message", T: GlobalConfig },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * response to update global configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateGlobalConfigResponse
 */
export const UpdateGlobalConfigResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.UpdateGlobalConfigResponse",
  () => [
    { no: 1, name: "edited_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: GlobalConfig },
    { no: 3, name: "date_created", kind: "message", T: Timestamp },
    { no: 4, name: "last_edited", kind: "message", T: Timestamp },
  ],
);

/**
 * request to get global configuration
 *
 * @generated from message api.v1alpha1.room303.GetGlobalConfigRequest
 */
export const GetGlobalConfigRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.GetGlobalConfigRequest",
  [],
);

/**
 * response to get global configuration
 *
 * @generated from message api.v1alpha1.room303.GetGlobalConfigResponse
 */
export const GetGlobalConfigResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.GetGlobalConfigResponse",
  () => [
    { no: 1, name: "edited_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: GlobalConfig },
    { no: 3, name: "date_created", kind: "message", T: Timestamp },
    { no: 4, name: "last_edited", kind: "message", T: Timestamp },
  ],
);

/**
 * request to update room details
 *
 * @generated from message api.v1alpha1.room303.UpdateRoomRequest
 */
export const UpdateRoomRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.room303.UpdateRoomRequest",
  () => [
    { no: 1, name: "room", kind: "message", T: Room },
    { no: 100, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

