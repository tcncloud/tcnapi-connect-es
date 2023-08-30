// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/task_group.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.TaskGroupStatus
 */
export declare enum TaskGroupStatus {
  /**
   * @generated from enum value: TG_UNKNOWN = 0;
   */
  TG_UNKNOWN = 0,

  /**
   * "TG_PREPARE", "Task Group is being prepared for scheduler"),
   *
   * @generated from enum value: TG_PREPARE = 1000;
   */
  TG_PREPARE = 1000,

  /**
   * "TG_SCHEDULED", "Task Group is waiting for scheduler"),
   *
   * @generated from enum value: TG_SCHEDULED = 1100;
   */
  TG_SCHEDULED = 1100,

  /**
   * "TG_SCHEDULED_LINKING", "Task Group is scheduling a link campaign"),
   *
   * @generated from enum value: TG_SCHEDULED_LINKING = 1110;
   */
  TG_SCHEDULED_LINKING = 1110,

  /**
   * "TG_SCHEDULED_PAUSED", "Task Group will be set to paused when scheduled"),
   *
   * @generated from enum value: TG_SCHEDULED_PAUSED = 1120;
   */
  TG_SCHEDULED_PAUSED = 1120,

  /**
   * "TG_RUNNING", "Task Group is currently executing calls"),
   *
   * @generated from enum value: TG_RUNNING = 1200;
   */
  TG_RUNNING = 1200,

  /**
   * "TG_PAUSED", "Task Group has been signaled to pause calls until further notice"),
   *
   * @generated from enum value: TG_PAUSED = 1210;
   */
  TG_PAUSED = 1210,

  /**
   * "TG_WAITING", "Task Group has been signaled to wait until the schedule rules it will allow it to run again"),
   *
   * @generated from enum value: TG_WAITING = 1220;
   */
  TG_WAITING = 1220,

  /**
   * "TG_COMPLETED", "Task Group completed normally"),
   *
   * @generated from enum value: TG_COMPLETED = 1300;
   */
  TG_COMPLETED = 1300,

  /**
   * "TG_CANCELLED_TIMEOUT", "Task Group was cancelled due to time restrictions"),
   *
   * @generated from enum value: TG_CANCELLED_TIMEOUT = 1310;
   */
  TG_CANCELLED_TIMEOUT = 1310,

  /**
   * "TG_CANCELLED_USER", "Task Group was cancelled by login belonging to client"),
   *
   * @generated from enum value: TG_CANCELLED_USER = 1320;
   */
  TG_CANCELLED_USER = 1320,

  /**
   * "TG_CANCELLED_ADMIN", "Task Group was cancelled by some login not belonging to client with permissions"),
   *
   * @generated from enum value: TG_CANCELLED_ADMIN = 1330;
   */
  TG_CANCELLED_ADMIN = 1330,

  /**
   * "TG_SUMMED_COMPLETED", "Task Group completed normally and is summed"),
   *
   * @generated from enum value: TG_SUMMED_COMPLETED = 1400;
   */
  TG_SUMMED_COMPLETED = 1400,

  /**
   * "TG_SUMMED_CANCELLED_TIMEOUT", "Task Group timedout and is summed"),
   *
   * @generated from enum value: TG_SUMMED_CANCELLED_TIMEOUT = 1410;
   */
  TG_SUMMED_CANCELLED_TIMEOUT = 1410,

  /**
   * "TG_SUMMED_CANCELLED_USER", "Task Group was cancelled by login belonging to client and is summed"),
   *
   * @generated from enum value: TG_SUMMED_CANCELLED_USER = 1420;
   */
  TG_SUMMED_CANCELLED_USER = 1420,

  /**
   * "TG_SUMMED_CANCELLED_ADMIN", "Task Group was cancelled by login not belonging to client and is summed")
   *
   * @generated from enum value: TG_SUMMED_CANCELLED_ADMIN = 1430;
   */
  TG_SUMMED_CANCELLED_ADMIN = 1430,

  /**
   * "TG_SUMMED_COMPLETED", "Task Group completed normally, summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: TG_ACCOUNTINGEXPORT_COMPLETED = 1500;
   */
  TG_ACCOUNTINGEXPORT_COMPLETED = 1500,

  /**
   * "TG_SUMMED_CANCELLED_TIMEOUT", "Task Group timedout, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: TG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 1510;
   */
  TG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 1510,

  /**
   * "TG_SUMMED_CANCELLED_USER", "Task Group was cancelled by login belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: TG_ACCOUNTINGEXPORT_CANCELLED_USER = 1520;
   */
  TG_ACCOUNTINGEXPORT_CANCELLED_USER = 1520,

  /**
   * "TG_SUMMED_CANCELLED_ADMIN", "Task Group was cancelled by login not belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: TG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 1530;
   */
  TG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 1530,
}

