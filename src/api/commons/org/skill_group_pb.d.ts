// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/org/skill_group.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * SkillGroup represents a skill group entity.
 *
 * @generated from message api.commons.org.SkillGroup
 */
export declare class SkillGroup extends Message<SkillGroup> {
  /**
   * The ID of the skill group
   *
   * @generated from field: string skill_group_id = 1;
   */
  skillGroupId: string;

  /**
   * The ID of the org the skill group belongs to.
   *
   * @generated from field: string org_id = 2;
   */
  orgId: string;

  /**
   * The name of the skill group.
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   * The description of the skill group.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * The skills and proficiencies for the skill group.
   *
   * @generated from field: repeated api.commons.org.SkillSet skill_sets = 5;
   */
  skillSets: SkillSet[];

  constructor(data?: PartialMessage<SkillGroup>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.SkillGroup";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillGroup;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillGroup;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillGroup;

  static equals(a: SkillGroup | PlainMessage<SkillGroup> | undefined, b: SkillGroup | PlainMessage<SkillGroup> | undefined): boolean;
}

/**
 * A set of a skill identifier and the proficiency in that skill
 *
 * The id of the skill (will be added in the future).
 * string skill_id = 1;
 *
 * @generated from message api.commons.org.SkillSet
 */
export declare class SkillSet extends Message<SkillSet> {
  /**
   * The proficiency of the skill as a percent [1,100].
   *
   * @generated from field: int32 proficiency = 2;
   */
  proficiency: number;

  /**
   * The sid of the skill
   *
   * @generated from field: int64 skill_sid = 3;
   */
  skillSid: bigint;

  constructor(data?: PartialMessage<SkillSet>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.SkillSet";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillSet;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillSet;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillSet;

  static equals(a: SkillSet | PlainMessage<SkillSet> | undefined, b: SkillSet | PlainMessage<SkillSet> | undefined): boolean;
}

