// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/commons/workflows/flows.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message as Message$1, proto3 } from "@bufbuild/protobuf";
import type { NodeDefinition } from "./nodes_pb.js";

/**
 * The overarching object that defines a flow
 *
 * @generated from message api.commons.workflows.FlowDefinition
 */
export declare class FlowDefinition extends Message$1<FlowDefinition> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: string entry_node_id = 4;
   */
  entryNodeId: string;

  /**
   * @generated from field: repeated api.commons.workflows.NodeDefinition nodes = 10;
   */
  nodes: NodeDefinition[];

  /**
   * @generated from field: string error_node_id = 11;
   */
  errorNodeId: string;

  constructor(data?: PartialMessage<FlowDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.FlowDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlowDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlowDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlowDefinition;

  static equals(a: FlowDefinition | PlainMessage<FlowDefinition> | undefined, b: FlowDefinition | PlainMessage<FlowDefinition> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.FlowState
 */
export declare class FlowState extends Message$1<FlowState> {
  /**
   * @generated from field: api.commons.workflows.Envelope envelope = 1;
   */
  envelope?: Envelope;

  /**
   * @generated from field: api.commons.workflows.State state = 2;
   */
  state?: State;

  /**
   * @generated from field: api.commons.workflows.Payload payload = 100;
   */
  payload?: Payload;

  constructor(data?: PartialMessage<FlowState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.FlowState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FlowState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FlowState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FlowState;

  static equals(a: FlowState | PlainMessage<FlowState> | undefined, b: FlowState | PlainMessage<FlowState> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.Envelope
 */
export declare class Envelope extends Message$1<Envelope> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  constructor(data?: PartialMessage<Envelope>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.Envelope";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Envelope;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Envelope;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Envelope;

  static equals(a: Envelope | PlainMessage<Envelope> | undefined, b: Envelope | PlainMessage<Envelope> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.State
 */
export declare class State extends Message$1<State> {
  /**
   * @generated from field: bool flow_done = 1;
   */
  flowDone: boolean;

  /**
   * @generated from field: string flow_id = 2;
   */
  flowId: string;

  /**
   * @generated from field: string current_node = 3;
   */
  currentNode: string;

  /**
   * @generated from field: string error = 4;
   */
  error: string;

  constructor(data?: PartialMessage<State>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.State";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): State;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): State;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): State;

  static equals(a: State | PlainMessage<State> | undefined, b: State | PlainMessage<State> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.Payload
 */
export declare class Payload extends Message$1<Payload> {
  /**
   * @generated from field: string data = 1;
   */
  data: string;

  /**
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payload;

  static equals(a: Payload | PlainMessage<Payload> | undefined, b: Payload | PlainMessage<Payload> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.Message
 */
export declare class Message extends Message$1<Message> {
  /**
   * @generated from oneof api.commons.workflows.Message.payload
   */
  payload: {
    /**
     * @generated from field: string text = 1;
     */
    value: string;
    case: "text";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Message>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.Message";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Message;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Message;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Message;

  static equals(a: Message | PlainMessage<Message> | undefined, b: Message | PlainMessage<Message> | undefined): boolean;
}

