// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/classifier/entities.proto (package api.v1alpha1.classifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ClassifierEntityType } from "../../commons/classifier_pb.js";

/**
 * @generated from message api.v1alpha1.classifier.ClassifierEntityTypes
 */
export declare class ClassifierEntityTypes extends Message<ClassifierEntityTypes> {
  /**
   * @generated from field: repeated api.commons.ClassifierEntityType types = 1;
   */
  types: ClassifierEntityType[];

  constructor(data?: PartialMessage<ClassifierEntityTypes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ClassifierEntityTypes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassifierEntityTypes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassifierEntityTypes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassifierEntityTypes;

  static equals(a: ClassifierEntityTypes | PlainMessage<ClassifierEntityTypes> | undefined, b: ClassifierEntityTypes | PlainMessage<ClassifierEntityTypes> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.FileTemplate
 */
export declare class FileTemplate extends Message<FileTemplate> {
  /**
   * @generated from field: int64 file_template_id = 1;
   */
  fileTemplateId: bigint;

  /**
   * @generated from field: string filename = 2;
   */
  filename: string;

  /**
   * @generated from field: repeated api.v1alpha1.classifier.FileTemplate.Field fields = 3;
   */
  fields: FileTemplate_Field[];

  /**
   * @generated from field: api.v1alpha1.classifier.ParseOpts parse_opts = 4 [deprecated = true];
   * @deprecated
   */
  parseOpts?: ParseOpts;

  /**
   * @generated from field: api.v1alpha1.classifier.Constraints constraints = 5 [deprecated = true];
   * @deprecated
   */
  constraints?: Constraints;

  /**
   * @generated from field: int64 foid = 6;
   */
  foid: bigint;

  /**
   * @generated from field: api.v1alpha1.classifier.Opts opts = 7;
   */
  opts?: Opts;

  constructor(data?: PartialMessage<FileTemplate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.FileTemplate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileTemplate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileTemplate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileTemplate;

  static equals(a: FileTemplate | PlainMessage<FileTemplate> | undefined, b: FileTemplate | PlainMessage<FileTemplate> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.FileTemplate.Field
 */
export declare class FileTemplate_Field extends Message<FileTemplate_Field> {
  /**
   * @generated from field: string syntax_type = 1;
   */
  syntaxType: string;

  /**
   * @generated from field: api.commons.ClassifierEntityType entity_type = 2;
   */
  entityType: ClassifierEntityType;

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

  constructor(data?: PartialMessage<FileTemplate_Field>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.FileTemplate.Field";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FileTemplate_Field;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FileTemplate_Field;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FileTemplate_Field;

  static equals(a: FileTemplate_Field | PlainMessage<FileTemplate_Field> | undefined, b: FileTemplate_Field | PlainMessage<FileTemplate_Field> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.Opts
 */
export declare class Opts extends Message<Opts> {
  /**
   * map from field name to date format
   * e.g: "dob": yyyy/mm/dd
   *
   * @generated from field: map<string, string> date_formats = 1;
   */
  dateFormats: { [key: string]: string };

  /**
   * keys are old field names, values are new field names
   *
   * @generated from field: map<string, string> rename_fields = 2;
   */
  renameFields: { [key: string]: string };

  /**
   * @generated from field: api.v1alpha1.classifier.ParseOpts parse_opts = 3;
   */
  parseOpts?: ParseOpts;

  /**
   * @generated from field: api.v1alpha1.classifier.Constraints constraints = 4;
   */
  constraints?: Constraints;

  constructor(data?: PartialMessage<Opts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.Opts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Opts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Opts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Opts;

  static equals(a: Opts | PlainMessage<Opts> | undefined, b: Opts | PlainMessage<Opts> | undefined): boolean;
}

/**
 * details on how the data should be
 * parsed with respect to the file type
 *
 * @generated from message api.v1alpha1.classifier.ParseOpts
 */
export declare class ParseOpts extends Message<ParseOpts> {
  /**
   * @generated from oneof api.v1alpha1.classifier.ParseOpts.ftype
   */
  ftype: {
    /**
     * @generated from field: api.v1alpha1.classifier.OptsCsv csv = 1;
     */
    value: OptsCsv;
    case: "csv";
  } | {
    /**
     * @generated from field: api.v1alpha1.classifier.OptsJson json = 2;
     */
    value: OptsJson;
    case: "json";
  } | {
    /**
     * @generated from field: api.v1alpha1.classifier.OptsJsonL jsonl = 3;
     */
    value: OptsJsonL;
    case: "jsonl";
  } | {
    /**
     * @generated from field: api.v1alpha1.classifier.OptsFixed fixed = 4;
     */
    value: OptsFixed;
    case: "fixed";
  } | {
    /**
     * @generated from field: api.v1alpha1.classifier.OptsParquet parquet = 5;
     */
    value: OptsParquet;
    case: "parquet";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<ParseOpts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseOpts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseOpts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseOpts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseOpts;

  static equals(a: ParseOpts | PlainMessage<ParseOpts> | undefined, b: ParseOpts | PlainMessage<ParseOpts> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsCsv
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
  static readonly typeName = "api.v1alpha1.classifier.OptsCsv";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsCsv;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsCsv;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsCsv;

  static equals(a: OptsCsv | PlainMessage<OptsCsv> | undefined, b: OptsCsv | PlainMessage<OptsCsv> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsJson
 */
export declare class OptsJson extends Message<OptsJson> {
  /**
   * @generated from field: string records_root = 1;
   */
  recordsRoot: string;

  constructor(data?: PartialMessage<OptsJson>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.OptsJson";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsJson;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsJson;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsJson;

  static equals(a: OptsJson | PlainMessage<OptsJson> | undefined, b: OptsJson | PlainMessage<OptsJson> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsJsonL
 */
export declare class OptsJsonL extends Message<OptsJsonL> {
  constructor(data?: PartialMessage<OptsJsonL>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.OptsJsonL";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsJsonL;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsJsonL;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsJsonL;

  static equals(a: OptsJsonL | PlainMessage<OptsJsonL> | undefined, b: OptsJsonL | PlainMessage<OptsJsonL> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsFixed
 */
export declare class OptsFixed extends Message<OptsFixed> {
  /**
   * field opts keyed by field name
   *
   * @generated from field: map<string, api.v1alpha1.classifier.OptsFixed.FieldOpts> positions = 1;
   */
  positions: { [key: string]: OptsFixed_FieldOpts };

  /**
   * @generated from field: bool has_header = 2;
   */
  hasHeader: boolean;

  constructor(data?: PartialMessage<OptsFixed>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.OptsFixed";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsFixed;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsFixed;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsFixed;

  static equals(a: OptsFixed | PlainMessage<OptsFixed> | undefined, b: OptsFixed | PlainMessage<OptsFixed> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsFixed.FieldOpts
 */
export declare class OptsFixed_FieldOpts extends Message<OptsFixed_FieldOpts> {
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

  constructor(data?: PartialMessage<OptsFixed_FieldOpts>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.OptsFixed.FieldOpts";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsFixed_FieldOpts;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsFixed_FieldOpts;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsFixed_FieldOpts;

  static equals(a: OptsFixed_FieldOpts | PlainMessage<OptsFixed_FieldOpts> | undefined, b: OptsFixed_FieldOpts | PlainMessage<OptsFixed_FieldOpts> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.OptsParquet
 */
export declare class OptsParquet extends Message<OptsParquet> {
  constructor(data?: PartialMessage<OptsParquet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.OptsParquet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptsParquet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptsParquet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptsParquet;

  static equals(a: OptsParquet | PlainMessage<OptsParquet> | undefined, b: OptsParquet | PlainMessage<OptsParquet> | undefined): boolean;
}

/**
 * these are options to forbid/allow certain
 * types from being guessed by Classifier
 *
 * @generated from message api.v1alpha1.classifier.Constraints
 */
export declare class Constraints extends Message<Constraints> {
  /**
   * @generated from field: map<string, api.v1alpha1.classifier.ClassifierEntityTypes> forbid = 1;
   */
  forbid: { [key: string]: ClassifierEntityTypes };

  /**
   * @generated from field: map<string, api.v1alpha1.classifier.ClassifierEntityTypes> allow = 2;
   */
  allow: { [key: string]: ClassifierEntityTypes };

  constructor(data?: PartialMessage<Constraints>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.Constraints";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Constraints;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Constraints;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Constraints;

  static equals(a: Constraints | PlainMessage<Constraints> | undefined, b: Constraints | PlainMessage<Constraints> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ParseHints
 */
export declare class ParseHints extends Message<ParseHints> {
  /**
   * @generated from field: api.v1alpha1.classifier.ParseOpts parse_opts = 1;
   */
  parseOpts?: ParseOpts;

  /**
   * @generated from field: api.v1alpha1.classifier.Constraints constraints = 2;
   */
  constraints?: Constraints;

  constructor(data?: PartialMessage<ParseHints>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseHints";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseHints;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseHints;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseHints;

  static equals(a: ParseHints | PlainMessage<ParseHints> | undefined, b: ParseHints | PlainMessage<ParseHints> | undefined): boolean;
}

