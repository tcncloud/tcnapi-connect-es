// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/workflows/example.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.workflows.NodePrint
 */
export declare class NodePrint extends Message<NodePrint> {
  /**
   * @generated from field: string message = 1;
   */
  message: string;

  constructor(data?: PartialMessage<NodePrint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodePrint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodePrint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodePrint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodePrint;

  static equals(a: NodePrint | PlainMessage<NodePrint> | undefined, b: NodePrint | PlainMessage<NodePrint> | undefined): boolean;
}

/**
 * sets the diceValue property to a random number between min and max
 *
 * @generated from message api.commons.workflows.NodeRandom
 */
export declare class NodeRandom extends Message<NodeRandom> {
  /**
   * @generated from field: int32 min = 1;
   */
  min: number;

  /**
   * @generated from field: int32 max = 2;
   */
  max: number;

  /**
   * @generated from field: bool single_output = 3;
   */
  singleOutput: boolean;

  constructor(data?: PartialMessage<NodeRandom>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeRandom";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeRandom;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeRandom;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeRandom;

  static equals(a: NodeRandom | PlainMessage<NodeRandom> | undefined, b: NodeRandom | PlainMessage<NodeRandom> | undefined): boolean;
}

/**
 * input has 1 output
 * reads input from the console
 *
 * @generated from message api.commons.workflows.NodeConsoleInput
 */
export declare class NodeConsoleInput extends Message<NodeConsoleInput> {
  /**
   * @generated from field: string prompt = 1;
   */
  prompt: string;

  constructor(data?: PartialMessage<NodeConsoleInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeConsoleInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeConsoleInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeConsoleInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeConsoleInput;

  static equals(a: NodeConsoleInput | PlainMessage<NodeConsoleInput> | undefined, b: NodeConsoleInput | PlainMessage<NodeConsoleInput> | undefined): boolean;
}

/**
 * store input node stores the text payload of the message in the variable named by store_to
 *
 * @generated from message api.commons.workflows.NodeStoreInput
 */
export declare class NodeStoreInput extends Message<NodeStoreInput> {
  /**
   * @generated from field: string store_to = 1;
   */
  storeTo: string;

  constructor(data?: PartialMessage<NodeStoreInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeStoreInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeStoreInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeStoreInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeStoreInput;

  static equals(a: NodeStoreInput | PlainMessage<NodeStoreInput> | undefined, b: NodeStoreInput | PlainMessage<NodeStoreInput> | undefined): boolean;
}

/**
 * comparator has 3 outputs: smaller, equal, greater
 * the fields are evaluated using JSONata
 *
 * @generated from message api.commons.workflows.NodeComparator
 */
export declare class NodeComparator extends Message<NodeComparator> {
  /**
   * @generated from field: string first_field = 1;
   */
  firstField: string;

  /**
   * @generated from field: string second_field = 2;
   */
  secondField: string;

  constructor(data?: PartialMessage<NodeComparator>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeComparator";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeComparator;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeComparator;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeComparator;

  static equals(a: NodeComparator | PlainMessage<NodeComparator> | undefined, b: NodeComparator | PlainMessage<NodeComparator> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.NodeChatbot
 */
export declare class NodeChatbot extends Message<NodeChatbot> {
  /**
   * @generated from field: string message = 1;
   */
  message: string;

  constructor(data?: PartialMessage<NodeChatbot>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.NodeChatbot";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeChatbot;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeChatbot;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeChatbot;

  static equals(a: NodeChatbot | PlainMessage<NodeChatbot> | undefined, b: NodeChatbot | PlainMessage<NodeChatbot> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.DiceDocument
 */
export declare class DiceDocument extends Message<DiceDocument> {
  /**
   * @generated from field: int32 dice_value = 1;
   */
  diceValue: number;

  /**
   * @generated from field: int32 dice_value_max = 2;
   */
  diceValueMax: number;

  /**
   * @generated from field: int32 dice_value_min = 3;
   */
  diceValueMin: number;

  /**
   * @generated from field: string last_message = 4;
   */
  lastMessage: string;

  /**
   * @generated from field: map<string, string> variables = 5;
   */
  variables: { [key: string]: string };

  /**
   * @generated from field: string error = 100;
   */
  error: string;

  constructor(data?: PartialMessage<DiceDocument>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.DiceDocument";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DiceDocument;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DiceDocument;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DiceDocument;

  static equals(a: DiceDocument | PlainMessage<DiceDocument> | undefined, b: DiceDocument | PlainMessage<DiceDocument> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.ChatbotDocument
 */
export declare class ChatbotDocument extends Message<ChatbotDocument> {
  /**
   * @generated from field: string in_message = 1;
   */
  inMessage: string;

  /**
   * @generated from field: string out_message = 2;
   */
  outMessage: string;

  /**
   * @generated from field: string error = 100;
   */
  error: string;

  constructor(data?: PartialMessage<ChatbotDocument>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.ChatbotDocument";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatbotDocument;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatbotDocument;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatbotDocument;

  static equals(a: ChatbotDocument | PlainMessage<ChatbotDocument> | undefined, b: ChatbotDocument | PlainMessage<ChatbotDocument> | undefined): boolean;
}

