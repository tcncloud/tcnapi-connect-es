// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/classifier/service.proto (package api.v1alpha1.classifier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { FileTemplate, ParseHints } from "./entities_pb.js";

/**
 * @generated from message api.v1alpha1.classifier.ParseFileRequest
 */
export declare class ParseFileRequest extends Message<ParseFileRequest> {
  /**
   * @generated from oneof api.v1alpha1.classifier.ParseFileRequest.opt
   */
  opt: {
    /**
     * the raw file, no more than 2mb
     * use raw_data if file is simple.
     * a header immediately followed by data
     *
     * @generated from field: bytes raw_data = 3;
     */
    value: Uint8Array;
    case: "rawData";
  } | {
    /**
     * reparse the file that exists for this template with new hints
     *
     * @generated from field: api.v1alpha1.classifier.ParseFileRequest.ReParseFile reparse_file = 4;
     */
    value: ParseFileRequest_ReParseFile;
    case: "reparseFile";
  } | {
    /**
     * parse with hints if file is not
     * a header immediately followed by data
     *
     * @generated from field: api.v1alpha1.classifier.ParseFileRequest.ParseWithHints parse_with_hints = 6;
     */
    value: ParseFileRequest_ParseWithHints;
    case: "parseWithHints";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  constructor(data?: PartialMessage<ParseFileRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseFileRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseFileRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseFileRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseFileRequest;

  static equals(a: ParseFileRequest | PlainMessage<ParseFileRequest> | undefined, b: ParseFileRequest | PlainMessage<ParseFileRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ParseFileRequest.ReParseFile
 */
export declare class ParseFileRequest_ReParseFile extends Message<ParseFileRequest_ReParseFile> {
  /**
   * @generated from field: int64 file_template_id = 1;
   */
  fileTemplateId: bigint;

  /**
   * @generated from field: api.v1alpha1.classifier.ParseHints hints = 2;
   */
  hints?: ParseHints;

  constructor(data?: PartialMessage<ParseFileRequest_ReParseFile>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseFileRequest.ReParseFile";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseFileRequest_ReParseFile;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseFileRequest_ReParseFile;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseFileRequest_ReParseFile;

  static equals(a: ParseFileRequest_ReParseFile | PlainMessage<ParseFileRequest_ReParseFile> | undefined, b: ParseFileRequest_ReParseFile | PlainMessage<ParseFileRequest_ReParseFile> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ParseFileRequest.ParseWithHints
 */
export declare class ParseFileRequest_ParseWithHints extends Message<ParseFileRequest_ParseWithHints> {
  /**
   * the raw file, no more than 2mb
   *
   * @generated from field: bytes raw_data = 7;
   */
  rawData: Uint8Array;

  /**
   * @generated from field: api.v1alpha1.classifier.ParseHints hints = 8;
   */
  hints?: ParseHints;

  constructor(data?: PartialMessage<ParseFileRequest_ParseWithHints>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseFileRequest.ParseWithHints";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseFileRequest_ParseWithHints;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseFileRequest_ParseWithHints;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseFileRequest_ParseWithHints;

  static equals(a: ParseFileRequest_ParseWithHints | PlainMessage<ParseFileRequest_ParseWithHints> | undefined, b: ParseFileRequest_ParseWithHints | PlainMessage<ParseFileRequest_ParseWithHints> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ParseFileResponse
 */
export declare class ParseFileResponse extends Message<ParseFileResponse> {
  /**
   * @generated from field: api.v1alpha1.classifier.FileTemplate file_template = 1;
   */
  fileTemplate?: FileTemplate;

  constructor(data?: PartialMessage<ParseFileResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ParseFileResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParseFileResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParseFileResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParseFileResponse;

  static equals(a: ParseFileResponse | PlainMessage<ParseFileResponse> | undefined, b: ParseFileResponse | PlainMessage<ParseFileResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.UpdateFileTemplateRequest
 */
export declare class UpdateFileTemplateRequest extends Message<UpdateFileTemplateRequest> {
  /**
   * @generated from field: api.v1alpha1.classifier.FileTemplate file_template = 1;
   */
  fileTemplate?: FileTemplate;

  constructor(data?: PartialMessage<UpdateFileTemplateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.UpdateFileTemplateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFileTemplateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFileTemplateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFileTemplateRequest;

  static equals(a: UpdateFileTemplateRequest | PlainMessage<UpdateFileTemplateRequest> | undefined, b: UpdateFileTemplateRequest | PlainMessage<UpdateFileTemplateRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.UpdateFileTemplateResponse
 */
export declare class UpdateFileTemplateResponse extends Message<UpdateFileTemplateResponse> {
  constructor(data?: PartialMessage<UpdateFileTemplateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.UpdateFileTemplateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateFileTemplateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateFileTemplateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateFileTemplateResponse;

  static equals(a: UpdateFileTemplateResponse | PlainMessage<UpdateFileTemplateResponse> | undefined, b: UpdateFileTemplateResponse | PlainMessage<UpdateFileTemplateResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.DeleteFileTemplateRequest
 */
export declare class DeleteFileTemplateRequest extends Message<DeleteFileTemplateRequest> {
  /**
   * @generated from field: int64 file_template = 1;
   */
  fileTemplate: bigint;

  constructor(data?: PartialMessage<DeleteFileTemplateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.DeleteFileTemplateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFileTemplateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFileTemplateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFileTemplateRequest;

  static equals(a: DeleteFileTemplateRequest | PlainMessage<DeleteFileTemplateRequest> | undefined, b: DeleteFileTemplateRequest | PlainMessage<DeleteFileTemplateRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.DeleteFileTemplateResponse
 */
export declare class DeleteFileTemplateResponse extends Message<DeleteFileTemplateResponse> {
  constructor(data?: PartialMessage<DeleteFileTemplateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.DeleteFileTemplateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteFileTemplateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteFileTemplateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteFileTemplateResponse;

  static equals(a: DeleteFileTemplateResponse | PlainMessage<DeleteFileTemplateResponse> | undefined, b: DeleteFileTemplateResponse | PlainMessage<DeleteFileTemplateResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ListFileTemplatesRequest
 */
export declare class ListFileTemplatesRequest extends Message<ListFileTemplatesRequest> {
  /**
   * if empty we will start at begining/end of list
   *
   * @generated from field: int64 prev_id = 1;
   */
  prevId: bigint;

  /**
   * sort ascending instead of descending
   *
   * @generated from field: bool asc = 2;
   */
  asc: boolean;

  /**
   * how many records to get
   *
   * @generated from field: int32 page_size = 3;
   */
  pageSize: number;

  constructor(data?: PartialMessage<ListFileTemplatesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ListFileTemplatesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFileTemplatesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFileTemplatesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFileTemplatesRequest;

  static equals(a: ListFileTemplatesRequest | PlainMessage<ListFileTemplatesRequest> | undefined, b: ListFileTemplatesRequest | PlainMessage<ListFileTemplatesRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.ListFileTemplatesResponse
 */
export declare class ListFileTemplatesResponse extends Message<ListFileTemplatesResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.classifier.FileTemplate file_templates = 1;
   */
  fileTemplates: FileTemplate[];

  constructor(data?: PartialMessage<ListFileTemplatesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.ListFileTemplatesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListFileTemplatesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListFileTemplatesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListFileTemplatesResponse;

  static equals(a: ListFileTemplatesResponse | PlainMessage<ListFileTemplatesResponse> | undefined, b: ListFileTemplatesResponse | PlainMessage<ListFileTemplatesResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.GetFileTemplateRequest
 */
export declare class GetFileTemplateRequest extends Message<GetFileTemplateRequest> {
  /**
   * @generated from field: int64 file_template_id = 1;
   */
  fileTemplateId: bigint;

  constructor(data?: PartialMessage<GetFileTemplateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.GetFileTemplateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFileTemplateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFileTemplateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFileTemplateRequest;

  static equals(a: GetFileTemplateRequest | PlainMessage<GetFileTemplateRequest> | undefined, b: GetFileTemplateRequest | PlainMessage<GetFileTemplateRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.classifier.GetFileTemplateResponse
 */
export declare class GetFileTemplateResponse extends Message<GetFileTemplateResponse> {
  /**
   * @generated from field: api.v1alpha1.classifier.FileTemplate file_template = 1;
   */
  fileTemplate?: FileTemplate;

  constructor(data?: PartialMessage<GetFileTemplateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.classifier.GetFileTemplateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFileTemplateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFileTemplateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFileTemplateResponse;

  static equals(a: GetFileTemplateResponse | PlainMessage<GetFileTemplateResponse> | undefined, b: GetFileTemplateResponse | PlainMessage<GetFileTemplateResponse> | undefined): boolean;
}

