// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/room.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Room, RoomType } from "../../commons/room303_pb.js";
import { UserArchivedStateFilter } from "../../commons/user_pb.js";

/**
 * @generated from message api.v1alpha1.room303.CreateRoomRequest
 */
export const CreateRoomRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.CreateRoomRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(RoomType) },
    { no: 3, name: "members", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.GetRoomRequest
 */
export const GetRoomRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.GetRoomRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.ListAllRoomsRequest
 */
export const ListAllRoomsRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.ListAllRoomsRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomsForMemberRequest
 */
export const ListRoomsForMemberRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomsForMemberRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomsResponse
 */
export const ListRoomsResponse = proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomsResponse",
  () => [
    { no: 1, name: "rooms", kind: "message", T: Room, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.ArchiveRoomRequest
 */
export const ArchiveRoomRequest = proto3.makeMessageType(
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
export const ListUsersNamesRequest = proto3.makeMessageType(
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
export const ListUsersNamesResponse = proto3.makeMessageType(
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
export const UserDetails = proto3.makeMessageType(
  "api.v1alpha1.room303.UserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

