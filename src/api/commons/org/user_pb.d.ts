// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/org/user.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { OperatorApplications, TimeZoneWrapper } from "../org_pb.js";

/**
 * User represents a user of the system.
 *
 * @generated from message api.commons.org.User
 */
export declare class User extends Message<User> {
  /**
   * The ID of the user
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * The ID of the org the user belongs to.
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * The Username of the user.
   *
   * @generated from field: string username = 3;
   */
  username: string;

  /**
   * The ID of the p3 permission group the user has.
   *
   * @generated from field: string p3_permission_group_id = 4;
   */
  p3PermissionGroupId: string;

  /**
   * The p3 login sid of the user.
   * This is going to be deprecated, RegionSidMap should be used.
   *
   * @generated from field: int64 login_sid = 5;
   */
  loginSid: bigint;

  /**
   * The p3 agent sid of the user.
   * This is going to be deprecated, RegionSidMap should be used.
   *
   * @generated from field: int64 agent_sid = 6;
   */
  agentSid: bigint;

  /**
   * The region the user belongs to.
   * This is going to be deprecated, RegionSidMap should be used.
   *
   * @generated from field: string region_id = 7;
   */
  regionId: string;

  /**
   * The User's partner agent id.
   *
   * @generated from field: string partner_agent_id = 8;
   */
  partnerAgentId: string;

  /**
   * The p3 client sid of the user.
   *
   * @generated from field: int64 client_sid = 11;
   */
  clientSid: bigint;

  /**
   * The user's regional sids. The key of the map is a region id.
   *
   * @generated from field: map<string, api.commons.org.User.RegionSids> region_sid_map = 15;
   */
  regionSidMap: { [key: string]: User_RegionSids };

  /**
   * payload
   *
   * @generated from field: string api_key = 101;
   */
  apiKey: string;

  /**
   * The User's email.
   *
   * @generated from field: string email = 104;
   */
  email: string;

  /**
   * Whether or not the user is disabled.
   *
   * @generated from field: bool login_disabled = 112;
   */
  loginDisabled: boolean;

  /**
   * login preferences
   *
   * @generated from field: repeated string caller_ids = 115;
   */
  callerIds: string[];

  /**
   * @generated from field: repeated string linkback_numbers = 116;
   */
  linkbackNumbers: string[];

  /**
   * @generated from field: string auth_user_id = 118;
   */
  authUserId: string;

  /**
   * @generated from field: bool enable_mfa = 123;
   */
  enableMfa: boolean;

  /**
   * The user's first name.
   *
   * @generated from field: string first_name = 161;
   */
  firstName: string;

  /**
   * THe user's last name.
   *
   * @generated from field: string last_name = 162;
   */
  lastName: string;

  /**
   * The date/time the user was created.
   *
   * @generated from field: google.protobuf.Timestamp created = 163;
   */
  created?: Timestamp;

  /**
   * The date/time the user was last updated.
   *
   * @generated from field: google.protobuf.Timestamp last_updated = 164;
   */
  lastUpdated?: Timestamp;

  /**
   * Whether or not the user must reset their password on next login.
   *
   * @generated from field: bool password_reset_required = 165;
   */
  passwordResetRequired: boolean;

  /**
   * connection id is the id of the auth connection that the
   * user is coming from if it is a delgated user. If the user
   * is not delgated this will be nil.
   *
   * @generated from field: google.protobuf.StringValue connection_id = 166;
   */
  connectionId?: string;

  /**
   * User TimeZone with wrapper for nullable timezone
   *
   * @generated from field: api.commons.TimeZoneWrapper time_zone_override = 167;
   */
  timeZoneOverride?: TimeZoneWrapper;

  /**
   * UserSettings
   *
   * @generated from field: repeated string permission_group_ids = 200;
   */
  permissionGroupIds: string[];

  /**
   * List of trust ids the user has been assigned.
   *
   * @generated from field: repeated string trust_ids = 209;
   */
  trustIds: string[];

  /**
   * List of regions for user
   * repeated string regions = 201;
   * region_id of a user entity
   *
   * @generated from field: string default_region = 202;
   */
  defaultRegion: string;

  /**
   * default_app for a user
   *
   * @generated from field: api.commons.OperatorApplications default_application = 203;
   */
  defaultApplication: OperatorApplications;

  /**
   * P3 permission for user
   * User caller id
   *
   * @generated from field: string user_caller_id = 205;
   */
  userCallerId: string;

  /**
   * users assigned agent profile group
   *
   * @generated from field: string agent_profile_group_id = 207;
   */
  agentProfileGroupId: string;

  /**
   * The skills this user has as an agent, if any.
   *
   * @generated from field: repeated api.commons.org.Skill skills = 208;
   */
  skills: Skill[];

  /**
   * a bool signalling whether or not the user is also an agent
   *
   * @generated from field: bool agent = 300;
   */
  agent: boolean;

  /**
   * a bool to determine whether or not user is account owner
   *
   * @generated from field: bool account_owner = 400;
   */
  accountOwner: boolean;

  constructor(data?: PartialMessage<User>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.User";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}

/**
 * The entity object used in the region_sid_map.
 *
 * @generated from message api.commons.org.User.RegionSids
 */
export declare class User_RegionSids extends Message<User_RegionSids> {
  /**
   * The login sid for the region.
   *
   * @generated from field: int64 login_sid = 1;
   */
  loginSid: bigint;

  /**
   * THe agent sid for the region.
   *
   * @generated from field: int64 agent_sid = 2;
   */
  agentSid: bigint;

  /**
   * THe client sid for the region.
   *
   * @generated from field: int64 client_sid = 3;
   */
  clientSid: bigint;

  constructor(data?: PartialMessage<User_RegionSids>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.User.RegionSids";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User_RegionSids;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User_RegionSids;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User_RegionSids;

  static equals(a: User_RegionSids | PlainMessage<User_RegionSids> | undefined, b: User_RegionSids | PlainMessage<User_RegionSids> | undefined): boolean;
}

/**
 * Agent skill
 *
 * @generated from message api.commons.org.Skill
 */
export declare class Skill extends Message<Skill> {
  /**
   * @generated from field: int64 level = 1;
   */
  level: bigint;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: int64 skill_sid = 4;
   */
  skillSid: bigint;

  constructor(data?: PartialMessage<Skill>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.Skill";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Skill;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Skill;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Skill;

  static equals(a: Skill | PlainMessage<Skill> | undefined, b: Skill | PlainMessage<Skill> | undefined): boolean;
}

