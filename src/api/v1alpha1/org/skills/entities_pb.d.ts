// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/skills/entities.proto (package api.v1alpha1.org.skills, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { SkillGroup, SkillSet } from "../../../commons/org/skill_group_pb.js";

/**
 * Request message for the CreateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.CreateSkillGroupRequest
 */
export declare class CreateSkillGroupRequest extends Message<CreateSkillGroupRequest> {
  /**
   * The skill group object to create. It is expected to have the org id on it
   *
   * @generated from field: api.commons.org.SkillGroup skill_group = 1;
   */
  skillGroup?: SkillGroup;

  constructor(data?: PartialMessage<CreateSkillGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.CreateSkillGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSkillGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSkillGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSkillGroupRequest;

  static equals(a: CreateSkillGroupRequest | PlainMessage<CreateSkillGroupRequest> | undefined, b: CreateSkillGroupRequest | PlainMessage<CreateSkillGroupRequest> | undefined): boolean;
}

/**
 * Response message for the CreateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.CreateSkillGroupResponse
 */
export declare class CreateSkillGroupResponse extends Message<CreateSkillGroupResponse> {
  /**
   * The ID of the created skill group.
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  constructor(data?: PartialMessage<CreateSkillGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.CreateSkillGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSkillGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSkillGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSkillGroupResponse;

  static equals(a: CreateSkillGroupResponse | PlainMessage<CreateSkillGroupResponse> | undefined, b: CreateSkillGroupResponse | PlainMessage<CreateSkillGroupResponse> | undefined): boolean;
}

/**
 * Request message for the ListSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsRequest
 */
export declare class ListSkillGroupsRequest extends Message<ListSkillGroupsRequest> {
  /**
   * Mask to filter fields on skill group entities in response.
   *
   * @generated from field: repeated string field_mask = 1;
   */
  fieldMask: string[];

