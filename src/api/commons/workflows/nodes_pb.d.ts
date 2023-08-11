// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/workflows/nodes.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { NodeChatbot, NodeComparator, NodeConsoleInput, NodePrint, NodeRandom, NodeStoreInput } from "./example_pb.js";
import type { OmniNodeCompare, OmniNodeError, OmniNodeInject, OmniNodePrompt, OmniNodeSendMessage, OmniNodeSetSkill, OmniNodeStore, OmniNodeToAgent } from "./omni_pb.js";
import type { OmniBotNodeTestEnd, OmniBotNodeTestStart, OmniBotNodeTestStep } from "./omni_bot_pb.js";
import type { TestBotNodeTestEnd, TestBotNodeTestStart, TestBotNodeTestStep } from "./test_bot_pb.js";

/**
 * A node is a single step in a flow
 *
 * @generated from message api.commons.workflows.NodeDefinition
 */
export declare class NodeDefinition extends Message<NodeDefinition> {
  /**
   * common fields for a node
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * @generated from field: repeated string outputs = 5;
   */
  outputs: string[];

  /**
   * @generated from field: string error_node_id = 6;
   */
  errorNodeId: string;

  /**
   * specific node definition
   *
   * @generated from oneof api.commons.workflows.NodeDefinition.definition
   */
  definition: {
    /**
     * @generated from field: api.commons.workflows.NodePrint print = 101;
     */
    value: NodePrint;
    case: "print";
  } | {
    /**
     * @generated from field: api.commons.workflows.NodeRandom random = 102;
     */
    value: NodeRandom;
    case: "random";
  } | {
    /**
     * @generated from field: api.commons.workflows.NodeConsoleInput console_input = 103;
     */
    value: NodeConsoleInput;
    case: "consoleInput";
  } | {
    /**
     * @generated from field: api.commons.workflows.NodeComparator comparator = 104;
     */
    value: NodeComparator;
    case: "comparator";
  } | {
    /**
     * @generated from field: api.commons.workflows.NodeStoreInput store_input = 105;
     */
    value: NodeStoreInput;
    case: "storeInput";
  } | {
    /**
     * @generated from field: api.commons.workflows.NodeChatbot chatbot = 1000;
     */
    value: NodeChatbot;
    case: "chatbot";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodePrompt omni_prompt = 201;
     */
    value: OmniNodePrompt;
    case: "omniPrompt";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeSetSkill omni_set_skill = 202;
     */
    value: OmniNodeSetSkill;
    case: "omniSetSkill";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeToAgent omni_to_agent = 203;
     */
    value: OmniNodeToAgent;
    case: "omniToAgent";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeError omni_error = 204;
     */
    value: OmniNodeError;
    case: "omniError";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeInject omni_inject = 205;
     */
    value: OmniNodeInject;
    case: "omniInject";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeSendMessage omni_send_message = 206;
     */
    value: OmniNodeSendMessage;
    case: "omniSendMessage";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeStore omni_store = 207;
     */
    value: OmniNodeStore;
    case: "omniStore";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniNodeCompare omni_compare = 208;
     */
    value: OmniNodeCompare;
    case: "omniCompare";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniBotNodeTestStart omni_bot_test_start = 301 [deprecated = true];
     * @deprecated
     */
    value: OmniBotNodeTestStart;
    case: "omniBotTestStart";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniBotNodeTestStep omni_bot_test_step = 302 [deprecated = true];
     * @deprecated
     */
    value: OmniBotNodeTestStep;
    case: "omniBotTestStep";
  } | {
    /**
     * @generated from field: api.commons.workflows.OmniBotNodeTestEnd omni_bot_test_end = 303 [deprecated = true];
     * @deprecated
     */
    value: OmniBotNodeTestEnd;
    case: "omniBotTestEnd";
  } | {
    /**
     * @generated from field: api.commons.workflows.TestBotNodeTestStart test_bot_test_start = 401;
     */
    value: TestBotNodeTestStart;
    case: "testBotTestStart";
  } | {
    /**
     * @generated from field: api.commons.workflows.TestBotNodeTestStep test_bot_test_step = 402;
     */
    value: TestBotNodeTestStep;
    case: "testBotTestStep";
  } | {
    /**
     * @generated from field: api.commons.workflows.TestBotNodeTestEnd test_bot_test_end = 403;
     */
    value: TestBotNodeTestEnd;
    case: "testBotTestEnd";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<NodeDefinition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeDefinition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeDefinition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeDefinition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeDefinition;

  static equals(a: NodeDefinition | PlainMessage<NodeDefinition> | undefined, b: NodeDefinition | PlainMessage<NodeDefinition> | undefined): boolean;
}

