// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file annotations/authz.proto (package annotations, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import { MethodOptions, proto2 } from "@bufbuild/protobuf";
import { Permission } from "../api/commons/auth/perms_pb.js";

/**
 * Permissions - annotation object
 *
 * @generated from message annotations.Permissions
 */
export const Permissions = proto2.makeMessageType(
  "annotations.Permissions",
  () => [
    { no: 1, name: "sets", kind: "message", T: PermissionSet, repeated: true },
    { no: 2, name: "wip", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
    { no: 3, name: "no_permissions", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true, default: false },
  ],
);

/**
 * @generated from message annotations.PermissionSet
 */
export const PermissionSet = proto2.makeMessageType(
  "annotations.PermissionSet",
  () => [
    { no: 1, name: "permissions", kind: "enum", T: proto2.getEnumType(Permission), repeated: true },
  ],
);

/**
 * add annotations to method options
 *
 * @generated from extension: optional annotations.Permissions authz = 560007;
 */
export const authz = proto2.makeExtension(
  "annotations.authz", 
  MethodOptions, 
  () => ({ no: 560007, kind: "message", T: Permissions, opt: true }),
);

