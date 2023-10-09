// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/lms.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.CronType
 */
export declare enum CronType {
  /**
   * @generated from enum value: CRON_TYPE_LMS = 0;
   */
  LMS = 0,

  /**
   * @generated from enum value: CRON_TYPE_JOURNEY = 1;
   */
  JOURNEY = 1,
}

/**
 * @generated from enum api.commons.EnrichmentType
 */
export declare enum EnrichmentType {
  /**
   * @generated from enum value: ENRICHMENT_TYPE_OR = 0;
   */
  OR = 0,

  /**
   * @generated from enum value: ENRICHMENT_TYPE_XOR = 1;
   */
  XOR = 1,

  /**
   * @generated from enum value: ENRICHMENT_TYPE_AND = 2;
   */
  AND = 2,

  /**
   * @generated from enum value: ENRICHMENT_TYPE_JOIN = 3;
   */
  JOIN = 3,

  /**
   * @generated from enum value: ENRICHMENT_TYPE_NOT = 4;
   */
  NOT = 4,
}

/**
 * @generated from enum api.commons.PrimarySource
 */
export declare enum PrimarySource {
  /**
   * @generated from enum value: PRIMARY_SOURCE_LMS = 0;
   */
  LMS = 0,

  /**
   * @generated from enum value: PRIMARY_SOURCE_CJS = 1;
   */
  CJS = 1,
}

/**
 * @generated from enum api.commons.DedupKeyPolicy
 */
export declare enum DedupKeyPolicy {
  /**
   * @generated from enum value: KEEP_FIRST = 0;
   */
  KEEP_FIRST = 0,

  /**
   * @generated from enum value: KEEP_LAST = 1;
   */
  KEEP_LAST = 1,

  /**
   * @generated from enum value: KEEP_ALL = 2;
   */
  KEEP_ALL = 2,
}

/**
 * @generated from enum api.commons.RunType
 */
export declare enum RunType {
  /**
   * @generated from enum value: RUN_TYPE_ENABLED = 0;
   */
  ENABLED = 0,

  /**
   * @generated from enum value: RUN_TYPE_DISABLED = 1;
   */
  DISABLED = 1,

  /**
   * @generated from enum value: RUN_TYPE_TEST = 2;
   */
  TEST = 2,
}

/**
 * @generated from enum api.commons.ConsentActionType
 */
export declare enum ConsentActionType {
  /**
   * @generated from enum value: CONSENT_ACTION_TYPE_ADD = 0;
   */
  ADD = 0,

  /**
   * @generated from enum value: CONSENT_ACTION_TYPE_REVOKE = 1;
   */
  REVOKE = 1,
}

/**
 * @generated from enum api.commons.RecordType
 */
export declare enum RecordType {
  /**
   * @generated from enum value: RECORD_TYPE_ALL = 0;
   */
  ALL = 0,

  /**
   * @generated from enum value: RECORD_TYPE_STRING = 1;
   */
  STRING = 1,

  /**
   * @generated from enum value: RECORD_TYPE_NUMBER = 2;
   */
  NUMBER = 2,

  /**
   * @generated from enum value: RECORD_TYPE_BOOL = 3;
   */
  BOOL = 3,

  /**
   * @generated from enum value: RECORD_TYPE_PHONE = 4;
   */
  PHONE = 4,

  /**
   * @generated from enum value: RECORD_TYPE_CURRENCY = 5;
   */
  CURRENCY = 5,

  /**
   * @generated from enum value: RECORD_TYPE_ENRICHED_PHONE = 6;
   */
  ENRICHED_PHONE = 6,

  /**
   * @generated from enum value: RECORD_TYPE_ENRICHED_ZIP = 18;
   */
  ENRICHED_ZIP = 18,

  /**
   * @generated from enum value: RECORD_TYPE_POSTAL_CODE = 7;
   */
  POSTAL_CODE = 7,

  /**
   * @generated from enum value: RECORD_TYPE_EMAIL = 8;
   */
  EMAIL = 8,

