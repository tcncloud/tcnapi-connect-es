// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/org/labels.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EntityType } from "../labels_pb.js";

/**
 * Label is an entity message.
 *
 * @generated from message api.commons.org.Label
 */
export declare class Label extends Message<Label> {
  /**
   * labels are owned by orgs. this
   * could be nasty in regards to
   * org trusts and groups.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

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
  static readonly typeName = "api.commons.org.Label";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Label;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Label;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Label;

  static equals(a: Label | PlainMessage<Label> | undefined, b: Label | PlainMessage<Label> | undefined): boolean;
}

/**
 * Entity message for a label assignment.
 *
 * @generated from message api.commons.org.LabelAssignment
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
   * the id of the organization the label belongs too
   *
   * @generated from field: string org_id = 4;
   */
  orgId: string;

  /**
   * The label associated with the label_id.
   * This will only be populated during the GetLabelAssignments RPC
   * if the request field PopulateLabelInfo is set to true.
   *
   * @generated from field: api.commons.org.Label label = 5;
   */
  label?: Label;

  constructor(data?: PartialMessage<LabelAssignment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.LabelAssignment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LabelAssignment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LabelAssignment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LabelAssignment;

  static equals(a: LabelAssignment | PlainMessage<LabelAssignment> | undefined, b: LabelAssignment | PlainMessage<LabelAssignment> | undefined): boolean;
}

