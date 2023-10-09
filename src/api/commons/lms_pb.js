// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/lms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.CronType
 */
export const CronType = proto3.makeEnum(
  "api.commons.CronType",
  [
    {no: 0, name: "CRON_TYPE_LMS", localName: "LMS"},
    {no: 1, name: "CRON_TYPE_JOURNEY", localName: "JOURNEY"},
  ],
);

/**
 * @generated from enum api.commons.EnrichmentType
 */
export const EnrichmentType = proto3.makeEnum(
  "api.commons.EnrichmentType",
  [
    {no: 0, name: "ENRICHMENT_TYPE_OR", localName: "OR"},
    {no: 1, name: "ENRICHMENT_TYPE_XOR", localName: "XOR"},
    {no: 2, name: "ENRICHMENT_TYPE_AND", localName: "AND"},
    {no: 3, name: "ENRICHMENT_TYPE_JOIN", localName: "JOIN"},
    {no: 4, name: "ENRICHMENT_TYPE_NOT", localName: "NOT"},
  ],
);

/**
 * @generated from enum api.commons.PrimarySource
 */
export const PrimarySource = proto3.makeEnum(
  "api.commons.PrimarySource",
  [
    {no: 0, name: "PRIMARY_SOURCE_LMS", localName: "LMS"},
    {no: 1, name: "PRIMARY_SOURCE_CJS", localName: "CJS"},
  ],
);

/**
 * @generated from enum api.commons.DedupKeyPolicy
 */
export const DedupKeyPolicy = proto3.makeEnum(
  "api.commons.DedupKeyPolicy",
  [
    {no: 0, name: "KEEP_FIRST"},
    {no: 1, name: "KEEP_LAST"},
    {no: 2, name: "KEEP_ALL"},
  ],
);

/**
 * @generated from enum api.commons.RunType
 */
export const RunType = proto3.makeEnum(
  "api.commons.RunType",
  [
    {no: 0, name: "RUN_TYPE_ENABLED", localName: "ENABLED"},
    {no: 1, name: "RUN_TYPE_DISABLED", localName: "DISABLED"},
    {no: 2, name: "RUN_TYPE_TEST", localName: "TEST"},
  ],
);

/**
 * @generated from enum api.commons.ConsentActionType
 */
export const ConsentActionType = proto3.makeEnum(
  "api.commons.ConsentActionType",
  [
    {no: 0, name: "CONSENT_ACTION_TYPE_ADD", localName: "ADD"},
    {no: 1, name: "CONSENT_ACTION_TYPE_REVOKE", localName: "REVOKE"},
  ],
);

/**
 * @generated from enum api.commons.RecordType
 */
export const RecordType = proto3.makeEnum(
  "api.commons.RecordType",
  [
    {no: 0, name: "RECORD_TYPE_ALL", localName: "ALL"},
    {no: 1, name: "RECORD_TYPE_STRING", localName: "STRING"},
    {no: 2, name: "RECORD_TYPE_NUMBER", localName: "NUMBER"},
    {no: 3, name: "RECORD_TYPE_BOOL", localName: "BOOL"},
    {no: 4, name: "RECORD_TYPE_PHONE", localName: "PHONE"},
    {no: 5, name: "RECORD_TYPE_CURRENCY", localName: "CURRENCY"},
    {no: 6, name: "RECORD_TYPE_ENRICHED_PHONE", localName: "ENRICHED_PHONE"},
    {no: 18, name: "RECORD_TYPE_ENRICHED_ZIP", localName: "ENRICHED_ZIP"},
    {no: 7, name: "RECORD_TYPE_POSTAL_CODE", localName: "POSTAL_CODE"},
    {no: 8, name: "RECORD_TYPE_EMAIL", localName: "EMAIL"},
    {no: 9, name: "RECORD_TYPE_DATETIME_NOW", localName: "DATETIME_NOW"},
    {no: 10, name: "RECORD_TYPE_DATETIME_TIMESTAMP", localName: "DATETIME_TIMESTAMP"},
    {no: 11, name: "RECORD_TYPE_DATETIME_DATE", localName: "DATETIME_DATE"},
    {no: 12, name: "RECORD_TYPE_DATETIME_MONTH_AND_DAY", localName: "DATETIME_MONTH_AND_DAY"},
    {no: 13, name: "RECORD_TYPE_DATETIME_TIME_OF_DAY", localName: "DATETIME_TIME_OF_DAY"},
    {no: 15, name: "RECORD_TYPE_REPEATED_RECORDS", localName: "REPEATED_RECORDS"},
    {no: 16, name: "RECORD_TYPE_RECORD_MAP", localName: "RECORD_MAP"},
    {no: 17, name: "RECORD_TYPE_ERROR", localName: "ERROR"},
    {no: 19, name: "RECORD_TYPE_SOCIAL", localName: "SOCIAL"},
    {no: 20, name: "RECORD_TYPE_DATE_OF_BIRTH", localName: "DATE_OF_BIRTH"},
    {no: 21, name: "RECORD_TYPE_FULL_NAME", localName: "FULL_NAME"},
    {no: 22, name: "RECORD_TYPE_ACCOUNT_NUMBER", localName: "ACCOUNT_NUMBER"},
    {no: 23, name: "RECORD_TYPE_STRUCT_VALUE", localName: "STRUCT_VALUE"},
  ],
);

