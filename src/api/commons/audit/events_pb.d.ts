// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/audit/events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.audit.DummyEvent
 */
export declare class DummyEvent extends Message<DummyEvent> {
  /**
   * @generated from field: string message = 1;
   */
  message: string;

  constructor(data?: PartialMessage<DummyEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.DummyEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DummyEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DummyEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DummyEvent;

  static equals(a: DummyEvent | PlainMessage<DummyEvent> | undefined, b: DummyEvent | PlainMessage<DummyEvent> | undefined): boolean;
}

