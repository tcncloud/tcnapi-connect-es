// Copyright (c) 2019, TCN Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v0alpha/sentinel.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SendEventsReq, SendEventsRes } from "./sentinel_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * A service for internal observability utilities.
 * service UIEventLogging {
 *
 * @generated from service api.v0alpha.Sentinel
 */
export declare const Sentinel: {
  readonly typeName: "api.v0alpha.Sentinel",
  readonly methods: {
    /**
     * Send a json blob of ui events and logs.
     *
     * @generated from rpc api.v0alpha.Sentinel.SendEvents
     */
    readonly sendEvents: {
      readonly name: "SendEvents",
      readonly I: typeof SendEventsReq,
      readonly O: typeof SendEventsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

