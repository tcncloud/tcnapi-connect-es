// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/ana.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.AnaTimeZone
 */
export const AnaTimeZone = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.AnaTimeZone",
  [
    {no: 0, name: "ANA_TIME_ZONE_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "ANA_TIME_ZONE_AMERICA_ANCHORAGE", localName: "AMERICA_ANCHORAGE"},
    {no: 2, name: "ANA_TIME_ZONE_AMERICA_CHICAGO", localName: "AMERICA_CHICAGO"},
    {no: 3, name: "ANA_TIME_ZONE_AMERICA_DENVER", localName: "AMERICA_DENVER"},
    {no: 4, name: "ANA_TIME_ZONE_AMERICA_INDIANAPOLIS", localName: "AMERICA_INDIANAPOLIS"},
    {no: 5, name: "ANA_TIME_ZONE_AMERICA_LOS_ANGELES", localName: "AMERICA_LOS_ANGELES"},
    {no: 6, name: "ANA_TIME_ZONE_AMERICA_MEXICO_CITY", localName: "AMERICA_MEXICO_CITY"},
    {no: 7, name: "ANA_TIME_ZONE_AMERICA_NEW_YORK", localName: "AMERICA_NEW_YORK"},
    {no: 8, name: "ANA_TIME_ZONE_AMERICA_PHOENIX", localName: "AMERICA_PHOENIX"},
    {no: 9, name: "ANA_TIME_ZONE_AMERICA_PUERTO_RICO", localName: "AMERICA_PUERTO_RICO"},
    {no: 10, name: "ANA_TIME_ZONE_ASIA_CALCUTTA", localName: "ASIA_CALCUTTA"},
    {no: 11, name: "ANA_TIME_ZONE_ASIA_COLOMBO", localName: "ASIA_COLOMBO"},
    {no: 12, name: "ANA_TIME_ZONE_ASIA_MANILA", localName: "ASIA_MANILA"},
    {no: 13, name: "ANA_TIME_ZONE_AUSTRALIA_ADELAIDE", localName: "AUSTRALIA_ADELAIDE"},
    {no: 14, name: "ANA_TIME_ZONE_AUSTRALIA_BRISBANE", localName: "AUSTRALIA_BRISBANE"},
    {no: 15, name: "ANA_TIME_ZONE_AUSTRALIA_DARWIN", localName: "AUSTRALIA_DARWIN"},
    {no: 16, name: "ANA_TIME_ZONE_AUSTRALIA_MELBOURNE", localName: "AUSTRALIA_MELBOURNE"},
    {no: 17, name: "ANA_TIME_ZONE_AUSTRALIA_PERTH", localName: "AUSTRALIA_PERTH"},
    {no: 18, name: "ANA_TIME_ZONE_AUSTRALIA_SYDNEY", localName: "AUSTRALIA_SYDNEY"},
    {no: 19, name: "ANA_TIME_ZONE_BRAZIL_ACRE", localName: "BRAZIL_ACRE"},
    {no: 20, name: "ANA_TIME_ZONE_BRAZIL_DENORONHA", localName: "BRAZIL_DENORONHA"},
    {no: 21, name: "ANA_TIME_ZONE_BRAZIL_EAST", localName: "BRAZIL_EAST"},
    {no: 22, name: "ANA_TIME_ZONE_BRAZIL_WEST", localName: "BRAZIL_WEST"},
    {no: 23, name: "ANA_TIME_ZONE_CANADA_ATLANTIC", localName: "CANADA_ATLANTIC"},
    {no: 24, name: "ANA_TIME_ZONE_CANADA_CENTRAL", localName: "CANADA_CENTRAL"},
    {no: 25, name: "ANA_TIME_ZONE_CANADA_EAST_SASKATCHEWAN", localName: "CANADA_EAST_SASKATCHEWAN"},
    {no: 26, name: "ANA_TIME_ZONE_CANADA_EASTERN", localName: "CANADA_EASTERN"},
    {no: 27, name: "ANA_TIME_ZONE_CANADA_MOUNTAIN", localName: "CANADA_MOUNTAIN"},
    {no: 28, name: "ANA_TIME_ZONE_CANADA_NEWFOUNDLAND", localName: "CANADA_NEWFOUNDLAND"},
    {no: 29, name: "ANA_TIME_ZONE_CANADA_PACIFIC", localName: "CANADA_PACIFIC"},
    {no: 30, name: "ANA_TIME_ZONE_CANADA_SASKATCHEWAN", localName: "CANADA_SASKATCHEWAN"},
    {no: 31, name: "ANA_TIME_ZONE_CANADA_YUKON", localName: "CANADA_YUKON"},
    {no: 32, name: "ANA_TIME_ZONE_EUROPE_BERLIN", localName: "EUROPE_BERLIN"},
    {no: 33, name: "ANA_TIME_ZONE_EUROPE_BUCHAREST", localName: "EUROPE_BUCHAREST"},
    {no: 34, name: "ANA_TIME_ZONE_EUROPE_LONDON", localName: "EUROPE_LONDON"},
    {no: 35, name: "ANA_TIME_ZONE_EUROPE_MADRID", localName: "EUROPE_MADRID"},
    {no: 36, name: "ANA_TIME_ZONE_JAPAN", localName: "JAPAN"},
    {no: 37, name: "ANA_TIME_ZONE_MEXICO_BAJANORTE", localName: "MEXICO_BAJANORTE"},
    {no: 38, name: "ANA_TIME_ZONE_MEXICO_BAJASUR", localName: "MEXICO_BAJASUR"},
    {no: 39, name: "ANA_TIME_ZONE_PACIFIC_AUCKLAND", localName: "PACIFIC_AUCKLAND"},
    {no: 40, name: "ANA_TIME_ZONE_PACIFIC_CHATHAM", localName: "PACIFIC_CHATHAM"},
    {no: 41, name: "ANA_TIME_ZONE_PACIFIC_HONOLULU", localName: "PACIFIC_HONOLULU"},
    {no: 42, name: "ANA_TIME_ZONE_SINGAPORE", localName: "SINGAPORE"},
    {no: 43, name: "ANA_TIME_ZONE_ETC_UNIVERSAL", localName: "ETC_UNIVERSAL"},
    {no: 44, name: "ANA_TIME_ZONE_ETC_GREENWICH", localName: "ETC_GREENWICH"},
  ],
);

