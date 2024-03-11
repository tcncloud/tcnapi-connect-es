// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha2/lms/entities.proto (package protos.lms.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FileTemplate as FileTemplate$1 } from "../../v0alpha/lms_pb.js";

/**
 * @generated from message protos.lms.v2.FileTemplateV2
 */
export declare class FileTemplateV2 extends Message<FileTemplateV2> {
  /**
   * @generated from oneof protos.lms.v2.FileTemplateV2.template
   */
  template: {
    /**
     * @generated from field: api.v0alpha.FileTemplate legacy_template = 1;
     */
    value: FileTemplate$1;
    case: "legacyTemplate";
  } | {
    /**
     * @generated from field: protos.lms.v2.FileTemplate dock_template = 2;
     */
    value: FileTemplate;
    case: "dockTemplate";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<FileTemplateV2>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.FileTemplateV2";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileTemplateV2;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileTemplateV2;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileTemplateV2;

  static equals(a: FileTemplateV2 | PlainMessage<FileTemplateV2> | undefined, b: FileTemplateV2 | PlainMessage<FileTemplateV2> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.FileTemplates
 */
export declare class FileTemplates extends Message<FileTemplates> {
  /**
   * @generated from field: repeated protos.lms.v2.FileTemplateV2 templates = 1;
   */
  templates: FileTemplateV2[];

  constructor(data?: PartialMessage<FileTemplates>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.FileTemplates";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileTemplates;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileTemplates;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileTemplates;

  static equals(a: FileTemplates | PlainMessage<FileTemplates> | undefined, b: FileTemplates | PlainMessage<FileTemplates> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.FileTemplate
 */
export declare class FileTemplate extends Message<FileTemplate> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: string file_template_id = 2;
   */
  fileTemplateId: string;

  /**
   * @generated from field: string filename = 3;
   */
  filename: string;

  /**
   * @generated from field: repeated protos.lms.v2.Field fields = 4;
   */
  fields: Field[];

  /**
   * @generated from field: protos.lms.v2.ParseOpts parse_opts = 5;
   */
  parseOpts?: ParseOpts;

  /**
   * @generated from field: int64 foid = 6;
   */
  foid: bigint;

  constructor(data?: PartialMessage<FileTemplate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.FileTemplate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileTemplate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileTemplate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileTemplate;

  static equals(a: FileTemplate | PlainMessage<FileTemplate> | undefined, b: FileTemplate | PlainMessage<FileTemplate> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.Field
 */
export declare class Field extends Message<Field> {
  /**
   * @generated from field: string syntax_type = 1;
   */
  syntaxType: string;

  /**
   * @generated from field: string presi_type = 2;
   */
  presiType: string;

  /**
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * @generated from field: string format = 4;
   */
  format: string;

  /**
   * example of a value for this field
   *
   * @generated from field: string raw_value = 5;
   */
  rawValue: string;

  constructor(data?: PartialMessage<Field>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.Field";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Field;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Field;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Field;

  static equals(a: Field | PlainMessage<Field> | undefined, b: Field | PlainMessage<Field> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.ParseOpts
 */
export declare class ParseOpts extends Message<ParseOpts> {
  /**
   * @generated from oneof protos.lms.v2.ParseOpts.ftype
   */
  ftype: {
    /**
     * @generated from field: protos.lms.v2.OptsCsv csv = 1;
     */
    value: OptsCsv;
    case: "csv";
  } | {
    /**
     * @generated from field: protos.lms.v2.OptsJson json = 2;
     */
    value: OptsJson;
    case: "json";
  } | {
    /**
     * @generated from field: protos.lms.v2.OptsJsonL jsonl = 3;
     */
    value: OptsJsonL;
    case: "jsonl";
  } | {
    /**
     * @generated from field: protos.lms.v2.OptsFixed fixed = 4;
     */
    value: OptsFixed;
    case: "fixed";
  } | {
    /**
     * @generated from field: protos.lms.v2.OptsParquet parquet = 5;
     */
    value: OptsParquet;
    case: "parquet";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ParseOpts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.ParseOpts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseOpts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseOpts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseOpts;

  static equals(a: ParseOpts | PlainMessage<ParseOpts> | undefined, b: ParseOpts | PlainMessage<ParseOpts> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsCsv
 */
export declare class OptsCsv extends Message<OptsCsv> {
  /**
   * @generated from field: bool has_header = 1;
   */
  hasHeader: boolean;

  /**
   * @generated from field: int64 skip_rows = 2;
   */
  skipRows: bigint;

  /**
   * @generated from field: repeated string header = 3;
   */
  header: string[];

  /**
   * @generated from field: string separator = 4;
   */
  separator: string;

  constructor(data?: PartialMessage<OptsCsv>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsCsv";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsCsv;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsCsv;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsCsv;

  static equals(a: OptsCsv | PlainMessage<OptsCsv> | undefined, b: OptsCsv | PlainMessage<OptsCsv> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsJson
 */
export declare class OptsJson extends Message<OptsJson> {
  /**
   * @generated from field: string records_root = 1;
   */
  recordsRoot: string;

  constructor(data?: PartialMessage<OptsJson>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsJson";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsJson;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsJson;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsJson;

  static equals(a: OptsJson | PlainMessage<OptsJson> | undefined, b: OptsJson | PlainMessage<OptsJson> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsJsonL
 */
export declare class OptsJsonL extends Message<OptsJsonL> {
  constructor(data?: PartialMessage<OptsJsonL>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsJsonL";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsJsonL;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsJsonL;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsJsonL;

  static equals(a: OptsJsonL | PlainMessage<OptsJsonL> | undefined, b: OptsJsonL | PlainMessage<OptsJsonL> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsFixed
 */
export declare class OptsFixed extends Message<OptsFixed> {
  /**
   * @generated from field: bool has_header = 1;
   */
  hasHeader: boolean;

  /**
   * @generated from field: repeated protos.lms.v2.OptsFixed.Field header = 2;
   */
  header: OptsFixed_Field[];

  constructor(data?: PartialMessage<OptsFixed>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsFixed";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsFixed;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsFixed;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsFixed;

  static equals(a: OptsFixed | PlainMessage<OptsFixed> | undefined, b: OptsFixed | PlainMessage<OptsFixed> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsFixed.Field
 */
export declare class OptsFixed_Field extends Message<OptsFixed_Field> {
  /**
   * for fixed width files indicates the starting position of the data.
   * if it is -1, starting position is one character after the previous fields
   * starting position + length. if this is the first field and it is -1,
   * starting position is 0
   *
   * @generated from field: int32 starting_position = 13;
   */
  startingPosition: number;

  /**
   * for fixed width files indicates how many characters to the right of
   * starting_position we will read. this field is required to be greater than
   * 0.
   *
   * @generated from field: int32 field_length = 14;
   */
  fieldLength: number;

  constructor(data?: PartialMessage<OptsFixed_Field>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsFixed.Field";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsFixed_Field;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsFixed_Field;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsFixed_Field;

  static equals(a: OptsFixed_Field | PlainMessage<OptsFixed_Field> | undefined, b: OptsFixed_Field | PlainMessage<OptsFixed_Field> | undefined): boolean;
}

/**
 * @generated from message protos.lms.v2.OptsParquet
 */
export declare class OptsParquet extends Message<OptsParquet> {
  constructor(data?: PartialMessage<OptsParquet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protos.lms.v2.OptsParquet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsParquet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsParquet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsParquet;

  static equals(a: OptsParquet | PlainMessage<OptsParquet> | undefined, b: OptsParquet | PlainMessage<OptsParquet> | undefined): boolean;
}

