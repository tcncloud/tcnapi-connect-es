// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/wfm.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Enum representing the different types of models for the regression forecaster.
 *
 * @generated from enum api.commons.RegressionForecasterModelTypes
 */
export declare enum RegressionForecasterModelTypes {
  /**
   * @generated from enum value: RANDOM_FOREST = 0;
   */
  RANDOM_FOREST = 0,

  /**
   * @generated from enum value: ADABOOST = 1;
   */
  ADABOOST = 1,

  /**
   * @generated from enum value: GRADIENT_BOOSTING = 2;
   */
  GRADIENT_BOOSTING = 2,

  /**
   * @generated from enum value: LINEAR_REGRESSION = 3;
   */
  LINEAR_REGRESSION = 3,

  /**
   * @generated from enum value: LINEAR_AVG = 4;
   */
  LINEAR_AVG = 4,

  /**
   * @generated from enum value: SEGMENTED_LINEAR = 5;
   */
  SEGMENTED_LINEAR = 5,

  /**
   * @generated from enum value: MLP = 6;
   */
  MLP = 6,

  /**
   * @generated from enum value: AUTO = 7;
   */
  AUTO = 7,
}

/**
 * @generated from enum api.commons.RegressionForecasterAvgsProcessingType
 */
export declare enum RegressionForecasterAvgsProcessingType {
  /**
   * a complete forecast is built for each skill profile for ACW/ASA/AHT/ATAB
   *
   * @generated from enum value: FORECAST = 0;
   */
  FORECAST = 0,

  /**
   * an average from the training data is built for each skill profile for ACW/ASA/AHT/ATAB
   *
   * @generated from enum value: AVERAGES = 1;
   */
  AVERAGES = 1,

  /**
   * Fixed values are used for  ACW/ASA/AHT/ATAB
   *
   * @generated from enum value: FIXED_AVERAGES = 2;
   */
  FIXED_AVERAGES = 2,
}

/**
 * enum representing the units of time a ConstraintRule uses
 *
 * @generated from enum api.commons.ConstraintTimeUnit
 */
export declare enum ConstraintTimeUnit {
  /**
   * @generated from enum value: MINUTES = 0;
   */
  MINUTES = 0,

  /**
   * @generated from enum value: HOURS = 1;
   */
  HOURS = 1,

  /**
   * @generated from enum value: SHIFTS = 2;
   */
  SHIFTS = 2,

  /**
   * @generated from enum value: DAYS = 3;
   */
  DAYS = 3,

  /**
   * @generated from enum value: WEEKS = 4;
   */
  WEEKS = 4,

  /**
   * @generated from enum value: MONTHS = 5;
   */
  MONTHS = 5,

  /**
   * @generated from enum value: YEARS = 6;
   */
  YEARS = 6,
}

/**
 * @generated from enum api.commons.ConfigEntityType
 */
export declare enum ConfigEntityType {
  /**
   * entity is a call center node.
   *
   * @generated from enum value: CALL_CENTER_NODE = 0;
   */
  CALL_CENTER_NODE = 0,

  /**
   * entity is a client node.
   *
   * @generated from enum value: CLIENT_NODE = 1;
   */
  CLIENT_NODE = 1,

  /**
   * entity is a location node.
   *
   * @generated from enum value: LOCATION_NODE = 2;
   */
  LOCATION_NODE = 2,

  /**
   * entity is a program node.
   *
   * @generated from enum value: PROGRAM_NODE = 3;
   */
  PROGRAM_NODE = 3,

  /**
   * entity is an agent group.
   *
   * @generated from enum value: AGENT_GROUP = 4;
   */
  AGENT_GROUP = 4,

  /**
   * entity is a shift template.
   *
   * @generated from enum value: SHIFT_TEMPLATE = 5;
   */
  SHIFT_TEMPLATE = 5,

  /**
   * entity is a wfm agent.
   *
   * @generated from enum value: WFM_AGENT = 6;
   */
  WFM_AGENT = 6,

  /**
   * entity is a placement rule.
   *
   * @generated from enum value: PLACEMENT_RULE = 7;
   */
  PLACEMENT_RULE = 7,

  /**
   * entity is a constraint rule.
   *
   * @generated from enum value: CONSTRAINT_RULE = 8;
   */
  CONSTRAINT_RULE = 8,

  /**
   * entity is a non skill activity.
   *
   * @generated from enum value: NON_SKILL_ACTIVITY = 9;
   */
  NON_SKILL_ACTIVITY = 9,

  /**
   * entity is an agent availability.
   *
   * @generated from enum value: AGENT_AVAILABILITY = 10;
   */
  AGENT_AVAILABILITY = 10,