/**
 * @generated from enum api.commons.FieldType
 */
export const FieldType = proto3.makeEnum(
  "api.commons.FieldType",
  [
    {no: 0, name: "FIELD_TYPE_STRING", localName: "STRING"},
    {no: 1, name: "FIELD_TYPE_NUMBER", localName: "NUMBER"},
    {no: 2, name: "FIELD_TYPE_BOOLEAN", localName: "BOOLEAN"},
    {no: 3, name: "FIELD_TYPE_PHONE", localName: "PHONE"},
    {no: 4, name: "FIELD_TYPE_CURRENCY", localName: "CURRENCY"},
    {no: 5, name: "FIELD_TYPE_EMAIL", localName: "EMAIL"},
    {no: 6, name: "FIELD_TYPE_DATETIME_NOW", localName: "DATETIME_NOW"},
    {no: 7, name: "FIELD_TYPE_DATETIME_TIMESTAMP", localName: "DATETIME_TIMESTAMP"},
    {no: 8, name: "FIELD_TYPE_DATETIME_DATE", localName: "DATETIME_DATE"},
    {no: 9, name: "FIELD_TYPE_DATETIME_MONTH_AND_DAY", localName: "DATETIME_MONTH_AND_DAY"},
    {no: 10, name: "FIELD_TYPE_DATETIME_TIME_OF_DAY", localName: "DATETIME_TIME_OF_DAY"},
    {no: 12, name: "FIELD_TYPE_POSTAL_CODE", localName: "POSTAL_CODE"},
    {no: 13, name: "FIELD_TYPE_ENRICHED_PHONE", localName: "ENRICHED_PHONE"},
    {no: 14, name: "FIELD_TYPE_ENRICHED_ZIP", localName: "ENRICHED_ZIP"},
    {no: 15, name: "FIELD_TYPE_SOCIAL", localName: "SOCIAL"},
    {no: 16, name: "FIELD_TYPE_DATE_OF_BIRTH", localName: "DATE_OF_BIRTH"},
    {no: 17, name: "FIELD_TYPE_FULL_NAME", localName: "FULL_NAME"},
    {no: 18, name: "FIELD_TYPE_ACCOUNT_NUMBER", localName: "ACCOUNT_NUMBER"},
    {no: 19, name: "FIELD_TYPE_ERROR", localName: "ERROR"},
    {no: 20, name: "FIELD_TYPE_STRUCT_VALUE", localName: "STRUCT_VALUE"},
  ],
);

/**
 * @generated from enum api.commons.FileFormat
 */
export const FileFormat = proto3.makeEnum(
  "api.commons.FileFormat",
  [
    {no: 0, name: "FILE_FORMAT_CSV", localName: "CSV"},
    {no: 1, name: "FILE_FORMAT_CUSTOM_DELIM", localName: "CUSTOM_DELIM"},
    {no: 2, name: "FILE_FORMAT_FIXED_FORMAT", localName: "FIXED_FORMAT"},
    {no: 3, name: "FILE_FORMAT_TAB", localName: "TAB"},
    {no: 4, name: "FILE_FORMAT_JSON", localName: "JSON"},
  ],
);