  constructor(data?: PartialMessage<ListSkillGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillGroupsRequest;

  static equals(a: ListSkillGroupsRequest | PlainMessage<ListSkillGroupsRequest> | undefined, b: ListSkillGroupsRequest | PlainMessage<ListSkillGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the ListSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsResponse
 */
export declare class ListSkillGroupsResponse extends Message<ListSkillGroupsResponse> {
  /**
   * The skill groups in the organization.
   *
   * @generated from field: repeated api.commons.org.SkillGroup skill_groups = 1;
   */
  skillGroups: SkillGroup[];

  constructor(data?: PartialMessage<ListSkillGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillGroupsResponse;

  static equals(a: ListSkillGroupsResponse | PlainMessage<ListSkillGroupsResponse> | undefined, b: ListSkillGroupsResponse | PlainMessage<ListSkillGroupsResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateSkillGroupRequest
 */
export declare class UpdateSkillGroupRequest extends Message<UpdateSkillGroupRequest> {
  /**
   * The desired updated skill group object. It is expected to have the skill group id and org id on it
   *
   * @generated from field: api.commons.org.SkillGroup skill_group = 1;
   */
  skillGroup?: SkillGroup;

  /**
   * Mask to filter fields on skill group to update.
   *
   * @generated from field: repeated string field_mask = 2;
   */
  fieldMask: string[];

  constructor(data?: PartialMessage<UpdateSkillGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.UpdateSkillGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSkillGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSkillGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSkillGroupRequest;

  static equals(a: UpdateSkillGroupRequest | PlainMessage<UpdateSkillGroupRequest> | undefined, b: UpdateSkillGroupRequest | PlainMessage<UpdateSkillGroupRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateSkillGroupResponse
 */
export declare class UpdateSkillGroupResponse extends Message<UpdateSkillGroupResponse> {
  constructor(data?: PartialMessage<UpdateSkillGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.UpdateSkillGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSkillGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSkillGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSkillGroupResponse;

  static equals(a: UpdateSkillGroupResponse | PlainMessage<UpdateSkillGroupResponse> | undefined, b: UpdateSkillGroupResponse | PlainMessage<UpdateSkillGroupResponse> | undefined): boolean;
}

/**
 * Request message for the GetSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupRequest
 */
export declare class GetSkillGroupRequest extends Message<GetSkillGroupRequest> {
  /**
   * The skill group id of the skill group
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  /**
   * Mask to filter fields on skill group entity in response.
   *
   * @generated from field: repeated string field_mask = 2;
   */
  fieldMask: string[];

  constructor(data?: PartialMessage<GetSkillGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetSkillGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkillGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkillGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkillGroupRequest;

  static equals(a: GetSkillGroupRequest | PlainMessage<GetSkillGroupRequest> | undefined, b: GetSkillGroupRequest | PlainMessage<GetSkillGroupRequest> | undefined): boolean;
}

/**
 * Response message for the GetSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupResponse
 */
export declare class GetSkillGroupResponse extends Message<GetSkillGroupResponse> {
  /**
   * The requested skill group.
   *
   * @generated from field: api.commons.org.SkillGroup skill_group = 1;
   */
  skillGroup?: SkillGroup;

  constructor(data?: PartialMessage<GetSkillGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetSkillGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkillGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkillGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkillGroupResponse;

  static equals(a: GetSkillGroupResponse | PlainMessage<GetSkillGroupResponse> | undefined, b: GetSkillGroupResponse | PlainMessage<GetSkillGroupResponse> | undefined): boolean;
}

/**
 * Request message for the DeleteSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.DeleteSkillGroupRequest
 */
export declare class DeleteSkillGroupRequest extends Message<DeleteSkillGroupRequest> {
  /**
   * The skill group id of the skill group to delete.
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  constructor(data?: PartialMessage<DeleteSkillGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.DeleteSkillGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSkillGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSkillGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSkillGroupRequest;

  static equals(a: DeleteSkillGroupRequest | PlainMessage<DeleteSkillGroupRequest> | undefined, b: DeleteSkillGroupRequest | PlainMessage<DeleteSkillGroupRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.DeleteSkillGroupResponse
 */
export declare class DeleteSkillGroupResponse extends Message<DeleteSkillGroupResponse> {
  constructor(data?: PartialMessage<DeleteSkillGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.DeleteSkillGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSkillGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSkillGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSkillGroupResponse;

  static equals(a: DeleteSkillGroupResponse | PlainMessage<DeleteSkillGroupResponse> | undefined, b: DeleteSkillGroupResponse | PlainMessage<DeleteSkillGroupResponse> | undefined): boolean;
}

/**
 * Request message for the AssignSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.AssignSkillGroupsRequest
 */
export declare class AssignSkillGroupsRequest extends Message<AssignSkillGroupsRequest> {
  /**
   * The ids of the skill groups to be assigned.
   *
   * @generated from field: repeated string skill_group_ids = 1;
   */
  skillGroupIds: string[];

  /**
   * The user id of the user.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<AssignSkillGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.AssignSkillGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignSkillGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignSkillGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignSkillGroupsRequest;

  static equals(a: AssignSkillGroupsRequest | PlainMessage<AssignSkillGroupsRequest> | undefined, b: AssignSkillGroupsRequest | PlainMessage<AssignSkillGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the AssignSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.AssignSkillGroupsResponse
 */
export declare class AssignSkillGroupsResponse extends Message<AssignSkillGroupsResponse> {
  constructor(data?: PartialMessage<AssignSkillGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.AssignSkillGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignSkillGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignSkillGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignSkillGroupsResponse;

  static equals(a: AssignSkillGroupsResponse | PlainMessage<AssignSkillGroupsResponse> | undefined, b: AssignSkillGroupsResponse | PlainMessage<AssignSkillGroupsResponse> | undefined): boolean;
}

/**
 * Request message for the RevokeSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RevokeSkillGroupsRequest
 */
export declare class RevokeSkillGroupsRequest extends Message<RevokeSkillGroupsRequest> {
  /**
   * The ids of the skill groups to be revoked.
   *
   * @generated from field: repeated string skill_group_ids = 1;
   */
  skillGroupIds: string[];

  /**
   * The user id of the user.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<RevokeSkillGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.RevokeSkillGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeSkillGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeSkillGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeSkillGroupsRequest;

  static equals(a: RevokeSkillGroupsRequest | PlainMessage<RevokeSkillGroupsRequest> | undefined, b: RevokeSkillGroupsRequest | PlainMessage<RevokeSkillGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the RevokeSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RevokeSkillGroupsResponse
 */
export declare class RevokeSkillGroupsResponse extends Message<RevokeSkillGroupsResponse> {
  constructor(data?: PartialMessage<RevokeSkillGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.RevokeSkillGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RevokeSkillGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RevokeSkillGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RevokeSkillGroupsResponse;

  static equals(a: RevokeSkillGroupsResponse | PlainMessage<RevokeSkillGroupsResponse> | undefined, b: RevokeSkillGroupsResponse | PlainMessage<RevokeSkillGroupsResponse> | undefined): boolean;
}

/**
 * Request message for the GetUserSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillGroupsRequest
 */
export declare class GetUserSkillGroupsRequest extends Message<GetUserSkillGroupsRequest> {
  /**
   * The user id of the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<GetUserSkillGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetUserSkillGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSkillGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSkillGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSkillGroupsRequest;

  static equals(a: GetUserSkillGroupsRequest | PlainMessage<GetUserSkillGroupsRequest> | undefined, b: GetUserSkillGroupsRequest | PlainMessage<GetUserSkillGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the GetUserSkillGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillGroupsResponse
 */
export declare class GetUserSkillGroupsResponse extends Message<GetUserSkillGroupsResponse> {
  /**
   * The skill group ids assigned to the user.
   *
   * @generated from field: repeated string skill_group_ids = 1;
   */
  skillGroupIds: string[];

  constructor(data?: PartialMessage<GetUserSkillGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetUserSkillGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSkillGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSkillGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSkillGroupsResponse;

  static equals(a: GetUserSkillGroupsResponse | PlainMessage<GetUserSkillGroupsResponse> | undefined, b: GetUserSkillGroupsResponse | PlainMessage<GetUserSkillGroupsResponse> | undefined): boolean;
}

/**
 * Request message for the GetUserSkills rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillsRequest
 */
export declare class GetUserSkillsRequest extends Message<GetUserSkillsRequest> {
  /**
   * The user id of the user.
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<GetUserSkillsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetUserSkillsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSkillsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSkillsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSkillsRequest;

  static equals(a: GetUserSkillsRequest | PlainMessage<GetUserSkillsRequest> | undefined, b: GetUserSkillsRequest | PlainMessage<GetUserSkillsRequest> | undefined): boolean;
}

/**
 * Response message for the GetUserSkills rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetUserSkillsResponse
 */
export declare class GetUserSkillsResponse extends Message<GetUserSkillsResponse> {
  /**
   * The skill sets a user has.
   *
   * @generated from field: repeated api.commons.org.SkillSet skill_sets = 1;
   */
  skillSets: SkillSet[];

  constructor(data?: PartialMessage<GetUserSkillsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetUserSkillsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserSkillsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserSkillsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserSkillsResponse;

  static equals(a: GetUserSkillsResponse | PlainMessage<GetUserSkillsResponse> | undefined, b: GetUserSkillsResponse | PlainMessage<GetUserSkillsResponse> | undefined): boolean;
}

/**
 * Request message for the GetSkillGroupMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupMembersRequest
 */
export declare class GetSkillGroupMembersRequest extends Message<GetSkillGroupMembersRequest> {
  /**
   * The skill group id of the skill group.
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  constructor(data?: PartialMessage<GetSkillGroupMembersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetSkillGroupMembersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkillGroupMembersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkillGroupMembersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkillGroupMembersRequest;

  static equals(a: GetSkillGroupMembersRequest | PlainMessage<GetSkillGroupMembersRequest> | undefined, b: GetSkillGroupMembersRequest | PlainMessage<GetSkillGroupMembersRequest> | undefined): boolean;
}

/**
 * Response message for the GetSkillGroupMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.GetSkillGroupMembersResponse
 */
export declare class GetSkillGroupMembersResponse extends Message<GetSkillGroupMembersResponse> {
  /**
   * The users ids which belong to the skill group.
   *
   * @generated from field: repeated string user_ids = 1;
   */
  userIds: string[];

  constructor(data?: PartialMessage<GetSkillGroupMembersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetSkillGroupMembersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkillGroupMembersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkillGroupMembersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkillGroupMembersResponse;

  static equals(a: GetSkillGroupMembersResponse | PlainMessage<GetSkillGroupMembersResponse> | undefined, b: GetSkillGroupMembersResponse | PlainMessage<GetSkillGroupMembersResponse> | undefined): boolean;
}