  /**
   * @generated from enum value: RECORD_TYPE_DATETIME_NOW = 9;
   */
  DATETIME_NOW = 9,

  /**
   * @generated from enum value: RECORD_TYPE_DATETIME_TIMESTAMP = 10;
   */
  DATETIME_TIMESTAMP = 10,

  /**
   * @generated from enum value: RECORD_TYPE_DATETIME_DATE = 11;
   */
  DATETIME_DATE = 11,

  /**
   * @generated from enum value: RECORD_TYPE_DATETIME_MONTH_AND_DAY = 12;
   */
  DATETIME_MONTH_AND_DAY = 12,

  /**
   * @generated from enum value: RECORD_TYPE_DATETIME_TIME_OF_DAY = 13;
   */
  DATETIME_TIME_OF_DAY = 13,

  /**
   * @generated from enum value: RECORD_TYPE_REPEATED_RECORDS = 15;
   */
  REPEATED_RECORDS = 15,

  /**
   * @generated from enum value: RECORD_TYPE_RECORD_MAP = 16;
   */
  RECORD_MAP = 16,

  /**
   * @generated from enum value: RECORD_TYPE_ERROR = 17;
   */
  ERROR = 17,

  /**
   * @generated from enum value: RECORD_TYPE_SOCIAL = 19;
   */
  SOCIAL = 19,

  /**
   * @generated from enum value: RECORD_TYPE_DATE_OF_BIRTH = 20;
   */
  DATE_OF_BIRTH = 20,

  /**
   * @generated from enum value: RECORD_TYPE_FULL_NAME = 21;
   */
  FULL_NAME = 21,

  /**
   * @generated from enum value: RECORD_TYPE_ACCOUNT_NUMBER = 22;
   */
  ACCOUNT_NUMBER = 22,

  /**
   * @generated from enum value: RECORD_TYPE_STRUCT_VALUE = 23;
   */
  STRUCT_VALUE = 23,
}

/**
 * @generated from enum api.commons.FieldType
 */
export declare enum FieldType {
  /**
   * @generated from enum value: FIELD_TYPE_STRING = 0;
   */
  STRING = 0,

  /**
   * @generated from enum value: FIELD_TYPE_NUMBER = 1;
   */
  NUMBER = 1,

  /**
   * @generated from enum value: FIELD_TYPE_BOOLEAN = 2;
   */
  BOOLEAN = 2,

  /**
   * @generated from enum value: FIELD_TYPE_PHONE = 3;
   */
  PHONE = 3,

  /**
   * @generated from enum value: FIELD_TYPE_CURRENCY = 4;
   */
  CURRENCY = 4,

  /**
   * @generated from enum value: FIELD_TYPE_EMAIL = 5;
   */
  EMAIL = 5,

  /**
   * @generated from enum value: FIELD_TYPE_DATETIME_NOW = 6;
   */
  DATETIME_NOW = 6,

  /**
   * @generated from enum value: FIELD_TYPE_DATETIME_TIMESTAMP = 7;
   */
  DATETIME_TIMESTAMP = 7,

  /**
   * @generated from enum value: FIELD_TYPE_DATETIME_DATE = 8;
   */
  DATETIME_DATE = 8,

  /**
   * @generated from enum value: FIELD_TYPE_DATETIME_MONTH_AND_DAY = 9;
   */
  DATETIME_MONTH_AND_DAY = 9,

  /**
   * @generated from enum value: FIELD_TYPE_DATETIME_TIME_OF_DAY = 10;
   */
  DATETIME_TIME_OF_DAY = 10,

  /**
   * @generated from enum value: FIELD_TYPE_POSTAL_CODE = 12;
   */
  POSTAL_CODE = 12,

  /**
   * @generated from enum value: FIELD_TYPE_ENRICHED_PHONE = 13;
   */
  ENRICHED_PHONE = 13,

  /**
   * @generated from enum value: FIELD_TYPE_ENRICHED_ZIP = 14;
   */
  ENRICHED_ZIP = 14,