/**
 * @generated from enum api.commons.PipelineElementStatusType
 */
export const PipelineElementStatusType = proto3.makeEnum(
  "api.commons.PipelineElementStatusType",
  [
    {no: 0, name: "PIPELINE_ELEMENT_STATUS_TYPE_INITIALIZED", localName: "INITIALIZED"},
    {no: 1, name: "PIPELINE_ELEMENT_STATUS_TYPE_RUNNING", localName: "RUNNING"},
    {no: 2, name: "PIPELINE_ELEMENT_STATUS_TYPE_STOPPED", localName: "STOPPED"},
    {no: 3, name: "PIPELINE_ELEMENT_STATUS_TYPE_FAILED", localName: "FAILED"},
  ],
);

/**
 * @generated from enum api.commons.EntrypointType
 */
export const EntrypointType = proto3.makeEnum(
  "api.commons.EntrypointType",
  [
    {no: 0, name: "ENTRYPOINT_TYPE_NON", localName: "NON"},
    {no: 1, name: "ENTRYPOINT_TYPE_API", localName: "API"},
    {no: 2, name: "ENTRYPOINT_TYPE_SFTP", localName: "SFTP"},
  ],
);

/**
 * @generated from enum api.commons.DuplicatePolicyType
 */
export const DuplicatePolicyType = proto3.makeEnum(
  "api.commons.DuplicatePolicyType",
  [
    {no: 0, name: "DUPLICATE_POLICY_TYPE_KEEP_RECORD_DISCARD_NUMBER", localName: "KEEP_RECORD_DISCARD_NUMBER"},
    {no: 1, name: "DUPLICATE_POLICY_TYPE_ALLOW_RECORD_KEEP_NUMBER", localName: "ALLOW_RECORD_KEEP_NUMBER"},
    {no: 2, name: "DUPLICATE_POLICY_TYPE_DISCARD_RECORD", localName: "DISCARD_RECORD"},
    {no: 3, name: "DUPLICATE_POLICY_TYPE_DUPLICATE_LIST", localName: "DUPLICATE_LIST"},
  ],
);

/**
 * @generated from enum api.commons.AbsentPolicyType
 */
export const AbsentPolicyType = proto3.makeEnum(
  "api.commons.AbsentPolicyType",
  [
    {no: 0, name: "ABSENT_POLICY_TYPE_KEEP", localName: "KEEP"},
    {no: 1, name: "ABSENT_POLICY_TYPE_DISCARD", localName: "DISCARD"},
  ],
);

/**
 * @generated from enum api.commons.DialOrderType
 */
export const DialOrderType = proto3.makeEnum(
  "api.commons.DialOrderType",
  [
    {no: 0, name: "DIAL_ORDER_TYPE_FIRST", localName: "FIRST"},
    {no: 1, name: "DIAL_ORDER_TYPE_NATURAL", localName: "NATURAL"},
    {no: 2, name: "DIAL_ORDER_TYPE_CUSTOM", localName: "CUSTOM"},
  ],
);

/**
 * @generated from enum api.commons.ExportType
 */
export const ExportType = proto3.makeEnum(
  "api.commons.ExportType",
  [
    {no: 0, name: "EXPORT_TYPE_FILENAME", localName: "FILENAME"},
    {no: 1, name: "EXPORT_TYPE_SFTP", localName: "SFTP"},
  ],
);

/**
 * @generated from enum api.commons.SortOrder
 */
export const SortOrder = proto3.makeEnum(
  "api.commons.SortOrder",
  [
    {no: 0, name: "SORT_ORDER_ASCENDING", localName: "ASCENDING"},
    {no: 1, name: "SORT_ORDER_DESCENDING", localName: "DESCENDING"},
  ],
);

/**
 * @generated from enum api.commons.CompareType
 */
export const CompareType = proto3.makeEnum(
  "api.commons.CompareType",
  [
    {no: 0, name: "COMPARE_TYPE_STRING", localName: "STRING"},
    {no: 1, name: "COMPARE_TYPE_NUMBER", localName: "NUMBER"},
    {no: 2, name: "COMPARE_TYPE_BOOL", localName: "BOOL"},
  ],
);

/**
 * @generated from enum api.commons.CompareOperator
 */
