// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/p3_permissions.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Permission } from "../../commons/perms_pb.js";
import type { P3PermissionGroup } from "../../commons/org/permissions_pb.js";

/**
 * Request message for the CreateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreateP3PermissionGroupRequest
 */
export declare class CreateP3PermissionGroupRequest extends Message<CreateP3PermissionGroupRequest> {
  /**
   * Display name for this group
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * More detailed description for this group
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * List of permissions associated with this group
   *
   * @generated from field: repeated api.commons.Permission permissions = 3;
   */
  permissions: Permission[];

  constructor(data?: PartialMessage<CreateP3PermissionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateP3PermissionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateP3PermissionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateP3PermissionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateP3PermissionGroupRequest;

  static equals(a: CreateP3PermissionGroupRequest | PlainMessage<CreateP3PermissionGroupRequest> | undefined, b: CreateP3PermissionGroupRequest | PlainMessage<CreateP3PermissionGroupRequest> | undefined): boolean;
}

/**
 * Response message for the CreateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.CreateP3PermissionGroupResponse
 */
export declare class CreateP3PermissionGroupResponse extends Message<CreateP3PermissionGroupResponse> {
  /**
   * The newly created P3PermissionGroup
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  constructor(data?: PartialMessage<CreateP3PermissionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateP3PermissionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateP3PermissionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateP3PermissionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateP3PermissionGroupResponse;

  static equals(a: CreateP3PermissionGroupResponse | PlainMessage<CreateP3PermissionGroupResponse> | undefined, b: CreateP3PermissionGroupResponse | PlainMessage<CreateP3PermissionGroupResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupRequest
 */
export declare class UpdateP3PermissionGroupRequest extends Message<UpdateP3PermissionGroupRequest> {
  /**
   * The Id of the P3PermissionGroup to be updated
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  /**
   * P3 permission group values to update.
   * The mutable fields are: name, description, permissions.
   *
   * @generated from field: api.commons.org.P3PermissionGroup p3_permission_group = 3;
   */
  p3PermissionGroup?: P3PermissionGroup;

  /**
   * Field mask for selecting which fields to update.
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 10;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateP3PermissionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateP3PermissionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateP3PermissionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupRequest;

  static equals(a: UpdateP3PermissionGroupRequest | PlainMessage<UpdateP3PermissionGroupRequest> | undefined, b: UpdateP3PermissionGroupRequest | PlainMessage<UpdateP3PermissionGroupRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupResponse
 */
export declare class UpdateP3PermissionGroupResponse extends Message<UpdateP3PermissionGroupResponse> {
  /**
   * The updated P3PermissionGroup
   *
   * @generated from field: api.commons.org.P3PermissionGroup p3_permission_group = 1;
   */
  p3PermissionGroup?: P3PermissionGroup;

