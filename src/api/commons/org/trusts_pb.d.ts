// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file api/commons/org/trusts.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Permission } from "../auth/perms_pb.js";
import type { Label } from "./labels_pb.js";

/**
 * Status represents the states that trusts can be in.
 *
 * @generated from enum api.commons.org.Status
 */
export declare enum Status {
  /**
   * @generated from enum value: PENDING = 0;
   */
  PENDING = 0,

  /**
   * @generated from enum value: REJECTED = 1;
   */
  REJECTED = 1,

  /**
   * @generated from enum value: ACCEPTED = 2;
   */
  ACCEPTED = 2,
}

/**
 * Trust is the entity message for trusts.
 *
 * @generated from message api.commons.org.Trust
 */
export declare class Trust extends Message<Trust> {
  /**
   * ID of the trust.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  /**
   * Org ID of the org giving out the trust.
   *
   * @generated from field: string grantor = 2;
   */
  grantor: string;

  /**
   * Org ID of the org receiving the trust.
   *
   * @generated from field: string grantee = 3;
   */
  grantee: string;

  /**
   * Name of the trust.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Description of the trust.
   *
   * @generated from field: string description = 5;
   */
  description: string;

  /**
   * Permissions the grantor allows users within the
   * grantee org to have when assigned.
   *
   * @generated from field: repeated api.commons.auth.Permission permissions = 6;
   */
  permissions: Permission[];

  /**
   * Labels associated with the trusted permissions.
   *
   * @generated from field: repeated api.commons.org.Label labels = 7;
   */
  labels: Label[];

  /**
   * Status of the Trust.
   *
   * @generated from field: api.commons.org.Status status = 8;
   */
  status: Status;

  /**
   * @generated from field: bool deleted = 9;
   */
  deleted: boolean;

  constructor(data?: PartialMessage<Trust>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.Trust";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trust;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trust;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trust;

  static equals(a: Trust | PlainMessage<Trust> | undefined, b: Trust | PlainMessage<Trust> | undefined): boolean;
}

/**
 * TrustGroup contains ALL trusted permission/label groups
 * assigned to a user.
 *
 * @generated from message api.commons.org.TrustGroup
 */
export declare class TrustGroup extends Message<TrustGroup> {
  /**
   * Org ID of the org the trusts are from.
   *
   * @generated from field: string grantor = 1;
   */
  grantor: string;

  /**
   * All perm/label groups the user has from the grantor org.
   * The length of the labeled_permissions list is equal
   * to the number of assigned trusts the user has from
   * the grantor org.
   *
   * @generated from field: repeated api.commons.org.TrustGroup.LabeledPermissions labeled_permissions = 2;
   */
  labeledPermissions: TrustGroup_LabeledPermissions[];

  constructor(data?: PartialMessage<TrustGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.TrustGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrustGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrustGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrustGroup;

  static equals(a: TrustGroup | PlainMessage<TrustGroup> | undefined, b: TrustGroup | PlainMessage<TrustGroup> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.TrustGroup.LabeledPermissions
 */
export declare class TrustGroup_LabeledPermissions extends Message<TrustGroup_LabeledPermissions> {
  /**
   * @generated from field: repeated api.commons.auth.Permission permissions = 1;
   */
  permissions: Permission[];

  /**
   * @generated from field: repeated api.commons.org.Label labels = 2;
   */
  labels: Label[];

  constructor(data?: PartialMessage<TrustGroup_LabeledPermissions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.TrustGroup.LabeledPermissions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrustGroup_LabeledPermissions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrustGroup_LabeledPermissions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrustGroup_LabeledPermissions;

  static equals(a: TrustGroup_LabeledPermissions | PlainMessage<TrustGroup_LabeledPermissions> | undefined, b: TrustGroup_LabeledPermissions | PlainMessage<TrustGroup_LabeledPermissions> | undefined): boolean;
}

/**
 * TrustFilter is used to filter trusts during list RPCs.
 *
 * @generated from message api.commons.org.TrustFilter
 */
export declare class TrustFilter extends Message<TrustFilter> {
  /**
   * Only return trusts with grantor org id matching this value.
   * Nil will not filter based on grantor.
   *
   * @generated from field: google.protobuf.StringValue grantor = 1;
   */
  grantor?: string;

  /**
   * Only return trusts with grantee org id matching this value.
   * Nil will not filter based on grantee.
   *
   * @generated from field: google.protobuf.StringValue grantee = 2;
   */
  grantee?: string;

  /**
   * Only return trusts matching ANY of the given statuses.bool
   * Nil will not filter based on status.
   *
   * @generated from field: api.commons.org.TrustFilter.StatusFilter status_filter = 3;
   */
  statusFilter?: TrustFilter_StatusFilter;

  constructor(data?: PartialMessage<TrustFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.TrustFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrustFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrustFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrustFilter;

  static equals(a: TrustFilter | PlainMessage<TrustFilter> | undefined, b: TrustFilter | PlainMessage<TrustFilter> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.TrustFilter.StatusFilter
 */
export declare class TrustFilter_StatusFilter extends Message<TrustFilter_StatusFilter> {
  /**
   * @generated from field: repeated api.commons.org.Status values = 1;
   */
  values: Status[];

  constructor(data?: PartialMessage<TrustFilter_StatusFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.TrustFilter.StatusFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrustFilter_StatusFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrustFilter_StatusFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrustFilter_StatusFilter;

  static equals(a: TrustFilter_StatusFilter | PlainMessage<TrustFilter_StatusFilter> | undefined, b: TrustFilter_StatusFilter | PlainMessage<TrustFilter_StatusFilter> | undefined): boolean;
}