  /**
   * entity is an open times.
   *
   * @generated from enum value: OPEN_TIMES = 11;
   */
  OPEN_TIMES = 11,

  /**
   * entity is a scheduling activity.
   *
   * @generated from enum value: SCHEDULING_ACTIVITY = 12;
   */
  SCHEDULING_ACTIVITY = 12,

  /**
   * entity is a skill proficiency.
   *
   * @generated from enum value: SKILL_PROFICIENCY = 13;
   */
  SKILL_PROFICIENCY = 13,

  /**
   * entity is a schedule scenario.
   *
   * @generated from enum value: SCHEDULE_SCENARIO = 14;
   */
  SCHEDULE_SCENARIO = 14,
}

/**
 * enum representing the different types of Constraint Rules
 *
 * @generated from enum api.commons.ConstraintRuleType
 */
export declare enum ConstraintRuleType {
  /**
   * @generated from enum value: MIN_CONSEC_ON = 0;
   */
  MIN_CONSEC_ON = 0,

  /**
   * @generated from enum value: MAX_CONSEC_ON = 1;
   */
  MAX_CONSEC_ON = 1,

  /**
   * @generated from enum value: MIN_CONSEC_OFF = 2;
   */
  MIN_CONSEC_OFF = 2,

  /**
   * @generated from enum value: MAX_CONSEC_OFF = 3;
   */
  MAX_CONSEC_OFF = 3,

  /**
   * @generated from enum value: MIN_TOTAL_ON = 4;
   */
  MIN_TOTAL_ON = 4,

  /**
   * @generated from enum value: MAX_TOTAL_ON = 5;
   */
  MAX_TOTAL_ON = 5,

  /**
   * @generated from enum value: MIN_TOTAL_OFF = 6;
   */
  MIN_TOTAL_OFF = 6,

  /**
   * @generated from enum value: MAX_TOTAL_OFF = 7;
   */
  MAX_TOTAL_OFF = 7,

  /**
   * @generated from enum value: MIN_SKILL_LEVEL = 8;
   */
  MIN_SKILL_LEVEL = 8,
}

/**
 * Enum representing the different types of placements for the DOW Placement.
 *
 * @generated from enum api.commons.DOWPlacementType
 */
export declare enum DOWPlacementType {
  /**
   * @generated from enum value: MUST_NOT = 0;
   */
  MUST_NOT = 0,

  /**
   * @generated from enum value: MAY = 1;
   */
  MAY = 1,

  /**
   * @generated from enum value: MUST = 2;
   */
  MUST = 2,
}

/**
 * Enum representing the options for open times.
 *
 * @generated from enum api.commons.OpenTimesOption
 */
export declare enum OpenTimesOption {
  /**
   * @generated from enum value: CLOSED = 0;
   */
  CLOSED = 0,

  /**
   * @generated from enum value: OPEN = 1;
   */
  OPEN = 1,
}

/**
 * Enum representing the options for agent availability.
 *
 * @generated from enum api.commons.AvailabilityOption
 */
export declare enum AvailabilityOption {
  /**
   * @generated from enum value: AVAILABLE = 0;
   */
  AVAILABLE = 0,

  /**
   * @generated from enum value: NOT_AVAILABLE = 1;
   */
  NOT_AVAILABLE = 1,

  /**
   * @generated from enum value: PREFER_NOT_AVAILABLE = 2;
   */
  PREFER_NOT_AVAILABLE = 2,
}

/**
 * Enum representing the options for day of the week, Monday must be 0.
 *
 * @generated from enum api.commons.DayOfWeek
 */
export declare enum DayOfWeek {
  /**
   * @generated from enum value: MON = 0;
   */
  MON = 0,

  /**
   * @generated from enum value: TUE = 1;
   */
  TUE = 1,

  /**
   * @generated from enum value: WED = 2;
   */
  WED = 2,

  /**
   * @generated from enum value: THU = 3;
   */
  THU = 3,

  /**
   * @generated from enum value: FRI = 4;
   */
  FRI = 4,

  /**
   * @generated from enum value: SAT = 5;
   */
  SAT = 5,

  /**
   * @generated from enum value: SUN = 6;
   */
  SUN = 6,
}

/**
 * Enum representing the options for config entity relationships.
 *
 * @generated from enum api.commons.ConfigRelationshipType
 */
export declare enum ConfigRelationshipType {
  /**
   * The entity is associated with the other one.
   *
   * @generated from enum value: IS_ASSOCIATED_WITH = 0;
   */
  IS_ASSOCIATED_WITH = 0,

  /**
   * The entity is NOT associated with the other one.
   *
   * @generated from enum value: IS_NOT_ASSOCIATED_WITH = 1;
   */
  IS_NOT_ASSOCIATED_WITH = 1,

