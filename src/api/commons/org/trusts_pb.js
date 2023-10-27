// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/org/trusts.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue } from "@bufbuild/protobuf";
import { Permission } from "../auth/perms_pb.js";
import { Label } from "./labels_pb.js";

/**
 * Status represents the states that trusts can be in.
 *
 * @generated from enum api.commons.org.Status
 */
export const Status = proto3.makeEnum(
  "api.commons.org.Status",
  [
    {no: 0, name: "PENDING"},
    {no: 1, name: "REJECTED"},
    {no: 2, name: "ACCEPTED"},
  ],
);

/**
 * Trust is the entity message for trusts.
 *
 * @generated from message api.commons.org.Trust
 */
export const Trust = proto3.makeMessageType(
  "api.commons.org.Trust",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 7, name: "labels", kind: "message", T: Label, repeated: true },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(Status) },
    { no: 9, name: "deleted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * TrustGroup contains ALL trusted permission/label groups
 * assigned to a user.
 *
 * @generated from message api.commons.org.TrustGroup
 */
export const TrustGroup = proto3.makeMessageType(
  "api.commons.org.TrustGroup",
  () => [
    { no: 1, name: "grantor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "labeled_permissions", kind: "message", T: TrustGroup_LabeledPermissions, repeated: true },
  ],
);

/**
 * @generated from message api.commons.org.TrustGroup.LabeledPermissions
 */
export const TrustGroup_LabeledPermissions = proto3.makeMessageType(
  "api.commons.org.TrustGroup.LabeledPermissions",
  () => [
    { no: 1, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 2, name: "labels", kind: "message", T: Label, repeated: true },
  ],
  {localName: "TrustGroup_LabeledPermissions"},
);

/**
 * TrustFilter is used to filter trusts during list RPCs.
 *
 * @generated from message api.commons.org.TrustFilter
 */
export const TrustFilter = proto3.makeMessageType(
  "api.commons.org.TrustFilter",
  () => [
    { no: 1, name: "grantor", kind: "message", T: StringValue },
    { no: 2, name: "grantee", kind: "message", T: StringValue },
    { no: 3, name: "status_filter", kind: "message", T: TrustFilter_StatusFilter },
  ],
);

/**
 * @generated from message api.commons.org.TrustFilter.StatusFilter
 */
export const TrustFilter_StatusFilter = proto3.makeMessageType(
  "api.commons.org.TrustFilter.StatusFilter",
  () => [
    { no: 1, name: "values", kind: "enum", T: proto3.getEnumType(Status), repeated: true },
  ],
  {localName: "TrustFilter_StatusFilter"},
);

