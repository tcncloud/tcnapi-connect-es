// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file api/commons/user.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * Facilitate user filtering on archived state
 *
 * @generated from enum api.commons.UserArchivedStateFilter
 */
export declare enum UserArchivedStateFilter {
  /**
   * Do not filter (get all users)
   *
   * @generated from enum value: USER_ARCHIVED_STATE_FILTER_ALL = 0;
   */
  ALL = 0,

  /**
   * Filter to only archived user
   *
   * @generated from enum value: USER_ARCHIVED_STATE_FILTER_ARCHIVED = 1;
   */
  ARCHIVED = 1,

  /**
   * Filter to only unarchived (active) user
   *
   * @generated from enum value: USER_ARCHIVED_STATE_FILTER_UNARCHIVED = 2;
   */
  UNARCHIVED = 2,
}

