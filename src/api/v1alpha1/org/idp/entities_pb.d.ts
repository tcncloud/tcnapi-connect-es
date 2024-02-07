// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/idp/entities.proto (package api.v1alpha1.org.idp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { IdpClient } from "../../../commons/org/idp_pb.js";

/**
 * CreateClientReq is a request to make a client.
 *
 * @generated from message api.v1alpha1.org.idp.CreateClientReq
 */
export declare class CreateClientReq extends Message<CreateClientReq> {
  /**
   * @generated from field: api.commons.org.IdpClient client = 1;
   */
  client?: IdpClient;

  constructor(data?: PartialMessage<CreateClientReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.CreateClientReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateClientReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateClientReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateClientReq;

  static equals(a: CreateClientReq | PlainMessage<CreateClientReq> | undefined, b: CreateClientReq | PlainMessage<CreateClientReq> | undefined): boolean;
}

/**
 * CreateClientResp returns the response from creating a client.
 *
 * @generated from message api.v1alpha1.org.idp.CreateClientResp
 */
export declare class CreateClientResp extends Message<CreateClientResp> {
  /**
   * @generated from field: bool already_exists = 1;
   */
  alreadyExists: boolean;

  /**
   * @generated from field: api.commons.org.IdpClient client = 2;
   */
  client?: IdpClient;

  constructor(data?: PartialMessage<CreateClientResp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.CreateClientResp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateClientResp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateClientResp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateClientResp;

  static equals(a: CreateClientResp | PlainMessage<CreateClientResp> | undefined, b: CreateClientResp | PlainMessage<CreateClientResp> | undefined): boolean;
}

/**
 * DeleteClientReq is a request to delete a client.
 *
 * @generated from message api.v1alpha1.org.idp.DeleteClientReq
 */
export declare class DeleteClientReq extends Message<DeleteClientReq> {
  /**
   * The ID of the client.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<DeleteClientReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.DeleteClientReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteClientReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteClientReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteClientReq;

  static equals(a: DeleteClientReq | PlainMessage<DeleteClientReq> | undefined, b: DeleteClientReq | PlainMessage<DeleteClientReq> | undefined): boolean;
}

/**
 * DeleteClientResp determines if the client is deleted successfully.
 *
 * @generated from message api.v1alpha1.org.idp.DeleteClientResp
 */
export declare class DeleteClientResp extends Message<DeleteClientResp> {
  /**
   * @generated from field: bool not_found = 1;
   */
  notFound: boolean;

  constructor(data?: PartialMessage<DeleteClientResp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.DeleteClientResp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteClientResp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteClientResp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteClientResp;

  static equals(a: DeleteClientResp | PlainMessage<DeleteClientResp> | undefined, b: DeleteClientResp | PlainMessage<DeleteClientResp> | undefined): boolean;
}

/**
 * UpdateClientReq is a request to update an existing client.
 *
 * @generated from message api.v1alpha1.org.idp.UpdateClientReq
 */
export declare class UpdateClientReq extends Message<UpdateClientReq> {
  /**
   * @generated from field: api.commons.org.IdpClient client = 1;
   */
  client?: IdpClient;

  constructor(data?: PartialMessage<UpdateClientReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.UpdateClientReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateClientReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateClientReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateClientReq;

  static equals(a: UpdateClientReq | PlainMessage<UpdateClientReq> | undefined, b: UpdateClientReq | PlainMessage<UpdateClientReq> | undefined): boolean;
}

/**
 * UpdateClientResp returns the response from updating a client.
 *
 * @generated from message api.v1alpha1.org.idp.UpdateClientResp
 */
export declare class UpdateClientResp extends Message<UpdateClientResp> {
  /**
   * @generated from field: bool not_found = 1;
   */
  notFound: boolean;

  constructor(data?: PartialMessage<UpdateClientResp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.UpdateClientResp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateClientResp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateClientResp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateClientResp;

  static equals(a: UpdateClientResp | PlainMessage<UpdateClientResp> | undefined, b: UpdateClientResp | PlainMessage<UpdateClientResp> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.idp.ListClientsReq
 */
export declare class ListClientsReq extends Message<ListClientsReq> {
  constructor(data?: PartialMessage<ListClientsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.ListClientsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListClientsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListClientsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListClientsReq;

  static equals(a: ListClientsReq | PlainMessage<ListClientsReq> | undefined, b: ListClientsReq | PlainMessage<ListClientsReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.idp.ListClientsResp
 */
export declare class ListClientsResp extends Message<ListClientsResp> {
  /**
   * @generated from field: repeated api.commons.org.IdpClient clients = 1;
   */
  clients: IdpClient[];

  constructor(data?: PartialMessage<ListClientsResp>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.idp.ListClientsResp";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListClientsResp;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListClientsResp;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListClientsResp;

  static equals(a: ListClientsResp | PlainMessage<ListClientsResp> | undefined, b: ListClientsResp | PlainMessage<ListClientsResp> | undefined): boolean;
}