/**
 * @generated from enum api.commons.TimeFilterType
 */
export const TimeFilterType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TimeFilterType",
  [
    {no: 0, name: "TIME_FILTER_TYPE_UNDEFINED", localName: "UNDEFINED"},
    {no: 1, name: "TIME_FILTER_TYPE_QUICK", localName: "QUICK"},
    {no: 2, name: "TIME_FILTER_TYPE_ABSOLUTE", localName: "ABSOLUTE"},
    {no: 3, name: "TIME_FILTER_TYPE_RELATIVE", localName: "RELATIVE"},
  ],
);

/**
 * @generated from enum api.commons.DashPageType
 */
export const DashPageType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.DashPageType",
  [
    {no: 0, name: "DASH_PAGE_TYPE_UNDEFINED", localName: "UNDEFINED"},
    {no: 1, name: "DASH_PAGE_TYPE_DASHBOARD", localName: "DASHBOARD"},
    {no: 2, name: "DASH_PAGE_TYPE_VISUALIZATION_LEGACY", localName: "VISUALIZATION_LEGACY"},
    {no: 3, name: "DASH_PAGE_TYPE_CHART", localName: "CHART"},
  ],
);

/**
 * @generated from enum api.commons.FilterBy
 */
export const FilterBy = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.FilterBy",
  [
    {no: 0, name: "FILTER_BY_UNDEFINED", localName: "UNDEFINED"},
    {no: 1, name: "FILTER_BY_MINUTES", localName: "MINUTES"},
    {no: 2, name: "FILTER_BY_HOURS", localName: "HOURS"},
    {no: 3, name: "FILTER_BY_DAYS", localName: "DAYS"},
    {no: 4, name: "FILTER_BY_WEEKS", localName: "WEEKS"},
    {no: 5, name: "FILTER_BY_MONTHS", localName: "MONTHS"},
    {no: 6, name: "FILTER_BY_YEARS", localName: "YEARS"},
  ],
);

