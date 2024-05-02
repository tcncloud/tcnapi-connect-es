// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/bireportgenerator.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Weekday_Enum } from "./enums_pb.js";

/**
 * RepeatFrequency is an enum for how often a report should be executed.
 *
 * @generated from enum api.commons.RepeatFrequency
 * @deprecated
 */
export const RepeatFrequency = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.RepeatFrequency",
  [
    {no: 0, name: "REPEAT_FREQUENCY_UNSPECIFIED"},
    {no: 1, name: "REPEAT_FREQUENCY_ON_HOUR"},
    {no: 2, name: "REPEAT_FREQUENCY_15_MINUTES"},
    {no: 3, name: "REPEAT_FREQUENCY_30_MINUTES"},
  ],
);

/**
 * DayFilterType is an enum for the type of day filter.
 *
 * @generated from enum api.commons.DayFilterType
 * @deprecated
 */
export const DayFilterType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.DayFilterType",
  [
    {no: 0, name: "DAY_FILTER_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "DAY_FILTER_TYPE_EVERY_DAY", localName: "EVERY_DAY"},
    {no: 2, name: "DAY_FILTER_TYPE_DAY_OF_WEEK", localName: "DAY_OF_WEEK"},
    {no: 3, name: "DAY_FILTER_TYPE_DAY_OF_MONTH", localName: "DAY_OF_MONTH"},
  ],
);

/**
 * ReportFormat is an enum for the format of the report.
 *
 * @generated from enum api.commons.ReportFormat
 * @deprecated
 */
export const ReportFormat = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.ReportFormat",
  [
    {no: 0, name: "REPORT_FORMAT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "REPORT_FORMAT_CSV", localName: "CSV"},
  ],
);

/**
 * TimePeriodEnum is an enumeration of time period filters.
 *
 * @generated from enum api.commons.TimePeriod
 */
export const TimePeriod = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TimePeriod",
  [
    {no: 0, name: "TIME_PERIOD_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "TIME_PERIOD_TODAY", localName: "TODAY"},
    {no: 2, name: "TIME_PERIOD_THIS_WEEK", localName: "THIS_WEEK"},
    {no: 3, name: "TIME_PERIOD_THIS_MONTH", localName: "THIS_MONTH"},
    {no: 4, name: "TIME_PERIOD_THIS_YEAR", localName: "THIS_YEAR"},
    {no: 5, name: "TIME_PERIOD_THE_DAY_SO_FAR", localName: "THE_DAY_SO_FAR"},
    {no: 6, name: "TIME_PERIOD_WEEK_TO_DATE", localName: "WEEK_TO_DATE"},
    {no: 7, name: "TIME_PERIOD_MONTH_TO_DATE", localName: "MONTH_TO_DATE"},
    {no: 8, name: "TIME_PERIOD_YEAR_TO_DATE", localName: "YEAR_TO_DATE"},
    {no: 9, name: "TIME_PERIOD_YESTERDAY", localName: "YESTERDAY"},
    {no: 10, name: "TIME_PERIOD_DAY_BEFORE_YESTERDAY", localName: "DAY_BEFORE_YESTERDAY"},
    {no: 11, name: "TIME_PERIOD_THIS_DAY_LAST_WEEK", localName: "THIS_DAY_LAST_WEEK"},
    {no: 12, name: "TIME_PERIOD_PREVIOUS_WEEK", localName: "PREVIOUS_WEEK"},
    {no: 13, name: "TIME_PERIOD_PREVIOUS_MONTH", localName: "PREVIOUS_MONTH"},
    {no: 14, name: "TIME_PERIOD_PREVIOUS_YEAR", localName: "PREVIOUS_YEAR"},
    {no: 15, name: "TIME_PERIOD_LAST_15_MINUTES", localName: "LAST_15_MINUTES"},
    {no: 16, name: "TIME_PERIOD_LAST_30_MINUTES", localName: "LAST_30_MINUTES"},
    {no: 17, name: "TIME_PERIOD_LAST_1_HOUR", localName: "LAST_1_HOUR"},
    {no: 18, name: "TIME_PERIOD_LAST_2_HOURS", localName: "LAST_2_HOURS"},
    {no: 19, name: "TIME_PERIOD_LAST_3_HOURS", localName: "LAST_3_HOURS"},
    {no: 20, name: "TIME_PERIOD_LAST_4_HOURS", localName: "LAST_4_HOURS"},
    {no: 21, name: "TIME_PERIOD_LAST_6_HOURS", localName: "LAST_6_HOURS"},
    {no: 22, name: "TIME_PERIOD_LAST_12_HOURS", localName: "LAST_12_HOURS"},
    {no: 23, name: "TIME_PERIOD_LAST_24_HOURS", localName: "LAST_24_HOURS"},
    {no: 24, name: "TIME_PERIOD_LAST_2_DAYS", localName: "LAST_2_DAYS"},
    {no: 25, name: "TIME_PERIOD_LAST_3_DAYS", localName: "LAST_3_DAYS"},
    {no: 26, name: "TIME_PERIOD_LAST_7_DAYS", localName: "LAST_7_DAYS"},
    {no: 27, name: "TIME_PERIOD_LAST_2_WEEKS", localName: "LAST_2_WEEKS"},
    {no: 28, name: "TIME_PERIOD_LAST_30_DAYS", localName: "LAST_30_DAYS"},
    {no: 29, name: "TIME_PERIOD_LAST_60_DAYS", localName: "LAST_60_DAYS"},
    {no: 30, name: "TIME_PERIOD_LAST_90_DAYS", localName: "LAST_90_DAYS"},
    {no: 31, name: "TIME_PERIOD_LAST_6_MONTHS", localName: "LAST_6_MONTHS"},
    {no: 32, name: "TIME_PERIOD_LAST_1_YEAR", localName: "LAST_1_YEAR"},
    {no: 33, name: "TIME_PERIOD_LAST_2_YEARS", localName: "LAST_2_YEARS"},
    {no: 34, name: "TIME_PERIOD_LAST_5_YEARS", localName: "LAST_5_YEARS"},
  ],
);

