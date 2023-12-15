// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/oauth/v1alpha1/entities.proto (package services.omnichannel.oauth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ConnectedInboxAuthenticationType } from "../../../../api/commons/omnichannel_pb.js";

/**
 * @generated from message services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest
 */
export declare class GetConnectedInboxOAuthURLRequest extends Message<GetConnectedInboxOAuthURLRequest> {
  /**
   * @generated from field: api.commons.ConnectedInboxAuthenticationType authentication_type = 1;
   */
  authenticationType: ConnectedInboxAuthenticationType;

  /**
   * @generated from field: string returning_redirect_uri = 2;
   */
  returningRedirectUri: string;

  constructor(data?: PartialMessage<GetConnectedInboxOAuthURLRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectedInboxOAuthURLRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthURLRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthURLRequest;

  static equals(a: GetConnectedInboxOAuthURLRequest | PlainMessage<GetConnectedInboxOAuthURLRequest> | undefined, b: GetConnectedInboxOAuthURLRequest | PlainMessage<GetConnectedInboxOAuthURLRequest> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse
 */
export declare class GetConnectedInboxOAuthURLResponse extends Message<GetConnectedInboxOAuthURLResponse> {
  /**
   * @generated from field: string oauth_url = 1;
   */
  oauthUrl: string;

  constructor(data?: PartialMessage<GetConnectedInboxOAuthURLResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectedInboxOAuthURLResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthURLResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthURLResponse;

  static equals(a: GetConnectedInboxOAuthURLResponse | PlainMessage<GetConnectedInboxOAuthURLResponse> | undefined, b: GetConnectedInboxOAuthURLResponse | PlainMessage<GetConnectedInboxOAuthURLResponse> | undefined): boolean;
}