  /**
   * @generated from enum value: FIELD_TYPE_SOCIAL = 15;
   */
  SOCIAL = 15,

  /**
   * @generated from enum value: FIELD_TYPE_DATE_OF_BIRTH = 16;
   */
  DATE_OF_BIRTH = 16,

  /**
   * @generated from enum value: FIELD_TYPE_FULL_NAME = 17;
   */
  FULL_NAME = 17,

  /**
   * @generated from enum value: FIELD_TYPE_ACCOUNT_NUMBER = 18;
   */
  ACCOUNT_NUMBER = 18,

  /**
   * @generated from enum value: FIELD_TYPE_ERROR = 19;
   */
  ERROR = 19,

  /**
   * @generated from enum value: FIELD_TYPE_STRUCT_VALUE = 20;
   */
  STRUCT_VALUE = 20,
}

/**
 * @generated from enum api.commons.FileFormat
 */
export declare enum FileFormat {
  /**
   * @generated from enum value: FILE_FORMAT_CSV = 0;
   */
  CSV = 0,

  /**
   * @generated from enum value: FILE_FORMAT_CUSTOM_DELIM = 1;
   */
  CUSTOM_DELIM = 1,

  /**
   * @generated from enum value: FILE_FORMAT_FIXED_FORMAT = 2;
   */
  FIXED_FORMAT = 2,

  /**
   * @generated from enum value: FILE_FORMAT_TAB = 3;
   */
  TAB = 3,

  /**
   * @generated from enum value: FILE_FORMAT_JSON = 4;
   */
  JSON = 4,
}

/**
 * @generated from enum api.commons.PipelineElementStatusType
 */
export declare enum PipelineElementStatusType {
  /**
   * @generated from enum value: PIPELINE_ELEMENT_STATUS_TYPE_INITIALIZED = 0;
   */
  INITIALIZED = 0,

  /**
   * @generated from enum value: PIPELINE_ELEMENT_STATUS_TYPE_RUNNING = 1;
   */
  RUNNING = 1,

  /**
   * @generated from enum value: PIPELINE_ELEMENT_STATUS_TYPE_STOPPED = 2;
   */
  STOPPED = 2,

  /**
   * @generated from enum value: PIPELINE_ELEMENT_STATUS_TYPE_FAILED = 3;
   */
  FAILED = 3,
}

/**
 * @generated from enum api.commons.EntrypointType
 */
export declare enum EntrypointType {
  /**
   * @generated from enum value: ENTRYPOINT_TYPE_NON = 0;
   */
  NON = 0,

  /**
   * @generated from enum value: ENTRYPOINT_TYPE_API = 1;
   */
  API = 1,

  /**
   * @generated from enum value: ENTRYPOINT_TYPE_SFTP = 2;
   */
  SFTP = 2,
}

/**
 * @generated from enum api.commons.DuplicatePolicyType
 */
export declare enum DuplicatePolicyType {
  /**
   * @generated from enum value: DUPLICATE_POLICY_TYPE_KEEP_RECORD_DISCARD_NUMBER = 0;
   */
  KEEP_RECORD_DISCARD_NUMBER = 0,

  /**
   * @generated from enum value: DUPLICATE_POLICY_TYPE_ALLOW_RECORD_KEEP_NUMBER = 1;
   */
  ALLOW_RECORD_KEEP_NUMBER = 1,

  /**
   * @generated from enum value: DUPLICATE_POLICY_TYPE_DISCARD_RECORD = 2;
   */
  DISCARD_RECORD = 2,

  /**
   * @generated from enum value: DUPLICATE_POLICY_TYPE_DUPLICATE_LIST = 3;
   */
  DUPLICATE_LIST = 3,
}

/**
 * @generated from enum api.commons.AbsentPolicyType
 */
export declare enum AbsentPolicyType {
  /**
   * @generated from enum value: ABSENT_POLICY_TYPE_KEEP = 0;
   */
  KEEP = 0,

  /**
   * @generated from enum value: ABSENT_POLICY_TYPE_DISCARD = 1;
   */
  DISCARD = 1,
}