  /**
   * The entity is a member of the other one.
   *
   * @generated from enum value: IS_MEMBER_OF = 2;
   */
  IS_MEMBER_OF = 2,
}

/**
 * Enum representing the level of a diagnostic.
 *
 * @generated from enum api.commons.DiagnosticLevel
 */
export declare enum DiagnosticLevel {
  /**
   * The diagnostic is reporting an information level report.
   *
   * @generated from enum value: INFORMATION = 0;
   */
  INFORMATION = 0,

  /**
   * The diagnostic is reporting a suggestion level report.
   *
   * @generated from enum value: SUGGESTION = 1;
   */
  SUGGESTION = 1,

  /**
   * The diagnostic is reporting a warning level report.
   *
   * @generated from enum value: WARNING = 2;
   */
  WARNING = 2,

  /**
   * The diagnostic is reporting an error level report.
   *
   * @generated from enum value: DIAGNOSTIC_ERROR = 3;
   */
  DIAGNOSTIC_ERROR = 3,

  /**
   * The diagnostic is reporting an internal error level report.
   *
   * @generated from enum value: INTERNAL_ERROR = 4;
   */
  INTERNAL_ERROR = 4,
}

/**
 * Enum representing the type of a diagnostic.
 *
 * @generated from enum api.commons.DiagnosticCode
 */
export declare enum DiagnosticCode {
  /**
   * The code type used when no other code is appropriate.
   *
   * @generated from enum value: GENERAL = 0;
   */
  GENERAL = 0,

  /**
   * The diagnostic is reporting no errors found.
   *
   * @generated from enum value: OK = 1;
   */
  OK = 1,

  /**
   * The diagnostic is reporting no skills in the dictionary.
   *
   * @generated from enum value: NO_SKILLS_IN_DICTIONARY = 2;
   */
  NO_SKILLS_IN_DICTIONARY = 2,

  /**
   * The diagnostic is reporting a wfm agent with no skill proficiencies.
   *
   * @generated from enum value: AGENT_HAS_NO_SKILL_PROFICIENCIES = 3;
   */
  AGENT_HAS_NO_SKILL_PROFICIENCIES = 3,

  /**
   * The diagnostic is reporting an agent with no skills.
   *
   * @generated from enum value: AGENT_HAS_NO_SKILLS = 4;
   */
  AGENT_HAS_NO_SKILLS = 4,

  /**
   * The diagnostic is reporting the constraint rules don't have a scheduling activity.
   *
   * @generated from enum value: NO_SCHEDULING_ACTIVITIES_FOR_CONSTRAINT_RULES = 5;
   */
  NO_SCHEDULING_ACTIVITIES_FOR_CONSTRAINT_RULES = 5,

  /**
   * The diagnostic is reporting a constraint rule pointing to a scheduling activity that cannot be found.
   *
   * @generated from enum value: SCHEDULING_ACTIVITY_FOR_CONSTRAINT_RULE_NOT_FOUND = 6;
   */
  SCHEDULING_ACTIVITY_FOR_CONSTRAINT_RULE_NOT_FOUND = 6,

  /**
   * The diagnostic is reporting a NONE value for a shift template
   *
   * @generated from enum value: SHIFT_TEMPLATE_CANNOT_BE_NONE = 7;
   */
  SHIFT_TEMPLATE_CANNOT_BE_NONE = 7,

  /**
   * The diagnostic is reporting a shift template with no member placement rules.
   *
   * @generated from enum value: SHIFT_TEMPLATE_HAS_NO_PLACEMENT_RULES = 8;
   */
  SHIFT_TEMPLATE_HAS_NO_PLACEMENT_RULES = 8,

  /**
   * The diagnostic is reporting a shift template whose placement rules do not include an on-call placement.
   *
   * @generated from enum value: NO_ONCALL_IN_SHIFT_TEMPLATE_PLACEMENT_RULES = 9;
   */
  NO_ONCALL_IN_SHIFT_TEMPLATE_PLACEMENT_RULES = 9,

  /**
   * The diagnostic is reporting the min duration for a shift templates placement rule being greater than the max duration.
   *
   * @generated from enum value: MIN_GT_MAX_DURATION_IN_SHIFT_TEMPLATE_PLACEMENT_RULES = 10;
   */
  MIN_GT_MAX_DURATION_IN_SHIFT_TEMPLATE_PLACEMENT_RULES = 10,

  /**
   * The diagnostic is reporting a shift template with a min_agents value greater than it's max_agents value.
   *
   * @generated from enum value: MIN_GT_MAX_AGENTS_IN_SHIFT_TEMPLATE = 11;
   */
  MIN_GT_MAX_AGENTS_IN_SHIFT_TEMPLATE = 11,

