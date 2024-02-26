// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/p3_permissions.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Permission } from "../../commons/perms_pb.js";
import { P3PermissionGroup } from "../../commons/org/permissions_pb.js";

/**
 * Request message for the CreateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreateP3PermissionGroupRequest
 */
export const CreateP3PermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateP3PermissionGroupRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
  ],
);

/**
 * Response message for the CreateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreateP3PermissionGroupResponse
 */
export const CreateP3PermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateP3PermissionGroupResponse",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the UpdateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupRequest
 */
export const UpdateP3PermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateP3PermissionGroupRequest",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response message for the UpdateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupResponse
 */
export const UpdateP3PermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateP3PermissionGroupResponse",
  () => [
    { no: 1, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
  ],
);

/**
 * Request message for the UpdateP3PermissionGroupByOrgId RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdRequest
 */
export const UpdateP3PermissionGroupByOrgIdRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdRequest",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
    { no: 10, name: "field_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * Response message for the UpdateP3PermissionGroupByOrgId RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdResponse
 */
export const UpdateP3PermissionGroupByOrgIdResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdResponse",
  () => [
    { no: 1, name: "p3_permission_group", kind: "message", T: P3PermissionGroup },
  ],
);

/**
 * Request message for the DeleteP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteP3PermissionGroupRequest
 */
export const DeleteP3PermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteP3PermissionGroupRequest",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteP3PermissionGroupResponse
 */
export const DeleteP3PermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteP3PermissionGroupResponse",
  [],
);

/**
 * Request message for the AssignUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersP3PermissionGroupRequest
 */
export const AssignUsersP3PermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignUsersP3PermissionGroupRequest",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the AssignUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersP3PermissionGroupResponse
 */
export const AssignUsersP3PermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignUsersP3PermissionGroupResponse",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Request message for the RevokeUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersP3PermissionGroupRequest
 */
export const RevokeUsersP3PermissionGroupRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeUsersP3PermissionGroupRequest",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the RevokeUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersP3PermissionGroupResponse
 */
export const RevokeUsersP3PermissionGroupResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RevokeUsersP3PermissionGroupResponse",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Request message for the ListP3PermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.ListP3PermissionGroupsRequest
 */
export const ListP3PermissionGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListP3PermissionGroupsRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the ListP3PermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.ListP3PermissionGroupsResponse
 */
export const ListP3PermissionGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListP3PermissionGroupsResponse",
  () => [
    { no: 1, name: "p3_permission_groups", kind: "message", T: P3PermissionGroup, repeated: true },
  ],
);

