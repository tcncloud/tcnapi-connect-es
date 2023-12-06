// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file services/pbx/v1/service.proto (package services.pbx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * -------------------------
 * Enums
 * -------------------------
 *
 * @generated from enum services.pbx.v1.RingStrategy
 */
export declare enum RingStrategy {
  /**
   * @generated from enum value: RING_STRATEGY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: RING_STRATEGY_RING_ALL = 1;
   */
  RING_ALL = 1,

  /**
   * @generated from enum value: RING_STRATEGY_ROUND_ROBIN = 2;
   */
  ROUND_ROBIN = 2,

  /**
   * @generated from enum value: RING_STRATEGY_RANDOM = 3;
   */
  RANDOM = 3,
}

/**
 * -------------------------
 * Entity Definitions
 * -------------------------
 *
 * @generated from message services.pbx.v1.PBXUser
 */
export declare class PBXUser extends Message<PBXUser> {
  /**
   * @generated from field: string pbx_user_id = 1;
   */
  pbxUserId: string;

  /**
   * @generated from field: string org_user_id = 2;
   */
  orgUserId: string;

  /**
   * @generated from field: repeated services.pbx.v1.SIPAccount sip_accounts = 3;
   */
  sipAccounts: SIPAccount[];

  constructor(data?: PartialMessage<PBXUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.PBXUser";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PBXUser;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PBXUser;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PBXUser;

  static equals(a: PBXUser | PlainMessage<PBXUser> | undefined, b: PBXUser | PlainMessage<PBXUser> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.SIPAccount
 */
export declare class SIPAccount extends Message<SIPAccount> {
  /**
   * @generated from field: string sip_id = 1;
   */
  sipId: string;

  /**
   * @generated from field: bool is_active = 2;
   */
  isActive: boolean;

  /**
   * @generated from field: int32 extension = 3;
   */
  extension: number;

  /**
   * @generated from field: repeated services.pbx.v1.RingGroup ring_groups = 4;
   */
  ringGroups: RingGroup[];

  constructor(data?: PartialMessage<SIPAccount>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.SIPAccount";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SIPAccount;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SIPAccount;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SIPAccount;

  static equals(a: SIPAccount | PlainMessage<SIPAccount> | undefined, b: SIPAccount | PlainMessage<SIPAccount> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.RingGroup
 */
export declare class RingGroup extends Message<RingGroup> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: int32 extension = 4;
   */
  extension: number;

  /**
   * @generated from field: services.pbx.v1.RingStrategy ring_strategy = 5;
   */
  ringStrategy: RingStrategy;

  /**
   * @generated from field: repeated services.pbx.v1.PBXUser pbx_users = 6;
   */
  pbxUsers: PBXUser[];

  constructor(data?: PartialMessage<RingGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.RingGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RingGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RingGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RingGroup;

  static equals(a: RingGroup | PlainMessage<RingGroup> | undefined, b: RingGroup | PlainMessage<RingGroup> | undefined): boolean;
}

/**
 * -------------------------
 *  RPC Messages
 * -------------------------
 *
 * @generated from message services.pbx.v1.QueryPbxUsersRequest
 */
export declare class QueryPbxUsersRequest extends Message<QueryPbxUsersRequest> {
  /**
   * Optional: If you want to fetch a specific user by ID.
   *
   * @generated from field: string pbx_user_id = 1;
   */
  pbxUserId: string;

  /**
   * Fields to be returned in the response.
   *
   * @generated from field: google.protobuf.FieldMask response_mask = 2;
   */
  responseMask?: FieldMask;

  constructor(data?: PartialMessage<QueryPbxUsersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.QueryPbxUsersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPbxUsersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPbxUsersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPbxUsersRequest;

  static equals(a: QueryPbxUsersRequest | PlainMessage<QueryPbxUsersRequest> | undefined, b: QueryPbxUsersRequest | PlainMessage<QueryPbxUsersRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.QueryPbxUsersResponse
 */
export declare class QueryPbxUsersResponse extends Message<QueryPbxUsersResponse> {
  /**
   * @generated from field: repeated services.pbx.v1.PBXUser users = 1;
   */
  users: PBXUser[];

  constructor(data?: PartialMessage<QueryPbxUsersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.QueryPbxUsersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPbxUsersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPbxUsersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPbxUsersResponse;

  static equals(a: QueryPbxUsersResponse | PlainMessage<QueryPbxUsersResponse> | undefined, b: QueryPbxUsersResponse | PlainMessage<QueryPbxUsersResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.QueryRingGroupsRequest
 */
export declare class QueryRingGroupsRequest extends Message<QueryRingGroupsRequest> {
  /**
   * Optional: If you want to fetch a specific group by ID.
   *
   * @generated from field: string group_id = 1;
   */
  groupId: string;

  /**
   * Fields to be returned in the response.
   *
   * @generated from field: google.protobuf.FieldMask response_mask = 2;
   */
  responseMask?: FieldMask;

  constructor(data?: PartialMessage<QueryRingGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.QueryRingGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRingGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRingGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRingGroupsRequest;

  static equals(a: QueryRingGroupsRequest | PlainMessage<QueryRingGroupsRequest> | undefined, b: QueryRingGroupsRequest | PlainMessage<QueryRingGroupsRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.QueryRingGroupsResponse
 */
export declare class QueryRingGroupsResponse extends Message<QueryRingGroupsResponse> {
  /**
   * @generated from field: repeated services.pbx.v1.RingGroup groups = 1;
   */
  groups: RingGroup[];

  constructor(data?: PartialMessage<QueryRingGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.QueryRingGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRingGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRingGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRingGroupsResponse;

  static equals(a: QueryRingGroupsResponse | PlainMessage<QueryRingGroupsResponse> | undefined, b: QueryRingGroupsResponse | PlainMessage<QueryRingGroupsResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.UpdatePbxUserRequest
 */
export declare class UpdatePbxUserRequest extends Message<UpdatePbxUserRequest> {
  /**
   * The user details to update.
   *
   * @generated from field: services.pbx.v1.PBXUser user = 1;
   */
  user?: PBXUser;

  /**
   * Fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdatePbxUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.UpdatePbxUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePbxUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePbxUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePbxUserRequest;

  static equals(a: UpdatePbxUserRequest | PlainMessage<UpdatePbxUserRequest> | undefined, b: UpdatePbxUserRequest | PlainMessage<UpdatePbxUserRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.UpdatePbxUserResponse
 */
export declare class UpdatePbxUserResponse extends Message<UpdatePbxUserResponse> {
  /**
   * @generated from field: services.pbx.v1.PBXUser user = 1;
   */
  user?: PBXUser;

  constructor(data?: PartialMessage<UpdatePbxUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.UpdatePbxUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePbxUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePbxUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePbxUserResponse;

  static equals(a: UpdatePbxUserResponse | PlainMessage<UpdatePbxUserResponse> | undefined, b: UpdatePbxUserResponse | PlainMessage<UpdatePbxUserResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.UpdateRingGroupRequest
 */
export declare class UpdateRingGroupRequest extends Message<UpdateRingGroupRequest> {
  /**
   * @generated from field: services.pbx.v1.RingGroup group = 1;
   */
  group?: RingGroup;

  /**
   * Fields to be modified.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.UpdateRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRingGroupRequest;

  static equals(a: UpdateRingGroupRequest | PlainMessage<UpdateRingGroupRequest> | undefined, b: UpdateRingGroupRequest | PlainMessage<UpdateRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.UpdateRingGroupResponse
 */
export declare class UpdateRingGroupResponse extends Message<UpdateRingGroupResponse> {
  /**
   * @generated from field: services.pbx.v1.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<UpdateRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.UpdateRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRingGroupResponse;

  static equals(a: UpdateRingGroupResponse | PlainMessage<UpdateRingGroupResponse> | undefined, b: UpdateRingGroupResponse | PlainMessage<UpdateRingGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.AssignRandomExtensionRequest
 */
export declare class AssignRandomExtensionRequest extends Message<AssignRandomExtensionRequest> {
  constructor(data?: PartialMessage<AssignRandomExtensionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.AssignRandomExtensionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRandomExtensionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRandomExtensionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRandomExtensionRequest;

  static equals(a: AssignRandomExtensionRequest | PlainMessage<AssignRandomExtensionRequest> | undefined, b: AssignRandomExtensionRequest | PlainMessage<AssignRandomExtensionRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.AssignRandomExtensionResponse
 */
export declare class AssignRandomExtensionResponse extends Message<AssignRandomExtensionResponse> {
  /**
   * @generated from field: int32 extension = 1;
   */
  extension: number;

  constructor(data?: PartialMessage<AssignRandomExtensionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.AssignRandomExtensionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRandomExtensionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRandomExtensionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRandomExtensionResponse;

  static equals(a: AssignRandomExtensionResponse | PlainMessage<AssignRandomExtensionResponse> | undefined, b: AssignRandomExtensionResponse | PlainMessage<AssignRandomExtensionResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.CreateRingGroupRequest
 */
export declare class CreateRingGroupRequest extends Message<CreateRingGroupRequest> {
  /**
   * Required: The name of the group.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Optional: The description of the group.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Optional: The ring strategy of the group.
   *
   * @generated from field: services.pbx.v1.RingStrategy ring_strategy = 3;
   */
  ringStrategy: RingStrategy;

  /**
   * Optional: The PBX user IDs to add to the group.
   *
   * @generated from field: repeated string pbx_user_ids = 4;
   */
  pbxUserIds: string[];

  /**
   * Optional: The extension for the ring group.
   *
   * @generated from field: int32 extension = 5;
   */
  extension: number;

  constructor(data?: PartialMessage<CreateRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.CreateRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRingGroupRequest;

  static equals(a: CreateRingGroupRequest | PlainMessage<CreateRingGroupRequest> | undefined, b: CreateRingGroupRequest | PlainMessage<CreateRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.CreateRingGroupResponse
 */
export declare class CreateRingGroupResponse extends Message<CreateRingGroupResponse> {
  /**
   * @generated from field: services.pbx.v1.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<CreateRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.CreateRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRingGroupResponse;

  static equals(a: CreateRingGroupResponse | PlainMessage<CreateRingGroupResponse> | undefined, b: CreateRingGroupResponse | PlainMessage<CreateRingGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.DeleteRingGroupRequest
 */
export declare class DeleteRingGroupRequest extends Message<DeleteRingGroupRequest> {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId: string;

  constructor(data?: PartialMessage<DeleteRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.DeleteRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRingGroupRequest;

  static equals(a: DeleteRingGroupRequest | PlainMessage<DeleteRingGroupRequest> | undefined, b: DeleteRingGroupRequest | PlainMessage<DeleteRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v1.DeleteRingGroupResponse
 */
export declare class DeleteRingGroupResponse extends Message<DeleteRingGroupResponse> {
  constructor(data?: PartialMessage<DeleteRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v1.DeleteRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRingGroupResponse;

  static equals(a: DeleteRingGroupResponse | PlainMessage<DeleteRingGroupResponse> | undefined, b: DeleteRingGroupResponse | PlainMessage<DeleteRingGroupResponse> | undefined): boolean;
}

