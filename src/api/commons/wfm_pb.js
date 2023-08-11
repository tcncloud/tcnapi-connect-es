// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/wfm.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * Enum representing the different types of models for the regression forecaster.
 *
 * @generated from enum api.commons.RegressionForecasterModelTypes
 */
export const RegressionForecasterModelTypes = proto3.makeEnum(
  "api.commons.RegressionForecasterModelTypes",
  [
    {no: 0, name: "RANDOM_FOREST"},
    {no: 1, name: "ADABOOST"},
    {no: 2, name: "GRADIENT_BOOSTING"},
    {no: 3, name: "LINEAR_REGRESSION"},
    {no: 4, name: "LINEAR_AVG"},
    {no: 5, name: "SEGMENTED_LINEAR"},
    {no: 6, name: "MLP"},
    {no: 7, name: "AUTO"},
  ],
);

/**
 * @generated from enum api.commons.RegressionForecasterAvgsProcessingType
 */
export const RegressionForecasterAvgsProcessingType = proto3.makeEnum(
  "api.commons.RegressionForecasterAvgsProcessingType",
  [
    {no: 0, name: "FORECAST"},
    {no: 1, name: "AVERAGES"},
    {no: 2, name: "FIXED_AVERAGES"},
  ],
);

/**
 * enum representing the units of time a ConstraintRule uses
 *
 * @generated from enum api.commons.ConstraintTimeUnit
 */
export const ConstraintTimeUnit = proto3.makeEnum(
  "api.commons.ConstraintTimeUnit",
  [
    {no: 0, name: "MINUTES"},
    {no: 1, name: "HOURS"},
    {no: 2, name: "SHIFTS"},
    {no: 3, name: "DAYS"},
    {no: 4, name: "WEEKS"},
    {no: 5, name: "MONTHS"},
    {no: 6, name: "YEARS"},
  ],
);

/**
 * @generated from enum api.commons.ConfigEntityType
 */
export const ConfigEntityType = proto3.makeEnum(
  "api.commons.ConfigEntityType",
  [
    {no: 0, name: "CALL_CENTER_NODE"},
    {no: 1, name: "CLIENT_NODE"},
    {no: 2, name: "LOCATION_NODE"},
    {no: 3, name: "PROGRAM_NODE"},
    {no: 4, name: "AGENT_GROUP"},
    {no: 5, name: "SHIFT_TEMPLATE"},
    {no: 6, name: "WFM_AGENT"},
    {no: 7, name: "PLACEMENT_RULE"},
    {no: 8, name: "CONSTRAINT_RULE"},
    {no: 9, name: "NON_SKILL_ACTIVITY"},
    {no: 10, name: "AGENT_AVAILABILITY"},
    {no: 11, name: "OPEN_TIMES"},
    {no: 12, name: "SCHEDULING_ACTIVITY"},
    {no: 13, name: "SKILL_PROFICIENCY"},
    {no: 14, name: "SCHEDULE_SCENARIO"},
  ],
);

/**
 * enum representing the different types of Constraint Rules
 *
 * @generated from enum api.commons.ConstraintRuleType
 */
export const ConstraintRuleType = proto3.makeEnum(
  "api.commons.ConstraintRuleType",
  [
    {no: 0, name: "MIN_CONSEC_ON"},
    {no: 1, name: "MAX_CONSEC_ON"},
    {no: 2, name: "MIN_CONSEC_OFF"},
    {no: 3, name: "MAX_CONSEC_OFF"},
    {no: 4, name: "MIN_TOTAL_ON"},
    {no: 5, name: "MAX_TOTAL_ON"},
    {no: 6, name: "MIN_TOTAL_OFF"},
    {no: 7, name: "MAX_TOTAL_OFF"},
    {no: 8, name: "MIN_SKILL_LEVEL"},
  ],
);

/**
 * Enum representing the different types of placements for the DOW Placement.
 *
 * @generated from enum api.commons.DOWPlacementType
 */
export const DOWPlacementType = proto3.makeEnum(
  "api.commons.DOWPlacementType",
  [
    {no: 0, name: "MUST_NOT"},
    {no: 1, name: "MAY"},
    {no: 2, name: "MUST"},
  ],
);

/**
 * Enum representing the options for open times.
 *
 * @generated from enum api.commons.OpenTimesOption
 */
export const OpenTimesOption = proto3.makeEnum(
  "api.commons.OpenTimesOption",
  [
    {no: 0, name: "CLOSED"},
    {no: 1, name: "OPEN"},
  ],
);

/**
 * Enum representing the options for agent availability.
 *
 * @generated from enum api.commons.AvailabilityOption
 */