export const CompareOperator = proto3.makeEnum(
  "api.commons.CompareOperator",
  [
    {no: 0, name: "COMPARE_OPERATOR_EQUAL_TO", localName: "EQUAL_TO"},
    {no: 1, name: "COMPARE_OPERATOR_GREATER", localName: "GREATER"},
    {no: 2, name: "COMPARE_OPERATOR_GREATER_EQUAL", localName: "GREATER_EQUAL"},
    {no: 3, name: "COMPARE_OPERATOR_LESS", localName: "LESS"},
    {no: 4, name: "COMPARE_OPERATOR_LESS_EQUAL", localName: "LESS_EQUAL"},
    {no: 5, name: "COMPARE_OPERATOR_STARTS_WITH", localName: "STARTS_WITH"},
    {no: 6, name: "COMPARE_OPERATOR_ENDS_WITH", localName: "ENDS_WITH"},
    {no: 7, name: "COMPARE_OPERATOR_CONTAINS", localName: "CONTAINS"},
  ],
);

/**
 * @generated from enum api.commons.ChainOperator
 */
export const ChainOperator = proto3.makeEnum(
  "api.commons.ChainOperator",
  [
    {no: 0, name: "CHAIN_OPERATOR_AND", localName: "AND"},
    {no: 1, name: "CHAIN_OPERATOR_OR", localName: "OR"},
  ],
);

/**
 * @generated from enum api.commons.DeDupActions
 */
export const DeDupActions = proto3.makeEnum(
  "api.commons.DeDupActions",
  [
    {no: 0, name: "DE_DUP_ACTIONS_KEEP_FIRST", localName: "KEEP_FIRST"},
    {no: 3, name: "DE_DUP_ACTIONS_KEEP_BOTH", localName: "KEEP_BOTH"},
    {no: 4, name: "DE_DUP_ACTIONS_KEEP_LAST", localName: "KEEP_LAST"},
    {no: 5, name: "DE_DUP_ACTIONS_KEEP_NEITHER", localName: "KEEP_NEITHER"},
  ],
);

/**
 * where the date should be in position to the prefix, suffix and filename
 * for ConstructedFilename messages.
 * NOTE: Originally file defaulted to AFTER_FILENAME, this would change it to be
 * before the prefix
 *
 * @generated from enum api.commons.DatePosition
 */
export const DatePosition = proto3.makeEnum(
  "api.commons.DatePosition",
  [
    {no: 0, name: "DATE_POSITION_FIRST", localName: "FIRST"},
    {no: 1, name: "DATE_POSITION_BEFORE_FILENAME", localName: "BEFORE_FILENAME"},
    {no: 2, name: "DATE_POSITION_AFTER_FILENAME", localName: "AFTER_FILENAME"},
    {no: 3, name: "DATE_POSITION_LAST", localName: "LAST"},
  ],
);

/**
 * @generated from enum api.commons.RelativeDay
 */
export const RelativeDay = proto3.makeEnum(
  "api.commons.RelativeDay",
  [
    {no: 0, name: "RELATIVE_DAY_TODAY", localName: "TODAY"},
    {no: 1, name: "RELATIVE_DAY_YESTERDAY", localName: "YESTERDAY"},
    {no: 2, name: "RELATIVE_DAY_LAST_FRIDAY", localName: "LAST_FRIDAY"},
  ],
);

/**
 * @generated from enum api.commons.FilePatternType
 */
export const FilePatternType = proto3.makeEnum(
  "api.commons.FilePatternType",
  [
    {no: 0, name: "FILE_PATTERN_TYPE_GLOB", localName: "GLOB"},
    {no: 1, name: "FILE_PATTERN_TYPE_CONSTRUCTED", localName: "CONSTRUCTED"},
    {no: 2, name: "FILE_PATTERN_TYPE_ORIGINAL", localName: "ORIGINAL"},
  ],
);

/**
 * Used with a format string, and string date value to get a matrix/lms/DateTime
 * proto
 *
 * @generated from enum api.commons.DateTimePrecision
 */
