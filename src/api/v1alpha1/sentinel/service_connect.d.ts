// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/sentinel/service.proto (package api.v1alpha1.sentinel, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SendEventsReq, SendEventsRes } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A service for internal observability utilities.
 *
 * @generated from service api.v1alpha1.sentinel.Sentinel
 */
export declare const Sentinel: {
  readonly typeName: "api.v1alpha1.sentinel.Sentinel",
  readonly methods: {
    /**
     * Send a json blob of ui events and logs.
     *
     * @generated from rpc api.v1alpha1.sentinel.Sentinel.SendEvents
     */
    readonly sendEvents: {
      readonly name: "SendEvents",
      readonly I: typeof SendEventsReq,
      readonly O: typeof SendEventsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