  constructor(data?: PartialMessage<UpdateP3PermissionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateP3PermissionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateP3PermissionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupResponse;

  static equals(a: UpdateP3PermissionGroupResponse | PlainMessage<UpdateP3PermissionGroupResponse> | undefined, b: UpdateP3PermissionGroupResponse | PlainMessage<UpdateP3PermissionGroupResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateP3PermissionGroupByOrgId RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdRequest
 */
export declare class UpdateP3PermissionGroupByOrgIdRequest extends Message<UpdateP3PermissionGroupByOrgIdRequest> {
  /**
   * The Id of the P3PermissionGroup to be updated
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  /**
   * Org Id is the org this group belongs to.
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * P3 permission group values to update.
   * The mutable fields are: name, description, permissions.
   *
   * @generated from field: api.commons.org.P3PermissionGroup p3_permission_group = 3;
   */
  p3PermissionGroup?: P3PermissionGroup;

  /**
   * Field mask for selecting which fields to update.
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 10;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateP3PermissionGroupByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateP3PermissionGroupByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupByOrgIdRequest;

  static equals(a: UpdateP3PermissionGroupByOrgIdRequest | PlainMessage<UpdateP3PermissionGroupByOrgIdRequest> | undefined, b: UpdateP3PermissionGroupByOrgIdRequest | PlainMessage<UpdateP3PermissionGroupByOrgIdRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateP3PermissionGroupByOrgId RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdResponse
 */
export declare class UpdateP3PermissionGroupByOrgIdResponse extends Message<UpdateP3PermissionGroupByOrgIdResponse> {
  /**
   * The updated P3PermissionGroup
   *
   * @generated from field: api.commons.org.P3PermissionGroup p3_permission_group = 1;
   */
  p3PermissionGroup?: P3PermissionGroup;

  constructor(data?: PartialMessage<UpdateP3PermissionGroupByOrgIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateP3PermissionGroupByOrgIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateP3PermissionGroupByOrgIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupByOrgIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateP3PermissionGroupByOrgIdResponse;

  static equals(a: UpdateP3PermissionGroupByOrgIdResponse | PlainMessage<UpdateP3PermissionGroupByOrgIdResponse> | undefined, b: UpdateP3PermissionGroupByOrgIdResponse | PlainMessage<UpdateP3PermissionGroupByOrgIdResponse> | undefined): boolean;
}

/**
 * Request message for the DeleteP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteP3PermissionGroupRequest
 */
export declare class DeleteP3PermissionGroupRequest extends Message<DeleteP3PermissionGroupRequest> {
  /**
   * The Id of the P3PermissionGroup to be deleted
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  constructor(data?: PartialMessage<DeleteP3PermissionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteP3PermissionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteP3PermissionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteP3PermissionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteP3PermissionGroupRequest;

  static equals(a: DeleteP3PermissionGroupRequest | PlainMessage<DeleteP3PermissionGroupRequest> | undefined, b: DeleteP3PermissionGroupRequest | PlainMessage<DeleteP3PermissionGroupRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteP3PermissionGroupResponse
 */
export declare class DeleteP3PermissionGroupResponse extends Message<DeleteP3PermissionGroupResponse> {
  constructor(data?: PartialMessage<DeleteP3PermissionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteP3PermissionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteP3PermissionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteP3PermissionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteP3PermissionGroupResponse;

  static equals(a: DeleteP3PermissionGroupResponse | PlainMessage<DeleteP3PermissionGroupResponse> | undefined, b: DeleteP3PermissionGroupResponse | PlainMessage<DeleteP3PermissionGroupResponse> | undefined): boolean;
}

/**
 * Request message for the AssignUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersP3PermissionGroupRequest
 */
export declare class AssignUsersP3PermissionGroupRequest extends Message<AssignUsersP3PermissionGroupRequest> {
  /**
   * The Id of the P3PermissionGroup to be assigned
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  /**
   * List of users to assign this group to
   *
   * @generated from field: repeated string user_ids = 2;
   */
  userIds: string[];

  constructor(data?: PartialMessage<AssignUsersP3PermissionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignUsersP3PermissionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignUsersP3PermissionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignUsersP3PermissionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignUsersP3PermissionGroupRequest;

  static equals(a: AssignUsersP3PermissionGroupRequest | PlainMessage<AssignUsersP3PermissionGroupRequest> | undefined, b: AssignUsersP3PermissionGroupRequest | PlainMessage<AssignUsersP3PermissionGroupRequest> | undefined): boolean;
}

/**
 * Response message for the AssignUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.AssignUsersP3PermissionGroupResponse
 */
export declare class AssignUsersP3PermissionGroupResponse extends Message<AssignUsersP3PermissionGroupResponse> {
  /**
   * List of users that were assigned the group
   *
   * @generated from field: repeated string user_ids = 1;
   */
  userIds: string[];

  constructor(data?: PartialMessage<AssignUsersP3PermissionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignUsersP3PermissionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignUsersP3PermissionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignUsersP3PermissionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignUsersP3PermissionGroupResponse;

  static equals(a: AssignUsersP3PermissionGroupResponse | PlainMessage<AssignUsersP3PermissionGroupResponse> | undefined, b: AssignUsersP3PermissionGroupResponse | PlainMessage<AssignUsersP3PermissionGroupResponse> | undefined): boolean;
}

/**
 * Request message for the RevokeUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersP3PermissionGroupRequest
 */
export declare class RevokeUsersP3PermissionGroupRequest extends Message<RevokeUsersP3PermissionGroupRequest> {
  /**
   * List of users having P3PermissionGroup revoked
   *
   * @generated from field: repeated string user_ids = 1;
   */
  userIds: string[];

  constructor(data?: PartialMessage<RevokeUsersP3PermissionGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RevokeUsersP3PermissionGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeUsersP3PermissionGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeUsersP3PermissionGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeUsersP3PermissionGroupRequest;

  static equals(a: RevokeUsersP3PermissionGroupRequest | PlainMessage<RevokeUsersP3PermissionGroupRequest> | undefined, b: RevokeUsersP3PermissionGroupRequest | PlainMessage<RevokeUsersP3PermissionGroupRequest> | undefined): boolean;
}

/**
 * Response message for the RevokeUsersP3PermissionGroup RPC.
 *
 * @generated from message api.v1alpha1.org.RevokeUsersP3PermissionGroupResponse
 */
export declare class RevokeUsersP3PermissionGroupResponse extends Message<RevokeUsersP3PermissionGroupResponse> {
  /**
   * List of users that had permissions revoked
   *
   * @generated from field: repeated string user_ids = 1;
   */
  userIds: string[];

  constructor(data?: PartialMessage<RevokeUsersP3PermissionGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RevokeUsersP3PermissionGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeUsersP3PermissionGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeUsersP3PermissionGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeUsersP3PermissionGroupResponse;

  static equals(a: RevokeUsersP3PermissionGroupResponse | PlainMessage<RevokeUsersP3PermissionGroupResponse> | undefined, b: RevokeUsersP3PermissionGroupResponse | PlainMessage<RevokeUsersP3PermissionGroupResponse> | undefined): boolean;
}

/**
 * Request message for the ListP3PermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.ListP3PermissionGroupsRequest
 */
export declare class ListP3PermissionGroupsRequest extends Message<ListP3PermissionGroupsRequest> {
  /**
   * Org's Id to list P3PermissionGroups for.
   * Passing in Org Id requires PERMISSION_CUSTOMER_SUPPORT,
   * otherwise it is taken off the user token and requires PERMISSION_ORG_VIEW.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<ListP3PermissionGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListP3PermissionGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListP3PermissionGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListP3PermissionGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListP3PermissionGroupsRequest;

  static equals(a: ListP3PermissionGroupsRequest | PlainMessage<ListP3PermissionGroupsRequest> | undefined, b: ListP3PermissionGroupsRequest | PlainMessage<ListP3PermissionGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the ListP3PermissionGroups RPC.
 *
 * @generated from message api.v1alpha1.org.ListP3PermissionGroupsResponse
 */
export declare class ListP3PermissionGroupsResponse extends Message<ListP3PermissionGroupsResponse> {
  /**
   * List of P3PermissionGroups for the requested org
   *
   * @generated from field: repeated api.commons.org.P3PermissionGroup p3_permission_groups = 1;
   */
  p3PermissionGroups: P3PermissionGroup[];

  constructor(data?: PartialMessage<ListP3PermissionGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListP3PermissionGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListP3PermissionGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListP3PermissionGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListP3PermissionGroupsResponse;

  static equals(a: ListP3PermissionGroupsResponse | PlainMessage<ListP3PermissionGroupsResponse> | undefined, b: ListP3PermissionGroupsResponse | PlainMessage<ListP3PermissionGroupsResponse> | undefined): boolean;
}

