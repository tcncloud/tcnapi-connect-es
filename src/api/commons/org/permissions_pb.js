// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/org/permissions.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Permission } from "../auth/perms_pb.js";
import { Permission as Permission$1 } from "../perms_pb.js";
import { Application, Card } from "../../../annotations/perms/license_pb.js";

/**
 * PermissionGroup defines the permission group entity.
 *
 * @generated from message api.commons.org.PermissionGroup
 */
export const PermissionGroup = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.org.PermissionGroup",
  () => [
    { no: 1, name: "permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 6, name: "read_only", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "label_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * P3PermissionGroup entity.
 * This was migrated from permissions_group from skunk
 * and is requested by backoffice as the source of permissions.
 *
 * @generated from message api.commons.org.P3PermissionGroup
 */
export const P3PermissionGroup = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.org.P3PermissionGroup",
  () => [
    { no: 1, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission$1), repeated: true },
  ],
);

/**
 * License defines the structure of organization license assignments.
 *
 * @generated from message api.commons.org.License
 */
export const License = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.org.License",
  () => [
    { no: 1, name: "app", kind: "enum", T: proto3.getEnumType(Application) },
    { no: 2, name: "cards", kind: "message", T: License_Card, repeated: true },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.org.License.Card
 */
export const License_Card = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.org.License.Card",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Card) },
    { no: 2, name: "permissions", kind: "message", T: License_Permission, repeated: true },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "License_Card"},
);

/**
 * @generated from message api.commons.org.License.Permission
 */
export const License_Permission = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.org.License.Permission",
  () => [
    { no: 1, name: "permission", kind: "enum", T: proto3.getEnumType(Permission) },
    { no: 2, name: "enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "features", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "License_Permission"},
);