/**
 * @generated from enum api.commons.WallaceDataType
 */
export const WallaceDataType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.WallaceDataType",
  [
    {no: 0, name: "WALLACE_DATA_TYPE_UNDEFINED", localName: "UNDEFINED"},
    {no: 1, name: "WALLACE_DATA_TYPE_KEYWORD", localName: "KEYWORD"},
    {no: 2, name: "WALLACE_DATA_TYPE_LONG", localName: "LONG"},
    {no: 3, name: "WALLACE_DATA_TYPE_DOUBLE", localName: "DOUBLE"},
    {no: 4, name: "WALLACE_DATA_TYPE_BOOLEAN", localName: "BOOLEAN"},
    {no: 5, name: "WALLACE_DATA_TYPE_DATE", localName: "DATE"},
    {no: 6, name: "WALLACE_DATA_TYPE_STRING", localName: "STRING"},
    {no: 7, name: "WALLACE_DATA_TYPE_NESTED", localName: "NESTED"},
    {no: 8, name: "WALLACE_DATA_TYPE_OBJECT", localName: "OBJECT"},
    {no: 9, name: "WALLACE_DATA_TYPE_FLATTENED", localName: "FLATTENED"},
    {no: 10, name: "WALLACE_DATA_TYPE_INTEGER_RANGE", localName: "INTEGER_RANGE"},
    {no: 11, name: "WALLACE_DATA_TYPE_FLOAT_RANGE", localName: "FLOAT_RANGE"},
    {no: 12, name: "WALLACE_DATA_TYPE_LONG_RANGE", localName: "LONG_RANGE"},
    {no: 13, name: "WALLACE_DATA_TYPE_DOUBLE_RANGE", localName: "DOUBLE_RANGE"},
    {no: 14, name: "WALLACE_DATA_TYPE_DATE_RANGE", localName: "DATE_RANGE"},
    {no: 15, name: "WALLACE_DATA_TYPE_IP_RANGE", localName: "IP_RANGE"},
    {no: 20, name: "WALLACE_DATA_TYPE_DOUBLE_KEYWORD", localName: "DOUBLE_KEYWORD"},
  ],
);

/**
 * @generated from enum api.commons.TimeScope
 */
export const TimeScope = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TimeScope",
  [
    {no: 0, name: "ONE_DAY"},
    {no: 1, name: "ONE_WEEK"},
    {no: 2, name: "ONE_MONTH"},
    {no: 3, name: "ONE_YEAR"},
    {no: 4, name: "ONE_MINUTE"},
    {no: 5, name: "FIVE_MINUTES"},
    {no: 6, name: "TEN_MINUTES"},
    {no: 7, name: "TWENTY_MINUTES"},
    {no: 8, name: "THIRTY_MINUTES"},
    {no: 9, name: "ONE_HOUR"},
    {no: 10, name: "TWO_HOURS"},
    {no: 11, name: "THREE_HOURS"},
    {no: 12, name: "FOUR_HOURS"},
  ],
);

/**
 * @generated from enum api.commons.Tag
 */
