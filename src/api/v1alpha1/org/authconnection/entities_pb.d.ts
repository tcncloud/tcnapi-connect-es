// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/authconnection/entities.proto (package api.v1alpha1.org.authconnection, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AuthConnectionSettings, GroupItem } from "../../../commons/org/auth_connections_pb.js";

/**
 * Request message for the CreateAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.CreateAuthConnectionRequest
 */
export declare class CreateAuthConnectionRequest extends Message<CreateAuthConnectionRequest> {
  /**
   * @generated from field: api.commons.org.AuthConnectionSettings settings = 1;
   */
  settings?: AuthConnectionSettings;

  /**
   * client secret is the secret required for the provider.
   * Some providers don't allow for non expiring secrets. If this
   * is the case the secret_expiration field on the settings should
   * be set.
   * This field is not part of the ConnectionSettings message
   * because it should never be stored.
   *
   * @generated from field: string client_secret = 2;
   */
  clientSecret: string;

  constructor(data?: PartialMessage<CreateAuthConnectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.CreateAuthConnectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAuthConnectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAuthConnectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAuthConnectionRequest;

  static equals(a: CreateAuthConnectionRequest | PlainMessage<CreateAuthConnectionRequest> | undefined, b: CreateAuthConnectionRequest | PlainMessage<CreateAuthConnectionRequest> | undefined): boolean;
}

/**
 * Response message for the CreateAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.CreateAuthConnectionResponse
 */
export declare class CreateAuthConnectionResponse extends Message<CreateAuthConnectionResponse> {
  /**
   * The id of the newly created auth connection.
   *
   * @generated from field: string connection_id = 1;
   */
  connectionId: string;

  constructor(data?: PartialMessage<CreateAuthConnectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.CreateAuthConnectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAuthConnectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAuthConnectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAuthConnectionResponse;

  static equals(a: CreateAuthConnectionResponse | PlainMessage<CreateAuthConnectionResponse> | undefined, b: CreateAuthConnectionResponse | PlainMessage<CreateAuthConnectionResponse> | undefined): boolean;
}

/**
 * Request message for the GetAuthConnectionSettings rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionSettingsRequest
 */
export declare class GetAuthConnectionSettingsRequest extends Message<GetAuthConnectionSettingsRequest> {
  constructor(data?: PartialMessage<GetAuthConnectionSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.GetAuthConnectionSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConnectionSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConnectionSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConnectionSettingsRequest;

  static equals(a: GetAuthConnectionSettingsRequest | PlainMessage<GetAuthConnectionSettingsRequest> | undefined, b: GetAuthConnectionSettingsRequest | PlainMessage<GetAuthConnectionSettingsRequest> | undefined): boolean;
}

/**
 * Response message for the GetConnectionSettings rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionSettingsResponse
 */
export declare class GetAuthConnectionSettingsResponse extends Message<GetAuthConnectionSettingsResponse> {
  /**
   * @generated from field: api.commons.org.AuthConnectionSettings settings = 1;
   */
  settings?: AuthConnectionSettings;

  constructor(data?: PartialMessage<GetAuthConnectionSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.GetAuthConnectionSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConnectionSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConnectionSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConnectionSettingsResponse;

  static equals(a: GetAuthConnectionSettingsResponse | PlainMessage<GetAuthConnectionSettingsResponse> | undefined, b: GetAuthConnectionSettingsResponse | PlainMessage<GetAuthConnectionSettingsResponse> | undefined): boolean;
}

/**
 * Request message for the GetAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionRequest
 */
export declare class GetAuthConnectionRequest extends Message<GetAuthConnectionRequest> {
  /**
   * The id of the connetion to retrieve.
   *
   * @generated from field: string connection_id = 1;
   */
  connectionId: string;

  constructor(data?: PartialMessage<GetAuthConnectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.GetAuthConnectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConnectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConnectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConnectionRequest;

  static equals(a: GetAuthConnectionRequest | PlainMessage<GetAuthConnectionRequest> | undefined, b: GetAuthConnectionRequest | PlainMessage<GetAuthConnectionRequest> | undefined): boolean;
}

/**
 * Response message for the GetAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.GetAuthConnectionResponse
 */
export declare class GetAuthConnectionResponse extends Message<GetAuthConnectionResponse> {
  /**
   * @generated from field: api.commons.org.AuthConnectionSettings settings = 1;
   */
  settings?: AuthConnectionSettings;