/**
 * FilenamePartType is an enum for the type of filename part.
 *
 * @generated from enum api.commons.FilenamePartType
 */
export const FilenamePartType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.FilenamePartType",
  [
    {no: 0, name: "FILENAME_PART_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FILENAME_PART_TYPE_DASHBOARD_NAME", localName: "DASHBOARD_NAME"},
    {no: 2, name: "FILENAME_PART_TYPE_JOB_NAME", localName: "JOB_NAME"},
    {no: 3, name: "FILENAME_PART_TYPE_INSIGHT_NAME", localName: "INSIGHT_NAME"},
    {no: 4, name: "FILENAME_PART_TYPE_DATE_TIME_FILTER_TEXT", localName: "DATE_TIME_FILTER_TEXT"},
    {no: 5, name: "FILENAME_PART_TYPE_START_DATE_TIME", localName: "START_DATE_TIME"},
    {no: 6, name: "FILENAME_PART_TYPE_END_DATE_TIME", localName: "END_DATE_TIME"},
    {no: 7, name: "FILENAME_PART_TYPE_REPORT_DATE_TIME", localName: "REPORT_DATE_TIME"},
    {no: 8, name: "FILENAME_PART_TYPE_STATIC_TEXT", localName: "STATIC_TEXT"},
  ],
);

/**
 * DeliveryTimes is a message for the delivery times of a report.
 *
 * @generated from message api.commons.DeliveryTimes
 * @deprecated
 */
export const DeliveryTimes = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DeliveryTimes",
  () => [
    { no: 2, name: "delivery_times", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 3, name: "repeat_frequency", kind: "enum", T: proto3.getEnumType(RepeatFrequency) },
  ],
);

/**
 * DayOfWeekFilter filters the days of the week for a report.
 *
 * @generated from message api.commons.DayOfWeekFilter
 * @deprecated
 */
export const DayOfWeekFilter = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DayOfWeekFilter",
  () => [
    { no: 1, name: "days_of_weeks", kind: "enum", T: proto3.getEnumType(Weekday_Enum), repeated: true },
    { no: 2, name: "weeks_of_months", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * DayOfMonthFilter filters the days of the month for a report.
 *
 * @generated from message api.commons.DayOfMonthFilter
 * @deprecated
 */
export const DayOfMonthFilter = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DayOfMonthFilter",
  () => [
    { no: 1, name: "day_of_months", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 2, name: "is_last_day_of_month", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * DayFilter is used to specify days for a report to be delivered.
 *
 * @generated from message api.commons.DayFilter
 * @deprecated
 */
export const DayFilter = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DayFilter",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DayFilterType) },
    { no: 2, name: "day_of_week_filter", kind: "message", T: DayOfWeekFilter, oneof: "filter" },
    { no: 3, name: "day_of_month_filter", kind: "message", T: DayOfMonthFilter, oneof: "filter" },
  ],
);

/**
 * FormatOptions is a message for the format options of a report.
 *
 * @generated from message api.commons.FormatOptions
 * @deprecated
 */
export const FormatOptions = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.FormatOptions",
  () => [
    { no: 1, name: "report_format", kind: "enum", T: proto3.getEnumType(ReportFormat) },
    { no: 2, name: "filename_parts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * DeliveryOptions is a message for the delivery options of a report.
 *
 * @generated from message api.commons.DeliveryOptions
 * @deprecated
 */
export const DeliveryOptions = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.DeliveryOptions",
  () => [
    { no: 1, name: "transfer_config_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "failure_notification_emails", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * FilenamePart is a message for a part of the filename.
 *
 * @generated from message api.commons.FilenamePart
 */
export const FilenamePart = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.FilenamePart",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(FilenamePartType) },
    { no: 2, name: "static_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TransferOptions is a message for the transfer options of a report.
 *
 * @generated from message api.commons.TransferOptions
 */
export const TransferOptions = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TransferOptions",
  () => [
    { no: 1, name: "transfer_config_sid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "filename_parts", kind: "message", T: FilenamePart, repeated: true },
  ],
);

