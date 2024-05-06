// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/labels/entities.proto (package api.v1alpha1.org.labels, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Label } from "../../../commons/org/labels_pb.js";
import type { LabeledEntity } from "../../../commons/labels_pb.js";

/**
 * Request message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.CreateLabelRequest
 */
export declare class CreateLabelRequest extends Message<CreateLabelRequest> {
  /**
   * The label object that will be created
   *
   * @generated from field: api.commons.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<CreateLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.CreateLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLabelRequest;

  static equals(a: CreateLabelRequest | PlainMessage<CreateLabelRequest> | undefined, b: CreateLabelRequest | PlainMessage<CreateLabelRequest> | undefined): boolean;
}

/**
 * Response message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.CreateLabelResponse
 */
export declare class CreateLabelResponse extends Message<CreateLabelResponse> {
  /**
   * The ID of the created label
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  constructor(data?: PartialMessage<CreateLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.CreateLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLabelResponse;

  static equals(a: CreateLabelResponse | PlainMessage<CreateLabelResponse> | undefined, b: CreateLabelResponse | PlainMessage<CreateLabelResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.UpdateLabelRequest
 */
export declare class UpdateLabelRequest extends Message<UpdateLabelRequest> {
  /**
   * The label object that will be updated
   *
   * @generated from field: api.commons.org.Label label = 1;
   */
  label?: Label;

  /**
   * The field to be updated
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 3;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.UpdateLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLabelRequest;

  static equals(a: UpdateLabelRequest | PlainMessage<UpdateLabelRequest> | undefined, b: UpdateLabelRequest | PlainMessage<UpdateLabelRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.UpdateLabelResponse
 */
export declare class UpdateLabelResponse extends Message<UpdateLabelResponse> {
  /**
   * The updated resource
   *
   * @generated from field: api.commons.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<UpdateLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.UpdateLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLabelResponse;

  static equals(a: UpdateLabelResponse | PlainMessage<UpdateLabelResponse> | undefined, b: UpdateLabelResponse | PlainMessage<UpdateLabelResponse> | undefined): boolean;
}

/**
 * Request message for the GetLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabelRequest
 */
export declare class GetLabelRequest extends Message<GetLabelRequest> {
  /**
   * The label id to get the label
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  constructor(data?: PartialMessage<GetLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.GetLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelRequest;

  static equals(a: GetLabelRequest | PlainMessage<GetLabelRequest> | undefined, b: GetLabelRequest | PlainMessage<GetLabelRequest> | undefined): boolean;
}

/**
 * Response message for the GetLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabelResponse
 */
export declare class GetLabelResponse extends Message<GetLabelResponse> {
  /**
   * The label that was requested
   *
   * @generated from field: api.commons.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<GetLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.GetLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelResponse;

  static equals(a: GetLabelResponse | PlainMessage<GetLabelResponse> | undefined, b: GetLabelResponse | PlainMessage<GetLabelResponse> | undefined): boolean;
}

/**
 * Request message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.labels.ListLabelsRequest
 */
export declare class ListLabelsRequest extends Message<ListLabelsRequest> {
  constructor(data?: PartialMessage<ListLabelsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.ListLabelsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsRequest;

  static equals(a: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined, b: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined): boolean;
}

/**
 * Response message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.labels.ListLabelsResponse
 */
export declare class ListLabelsResponse extends Message<ListLabelsResponse> {
  /**
   * The labels for the users organization
   *
   * @generated from field: repeated api.commons.org.Label label = 1;
   */
  label: Label[];

  constructor(data?: PartialMessage<ListLabelsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.ListLabelsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsResponse;

  static equals(a: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined, b: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined): boolean;
}

/**
 * Request message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DeleteLabelRequest
 */
export declare class DeleteLabelRequest extends Message<DeleteLabelRequest> {
  /**
   * The label id to delete the label
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  constructor(data?: PartialMessage<DeleteLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.DeleteLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLabelRequest;

  static equals(a: DeleteLabelRequest | PlainMessage<DeleteLabelRequest> | undefined, b: DeleteLabelRequest | PlainMessage<DeleteLabelRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.DeleteLabelResponse
 */
export declare class DeleteLabelResponse extends Message<DeleteLabelResponse> {
  constructor(data?: PartialMessage<DeleteLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.DeleteLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLabelResponse;

  static equals(a: DeleteLabelResponse | PlainMessage<DeleteLabelResponse> | undefined, b: DeleteLabelResponse | PlainMessage<DeleteLabelResponse> | undefined): boolean;
}

/**
 * Request message for the AttachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.AttachLabelRequest
 */
export declare class AttachLabelRequest extends Message<AttachLabelRequest> {
  /**
   * The label id to delete the label
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  /**
   * The ID of the entity that is being labeled
   *
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  /**
   * The given entity type to attach the label to
   *
   * @generated from field: api.commons.LabeledEntity entity_type = 3;
   */
  entityType: LabeledEntity;

