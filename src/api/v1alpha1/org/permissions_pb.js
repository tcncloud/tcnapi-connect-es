// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/permissions.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Permission } from "../../commons/auth/perms_pb.js";
import { Permission as Permission$1 } from "../../commons/perms_pb.js";
import { User } from "../../commons/org/user_pb.js";
import { OperatorApplications } from "../../commons/org_pb.js";
import { Label } from "../../commons/org/labels_pb.js";
import { License, PermissionGroup } from "../../commons/org/permissions_pb.js";

/**
 * Request message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.GetPermissionsRequest
 */
export const GetPermissionsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetPermissionsRequest",
  [],
);

/**
 * Response message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.GetPermissionsResponse
 */
export const GetPermissionsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetPermissionsResponse",
  () => [
    { no: 1, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 2, name: "p3_permissions", kind: "enum", T: proto3.getEnumType(Permission$1), repeated: true },
    { no: 3, name: "user", kind: "message", T: User },
    { no: 4, name: "default_app", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
  ],
);

/**
 * Request message for the GetUserPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.GetUserPermissionsRequest
 */
export const GetUserPermissionsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPermissionsRequest",
  [],
);

/**
 * Response message for the GetUserPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.GetUserPermissionsResponse
 */
export const GetUserPermissionsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetUserPermissionsResponse",
  () => [
    { no: 1, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 2, name: "labels", kind: "message", T: Label, repeated: true },
  ],
);

/**
 * Request message for the CreatePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreatePermissionGroupRequest
 */
export const CreatePermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreatePermissionGroupRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
  ],
);

/**
 * Response message for the CreatePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreatePermissionGroupResponse
 */
export const CreatePermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreatePermissionGroupResponse",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the UpdatePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdatePermissionGroupRequest
 */
export const UpdatePermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdatePermissionGroupRequest",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
  ],
);

/**
 * Response message for the UpdatePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdatePermissionGroupResponse
 */
export const UpdatePermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdatePermissionGroupResponse",
  () => [
    { no: 1, name: "permission_group", kind: "message", T: PermissionGroup },
  ],
);

/**
 * Request message for the DeletePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeletePermissionGroupRequest
 */
export const DeletePermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.DeletePermissionGroupRequest",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeletePermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeletePermissionGroupResponse
 */
export const DeletePermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeletePermissionGroupResponse",
  [],
);

/**
 * Request message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.ListPermissionGroupsRequest
 */
export const ListPermissionGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListPermissionGroupsRequest",
  [],
);

/**
 * Response message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.ListPermissionGroupsResponse
 */
export const ListPermissionGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListPermissionGroupsResponse",
  () => [
    { no: 1, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
  ],
);

/**
 * Request message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.ListPermissionGroupsByOrgIdRequest
 */
export const ListPermissionGroupsByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListPermissionGroupsByOrgIdRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetPermissions RPC.
 *
 * @generated from message api.v1alpha1.org.ListPermissionGroupsByOrgIdResponse
 */
export const ListPermissionGroupsByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListPermissionGroupsByOrgIdResponse",
  () => [
    { no: 1, name: "permission_groups", kind: "message", T: PermissionGroup, repeated: true },
  ],
);

/**
 * Request message for the AssignUsersPermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersPermissionGroupRequest
 */
export const AssignUsersPermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignUsersPermissionGroupRequest",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "assign_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the AssignUsersPermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersPermissionGroupResponse
 */
export const AssignUsersPermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignUsersPermissionGroupResponse",
  [],
);

/**
 * Request message for the RevokeUsersPermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersPermissionGroupRequest
 */
export const RevokeUsersPermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeUsersPermissionGroupRequest",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "revoke_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the RevokeUsersPermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersPermissionGroupResponse
 */
export const RevokeUsersPermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeUsersPermissionGroupResponse",
  [],
);

/**
 * Request message for the AssignAccountOwnerPermissionToUser RPC.
 *
 * @generated from message api.v1alpha1.org.AssignAccountOwnerPermissionToUserRequest
 */
export const AssignAccountOwnerPermissionToUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignAccountOwnerPermissionToUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the AssignAccountOwnerPermissionToUser RPC.
 *
 * @generated from message api.v1alpha1.org.AssignAccountOwnerPermissionToUserResponse
 */
export const AssignAccountOwnerPermissionToUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignAccountOwnerPermissionToUserResponse",
  [],
);

/**
 * Request message for the RevokeAccountOwnerPermissionFromUser RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeAccountOwnerPermissionFromUserRequest
 */
export const RevokeAccountOwnerPermissionFromUserRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeAccountOwnerPermissionFromUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the RevokeAccountOwnerPermissionFromUser RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeAccountOwnerPermissionFromUserResponse
 */
export const RevokeAccountOwnerPermissionFromUserResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeAccountOwnerPermissionFromUserResponse",
  [],
);

/**
 * Request message for the InitDefaultPermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.InitDefaultPermissionGroupsRequest
 */
export const InitDefaultPermissionGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.InitDefaultPermissionGroupsRequest",
  [],
);

/**
 * Response message for the InitDefaultPermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.InitDefaultPermissionGroupsResponse
 */
export const InitDefaultPermissionGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.InitDefaultPermissionGroupsResponse",
  () => [
    { no: 1, name: "default_permission_groups", kind: "message", T: PermissionGroup, repeated: true },
  ],
);

/**
 * Request message for the GetAccountOwnerGroup RPC.
 *
 * @generated from message api.v1alpha1.org.GetAccountOwnerGroupRequest
 */
export const GetAccountOwnerGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetAccountOwnerGroupRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetAccountOwnerGroup RPC.
 *
 * @generated from message api.v1alpha1.org.GetAccountOwnerGroupResponse
 */
export const GetAccountOwnerGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetAccountOwnerGroupResponse",
  () => [
    { no: 1, name: "permission_group", kind: "message", T: PermissionGroup },
  ],
);

/**
 * Request message for the GetLicenses RPC.
 *
 * @generated from message api.v1alpha1.org.GetLicensesRequest
 */
export const GetLicensesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetLicensesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetLicenses RPC.
 *
 * @generated from message api.v1alpha1.org.GetLicensesResponse
 */
export const GetLicensesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetLicensesResponse",
  () => [
    { no: 1, name: "licenses", kind: "message", T: License, repeated: true },
  ],
);

/**
 * Request message for the GetOrgLicenses RPC.
 *
 * This request does not expect an org id
 * since it will be retrieved from the token.
 *
 * @generated from message api.v1alpha1.org.GetOrgLicensesRequest
 */
export const GetOrgLicensesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetOrgLicensesRequest",
  [],
);

/**
 * Response message for the GetOrgLicenses RPC.
 *
 * @generated from message api.v1alpha1.org.GetOrgLicensesResponse
 */
export const GetOrgLicensesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetOrgLicensesResponse",
  () => [
    { no: 1, name: "licenses", kind: "message", T: License, repeated: true },
  ],
);

/**
 * Request message for the UpdateLicenses RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLicensesRequest
 */
export const UpdateLicensesRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateLicensesRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "added_licenses", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 3, name: "revoked_licenses", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
  ],
);

/**
 * Response message for the UpdateLicenses RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLicensesResponse
 */
export const UpdateLicensesResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateLicensesResponse",
  [],
);

/**
 * Request message for the RemovePermissionFromAllPermissionGroupsRequest RPC.
 *
 * @generated from message api.v1alpha1.org.RemovePermissionFromAllPermissionGroupsRequest
 */
export const RemovePermissionFromAllPermissionGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RemovePermissionFromAllPermissionGroupsRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "permission", kind: "enum", T: proto3.getEnumType(Permission) },
  ],
);

/**
 * Response message for the RemovePermissionFromAllPermissionGroupsRequest RPC.
 *
 * @generated from message api.v1alpha1.org.RemovePermissionFromAllPermissionGroupsResponse
 */
export const RemovePermissionFromAllPermissionGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RemovePermissionFromAllPermissionGroupsResponse",
  [],
);