export const AvailabilityOption = proto3.makeEnum(
  "api.commons.AvailabilityOption",
  [
    {no: 0, name: "AVAILABLE"},
    {no: 1, name: "NOT_AVAILABLE"},
    {no: 2, name: "PREFER_NOT_AVAILABLE"},
  ],
);

/**
 * Enum representing the options for day of the week, Monday must be 0.
 *
 * @generated from enum api.commons.DayOfWeek
 */
export const DayOfWeek = proto3.makeEnum(
  "api.commons.DayOfWeek",
  [
    {no: 0, name: "MON"},
    {no: 1, name: "TUE"},
    {no: 2, name: "WED"},
    {no: 3, name: "THU"},
    {no: 4, name: "FRI"},
    {no: 5, name: "SAT"},
    {no: 6, name: "SUN"},
  ],
);

/**
 * Enum representing the options for config entity relationships.
 *
 * @generated from enum api.commons.ConfigRelationshipType
 */
export const ConfigRelationshipType = proto3.makeEnum(
  "api.commons.ConfigRelationshipType",
  [
    {no: 0, name: "IS_ASSOCIATED_WITH"},
    {no: 1, name: "IS_NOT_ASSOCIATED_WITH"},
    {no: 2, name: "IS_MEMBER_OF"},
  ],
);

/**
 * Enum representing the level of a diagnostic.
 *
 * @generated from enum api.commons.DiagnosticLevel
 */
export const DiagnosticLevel = proto3.makeEnum(
  "api.commons.DiagnosticLevel",
  [
    {no: 0, name: "INFORMATION"},
    {no: 1, name: "SUGGESTION"},
    {no: 2, name: "WARNING"},
    {no: 3, name: "DIAGNOSTIC_ERROR"},
    {no: 4, name: "INTERNAL_ERROR"},
  ],
);

/**
 * Enum representing the type of a diagnostic.
 *
 * @generated from enum api.commons.DiagnosticCode
 */
export const DiagnosticCode = proto3.makeEnum(
  "api.commons.DiagnosticCode",
  [
    {no: 0, name: "GENERAL"},
    {no: 1, name: "OK"},
    {no: 2, name: "NO_SKILLS_IN_DICTIONARY"},
    {no: 3, name: "AGENT_HAS_NO_SKILL_PROFICIENCIES"},
    {no: 4, name: "AGENT_HAS_NO_SKILLS"},
    {no: 5, name: "NO_SCHEDULING_ACTIVITIES_FOR_CONSTRAINT_RULES"},
    {no: 6, name: "SCHEDULING_ACTIVITY_FOR_CONSTRAINT_RULE_NOT_FOUND"},
    {no: 7, name: "SHIFT_TEMPLATE_CANNOT_BE_NONE"},
    {no: 8, name: "SHIFT_TEMPLATE_HAS_NO_PLACEMENT_RULES"},
    {no: 9, name: "NO_ONCALL_IN_SHIFT_TEMPLATE_PLACEMENT_RULES"},
    {no: 10, name: "MIN_GT_MAX_DURATION_IN_SHIFT_TEMPLATE_PLACEMENT_RULES"},
    {no: 11, name: "MIN_GT_MAX_AGENTS_IN_SHIFT_TEMPLATE"},
    {no: 12, name: "NO_PLACEMENT_RULES_FOR_SHIFT_TEMPLATE"},
    {no: 13, name: "ACTIVITIES_SHORTER_THAN_SHIFT"},
    {no: 14, name: "NOT_ENOUGH_AGENTS_FOR_SHIFT"},
    {no: 15, name: "PROGRAM_HAS_NO_AGENT_GROUPS"},
    {no: 16, name: "PROGRAM_HAS_NO_SHIFT_TEMPLATES"},
    {no: 17, name: "LOCATION_HAS_NO_PROGRAMS"},
    {no: 18, name: "CLIENT_HAS_NO_LOCATIONS"},
    {no: 19, name: "CALL_CENTER_HAS_NO_CLIENTS"},
    {no: 20, name: "PROGRAM_HAS_INVALID_PARENT_LOCATION"},
    {no: 21, name: "LOCATION_HAS_INVALID_PARENT_CLIENT"},
    {no: 22, name: "CLIENT_HAS_INVALID_PARENT_CALL_CENTER"},
    {no: 23, name: "AGENT_GROUP_HAS_INVALID_PARENT_NODE"},
    {no: 24, name: "SHIFT_TEMPLATE_HAS_INVALID_PARENT_PROGRAM"},
    {no: 25, name: "NO_SKILL_PROFICIENCY_FOR_MIN_SKILL_PROFICIENCY_CONSTRAINT_RULE"},
  ],
);