/**
 * @generated from enum api.commons.DialOrderType
 */
export declare enum DialOrderType {
  /**
   * @generated from enum value: DIAL_ORDER_TYPE_FIRST = 0;
   */
  FIRST = 0,

  /**
   * @generated from enum value: DIAL_ORDER_TYPE_NATURAL = 1;
   */
  NATURAL = 1,

  /**
   * @generated from enum value: DIAL_ORDER_TYPE_CUSTOM = 2;
   */
  CUSTOM = 2,
}

/**
 * @generated from enum api.commons.ExportType
 */
export declare enum ExportType {
  /**
   * @generated from enum value: EXPORT_TYPE_FILENAME = 0;
   */
  FILENAME = 0,

  /**
   * @generated from enum value: EXPORT_TYPE_SFTP = 1;
   */
  SFTP = 1,
}

/**
 * @generated from enum api.commons.SortOrder
 */
export declare enum SortOrder {
  /**
   * @generated from enum value: SORT_ORDER_ASCENDING = 0;
   */
  ASCENDING = 0,

  /**
   * @generated from enum value: SORT_ORDER_DESCENDING = 1;
   */
  DESCENDING = 1,
}

/**
 * @generated from enum api.commons.CompareType
 */
export declare enum CompareType {
  /**
   * @generated from enum value: COMPARE_TYPE_STRING = 0;
   */
  STRING = 0,

  /**
   * @generated from enum value: COMPARE_TYPE_NUMBER = 1;
   */
  NUMBER = 1,

  /**
   * @generated from enum value: COMPARE_TYPE_BOOL = 2;
   */
  BOOL = 2,
}

/**
 * @generated from enum api.commons.CompareOperator
 */
export declare enum CompareOperator {
  /**
   * @generated from enum value: COMPARE_OPERATOR_EQUAL_TO = 0;
   */
  EQUAL_TO = 0,

  /**
   * @generated from enum value: COMPARE_OPERATOR_GREATER = 1;
   */
  GREATER = 1,

  /**
   * @generated from enum value: COMPARE_OPERATOR_GREATER_EQUAL = 2;
   */
  GREATER_EQUAL = 2,

  /**
   * @generated from enum value: COMPARE_OPERATOR_LESS = 3;
   */
  LESS = 3,

  /**
   * @generated from enum value: COMPARE_OPERATOR_LESS_EQUAL = 4;
   */
  LESS_EQUAL = 4,

  /**
   * @generated from enum value: COMPARE_OPERATOR_STARTS_WITH = 5;
   */
  STARTS_WITH = 5,

  /**
   * @generated from enum value: COMPARE_OPERATOR_ENDS_WITH = 6;
   */
  ENDS_WITH = 6,

  /**
   * @generated from enum value: COMPARE_OPERATOR_CONTAINS = 7;
   */
  CONTAINS = 7,
}

/**
 * @generated from enum api.commons.ChainOperator
 */
export declare enum ChainOperator {
  /**
   * @generated from enum value: CHAIN_OPERATOR_AND = 0;
   */
  AND = 0,

  /**
   * @generated from enum value: CHAIN_OPERATOR_OR = 1;
   */
  OR = 1,
}

/**
 * @generated from enum api.commons.DeDupActions
 */
export declare enum DeDupActions {
  /**
   * @generated from enum value: DE_DUP_ACTIONS_KEEP_FIRST = 0;
   */
  KEEP_FIRST = 0,

  /**
   * @generated from enum value: DE_DUP_ACTIONS_KEEP_BOTH = 3;
   */
  KEEP_BOTH = 3,

  /**
   * @generated from enum value: DE_DUP_ACTIONS_KEEP_LAST = 4;
   */
  KEEP_LAST = 4,

  /**
   * @generated from enum value: DE_DUP_ACTIONS_KEEP_NEITHER = 5;
   */
  KEEP_NEITHER = 5,
}

