// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/authconnection/entities.proto (package api.v1alpha1.org.authconnection, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AuthConnectionSettings, GroupItem } from "../../../commons/org/auth_connections_pb.js";

/**
 * Request message for the CreateAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.CreateAuthConnectionRequest
 */
export const CreateAuthConnectionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.CreateAuthConnectionRequest",
  () => [
    { no: 1, name: "settings", kind: "message", T: AuthConnectionSettings },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the CreateAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.CreateAuthConnectionResponse
 */
export const CreateAuthConnectionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.CreateAuthConnectionResponse",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the GetAuthConnectionSettings rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionSettingsRequest
 */
export const GetAuthConnectionSettingsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.GetAuthConnectionSettingsRequest",
  [],
);

/**
 * Response message for the GetConnectionSettings rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionSettingsResponse
 */
export const GetAuthConnectionSettingsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.GetAuthConnectionSettingsResponse",
  () => [
    { no: 1, name: "settings", kind: "message", T: AuthConnectionSettings },
  ],
);

/**
 * Request message for the GetAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionRequest
 */
export const GetAuthConnectionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.GetAuthConnectionRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionResponse
 */
export const GetAuthConnectionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.GetAuthConnectionResponse",
  () => [
    { no: 1, name: "settings", kind: "message", T: AuthConnectionSettings },
  ],
);

/**
 * Request message for the DeleteAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.DeleteAuthConnectionRequest
 */
export const DeleteAuthConnectionRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.DeleteAuthConnectionRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.DeleteAuthConnectionResponse
 */
export const DeleteAuthConnectionResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.DeleteAuthConnectionResponse",
  [],
);

/**
 * Request message for the UpdateAuthConnectionSecret rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest
 */
export const UpdateAuthConnectionSecretRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the UpdateAuthConnectionSecret rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretResponse
 */
export const UpdateAuthConnectionSecretResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretResponse",
  [],
);

/**
 * Request message for the UpdateAuthConnectionGroups rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsRequest
 */
export const UpdateAuthConnectionGroupsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsRequest",
  () => [
    { no: 1, name: "default_group", kind: "message", T: GroupItem },
    { no: 2, name: "custom_groups", kind: "message", T: GroupItem, repeated: true },
  ],
);

/**
 * Response message for the UpdateAuthConnectionGroups rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsResponse
 */
export const UpdateAuthConnectionGroupsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsResponse",
  [],
);

