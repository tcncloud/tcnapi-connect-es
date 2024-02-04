// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/bireportgenerator/entities.proto (package api.v1alpha1.bireportgenerator, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { DayFilter, DeliveryOptions, DeliveryTimes, FormatOptions, TimePeriod } from "../../commons/bireportgenerator_pb.js";
import { Month } from "../../commons/enums_pb.js";

/**
 * ReportJob that can be scheduled to report dashboard data.
 *
 * @generated from message api.v1alpha1.bireportgenerator.ReportJob
 */
export const ReportJob = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.ReportJob",
  () => [
    { no: 1, name: "report_job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "dashboard_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "time_zone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "time_period", kind: "enum", T: proto3.getEnumType(TimePeriod) },
    { no: 7, name: "delivery_times", kind: "message", T: DeliveryTimes },
    { no: 8, name: "day_filter", kind: "message", T: DayFilter },
    { no: 9, name: "months", kind: "enum", T: proto3.getEnumType(Month), repeated: true },
    { no: 10, name: "format_options", kind: "message", T: FormatOptions },
    { no: 11, name: "delivery_options", kind: "message", T: DeliveryOptions },
    { no: 12, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "send_empty_report", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

