// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/audit/lms_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message api.commons.audit.LMSPipelineFailureEvent
 */
export declare class LMSPipelineFailureEvent extends Message<LMSPipelineFailureEvent> {
  /**
   * @generated from field: string element_id = 1;
   */
  elementId: string;

  /**
   * @generated from field: string element_name = 2;
   */
  elementName: string;

  /**
   * @generated from field: string file_name = 3;
   */
  fileName: string;

  /**
   * @generated from field: string failure_message = 4;
   */
  failureMessage: string;

  constructor(data?: PartialMessage<LMSPipelineFailureEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.LMSPipelineFailureEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LMSPipelineFailureEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LMSPipelineFailureEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LMSPipelineFailureEvent;

  static equals(a: LMSPipelineFailureEvent | PlainMessage<LMSPipelineFailureEvent> | undefined, b: LMSPipelineFailureEvent | PlainMessage<LMSPipelineFailureEvent> | undefined): boolean;
}