/**
 * Enum representing the type of a performance metric.
 *
 * @generated from enum api.commons.PerformanceMetricType
 */
export const PerformanceMetricType = proto3.makeEnum(
  "api.commons.PerformanceMetricType",
  [
    {no: 0, name: "FTE_REQUIRED_VS_ACHIEVED_SIMPLE"},
    {no: 1, name: "FTE_REQUIRED_VS_ACHIEVED_EXTENDED"},
    {no: 2, name: "SERVICE_LEVEL_ANALYSIS"},
    {no: 3, name: "SERVICE_LEVEL_MATRIX"},
    {no: 4, name: "CONTACT_HANDLING_METRICS"},
    {no: 5, name: "LOAD_FORECAST"},
  ],
);

/**
 * Deprecated.
 *
 * @generated from enum api.commons.ScheduleShouldInclude
 */
export const ScheduleShouldInclude = proto3.makeEnum(
  "api.commons.ScheduleShouldInclude",
  [
    {no: 0, name: "ONLY_SHIFT_INSTANCES"},
    {no: 1, name: "ONLY_PERFORMANCE_METRICS"},
    {no: 2, name: "SHIFT_INSTANCES_AND_PERFORMANCE_METRICS"},
  ],
);

/**
 * enum representing the type of a schedule.
 *
 * @generated from enum api.commons.ScheduleType
 */
export const ScheduleType = proto3.makeEnum(
  "api.commons.ScheduleType",
  [
    {no: 0, name: "DRAFT"},
    {no: 1, name: "PUBLISHED"},
  ],
);

/**
 * @generated from enum api.commons.SchedulingTargetType
 */
export const SchedulingTargetType = proto3.makeEnum(
  "api.commons.SchedulingTargetType",
  [
    {no: 0, name: "COVERAGE"},
    {no: 1, name: "SERVICE_LEVEL"},
  ],
);

/**
 * Enum representing the options for bitmap creation.
 *
 * @generated from enum api.commons.BitmapType
 */
export const BitmapType = proto3.makeEnum(
  "api.commons.BitmapType",
  [
    {no: 0, name: "COMPLETE"},
    {no: 1, name: "ONLY_WEEKMAPS"},
    {no: 2, name: "ONLY_CALENDAR_ITEMS"},
  ],
);

/**
 * Represents the skill types that a client's skills can be.
 *
 * @generated from message api.commons.SkillType
 */
export const SkillType = proto3.makeMessageType(
  "api.commons.SkillType",
  [],
);

/**
 * @generated from enum api.commons.SkillType.Enum
 */
export const SkillType_Enum = proto3.makeEnum(
  "api.commons.SkillType.Enum",
  [
    {no: 0, name: "AGENT_SKILL"},
    {no: 1, name: "HUNT_GROUP"},
    {no: 2, name: "AGENT_PBX"},
    {no: 3, name: "HUNT_GROUP_PBX"},
    {no: 4, name: "PBX"},
    {no: 5, name: "AGENT"},
  ],
);

/**
 * @generated from message api.commons.DatetimeRange
 */
export const DatetimeRange = proto3.makeMessageType(
  "api.commons.DatetimeRange",
  () => [
    { no: 1, name: "start_datetime", kind: "message", T: Timestamp },
    { no: 2, name: "end_datetime", kind: "message", T: Timestamp },
  ],
);

/**
 * Request message for the UpsertForecastingParameters RPC.
 *
 * @generated from message api.commons.ForecastingParameters
 */
