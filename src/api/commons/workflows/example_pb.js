// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/workflows/example.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.workflows.NodePrint
 */
export const NodePrint = proto3.makeMessageType(
  "api.commons.workflows.NodePrint",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * sets the diceValue property to a random number between min and max
 *
 * @generated from message api.commons.workflows.NodeRandom
 */
export const NodeRandom = proto3.makeMessageType(
  "api.commons.workflows.NodeRandom",
  () => [
    { no: 1, name: "min", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "max", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "single_output", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * input has 1 output
 * reads input from the console
 *
 * @generated from message api.commons.workflows.NodeConsoleInput
 */
export const NodeConsoleInput = proto3.makeMessageType(
  "api.commons.workflows.NodeConsoleInput",
  () => [
    { no: 1, name: "prompt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * store input node stores the text payload of the message in the variable named by store_to
 *
 * @generated from message api.commons.workflows.NodeStoreInput
 */
export const NodeStoreInput = proto3.makeMessageType(
  "api.commons.workflows.NodeStoreInput",
  () => [
    { no: 1, name: "store_to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * comparator has 3 outputs: smaller, equal, greater
 * the fields are evaluated using JSONata
 *
 * @generated from message api.commons.workflows.NodeComparator
 */
export const NodeComparator = proto3.makeMessageType(
  "api.commons.workflows.NodeComparator",
  () => [
    { no: 1, name: "first_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "second_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.workflows.NodeChatbot
 */
export const NodeChatbot = proto3.makeMessageType(
  "api.commons.workflows.NodeChatbot",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.workflows.DiceDocument
 */
export const DiceDocument = proto3.makeMessageType(
  "api.commons.workflows.DiceDocument",
  () => [
    { no: 1, name: "dice_value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "dice_value_max", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "dice_value_min", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "last_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "variables", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 100, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.workflows.ChatbotDocument
 */
export const ChatbotDocument = proto3.makeMessageType(
  "api.commons.workflows.ChatbotDocument",
  () => [
    { no: 1, name: "in_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "out_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 100, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

