// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/bireportgenerator.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Weekday_Enum } from "./enums_pb.js";

/**
 * RepeatFrequency is an enum for how often a report should be executed.
 *
 * @generated from enum api.commons.RepeatFrequency
 * @deprecated
 */
export declare enum RepeatFrequency {
  /**
   * @generated from enum value: REPEAT_FREQUENCY_UNSPECIFIED = 0;
   */
  REPEAT_FREQUENCY_UNSPECIFIED = 0,

  /**
   * @generated from enum value: REPEAT_FREQUENCY_ON_HOUR = 1;
   */
  REPEAT_FREQUENCY_ON_HOUR = 1,

  /**
   * @generated from enum value: REPEAT_FREQUENCY_15_MINUTES = 2;
   */
  REPEAT_FREQUENCY_15_MINUTES = 2,

  /**
   * @generated from enum value: REPEAT_FREQUENCY_30_MINUTES = 3;
   */
  REPEAT_FREQUENCY_30_MINUTES = 3,
}

/**
 * DayFilterType is an enum for the type of day filter.
 *
 * @generated from enum api.commons.DayFilterType
 * @deprecated
 */
export declare enum DayFilterType {
  /**
   * @generated from enum value: DAY_FILTER_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DAY_FILTER_TYPE_EVERY_DAY = 1;
   */
  EVERY_DAY = 1,

  /**
   * @generated from enum value: DAY_FILTER_TYPE_DAY_OF_WEEK = 2;
   */
  DAY_OF_WEEK = 2,

  /**
   * @generated from enum value: DAY_FILTER_TYPE_DAY_OF_MONTH = 3;
   */
  DAY_OF_MONTH = 3,
}

/**
 * ReportFormat is an enum for the format of the report.
 *
 * @generated from enum api.commons.ReportFormat
 */
export declare enum ReportFormat {
  /**
   * @generated from enum value: REPORT_FORMAT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: REPORT_FORMAT_CSV = 1;
   */
  CSV = 1,
}

/**
 * TimePeriodEnum is an enumeration of time period filters.
 *
 * @generated from enum api.commons.TimePeriod
 */
export declare enum TimePeriod {
  /**
   * @generated from enum value: TIME_PERIOD_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TIME_PERIOD_TODAY = 1;
   */
  TODAY = 1,

  /**
   * @generated from enum value: TIME_PERIOD_THIS_WEEK = 2;
   */
  THIS_WEEK = 2,

  /**
   * @generated from enum value: TIME_PERIOD_THIS_MONTH = 3;
   */
  THIS_MONTH = 3,

  /**
   * @generated from enum value: TIME_PERIOD_THIS_YEAR = 4;
   */
  THIS_YEAR = 4,

  /**
   * @generated from enum value: TIME_PERIOD_THE_DAY_SO_FAR = 5;
   */
  THE_DAY_SO_FAR = 5,

  /**
   * @generated from enum value: TIME_PERIOD_WEEK_TO_DATE = 6;
   */
  WEEK_TO_DATE = 6,

  /**
   * @generated from enum value: TIME_PERIOD_MONTH_TO_DATE = 7;
   */
  MONTH_TO_DATE = 7,

  /**
   * @generated from enum value: TIME_PERIOD_YEAR_TO_DATE = 8;
   */
  YEAR_TO_DATE = 8,

  /**
   * @generated from enum value: TIME_PERIOD_YESTERDAY = 9;
   */
  YESTERDAY = 9,

  /**
   * @generated from enum value: TIME_PERIOD_DAY_BEFORE_YESTERDAY = 10;
   */
  DAY_BEFORE_YESTERDAY = 10,

  /**
   * @generated from enum value: TIME_PERIOD_THIS_DAY_LAST_WEEK = 11;
   */
  THIS_DAY_LAST_WEEK = 11,

  /**
   * @generated from enum value: TIME_PERIOD_PREVIOUS_WEEK = 12;
   */
  PREVIOUS_WEEK = 12,

  /**
   * @generated from enum value: TIME_PERIOD_PREVIOUS_MONTH = 13;
   */
  PREVIOUS_MONTH = 13,

