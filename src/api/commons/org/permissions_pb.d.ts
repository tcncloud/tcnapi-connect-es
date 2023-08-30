// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/org/permissions.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Permission } from "../auth/perms_pb.js";
import type { Permission as Permission$1 } from "../perms_pb.js";
import type { Application, Card } from "../../../annotations/perms/license_pb.js";

/**
 * PermiissionGroup defines the permission group entity.
 *
 * @generated from message api.commons.org.PermissionGroup
 */
export declare class PermissionGroup extends Message<PermissionGroup> {
  /**
   * Unique id for this permission group.
   *
   * @generated from field: string permission_group_id = 1;
   */
  permissionGroupId: string;

  /**
   * Organization this permission group belongs to.
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * Name to identify by.
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * Brief description of this group of permissions.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * List of permissions in this group.
   *
   * @generated from field: repeated api.commons.auth.Permission permissions = 5;
   */
  permissions: Permission[];

  /**
   * Restricts users from modifying this group.
   *
   * @generated from field: bool read_only = 6;
   */
  readOnly: boolean;

  constructor(data?: PartialMessage<PermissionGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.PermissionGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionGroup;

  static equals(a: PermissionGroup | PlainMessage<PermissionGroup> | undefined, b: PermissionGroup | PlainMessage<PermissionGroup> | undefined): boolean;
}

/**
 * P3PermissionGroup entity.
 * This was migrated from permissions_group from skunk
 * and is requested by backoffice as the source of permissions.
 *
 * @generated from message api.commons.org.P3PermissionGroup
 */
export declare class P3PermissionGroup extends Message<P3PermissionGroup> {
  /**
   * Unique Id for this entity.
   *
   * @generated from field: string p3_permission_group_id = 1;
   */
  p3PermissionGroupId: string;

  /**
   * Owning org.
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * Owning org region.
   *
   * @generated from field: string region_id = 3;
   */
  regionId: string;

  /**
   * Display name for this group.
   *
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * More detailed description for this group.
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * List of permissions associated with this group.
   *
   * @generated from field: repeated api.commons.Permission permissions = 7;
   */
  permissions: Permission$1[];

  constructor(data?: PartialMessage<P3PermissionGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.P3PermissionGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): P3PermissionGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): P3PermissionGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): P3PermissionGroup;

  static equals(a: P3PermissionGroup | PlainMessage<P3PermissionGroup> | undefined, b: P3PermissionGroup | PlainMessage<P3PermissionGroup> | undefined): boolean;
}

/**
 * License defines the structure of organization license assignments.
 *
 * @generated from message api.commons.org.License
 */
export declare class License extends Message<License> {
  /**
   * Application containing licenses.
   *
   * @generated from field: annotations.perms.Application app = 1;
   */
  app: Application;

  /**
   * Individual cards for the application.
   *
   * @generated from field: repeated api.commons.org.License.Card cards = 2;
   */
  cards: License_Card[];

  constructor(data?: PartialMessage<License>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.License";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): License;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): License;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): License;

  static equals(a: License | PlainMessage<License> | undefined, b: License | PlainMessage<License> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.License.Card
 */
export declare class License_Card extends Message<License_Card> {
  /**
   * Card type.
   *
   * @generated from field: annotations.perms.Card type = 1;
   */
  type: Card;

  /**
   * List of permissions and features.
   *
   * @generated from field: repeated api.commons.org.License.Permission permissions = 2;
   */
  permissions: License_Permission[];

  constructor(data?: PartialMessage<License_Card>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.License.Card";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): License_Card;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): License_Card;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): License_Card;

  static equals(a: License_Card | PlainMessage<License_Card> | undefined, b: License_Card | PlainMessage<License_Card> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.License.Permission
 */
export declare class License_Permission extends Message<License_Permission> {
  /**
   * @generated from field: api.commons.auth.Permission permission = 1;
   */
  permission: Permission;

  /**
   * Whether this permission is enabled in the license.
   *
   * @generated from field: bool enabled = 2;
   */
  enabled: boolean;

  /**
   * List of features granted by the permission.
   *
   * @generated from field: repeated string features = 3;
   */
  features: string[];

  constructor(data?: PartialMessage<License_Permission>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.License.Permission";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): License_Permission;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): License_Permission;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): License_Permission;

  static equals(a: License_Permission | PlainMessage<License_Permission> | undefined, b: License_Permission | PlainMessage<License_Permission> | undefined): boolean;
}

