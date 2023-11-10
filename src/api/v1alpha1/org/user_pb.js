// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/user.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue, Timestamp } from "@bufbuild/protobuf";
import { OperatorApplications, TimeZoneWrapper } from "../../commons/org_pb.js";
import { Label } from "../../commons/org/labels_pb.js";
import { Skill } from "../../commons/org/user_pb.js";
import { P3PermissionGroup, PermissionGroup } from "../../commons/org/permissions_pb.js";
import { Trust } from "../../commons/org/trusts_pb.js";
import { UserArchivedStateFilter } from "../../commons/user_pb.js";
import { Permission } from "../../commons/perms_pb.js";

/**
 * Request message for the CreateUser rpc.
 *
 * @generated from message api.v1alpha1.org.CreateUserRequest
 */
export const CreateUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateUserRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 13, name: "default_app", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 14, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "label_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 17, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 18, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the CreateUser rpc.
 *
 * @generated from message api.v1alpha1.org.CreateUserResponse
 */
export const CreateUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the CreateDelegatedUser rpc.
 *
 * @generated from message api.v1alpha1.org.CreateDelegatedUserRequest
 */
export const CreateDelegatedUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateDelegatedUserRequest",
  () => [
    { no: 1, name: "auth_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "groups", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the CreateDelegatedUser rpc.
 *
 * @generated from message api.v1alpha1.org.CreateDelegatedUserResponse
 */
export const CreateDelegatedUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateDelegatedUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for GetMyUser.
 *
 * @generated from message api.v1alpha1.org.GetMyUserRequest
 */
export const GetMyUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserRequest",
  [],
);

/**
 * Response message for GetMyUser.
 *
 * @generated from message api.v1alpha1.org.GetMyUserResponse
 */
export const GetMyUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delegated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "hunt_group", kind: "message", T: GetMyUserResponse_HuntGroup },
    { no: 6, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 7, name: "skills", kind: "message", T: Skill, repeated: true },
    { no: 8, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
    { no: 9, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
    { no: 10, name: "agent_profile_group", kind: "message", T: GetMyUserResponse_AgentProfileGroup },
    { no: 11, name: "trusts", kind: "message", T: Trust, repeated: true },
    { no: 12, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Object to contain the hunt group fields
 *
 * @generated from message api.v1alpha1.org.GetMyUserResponse.HuntGroup
 */
export const GetMyUserResponse_HuntGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserResponse.HuntGroup",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetMyUserResponse_HuntGroup"},
);

/**
 * Object to contain the agent profile group fields
 *
 * @generated from message api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup
 */
export const GetMyUserResponse_AgentProfileGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserResponse.AgentProfileGroup",
  () => [
    { no: 1, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetMyUserResponse_AgentProfileGroup"},
);

/**
 * Request message for GetUser.
 *
 * @generated from message api.v1alpha1.org.GetUserRequest
 */
export const GetUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for GetUser.
 *
 * @generated from message api.v1alpha1.org.GetUserResponse
 */
export const GetUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delegated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 5, name: "hunt_group", kind: "message", T: GetUserResponse_HuntGroup },
    { no: 6, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 7, name: "skills", kind: "message", T: Skill, repeated: true },
    { no: 8, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
    { no: 9, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
    { no: 10, name: "agent_profile_group", kind: "message", T: GetUserResponse_AgentProfileGroup },
    { no: 11, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 16, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 19, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "default_app", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 21, name: "login_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 22, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 23, name: "trusts", kind: "message", T: Trust, repeated: true },
    { no: 24, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 25, name: "default_region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "created_at", kind: "message", T: Timestamp },
    { no: 27, name: "last_updated", kind: "message", T: Timestamp },
    { no: 28, name: "password_reset_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 29, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Object to contain the hunt group fields
 *
 * @generated from message api.v1alpha1.org.GetUserResponse.HuntGroup
 */
export const GetUserResponse_HuntGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserResponse.HuntGroup",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetUserResponse_HuntGroup"},
);

/**
 * Object to contain the agent profile group fields
 *
 * @generated from message api.v1alpha1.org.GetUserResponse.AgentProfileGroup
 */
export const GetUserResponse_AgentProfileGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserResponse.AgentProfileGroup",
  () => [
    { no: 1, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetUserResponse_AgentProfileGroup"},
);

/**
 * Request message for GetUserByOrgId.
 *
 * @generated from message api.v1alpha1.org.GetUserByOrgIdRequest
 */
export const GetUserByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserByOrgIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for GetUserByOrgId.
 *
 * @generated from message api.v1alpha1.org.GetUserByOrgIdResponse
 */
export const GetUserByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserByOrgIdResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "delegated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "hunt_group", kind: "message", T: GetUserByOrgIdResponse_HuntGroup },
    { no: 6, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 7, name: "skills", kind: "message", T: Skill, repeated: true },
    { no: 8, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
    { no: 9, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
    { no: 10, name: "agent_profile_group", kind: "message", T: GetUserByOrgIdResponse_AgentProfileGroup },
    { no: 21, name: "trusts", kind: "message", T: Trust, repeated: true },
    { no: 22, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Object to contain the hunt group fields
 *
 * @generated from message api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup
 */
export const GetUserByOrgIdResponse_HuntGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserByOrgIdResponse.HuntGroup",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetUserByOrgIdResponse_HuntGroup"},
);

/**
 * Object to contain the agent profile group fields
 *
 * @generated from message api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup
 */
export const GetUserByOrgIdResponse_AgentProfileGroup = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserByOrgIdResponse.AgentProfileGroup",
  () => [
    { no: 1, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "GetUserByOrgIdResponse_AgentProfileGroup"},
);

/**
 * Request message for listAgents rpc.
 *
 * @generated from message api.v1alpha1.org.ListAgentsRequest
 */
export const ListAgentsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentsRequest",
  [],
);

/**
 * Response message for listAgents rpc.
 *
 * @generated from message api.v1alpha1.org.ListAgentsResponse
 */
export const ListAgentsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentsResponse",
  () => [
    { no: 1, name: "agents", kind: "message", T: ListAgentsResponse_AgentDetails, repeated: true },
  ],
);

/**
 * Object for ListAgents to return a list of.
 *
 * @generated from message api.v1alpha1.org.ListAgentsResponse.AgentDetails
 */
export const ListAgentsResponse_AgentDetails = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentsResponse.AgentDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "skills", kind: "message", T: Skill, repeated: true },
    { no: 7, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "hunt_group", kind: "message", T: ListAgentsResponse_AgentDetails_HuntGroup },
    { no: 9, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 10, name: "delegated", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 12, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
    { no: 13, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "created", kind: "message", T: Timestamp },
    { no: 18, name: "last_updated", kind: "message", T: Timestamp },
    { no: 19, name: "agent_profile_group", kind: "message", T: ListAgentsResponse_AgentDetails_AgentProfileGroup },
    { no: 20, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 22, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListAgentsResponse_AgentDetails"},
);

/**
 * Object to contain the hunt group fields
 *
 * @generated from message api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup
 */
export const ListAgentsResponse_AgentDetails_HuntGroup = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentsResponse.AgentDetails.HuntGroup",
  () => [
    { no: 1, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hunt_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListAgentsResponse_AgentDetails_HuntGroup"},
);

/**
 * Object to contain the agent profile group fields
 *
 * @generated from message api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup
 */
export const ListAgentsResponse_AgentDetails_AgentProfileGroup = proto3.makeMessageType(
  "api.v1alpha1.org.ListAgentsResponse.AgentDetails.AgentProfileGroup",
  () => [
    { no: 1, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent_profile_group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListAgentsResponse_AgentDetails_AgentProfileGroup"},
);

/**
 * Request message for listUsers rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersRequest
 */
export const ListUsersRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersRequest",
  [],
);

/**
 * Response message for listUsers rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersResponse
 */
export const ListUsersResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: ListUsersResponse_UserDetails, repeated: true },
  ],
);

/**
 * Object for ListUsers to return a list of.
 *
 * @generated from message api.v1alpha1.org.ListUsersResponse.UserDetails
 */
export const ListUsersResponse_UserDetails = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersResponse.UserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 11, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "ListUsersResponse_UserDetails"},
);

/**
 * Request message for the ListUsersByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersByOrgIdRequest
 */
export const ListUsersByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByOrgIdRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "archived_filter", kind: "enum", T: proto3.getEnumType(UserArchivedStateFilter) },
  ],
);

