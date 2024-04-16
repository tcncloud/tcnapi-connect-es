// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/pbx/v2/service.proto (package services.pbx.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";

/**
 * -------------------------
 * Enums
 * -------------------------
 *
 * @generated from enum services.pbx.v2.RingStrategy
 */
export const RingStrategy = /*@__PURE__*/ proto3.makeEnum(
  "services.pbx.v2.RingStrategy",
  [
    {no: 0, name: "RING_STRATEGY_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RING_STRATEGY_RING_ALL", localName: "RING_ALL"},
    {no: 2, name: "RING_STRATEGY_ROUND_ROBIN", localName: "ROUND_ROBIN"},
    {no: 3, name: "RING_STRATEGY_RANDOM", localName: "RANDOM"},
    {no: 4, name: "RING_STRATEGY_ORDERED", localName: "ORDERED"},
  ],
);

/**
 * -------------------------
 * Entity Definitions
 * -------------------------
 *
 * @generated from message services.pbx.v2.PBXUser
 */
export const PBXUser = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.PBXUser",
  () => [
    { no: 1, name: "pbx_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sip_account_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v2.SIPAccount
 */
export const SIPAccount = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.SIPAccount",
  () => [
    { no: 1, name: "sip_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ring_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "org_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.RingGroup
 */
export const RingGroup = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.RingGroup",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "ring_strategy", kind: "enum", T: proto3.getEnumType(RingStrategy) },
    { no: 6, name: "sip_account_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * -------------------------
 *  RPC Messages
 * -------------------------
 *
 * @generated from message services.pbx.v2.ListPBXUsersRequest
 */
export const ListPBXUsersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListPBXUsersRequest",
  [],
);

/**
 * @generated from message services.pbx.v2.ListPBXUsersResponse
 */
export const ListPBXUsersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListPBXUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: PBXUser, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v2.ListSIPAccountsRequest
 */
export const ListSIPAccountsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListSIPAccountsRequest",
  [],
);

/**
 * @generated from message services.pbx.v2.ListSIPAccountsResponse
 */
export const ListSIPAccountsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListSIPAccountsResponse",
  () => [
    { no: 1, name: "sip_accounts", kind: "message", T: SIPAccount, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v2.GetSIPAccountRequest
 */
export const GetSIPAccountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetSIPAccountRequest",
  () => [
    { no: 1, name: "sip_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.GetSIPAccountResponse
 */
export const GetSIPAccountResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetSIPAccountResponse",
  () => [
    { no: 1, name: "sip_account", kind: "message", T: SIPAccount, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v2.GetPBXUserRequest
 */
export const GetPBXUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetPBXUserRequest",
  () => [
    { no: 1, name: "pbx_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.GetPBXUserResponse
 */
export const GetPBXUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetPBXUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: PBXUser },
  ],
);

/**
 * @generated from message services.pbx.v2.ListRingGroupsRequest
 */
export const ListRingGroupsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListRingGroupsRequest",
  [],
);

/**
 * @generated from message services.pbx.v2.ListRingGroupsResponse
 */
export const ListRingGroupsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.ListRingGroupsResponse",
  () => [
    { no: 1, name: "groups", kind: "message", T: RingGroup, repeated: true },
  ],
);

/**
 * @generated from message services.pbx.v2.GetRingGroupRequest
 */
export const GetRingGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetRingGroupRequest",
  () => [
    { no: 1, name: "ring_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.GetRingGroupResponse
 */
export const GetRingGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.GetRingGroupResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v2.UpdateSIPAccountRequest
 */
export const UpdateSIPAccountRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.UpdateSIPAccountRequest",
  () => [
    { no: 1, name: "sip_account", kind: "message", T: SIPAccount },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v2.UpdateSIPAccountResponse
 */
export const UpdateSIPAccountResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.UpdateSIPAccountResponse",
  () => [
    { no: 1, name: "sip_account", kind: "message", T: SIPAccount },
  ],
);

/**
 * @generated from message services.pbx.v2.UpdateRingGroupRequest
 */
export const UpdateRingGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.UpdateRingGroupRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message services.pbx.v2.UpdateRingGroupResponse
 */
export const UpdateRingGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.UpdateRingGroupResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v2.AssignRandomExtensionRequest
 */
export const AssignRandomExtensionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.AssignRandomExtensionRequest",
  [],
);

/**
 * @generated from message services.pbx.v2.AssignRandomExtensionResponse
 */
export const AssignRandomExtensionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.AssignRandomExtensionResponse",
  () => [
    { no: 1, name: "extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.CreateRingGroupRequest
 */
export const CreateRingGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.CreateRingGroupRequest",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v2.CreateRingGroupResponse
 */
export const CreateRingGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.CreateRingGroupResponse",
  () => [
    { no: 1, name: "group", kind: "message", T: RingGroup },
  ],
);

/**
 * @generated from message services.pbx.v2.DeleteRingGroupRequest
 */
export const DeleteRingGroupRequest = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.DeleteRingGroupRequest",
  () => [
    { no: 1, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.pbx.v2.DeleteRingGroupResponse
 */
export const DeleteRingGroupResponse = /*@__PURE__*/ proto3.makeMessageType(
  "services.pbx.v2.DeleteRingGroupResponse",
  [],
);

