// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/commons/enums.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.Month
 */
export const Month = proto3.makeEnum(
  "api.commons.Month",
  [
    {no: 0, name: "MONTH_JANUARY", localName: "JANUARY"},
    {no: 1, name: "MONTH_FEBRUARY", localName: "FEBRUARY"},
    {no: 2, name: "MONTH_MARCH", localName: "MARCH"},
    {no: 3, name: "MONTH_APRIL", localName: "APRIL"},
    {no: 4, name: "MONTH_MAY", localName: "MAY"},
    {no: 5, name: "MONTH_JUNE", localName: "JUNE"},
    {no: 6, name: "MONTH_JULY", localName: "JULY"},
    {no: 7, name: "MONTH_AUGUST", localName: "AUGUST"},
    {no: 8, name: "MONTH_SEPTEMBER", localName: "SEPTEMBER"},
    {no: 9, name: "MONTH_OCTOBER", localName: "OCTOBER"},
    {no: 10, name: "MONTH_NOVEMBER", localName: "NOVEMBER"},
    {no: 11, name: "MONTH_DECEMBER", localName: "DECEMBER"},
  ],
);

/**
 * @generated from message api.commons.Weekday
 */
export const Weekday = proto3.makeMessageType(
  "api.commons.Weekday",
  [],
);

/**
 * @generated from enum api.commons.Weekday.Enum
 */
export const Weekday_Enum = proto3.makeEnum(
  "api.commons.Weekday.Enum",
  [
    {no: 0, name: "SUNDAY"},
    {no: 1, name: "MONDAY"},
    {no: 2, name: "TUESDAY"},
    {no: 3, name: "WEDNESDAY"},
    {no: 4, name: "THURSDAY"},
    {no: 5, name: "FRIDAY"},
    {no: 6, name: "SATURDAY"},
  ],
);

/**
 * @generated from message api.commons.CronRequestType
 */
export const CronRequestType = proto3.makeMessageType(
  "api.commons.CronRequestType",
  [],
);

/**
 * @generated from enum api.commons.CronRequestType.Enum
 */
export const CronRequestType_Enum = proto3.makeEnum(
  "api.commons.CronRequestType.Enum",
  [
    {no: 0, name: "INVALID"},
    {no: 1, name: "SFTP"},
  ],
);