  constructor(data?: PartialMessage<GetAuthConnectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.GetAuthConnectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthConnectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthConnectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthConnectionResponse;

  static equals(a: GetAuthConnectionResponse | PlainMessage<GetAuthConnectionResponse> | undefined, b: GetAuthConnectionResponse | PlainMessage<GetAuthConnectionResponse> | undefined): boolean;
}

/**
 * Request message for the DeleteAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.DeleteAuthConnectionRequest
 */
export declare class DeleteAuthConnectionRequest extends Message<DeleteAuthConnectionRequest> {
  /**
   * @generated from field: string connection_id = 1;
   */
  connectionId: string;

  constructor(data?: PartialMessage<DeleteAuthConnectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.DeleteAuthConnectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAuthConnectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAuthConnectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAuthConnectionRequest;

  static equals(a: DeleteAuthConnectionRequest | PlainMessage<DeleteAuthConnectionRequest> | undefined, b: DeleteAuthConnectionRequest | PlainMessage<DeleteAuthConnectionRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteAuthConnection rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.DeleteAuthConnectionResponse
 */
export declare class DeleteAuthConnectionResponse extends Message<DeleteAuthConnectionResponse> {
  constructor(data?: PartialMessage<DeleteAuthConnectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.DeleteAuthConnectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAuthConnectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAuthConnectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAuthConnectionResponse;

  static equals(a: DeleteAuthConnectionResponse | PlainMessage<DeleteAuthConnectionResponse> | undefined, b: DeleteAuthConnectionResponse | PlainMessage<DeleteAuthConnectionResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateAuthConnectionSecret rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest
 */
export declare class UpdateAuthConnectionSecretRequest extends Message<UpdateAuthConnectionSecretRequest> {
  /**
   * the connection that will be updated.
   *
   * @generated from field: string connection_id = 1;
   */
  connectionId: string;

  /**
   * A secret associated with the provider.
   *
   * @generated from field: string client_secret = 2;
   */
  clientSecret: string;

  /**
   * OPTIONAL: The date the secret will expire.
   *
   * @generated from field: api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest.SecretExpiration secret_expiration = 3;
   */
  secretExpiration?: UpdateAuthConnectionSecretRequest_SecretExpiration;

  constructor(data?: PartialMessage<UpdateAuthConnectionSecretRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAuthConnectionSecretRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretRequest;

  static equals(a: UpdateAuthConnectionSecretRequest | PlainMessage<UpdateAuthConnectionSecretRequest> | undefined, b: UpdateAuthConnectionSecretRequest | PlainMessage<UpdateAuthConnectionSecretRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest.SecretExpiration
 */
export declare class UpdateAuthConnectionSecretRequest_SecretExpiration extends Message<UpdateAuthConnectionSecretRequest_SecretExpiration> {
  /**
   * @generated from field: google.protobuf.Timestamp date = 1;
   */
  date?: Timestamp;

  constructor(data?: PartialMessage<UpdateAuthConnectionSecretRequest_SecretExpiration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretRequest.SecretExpiration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAuthConnectionSecretRequest_SecretExpiration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretRequest_SecretExpiration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretRequest_SecretExpiration;

  static equals(a: UpdateAuthConnectionSecretRequest_SecretExpiration | PlainMessage<UpdateAuthConnectionSecretRequest_SecretExpiration> | undefined, b: UpdateAuthConnectionSecretRequest_SecretExpiration | PlainMessage<UpdateAuthConnectionSecretRequest_SecretExpiration> | undefined): boolean;
}

/**
 * Response message for the UpdateAuthConnectionSecret rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretResponse
 */
export declare class UpdateAuthConnectionSecretResponse extends Message<UpdateAuthConnectionSecretResponse> {
  constructor(data?: PartialMessage<UpdateAuthConnectionSecretResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.UpdateAuthConnectionSecretResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAuthConnectionSecretResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAuthConnectionSecretResponse;

  static equals(a: UpdateAuthConnectionSecretResponse | PlainMessage<UpdateAuthConnectionSecretResponse> | undefined, b: UpdateAuthConnectionSecretResponse | PlainMessage<UpdateAuthConnectionSecretResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateAuthConnectionGroups rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsRequest
 */
export declare class UpdateAuthConnectionGroupsRequest extends Message<UpdateAuthConnectionGroupsRequest> {
  /**
   * The default group. This group is assigned to all users
   * that don't match any custom groups.
   *
   * @generated from field: api.commons.org.GroupItem default_group = 1;
   */
  defaultGroup?: GroupItem;

  /**
   * Custom groups. These groups are assigned to users that belong
   * to groups in the sso provider with the same name.
   *
   * @generated from field: repeated api.commons.org.GroupItem custom_groups = 2;
   */
  customGroups: GroupItem[];

  /**
   * the connection that will be updated.
   *
   * @generated from field: string connection_id = 3;
   */
  connectionId: string;

  constructor(data?: PartialMessage<UpdateAuthConnectionGroupsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAuthConnectionGroupsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAuthConnectionGroupsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAuthConnectionGroupsRequest;

  static equals(a: UpdateAuthConnectionGroupsRequest | PlainMessage<UpdateAuthConnectionGroupsRequest> | undefined, b: UpdateAuthConnectionGroupsRequest | PlainMessage<UpdateAuthConnectionGroupsRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateAuthConnectionGroups rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsResponse
 */
export declare class UpdateAuthConnectionGroupsResponse extends Message<UpdateAuthConnectionGroupsResponse> {
  constructor(data?: PartialMessage<UpdateAuthConnectionGroupsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.UpdateAuthConnectionGroupsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAuthConnectionGroupsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAuthConnectionGroupsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAuthConnectionGroupsResponse;

  static equals(a: UpdateAuthConnectionGroupsResponse | PlainMessage<UpdateAuthConnectionGroupsResponse> | undefined, b: UpdateAuthConnectionGroupsResponse | PlainMessage<UpdateAuthConnectionGroupsResponse> | undefined): boolean;
}

/**
 * Request message for the ListAuthConnectionIds rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.ListAuthConnectionIdsRequest
 */
export declare class ListAuthConnectionIdsRequest extends Message<ListAuthConnectionIdsRequest> {
  constructor(data?: PartialMessage<ListAuthConnectionIdsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.ListAuthConnectionIdsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAuthConnectionIdsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsRequest;

  static equals(a: ListAuthConnectionIdsRequest | PlainMessage<ListAuthConnectionIdsRequest> | undefined, b: ListAuthConnectionIdsRequest | PlainMessage<ListAuthConnectionIdsRequest> | undefined): boolean;
}

/**
 * Response message for the ListAuthConnectionIds rpc.
 *
 * @generated from message api.v1alpha1.org.authconnection.ListAuthConnectionIdsResponse
 */
export declare class ListAuthConnectionIdsResponse extends Message<ListAuthConnectionIdsResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.authconnection.ListAuthConnectionIdsResponse.Connection connections = 1;
   */
  connections: ListAuthConnectionIdsResponse_Connection[];

  constructor(data?: PartialMessage<ListAuthConnectionIdsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.ListAuthConnectionIdsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAuthConnectionIdsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsResponse;

  static equals(a: ListAuthConnectionIdsResponse | PlainMessage<ListAuthConnectionIdsResponse> | undefined, b: ListAuthConnectionIdsResponse | PlainMessage<ListAuthConnectionIdsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.authconnection.ListAuthConnectionIdsResponse.Connection
 */
export declare class ListAuthConnectionIdsResponse_Connection extends Message<ListAuthConnectionIdsResponse_Connection> {
  /**
   * @generated from field: string auth_connection_id = 1;
   */
  authConnectionId: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  constructor(data?: PartialMessage<ListAuthConnectionIdsResponse_Connection>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.authconnection.ListAuthConnectionIdsResponse.Connection";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAuthConnectionIdsResponse_Connection;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsResponse_Connection;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAuthConnectionIdsResponse_Connection;

  static equals(a: ListAuthConnectionIdsResponse_Connection | PlainMessage<ListAuthConnectionIdsResponse_Connection> | undefined, b: ListAuthConnectionIdsResponse_Connection | PlainMessage<ListAuthConnectionIdsResponse_Connection> | undefined): boolean;
}

