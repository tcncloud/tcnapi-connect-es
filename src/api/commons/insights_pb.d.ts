// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/insights.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.InsightPermissionType
 */
export declare enum InsightPermissionType {
  /**
   * @generated from enum value: INSIGHT_PERMISSION_TYPE_COMMON_LIBRARY = 0;
   */
  COMMON_LIBRARY = 0,

  /**
   * @generated from enum value: INSIGHT_PERMISSION_TYPE_ORG = 1;
   */
  ORG = 1,
}

/**
 * @generated from enum api.commons.InsightType
 */
export declare enum InsightType {
  /**
   * @generated from enum value: INSIGHT_TYPE_TABLE_VIEW = 0;
   */
  TABLE_VIEW = 0,
}

/**
 * InsightVfsSchemaType is enum for column types in a vfs
 *
 * @generated from enum api.commons.InsightVfsSchemaType
 */
export declare enum InsightVfsSchemaType {
  /**
   * data type for string
   *
   * @generated from enum value: INSIGHT_VFS_SCHEMA_TYPE_STRING = 0;
   */
  STRING = 0,

  /**
   * data type for int
   *
   * @generated from enum value: INSIGHT_VFS_SCHEMA_TYPE_INT64 = 1;
   */
  INT64 = 1,

  /**
   * data type for float
   *
   * @generated from enum value: INSIGHT_VFS_SCHEMA_TYPE_FLOAT64 = 2;
   */
  FLOAT64 = 2,

  /**
   * data type for bool
   *
   * @generated from enum value: INSIGHT_VFS_SCHEMA_TYPE_BOOLEAN = 3;
   */
  BOOLEAN = 3,

  /**
   * data type for datetime
   *
   * @generated from enum value: INSIGHT_VFS_SCHEMA_TYPE_DATETIME = 4;
   */
  DATETIME = 4,
}