export const Tag = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.Tag",
  [
    {no: 0, name: "TAG_ALL"},
    {no: 1, name: "TAG_CUSTOM"},
    {no: 2, name: "TAG_LEGACY"},
    {no: 3, name: "TAG_DYNAMIC"},
    {no: 101, name: "P3_RJ_RECORDS_INBOUND_CALL"},
    {no: 102, name: "P3_RJ_RECORDS_MANUAL_CALL"},
    {no: 103, name: "P3_RJ_RECORDS_OUTBOUND_CALL"},
    {no: 104, name: "P3_RJ_RECORDS_OUTBOUND_TASK"},
    {no: 105, name: "P3_RJ_RECORDS_AGENT_CALL_OUTBOUND"},
    {no: 106, name: "P3_RJ_RECORDS_AGENT_CALL_INBOUND"},
    {no: 107, name: "P3_RJ_RECORDS_AGENT_CALL_MANUAL"},
    {no: 108, name: "P3_RJ_RECORDS_SMS"},
    {no: 109, name: "P3_RJ_RECORDS_EMAIL"},
    {no: 201, name: "P3_RJ_AGGREGATE_INBOUND"},
    {no: 202, name: "P3_RJ_AGGREGATE_OUTBOUND"},
    {no: 203, name: "P3_RJ_AGGREGATE_MANUAL"},
    {no: 204, name: "P3_RJ_AGGREGATE_AGENT_CALL"},
    {no: 205, name: "P3_RJ_AGGREGATE_HUNT_GROUP"},
    {no: 206, name: "P3_RJ_AGGREGATE_AGENT_SESSION"},
    {no: 207, name: "P3_RJ_AGGREGATE_SKILLS"},
    {no: 301, name: "P3_RJ_COLLATED_INBOUND"},
    {no: 302, name: "P3_RJ_COLLATED_OUTBOUND"},
    {no: 303, name: "P3_RJ_COLLATED_MANUAL"},
    {no: 304, name: "P3_RJ_COLLATED_AGENT_CALL"},
    {no: 305, name: "P3_RJ_COLLATED_HUNT_GROUP"},
    {no: 306, name: "P3_RJ_COLLATED_AGENT_SESSION"},
    {no: 1001, name: "P3_RJ_MISC_SCHEDULED_CALLBACK"},
  ],
);

/**
 * @generated from enum api.commons.CsvQuoteType
 */
export const CsvQuoteType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.CsvQuoteType",
  [
    {no: 0, name: "NO_QUOTE_TYPE"},
    {no: 1, name: "SINGLE"},
    {no: 2, name: "DOUBLE"},
  ],
);

/**
 * @generated from enum api.commons.StringComparison
 */
export const StringComparison = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.StringComparison",
  [
    {no: 0, name: "STRING_EQ"},
    {no: 1, name: "STRING_NEQ"},
    {no: 2, name: "STRING_STARTS_WITH"},
    {no: 3, name: "STRING_NOT_STARTS_WITH"},
    {no: 4, name: "STRING_CONTAINS"},
    {no: 5, name: "STRING_NOT_CONTAINS"},
    {no: 6, name: "STRING_ENDS_WITH"},
    {no: 7, name: "STRING_NOT_ENDS_WITH"},
    {no: 8, name: "STRING_BLANK"},
    {no: 9, name: "STRING_NOT_BLANK"},
  ],
);

/**
 * @generated from enum api.commons.FloatComparison
 */
export const FloatComparison = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.FloatComparison",
  [
    {no: 0, name: "FLOAT_EQ"},
    {no: 1, name: "FLOAT_NEQ"},
    {no: 2, name: "LT"},
    {no: 3, name: "LTE"},
    {no: 4, name: "GT"},
    {no: 5, name: "GTE"},
    {no: 6, name: "FLOAT_BLANK"},
    {no: 7, name: "FLOAT_NOT_BLANK"},
  ],
);

/**
 * @generated from enum api.commons.BoolComparison
 */
export const BoolComparison = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.BoolComparison",
  [
    {no: 0, name: "BOOL_EQ"},
    {no: 1, name: "BOOL_NEQ"},
  ],
);

/**
 * @generated from enum api.commons.DateComparison
 */
export const DateComparison = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.DateComparison",
  [
    {no: 0, name: "DATE_COMPARISON_EQ", localName: "EQ"},
    {no: 1, name: "DATE_COMPARISON_NEQ", localName: "NEQ"},
    {no: 2, name: "DATE_COMPARISON_LT", localName: "LT"},
    {no: 3, name: "DATE_COMPARISON_LTE", localName: "LTE"},
    {no: 4, name: "DATE_COMPARISON_GT", localName: "GT"},
    {no: 5, name: "DATE_COMPARISON_GTE", localName: "GTE"},
  ],
);

/**
 * @generated from enum api.commons.CompoundFilterJoin
 */
export const CompoundFilterJoin = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.CompoundFilterJoin",
  [
    {no: 0, name: "AND"},
    {no: 1, name: "OR"},
  ],
);

