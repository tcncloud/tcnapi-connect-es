// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/omnichannel/oauth/v1alpha1/service.proto (package services.omnichannel.oauth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConnectedInboxOAuthSpecificationsRequest, GetConnectedInboxOAuthSpecificationsResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service services.omnichannel.oauth.v1alpha1.OauthService
 */
export declare const OauthService: {
  readonly typeName: "services.omnichannel.oauth.v1alpha1.OauthService",
  readonly methods: {
    /**
     * @generated from rpc services.omnichannel.oauth.v1alpha1.OauthService.GetConnectedInboxOAuthSpecifications
     */
    readonly getConnectedInboxOAuthSpecifications: {
      readonly name: "GetConnectedInboxOAuthSpecifications",
      readonly I: typeof GetConnectedInboxOAuthSpecificationsRequest,
      readonly O: typeof GetConnectedInboxOAuthSpecificationsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

