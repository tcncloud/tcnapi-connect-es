// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/workflows/omni.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.workflows.OmniNodeScrublistAction
 */
export declare enum OmniNodeScrublistAction {
  /**
   * @generated from enum value: ADD = 0;
   */
  ADD = 0,

  /**
   * @generated from enum value: REMOVE = 1;
   */
  REMOVE = 1,
}

/**
 * OmniNodePrompt is the PoC all-in-one version to send a message (optionally displaying options) and store the user input
 *
 * @generated from message api.commons.workflows.OmniNodePrompt
 */
export declare class OmniNodePrompt extends Message<OmniNodePrompt> {
  /**
   * the base message to send
   *
   * @generated from field: string prompt = 1;
   */
  prompt: string;

  /**
   * the name (key in payload) under which to store the user input
   *
   * @generated from field: string store_to = 2;
   */
  storeTo: string;

  /**
   * a list of options to display along with the prompt
   *
   * @generated from field: repeated string options = 3;
   */
  options: string[];

  constructor(data?: PartialMessage<OmniNodePrompt>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodePrompt";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodePrompt;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodePrompt;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodePrompt;

  static equals(a: OmniNodePrompt | PlainMessage<OmniNodePrompt> | undefined, b: OmniNodePrompt | PlainMessage<OmniNodePrompt> | undefined): boolean;
}

/**
 * OmniNodeSendMessage will send a message, displaying options if provided
 *
 * @generated from message api.commons.workflows.OmniNodeSendMessage
 */
export declare class OmniNodeSendMessage extends Message<OmniNodeSendMessage> {
  /**
   * the base message to send
   *
   * @generated from field: string prompt = 1;
   */
  prompt: string;

  /**
   * the list of options to select from as the correct response
   *
   * @generated from field: repeated string options = 2;
   */
  options: string[];

  constructor(data?: PartialMessage<OmniNodeSendMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeSendMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeSendMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeSendMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeSendMessage;

  static equals(a: OmniNodeSendMessage | PlainMessage<OmniNodeSendMessage> | undefined, b: OmniNodeSendMessage | PlainMessage<OmniNodeSendMessage> | undefined): boolean;
}

/**
 * OmniNodeUserInput will store the text value of an incoming message under a given key in the payload
 *
 * @generated from message api.commons.workflows.OmniNodeUserInput
 */
export declare class OmniNodeUserInput extends Message<OmniNodeUserInput> {
  /**
   * the name (key in payload) under which to store the input (e.g. "input_text")
   *
   * @generated from field: string store_id = 1;
   */
  storeId: string;

  constructor(data?: PartialMessage<OmniNodeUserInput>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeUserInput";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeUserInput;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeUserInput;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeUserInput;

  static equals(a: OmniNodeUserInput | PlainMessage<OmniNodeUserInput> | undefined, b: OmniNodeUserInput | PlainMessage<OmniNodeUserInput> | undefined): boolean;
}

/**
 * OmniNodeBranching compares the input against a list of options
 *
 * @generated from message api.commons.workflows.OmniNodeBranching
 */
export declare class OmniNodeBranching extends Message<OmniNodeBranching> {
  /**
   * key of data stored in the payload to compare against the options (likely references an OmniNodeUserInput.store_id)
   *
   * @generated from field: string store_id = 1;
   */
  storeId: string;

  /**
   * the list of options to use for branching
   *
   * @generated from field: repeated string options = 2;
   */
  options: string[];

  constructor(data?: PartialMessage<OmniNodeBranching>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeBranching";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeBranching;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeBranching;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeBranching;

  static equals(a: OmniNodeBranching | PlainMessage<OmniNodeBranching> | undefined, b: OmniNodeBranching | PlainMessage<OmniNodeBranching> | undefined): boolean;
}

/**
 * OmniNodeSetSkill adds the given string as a skill on the coversation
 *
 * @generated from message api.commons.workflows.OmniNodeSetSkill
 */
export declare class OmniNodeSetSkill extends Message<OmniNodeSetSkill> {
  /**
   * a single skill to add to the conversation (deprecated)
   *
   * @generated from field: string skill = 1 [deprecated = true];
   * @deprecated
   */
  skill: string;