/**
 * Response message for the ListsUsersByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersByOrgIdResponse
 */
export const ListUsersByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByOrgIdResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: ListUsersByOrgIdResponse_UserDetails, repeated: true },
  ],
);

/**
 * Object for ListUsersByOrgId to return a list of.
 *
 * @generated from message api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails
 */
export const ListUsersByOrgIdResponse_UserDetails = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByOrgIdResponse.UserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 9, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 10, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "ListUsersByOrgIdResponse_UserDetails"},
);

/**
 * Request message for the ListUsersByRegion rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersByRegionRequest
 */
export const ListUsersByRegionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByRegionRequest",
  () => [
    { no: 1, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "archived_filter", kind: "enum", T: proto3.getEnumType(UserArchivedStateFilter) },
  ],
);

/**
 * Response message for the ListsUserByRegion rpc.
 *
 * @generated from message api.v1alpha1.org.ListUsersByRegionResponse
 */
export const ListUsersByRegionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByRegionResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: ListUsersByRegionResponse_UserDetails, repeated: true },
  ],
);

/**
 * Object for ListUsersByRegion to return a list of.
 *
 * @generated from message api.v1alpha1.org.ListUsersByRegionResponse.UserDetails
 */
export const ListUsersByRegionResponse_UserDetails = proto3.makeMessageType(
  "api.v1alpha1.org.ListUsersByRegionResponse.UserDetails",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 11, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "ListUsersByRegionResponse_UserDetails"},
);

