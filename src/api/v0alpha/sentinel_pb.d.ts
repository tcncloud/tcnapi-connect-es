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

// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v0alpha/sentinel.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Level } from "../commons/logging_pb.js";

/**
 * sentinel event
 *
 * @generated from message api.v0alpha.SentinelEvent
 */
export declare class SentinelEvent extends Message<SentinelEvent> {
  /**
   * @generated from oneof api.v0alpha.SentinelEvent.event
   */
  event: {
    /**
     * @generated from field: api.v0alpha.LogEvent log_event = 1;
     */
    value: LogEvent;
    case: "logEvent";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SentinelEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SentinelEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SentinelEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SentinelEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SentinelEvent;

  static equals(a: SentinelEvent | PlainMessage<SentinelEvent> | undefined, b: SentinelEvent | PlainMessage<SentinelEvent> | undefined): boolean;
}

/**
 * log events details to be sent
 *
 * @generated from message api.v0alpha.LogEvent
 */
export declare class LogEvent extends Message<LogEvent> {
  /**
   * @generated from field: string trace_id = 3;
   */
  traceId: string;

  /**
   * the browsers session id
   *
   * @generated from field: string session_id = 4;
   */
  sessionId: string;

  /**
   * @generated from field: string message = 5;
   */
  message: string;

  /**
   * the browsers current uri
   *
   * @generated from field: string location = 6;
   */
  location: string;

  /**
   * @generated from field: string stack_trace = 7;
   */
  stackTrace: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 8;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: map<string, string> metadata = 9;
   */
  metadata: { [key: string]: string };

  /**
   * @generated from field: api.commons.Level severity = 10;
   */
  severity: Level;

  constructor(data?: PartialMessage<LogEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.LogEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogEvent;

  static equals(a: LogEvent | PlainMessage<LogEvent> | undefined, b: LogEvent | PlainMessage<LogEvent> | undefined): boolean;
}

/**
 * request to sentinel send events
 *
 * @generated from message api.v0alpha.SendEventsReq
 */
export declare class SendEventsReq extends Message<SendEventsReq> {
  /**
   * @generated from field: repeated api.v0alpha.SentinelEvent events = 1;
   */
  events: SentinelEvent[];

  constructor(data?: PartialMessage<SendEventsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SendEventsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendEventsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendEventsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendEventsReq;

  static equals(a: SendEventsReq | PlainMessage<SendEventsReq> | undefined, b: SendEventsReq | PlainMessage<SendEventsReq> | undefined): boolean;
}

/**
 * response to sentinel send events
 *
 * @generated from message api.v0alpha.SendEventsRes
 */
export declare class SendEventsRes extends Message<SendEventsRes> {
  constructor(data?: PartialMessage<SendEventsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.SendEventsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendEventsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendEventsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendEventsRes;

  static equals(a: SendEventsRes | PlainMessage<SendEventsRes> | undefined, b: SendEventsRes | PlainMessage<SendEventsRes> | undefined): boolean;
}

