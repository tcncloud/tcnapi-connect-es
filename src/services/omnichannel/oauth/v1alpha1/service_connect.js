// @generated by protoc-gen-connect-es v0.13.0
// @generated from file services/omnichannel/oauth/v1alpha1/service.proto (package services.omnichannel.oauth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConnectedInboxOAuthURLRequest, GetConnectedInboxOAuthURLResponse } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service services.omnichannel.oauth.v1alpha1.OauthService
 */
export const OauthService = {
  typeName: "services.omnichannel.oauth.v1alpha1.OauthService",
  methods: {
    /**
     * @generated from rpc services.omnichannel.oauth.v1alpha1.OauthService.GetConnectedInboxOAuthURL
     */
    getConnectedInboxOAuthURL: {
      name: "GetConnectedInboxOAuthURL",
      I: GetConnectedInboxOAuthURLRequest,
      O: GetConnectedInboxOAuthURLResponse,
      kind: MethodKind.Unary,
    },
  }
};