/**
 * Request message for the UpdateMyUser rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateMyUserRequest
 */
export const UpdateMyUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateMyUserRequest",
  () => [
    { no: 1, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 4, name: "default_app", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 10, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the UpdateMyUser rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateMyUserResponse
 */
export const UpdateMyUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateMyUserResponse",
  [],
);

/**
 * Request message for the UpdateUser rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserRequest
 */
export const UpdateUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 6, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "default_app", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 9, name: "password_reset_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "label_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the UpdateUser rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserResponse
 */
export const UpdateUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserResponse",
  [],
);

/**
 * Request message for the UpdateUserLabels rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserLabelsRequest
 */
export const UpdateUserLabelsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserLabelsRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "label_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the UpdateUserLabels rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserLabelsResponse
 */
export const UpdateUserLabelsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserLabelsResponse",
  [],
);

/**
 * Request message for the UpdateUserCallerId rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserCallerIdRequest
 */
export const UpdateUserCallerIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserCallerIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the UpdateUserCallerId rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserCallerIdResponse
 */
export const UpdateUserCallerIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserCallerIdResponse",
  [],
);

/**
 * Request message for the UpdateUserDisabled rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserDisabledRequest
 */
export const UpdateUserDisabledRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserDisabledRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Response message for the UpdateUserDisabled rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserDisabledResponse
 */
export const UpdateUserDisabledResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserDisabledResponse",
  [],
);

/**
 * Request message for the UpdateUserDisabledByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest
 */
export const UpdateUserDisabledByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserDisabledByOrgIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Response message for the UpdateUserDisabledByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse
 */
export const UpdateUserDisabledByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateUserDisabledByOrgIdResponse",
  [],
);

/**
 * Request message for the GetMyUserPasswordResetLink rpc.
 *
 * @generated from message api.v1alpha1.org.GetMyUserPasswordResetLinkRequest
 */
export const GetMyUserPasswordResetLinkRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserPasswordResetLinkRequest",
  () => [
    { no: 1, name: "ttl", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the GetMyUserPasswordResetLink rpc.
 *
 * @generated from message api.v1alpha1.org.GetMyUserPasswordResetLinkResponse
 */
export const GetMyUserPasswordResetLinkResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetMyUserPasswordResetLinkResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the GetUserPasswordResetLink rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserPasswordResetLinkRequest
 */
export const GetUserPasswordResetLinkRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPasswordResetLinkRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "ttl", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the GetUserPasswordResetLink rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserPasswordResetLinkResponse
 */
export const GetUserPasswordResetLinkResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPasswordResetLinkResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the GetUserPasswordResetLinkByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest
 */
export const GetUserPasswordResetLinkByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ttl", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for the GetUserPasswordResetLinkByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse
 */
export const GetUserPasswordResetLinkByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPasswordResetLinkByOrgIdResponse",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * This rpc used to be called GetUserBlocked
 * Request message for the GetUserLoginInfo rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserLoginInfoRequest
 */
export const GetUserLoginInfoRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserLoginInfoRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetUserLoginInfo rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserLoginInfoResponse
 */
export const GetUserLoginInfoResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserLoginInfoResponse",
  () => [
    { no: 1, name: "blocked", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "last_ip", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_login", kind: "message", T: Timestamp },
    { no: 4, name: "last_password_reset", kind: "message", T: Timestamp },
    { no: 5, name: "logins_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
    { no: 7, name: "updated_at", kind: "message", T: Timestamp },
    { no: 8, name: "has_blocked_ips", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for the GetUserEmailVerified rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserEmailVerifiedRequest
 */
export const GetUserEmailVerifiedRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserEmailVerifiedRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetUserEmailVerified rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserEmailVerifiedResponse
 */
export const GetUserEmailVerifiedResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserEmailVerifiedResponse",
  () => [
    { no: 1, name: "email_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for the GetUserEmailVerifiedByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest
 */
export const GetUserEmailVerifiedByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserEmailVerifiedByOrgIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetUserEmailVerifiedByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse
 */
export const GetUserEmailVerifiedByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserEmailVerifiedByOrgIdResponse",
  () => [
    { no: 1, name: "email_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for the SendUserEmailVerification rpc.
 *
 * @generated from message api.v1alpha1.org.SendUserEmailVerificationRequest
 */
export const SendUserEmailVerificationRequest = proto3.makeMessageType(
  "api.v1alpha1.org.SendUserEmailVerificationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the SendUserEmailVerification rpc.
 *
 * @generated from message api.v1alpha1.org.SendUserEmailVerificationResponse
 */
export const SendUserEmailVerificationResponse = proto3.makeMessageType(
  "api.v1alpha1.org.SendUserEmailVerificationResponse",
  [],
);

/**
 * Request message for the SendUserEmailVerificationByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest
 */
export const SendUserEmailVerificationByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.SendUserEmailVerificationByOrgIdRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the SendUserEmailVerificationByOrgId rpc.
 *
 * @generated from message api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse
 */
export const SendUserEmailVerificationByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.SendUserEmailVerificationByOrgIdResponse",
  [],
);

/**
 * Request message for the GetUserSessionData rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserSessionDataRequest
 */
export const GetUserSessionDataRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSessionDataRequest",
  [],
);

/**
 * Response message for the GetUserSessionData rpc.
 *
 * @generated from message api.v1alpha1.org.GetUserSessionDataResponse
 */
export const GetUserSessionDataResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSessionDataResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: GetUserSessionDataResponse_User },
    { no: 2, name: "org_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "p3_permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 4, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
    { no: 5, name: "labels", kind: "message", T: Label, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.GetUserSessionDataResponse.User
 */
export const GetUserSessionDataResponse_User = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSessionDataResponse.User",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "region_sid_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: GetUserSessionDataResponse_User_RegionSids} },
    { no: 11, name: "default_region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 15, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 16, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 17, name: "auth_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "enable_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "created", kind: "message", T: Timestamp },
    { no: 22, name: "last_updated", kind: "message", T: Timestamp },
    { no: 23, name: "password_reset_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "connection_id", kind: "message", T: StringValue },
    { no: 25, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 26, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 27, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 28, name: "default_application", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 29, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 30, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 31, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 32, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "GetUserSessionDataResponse_User"},
);

/**
 * The entity object used in the region_sid_map.
 *
 * @generated from message api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids
 */
export const GetUserSessionDataResponse_User_RegionSids = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserSessionDataResponse.User.RegionSids",
  () => [
    { no: 1, name: "login_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "GetUserSessionDataResponse_User_RegionSids"},
);

