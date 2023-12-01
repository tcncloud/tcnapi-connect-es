// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/task.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.TaskStatus
 */
export const TaskStatus = proto3.makeEnum(
  "api.commons.TaskStatus",
  [
    {no: 0, name: "TASK_UNKNOWN"},
    {no: 2100, name: "TASK_SCHEDULED"},
    {no: 2110, name: "TASK_WAITING"},
    {no: 2120, name: "TASK_PREPARING"},
    {no: 2200, name: "TASK_RUNNING"},
    {no: 2300, name: "TASK_COMPLETED"},
    {no: 2310, name: "TASK_CANCELLED_TIMEOUT"},
    {no: 2320, name: "TASK_CANCELLED_USER"},
    {no: 2330, name: "TASK_CANCELLED_ADMIN"},
  ],
);