  /**
   * The diagnostic is reporting no placement rules as members of the shift template.
   *
   * @generated from enum value: NO_PLACEMENT_RULES_FOR_SHIFT_TEMPLATE = 12;
   */
  NO_PLACEMENT_RULES_FOR_SHIFT_TEMPLATE = 12,

  /**
   * The diagnostic is reporting that the activities are too short for the shift.
   *
   * @generated from enum value: ACTIVITIES_SHORTER_THAN_SHIFT = 13;
   */
  ACTIVITIES_SHORTER_THAN_SHIFT = 13,

  /**
   * The diagnostic is reporting that a shift doesn't have a sufficient number of agents available.
   *
   * @generated from enum value: NOT_ENOUGH_AGENTS_FOR_SHIFT = 14;
   */
  NOT_ENOUGH_AGENTS_FOR_SHIFT = 14,

  /**
   * The diagnostic is reporting that a program node has no member agent groups.
   *
   * @generated from enum value: PROGRAM_HAS_NO_AGENT_GROUPS = 15;
   */
  PROGRAM_HAS_NO_AGENT_GROUPS = 15,

  /**
   * The diagnostic is reporting that a program node has no member shift templates.
   *
   * @generated from enum value: PROGRAM_HAS_NO_SHIFT_TEMPLATES = 16;
   */
  PROGRAM_HAS_NO_SHIFT_TEMPLATES = 16,

  /**
   * The diagnostic is reporting that a location node has no member program nodes.
   *
   * @generated from enum value: LOCATION_HAS_NO_PROGRAMS = 17;
   */
  LOCATION_HAS_NO_PROGRAMS = 17,

  /**
   * The diagnostic is reporting that a client node has no member location nodes.
   *
   * @generated from enum value: CLIENT_HAS_NO_LOCATIONS = 18;
   */
  CLIENT_HAS_NO_LOCATIONS = 18,

  /**
   * The diagnostic is reporting that a call center node has no member client nodes
   *
   * @generated from enum value: CALL_CENTER_HAS_NO_CLIENTS = 19;
   */
  CALL_CENTER_HAS_NO_CLIENTS = 19,

  /**
   * The diagnostic is reporting that a program node has an invalid parent location node.
   *
   * @generated from enum value: PROGRAM_HAS_INVALID_PARENT_LOCATION = 20;
   */
  PROGRAM_HAS_INVALID_PARENT_LOCATION = 20,

  /**
   * The diagnostic is reporting that a location node has an invalid parent client node.
   *
   * @generated from enum value: LOCATION_HAS_INVALID_PARENT_CLIENT = 21;
   */
  LOCATION_HAS_INVALID_PARENT_CLIENT = 21,

  /**
   * The diagnostic is reporting that a client node has an invalid parent call center.
   *
   * @generated from enum value: CLIENT_HAS_INVALID_PARENT_CALL_CENTER = 22;
   */
  CLIENT_HAS_INVALID_PARENT_CALL_CENTER = 22,

  /**
   * The diagnostic is reporting that an agent group has an invalid parent node.
   *
   * @generated from enum value: AGENT_GROUP_HAS_INVALID_PARENT_NODE = 23;
   */
  AGENT_GROUP_HAS_INVALID_PARENT_NODE = 23,

  /**
   * The diagnostic is reporting an invalid parent program for a shift template.
   *
   * @generated from enum value: SHIFT_TEMPLATE_HAS_INVALID_PARENT_PROGRAM = 24;
   */
  SHIFT_TEMPLATE_HAS_INVALID_PARENT_PROGRAM = 24,

  /**
   * The diagnostic is reporting a constraint rule pointing to a missing skill proficiency.
   *
   * @generated from enum value: NO_SKILL_PROFICIENCY_FOR_MIN_SKILL_PROFICIENCY_CONSTRAINT_RULE = 25;
   */
  NO_SKILL_PROFICIENCY_FOR_MIN_SKILL_PROFICIENCY_CONSTRAINT_RULE = 25,
}

/**
 * Enum representing the type of a performance metric.
 *
 * @generated from enum api.commons.PerformanceMetricType
 */
export declare enum PerformanceMetricType {
  /**
   * The metric is a simplified comparison of FTE calls vs achieved calls.
   *
   * @generated from enum value: FTE_REQUIRED_VS_ACHIEVED_SIMPLE = 0;
   */
  FTE_REQUIRED_VS_ACHIEVED_SIMPLE = 0,

