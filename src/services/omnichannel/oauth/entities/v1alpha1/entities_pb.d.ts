// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/oauth/entities/v1alpha1/entities.proto (package services.omnichannel.oauth.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ConnectedInboxAuthenticationType } from "../../../../../api/commons/omnichannel_pb.js";

/**
 * @generated from message services.omnichannel.oauth.entities.v1alpha1.GetConnectedInboxOAuthSpecificationsRequest
 */
export declare class GetConnectedInboxOAuthSpecificationsRequest extends Message<GetConnectedInboxOAuthSpecificationsRequest> {
  /**
   * @generated from field: api.commons.ConnectedInboxAuthenticationType authentication_type = 1;
   */
  authenticationType: ConnectedInboxAuthenticationType;

  /**
   * @generated from field: string returning_redirect_uri = 2;
   */
  returningRedirectUri: string;

  constructor(data?: PartialMessage<GetConnectedInboxOAuthSpecificationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.oauth.entities.v1alpha1.GetConnectedInboxOAuthSpecificationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectedInboxOAuthSpecificationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthSpecificationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthSpecificationsRequest;

  static equals(a: GetConnectedInboxOAuthSpecificationsRequest | PlainMessage<GetConnectedInboxOAuthSpecificationsRequest> | undefined, b: GetConnectedInboxOAuthSpecificationsRequest | PlainMessage<GetConnectedInboxOAuthSpecificationsRequest> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.oauth.entities.v1alpha1.GetConnectedInboxOAuthSpecificationsResponse
 */
export declare class GetConnectedInboxOAuthSpecificationsResponse extends Message<GetConnectedInboxOAuthSpecificationsResponse> {
  /**
   * @generated from field: string redirect_uri = 1;
   */
  redirectUri: string;

  constructor(data?: PartialMessage<GetConnectedInboxOAuthSpecificationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.oauth.entities.v1alpha1.GetConnectedInboxOAuthSpecificationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConnectedInboxOAuthSpecificationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthSpecificationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConnectedInboxOAuthSpecificationsResponse;

  static equals(a: GetConnectedInboxOAuthSpecificationsResponse | PlainMessage<GetConnectedInboxOAuthSpecificationsResponse> | undefined, b: GetConnectedInboxOAuthSpecificationsResponse | PlainMessage<GetConnectedInboxOAuthSpecificationsResponse> | undefined): boolean;
}