  constructor(data?: PartialMessage<AttachLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.AttachLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttachLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttachLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttachLabelRequest;

  static equals(a: AttachLabelRequest | PlainMessage<AttachLabelRequest> | undefined, b: AttachLabelRequest | PlainMessage<AttachLabelRequest> | undefined): boolean;
}

/**
 * Response message for the AttachLabel rpc.
 *
 * @generated from message api.v1alpha1.org.labels.AttachLabelResponse
 */
export declare class AttachLabelResponse extends Message<AttachLabelResponse> {
  constructor(data?: PartialMessage<AttachLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.AttachLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttachLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttachLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttachLabelResponse;

  static equals(a: AttachLabelResponse | PlainMessage<AttachLabelResponse> | undefined, b: AttachLabelResponse | PlainMessage<AttachLabelResponse> | undefined): boolean;
}

/**
 * Request message for the GetLabeledEntityMapRequest rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapRequest
 */
export declare class GetLabeledEntityMapRequest extends Message<GetLabeledEntityMapRequest> {
  /**
   * The entity type to get back
   *
   * @generated from field: api.commons.LabeledEntity entity_type = 1;
   */
  entityType: LabeledEntity;

  constructor(data?: PartialMessage<GetLabeledEntityMapRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.GetLabeledEntityMapRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabeledEntityMapRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabeledEntityMapRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabeledEntityMapRequest;

  static equals(a: GetLabeledEntityMapRequest | PlainMessage<GetLabeledEntityMapRequest> | undefined, b: GetLabeledEntityMapRequest | PlainMessage<GetLabeledEntityMapRequest> | undefined): boolean;
}

/**
 * Response message for the GetLabeledEntityMapResponse rpc.
 *
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapResponse
 */
export declare class GetLabeledEntityMapResponse extends Message<GetLabeledEntityMapResponse> {
  /**
   * The map of entity ID to its attached labels
   *
   * @generated from field: map<string, api.v1alpha1.org.labels.GetLabeledEntityMapResponse.EntityLabels> entity_map = 1;
   */
  entityMap: { [key: string]: GetLabeledEntityMapResponse_EntityLabels };

  constructor(data?: PartialMessage<GetLabeledEntityMapResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.GetLabeledEntityMapResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabeledEntityMapResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabeledEntityMapResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabeledEntityMapResponse;

  static equals(a: GetLabeledEntityMapResponse | PlainMessage<GetLabeledEntityMapResponse> | undefined, b: GetLabeledEntityMapResponse | PlainMessage<GetLabeledEntityMapResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.labels.GetLabeledEntityMapResponse.EntityLabels
 */
export declare class GetLabeledEntityMapResponse_EntityLabels extends Message<GetLabeledEntityMapResponse_EntityLabels> {
  /**
   * Attached labels of a given entity
   *
   * @generated from field: repeated api.commons.org.Label labels = 1;
   */
  labels: Label[];

  constructor(data?: PartialMessage<GetLabeledEntityMapResponse_EntityLabels>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.labels.GetLabeledEntityMapResponse.EntityLabels";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabeledEntityMapResponse_EntityLabels;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabeledEntityMapResponse_EntityLabels;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabeledEntityMapResponse_EntityLabels;

  static equals(a: GetLabeledEntityMapResponse_EntityLabels | PlainMessage<GetLabeledEntityMapResponse_EntityLabels> | undefined, b: GetLabeledEntityMapResponse_EntityLabels | PlainMessage<GetLabeledEntityMapResponse_EntityLabels> | undefined): boolean;
}