  /**
   * list of skills to add to the conversation
   *
   * @generated from field: repeated string skills = 2;
   */
  skills: string[];

  constructor(data?: PartialMessage<OmniNodeSetSkill>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeSetSkill";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeSetSkill;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeSetSkill;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeSetSkill;

  static equals(a: OmniNodeSetSkill | PlainMessage<OmniNodeSetSkill> | undefined, b: OmniNodeSetSkill | PlainMessage<OmniNodeSetSkill> | undefined): boolean;
}

/**
 * OmniNodeToAgent removes the conversation from the flow (updates the status)
 *
 * @generated from message api.commons.workflows.OmniNodeToAgent
 */
export declare class OmniNodeToAgent extends Message<OmniNodeToAgent> {
  constructor(data?: PartialMessage<OmniNodeToAgent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeToAgent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeToAgent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeToAgent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeToAgent;

  static equals(a: OmniNodeToAgent | PlainMessage<OmniNodeToAgent> | undefined, b: OmniNodeToAgent | PlainMessage<OmniNodeToAgent> | undefined): boolean;
}

/**
 * OmniNodeToMatcher removes the conversation from the flow (updates the status)
 *
 * @generated from message api.commons.workflows.OmniNodeToMatcher
 */
export declare class OmniNodeToMatcher extends Message<OmniNodeToMatcher> {
  constructor(data?: PartialMessage<OmniNodeToMatcher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeToMatcher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeToMatcher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeToMatcher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeToMatcher;

  static equals(a: OmniNodeToMatcher | PlainMessage<OmniNodeToMatcher> | undefined, b: OmniNodeToMatcher | PlainMessage<OmniNodeToMatcher> | undefined): boolean;
}

/**
 * OmniNodeError will send an error message to the user and log an error
 *
 * @generated from message api.commons.workflows.OmniNodeError
 */
export declare class OmniNodeError extends Message<OmniNodeError> {
  /**
   * the error message to send/log
   *
   * @generated from field: string error = 1;
   */
  error: string;

  constructor(data?: PartialMessage<OmniNodeError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeError;

  static equals(a: OmniNodeError | PlainMessage<OmniNodeError> | undefined, b: OmniNodeError | PlainMessage<OmniNodeError> | undefined): boolean;
}

/**
 * @generated from message api.commons.workflows.OmniNodeWebhook
 */
export declare class OmniNodeWebhook extends Message<OmniNodeWebhook> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: string method = 2;
   */
  method: string;

  /**
   * @generated from field: string body = 3;
   */
  body: string;

  /**
   * @generated from field: map<string, string> headers = 4;
   */
  headers: { [key: string]: string };

  constructor(data?: PartialMessage<OmniNodeWebhook>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeWebhook";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeWebhook;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeWebhook;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeWebhook;

  static equals(a: OmniNodeWebhook | PlainMessage<OmniNodeWebhook> | undefined, b: OmniNodeWebhook | PlainMessage<OmniNodeWebhook> | undefined): boolean;
}

/**
 * take an action on a scrublist, either add or remove (other?)
 *
 * @generated from message api.commons.workflows.OmniNodeScrublist
 */
export declare class OmniNodeScrublist extends Message<OmniNodeScrublist> {
  /**
   * @generated from field: api.commons.workflows.OmniNodeScrublistAction action = 1;
   */
  action: OmniNodeScrublistAction;

  constructor(data?: PartialMessage<OmniNodeScrublist>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeScrublist";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeScrublist;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeScrublist;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeScrublist;

  static equals(a: OmniNodeScrublist | PlainMessage<OmniNodeScrublist> | undefined, b: OmniNodeScrublist | PlainMessage<OmniNodeScrublist> | undefined): boolean;
}

/**
 * close out the conversation
 *
 * @generated from message api.commons.workflows.OmniNodeEndConversation
 */
export declare class OmniNodeEndConversation extends Message<OmniNodeEndConversation> {
  constructor(data?: PartialMessage<OmniNodeEndConversation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniNodeEndConversation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniNodeEndConversation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniNodeEndConversation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniNodeEndConversation;

  static equals(a: OmniNodeEndConversation | PlainMessage<OmniNodeEndConversation> | undefined, b: OmniNodeEndConversation | PlainMessage<OmniNodeEndConversation> | undefined): boolean;
}

