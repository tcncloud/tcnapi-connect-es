// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/manual.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.ManualDialGroupStatus
 */
export declare enum ManualDialGroupStatus {
  /**
   * @generated from enum value: MDG_UNKNOWN = 0;
   */
  MDG_UNKNOWN = 0,

  /**
   * "MDG_PREPARE", "Manual Dial Group is being prepared for scheduler"),
   *
   * @generated from enum value: MDG_PREPARE = 6000;
   */
  MDG_PREPARE = 6000,

  /**
   * "MDG_SCHEDULED", "Manual Dial Group is waiting for scheduler"),
   *
   * @generated from enum value: MDG_SCHEDULED = 6100;
   */
  MDG_SCHEDULED = 6100,

  /**
   * "MDG_RUNNING", "Manual Dial Group is currently executing calls"),
   *
   * @generated from enum value: MDG_RUNNING = 6200;
   */
  MDG_RUNNING = 6200,

  /**
   * "MDG_COMPLETED", "Manual Dial Group completed normally"),
   *
   * @generated from enum value: MDG_COMPLETED = 6300;
   */
  MDG_COMPLETED = 6300,

  /**
   * "MDG_CANCELLED_TIMEOUT", "Manual Dial Group was cancelled due to time restrictions"),
   *
   * @generated from enum value: MDG_CANCELLED_TIMEOUT = 6310;
   */
  MDG_CANCELLED_TIMEOUT = 6310,

  /**
   * "MDG_CANCELLED_USER", "Manual Dial Group was cancelled by login belonging to client"),
   *
   * @generated from enum value: MDG_CANCELLED_USER = 6320;
   */
  MDG_CANCELLED_USER = 6320,

  /**
   * "MDG_CANCELLED_ADMIN", "Manual Dial Group was cancelled by some login not belonging to client with permissions"),
   *
   * @generated from enum value: MDG_CANCELLED_ADMIN = 6330;
   */
  MDG_CANCELLED_ADMIN = 6330,

  /**
   * "MDG_SUMMED_COMPLETED", "Manual Dial Group completed normally and is summed"),
   *
   * @generated from enum value: MDG_SUMMED_COMPLETED = 6400;
   */
  MDG_SUMMED_COMPLETED = 6400,

  /**
   * "MDG_SUMMED_CANCELLED_TIMEOUT", "Manual Dial Group timedout and is summed"),
   *
   * @generated from enum value: MDG_SUMMED_CANCELLED_TIMEOUT = 6410;
   */
  MDG_SUMMED_CANCELLED_TIMEOUT = 6410,

  /**
   * "MDG_SUMMED_CANCELLED_USER", "Manual Dial Group was cancelled by login belonging to client and is summed"),
   *
   * @generated from enum value: MDG_SUMMED_CANCELLED_USER = 6420;
   */
  MDG_SUMMED_CANCELLED_USER = 6420,

  /**
   * "MDG_SUMMED_CANCELLED_ADMIN", "Manual Dial Group was cancelled by login not belonging to client and is summed"),
   *
   * @generated from enum value: MDG_SUMMED_CANCELLED_ADMIN = 6430;
   */
  MDG_SUMMED_CANCELLED_ADMIN = 6430,

  /**
   * "MDG_SUMMED_COMPLETED", "Manual Dial Group completed normally, summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: MDG_ACCOUNTINGEXPORT_COMPLETED = 6500;
   */
  MDG_ACCOUNTINGEXPORT_COMPLETED = 6500,

  /**
   * "MDG_SUMMED_CANCELLED_TIMEOUT", "Manual Dial Group timedout, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: MDG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 6510;
   */
  MDG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 6510,

  /**
   * "MDG_SUMMED_CANCELLED_USER", "Manual Dial Group was cancelled by login belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: MDG_ACCOUNTINGEXPORT_CANCELLED_USER = 6520;
   */
  MDG_ACCOUNTINGEXPORT_CANCELLED_USER = 6520,

  /**
   * "MDG_SUMMED_CANCELLED_ADMIN", "Manual Dial Group was cancelled by login not belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: MDG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 6530;
   */
  MDG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 6530,
}

