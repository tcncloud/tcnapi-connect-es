// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/commons/ana_charts.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.BarChartOrientation
 */
export const BarChartOrientation = proto3.makeEnum(
  "api.commons.BarChartOrientation",
  [
    {no: 0, name: "BAR_CHART_ORIENTATION_BAR", localName: "BAR"},
    {no: 1, name: "BAR_CHART_ORIENTATION_COLUMN", localName: "COLUMN"},
  ],
);

/**
 * @generated from enum api.commons.ChartOrientation
 */
export const ChartOrientation = proto3.makeEnum(
  "api.commons.ChartOrientation",
  [
    {no: 0, name: "CHART_ORIENTATION_HORIZONTAL", localName: "HORIZONTAL"},
    {no: 1, name: "CHART_ORIENTATION_VERTICAL", localName: "VERTICAL"},
  ],
);

/**
 * @generated from enum api.commons.AreaChartChoice
 */
export const AreaChartChoice = proto3.makeEnum(
  "api.commons.AreaChartChoice",
  [
    {no: 0, name: "AREA_CHART_CHOICE_AREA", localName: "AREA"},
    {no: 1, name: "AREA_CHART_CHOICE_AREASPLINE", localName: "AREASPLINE"},
  ],
);

/**
 * @generated from enum api.commons.LineChartStep
 */
export const LineChartStep = proto3.makeEnum(
  "api.commons.LineChartStep",
  [
    {no: 0, name: "LINE_CHART_STEP_LEFT", localName: "LEFT"},
    {no: 1, name: "LINE_CHART_STEP_CENTER", localName: "CENTER"},
    {no: 2, name: "LINE_CHART_STEP_RIGHT", localName: "RIGHT"},
    {no: 3, name: "LINE_CHART_STEP_NOLINE", localName: "NOLINE"},
  ],
);

/**
 * @generated from enum api.commons.ChartDisplayLabels
 */
export const ChartDisplayLabels = proto3.makeEnum(
  "api.commons.ChartDisplayLabels",
  [
    {no: 0, name: "CHART_DISPLAY_LABELS_NEVER", localName: "NEVER"},
    {no: 1, name: "CHART_DISPLAY_LABELS_ALWAYS", localName: "ALWAYS"},
  ],
);

/**
 * @generated from enum api.commons.ThresholdType
 */
export const ThresholdType = proto3.makeEnum(
  "api.commons.ThresholdType",
  [
    {no: 0, name: "THRESHOLD_TYPE_STATIC", localName: "STATIC"},
    {no: 1, name: "THRESHOLD_TYPE_DATA_POINT", localName: "DATA_POINT"},
    {no: 2, name: "THRESHOLD_TYPE_NOT_SET", localName: "NOT_SET"},
  ],
);

/**
 * @generated from enum api.commons.PackedBubbleChoice
 */
export const PackedBubbleChoice = proto3.makeEnum(
  "api.commons.PackedBubbleChoice",
  [
    {no: 0, name: "PACKED_BUBBLE_CHOICE_PACKED", localName: "PACKED"},
    {no: 1, name: "PACKED_BUBBLE_CHOICE_SPLIT", localName: "SPLIT"},
  ],
);

/**
 * @generated from enum api.commons.SuffixChoices
 */
export const SuffixChoices = proto3.makeEnum(
  "api.commons.SuffixChoices",
  [
    {no: 0, name: "SUFFIX_CHOICES_NOSUFFIX", localName: "NOSUFFIX"},
    {no: 1, name: "SUFFIX_CHOICES_DOLLARS", localName: "DOLLARS"},
    {no: 2, name: "SUFFIX_CHOICES_PERCENTAGE", localName: "PERCENTAGE"},
  ],
);