export const ForecastingParameters = proto3.makeMessageType(
  "api.commons.ForecastingParameters",
  () => [
    { no: 1, name: "interval_width_in_minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "historical_data_range_in_months", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "historical_data_range" },
    { no: 7, name: "historical_data_range_start_datetime", kind: "message", T: Timestamp, oneof: "historical_data_range" },
    { no: 8, name: "forecast_test_range_in_weeks", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "forecast_range_in_weeks", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "forecast_range" },
    { no: 10, name: "forecast_datetime_range", kind: "message", T: DatetimeRange, oneof: "forecast_range" },
    { no: 11, name: "training_data_range_in_months", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "training_data_range" },
    { no: 12, name: "training_data_datetime_range", kind: "message", T: DatetimeRange, oneof: "training_data_range" },
    { no: 13, name: "averages_calculation_range_in_months", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * ----------------------- Message types used by BuildProfileForecastReq() ------------------
 * a profile for time of day, for each day of the week
 *
 * @generated from message api.commons.ProfileTOD
 */
export const ProfileTOD = proto3.makeMessageType(
  "api.commons.ProfileTOD",
  () => [
    { no: 1, name: "sunday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 2, name: "monday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 3, name: "tuesday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 4, name: "wednesday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 5, name: "thursday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 6, name: "friday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 7, name: "saturday", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
  ],
);

/**
 * a profile for week of month, for each month of the year
 *
 * @generated from message api.commons.ProfileWOMS
 */
export const ProfileWOMS = proto3.makeMessageType(
  "api.commons.ProfileWOMS",
  () => [
    { no: 1, name: "january", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 2, name: "february", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 3, name: "march", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 4, name: "april", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 5, name: "may", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 6, name: "june", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 7, name: "july", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 8, name: "august", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 9, name: "september", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 10, name: "october", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 11, name: "november", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
    { no: 12, name: "december", kind: "scalar", T: 2 /* ScalarType.FLOAT */, repeated: true },
  ],
);

/**
 * a profile each day of the week
 *
 * @generated from message api.commons.ProfileDOW
 */
export const ProfileDOW = proto3.makeMessageType(
  "api.commons.ProfileDOW",
  () => [
    { no: 1, name: "sunday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "monday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "tuesday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "wednesday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "thursday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "friday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "saturday", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * a profile for each month of the year
 *
 * @generated from message api.commons.ProfileMOY
 */
export const ProfileMOY = proto3.makeMessageType(
  "api.commons.ProfileMOY",
  () => [
    { no: 1, name: "january", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "february", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "march", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "april", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "may", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "june", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 7, name: "july", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 8, name: "august", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 9, name: "september", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 10, name: "october", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 11, name: "november", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 12, name: "december", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

/**
 * @generated from message api.commons.DistributionProfile
 */
export const DistributionProfile = proto3.makeMessageType(
  "api.commons.DistributionProfile",
  () => [
    { no: 1, name: "profile_tod", kind: "message", T: ProfileTOD },
    { no: 2, name: "profile_woms", kind: "message", T: ProfileWOMS },
    { no: 3, name: "profile_dow", kind: "message", T: ProfileDOW },
    { no: 4, name: "profile_moy", kind: "message", T: ProfileMOY },
  ],
);

/**
 * defines a template profile for call count distributions
 *
 * @generated from message api.commons.CallProfileGroupCalls
 */
export const CallProfileGroupCalls = proto3.makeMessageType(
  "api.commons.CallProfileGroupCalls",
  () => [
    { no: 1, name: "total_calls", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "distribution_profile", kind: "message", T: DistributionProfile },
  ],
);

/**
 * defines a template profile of call characteristic distributions
 *
 * @generated from message api.commons.CallProfileGroupAvgs
 */
export const CallProfileGroupAvgs = proto3.makeMessageType(
  "api.commons.CallProfileGroupAvgs",
  () => [
    { no: 1, name: "min_average", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "max_average", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "distribution_profile", kind: "message", T: DistributionProfile },
  ],
);

/**
 * Encapsulates the two kinds of options available so they can be interchangeably used.
 *
 * @generated from message api.commons.OptionTypes
 */
export const OptionTypes = proto3.makeMessageType(
  "api.commons.OptionTypes",
  () => [
    { no: 1, name: "open_times_option", kind: "enum", T: proto3.getEnumType(OpenTimesOption), oneof: "desired_option" },
    { no: 2, name: "availability_option", kind: "enum", T: proto3.getEnumType(AvailabilityOption), oneof: "desired_option" },
  ],
);

/**
 * Filter for schedule selection.
 *
 * @generated from message api.commons.ScheduleSelector
 */
export const ScheduleSelector = proto3.makeMessageType(
  "api.commons.ScheduleSelector",
  () => [
    { no: 1, name: "schedule_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "schedule_type", kind: "enum", T: proto3.getEnumType(ScheduleType) },
  ],
);

/**
 * Indetifier for a skill profile category.
 *
 * @generated from message api.commons.SkillProfileCategory
 */
export const SkillProfileCategory = proto3.makeMessageType(
  "api.commons.SkillProfileCategory",
  () => [
    { no: 1, name: "skill_profile_category_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "skill_profile_category_type", kind: "enum", T: proto3.getEnumType(SkillProfileCategory_CategoryType) },
  ],
);

/**
 * enum representing the type of a of skill profile category.
 *
 * @generated from enum api.commons.SkillProfileCategory.CategoryType
 */
export const SkillProfileCategory_CategoryType = proto3.makeEnum(
  "api.commons.SkillProfileCategory.CategoryType",
  [
    {no: 0, name: "SINGLE_SKILL_PROFILE"},
    {no: 1, name: "SKILL_PROFILE_GROUP"},
  ],
);

