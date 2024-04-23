// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file annotations/authz.proto (package annotations, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Extension, FieldList, JsonReadOptions, JsonValue, MethodOptions, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import type { Permission } from "../api/commons/auth/perms_pb.js";

/**
 * Permissions - annotation object
 *
 * @generated from message annotations.Permissions
 */
export declare class Permissions extends Message<Permissions> {
  /**
   * A list of permission sets - atleast one set must exist in the list
   * to allow access.
   *
   * @generated from field: repeated annotations.PermissionSet sets = 1;
   */
  sets: PermissionSet[];

  /**
   * WIP inject PERMISSION_DEV into the required list
   * don't use it, it will be removed soon
   *
   * @generated from field: optional bool wip = 2 [default = false, deprecated = true];
   * @deprecated
   */
  wip?: boolean;

  /**
   * Indicate that the method will use no permissions - it will be public.
   * Be careful with this.
   *
   * @generated from field: optional bool no_permissions = 3 [default = false];
   */
  noPermissions?: boolean;

  constructor(data?: PartialMessage<Permissions>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "annotations.Permissions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permissions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permissions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permissions;

  static equals(a: Permissions | PlainMessage<Permissions> | undefined, b: Permissions | PlainMessage<Permissions> | undefined): boolean;
}

/**
 * @generated from message annotations.PermissionSet
 */
export declare class PermissionSet extends Message<PermissionSet> {
  /**
   * @generated from field: repeated api.commons.auth.Permission permissions = 1;
   */
  permissions: Permission[];

  constructor(data?: PartialMessage<PermissionSet>);

  static readonly runtime: typeof proto2;
  static readonly typeName = "annotations.PermissionSet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermissionSet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermissionSet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermissionSet;

  static equals(a: PermissionSet | PlainMessage<PermissionSet> | undefined, b: PermissionSet | PlainMessage<PermissionSet> | undefined): boolean;
}

/**
 * add annotations to method options
 *
 * @generated from extension: optional annotations.Permissions authz = 560007;
 */
export declare const authz: Extension<MethodOptions, Permissions>;

