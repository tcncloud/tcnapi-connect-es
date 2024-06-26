// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/org/auth_token.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * AuthToken is an authentication token for a user
 *
 * @generated from message api.commons.org.AuthToken
 */
export declare class AuthToken extends Message<AuthToken> {
  /**
   * the raw token value
   *
   * @generated from field: string token = 1;
   */
  token: string;

  /**
   * user the token belongs to
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * org the user and token belong to
   *
   * @generated from field: string org_id = 3;
   */
  orgId: string;

  /**
   * tokens expiration
   *
   * @generated from field: google.protobuf.Timestamp expiration = 4;
   */
  expiration?: Timestamp;

  constructor(data?: PartialMessage<AuthToken>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.AuthToken";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthToken;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthToken;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthToken;

  static equals(a: AuthToken | PlainMessage<AuthToken> | undefined, b: AuthToken | PlainMessage<AuthToken> | undefined): boolean;
}