  /**
   * @generated from enum value: TIME_PERIOD_PREVIOUS_YEAR = 14;
   */
  PREVIOUS_YEAR = 14,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_15_MINUTES = 15;
   */
  LAST_15_MINUTES = 15,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_30_MINUTES = 16;
   */
  LAST_30_MINUTES = 16,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_1_HOUR = 17;
   */
  LAST_1_HOUR = 17,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_2_HOURS = 18;
   */
  LAST_2_HOURS = 18,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_3_HOURS = 19;
   */
  LAST_3_HOURS = 19,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_4_HOURS = 20;
   */
  LAST_4_HOURS = 20,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_6_HOURS = 21;
   */
  LAST_6_HOURS = 21,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_12_HOURS = 22;
   */
  LAST_12_HOURS = 22,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_24_HOURS = 23;
   */
  LAST_24_HOURS = 23,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_2_DAYS = 24;
   */
  LAST_2_DAYS = 24,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_3_DAYS = 25;
   */
  LAST_3_DAYS = 25,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_7_DAYS = 26;
   */
  LAST_7_DAYS = 26,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_2_WEEKS = 27;
   */
  LAST_2_WEEKS = 27,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_30_DAYS = 28;
   */
  LAST_30_DAYS = 28,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_60_DAYS = 29;
   */
  LAST_60_DAYS = 29,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_90_DAYS = 30;
   */
  LAST_90_DAYS = 30,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_6_MONTHS = 31;
   */
  LAST_6_MONTHS = 31,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_1_YEAR = 32;
   */
  LAST_1_YEAR = 32,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_2_YEARS = 33;
   */
  LAST_2_YEARS = 33,

  /**
   * @generated from enum value: TIME_PERIOD_LAST_5_YEARS = 34;
   */
  LAST_5_YEARS = 34,
}

/**
 * DeliveryTimes is a message for the delivery times of a report.
 *
 * @generated from message api.commons.DeliveryTimes
 * @deprecated
 */
export declare class DeliveryTimes extends Message<DeliveryTimes> {
  /**
   * seconds after midnight when the report should be delivered.
   *
   * @generated from field: repeated int32 delivery_times = 2;
   */
  deliveryTimes: number[];

  /**
   * repeat_frequency is the frequency of the report.
   *
   * @generated from field: api.commons.RepeatFrequency repeat_frequency = 3;
   */
  repeatFrequency: RepeatFrequency;

  constructor(data?: PartialMessage<DeliveryTimes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DeliveryTimes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeliveryTimes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeliveryTimes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeliveryTimes;

  static equals(a: DeliveryTimes | PlainMessage<DeliveryTimes> | undefined, b: DeliveryTimes | PlainMessage<DeliveryTimes> | undefined): boolean;
}

/**
 * DayOfWeekFilter filters the days of the week for a report.
 *
 * @generated from message api.commons.DayOfWeekFilter
 * @deprecated
 */
export declare class DayOfWeekFilter extends Message<DayOfWeekFilter> {
  /**
   * days_of_weeks is a list of days of the week.
   *
   * @generated from field: repeated api.commons.Weekday.Enum days_of_weeks = 1;
   */
  daysOfWeeks: Weekday_Enum[];

  /**
   * weeks_of_months is a list of weeks of the month.
   *
   * @generated from field: repeated int32 weeks_of_months = 2;
   */
  weeksOfMonths: number[];

  constructor(data?: PartialMessage<DayOfWeekFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DayOfWeekFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DayOfWeekFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DayOfWeekFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DayOfWeekFilter;

  static equals(a: DayOfWeekFilter | PlainMessage<DayOfWeekFilter> | undefined, b: DayOfWeekFilter | PlainMessage<DayOfWeekFilter> | undefined): boolean;
}

/**
 * DayOfMonthFilter filters the days of the month for a report.
 *
 * @generated from message api.commons.DayOfMonthFilter
 * @deprecated
 */
export declare class DayOfMonthFilter extends Message<DayOfMonthFilter> {
  /**
   * day_of_months is a list of days of the month.
   *
   * @generated from field: repeated int32 day_of_months = 1;
   */
  dayOfMonths: number[];

  /**
   * is_last_day_of_month is a flag for the last day of the month.
   *
   * @generated from field: bool is_last_day_of_month = 2;
   */
  isLastDayOfMonth: boolean;

