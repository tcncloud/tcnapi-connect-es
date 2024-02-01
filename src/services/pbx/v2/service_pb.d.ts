// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file services/pbx/v2/service.proto (package services.pbx.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * -------------------------
 * Enums
 * -------------------------
 *
 * @generated from enum services.pbx.v2.RingStrategy
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

  /**
   * @generated from enum value: RING_STRATEGY_ORDERED = 4;
   */
  ORDERED = 4,
}

/**
 * -------------------------
 * Entity Definitions
 * -------------------------
 *
 * @generated from message services.pbx.v2.PBXUser
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
   * @generated from field: repeated string sip_account_ids = 3;
   */
  sipAccountIds: string[];

  constructor(data?: PartialMessage<PBXUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.PBXUser";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PBXUser;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PBXUser;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PBXUser;

  static equals(a: PBXUser | PlainMessage<PBXUser> | undefined, b: PBXUser | PlainMessage<PBXUser> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.SIPAccount
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
   * @generated from field: string extension = 3;
   */
  extension: string;

  /**
   * @generated from field: repeated string ring_group_ids = 4;
   */
  ringGroupIds: string[];

  /**
   * @generated from field: string org_user_id = 5;
   */
  orgUserId: string;

  constructor(data?: PartialMessage<SIPAccount>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.SIPAccount";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SIPAccount;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SIPAccount;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SIPAccount;

  static equals(a: SIPAccount | PlainMessage<SIPAccount> | undefined, b: SIPAccount | PlainMessage<SIPAccount> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.RingGroup
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
   * @generated from field: string extension = 4;
   */
  extension: string;

  /**
   * @generated from field: services.pbx.v2.RingStrategy ring_strategy = 5;
   */
  ringStrategy: RingStrategy;

  /**
   * @generated from field: repeated string sip_account_ids = 6;
   */
  sipAccountIds: string[];

  constructor(data?: PartialMessage<RingGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.RingGroup";
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
 * @generated from message services.pbx.v2.ListPBXUsersRequest
 */
export declare class ListPBXUsersRequest extends Message<ListPBXUsersRequest> {
  constructor(data?: PartialMessage<ListPBXUsersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListPBXUsersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPBXUsersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPBXUsersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPBXUsersRequest;

  static equals(a: ListPBXUsersRequest | PlainMessage<ListPBXUsersRequest> | undefined, b: ListPBXUsersRequest | PlainMessage<ListPBXUsersRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.ListPBXUsersResponse
 */
export declare class ListPBXUsersResponse extends Message<ListPBXUsersResponse> {
  /**
   * @generated from field: repeated services.pbx.v2.PBXUser users = 1;
   */
  users: PBXUser[];

  constructor(data?: PartialMessage<ListPBXUsersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListPBXUsersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPBXUsersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPBXUsersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPBXUsersResponse;

  static equals(a: ListPBXUsersResponse | PlainMessage<ListPBXUsersResponse> | undefined, b: ListPBXUsersResponse | PlainMessage<ListPBXUsersResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.ListSIPAccountsRequest
 */
export declare class ListSIPAccountsRequest extends Message<ListSIPAccountsRequest> {
  constructor(data?: PartialMessage<ListSIPAccountsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListSIPAccountsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSIPAccountsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSIPAccountsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSIPAccountsRequest;

  static equals(a: ListSIPAccountsRequest | PlainMessage<ListSIPAccountsRequest> | undefined, b: ListSIPAccountsRequest | PlainMessage<ListSIPAccountsRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.ListSIPAccountsResponse
 */
export declare class ListSIPAccountsResponse extends Message<ListSIPAccountsResponse> {
  /**
   * @generated from field: repeated services.pbx.v2.SIPAccount sip_accounts = 1;
   */
  sipAccounts: SIPAccount[];

  constructor(data?: PartialMessage<ListSIPAccountsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListSIPAccountsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSIPAccountsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSIPAccountsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSIPAccountsResponse;

  static equals(a: ListSIPAccountsResponse | PlainMessage<ListSIPAccountsResponse> | undefined, b: ListSIPAccountsResponse | PlainMessage<ListSIPAccountsResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetSIPAccountRequest
 */
export declare class GetSIPAccountRequest extends Message<GetSIPAccountRequest> {
  /**
   * @generated from field: string sip_account_id = 1;
   */
  sipAccountId: string;

  constructor(data?: PartialMessage<GetSIPAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetSIPAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSIPAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSIPAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSIPAccountRequest;

  static equals(a: GetSIPAccountRequest | PlainMessage<GetSIPAccountRequest> | undefined, b: GetSIPAccountRequest | PlainMessage<GetSIPAccountRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetSIPAccountResponse
 */
export declare class GetSIPAccountResponse extends Message<GetSIPAccountResponse> {
  /**
   * @generated from field: repeated services.pbx.v2.SIPAccount sip_account = 1;
   */
  sipAccount: SIPAccount[];

  constructor(data?: PartialMessage<GetSIPAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetSIPAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSIPAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSIPAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSIPAccountResponse;

  static equals(a: GetSIPAccountResponse | PlainMessage<GetSIPAccountResponse> | undefined, b: GetSIPAccountResponse | PlainMessage<GetSIPAccountResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetPBXUserRequest
 */
export declare class GetPBXUserRequest extends Message<GetPBXUserRequest> {
  /**
   * Required: To fetch a specific user by ID.
   *
   * @generated from field: string pbx_user_id = 1;
   */
  pbxUserId: string;

  constructor(data?: PartialMessage<GetPBXUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetPBXUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPBXUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPBXUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPBXUserRequest;

  static equals(a: GetPBXUserRequest | PlainMessage<GetPBXUserRequest> | undefined, b: GetPBXUserRequest | PlainMessage<GetPBXUserRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetPBXUserResponse
 */
export declare class GetPBXUserResponse extends Message<GetPBXUserResponse> {
  /**
   * @generated from field: services.pbx.v2.PBXUser user = 1;
   */
  user?: PBXUser;

  constructor(data?: PartialMessage<GetPBXUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetPBXUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPBXUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPBXUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPBXUserResponse;

  static equals(a: GetPBXUserResponse | PlainMessage<GetPBXUserResponse> | undefined, b: GetPBXUserResponse | PlainMessage<GetPBXUserResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.ListRingGroupsRequest
 */
export declare class ListRingGroupsRequest extends Message<ListRingGroupsRequest> {
  constructor(data?: PartialMessage<ListRingGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListRingGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRingGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRingGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRingGroupsRequest;

  static equals(a: ListRingGroupsRequest | PlainMessage<ListRingGroupsRequest> | undefined, b: ListRingGroupsRequest | PlainMessage<ListRingGroupsRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.ListRingGroupsResponse
 */
export declare class ListRingGroupsResponse extends Message<ListRingGroupsResponse> {
  /**
   * @generated from field: repeated services.pbx.v2.RingGroup groups = 1;
   */
  groups: RingGroup[];

  constructor(data?: PartialMessage<ListRingGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.ListRingGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRingGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRingGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRingGroupsResponse;

  static equals(a: ListRingGroupsResponse | PlainMessage<ListRingGroupsResponse> | undefined, b: ListRingGroupsResponse | PlainMessage<ListRingGroupsResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetRingGroupRequest
 */
export declare class GetRingGroupRequest extends Message<GetRingGroupRequest> {
  /**
   * Required: To fetch a specific group by ID.
   *
   * @generated from field: string ring_group_id = 1;
   */
  ringGroupId: string;

  constructor(data?: PartialMessage<GetRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRingGroupRequest;

  static equals(a: GetRingGroupRequest | PlainMessage<GetRingGroupRequest> | undefined, b: GetRingGroupRequest | PlainMessage<GetRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.GetRingGroupResponse
 */
export declare class GetRingGroupResponse extends Message<GetRingGroupResponse> {
  /**
   * @generated from field: services.pbx.v2.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<GetRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.GetRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRingGroupResponse;

  static equals(a: GetRingGroupResponse | PlainMessage<GetRingGroupResponse> | undefined, b: GetRingGroupResponse | PlainMessage<GetRingGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.UpdateSIPAccountRequest
 */
export declare class UpdateSIPAccountRequest extends Message<UpdateSIPAccountRequest> {
  /**
   * The sip account details to update.
   *
   * @generated from field: services.pbx.v2.SIPAccount sip_account = 1;
   */
  sipAccount?: SIPAccount;

  /**
   * Fields to be updated.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateSIPAccountRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.UpdateSIPAccountRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSIPAccountRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSIPAccountRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSIPAccountRequest;

  static equals(a: UpdateSIPAccountRequest | PlainMessage<UpdateSIPAccountRequest> | undefined, b: UpdateSIPAccountRequest | PlainMessage<UpdateSIPAccountRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.UpdateSIPAccountResponse
 */
export declare class UpdateSIPAccountResponse extends Message<UpdateSIPAccountResponse> {
  /**
   * @generated from field: services.pbx.v2.SIPAccount sip_account = 1;
   */
  sipAccount?: SIPAccount;

  constructor(data?: PartialMessage<UpdateSIPAccountResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.UpdateSIPAccountResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSIPAccountResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSIPAccountResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSIPAccountResponse;

  static equals(a: UpdateSIPAccountResponse | PlainMessage<UpdateSIPAccountResponse> | undefined, b: UpdateSIPAccountResponse | PlainMessage<UpdateSIPAccountResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.UpdateRingGroupRequest
 */
export declare class UpdateRingGroupRequest extends Message<UpdateRingGroupRequest> {
  /**
   * @generated from field: services.pbx.v2.RingGroup group = 1;
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
  static readonly typeName = "services.pbx.v2.UpdateRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRingGroupRequest;

  static equals(a: UpdateRingGroupRequest | PlainMessage<UpdateRingGroupRequest> | undefined, b: UpdateRingGroupRequest | PlainMessage<UpdateRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.UpdateRingGroupResponse
 */
export declare class UpdateRingGroupResponse extends Message<UpdateRingGroupResponse> {
  /**
   * @generated from field: services.pbx.v2.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<UpdateRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.UpdateRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRingGroupResponse;

  static equals(a: UpdateRingGroupResponse | PlainMessage<UpdateRingGroupResponse> | undefined, b: UpdateRingGroupResponse | PlainMessage<UpdateRingGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.AssignRandomExtensionRequest
 */
export declare class AssignRandomExtensionRequest extends Message<AssignRandomExtensionRequest> {
  constructor(data?: PartialMessage<AssignRandomExtensionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.AssignRandomExtensionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRandomExtensionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRandomExtensionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRandomExtensionRequest;

  static equals(a: AssignRandomExtensionRequest | PlainMessage<AssignRandomExtensionRequest> | undefined, b: AssignRandomExtensionRequest | PlainMessage<AssignRandomExtensionRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.AssignRandomExtensionResponse
 */
export declare class AssignRandomExtensionResponse extends Message<AssignRandomExtensionResponse> {
  /**
   * @generated from field: string extension = 1;
   */
  extension: string;

  constructor(data?: PartialMessage<AssignRandomExtensionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.AssignRandomExtensionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignRandomExtensionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignRandomExtensionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignRandomExtensionResponse;

  static equals(a: AssignRandomExtensionResponse | PlainMessage<AssignRandomExtensionResponse> | undefined, b: AssignRandomExtensionResponse | PlainMessage<AssignRandomExtensionResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.CreateRingGroupRequest
 */
export declare class CreateRingGroupRequest extends Message<CreateRingGroupRequest> {
  /**
   * Fields to be added into new Ring Group
   *
   * @generated from field: services.pbx.v2.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<CreateRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.CreateRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRingGroupRequest;

  static equals(a: CreateRingGroupRequest | PlainMessage<CreateRingGroupRequest> | undefined, b: CreateRingGroupRequest | PlainMessage<CreateRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.CreateRingGroupResponse
 */
export declare class CreateRingGroupResponse extends Message<CreateRingGroupResponse> {
  /**
   * @generated from field: services.pbx.v2.RingGroup group = 1;
   */
  group?: RingGroup;

  constructor(data?: PartialMessage<CreateRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.CreateRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRingGroupResponse;

  static equals(a: CreateRingGroupResponse | PlainMessage<CreateRingGroupResponse> | undefined, b: CreateRingGroupResponse | PlainMessage<CreateRingGroupResponse> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.DeleteRingGroupRequest
 */
export declare class DeleteRingGroupRequest extends Message<DeleteRingGroupRequest> {
  /**
   * @generated from field: string group_id = 1;
   */
  groupId: string;

  constructor(data?: PartialMessage<DeleteRingGroupRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.DeleteRingGroupRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRingGroupRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRingGroupRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRingGroupRequest;

  static equals(a: DeleteRingGroupRequest | PlainMessage<DeleteRingGroupRequest> | undefined, b: DeleteRingGroupRequest | PlainMessage<DeleteRingGroupRequest> | undefined): boolean;
}

/**
 * @generated from message services.pbx.v2.DeleteRingGroupResponse
 */
export declare class DeleteRingGroupResponse extends Message<DeleteRingGroupResponse> {
  constructor(data?: PartialMessage<DeleteRingGroupResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.pbx.v2.DeleteRingGroupResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteRingGroupResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteRingGroupResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteRingGroupResponse;

  static equals(a: DeleteRingGroupResponse | PlainMessage<DeleteRingGroupResponse> | undefined, b: DeleteRingGroupResponse | PlainMessage<DeleteRingGroupResponse> | undefined): boolean;
}

