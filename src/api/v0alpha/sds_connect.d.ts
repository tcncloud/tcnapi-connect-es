// @generated by protoc-gen-connect-es v0.8.6
// @generated from file api/v0alpha/sds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CallObject, GetAgentResponseDataReq, GetAgentResponseDataRes, GetCallReq, UpdateAgentResponseDataReq, UpdateAgentResponseDataRes, UpdateVoicemailBoxReq, UpdateVoicemailBoxRes } from "./sds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Sds
 */
export declare const Sds: {
  readonly typeName: "api.v0alpha.Sds",
  readonly methods: {
    /**
     * Gets the agent_response_data field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.GetAgentResponseData
     */
    readonly getAgentResponseData: {
      readonly name: "GetAgentResponseData",
      readonly I: typeof GetAgentResponseDataReq,
      readonly O: typeof GetAgentResponseDataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets a document from the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.GetCall
     */
    readonly getCall: {
      readonly name: "GetCall",
      readonly I: typeof GetCallReq,
      readonly O: typeof CallObject,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates the agent_response_data field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.UpdateAgentResponseData
     */
    readonly updateAgentResponseData: {
      readonly name: "UpdateAgentResponseData",
      readonly I: typeof UpdateAgentResponseDataReq,
      readonly O: typeof UpdateAgentResponseDataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates the voicemail_box field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.UpdateVoicemailBox
     */
    readonly updateVoicemailBox: {
      readonly name: "UpdateVoicemailBox",
      readonly I: typeof UpdateVoicemailBoxReq,
      readonly O: typeof UpdateVoicemailBoxRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

