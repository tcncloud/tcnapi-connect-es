// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/datalake.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * REMOVE IF I FORGET
 *
 * @generated from message api.commons.DLFSDef
 */
export declare class DLFSDef extends Message<DLFSDef> {
  /**
   * @generated from field: int64 vfs_id = 1;
   */
  vfsId: bigint;

  /**
   * More to come I'm sure
   *
   * @generated from field: bool incremental = 10;
   */
  incremental: boolean;

  constructor(data?: PartialMessage<DLFSDef>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DLFSDef";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DLFSDef;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DLFSDef;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DLFSDef;

  static equals(a: DLFSDef | PlainMessage<DLFSDef> | undefined, b: DLFSDef | PlainMessage<DLFSDef> | undefined): boolean;
}

/**
 * @generated from message api.commons.DLFSDefs
 */
export declare class DLFSDefs extends Message<DLFSDefs> {
  /**
   * @generated from field: repeated api.commons.DLFSDef defs = 1;
   */
  defs: DLFSDef[];

  constructor(data?: PartialMessage<DLFSDefs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DLFSDefs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DLFSDefs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DLFSDefs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DLFSDefs;

  static equals(a: DLFSDefs | PlainMessage<DLFSDefs> | undefined, b: DLFSDefs | PlainMessage<DLFSDefs> | undefined): boolean;
}

