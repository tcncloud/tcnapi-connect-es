// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/org/idp.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * IdpClient represents an idp client.
 *
 * @generated from message api.commons.org.IdpClient
 */
export declare class IdpClient extends Message<IdpClient> {
  /**
   * The id of the client.
   *
   * @generated from field: string idp_client_id = 1;
   */
  idpClientId: string;

  /**
   * The secret of the client.
   * This field cannot be updated after creation.
   *
   * @generated from field: string secret = 2;
   */
  secret: string;

  /**
   * The clients allowed redirect uris.
   *
   * @generated from field: repeated string redirect_uris = 3;
   */
  redirectUris: string[];

  /**
   * The clients trusted peers
   *
   * @generated from field: repeated string trusted_peers = 4;
   */
  trustedPeers: string[];

  /**
   * The name of the client.
   *
   * @generated from field: string name = 5;
   */
  name: string;

  constructor(data?: PartialMessage<IdpClient>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.IdpClient";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdpClient;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdpClient;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdpClient;

  static equals(a: IdpClient | PlainMessage<IdpClient> | undefined, b: IdpClient | PlainMessage<IdpClient> | undefined): boolean;
}
