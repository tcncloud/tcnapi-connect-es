// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/fts/service.proto (package api.v1alpha1.fts, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1alpha1.fts.GetUploadFileUrlReq
 */
export declare class GetUploadFileUrlReq extends Message<GetUploadFileUrlReq> {
  /**
   * @generated from field: string prefix = 1;
   */
  prefix: string;

  constructor(data?: PartialMessage<GetUploadFileUrlReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.fts.GetUploadFileUrlReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUploadFileUrlReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUploadFileUrlReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUploadFileUrlReq;

  static equals(a: GetUploadFileUrlReq | PlainMessage<GetUploadFileUrlReq> | undefined, b: GetUploadFileUrlReq | PlainMessage<GetUploadFileUrlReq> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.fts.GetUploadFileUrlRes
 */
export declare class GetUploadFileUrlRes extends Message<GetUploadFileUrlRes> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * identifier so we can get this file back at a later point
   *
   * @generated from field: string id = 3;
   */
  id: string;

  constructor(data?: PartialMessage<GetUploadFileUrlRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.fts.GetUploadFileUrlRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUploadFileUrlRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUploadFileUrlRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUploadFileUrlRes;

  static equals(a: GetUploadFileUrlRes | PlainMessage<GetUploadFileUrlRes> | undefined, b: GetUploadFileUrlRes | PlainMessage<GetUploadFileUrlRes> | undefined): boolean;
}

