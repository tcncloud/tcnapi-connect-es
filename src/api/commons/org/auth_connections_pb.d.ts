// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/org/auth_connections.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ConnectionType defines the different provider types an auth connection can be.
 *
 * @generated from enum api.commons.org.ConnectionType
 */
export declare enum ConnectionType {
  /**
   * @generated from enum value: CONNECTION_TYPE_NONE = 0;
   */
  NONE = 0,

  /**
   * @generated from enum value: CONNECTION_TYPE_OIDC = 1;
   */
  OIDC = 1,
}

/**
 * AuthConnectionSettings is the entity for sso connection information.
 *
 * @generated from message api.commons.org.AuthConnectionSettings
 */
export declare class AuthConnectionSettings extends Message<AuthConnectionSettings> {
  /**
   * issuer_url is the url provided by the identity provider
   * used to get authorization tokens.
   *
   * @generated from field: string issuer_url = 1;
   */
  issuerUrl: string;

  /**
   * tenant_url is the url used to match user's emails so
   * that the connection is used.
   *
   * @generated from field: string tenant_url = 2;
   */
  tenantUrl: string;

  /**
   * client_id is the id of the application created from
   * the auth provider.
   *
   * @generated from field: string client_id = 3;
   */
  clientId: string;

  /**
   * connection_id is the id of the auth0 connection.
   * This field will be populated automatically during
   * the CreateAuthConnection rpc.
   *
   * @generated from field: string connection_id = 4;
   */
  connectionId: string;

  /**
   * secret_expiration is an optional field that is
   * used to know when the connection's secret will
   * expire. Some providers have secret's that don't expire.
   *
   * @generated from field: api.commons.org.AuthConnectionSettings.SecretExpiration secret_expiration = 5;
   */
  secretExpiration?: AuthConnectionSettings_SecretExpiration;

  /**
   * default_group defines settings used for all users for this connection
   * regardless of their groups. Group name is ignored for the default. This
   * field can be left nil if no default settings are desired.
   *
   * @generated from field: api.commons.org.GroupItem default_group = 6;
   */
  defaultGroup?: GroupItem;

  /**
   * custom_groups defines the settings that will be used if a user with
   * this connection contains one or more of the matching group names.
   * If a user has multiple matching groups the settings for the highest
   * priority custom group will be used. Priority is determined by the custom
   * groups position in the list.
   *
   * @generated from field: repeated api.commons.org.GroupItem custom_groups = 7;
   */
  customGroups: GroupItem[];

  /**
   * org_id is the id of the organization the connection belongs too.
   *
   * @generated from field: string org_id = 8;
   */
  orgId: string;

  /**
   * name is the name of the connection.
   *
   * @generated from field: string name = 9;
   */
  name: string;

  /**
   * type is what type of provider is used for the connection.
   *
   * @generated from field: api.commons.org.ConnectionType type = 10;
   */
  type: ConnectionType;

  constructor(data?: PartialMessage<AuthConnectionSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.AuthConnectionSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthConnectionSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthConnectionSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthConnectionSettings;

  static equals(a: AuthConnectionSettings | PlainMessage<AuthConnectionSettings> | undefined, b: AuthConnectionSettings | PlainMessage<AuthConnectionSettings> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.AuthConnectionSettings.SecretExpiration
 */
export declare class AuthConnectionSettings_SecretExpiration extends Message<AuthConnectionSettings_SecretExpiration> {
  /**
   * @generated from field: google.protobuf.Timestamp date = 1;
   */
  date?: Timestamp;

  constructor(data?: PartialMessage<AuthConnectionSettings_SecretExpiration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.AuthConnectionSettings.SecretExpiration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthConnectionSettings_SecretExpiration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthConnectionSettings_SecretExpiration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthConnectionSettings_SecretExpiration;

  static equals(a: AuthConnectionSettings_SecretExpiration | PlainMessage<AuthConnectionSettings_SecretExpiration> | undefined, b: AuthConnectionSettings_SecretExpiration | PlainMessage<AuthConnectionSettings_SecretExpiration> | undefined): boolean;
}

/**
 * GroupItem defines settings mapped to a single group.
 *
 * @generated from message api.commons.org.GroupItem
 */
export declare class GroupItem extends Message<GroupItem> {
  /**
   * name of the group.
   *
   * @generated from field: string group_name = 1;
   */
  groupName: string;

  /**
   * hunt group sid for the group.
   *
   * @generated from field: int64 hunt_group_sid = 2;
   */
  huntGroupSid: bigint;

  /**
   * agent profile group for the group.
   *
   * @generated from field: string agent_profile_group_id = 3;
   */
  agentProfileGroupId: string;

  /**
   * p3 permission group id for the group.
   *
   * @generated from field: string p3_permission_group_id = 4;
   */
  p3PermissionGroupId: string;

  /**
   * list of permission group ids for the group. If a user belongs to multiple
   * groups the list of permission group ids will be appended to the existing
   * permissions the user contains. All other group settings will be overridden
   * by the highest priority group.
   *
   * @generated from field: repeated string permission_group_ids = 5;
   */
  permissionGroupIds: string[];

  constructor(data?: PartialMessage<GroupItem>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.GroupItem";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupItem;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupItem;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupItem;

  static equals(a: GroupItem | PlainMessage<GroupItem> | undefined, b: GroupItem | PlainMessage<GroupItem> | undefined): boolean;
}