  /**
   * The metric is an extended comparison of FTE calls vs achieved calls.
   *
   * @generated from enum value: FTE_REQUIRED_VS_ACHIEVED_EXTENDED = 1;
   */
  FTE_REQUIRED_VS_ACHIEVED_EXTENDED = 1,

  /**
   * The metric analyzes the service level of the schedule.
   *
   * @generated from enum value: SERVICE_LEVEL_ANALYSIS = 2;
   */
  SERVICE_LEVEL_ANALYSIS = 2,

  /**
   * The metric returns a matrix metric of the service level for the schedule.
   *
   * @generated from enum value: SERVICE_LEVEL_MATRIX = 3;
   */
  SERVICE_LEVEL_MATRIX = 3,

  /**
   * The metric relate to contact handling performance.
   *
   * @generated from enum value: CONTACT_HANDLING_METRICS = 4;
   */
  CONTACT_HANDLING_METRICS = 4,

  /**
   * The metric relates to the load forecast
   *
   * @generated from enum value: LOAD_FORECAST = 5;
   */
  LOAD_FORECAST = 5,
}

/**
 * Deprecated.
 *
 * @generated from enum api.commons.ScheduleShouldInclude
 */
export declare enum ScheduleShouldInclude {
  /**
   * Include only shift instances.
   *
   * @generated from enum value: ONLY_SHIFT_INSTANCES = 0;
   */
  ONLY_SHIFT_INSTANCES = 0,

  /**
   * Include only performance metrics.
   *
   * @generated from enum value: ONLY_PERFORMANCE_METRICS = 1;
   */
  ONLY_PERFORMANCE_METRICS = 1,

  /**
   * Include both entities.
   *
   * @generated from enum value: SHIFT_INSTANCES_AND_PERFORMANCE_METRICS = 2;
   */
  SHIFT_INSTANCES_AND_PERFORMANCE_METRICS = 2,
}

/**
 * enum representing the type of a schedule.
 *
 * @generated from enum api.commons.ScheduleType
 */
export declare enum ScheduleType {
  /**
   * Draft schedule.
   *
   * @generated from enum value: DRAFT = 0;
   */
  DRAFT = 0,

  /**
   * Published schedule.
   *
   * @generated from enum value: PUBLISHED = 1;
   */
  PUBLISHED = 1,
}

/**
 * @generated from enum api.commons.SchedulingTargetType
 */
export declare enum SchedulingTargetType {
  /**
   * Node will use coverage based scheduling.
   *
   * @generated from enum value: COVERAGE = 0;
   */
  COVERAGE = 0,

  /**
   * Node will use service level based scheduling.
   *
   * @generated from enum value: SERVICE_LEVEL = 1;
   */
  SERVICE_LEVEL = 1,
}

/**
 * Represents the skill types that a client's skills can be.
 *
 * @generated from message api.commons.SkillType
 */
export declare class SkillType extends Message<SkillType> {
  constructor(data?: PartialMessage<SkillType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.SkillType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SkillType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SkillType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SkillType;

  static equals(a: SkillType | PlainMessage<SkillType> | undefined, b: SkillType | PlainMessage<SkillType> | undefined): boolean;
}

/**
 * @generated from enum api.commons.SkillType.Enum
 */
export declare enum SkillType_Enum {
  /**
   * @generated from enum value: AGENT_SKILL = 0;
   */
  AGENT_SKILL = 0,

  /**
   * @generated from enum value: HUNT_GROUP = 1;
   */
  HUNT_GROUP = 1,

  /**
   * NOT used by WFM.
   *
   * @generated from enum value: AGENT_PBX = 2;
   */
  AGENT_PBX = 2,

  /**
   * NOT used by WFM.
   *
   * @generated from enum value: HUNT_GROUP_PBX = 3;
   */
  HUNT_GROUP_PBX = 3,

  /**
   * @generated from enum value: PBX = 4;
   */
  PBX = 4,

  /**
   * NOT used by WFM.
   *
   * @generated from enum value: AGENT = 5;
   */
  AGENT = 5,
}

/**
 * @generated from message api.commons.DatetimeRange
 */
export declare class DatetimeRange extends Message<DatetimeRange> {
  /**
   * begining datetime
   *
   * @generated from field: google.protobuf.Timestamp start_datetime = 1;
   */
  startDatetime?: Timestamp;

  /**
   * ending datetime
   *
   * @generated from field: google.protobuf.Timestamp end_datetime = 2;
   */
  endDatetime?: Timestamp;

