// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v0alpha/cfg.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetConfigReq, WebAgent } from "./cfg_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.Cfg
 */
export declare const Cfg: {
  readonly typeName: "api.v0alpha.Cfg",
  readonly methods: {
    /**
     * @generated from rpc api.v0alpha.Cfg.GetWebAgentConfig
     */
    readonly getWebAgentConfig: {
      readonly name: "GetWebAgentConfig",
      readonly I: typeof GetConfigReq,
      readonly O: typeof WebAgent,
      readonly kind: MethodKind.Unary,
    },
  }
};
