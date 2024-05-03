// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/labels.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * EntityType is used to determine what type of Entity
 * a label is assigned to.
 * The values of these enums MUST match up with the core.EntityType
 * iota in the labels app.
 *
 * @generated from enum api.commons.EntityType
 */
export declare enum EntityType {
  /**
   * @generated from enum value: ENTITY_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: ENTITY_TYPE_USER = 1;
   */
  USER = 1,

  /**
   * @generated from enum value: ENTITY_TYPE_LMS_PIPELINE = 2;
   */
  LMS_PIPELINE = 2,
}

/**
 * LabeledEntity is an enum that represents the different types of entities that can be labeled.
 *
 * @generated from enum api.commons.LabeledEntity
 */
export declare enum LabeledEntity {
  /**
   * LABELED_ENTITY_UNSPECIFIED is an unspecified entity type.
   *
   * @generated from enum value: LABELED_ENTITY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * LABELED_ENTITY_SKILL_GROUP is a skill group entity type.
   *
   * @generated from enum value: LABELED_ENTITY_SKILL_GROUP = 1;
   */
  SKILL_GROUP = 1,

  /**
   * LABELED_ENTITY_User is a user entity type.
   *
   * @generated from enum value: LABELED_ENTITY_USER = 2;
   */
  USER = 2,
}

