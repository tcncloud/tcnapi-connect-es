// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/member.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Member } from "../../commons/room303_pb.js";

/**
 * @generated from message api.v1alpha1.room303.AddRoomMemberRequest
 */
export const AddRoomMemberRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.AddRoomMemberRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.RemoveRoomMemberRequest
 */
export const RemoveRoomMemberRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.RemoveRoomMemberRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.RemoveRoomMemberResponse
 */
export const RemoveRoomMemberResponse = proto3.makeMessageType(
  "api.v1alpha1.room303.RemoveRoomMemberResponse",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomMembersRequest
 */
export const ListRoomMembersRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomMembersRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.ListRoomMembersResponse
 */
export const ListRoomMembersResponse = proto3.makeMessageType(
  "api.v1alpha1.room303.ListRoomMembersResponse",
  () => [
    { no: 1, name: "members", kind: "message", T: Member, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.SetAdminForRoomMemberRequest
 */
export const SetAdminForRoomMemberRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.SetAdminForRoomMemberRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.SetAdminForRoomMemberResponse
 */
export const SetAdminForRoomMemberResponse = proto3.makeMessageType(
  "api.v1alpha1.room303.SetAdminForRoomMemberResponse",
  [],
);

/**
 * @generated from message api.v1alpha1.room303.JoinRoomRequest
 */
export const JoinRoomRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.JoinRoomRequest",
  () => [
    { no: 1, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.room303.GetRoomMemberRequest
 */
export const GetRoomMemberRequest = proto3.makeMessageType(
  "api.v1alpha1.room303.GetRoomMemberRequest",
  () => [
    { no: 2, name: "room_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

