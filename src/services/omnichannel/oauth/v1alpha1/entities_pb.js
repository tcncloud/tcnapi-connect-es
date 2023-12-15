// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file services/omnichannel/oauth/v1alpha1/entities.proto (package services.omnichannel.oauth.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { ConnectedInboxAuthenticationType } from "../../../../api/commons/omnichannel_pb.js";

/**
 * @generated from message services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest
 */
export const GetConnectedInboxOAuthURLRequest = proto3.makeMessageType(
  "services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLRequest",
  () => [
    { no: 1, name: "authentication_type", kind: "enum", T: proto3.getEnumType(ConnectedInboxAuthenticationType) },
    { no: 2, name: "returning_redirect_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse
 */
export const GetConnectedInboxOAuthURLResponse = proto3.makeMessageType(
  "services.omnichannel.oauth.v1alpha1.GetConnectedInboxOAuthURLResponse",
  () => [
    { no: 1, name: "oauth_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
