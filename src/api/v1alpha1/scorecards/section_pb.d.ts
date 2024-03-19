// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/section.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Section } from "../../commons/scorecards_pb.js";

/**
 * CreateSectionRequest is the request to create a new section.
 *
 * @generated from message api.v1alpha1.scorecards.CreateSectionRequest
 */
export declare class CreateSectionRequest extends Message<CreateSectionRequest> {
  /**
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  constructor(data?: PartialMessage<CreateSectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateSectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSectionRequest;

  static equals(a: CreateSectionRequest | PlainMessage<CreateSectionRequest> | undefined, b: CreateSectionRequest | PlainMessage<CreateSectionRequest> | undefined): boolean;
}

/**
 * CreateSectionResponse returns the created section.
 *
 * @generated from message api.v1alpha1.scorecards.CreateSectionResponse
 */
export declare class CreateSectionResponse extends Message<CreateSectionResponse> {
  /**
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  constructor(data?: PartialMessage<CreateSectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateSectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSectionResponse;

  static equals(a: CreateSectionResponse | PlainMessage<CreateSectionResponse> | undefined, b: CreateSectionResponse | PlainMessage<CreateSectionResponse> | undefined): boolean;
}

/**
 * ListSectionsRequest is request to list sections by scorecard id.
 *
 * @generated from message api.v1alpha1.scorecards.ListSectionsRequest
 */
export declare class ListSectionsRequest extends Message<ListSectionsRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 scorecard_id = 2;
   */
  scorecardId: bigint;

  constructor(data?: PartialMessage<ListSectionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListSectionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSectionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSectionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSectionsRequest;

  static equals(a: ListSectionsRequest | PlainMessage<ListSectionsRequest> | undefined, b: ListSectionsRequest | PlainMessage<ListSectionsRequest> | undefined): boolean;
}

/**
 * ListSectionsResponse returns a list of sections.
 *
 * @generated from message api.v1alpha1.scorecards.ListSectionsResponse
 */
export declare class ListSectionsResponse extends Message<ListSectionsResponse> {
  /**
   * @generated from field: repeated api.commons.Section sections = 1;
   */
  sections: Section[];

  constructor(data?: PartialMessage<ListSectionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.ListSectionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSectionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSectionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSectionsResponse;

  static equals(a: ListSectionsResponse | PlainMessage<ListSectionsResponse> | undefined, b: ListSectionsResponse | PlainMessage<ListSectionsResponse> | undefined): boolean;
}

/**
 * UpdateSectionRequest is the request to update a section.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateSectionRequest
 */
export declare class UpdateSectionRequest extends Message<UpdateSectionRequest> {
  /**
   * Required.
   *
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  /**
   * Required. Valid paths: [title, description, weight].
   * To update Questions, use *ScorecardQuestion methods.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateSectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateSectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSectionRequest;

  static equals(a: UpdateSectionRequest | PlainMessage<UpdateSectionRequest> | undefined, b: UpdateSectionRequest | PlainMessage<UpdateSectionRequest> | undefined): boolean;
}

/**
 * UpdateSectionResponse returns the updated section.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateSectionResponse
 */
export declare class UpdateSectionResponse extends Message<UpdateSectionResponse> {
  /**
   * Updated entity
   *
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  constructor(data?: PartialMessage<UpdateSectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateSectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSectionResponse;

  static equals(a: UpdateSectionResponse | PlainMessage<UpdateSectionResponse> | undefined, b: UpdateSectionResponse | PlainMessage<UpdateSectionResponse> | undefined): boolean;
}

/**
 * DeleteSectionRequest is the request to delete a section.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteSectionRequest
 */
export declare class DeleteSectionRequest extends Message<DeleteSectionRequest> {
  /**
   * Required.
   *
   * @generated from field: int64 section_id = 2;
   */
  sectionId: bigint;

  constructor(data?: PartialMessage<DeleteSectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteSectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSectionRequest;

  static equals(a: DeleteSectionRequest | PlainMessage<DeleteSectionRequest> | undefined, b: DeleteSectionRequest | PlainMessage<DeleteSectionRequest> | undefined): boolean;
}

/**
 * DeleteSectionResponse returns the deleted section.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteSectionResponse
 */
export declare class DeleteSectionResponse extends Message<DeleteSectionResponse> {
  /**
   * Deleted entity
   *
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  constructor(data?: PartialMessage<DeleteSectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteSectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSectionResponse;

  static equals(a: DeleteSectionResponse | PlainMessage<DeleteSectionResponse> | undefined, b: DeleteSectionResponse | PlainMessage<DeleteSectionResponse> | undefined): boolean;
}

/**
 * GetSectionRequest is the request to get a section.
 *
 * @generated from message api.v1alpha1.scorecards.GetSectionRequest
 */
export declare class GetSectionRequest extends Message<GetSectionRequest> {
  /**
   * Unique id of section.
   *
   * @generated from field: int64 section_id = 2;
   */
  sectionId: bigint;

  constructor(data?: PartialMessage<GetSectionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetSectionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSectionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSectionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSectionRequest;

  static equals(a: GetSectionRequest | PlainMessage<GetSectionRequest> | undefined, b: GetSectionRequest | PlainMessage<GetSectionRequest> | undefined): boolean;
}

/**
 * GetSectionResponse is the response to getting a section.
 *
 * @generated from message api.v1alpha1.scorecards.GetSectionResponse
 */
export declare class GetSectionResponse extends Message<GetSectionResponse> {
  /**
   * returned section
   *
   * @generated from field: api.commons.Section section = 1;
   */
  section?: Section;

  constructor(data?: PartialMessage<GetSectionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.GetSectionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSectionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSectionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSectionResponse;

  static equals(a: GetSectionResponse | PlainMessage<GetSectionResponse> | undefined, b: GetSectionResponse | PlainMessage<GetSectionResponse> | undefined): boolean;
}

