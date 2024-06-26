// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/org_preferences.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.BroadcastTemplateOrdering
 */
export const BroadcastTemplateOrdering = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.BroadcastTemplateOrdering",
  [
    {no: 0, name: "BY_NAME_ASC"},
    {no: 1, name: "BY_NAME_DESC"},
    {no: 2, name: "BY_TEMPLATE_NUMBER_ASC"},
    {no: 3, name: "BY_TEMPLATE_NUMBER_DESC"},
    {no: 4, name: "BY_MODIFIED_DATE_ASC"},
    {no: 5, name: "BY_MODIFIED_DATE_DESC"},
  ],
);

/**
 * @generated from enum api.commons.ScheduleByTimeZoneScope
 */
export const ScheduleByTimeZoneScope = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.ScheduleByTimeZoneScope",
  [
    {no: 0, name: "BOTH"},
    {no: 1, name: "STOP_DATE"},
    {no: 2, name: "START_DATE"},
  ],
);

/**
 * @generated from enum api.commons.AnsweringMachineDetection
 */
export const AnsweringMachineDetection = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.AnsweringMachineDetection",
  [
    {no: 0, name: "OPTIMIZE_MACHINE_DETECTION"},
    {no: 1, name: "OPTIMIZE_MACHINE_DETECTION_SLOW_LIVE"},
    {no: 2, name: "OPTIMIZE_MACHINE_DELIVERY"},
    {no: 3, name: "BALANCED_DETECTION_AND_DELIVERY"},
  ],
);

/**
 * @generated from enum api.commons.DialListPenetrationStrategy
 */
export const DialListPenetrationStrategy = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.DialListPenetrationStrategy",
  [
    {no: 0, name: "DEPTH_FIRST"},
    {no: 1, name: "BREADTH_FIRST"},
  ],
);

/**
 * @generated from enum api.commons.StandardReportFilter
 */
export const StandardReportFilter = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.StandardReportFilter",
  [
    {no: 0, name: "NO_PREFERENCE"},
    {no: 1, name: "FILTER_BY_ANSWERED_CALLS"},
    {no: 2, name: "FILTER_BY_ANSWERED_HANGUPS"},
    {no: 3, name: "FILTER_BY_ANSWERED_LINKCALL"},
    {no: 4, name: "FILTER_BY_ANY_KEY_PRESSED"},
    {no: 5, name: "FILTER_BY_BUSY"},
    {no: 6, name: "FILTER_BY_CANCELED_CALLS"},
    {no: 7, name: "FILTER_BY_CONFIRM_KEYS_3_THROUGH_6"},
    {no: 8, name: "FILTER_BY_CONNECTED_CALLS"},
    {no: 9, name: "FILTER_BY_DNCL_CANCELED"},
    {no: 10, name: "FILTER_BY_FAILED_CALLS"},
    {no: 11, name: "FILTER_BY_INVALID_CALLS"},
    {no: 12, name: "FILTER_BY_LINKCALL_ABANDONED"},
    {no: 13, name: "FILTER_BY_MACHINE_CALLS"},
    {no: 14, name: "FILTER_BY_MACHINE_DELIVERY"},
    {no: 15, name: "FILTER_BY_MACHINE_HANGUP"},
    {no: 16, name: "FILTER_BY_MACHINE_AND_ANY_KEY"},
    {no: 17, name: "FILTER_BY_NO_ANSWER"},
    {no: 18, name: "FILTER_BY_NO_KEYS_PRESSED"},
    {no: 19, name: "FILTER_BY_NOT_CANCELED_CALLS"},
    {no: 20, name: "FILTER_BY_UNCONNECTED_CALLS"},
    {no: 21, name: "FILTER_BY_UNCONNECTED_EXCLUDE_INVALID"},
    {no: 22, name: "FILTER_BY_0_KEY"},
    {no: 23, name: "FILTER_BY_1_KEY"},
    {no: 24, name: "FILTER_BY_2_KEY"},
    {no: 25, name: "FILTER_BY_3_KEY"},
    {no: 26, name: "FILTER_BY_4_KEY"},
    {no: 27, name: "FILTER_BY_5_KEY"},
    {no: 28, name: "FILTER_BY_6_KEY"},
    {no: 29, name: "FILTER_BY_7_KEY"},
    {no: 30, name: "FILTER_BY_8_KEY"},
    {no: 31, name: "FILTER_BY_9_KEY"},
    {no: 32, name: "FILTER_BY_STAR_KEY"},
    {no: 33, name: "FILTER_BY_POUND_KEY"},
    {no: 34, name: "FILTER_BY_MACHINE_HANGUP_AND_UNCONNECTED"},
    {no: 35, name: "FILTER_BY_EXCLUDING_CANCELED_AND_INVALID"},
  ],
);

/**
 * LocalePreferences represents the organization's locale settings.
 *
 * @generated from message api.commons.LocalePreferences
 */
export const LocalePreferences = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.LocalePreferences",
  () => [
    { no: 1, name: "language_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "use_script_direction_right_to_left", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "default_currency", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