/**
 * where the date should be in position to the prefix, suffix and filename
 * for ConstructedFilename messages.
 * NOTE: Originally file defaulted to AFTER_FILENAME, this would change it to be
 * before the prefix
 *
 * @generated from enum api.commons.DatePosition
 */
export declare enum DatePosition {
  /**
   * @generated from enum value: DATE_POSITION_FIRST = 0;
   */
  FIRST = 0,

  /**
   * @generated from enum value: DATE_POSITION_BEFORE_FILENAME = 1;
   */
  BEFORE_FILENAME = 1,

  /**
   * @generated from enum value: DATE_POSITION_AFTER_FILENAME = 2;
   */
  AFTER_FILENAME = 2,

  /**
   * @generated from enum value: DATE_POSITION_LAST = 3;
   */
  LAST = 3,
}

/**
 * @generated from enum api.commons.RelativeDay
 */
export declare enum RelativeDay {
  /**
   * @generated from enum value: RELATIVE_DAY_TODAY = 0;
   */
  TODAY = 0,

  /**
   * @generated from enum value: RELATIVE_DAY_YESTERDAY = 1;
   */
  YESTERDAY = 1,

  /**
   * @generated from enum value: RELATIVE_DAY_LAST_FRIDAY = 2;
   */
  LAST_FRIDAY = 2,
}

/**
 * @generated from enum api.commons.FilePatternType
 */
export declare enum FilePatternType {
  /**
   * @generated from enum value: FILE_PATTERN_TYPE_GLOB = 0;
   */
  GLOB = 0,

  /**
   * @generated from enum value: FILE_PATTERN_TYPE_CONSTRUCTED = 1;
   */
  CONSTRUCTED = 1,

  /**
   * used with the FilePattern object, suggests to use the original filename
   * if it is known.
   * the filename options for the CONSTRUCTED file pattern type all still apply.
   *
   * @generated from enum value: FILE_PATTERN_TYPE_ORIGINAL = 2;
   */
  ORIGINAL = 2,
}

/**
 * Used with a format string, and string date value to get a matrix/lms/DateTime
 * proto
 *
 * @generated from enum api.commons.DateTimePrecision
 */
export declare enum DateTimePrecision {
  /**
   * @generated from enum value: DATETIME_PRECISION_NOW = 0;
   */
  DATETIME_PRECISION_NOW = 0,

  /**
   * @generated from enum value: DATETIME_PRECISION_TIMESTAMP = 1;
   */
  DATETIME_PRECISION_TIMESTAMP = 1,

  /**
   * @generated from enum value: DATETIME_PRECISION_DATE = 2;
   */
  DATETIME_PRECISION_DATE = 2,

  /**
   * @generated from enum value: DATETIME_PRECISION_MONTH_AND_DAY = 3;
   */
  DATETIME_PRECISION_MONTH_AND_DAY = 3,

  /**
   * @generated from enum value: DATETIME_PRECISION_TIME_OF_DAY = 4;
   */
  DATETIME_PRECISION_TIME_OF_DAY = 4,
}

/**
 * @generated from enum api.commons.HttpVerb
 */
export declare enum HttpVerb {
  /**
   * @generated from enum value: HTTP_VERB_GET = 0;
   */
  GET = 0,

  /**
   * @generated from enum value: HTTP_VERB_POST = 1;
   */
  POST = 1,
}

/**
 * @generated from enum api.commons.ComplianceListType
 */
export declare enum ComplianceListType {
  /**
   * @generated from enum value: COMPLIANCE_LIST_TYPE_SCRUB = 0;
   */
  SCRUB = 0,

  /**
   * @generated from enum value: COMPLIANCE_LIST_TYPE_CONSENT = 1;
   */
  CONSENT = 1,
}

/**
 * @generated from enum api.commons.EventState
 */
export declare enum EventState {
  /**
   * state does not apply
   *
   * @generated from enum value: EVENT_STATE_NONE = 0;
   */
  NONE = 0,

  /**
   * event will start processing on external system
   *
   * @generated from enum value: EVENT_STATE_KICKOFF = 1;
   */
  KICKOFF = 1,