  constructor(data?: PartialMessage<DatetimeRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DatetimeRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DatetimeRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DatetimeRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DatetimeRange;

  static equals(a: DatetimeRange | PlainMessage<DatetimeRange> | undefined, b: DatetimeRange | PlainMessage<DatetimeRange> | undefined): boolean;
}

/**
 * Request message for the UpsertForecastingParameters RPC.
 *
 * @generated from message api.commons.ForecastingParameters
 */
export declare class ForecastingParameters extends Message<ForecastingParameters> {
  /**
   * number of minutes in which calls will be grouped together during for the duration of a forecast, must be a multiple of 5 ranging from 5 to 60.
   *
   * @generated from field: int32 interval_width_in_minutes = 1;
   */
  intervalWidthInMinutes: number;

  /**
   * period for training that the historical data will be sourced from.
   * can be either a number of months to go back from the current datetime or a datetime to start from until the present.
   *
   * @generated from oneof api.commons.ForecastingParameters.historical_data_range
   */
  historicalDataRange: {
    /**
     * number of months back from the current datetime to look up history.
     *
     * @generated from field: int32 historical_data_range_in_months = 6;
     */
    value: number;
    case: "historicalDataRangeInMonths";
  } | {
    /**
     * start datetime to look up the history (end time will be the current datetime).
     *
     * @generated from field: google.protobuf.Timestamp historical_data_range_start_datetime = 7;
     */
    value: Timestamp;
    case: "historicalDataRangeStartDatetime";
  } | { case: undefined; value?: undefined };

  /**
   * number of weeks of the training data from the current datetime to use as a forecast test range.
   *
   * @generated from field: int32 forecast_test_range_in_weeks = 8;
   */
  forecastTestRangeInWeeks: number;

  /**
   * date range to generate forecasts.
   *
   * @generated from oneof api.commons.ForecastingParameters.forecast_range
   */
  forecastRange: {
    /**
     * number of weeks from the current datetime that forecast will be made.
     *
     * @generated from field: int32 forecast_range_in_weeks = 9;
     */
    value: number;
    case: "forecastRangeInWeeks";
  } | {
    /**
     * date range at which a forecasts will be made.
     *
     * @generated from field: api.commons.DatetimeRange forecast_datetime_range = 10;
     */
    value: DatetimeRange;
    case: "forecastDatetimeRange";
  } | { case: undefined; value?: undefined };

  /**
   * date range to be used to generate training data.
   *
   * @generated from oneof api.commons.ForecastingParameters.training_data_range
   */
  trainingDataRange: {
    /**
     * number of months in the past from the current datetime that the training data will be generated from.
     *
     * @generated from field: int32 training_data_range_in_months = 11;
     */
    value: number;
    case: "trainingDataRangeInMonths";
  } | {
    /**
     * date range in which the training data will be generated.
     *
     * @generated from field: api.commons.DatetimeRange training_data_datetime_range = 12;
     */
    value: DatetimeRange;
    case: "trainingDataDatetimeRange";
  } | { case: undefined; value?: undefined };

  /**
   * Number of months of training data to use when calculating averages.
   * If set to 0, then all the training data will be used when calculating the averages,
   * meaning that the start datetime of the training data to use will be the start datetime of the @training_data_range.
   * Otherwise, it will subtract that many months from the @training_data_range end datetime and use it as the start time.
   *
   * @generated from field: int32 averages_calculation_range_in_months = 13;
   */
  averagesCalculationRangeInMonths: number;

  constructor(data?: PartialMessage<ForecastingParameters>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ForecastingParameters";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForecastingParameters;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForecastingParameters;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForecastingParameters;

  static equals(a: ForecastingParameters | PlainMessage<ForecastingParameters> | undefined, b: ForecastingParameters | PlainMessage<ForecastingParameters> | undefined): boolean;
}

/**
 * ----------------------- Message types used by BuildProfileForecastReq() ------------------
 * a profile for time of day, for each day of the week
 *
 * @generated from message api.commons.ProfileTOD
 */
export declare class ProfileTOD extends Message<ProfileTOD> {
  /**
   * @generated from field: repeated float sunday = 1;
   */
  sunday: number[];

  /**
   * @generated from field: repeated float monday = 2;
   */
  monday: number[];

  /**
   * @generated from field: repeated float tuesday = 3;
   */
  tuesday: number[];

  /**
   * @generated from field: repeated float wednesday = 4;
   */
  wednesday: number[];

  /**
   * @generated from field: repeated float thursday = 5;
   */
  thursday: number[];

  /**
   * @generated from field: repeated float friday = 6;
   */
  friday: number[];

  /**
   * @generated from field: repeated float saturday = 7;
   */
  saturday: number[];

