// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
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
 * Request message for the RemoveSkillFromAllGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RemoveSkillFromAllGroupsRequest
 */
export declare class RemoveSkillFromAllGroupsRequest extends Message<RemoveSkillFromAllGroupsRequest> {
  /**
   * The skill sid of the skill to remove.
   *
   * @generated from field: int64 skill_sid = 1;
   */
  skillSid: bigint;

  constructor(data?: PartialMessage<RemoveSkillFromAllGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.RemoveSkillFromAllGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveSkillFromAllGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveSkillFromAllGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveSkillFromAllGroupsRequest;

  static equals(a: RemoveSkillFromAllGroupsRequest | PlainMessage<RemoveSkillFromAllGroupsRequest> | undefined, b: RemoveSkillFromAllGroupsRequest | PlainMessage<RemoveSkillFromAllGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the RemoveSkillFromAllGroups rpc.
 *
 * @generated from message api.v1alpha1.org.skills.RemoveSkillFromAllGroupsResponse
 */
export declare class RemoveSkillFromAllGroupsResponse extends Message<RemoveSkillFromAllGroupsResponse> {
  constructor(data?: PartialMessage<RemoveSkillFromAllGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.RemoveSkillFromAllGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveSkillFromAllGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveSkillFromAllGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveSkillFromAllGroupsResponse;

  static equals(a: RemoveSkillFromAllGroupsResponse | PlainMessage<RemoveSkillFromAllGroupsResponse> | undefined, b: RemoveSkillFromAllGroupsResponse | PlainMessage<RemoveSkillFromAllGroupsResponse> | undefined): boolean;
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

/**
 * Request message for the ListSkillGroupsMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsMembersRequest
 */
export declare class ListSkillGroupsMembersRequest extends Message<ListSkillGroupsMembersRequest> {
  constructor(data?: PartialMessage<ListSkillGroupsMembersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillGroupsMembersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillGroupsMembersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillGroupsMembersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillGroupsMembersRequest;

  static equals(a: ListSkillGroupsMembersRequest | PlainMessage<ListSkillGroupsMembersRequest> | undefined, b: ListSkillGroupsMembersRequest | PlainMessage<ListSkillGroupsMembersRequest> | undefined): boolean;
}

/**
 * Response message for the ListSkillGroupsMembers rpc.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillGroupsMembersResponse
 */
export declare class ListSkillGroupsMembersResponse extends Message<ListSkillGroupsMembersResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.skills.SkillGroupMembers skill_group_members = 1;
   */
  skillGroupMembers: SkillGroupMembers[];

  constructor(data?: PartialMessage<ListSkillGroupsMembersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillGroupsMembersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillGroupsMembersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillGroupsMembersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillGroupsMembersResponse;

  static equals(a: ListSkillGroupsMembersResponse | PlainMessage<ListSkillGroupsMembersResponse> | undefined, b: ListSkillGroupsMembersResponse | PlainMessage<ListSkillGroupsMembersResponse> | undefined): boolean;
}

/**
 * Submessage for ListSkillGroupsMembersResponse.
 *
 * @generated from message api.v1alpha1.org.skills.SkillGroupMembers
 */
export declare class SkillGroupMembers extends Message<SkillGroupMembers> {
  /**
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  /**
   * @generated from field: repeated string user_ids = 2;
   */
  userIds: string[];

  constructor(data?: PartialMessage<SkillGroupMembers>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.SkillGroupMembers";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillGroupMembers;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillGroupMembers;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillGroupMembers;

  static equals(a: SkillGroupMembers | PlainMessage<SkillGroupMembers> | undefined, b: SkillGroupMembers | PlainMessage<SkillGroupMembers> | undefined): boolean;
}

/**
 * Request message for the UpdateUsersOnSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateUsersOnSkillGroupRequest
 */
export declare class UpdateUsersOnSkillGroupRequest extends Message<UpdateUsersOnSkillGroupRequest> {
  /**
   * ID of the skill group the users are being assigned to.
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  /**
   * IDs of the users being assigned to the skill group.
   *
   * @generated from field: repeated string user_ids = 2;
   */
  userIds: string[];

  constructor(data?: PartialMessage<UpdateUsersOnSkillGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.UpdateUsersOnSkillGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUsersOnSkillGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUsersOnSkillGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUsersOnSkillGroupRequest;

  static equals(a: UpdateUsersOnSkillGroupRequest | PlainMessage<UpdateUsersOnSkillGroupRequest> | undefined, b: UpdateUsersOnSkillGroupRequest | PlainMessage<UpdateUsersOnSkillGroupRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateUsersOnSkillGroup rpc.
 *
 * @generated from message api.v1alpha1.org.skills.UpdateUsersOnSkillGroupResponse
 */
export declare class UpdateUsersOnSkillGroupResponse extends Message<UpdateUsersOnSkillGroupResponse> {
  constructor(data?: PartialMessage<UpdateUsersOnSkillGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.UpdateUsersOnSkillGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateUsersOnSkillGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateUsersOnSkillGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateUsersOnSkillGroupResponse;

  static equals(a: UpdateUsersOnSkillGroupResponse | PlainMessage<UpdateUsersOnSkillGroupResponse> | undefined, b: UpdateUsersOnSkillGroupResponse | PlainMessage<UpdateUsersOnSkillGroupResponse> | undefined): boolean;
}

/**
 * Request message for the ListSkillsForCurrentAgent RPC.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillsForCurrentAgentRequest
 */
export declare class ListSkillsForCurrentAgentRequest extends Message<ListSkillsForCurrentAgentRequest> {
  constructor(data?: PartialMessage<ListSkillsForCurrentAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillsForCurrentAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillsForCurrentAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentRequest;

  static equals(a: ListSkillsForCurrentAgentRequest | PlainMessage<ListSkillsForCurrentAgentRequest> | undefined, b: ListSkillsForCurrentAgentRequest | PlainMessage<ListSkillsForCurrentAgentRequest> | undefined): boolean;
}

/**
 * Response message for the ListSkillsForCurrentAgent RPC.
 *
 * @generated from message api.v1alpha1.org.skills.ListSkillsForCurrentAgentResponse
 */
export declare class ListSkillsForCurrentAgentResponse extends Message<ListSkillsForCurrentAgentResponse> {
  /**
   * The returned list of skills belonging to the current agent.
   *
   * @generated from field: repeated api.v1alpha1.org.skills.ListSkillsForCurrentAgentResponse.AgentSkill skills = 1;
   */
  skills: ListSkillsForCurrentAgentResponse_AgentSkill[];

  constructor(data?: PartialMessage<ListSkillsForCurrentAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillsForCurrentAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillsForCurrentAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentResponse;

  static equals(a: ListSkillsForCurrentAgentResponse | PlainMessage<ListSkillsForCurrentAgentResponse> | undefined, b: ListSkillsForCurrentAgentResponse | PlainMessage<ListSkillsForCurrentAgentResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.skills.ListSkillsForCurrentAgentResponse.AgentSkill
 */
export declare class ListSkillsForCurrentAgentResponse_AgentSkill extends Message<ListSkillsForCurrentAgentResponse_AgentSkill> {
  /**
   * @generated from field: int64 agent_skill_sid = 1;
   */
  agentSkillSid: bigint;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  constructor(data?: PartialMessage<ListSkillsForCurrentAgentResponse_AgentSkill>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.ListSkillsForCurrentAgentResponse.AgentSkill";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSkillsForCurrentAgentResponse_AgentSkill;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentResponse_AgentSkill;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSkillsForCurrentAgentResponse_AgentSkill;

  static equals(a: ListSkillsForCurrentAgentResponse_AgentSkill | PlainMessage<ListSkillsForCurrentAgentResponse_AgentSkill> | undefined, b: ListSkillsForCurrentAgentResponse_AgentSkill | PlainMessage<ListSkillsForCurrentAgentResponse_AgentSkill> | undefined): boolean;
}

/**
 * Response message for the GetAgentSkills RPC.
 *
 * @generated from message api.v1alpha1.org.skills.GetAgentSkillsRequest
 */
export declare class GetAgentSkillsRequest extends Message<GetAgentSkillsRequest> {
  /**
   * id of the hunt group that will be used to get the hunt group skills (including PBX skills).
   *
   * @generated from field: int64 hunt_group_sid = 1;
   */
  huntGroupSid: bigint;

  constructor(data?: PartialMessage<GetAgentSkillsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetAgentSkillsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAgentSkillsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAgentSkillsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAgentSkillsRequest;

  static equals(a: GetAgentSkillsRequest | PlainMessage<GetAgentSkillsRequest> | undefined, b: GetAgentSkillsRequest | PlainMessage<GetAgentSkillsRequest> | undefined): boolean;
}

/**
 * Response message for the GetAgentSkills RPC.
 *
 * @generated from message api.v1alpha1.org.skills.GetAgentSkillsResponse
 */
export declare class GetAgentSkillsResponse extends Message<GetAgentSkillsResponse> {
  /**
   * skills found for the given parameters, will be value pairs (name, level).
   *
   * @generated from field: map<string, int64> skills = 1;
   */
  skills: { [key: string]: bigint };

  constructor(data?: PartialMessage<GetAgentSkillsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.skills.GetAgentSkillsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAgentSkillsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAgentSkillsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAgentSkillsResponse;

  static equals(a: GetAgentSkillsResponse | PlainMessage<GetAgentSkillsResponse> | undefined, b: GetAgentSkillsResponse | PlainMessage<GetAgentSkillsResponse> | undefined): boolean;
}

