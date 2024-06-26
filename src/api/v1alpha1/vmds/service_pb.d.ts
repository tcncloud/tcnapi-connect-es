// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/vmds/service.proto (package api.v1alpha1.vmds, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { CallType_Enum } from "../../commons/acd_pb.js";

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest
 */
export declare class DownloadSpecifiedMessagesRequest extends Message<DownloadSpecifiedMessagesRequest> {
  /**
   * @generated from field: repeated api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest.MessageRequest messages = 1;
   */
  messages: DownloadSpecifiedMessagesRequest_MessageRequest[];

  constructor(data?: PartialMessage<DownloadSpecifiedMessagesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadSpecifiedMessagesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesRequest;

  static equals(a: DownloadSpecifiedMessagesRequest | PlainMessage<DownloadSpecifiedMessagesRequest> | undefined, b: DownloadSpecifiedMessagesRequest | PlainMessage<DownloadSpecifiedMessagesRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest.MessageRequest
 */
export declare class DownloadSpecifiedMessagesRequest_MessageRequest extends Message<DownloadSpecifiedMessagesRequest_MessageRequest> {
  /**
   * @generated from field: string mail_box = 1;
   */
  mailBox: string;

  /**
   * @generated from field: string caller_sid = 2;
   */
  callerSid: string;

  /**
   * @generated from field: api.commons.CallType.Enum caller_type = 3;
   */
  callerType: CallType_Enum;

  constructor(data?: PartialMessage<DownloadSpecifiedMessagesRequest_MessageRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vmds.DownloadSpecifiedMessagesRequest.MessageRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadSpecifiedMessagesRequest_MessageRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesRequest_MessageRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesRequest_MessageRequest;

  static equals(a: DownloadSpecifiedMessagesRequest_MessageRequest | PlainMessage<DownloadSpecifiedMessagesRequest_MessageRequest> | undefined, b: DownloadSpecifiedMessagesRequest_MessageRequest | PlainMessage<DownloadSpecifiedMessagesRequest_MessageRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.vmds.DownloadSpecifiedMessagesResponse
 */
export declare class DownloadSpecifiedMessagesResponse extends Message<DownloadSpecifiedMessagesResponse> {
  /**
   * @generated from field: string url = 1;
   */
  url: string;

  constructor(data?: PartialMessage<DownloadSpecifiedMessagesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.vmds.DownloadSpecifiedMessagesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DownloadSpecifiedMessagesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DownloadSpecifiedMessagesResponse;

  static equals(a: DownloadSpecifiedMessagesResponse | PlainMessage<DownloadSpecifiedMessagesResponse> | undefined, b: DownloadSpecifiedMessagesResponse | PlainMessage<DownloadSpecifiedMessagesResponse> | undefined): boolean;
}

