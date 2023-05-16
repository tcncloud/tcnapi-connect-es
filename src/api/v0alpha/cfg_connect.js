// @generated by protoc-gen-connect-es v0.8.6
// @generated from file api/v0alpha/cfg.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConfigReq, WebAgent } from "./cfg_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Cfg
 */
export const Cfg = {
  typeName: "api.v0alpha.Cfg",
  methods: {
    /**
     * @generated from rpc api.v0alpha.Cfg.GetWebAgentConfig
     */
    getWebAgentConfig: {
      name: "GetWebAgentConfig",
      I: GetConfigReq,
      O: WebAgent,
      kind: MethodKind.Unary,
    },
  }
};

