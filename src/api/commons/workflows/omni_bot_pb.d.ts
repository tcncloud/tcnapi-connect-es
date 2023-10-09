// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/workflows/omni_bot.proto (package api.commons.workflows, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * OmniBotNodeTestStart represents an omni-bot start-of-test node.
 *
 * @generated from message api.commons.workflows.OmniBotNodeTestStart
 */
export declare class OmniBotNodeTestStart extends Message<OmniBotNodeTestStart> {
  /**
   * deprecated
   *
   * @generated from field: string data = 1 [deprecated = true];
   * @deprecated
   */
  data: string;

  constructor(data?: PartialMessage<OmniBotNodeTestStart>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniBotNodeTestStart";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniBotNodeTestStart;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniBotNodeTestStart;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniBotNodeTestStart;

  static equals(a: OmniBotNodeTestStart | PlainMessage<OmniBotNodeTestStart> | undefined, b: OmniBotNodeTestStart | PlainMessage<OmniBotNodeTestStart> | undefined): boolean;
}

/**
 * OmniBotNodeTestStep represents an omni-bot test-step node.
 *
 * @generated from message api.commons.workflows.OmniBotNodeTestStep
 */
export declare class OmniBotNodeTestStep extends Message<OmniBotNodeTestStep> {
  /**
   * deprecated
   *
   * @generated from field: string data = 1 [deprecated = true];
   * @deprecated
   */
  data: string;

  constructor(data?: PartialMessage<OmniBotNodeTestStep>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniBotNodeTestStep";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniBotNodeTestStep;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniBotNodeTestStep;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniBotNodeTestStep;

  static equals(a: OmniBotNodeTestStep | PlainMessage<OmniBotNodeTestStep> | undefined, b: OmniBotNodeTestStep | PlainMessage<OmniBotNodeTestStep> | undefined): boolean;
}

/**
 * OmniBotNodeTestEnd represents an omni-bot end-of-test node.
 *
 * @generated from message api.commons.workflows.OmniBotNodeTestEnd
 */
export declare class OmniBotNodeTestEnd extends Message<OmniBotNodeTestEnd> {
  /**
   * deprecated
   *
   * @generated from field: string error = 1 [deprecated = true];
   * @deprecated
   */
  error: string;

  constructor(data?: PartialMessage<OmniBotNodeTestEnd>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.workflows.OmniBotNodeTestEnd";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OmniBotNodeTestEnd;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OmniBotNodeTestEnd;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OmniBotNodeTestEnd;

  static equals(a: OmniBotNodeTestEnd | PlainMessage<OmniBotNodeTestEnd> | undefined, b: OmniBotNodeTestEnd | PlainMessage<OmniBotNodeTestEnd> | undefined): boolean;
}