  /**
   * event will checkup on what was started during the kickoff
   *
   * @generated from enum value: EVENT_STATE_CHECK = 2;
   */
  CHECK = 2,

  /**
   * event will handle the records and send them downstream
   *
   * @generated from enum value: EVENT_STATE_PROCESS = 3;
   */
  PROCESS = 3,

  /**
   * event will do any remaining work needed to cleanup external system
   *
   * @generated from enum value: EVENT_STATE_CLEANUP = 4;
   */
  CLEANUP = 4,
}

/**
 * @generated from enum api.commons.TimeUnit
 */
export declare enum TimeUnit {
  /**
   * DEFAULT is decided by SURL (no quantity needed)
   *
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: TIME_WEEKS = 1;
   */
  TIME_WEEKS = 1,

  /**
   * @generated from enum value: TIME_DAYS = 2;
   */
  TIME_DAYS = 2,

  /**
   * @generated from enum value: TIME_HOURS = 3;
   */
  TIME_HOURS = 3,
}

/**
 * @generated from message api.commons.RecordField
 */
export declare class RecordField extends Message<RecordField> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: api.commons.RecordType type = 2;
   */
  type: RecordType;

  constructor(data?: PartialMessage<RecordField>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.RecordField";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordField;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordField;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordField;

  static equals(a: RecordField | PlainMessage<RecordField> | undefined, b: RecordField | PlainMessage<RecordField> | undefined): boolean;
}

/**
 * ::DEPRECATED FOR EXCHANGES::  use ConstructedFilename instead
 *
 * @generated from message api.commons.FilePattern
 */
export declare class FilePattern extends Message<FilePattern> {
  /**
   * @generated from field: api.commons.FilePatternType type = 1;
   */
  type: FilePatternType;

  /**
   * @generated from field: string directory = 2;
   */
  directory: string;

  /**
   * For GLOB type
   *
   * @generated from field: string filename = 3;
   */
  filename: string;

  /**
   * For CONSTRUCTED type
   *
   * @generated from field: repeated string prefixes = 4;
   */
  prefixes: string[];

  /**
   * @generated from field: string date_format = 5;
   */
  dateFormat: string;

  /**
   * @generated from field: string suffix = 6;
   */
  suffix: string;

  /**
   * @generated from field: string file_extension = 7;
   */
  fileExtension: string;

  /**
   * True if date string occurs at beginning of filename
   *
   * @generated from field: bool date_prefix = 8;
   */
  datePrefix: boolean;

  /**
   * Day to use for date
   *
   * @generated from field: api.commons.RelativeDay day_to_use = 9;
   */
  dayToUse: RelativeDay;

  constructor(data?: PartialMessage<FilePattern>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.FilePattern";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilePattern;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilePattern;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilePattern;

  static equals(a: FilePattern | PlainMessage<FilePattern> | undefined, b: FilePattern | PlainMessage<FilePattern> | undefined): boolean;
}

/**
 * Represents a filename that we will construct using the original uploaded name
 * prefix, date in "date_format" format, and extension
 * filename = date + prefix + original_filename + suffix + ext
 *
 * @generated from message api.commons.ConstructedFilename
 */
export declare class ConstructedFilename extends Message<ConstructedFilename> {
  /**
   * This is the name part that is sandwiched between prefix and suffix.
   * If this is nil, we will use the original uploaded filename.
   * if this is not nil (including empty string) we will use the nested 'value'
   * field as the filename.
   *
   * @generated from field: google.protobuf.StringValue override_filename = 3;
   */
  overrideFilename?: string;

  /**
   * prefix is prepended to the filename (or override_filename)
   *
   * @generated from field: string prefix = 4;
   */
  prefix: string;

  /**
   * format string like: YYYY-MM-DDhhmmss
   *
   * @generated from field: string date_format = 5;
   */
  dateFormat: string;