  constructor(data?: PartialMessage<ProfileTOD>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ProfileTOD";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProfileTOD;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProfileTOD;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProfileTOD;

  static equals(a: ProfileTOD | PlainMessage<ProfileTOD> | undefined, b: ProfileTOD | PlainMessage<ProfileTOD> | undefined): boolean;
}

/**
 * a profile for week of month, for each month of the year
 *
 * @generated from message api.commons.ProfileWOMS
 */
export declare class ProfileWOMS extends Message<ProfileWOMS> {
  /**
   * @generated from field: repeated float january = 1;
   */
  january: number[];

  /**
   * @generated from field: repeated float february = 2;
   */
  february: number[];

  /**
   * @generated from field: repeated float march = 3;
   */
  march: number[];

  /**
   * @generated from field: repeated float april = 4;
   */
  april: number[];

  /**
   * @generated from field: repeated float may = 5;
   */
  may: number[];

  /**
   * @generated from field: repeated float june = 6;
   */
  june: number[];

  /**
   * @generated from field: repeated float july = 7;
   */
  july: number[];

  /**
   * @generated from field: repeated float august = 8;
   */
  august: number[];

  /**
   * @generated from field: repeated float september = 9;
   */
  september: number[];

  /**
   * @generated from field: repeated float october = 10;
   */
  october: number[];

  /**
   * @generated from field: repeated float november = 11;
   */
  november: number[];

  /**
   * @generated from field: repeated float december = 12;
   */
  december: number[];

  constructor(data?: PartialMessage<ProfileWOMS>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ProfileWOMS";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProfileWOMS;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProfileWOMS;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProfileWOMS;

  static equals(a: ProfileWOMS | PlainMessage<ProfileWOMS> | undefined, b: ProfileWOMS | PlainMessage<ProfileWOMS> | undefined): boolean;
}

/**
 * a profile each day of the week
 *
 * @generated from message api.commons.ProfileDOW
 */
export declare class ProfileDOW extends Message<ProfileDOW> {
  /**
   * @generated from field: float sunday = 1;
   */
  sunday: number;

  /**
   * @generated from field: float monday = 2;
   */
  monday: number;

  /**
   * @generated from field: float tuesday = 3;
   */
  tuesday: number;

  /**
   * @generated from field: float wednesday = 4;
   */
  wednesday: number;

  /**
   * @generated from field: float thursday = 5;
   */
  thursday: number;

  /**
   * @generated from field: float friday = 6;
   */
  friday: number;

  /**
   * @generated from field: float saturday = 7;
   */
  saturday: number;

  constructor(data?: PartialMessage<ProfileDOW>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ProfileDOW";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProfileDOW;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProfileDOW;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProfileDOW;

  static equals(a: ProfileDOW | PlainMessage<ProfileDOW> | undefined, b: ProfileDOW | PlainMessage<ProfileDOW> | undefined): boolean;
}

/**
 * a profile for each month of the year
 *
 * @generated from message api.commons.ProfileMOY
 */
export declare class ProfileMOY extends Message<ProfileMOY> {
  /**
   * @generated from field: float january = 1;
   */
  january: number;

  /**
   * @generated from field: float february = 2;
   */
  february: number;

  /**
   * @generated from field: float march = 3;
   */
  march: number;

  /**
   * @generated from field: float april = 4;
   */
  april: number;

  /**
   * @generated from field: float may = 5;
   */
  may: number;

  /**
   * @generated from field: float june = 6;
   */
  june: number;

  /**
   * @generated from field: float july = 7;
   */
  july: number;

  /**
   * @generated from field: float august = 8;
   */
  august: number;

  /**
   * @generated from field: float september = 9;
   */
  september: number;

  /**
   * @generated from field: float october = 10;
   */
  october: number;

  /**
   * @generated from field: float november = 11;
   */
  november: number;

  /**
   * @generated from field: float december = 12;
   */
  december: number;

  constructor(data?: PartialMessage<ProfileMOY>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ProfileMOY";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProfileMOY;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProfileMOY;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProfileMOY;

  static equals(a: ProfileMOY | PlainMessage<ProfileMOY> | undefined, b: ProfileMOY | PlainMessage<ProfileMOY> | undefined): boolean;
}

/**
 * @generated from message api.commons.DistributionProfile
 */
export declare class DistributionProfile extends Message<DistributionProfile> {
  /**
   * For each of the 7 days of the week, a list of intervals signifying the distribution by time of day in intervals
   * determined by interval_minutes, starting with interval 0 = 12AM. so there would be 96 element for 15-minute intervals
   *
   * @generated from field: api.commons.ProfileTOD profile_tod = 1;
   */
  profileTod?: ProfileTOD;

