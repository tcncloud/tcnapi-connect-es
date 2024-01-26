// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file services/pbx/v1/service.proto (package services.pbx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";

/**
 * -------------------------
 * Enums
 * -------------------------
 *
 * @generated from enum services.pbx.v1.RingStrategy
 */
export const RingStrategy = proto3.makeEnum(
  "services.pbx.v1.RingStrategy",
  [
    {no: 0, name: "RING_STRATEGY_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RING_STRATEGY_RING_ALL", localName: "RING_ALL"},
    {no: 2, name: "RING_STRATEGY_ROUND_ROBIN", localName: "ROUND_ROBIN"},
    {no: 3, name: "RING_STRATEGY_RANDOM", localName: "RANDOM"},
  ],
);

/**
 * -------------------------
 * Entity Definitions
 * -------------------------
 *
 * @generated from message services.pbx.v1.PBXUser
 */
export const PBXUser = proto3.makeMessageType(
  "services.pbx.v1.PBXUser",
  () => [
    { no: 1, name: "pbx_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sip_accounts", kind: "message", T: SIPAccount, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v1.SIPAccount
 */
export const SIPAccount = proto3.makeMessageType(
  "services.pbx.v1.SIPAccount",
  () => [
    { no: 1, name: "sip_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "extension", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "ring_groups", kind: "message", T: RingGroup, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v1.RingGroup
 */
export const RingGroup = proto3.makeMessageType(
  "services.pbx.v1.RingGroup",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "extension", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "ring_strategy", kind: "enum", T: proto3.getEnumType(RingStrategy) },
    { no: 6, name: "pbx_users", kind: "message", T: PBXUser, repeated: true },
  ],
);

/**
 * -------------------------
 *  RPC Messages
 * -------------------------
 *
 * @generated from message services.pbx.v1.QueryPbxUsersRequest
 */
export const QueryPbxUsersRequest = proto3.makeMessageType(
  "services.pbx.v1.QueryPbxUsersRequest",
  () => [
    { no: 1, name: "pbx_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "response_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v1.QueryPbxUsersResponse
 */
export const QueryPbxUsersResponse = proto3.makeMessageType(
  "services.pbx.v1.QueryPbxUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: PBXUser, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v1.QueryRingGroupsRequest
 */
export const QueryRingGroupsRequest = proto3.makeMessageType(
  "services.pbx.v1.QueryRingGroupsRequest",
  () => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "response_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v1.QueryRingGroupsResponse
 */
export const QueryRingGroupsResponse = proto3.makeMessageType(
  "services.pbx.v1.QueryRingGroupsResponse",
  () => [
    { no: 1, name: "groups", kind: "message", T: RingGroup, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v1.UpdatePbxUserRequest
 */
export const UpdatePbxUserRequest = proto3.makeMessageType(
  "services.pbx.v1.UpdatePbxUserRequest",
  () => [
    { no: 1, name: "user", kind: "message", T: PBXUser },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v1.UpdatePbxUserResponse
 */
export const UpdatePbxUserResponse = proto3.makeMessageType(
  "services.pbx.v1.UpdatePbxUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: PBXUser },
  ],
);

/**
 * @generated from message services.pbx.v1.UpdateRingGroupRequest
 */
export const UpdateRingGroupRequest = proto3.makeMessageType(
  "services.pbx.v1.UpdateRingGroupRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v1.UpdateRingGroupResponse
 */
export const UpdateRingGroupResponse = proto3.makeMessageType(
  "services.pbx.v1.UpdateRingGroupResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v1.AssignRandomExtensionRequest
 */
export const AssignRandomExtensionRequest = proto3.makeMessageType(
  "services.pbx.v1.AssignRandomExtensionRequest",
  [],
);

/**
 * @generated from message services.pbx.v1.AssignRandomExtensionResponse
 */
export const AssignRandomExtensionResponse = proto3.makeMessageType(
  "services.pbx.v1.AssignRandomExtensionResponse",
  () => [
    { no: 1, name: "extension", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message services.pbx.v1.CreateRingGroupRequest
 */
export const CreateRingGroupRequest = proto3.makeMessageType(
  "services.pbx.v1.CreateRingGroupRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ring_strategy", kind: "enum", T: proto3.getEnumType(RingStrategy) },
    { no: 4, name: "pbx_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "extension", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message services.pbx.v1.CreateRingGroupResponse
 */
export const CreateRingGroupResponse = proto3.makeMessageType(
  "services.pbx.v1.CreateRingGroupResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v1.DeleteRingGroupRequest
 */
export const DeleteRingGroupRequest = proto3.makeMessageType(
  "services.pbx.v1.DeleteRingGroupRequest",
  () => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v1.DeleteRingGroupResponse
 */
export const DeleteRingGroupResponse = proto3.makeMessageType(
  "services.pbx.v1.DeleteRingGroupResponse",
  [],
);