  /**
   * suffix is appeneded to the filename (or override_filename)
   * suffix will go before the extension, even if the original filename has an
   * extension included
   *
   * @generated from field: string suffix = 6;
   */
  suffix: string;

  /**
   * extension to add to the file, (if none already exists as part of the
   * original filename)
   *
   * @generated from field: string file_extension = 7;
   */
  fileExtension: string;

  /**
   * If 0 (default) date is positioned very first (before prefix)
   * note that before/after filename reference the same position if
   * 'use_empty_filename' is set
   *
   * @generated from field: api.commons.DatePosition date_position = 8;
   */
  datePosition: DatePosition;

  /**
   * Day to use for date
   *
   * @generated from field: api.commons.RelativeDay day_to_use = 9;
   */
  dayToUse: RelativeDay;

  constructor(data?: PartialMessage<ConstructedFilename>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ConstructedFilename";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConstructedFilename;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConstructedFilename;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConstructedFilename;

  static equals(a: ConstructedFilename | PlainMessage<ConstructedFilename> | undefined, b: ConstructedFilename | PlainMessage<ConstructedFilename> | undefined): boolean;
}

/**
 * @generated from message api.commons.PaginationTerminator
 */
export declare class PaginationTerminator extends Message<PaginationTerminator> {
  /**
   * the key we are checking
   *
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * negate the results of the operation check.
   * cases that we would have returned true, we instead return false, and vice versa
   *
   * @generated from field: bool negate = 2;
   */
  negate: boolean;

  /**
   * the operation we apply to key, if true, wee terminate the paginated http request
   *
   * @generated from oneof api.commons.PaginationTerminator.op
   */
  op: {
    /**
     * if true terminate if the key exists.
     * if false terminate if the key does not exist.
     *
     * @generated from field: bool exists_check = 3;
     */
    value: boolean;
    case: "existsCheck";
  } | {
    /**
     * terminate if the number value the key points to is greater than this
     *
     * @generated from field: double num_greater_than = 4;
     */
    value: number;
    case: "numGreaterThan";
  } | {
    /**
     * terminate if the number value the key points to is less than this
     *
     * @generated from field: double num_less_than = 5;
     */
    value: number;
    case: "numLessThan";
  } | {
    /**
     * terminate if the number value the key points to is equal to this
     *
     * @generated from field: double num_equals = 6;
     */
    value: number;
    case: "numEquals";
  } | {
    /**
     * terminate if the number of records in the array key points is less than this.
     * if key points to a non array, it has a count of 0
     *
     * @generated from field: int64 count_less_than = 7;
     */
    value: bigint;
    case: "countLessThan";
  } | {
    /**
     * terminate if the str value the key points to equals this
     *
     * @generated from field: string str_equals = 8;
     */
    value: string;
    case: "strEquals";
  } | {
    /**
     * terminate if the str value the key points to contains this
     *
     * @generated from field: string str_contains = 9;
     */
    value: string;
    case: "strContains";
  } | {
    /**
     * termintae if the bool value key points equals this
     *
     * @generated from field: bool bool_equals = 10;
     */
    value: boolean;
    case: "boolEquals";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<PaginationTerminator>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.PaginationTerminator";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PaginationTerminator;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PaginationTerminator;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PaginationTerminator;

  static equals(a: PaginationTerminator | PlainMessage<PaginationTerminator> | undefined, b: PaginationTerminator | PlainMessage<PaginationTerminator> | undefined): boolean;
}

/**
 * @generated from message api.commons.Expiration
 */
export declare class Expiration extends Message<Expiration> {
  /**
   * units can be weeks, days, or hours
   *
   * @generated from field: api.commons.TimeUnit units = 1;
   */
  units: TimeUnit;

  /**
   * max 1 year
   *
   * @generated from field: int64 quantity = 2;
   */
  quantity: bigint;

  constructor(data?: PartialMessage<Expiration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.Expiration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Expiration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Expiration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Expiration;

  static equals(a: Expiration | PlainMessage<Expiration> | undefined, b: Expiration | PlainMessage<Expiration> | undefined): boolean;
}

