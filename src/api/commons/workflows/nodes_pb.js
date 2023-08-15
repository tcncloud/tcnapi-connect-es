// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/workflows/nodes.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { NodeChatbot, NodeComparator, NodeConsoleInput, NodePrint, NodeRandom, NodeStoreInput } from "./example_pb.js";
import { OmniNodeDecision, OmniNodeError, OmniNodeOptions, OmniNodePrompt, OmniNodeSendMessage, OmniNodeSetSkill, OmniNodeStore, OmniNodeToAgent } from "./omni_pb.js";
import { OmniBotNodeTestEnd, OmniBotNodeTestStart, OmniBotNodeTestStep } from "./omni_bot_pb.js";
import { TestBotNodeTestEnd, TestBotNodeTestStart, TestBotNodeTestStep } from "./test_bot_pb.js";

/**
 * A node is a single step in a flow
 *
 * @generated from message api.commons.workflows.NodeDefinition
 */
export const NodeDefinition = proto3.makeMessageType(
  "api.commons.workflows.NodeDefinition",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "outputs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "error_node_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 101, name: "print", kind: "message", T: NodePrint, oneof: "definition" },
    { no: 102, name: "random", kind: "message", T: NodeRandom, oneof: "definition" },
    { no: 103, name: "console_input", kind: "message", T: NodeConsoleInput, oneof: "definition" },
    { no: 104, name: "comparator", kind: "message", T: NodeComparator, oneof: "definition" },
    { no: 105, name: "store_input", kind: "message", T: NodeStoreInput, oneof: "definition" },
    { no: 1000, name: "chatbot", kind: "message", T: NodeChatbot, oneof: "definition" },
    { no: 201, name: "omni_prompt", kind: "message", T: OmniNodePrompt, oneof: "definition" },
    { no: 202, name: "omni_set_skill", kind: "message", T: OmniNodeSetSkill, oneof: "definition" },
    { no: 203, name: "omni_to_agent", kind: "message", T: OmniNodeToAgent, oneof: "definition" },
    { no: 204, name: "omni_error", kind: "message", T: OmniNodeError, oneof: "definition" },
    { no: 205, name: "omni_options", kind: "message", T: OmniNodeOptions, oneof: "definition" },
    { no: 206, name: "omni_send_message", kind: "message", T: OmniNodeSendMessage, oneof: "definition" },
    { no: 207, name: "omni_store", kind: "message", T: OmniNodeStore, oneof: "definition" },
    { no: 208, name: "omni_decision", kind: "message", T: OmniNodeDecision, oneof: "definition" },
    { no: 301, name: "omni_bot_test_start", kind: "message", T: OmniBotNodeTestStart, oneof: "definition" },
    { no: 302, name: "omni_bot_test_step", kind: "message", T: OmniBotNodeTestStep, oneof: "definition" },
    { no: 303, name: "omni_bot_test_end", kind: "message", T: OmniBotNodeTestEnd, oneof: "definition" },
    { no: 401, name: "test_bot_test_start", kind: "message", T: TestBotNodeTestStart, oneof: "definition" },
    { no: 402, name: "test_bot_test_step", kind: "message", T: TestBotNodeTestStep, oneof: "definition" },
    { no: 403, name: "test_bot_test_end", kind: "message", T: TestBotNodeTestEnd, oneof: "definition" },
  ],
);