  /**
   * For each of the 12 months of the year, a list of 6 week profiles. The first index for a given month is week 1 : the week
   *   of the first day of the month. The week with the last day of the month is the last index. e.g August 2021 has
   *   6 'weeks'
   *
   * @generated from field: api.commons.ProfileWOMS profile_woms = 2;
   */
  profileWoms?: ProfileWOMS;

  /**
   * a profile for each day of the week
   *
   * @generated from field: api.commons.ProfileDOW profile_dow = 3;
   */
  profileDow?: ProfileDOW;

  /**
   * a profile for each month of the year
   *
   * @generated from field: api.commons.ProfileMOY profile_moy = 4;
   */
  profileMoy?: ProfileMOY;

  constructor(data?: PartialMessage<DistributionProfile>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.DistributionProfile";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DistributionProfile;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DistributionProfile;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DistributionProfile;

  static equals(a: DistributionProfile | PlainMessage<DistributionProfile> | undefined, b: DistributionProfile | PlainMessage<DistributionProfile> | undefined): boolean;
}

/**
 * defines a template profile for call count distributions
 *
 * @generated from message api.commons.CallProfileGroupCalls
 */
export declare class CallProfileGroupCalls extends Message<CallProfileGroupCalls> {
  /**
   * @generated from field: int32 total_calls = 1;
   */
  totalCalls: number;

  /**
   * @generated from field: api.commons.DistributionProfile distribution_profile = 2;
   */
  distributionProfile?: DistributionProfile;

  constructor(data?: PartialMessage<CallProfileGroupCalls>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallProfileGroupCalls";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallProfileGroupCalls;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallProfileGroupCalls;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallProfileGroupCalls;

  static equals(a: CallProfileGroupCalls | PlainMessage<CallProfileGroupCalls> | undefined, b: CallProfileGroupCalls | PlainMessage<CallProfileGroupCalls> | undefined): boolean;
}

/**
 * defines a template profile of call characteristic distributions
 *
 * @generated from message api.commons.CallProfileGroupAvgs
 */
export declare class CallProfileGroupAvgs extends Message<CallProfileGroupAvgs> {
  /**
   * min average (e.g. min ATAB)
   *
   * @generated from field: float min_average = 1;
   */
  minAverage: number;

  /**
   * max average (e.g. max ATAB)
   *
   * @generated from field: float max_average = 2;
   */
  maxAverage: number;

  /**
   * @generated from field: api.commons.DistributionProfile distribution_profile = 3;
   */
  distributionProfile?: DistributionProfile;

  constructor(data?: PartialMessage<CallProfileGroupAvgs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.CallProfileGroupAvgs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallProfileGroupAvgs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallProfileGroupAvgs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallProfileGroupAvgs;

  static equals(a: CallProfileGroupAvgs | PlainMessage<CallProfileGroupAvgs> | undefined, b: CallProfileGroupAvgs | PlainMessage<CallProfileGroupAvgs> | undefined): boolean;
}

/**
 * Encapsulates the two kinds of options available so they can be interchangeably used.
 *
 * @generated from message api.commons.OptionTypes
 */
export declare class OptionTypes extends Message<OptionTypes> {
  /**
   * @generated from oneof api.commons.OptionTypes.desired_option
   */
  desiredOption: {
    /**
     * Option used by OpenTime
     *
     * @generated from field: api.commons.OpenTimesOption open_times_option = 1;
     */
    value: OpenTimesOption;
    case: "openTimesOption";
  } | {
    /**
     * Option used by Agent Availability
     *
     * @generated from field: api.commons.AvailabilityOption availability_option = 2;
     */
    value: AvailabilityOption;
    case: "availabilityOption";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<OptionTypes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.OptionTypes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OptionTypes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OptionTypes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OptionTypes;

  static equals(a: OptionTypes | PlainMessage<OptionTypes> | undefined, b: OptionTypes | PlainMessage<OptionTypes> | undefined): boolean;
}

/**
 * Filter for schedule selection.
 *
 * @generated from message api.commons.ScheduleSelector
 */
export declare class ScheduleSelector extends Message<ScheduleSelector> {
  /**
   * ID of the schedule to select, not needed for Published schedules.
   *
   * @generated from field: int64 schedule_sid = 1;
   */
  scheduleSid: bigint;

  /**
   * Type of the schedule to select.
   *
   * @generated from field: api.commons.ScheduleType schedule_type = 2;
   */
  scheduleType: ScheduleType;

  constructor(data?: PartialMessage<ScheduleSelector>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.ScheduleSelector";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScheduleSelector;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScheduleSelector;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScheduleSelector;

  static equals(a: ScheduleSelector | PlainMessage<ScheduleSelector> | undefined, b: ScheduleSelector | PlainMessage<ScheduleSelector> | undefined): boolean;
}
