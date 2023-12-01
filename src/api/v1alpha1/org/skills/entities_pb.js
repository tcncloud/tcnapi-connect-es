// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/skills/entities.proto (package api.v1alpha1.org.skills, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { SkillGroup, SkillSet } from "../../../commons/org/skill_group_pb.js";

/**
 * Request message for the CreateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.CreateSkillGroupRequest
 */
export const CreateSkillGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.CreateSkillGroupRequest",
  () => [
    { no: 1, name: "skill_group", kind: "message", T: SkillGroup },
  ],
);

/**
 * Response message for the CreateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.CreateSkillGroupResponse
 */
export const CreateSkillGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.CreateSkillGroupResponse",
  () => [
    { no: 1, name: "skill_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the ListSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsRequest
 */
export const ListSkillGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.ListSkillGroupsRequest",
  () => [
    { no: 1, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the ListSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsResponse
 */
export const ListSkillGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.ListSkillGroupsResponse",
  () => [
    { no: 1, name: "skill_groups", kind: "message", T: SkillGroup, repeated: true },
  ],
);

/**
 * Request message for the UpdateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateSkillGroupRequest
 */
export const UpdateSkillGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.UpdateSkillGroupRequest",
  () => [
    { no: 1, name: "skill_group", kind: "message", T: SkillGroup },
    { no: 2, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the UpdateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateSkillGroupResponse
 */
export const UpdateSkillGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.UpdateSkillGroupResponse",
  [],
);

/**
 * Request message for the GetSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupRequest
 */
export const GetSkillGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetSkillGroupRequest",
  () => [
    { no: 1, name: "skill_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the GetSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupResponse
 */
export const GetSkillGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetSkillGroupResponse",
  () => [
    { no: 1, name: "skill_group", kind: "message", T: SkillGroup },
  ],
);

/**
 * Request message for the DeleteSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.DeleteSkillGroupRequest
 */
export const DeleteSkillGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.DeleteSkillGroupRequest",
  () => [
    { no: 1, name: "skill_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.DeleteSkillGroupResponse
 */
export const DeleteSkillGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.DeleteSkillGroupResponse",
  [],
);

/**
 * Request message for the AssignSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.AssignSkillGroupsRequest
 */
export const AssignSkillGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.AssignSkillGroupsRequest",
  () => [
    { no: 1, name: "skill_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the AssignSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.AssignSkillGroupsResponse
 */
export const AssignSkillGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.AssignSkillGroupsResponse",
  [],
);

/**
 * Request message for the RevokeSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RevokeSkillGroupsRequest
 */
export const RevokeSkillGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.RevokeSkillGroupsRequest",
  () => [
    { no: 1, name: "skill_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the RevokeSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RevokeSkillGroupsResponse
 */
export const RevokeSkillGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.RevokeSkillGroupsResponse",
  [],
);

/**
 * Request message for the GetUserSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillGroupsRequest
 */
export const GetUserSkillGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetUserSkillGroupsRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetUserSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillGroupsResponse
 */
export const GetUserSkillGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetUserSkillGroupsResponse",
  () => [
    { no: 1, name: "skill_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Request message for the GetUserSkills rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillsRequest
 */
export const GetUserSkillsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetUserSkillsRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetUserSkills rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillsResponse
 */
export const GetUserSkillsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetUserSkillsResponse",
  () => [
    { no: 1, name: "skill_sets", kind: "message", T: SkillSet, repeated: true },
  ],
);

/**
 * Request message for the GetSkillGroupMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupMembersRequest
 */
export const GetSkillGroupMembersRequest = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetSkillGroupMembersRequest",
  () => [
    { no: 1, name: "skill_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetSkillGroupMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupMembersResponse
 */
export const GetSkillGroupMembersResponse = proto3.makeMessageType(
  "api.v1alpha1.org.skills.GetSkillGroupMembersResponse",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

