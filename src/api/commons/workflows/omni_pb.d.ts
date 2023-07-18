// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/workflows/omni.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.workflows.OmniNodePrompt
 */
export declare class OmniNodePrompt extends Message<OmniNodePrompt> {
  /**
   * @generated from field: string prompt = 1;
   */
  prompt: string;

  /**
   * @generated from field: string store_to = 2;
   */
  storeTo: string;

  /**
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
 * @generated from message api.commons.workflows.OmniNodeSetSkill
 */
export declare class OmniNodeSetSkill extends Message<OmniNodeSetSkill> {
  /**
   * @generated from field: string skill = 1;
   */
  skill: string;

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
 * @generated from message api.commons.workflows.OmniNodeError
 */
export declare class OmniNodeError extends Message<OmniNodeError> {
  /**
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