export const DateTimePrecision = proto3.makeEnum(
  "api.commons.DateTimePrecision",
  [
    {no: 0, name: "DATETIME_PRECISION_NOW"},
    {no: 1, name: "DATETIME_PRECISION_TIMESTAMP"},
    {no: 2, name: "DATETIME_PRECISION_DATE"},
    {no: 3, name: "DATETIME_PRECISION_MONTH_AND_DAY"},
    {no: 4, name: "DATETIME_PRECISION_TIME_OF_DAY"},
  ],
);

/**
 * @generated from enum api.commons.HttpVerb
 */
export const HttpVerb = proto3.makeEnum(
  "api.commons.HttpVerb",
  [
    {no: 0, name: "HTTP_VERB_GET", localName: "GET"},
    {no: 1, name: "HTTP_VERB_POST", localName: "POST"},
  ],
);

/**
 * @generated from enum api.commons.ComplianceListType
 */
export const ComplianceListType = proto3.makeEnum(
  "api.commons.ComplianceListType",
  [
    {no: 0, name: "COMPLIANCE_LIST_TYPE_SCRUB", localName: "SCRUB"},
    {no: 1, name: "COMPLIANCE_LIST_TYPE_CONSENT", localName: "CONSENT"},
  ],
);

/**
 * @generated from enum api.commons.EventState
 */
export const EventState = proto3.makeEnum(
  "api.commons.EventState",
  [
    {no: 0, name: "EVENT_STATE_NONE", localName: "NONE"},
    {no: 1, name: "EVENT_STATE_KICKOFF", localName: "KICKOFF"},
    {no: 2, name: "EVENT_STATE_CHECK", localName: "CHECK"},
    {no: 3, name: "EVENT_STATE_PROCESS", localName: "PROCESS"},
    {no: 4, name: "EVENT_STATE_CLEANUP", localName: "CLEANUP"},
  ],
);

/**
 * @generated from enum api.commons.TimeUnit
 */
export const TimeUnit = proto3.makeEnum(
  "api.commons.TimeUnit",
  [
    {no: 0, name: "DEFAULT"},
    {no: 1, name: "TIME_WEEKS"},
    {no: 2, name: "TIME_DAYS"},
    {no: 3, name: "TIME_HOURS"},
  ],
);

/**
 * @generated from message api.commons.RecordField
 */
export const RecordField = proto3.makeMessageType(
  "api.commons.RecordField",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(RecordType) },
  ],
);

/**
 * ::DEPRECATED FOR EXCHANGES::  use ConstructedFilename instead
 *
 * @generated from message api.commons.FilePattern
 */
export const FilePattern = proto3.makeMessageType(
  "api.commons.FilePattern",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(FilePatternType) },
    { no: 2, name: "directory", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "filename", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "prefixes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "date_format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "file_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "date_prefix", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "day_to_use", kind: "enum", T: proto3.getEnumType(RelativeDay) },
  ],
);

/**
 * Represents a filename that we will construct using the original uploaded name
 * prefix, date in "date_format" format, and extension
 * filename = date + prefix + original_filename + suffix + ext
 *
 * @generated from message api.commons.ConstructedFilename
 */
export const ConstructedFilename = proto3.makeMessageType(
  "api.commons.ConstructedFilename",
  () => [
    { no: 3, name: "override_filename", kind: "message", T: StringValue },
    { no: 4, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "date_format", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "suffix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "file_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "date_position", kind: "enum", T: proto3.getEnumType(DatePosition) },
    { no: 9, name: "day_to_use", kind: "enum", T: proto3.getEnumType(RelativeDay) },
  ],
);

/**
 * @generated from message api.commons.PaginationTerminator
 */
export const PaginationTerminator = proto3.makeMessageType(
  "api.commons.PaginationTerminator",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "negate", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "exists_check", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "op" },
    { no: 4, name: "num_greater_than", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "op" },
    { no: 5, name: "num_less_than", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "op" },
    { no: 6, name: "num_equals", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "op" },
    { no: 7, name: "count_less_than", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "op" },
    { no: 8, name: "str_equals", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "op" },
    { no: 9, name: "str_contains", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "op" },
    { no: 10, name: "bool_equals", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "op" },
  ],
);

/**
 * @generated from message api.commons.Expiration
 */
export const Expiration = proto3.makeMessageType(
  "api.commons.Expiration",
  () => [
    { no: 1, name: "units", kind: "enum", T: proto3.getEnumType(TimeUnit) },
    { no: 2, name: "quantity", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

