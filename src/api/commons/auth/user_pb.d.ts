// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/auth/user.proto (package api.commons.auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * AuthClaims is a proto mapping of the JWT Claims
 *
 * @generated from message api.commons.auth.AuthClaims
 */
export declare class AuthClaims extends Message<AuthClaims> {
  /**
   * AUTH0 user_id
   *
   * @generated from field: string auth0_user_id = 1;
   */
  auth0UserId: string;

  /**
   * ORG user_id
   *
   * @generated from field: string org_user_id = 2;
   */
  orgUserId: string;

  /**
   * ORG ID
   *
   * @generated from field: string org_id = 3;
   */
  orgId: string;

  /**
   * API key used in this request for API-based endpoints
   *
   * @generated from field: string api_key = 4;
   */
  apiKey: string;

  /**
   * ORG Region ID
   *
   * @generated from field: string region_id = 5;
   */
  regionId: string;

  /**
   * ??
   *
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * Impersonation information
   *
   * @generated from field: string impersonate = 7;
   */
  impersonate: string;

  /**
   * P3 Client SID from "client" table
   *
   * @generated from field: int64 client_sid = 1000;
   */
  clientSid: bigint;

  /**
   * P3 Agent SID from "agent" table
   *
   * @generated from field: int64 agent_sid = 1001;
   */
  agentSid: bigint;

  /**
   * Mapped to agent_sid
   *
   * @generated from field: int64 login_sid = 1002;
   */
  loginSid: bigint;

  /**
   * ActiveOrgId is the org being used in behalf of for the api call
   *
   * @generated from field: string active_org_id = 1100;
   */
  activeOrgId: string;

  constructor(data?: PartialMessage<AuthClaims>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.auth.AuthClaims";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthClaims;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthClaims;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthClaims;

  static equals(a: AuthClaims | PlainMessage<AuthClaims> | undefined, b: AuthClaims | PlainMessage<AuthClaims> | undefined): boolean;
}

/**
 * AuthenticatedUser is a proto serialized version of AuthUser. It can be used to pass all AuthUser information towards the backends
 *
 *
 * @generated from message api.commons.auth.AuthenticatedUser
 */
export declare class AuthenticatedUser extends Message<AuthenticatedUser> {
  /**
   * JWT Claims
   *
   * @generated from field: api.commons.auth.AuthClaims claims = 1;
   */
  claims?: AuthClaims;

  constructor(data?: PartialMessage<AuthenticatedUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.auth.AuthenticatedUser";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthenticatedUser;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthenticatedUser;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthenticatedUser;

  static equals(a: AuthenticatedUser | PlainMessage<AuthenticatedUser> | undefined, b: AuthenticatedUser | PlainMessage<AuthenticatedUser> | undefined): boolean;
}
