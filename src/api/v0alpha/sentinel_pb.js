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

// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/sentinel.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Level } from "../commons/logging_pb.js";

/**
 * @generated from message api.v0alpha.SentinelEvent
 */
export const SentinelEvent = proto3.makeMessageType(
  "api.v0alpha.SentinelEvent",
  () => [
    { no: 1, name: "log_event", kind: "message", T: LogEvent, oneof: "event" },
  ],
);

/**
 * @generated from message api.v0alpha.LogEvent
 */
export const LogEvent = proto3.makeMessageType(
  "api.v0alpha.LogEvent",
  () => [
    { no: 3, name: "trace_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "stack_trace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "timestamp", kind: "message", T: Timestamp },
    { no: 9, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 10, name: "severity", kind: "enum", T: proto3.getEnumType(Level) },
  ],
);

/**
 * @generated from message api.v0alpha.SendEventsReq
 */
export const SendEventsReq = proto3.makeMessageType(
  "api.v0alpha.SendEventsReq",
  () => [
    { no: 1, name: "events", kind: "message", T: SentinelEvent, repeated: true },
  ],
);

/**
 * @generated from message api.v0alpha.SendEventsRes
 */
export const SendEventsRes = proto3.makeMessageType(
  "api.v0alpha.SendEventsRes",
  [],
);

