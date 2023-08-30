// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/task.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.TaskStatus
 */
export declare enum TaskStatus {
  /**
   * @generated from enum value: TASK_UNKNOWN = 0;
   */
  TASK_UNKNOWN = 0,

  /**
   * "TASK_SCHEDULED", "Task is waiting for scheduler"),
   *
   * @generated from enum value: TASK_SCHEDULED = 2100;
   */
  TASK_SCHEDULED = 2100,

  /**
   * "TASK_WAITING", "Task was running and is waiting to send next call"),
   *
   * @generated from enum value: TASK_WAITING = 2110;
   */
  TASK_WAITING = 2110,

  /**
   * "TASK_PREPARING", " Task is currently beeing prepared by the scheduler"),
   *
   * @generated from enum value: TASK_PREPARING = 2120;
   */
  TASK_PREPARING = 2120,

  /**
   * "TASK_RUNNING", "Task is currently executing calls"),
   *
   * @generated from enum value: TASK_RUNNING = 2200;
   */
  TASK_RUNNING = 2200,

  /**
   * "TASK_COMPLETED", "Task was completed normally"),
   *
   * @generated from enum value: TASK_COMPLETED = 2300;
   */
  TASK_COMPLETED = 2300,

  /**
   * "TASK_CANCELLED_TIMEOUT", "Task was cancelled due to time restrictions"),
   *
   * @generated from enum value: TASK_CANCELLED_TIMEOUT = 2310;
   */
  TASK_CANCELLED_TIMEOUT = 2310,

  /**
   * "TASK_CANCELLED_USER", "Task was cancelled by login belonging to client"),
   *
   * @generated from enum value: TASK_CANCELLED_USER = 2320;
   */
  TASK_CANCELLED_USER = 2320,

  /**
   * "TASK_CANCELLED_ADMIN", "Task was cancelled by some login not belonging to client with permissions"),
   *
   * @generated from enum value: TASK_CANCELLED_ADMIN = 2330;
   */
  TASK_CANCELLED_ADMIN = 2330,
}

