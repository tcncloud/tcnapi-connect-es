// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/labels.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EntityType } from "../../commons/labels_pb.js";
import type { Permission } from "../../commons/auth/perms_pb.js";

/**
 * Label is an entity message.
 *
 * @generated from message api.v1alpha1.org.Label
 */
export declare class Label extends Message<Label> {
  /**
   * simply the name of the label.
   * 'Team A', 'Medical', etc
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * the description of the label.
   *
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * Hex color code of the label.
   *
   * @generated from field: string color = 7;
   */
  color: string;

  /**
   * Id of the label.
   *
   * @generated from field: string label_id = 8;
   */
  labelId: string;

  /**
   * whether or not the label is deleted.
   *
   * @generated from field: bool deleted = 9;
   */
  deleted: boolean;

  constructor(data?: PartialMessage<Label>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.Label";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Label;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Label;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Label;

  static equals(a: Label | PlainMessage<Label> | undefined, b: Label | PlainMessage<Label> | undefined): boolean;
}

/**
 * Request message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.CreateLabelRequest
 */
export declare class CreateLabelRequest extends Message<CreateLabelRequest> {
  /**
   * @generated from field: api.v1alpha1.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<CreateLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLabelRequest;

  static equals(a: CreateLabelRequest | PlainMessage<CreateLabelRequest> | undefined, b: CreateLabelRequest | PlainMessage<CreateLabelRequest> | undefined): boolean;
}

/**
 * Response message for the CreateLabel rpc.
 *
 * @generated from message api.v1alpha1.org.CreateLabelResponse
 */
export declare class CreateLabelResponse extends Message<CreateLabelResponse> {
  /**
   * The ID of the returned label.
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  constructor(data?: PartialMessage<CreateLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLabelResponse;

  static equals(a: CreateLabelResponse | PlainMessage<CreateLabelResponse> | undefined, b: CreateLabelResponse | PlainMessage<CreateLabelResponse> | undefined): boolean;
}

/**
 * Request message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.DeleteLabelRequest
 */
export declare class DeleteLabelRequest extends Message<DeleteLabelRequest> {
  /**
   * The id of the label.
   *
   * @generated from field: string label_id = 2;
   */
  labelId: string;

