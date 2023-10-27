// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/org/auth_connections.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * ConnectionType defines the different provider types an auth connection can be.
 *
 * @generated from enum api.commons.org.ConnectionType
 */
export const ConnectionType = proto3.makeEnum(
  "api.commons.org.ConnectionType",
  [
    {no: 0, name: "CONNECTION_TYPE_NONE", localName: "NONE"},
    {no: 1, name: "CONNECTION_TYPE_OIDC", localName: "OIDC"},
    {no: 2, name: "CONNECTION_TYPE_AZURE", localName: "AZURE"},
  ],
);

/**
 * AuthConnectionSettings is the entity for sso connection information.
 *
 * @generated from message api.commons.org.AuthConnectionSettings
 */
export const AuthConnectionSettings = proto3.makeMessageType(
  "api.commons.org.AuthConnectionSettings",
  () => [
    { no: 1, name: "issuer_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "tenant_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "secret_expiration", kind: "message", T: AuthConnectionSettings_SecretExpiration },
    { no: 6, name: "default_group", kind: "message", T: GroupItem },
    { no: 7, name: "custom_groups", kind: "message", T: GroupItem, repeated: true },
    { no: 8, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "type", kind: "enum", T: proto3.getEnumType(ConnectionType) },
  ],
);

/**
 * @generated from message api.commons.org.AuthConnectionSettings.SecretExpiration
 */
export const AuthConnectionSettings_SecretExpiration = proto3.makeMessageType(
  "api.commons.org.AuthConnectionSettings.SecretExpiration",
  () => [
    { no: 1, name: "date", kind: "message", T: Timestamp },
  ],
  {localName: "AuthConnectionSettings_SecretExpiration"},
);

/**
 * GroupItem defines settings mapped to a single group.
 *
 * @generated from message api.commons.org.GroupItem
 */
export const GroupItem = proto3.makeMessageType(
  "api.commons.org.GroupItem",
  () => [
    { no: 1, name: "group_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hunt_group_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

