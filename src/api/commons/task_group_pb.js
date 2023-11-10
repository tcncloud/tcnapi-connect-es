// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/commons/task_group.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.TaskGroupStatus
 */
export const TaskGroupStatus = proto3.makeEnum(
  "api.commons.TaskGroupStatus",
  [
    {no: 0, name: "TG_UNKNOWN"},
    {no: 1000, name: "TG_PREPARE"},
    {no: 1100, name: "TG_SCHEDULED"},
    {no: 1110, name: "TG_SCHEDULED_LINKING"},
    {no: 1120, name: "TG_SCHEDULED_PAUSED"},
    {no: 1200, name: "TG_RUNNING"},
    {no: 1210, name: "TG_PAUSED"},
    {no: 1220, name: "TG_WAITING"},
    {no: 1300, name: "TG_COMPLETED"},
    {no: 1310, name: "TG_CANCELLED_TIMEOUT"},
    {no: 1320, name: "TG_CANCELLED_USER"},
    {no: 1330, name: "TG_CANCELLED_ADMIN"},
    {no: 1400, name: "TG_SUMMED_COMPLETED"},
    {no: 1410, name: "TG_SUMMED_CANCELLED_TIMEOUT"},
    {no: 1420, name: "TG_SUMMED_CANCELLED_USER"},
    {no: 1430, name: "TG_SUMMED_CANCELLED_ADMIN"},
    {no: 1500, name: "TG_ACCOUNTINGEXPORT_COMPLETED"},
    {no: 1510, name: "TG_ACCOUNTINGEXPORT_CANCELLED_TIMEOUT"},
    {no: 1520, name: "TG_ACCOUNTINGEXPORT_CANCELLED_USER"},
    {no: 1530, name: "TG_ACCOUNTINGEXPORT_CANCELLED_ADMIN"},
  ],
);

