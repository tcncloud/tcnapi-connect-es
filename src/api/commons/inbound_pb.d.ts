// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/inbound.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.InboundGroupStatus
 */
export declare enum InboundGroupStatus {
  /**
   * never use this
   *
   * @generated from enum value: IBG_UNKNOWN = 0;
   */
  IBG_UNKNOWN = 0,

  /**
   * "IBG_PREPARE", "Inbound Group is being prepared for scheduler"),
   *
   * @generated from enum value: IBG_PREPARE = 5000;
   */
  IBG_PREPARE = 5000,

  /**
   * "IBG_SCHEDULED", "Inbound Group is waiting for scheduler"),
   *
   * @generated from enum value: IBG_SCHEDULED = 5100;
   */
  IBG_SCHEDULED = 5100,

  /**
   * "IBG_RUNNING", "Inbound Group is currently executing calls"),
   *
   * @generated from enum value: IBG_RUNNING = 5200;
   */
  IBG_RUNNING = 5200,

  /**
   * "IBG_PAUSED", "Inbound Group has been signaled to pause calls until further notice"),
   *
   * @generated from enum value: IBG_PAUSED = 5210;
   */
  IBG_PAUSED = 5210,

  /**
   * "IBG_COMPLETED", "Inbound Group completed normally"),
   *
   * @generated from enum value: IBG_COMPLETED = 5300;
   */
  IBG_COMPLETED = 5300,

  /**
   * "IBG_CANCELLED_TIMEOUT", "Inbound Group was cancelled due to time restrictions"),
   *
   * @generated from enum value: IBG_CANCELLED_TIMEOUT = 5310;
   */
  IBG_CANCELLED_TIMEOUT = 5310,

  /**
   * "IBG_CANCELLED_USER", "Inbound Group was cancelled by login belonging to client"),
   *
   * @generated from enum value: IBG_CANCELLED_USER = 5320;
   */
  IBG_CANCELLED_USER = 5320,

  /**
   * "IBG_CANCELLED_ADMIN", "Inbound Group was cancelled by some login not belonging to client with permissions"),
   *
   * @generated from enum value: IBG_CANCELLED_ADMIN = 5330;
   */
  IBG_CANCELLED_ADMIN = 5330,

  /**
   * "IBG_SUMMED_COMPLETED", "Inbound Group completed normally and is summed"),
   *
   * @generated from enum value: IBG_SUMMED_COMPLETED = 5400;
   */
  IBG_SUMMED_COMPLETED = 5400,

  /**
   * "IBG_SUMMED_CANCELLED_TIMEOUT", "Inbound Group timedout and is summed"),
   *
   * @generated from enum value: IBG_SUMMED_CANCELLED_TIMEOUT = 5410;
   */
  IBG_SUMMED_CANCELLED_TIMEOUT = 5410,

  /**
   * "IBG_SUMMED_CANCELLED_USER", "Inbound Group was cancelled by login belonging to client and is summed"),
   *
   * @generated from enum value: IBG_SUMMED_CANCELLED_USER = 5420;
   */
  IBG_SUMMED_CANCELLED_USER = 5420,

  /**
   * "IBG_SUMMED_CANCELLED_ADMIN", "Inbound Group was cancelled by login not belonging to client and is summed"),
   *
   * @generated from enum value: IBG_SUMMED_CANCELLED_ADMIN = 5430;
   */
  IBG_SUMMED_CANCELLED_ADMIN = 5430,

  /**
   * "IBG_SUMMED_COMPLETED", "Inbound Group completed normally, summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: IBG_ACCOUNTINGEXPORT_COMPLETED = 5500;
   */
  IBG_ACCOUNTINGEXPORT_COMPLETED = 5500,

  /**
   * "IBG_SUMMED_CANCELLED_TIMEOUT", "Inbound Group timedout, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: IBG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 5510;
   */
  IBG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT = 5510,

  /**
   * "IBG_SUMMED_CANCELLED_USER", "Inbound Group was cancelled by login belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: IBG_ACCOUNTINGEXPORT_CANCELLED_USER = 5520;
   */
  IBG_ACCOUNTINGEXPORT_CANCELLED_USER = 5520,

  /**
   * "IBG_SUMMED_CANCELLED_ADMIN", "Inbound Group was cancelled by login not belonging to client, was summed normally, and has been exported into the accounting packages
   *
   * @generated from enum value: IBG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 5530;
   */
  IBG_ACCOUNTINGEXPORT_CANCELLED_ADMIN = 5530,
}