  constructor(data?: PartialMessage<DayOfMonthFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DayOfMonthFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DayOfMonthFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DayOfMonthFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DayOfMonthFilter;

  static equals(a: DayOfMonthFilter | PlainMessage<DayOfMonthFilter> | undefined, b: DayOfMonthFilter | PlainMessage<DayOfMonthFilter> | undefined): boolean;
}

/**
 * DayFilter is used to specify days for a report to be delivered.
 *
 * @generated from message api.commons.DayFilter
 * @deprecated
 */
export declare class DayFilter extends Message<DayFilter> {
  /**
   * type is the type of day filter.
   *
   * @generated from field: api.commons.DayFilterType type = 1;
   */
  type: DayFilterType;

  /**
   * @generated from oneof api.commons.DayFilter.filter
   */
  filter: {
    /**
     * day_of_week_filter is the filter for days of the week.
     *
     * @generated from field: api.commons.DayOfWeekFilter day_of_week_filter = 2;
     */
    value: DayOfWeekFilter;
    case: "dayOfWeekFilter";
  } | {
    /**
     * day_of_month_filter is the filter for days of the month.
     *
     * @generated from field: api.commons.DayOfMonthFilter day_of_month_filter = 3;
     */
    value: DayOfMonthFilter;
    case: "dayOfMonthFilter";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DayFilter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DayFilter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DayFilter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DayFilter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DayFilter;

  static equals(a: DayFilter | PlainMessage<DayFilter> | undefined, b: DayFilter | PlainMessage<DayFilter> | undefined): boolean;
}

/**
 * FormatOptions is a message for the format options of a report.
 *
 * @generated from message api.commons.FormatOptions
 */
export declare class FormatOptions extends Message<FormatOptions> {
  /**
   * report_format is the format of the report.
   *
   * @generated from field: api.commons.ReportFormat report_format = 1;
   */
  reportFormat: ReportFormat;

  /**
   * filename_parts are the parts to build the filename.
   *
   * @generated from field: repeated string filename_parts = 2;
   */
  filenameParts: string[];

  constructor(data?: PartialMessage<FormatOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.FormatOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FormatOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FormatOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FormatOptions;

  static equals(a: FormatOptions | PlainMessage<FormatOptions> | undefined, b: FormatOptions | PlainMessage<FormatOptions> | undefined): boolean;
}

/**
 * DeliveryOptions is a message for the delivery options of a report.
 *
 * @generated from message api.commons.DeliveryOptions
 * @deprecated
 */
export declare class DeliveryOptions extends Message<DeliveryOptions> {
  /**
   * transfer_config_sid is the transfer config sid to deliver the report.
   *
   * @generated from field: int64 transfer_config_sid = 1;
   */
  transferConfigSid: bigint;

  /**
   * failure_notification_emails are the emails to notify on failure.
   *
   * @generated from field: repeated string failure_notification_emails = 2 [deprecated = true];
   * @deprecated
   */
  failureNotificationEmails: string[];

  constructor(data?: PartialMessage<DeliveryOptions>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DeliveryOptions";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeliveryOptions;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeliveryOptions;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeliveryOptions;

  static equals(a: DeliveryOptions | PlainMessage<DeliveryOptions> | undefined, b: DeliveryOptions | PlainMessage<DeliveryOptions> | undefined): boolean;
}

/**
 * CronExpression is a message for the cron expression of a report.
 *
 * @generated from message api.commons.CronExpression
 */
export declare class CronExpression extends Message<CronExpression> {
  /**
   * repeat_minutes is the minutes to repeat the report.
   *
   * @generated from field: string repeat_minutes = 1;
   */
  repeatMinutes: string;

  /**
   * hours_of_day is the hours of the day to repeat the report.
   *
   * @generated from field: string hours_of_day = 2;
   */
  hoursOfDay: string;

  /**
   * days_of_month is the days of the month to repeat the report.
   *
   * @generated from field: string days_of_month = 3;
   */
  daysOfMonth: string;

  /**
   * months_of_year is the months of the year to repeat the report.
   *
   * @generated from field: string months_of_year = 4;
   */
  monthsOfYear: string;

  /**
   * day_of_week is the day of the week to repeat the report.
   *
   * @generated from field: string day_of_week = 5;
   */
  dayOfWeek: string;

  constructor(data?: PartialMessage<CronExpression>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CronExpression";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronExpression;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronExpression;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronExpression;

  static equals(a: CronExpression | PlainMessage<CronExpression> | undefined, b: CronExpression | PlainMessage<CronExpression> | undefined): boolean;
}