/**
 * @generated from enum api.commons.AnaExportType
 */
export const AnaExportType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.AnaExportType",
  [
    {no: 0, name: "ANA_EXPORT_TYPE_EMAIL", localName: "EMAIL"},
    {no: 1, name: "ANA_EXPORT_TYPE_SFTP", localName: "SFTP"},
    {no: 2, name: "ANA_EXPORT_TYPE_HTTPS", localName: "HTTPS"},
  ],
);

/**
 * @generated from enum api.commons.ExporterDataSelectionType
 */
export const ExporterDataSelectionType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.ExporterDataSelectionType",
  [
    {no: 0, name: "CHART_ID_SELECTION_TYPE"},
    {no: 1, name: "CUSTOM_SELECTION_TYPE"},
  ],
);

/**
 * it is very important that the same
 * aggregations share the same number for
 * both types. Example: TERMS and COUNT
 *
 * @generated from enum api.commons.NumericAggregation
 */
export const NumericAggregation = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.NumericAggregation",
  [
    {no: 0, name: "FLOAT_AGGREGATION_TOP_HITS"},
    {no: 1, name: "FLOAT_AGGREGATION_AVERAGE"},
    {no: 2, name: "FLOAT_AGGREGATION_SUM"},
    {no: 3, name: "FLOAT_AGGREGATION_MIN"},
    {no: 4, name: "FLOAT_AGGREGATION_MAX"},
    {no: 5, name: "FLOAT_AGGREGATION_TERMS"},
    {no: 6, name: "FLOAT_AGGREGATION_PERCENTILE"},
    {no: 7, name: "FLOAT_AGGREGATION_COUNT"},
    {no: 100, name: "FLOAT_AGGREGATION_NONE"},
  ],
);

/**
 * @generated from enum api.commons.NonNumericAggregation
 */
export const NonNumericAggregation = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.NonNumericAggregation",
  [
    {no: 0, name: "STRING_AGGREGATION_TOP_HITS"},
    {no: 5, name: "STRING_AGGREGATION_TERMS"},
    {no: 7, name: "STRING_AGGREGATION_COUNT"},
    {no: 100, name: "STRING_AGGREGATION_NONE"},
  ],
);

/**
 * left and right are used to specify which side
 * of the operation the PostAction.Float.Value field
 * is on.
 *
 * @generated from enum api.commons.Operation
 */
export const Operation = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.Operation",
  [
    {no: 0, name: "OPERATION_ADD", localName: "ADD"},
    {no: 1, name: "OPERATION_SUBTRACT_LEFT", localName: "SUBTRACT_LEFT"},
    {no: 2, name: "OPERATION_SUBTRACT_RIGHT", localName: "SUBTRACT_RIGHT"},
    {no: 3, name: "OPERATION_MULTIPLY", localName: "MULTIPLY"},
    {no: 4, name: "OPERATION_DIVIDE_LEFT", localName: "DIVIDE_LEFT"},
    {no: 5, name: "OPERATION_DIVIDE_RIGHT", localName: "DIVIDE_RIGHT"},
  ],
);

/**
 * @generated from enum api.commons.CustomDataSeleciton
 */
export const CustomDataSeleciton = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.CustomDataSeleciton",
  [
    {no: 0, name: "CUSTOM_DATA_SELECTION_UKNOWN"},
  ],
);

/**
 * @generated from enum api.commons.DataPointType
 */
export const DataPointType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.DataPointType",
  [
    {no: 0, name: "DATA_POINT_TYPE_NUMBER", localName: "NUMBER"},
    {no: 1, name: "DATA_POINT_TYPE_STRING", localName: "STRING"},
    {no: 2, name: "DATA_POINT_TYPE_BOOLEAN", localName: "BOOLEAN"},
    {no: 3, name: "DATA_POINT_TYPE_DATE", localName: "DATE"},
  ],
);

/**
 * @generated from enum api.commons.ExportStatus
 */
export const ExportStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.ExportStatus",
  [
    {no: 0, name: "NOT_SENT"},
    {no: 1, name: "SENT"},
  ],
);

