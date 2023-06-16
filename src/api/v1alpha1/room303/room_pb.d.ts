// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/room.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Room, RoomType } from "../../commons/room303_pb.js";
import type { UserArchivedStateFilter } from "../../commons/user_pb.js";
import type { Skill, User } from "../../commons/org/user_pb.js";
import type { P3PermissionGroup, PermissionGroup } from "../../commons/org/permissions_pb.js";
import type { Label } from "../../commons/org/labels_pb.js";
import type { Trust } from "../../commons/org/trusts_pb.js";

/**
 * @generated from message api.v1alpha1.room303.CreateRoomRequest
 */
export declare class CreateRoomRequest extends Message<CreateRoomRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: api.commons.RoomType type = 2;
   */
  type: RoomType;

  /**
   * @generated from field: repeated string members = 3;
   */
  members: string[];

  constructor(data?: PartialMessage<CreateRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.CreateRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRoomRequest;

  static equals(a: CreateRoomRequest | PlainMessage<CreateRoomRequest> | undefined, b: CreateRoomRequest | PlainMessage<CreateRoomRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetRoomRequest
 */
export declare class GetRoomRequest extends Message<GetRoomRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<GetRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomRequest;

  static equals(a: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined, b: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListAllRoomsRequest
 */
export declare class ListAllRoomsRequest extends Message<ListAllRoomsRequest> {
  constructor(data?: PartialMessage<ListAllRoomsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListAllRoomsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllRoomsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllRoomsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllRoomsRequest;

  static equals(a: ListAllRoomsRequest | PlainMessage<ListAllRoomsRequest> | undefined, b: ListAllRoomsRequest | PlainMessage<ListAllRoomsRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomsForMemberRequest
 */
export declare class ListRoomsForMemberRequest extends Message<ListRoomsForMemberRequest> {
  constructor(data?: PartialMessage<ListRoomsForMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomsForMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomsForMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomsForMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomsForMemberRequest;

  static equals(a: ListRoomsForMemberRequest | PlainMessage<ListRoomsForMemberRequest> | undefined, b: ListRoomsForMemberRequest | PlainMessage<ListRoomsForMemberRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomsResponse
 */
export declare class ListRoomsResponse extends Message<ListRoomsResponse> {
  /**
   * @generated from field: repeated api.commons.Room rooms = 1;
   */
  rooms: Room[];

  constructor(data?: PartialMessage<ListRoomsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomsResponse;

  static equals(a: ListRoomsResponse | PlainMessage<ListRoomsResponse> | undefined, b: ListRoomsResponse | PlainMessage<ListRoomsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ArchiveRoomRequest
 */
export declare class ArchiveRoomRequest extends Message<ArchiveRoomRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<ArchiveRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ArchiveRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveRoomRequest;

  static equals(a: ArchiveRoomRequest | PlainMessage<ArchiveRoomRequest> | undefined, b: ArchiveRoomRequest | PlainMessage<ArchiveRoomRequest> | undefined): boolean;
}

/**
 * Request message for the ListUsersByOrgId rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersByOrgIdRequest
 */
export declare class ListUsersByOrgIdRequest extends Message<ListUsersByOrgIdRequest> {
  /**
   * Filter by org ID.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Return a list of only user agents (users whose default app is agent). When this is false all users are returned.
   *
   * @generated from field: bool agent = 2;
   */
  agent: boolean;

  /**
   * Filter by the user's archived status
   *
   * @generated from field: api.commons.UserArchivedStateFilter archived_filter = 3;
   */
  archivedFilter: UserArchivedStateFilter;

  constructor(data?: PartialMessage<ListUsersByOrgIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListUsersByOrgIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersByOrgIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersByOrgIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersByOrgIdRequest;

  static equals(a: ListUsersByOrgIdRequest | PlainMessage<ListUsersByOrgIdRequest> | undefined, b: ListUsersByOrgIdRequest | PlainMessage<ListUsersByOrgIdRequest> | undefined): boolean;
}

/**
 * Response message for the ListsUserByOrgId rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersByOrgIdResponse
 */
export declare class ListUsersByOrgIdResponse extends Message<ListUsersByOrgIdResponse> {
  /**
   * List of returned users with masked data.
   *
   * @generated from field: repeated api.v1alpha1.room303.UserDetails user_details = 1;
   */
  userDetails: UserDetails[];

  constructor(data?: PartialMessage<ListUsersByOrgIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListUsersByOrgIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersByOrgIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersByOrgIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersByOrgIdResponse;

  static equals(a: ListUsersByOrgIdResponse | PlainMessage<ListUsersByOrgIdResponse> | undefined, b: ListUsersByOrgIdResponse | PlainMessage<ListUsersByOrgIdResponse> | undefined): boolean;
}

/**
 * Wrapper for associating non entity fields with an User
 *
 * @generated from message api.v1alpha1.room303.UserDetails
 */
export declare class UserDetails extends Message<UserDetails> {
  /**
   * @generated from field: api.commons.org.User user = 1;
   */
  user?: User;

  /**
   * @generated from field: string org_name = 2;
   */
  orgName: string;

  /**
   * @generated from field: api.v1alpha1.room303.UserDetails.HuntGroup hunt_group = 3;
   */
  huntGroup?: UserDetails_HuntGroup;

  /**
   * @generated from field: api.v1alpha1.room303.UserDetails.AgentProfileGroup agent_profile_group = 4;
   */
  agentProfileGroup?: UserDetails_AgentProfileGroup;

  /**
   * @generated from field: repeated api.commons.org.Skill skills = 5;
   */
  skills: Skill[];

  /**
   * @generated from field: repeated api.commons.org.PermissionGroup permission_groups = 6;
   */
  permissionGroups: PermissionGroup[];

  /**
   * @generated from field: api.commons.org.P3PermissionGroup p3_permission_group = 7;
   */
  p3PermissionGroup?: P3PermissionGroup;

  /**
   * @generated from field: bool delegated = 8;
   */
  delegated: boolean;

  /**
   * @generated from field: repeated api.commons.org.Label labels = 9;
   */
  labels: Label[];

  /**
   * @generated from field: api.v1alpha1.room303.UserDetails.LoginInfo login_info = 10;
   */
  loginInfo?: UserDetails_LoginInfo;

  /**
   * Billing_prefix + clientSid. Used for integrations and billing. This is from the organization
   *
   * @generated from field: string billing_id = 11;
   */
  billingId: string;

  /**
   * @generated from field: repeated api.commons.org.Trust trusts = 12;
   */
  trusts: Trust[];

  constructor(data?: PartialMessage<UserDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UserDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDetails;

  static equals(a: UserDetails | PlainMessage<UserDetails> | undefined, b: UserDetails | PlainMessage<UserDetails> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.UserDetails.HuntGroup
 */
export declare class UserDetails_HuntGroup extends Message<UserDetails_HuntGroup> {
  /**
   * @generated from field: int64 hunt_group_sid = 1;
   */
  huntGroupSid: bigint;

  /**
   * @generated from field: string hunt_group_name = 2;
   */
  huntGroupName: string;

  constructor(data?: PartialMessage<UserDetails_HuntGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UserDetails.HuntGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDetails_HuntGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDetails_HuntGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDetails_HuntGroup;

  static equals(a: UserDetails_HuntGroup | PlainMessage<UserDetails_HuntGroup> | undefined, b: UserDetails_HuntGroup | PlainMessage<UserDetails_HuntGroup> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.UserDetails.AgentProfileGroup
 */
export declare class UserDetails_AgentProfileGroup extends Message<UserDetails_AgentProfileGroup> {
  /**
   * @generated from field: string agent_profile_group_id = 1;
   */
  agentProfileGroupId: string;

  /**
   * @generated from field: string agent_profile_group_name = 2;
   */
  agentProfileGroupName: string;

  constructor(data?: PartialMessage<UserDetails_AgentProfileGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UserDetails.AgentProfileGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDetails_AgentProfileGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDetails_AgentProfileGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDetails_AgentProfileGroup;

  static equals(a: UserDetails_AgentProfileGroup | PlainMessage<UserDetails_AgentProfileGroup> | undefined, b: UserDetails_AgentProfileGroup | PlainMessage<UserDetails_AgentProfileGroup> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.UserDetails.LoginInfo
 */
export declare class UserDetails_LoginInfo extends Message<UserDetails_LoginInfo> {
  /**
   * @generated from field: string last_ip = 1;
   */
  lastIp: string;

  /**
   * @generated from field: google.protobuf.Timestamp last_login = 2;
   */
  lastLogin?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp last_password_reset = 3;
   */
  lastPasswordReset?: Timestamp;

  /**
   * @generated from field: int64 logins_count = 4;
   */
  loginsCount: bigint;

  /**
   * @generated from field: bool has_blocked_ips = 5;
   */
  hasBlockedIps: boolean;

  /**
   * @generated from field: bool email_verified = 6;
   */
  emailVerified: boolean;

  constructor(data?: PartialMessage<UserDetails_LoginInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UserDetails.LoginInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDetails_LoginInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDetails_LoginInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDetails_LoginInfo;

  static equals(a: UserDetails_LoginInfo | PlainMessage<UserDetails_LoginInfo> | undefined, b: UserDetails_LoginInfo | PlainMessage<UserDetails_LoginInfo> | undefined): boolean;
}

