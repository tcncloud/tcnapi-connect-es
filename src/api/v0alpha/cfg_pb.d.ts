// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/v0alpha/cfg.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v0alpha.GetConfigReq
 */
export declare class GetConfigReq extends Message<GetConfigReq> {
  /**
   * @generated from field: string region_id = 1;
   */
  regionId: string;

  constructor(data?: PartialMessage<GetConfigReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.GetConfigReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetConfigReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetConfigReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetConfigReq;

  static equals(a: GetConfigReq | PlainMessage<GetConfigReq> | undefined, b: GetConfigReq | PlainMessage<GetConfigReq> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.WebAgent
 */
export declare class WebAgent extends Message<WebAgent> {
  /**
   * @generated from field: api.v0alpha.WebAgent.OpenSips open_sips = 1;
   */
  openSips?: WebAgent_OpenSips;

  /**
   * @generated from field: api.v0alpha.WebAgent.EnginePriority engine_priority = 2;
   */
  enginePriority?: WebAgent_EnginePriority;

  /**
   * @generated from field: int64 log_level = 3;
   */
  logLevel: bigint;

  /**
   * @generated from field: int64 use_stun = 4;
   */
  useStun: bigint;

  /**
   * @generated from field: int64 use_fast_stun = 5;
   */
  useFastStun: bigint;

  /**
   * @generated from field: int64 use_fast_ice = 6;
   */
  useFastIce: bigint;

  /**
   * @generated from field: int64 ice_timeout = 7;
   */
  iceTimeout: bigint;

  /**
   * @generated from field: int64 set_final_codec = 8;
   */
  setFinalCodec: bigint;

  /**
   * @generated from field: int64 use_rport = 9;
   */
  useRport: bigint;

  /**
   * @generated from field: api.v0alpha.WebAgent.Server server = 10;
   */
  server?: WebAgent_Server;

  /**
   * @generated from field: string base_url = 11;
   */
  baseUrl: string;

  /**
   * @generated from field: string stun_server_address = 12;
   */
  stunServerAddress: string;

  constructor(data?: PartialMessage<WebAgent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.WebAgent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebAgent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebAgent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebAgent;

  static equals(a: WebAgent | PlainMessage<WebAgent> | undefined, b: WebAgent | PlainMessage<WebAgent> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.WebAgent.OpenSips
 */
export declare class WebAgent_OpenSips extends Message<WebAgent_OpenSips> {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  constructor(data?: PartialMessage<WebAgent_OpenSips>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.WebAgent.OpenSips";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebAgent_OpenSips;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebAgent_OpenSips;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebAgent_OpenSips;

  static equals(a: WebAgent_OpenSips | PlainMessage<WebAgent_OpenSips> | undefined, b: WebAgent_OpenSips | PlainMessage<WebAgent_OpenSips> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.WebAgent.EnginePriority
 */
export declare class WebAgent_EnginePriority extends Message<WebAgent_EnginePriority> {
  /**
   * @generated from field: int64 java = 1;
   */
  java: bigint;

  /**
   * @generated from field: int64 webrtc = 2;
   */
  webrtc: bigint;

  /**
   * @generated from field: int64 ns = 3;
   */
  ns: bigint;

  /**
   * @generated from field: int64 flash = 4;
   */
  flash: bigint;

  /**
   * @generated from field: int64 app = 5;
   */
  app: bigint;

  /**
   * @generated from field: int64 p2p = 6;
   */
  p2p: bigint;

  /**
   * @generated from field: int64 access_num = 7;
   */
  accessNum: bigint;

  /**
   * @generated from field: int64 native = 8;
   */
  native: bigint;

  constructor(data?: PartialMessage<WebAgent_EnginePriority>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.WebAgent.EnginePriority";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebAgent_EnginePriority;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebAgent_EnginePriority;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebAgent_EnginePriority;

  static equals(a: WebAgent_EnginePriority | PlainMessage<WebAgent_EnginePriority> | undefined, b: WebAgent_EnginePriority | PlainMessage<WebAgent_EnginePriority> | undefined): boolean;
}

/**
 * @generated from message api.v0alpha.WebAgent.Server
 */
export declare class WebAgent_Server extends Message<WebAgent_Server> {
  /**
   * @generated from field: string sip = 1;
   */
  sip: string;

  /**
   * @generated from field: string webrtc = 2;
   */
  webrtc: string;

  constructor(data?: PartialMessage<WebAgent_Server>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v0alpha.WebAgent.Server";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WebAgent_Server;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WebAgent_Server;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WebAgent_Server;

  static equals(a: WebAgent_Server | PlainMessage<WebAgent_Server> | undefined, b: WebAgent_Server | PlainMessage<WebAgent_Server> | undefined): boolean;
}