  constructor(data?: PartialMessage<DeleteLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLabelRequest;

  static equals(a: DeleteLabelRequest | PlainMessage<DeleteLabelRequest> | undefined, b: DeleteLabelRequest | PlainMessage<DeleteLabelRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteLabel rpc.
 *
 * @generated from message api.v1alpha1.org.DeleteLabelResponse
 */
export declare class DeleteLabelResponse extends Message<DeleteLabelResponse> {
  constructor(data?: PartialMessage<DeleteLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteLabelResponse;

  static equals(a: DeleteLabelResponse | PlainMessage<DeleteLabelResponse> | undefined, b: DeleteLabelResponse | PlainMessage<DeleteLabelResponse> | undefined): boolean;
}

/**
 * Request message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.ListLabelsRequest
 */
export declare class ListLabelsRequest extends Message<ListLabelsRequest> {
  constructor(data?: PartialMessage<ListLabelsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListLabelsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsRequest;

  static equals(a: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined, b: ListLabelsRequest | PlainMessage<ListLabelsRequest> | undefined): boolean;
}

/**
 * Response message for the ListLabels rpc.
 *
 * @generated from message api.v1alpha1.org.ListLabelsResponse
 */
export declare class ListLabelsResponse extends Message<ListLabelsResponse> {
  /**
   * @generated from field: repeated api.v1alpha1.org.Label labels = 1;
   */
  labels: Label[];

  constructor(data?: PartialMessage<ListLabelsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListLabelsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListLabelsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListLabelsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListLabelsResponse;

  static equals(a: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined, b: ListLabelsResponse | PlainMessage<ListLabelsResponse> | undefined): boolean;
}

/**
 * Request message for the GetLabel RPC.
 *
 * @generated from message api.v1alpha1.org.GetLabelRequest
 */
export declare class GetLabelRequest extends Message<GetLabelRequest> {
  /**
   * The id of the label.
   *
   * @generated from field: string label_id = 2;
   */
  labelId: string;

  constructor(data?: PartialMessage<GetLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelRequest;

  static equals(a: GetLabelRequest | PlainMessage<GetLabelRequest> | undefined, b: GetLabelRequest | PlainMessage<GetLabelRequest> | undefined): boolean;
}

/**
 * Response message for the GetLabel RPC.
 *
 * @generated from message api.v1alpha1.org.GetLabelResponse
 */
export declare class GetLabelResponse extends Message<GetLabelResponse> {
  /**
   * @generated from field: api.v1alpha1.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<GetLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLabelResponse;

  static equals(a: GetLabelResponse | PlainMessage<GetLabelResponse> | undefined, b: GetLabelResponse | PlainMessage<GetLabelResponse> | undefined): boolean;
}

/**
 * Request message for the UpdateLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLabelRequest
 */
export declare class UpdateLabelRequest extends Message<UpdateLabelRequest> {
  /**
   * The label to be updated.
   *
   * @generated from field: api.v1alpha1.org.Label label = 1;
   */
  label?: Label;

  constructor(data?: PartialMessage<UpdateLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLabelRequest;

  static equals(a: UpdateLabelRequest | PlainMessage<UpdateLabelRequest> | undefined, b: UpdateLabelRequest | PlainMessage<UpdateLabelRequest> | undefined): boolean;
}

/**
 * Response message for the UpdateLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UpdateLabelResponse
 */
export declare class UpdateLabelResponse extends Message<UpdateLabelResponse> {
  constructor(data?: PartialMessage<UpdateLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateLabelResponse;

  static equals(a: UpdateLabelResponse | PlainMessage<UpdateLabelResponse> | undefined, b: UpdateLabelResponse | PlainMessage<UpdateLabelResponse> | undefined): boolean;
}

/**
 * Entity message for a label assignment.
 *
 * @generated from message api.v1alpha1.org.LabelAssignment
 */
export declare class LabelAssignment extends Message<LabelAssignment> {
  /**
   * The ID of the label.
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  /**
   * type of entity being labelled.
   *
   * @generated from field: api.commons.EntityType type = 2;
   */
  type: EntityType;

  /**
   * id of the entity being labelled.
   *
   * @generated from field: string entity_id = 3;
   */
  entityId: string;

  /**
   * The label associated with the label_id.
   * This will only be populated during the GetLabelAssignments RPC
   * if the request field PopulateLabelInfo is set to true.
   *
   * @generated from field: api.v1alpha1.org.Label label = 5;
   */
  label?: Label;

  constructor(data?: PartialMessage<LabelAssignment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.LabelAssignment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelAssignment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelAssignment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelAssignment;

  static equals(a: LabelAssignment | PlainMessage<LabelAssignment> | undefined, b: LabelAssignment | PlainMessage<LabelAssignment> | undefined): boolean;
}

/**
 * Request message for the AssignLabel RPC.
 *
 * @generated from message api.v1alpha1.org.AssignLabelRequest
 */
export declare class AssignLabelRequest extends Message<AssignLabelRequest> {
  /**
   * The label assignments.
   *
   * @generated from field: repeated api.v1alpha1.org.LabelAssignment assignments = 2;
   */
  assignments: LabelAssignment[];

  constructor(data?: PartialMessage<AssignLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignLabelRequest;

  static equals(a: AssignLabelRequest | PlainMessage<AssignLabelRequest> | undefined, b: AssignLabelRequest | PlainMessage<AssignLabelRequest> | undefined): boolean;
}

/**
 * Response message for the AssingLabel RPC.
 *
 * @generated from message api.v1alpha1.org.AssignLabelResponse
 */
export declare class AssignLabelResponse extends Message<AssignLabelResponse> {
  constructor(data?: PartialMessage<AssignLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignLabelResponse;

  static equals(a: AssignLabelResponse | PlainMessage<AssignLabelResponse> | undefined, b: AssignLabelResponse | PlainMessage<AssignLabelResponse> | undefined): boolean;
}

/**
 * Request message for the UnassignLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignLabelRequest
 */
export declare class UnassignLabelRequest extends Message<UnassignLabelRequest> {
  /**
   * The assignments to be deleted.
   * The type, entity_id, label_id, and org_id are used to
   * delete a label.
   *
   * @generated from field: repeated api.v1alpha1.org.LabelAssignment assignments = 2;
   */
  assignments: LabelAssignment[];

  constructor(data?: PartialMessage<UnassignLabelRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnassignLabelRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnassignLabelRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnassignLabelRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnassignLabelRequest;

  static equals(a: UnassignLabelRequest | PlainMessage<UnassignLabelRequest> | undefined, b: UnassignLabelRequest | PlainMessage<UnassignLabelRequest> | undefined): boolean;
}

/**
 * Response message for the UnassingLabel RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignLabelResponse
 */
export declare class UnassignLabelResponse extends Message<UnassignLabelResponse> {
  constructor(data?: PartialMessage<UnassignLabelResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnassignLabelResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnassignLabelResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnassignLabelResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnassignLabelResponse;

  static equals(a: UnassignLabelResponse | PlainMessage<UnassignLabelResponse> | undefined, b: UnassignLabelResponse | PlainMessage<UnassignLabelResponse> | undefined): boolean;
}

/**
 * Reqeust message for the GetAssignmentCounts RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignmentCountsRequest
 */
export declare class GetAssignmentCountsRequest extends Message<GetAssignmentCountsRequest> {
  /**
   * The ID of the label.
   *
   * @generated from field: string label_id = 1;
   */
  labelId: string;

  constructor(data?: PartialMessage<GetAssignmentCountsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetAssignmentCountsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssignmentCountsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssignmentCountsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssignmentCountsRequest;

  static equals(a: GetAssignmentCountsRequest | PlainMessage<GetAssignmentCountsRequest> | undefined, b: GetAssignmentCountsRequest | PlainMessage<GetAssignmentCountsRequest> | undefined): boolean;
}

/**
 * Response message for the GetASsignmentCounts RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignmentCountsResponse
 */
export declare class GetAssignmentCountsResponse extends Message<GetAssignmentCountsResponse> {
  /**
   * The key is the int32 value of the api.commons.EntityType enum.
   * The value is the count of all assignments belonging to the
   * type.
   *
   * @generated from field: map<int32, int64> counts = 1;
   */
  counts: { [key: number]: bigint };

  constructor(data?: PartialMessage<GetAssignmentCountsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetAssignmentCountsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssignmentCountsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssignmentCountsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssignmentCountsResponse;

  static equals(a: GetAssignmentCountsResponse | PlainMessage<GetAssignmentCountsResponse> | undefined, b: GetAssignmentCountsResponse | PlainMessage<GetAssignmentCountsResponse> | undefined): boolean;
}

/**
 * Request message for the GetAssignableLabels RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignableLabelsRequest
 */
export declare class GetAssignableLabelsRequest extends Message<GetAssignableLabelsRequest> {
  /**
   * The given permission is used as the required permission
   * for this RPC. It is also used to return a list of
   * attached labels to the permission for the current user.
   *
   * @generated from field: api.commons.auth.Permission permission = 1;
   */
  permission: Permission;

  constructor(data?: PartialMessage<GetAssignableLabelsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetAssignableLabelsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssignableLabelsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssignableLabelsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssignableLabelsRequest;

  static equals(a: GetAssignableLabelsRequest | PlainMessage<GetAssignableLabelsRequest> | undefined, b: GetAssignableLabelsRequest | PlainMessage<GetAssignableLabelsRequest> | undefined): boolean;
}

/**
 * Response message for the GetAssignableLabels RPC.
 *
 * @generated from message api.v1alpha1.org.GetAssignableLabelsResponse
 */
export declare class GetAssignableLabelsResponse extends Message<GetAssignableLabelsResponse> {
  /**
   * The list of labels available to the current user based
   * on the users permissions.
   *
   * @generated from field: repeated api.v1alpha1.org.Label labels = 1;
   */
  labels: Label[];

  constructor(data?: PartialMessage<GetAssignableLabelsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetAssignableLabelsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAssignableLabelsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAssignableLabelsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAssignableLabelsResponse;

  static equals(a: GetAssignableLabelsResponse | PlainMessage<GetAssignableLabelsResponse> | undefined, b: GetAssignableLabelsResponse | PlainMessage<GetAssignableLabelsResponse> | undefined): boolean;
}
