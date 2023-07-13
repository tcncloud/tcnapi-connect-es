// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v0alpha/sds.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CallObject, GetAgentResponseDataReq, GetAgentResponseDataRes, GetCallReq, UpdateAgentResponseDataReq, UpdateAgentResponseDataRes, UpdateVoicemailBoxReq, UpdateVoicemailBoxRes } from "./sds_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Sds
 */
export const Sds = {
  typeName: "api.v0alpha.Sds",
  methods: {
    /**
     * Gets the agent_response_data field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.GetAgentResponseData
     */
    getAgentResponseData: {
      name: "GetAgentResponseData",
      I: GetAgentResponseDataReq,
      O: GetAgentResponseDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a document from the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.GetCall
     */
    getCall: {
      name: "GetCall",
      I: GetCallReq,
      O: CallObject,
      kind: MethodKind.Unary,
    },
    /**
     * Updates the agent_response_data field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.UpdateAgentResponseData
     */
    updateAgentResponseData: {
      name: "UpdateAgentResponseData",
      I: UpdateAgentResponseDataReq,
      O: UpdateAgentResponseDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * Updates the voicemail_box field for a document in the mongodb calls collection.
     *
     * @generated from rpc api.v0alpha.Sds.UpdateVoicemailBox
     */
    updateVoicemailBox: {
      name: "UpdateVoicemailBox",
      I: UpdateVoicemailBoxReq,
      O: UpdateVoicemailBoxRes,
      kind: MethodKind.Unary,
    },
  }
};

