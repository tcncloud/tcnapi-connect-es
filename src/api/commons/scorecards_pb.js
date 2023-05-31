// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/scorecards.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { CallType_Enum } from "./acd_pb.js";

/**
 * @generated from enum api.commons.CategoryType
 */
export const CategoryType = proto3.makeEnum(
  "api.commons.CategoryType",
  [
    {no: 0, name: "INVALID"},
    {no: 1, name: "SKILL_CALLS"},
    {no: 2, name: "MANUAL_DIAL"},
  ],
);

/**
 * Evaluation is how a scorecard gets evaluated.
 * It is not a boolean because it might grow (i.e. MIXED).
 *
 * @generated from enum api.commons.EvaluationType
 */
export const EvaluationType = proto3.makeEnum(
  "api.commons.EvaluationType",
  [
    {no: 0, name: "EVALUATE_MANUAL"},
    {no: 1, name: "EVALUATE_AUTO"},
  ],
);

/**
 * ScoreType is how the score is calculated.
 * It is not a boolean because it might grow (i.e. OTHER).
 *
 * @generated from enum api.commons.ScoreType
 */
export const ScoreType = proto3.makeEnum(
  "api.commons.ScoreType",
  [
    {no: 0, name: "SCORE_SIMPLE_SUM"},
    {no: 1, name: "SCORE_WEIGHTED_SUM"},
    {no: 2, name: "SCORE_EVEN_WEIGHTED_SUM"},
  ],
);

/**
 * FailType is how affect the scoring of the scorecard.
 * Some answer options have points, which add to the score.
 * Other options have fail types which are applied, when chosen.
 *
 * @generated from enum api.commons.FailType
 */
export const FailType = proto3.makeEnum(
  "api.commons.FailType",
  [
    {no: 0, name: "FAIL_QUESTION"},
    {no: 1, name: "FAIL_SECTION"},
    {no: 2, name: "FAIL_SCORECARD"},
  ],
);

/**
 * ScorecardState is state of the scorecard, which
 * determines if, or how, it can be used.
 *
 * @generated from enum api.commons.ScorecardState
 */
export const ScorecardState = proto3.makeEnum(
  "api.commons.ScorecardState",
  [
    {no: 0, name: "SCORECARD_IS_DRAFT"},
    {no: 1, name: "SCORECARD_IS_READY"},
    {no: 2, name: "SCORECARD_IS_IN_USE"},
    {no: 3, name: "SCORECARD_IS_TEMPLATE"},
    {no: 4, name: "SCORECARD_IS_READY_DISABLED"},
    {no: 5, name: "SCORECARD_IS_IN_USE_DISABLED"},
  ],
);

/**
 * EvaluationState is enum to describe where the scorecard is in the state of the evaluation
 *
 * @generated from enum api.commons.EvaluationState
 */
export const EvaluationState = proto3.makeEnum(
  "api.commons.EvaluationState",
  [
    {no: 0, name: "EVALUATION_IN_PROGRESS"},
    {no: 1, name: "EVALUATION_PASSED"},
    {no: 2, name: "EVALUATION_FAILED"},
  ],
);

/**
 * RiskLevel is an assigned risk level in an evaluation.
 *
 * @generated from enum api.commons.RiskLevel
 */
export const RiskLevel = proto3.makeEnum(
  "api.commons.RiskLevel",
  [
    {no: 0, name: "RISK_LEVEL_NONE", localName: "NONE"},
    {no: 1, name: "RISK_LEVEL_LOW", localName: "LOW"},
    {no: 2, name: "RISK_LEVEL_MEDIUM", localName: "MEDIUM"},
    {no: 3, name: "RISK_LEVEL_HIGH", localName: "HIGH"},
  ],
);

/**
 * TimeFilter allows optional filtering by timestamp
 * Multple fields are ANDed together.
 *
 * @generated from message api.commons.TimeFilter
 */
export const TimeFilter = proto3.makeMessageType(
  "api.commons.TimeFilter",
  () => [
    { no: 1, name: "eq", kind: "message", T: Timestamp },
    { no: 2, name: "gte", kind: "message", T: Timestamp },
    { no: 3, name: "lte", kind: "message", T: Timestamp },
    { no: 4, name: "gt", kind: "message", T: Timestamp },
    { no: 5, name: "lt", kind: "message", T: Timestamp },
  ],
);

/**
 * Category wraps a set of skills (or labels).
 * A scorecard can only be used to evaluate calls
 * with the same skill(s) as its category.
 *
 * @generated from message api.commons.Category
 */
export const Category = proto3.makeMessageType(
  "api.commons.Category",
  () => [
    { no: 1, name: "category_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "skill_profiles", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 7, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "call_types", kind: "enum", T: proto3.getEnumType(CallType_Enum), repeated: true },
    { no: 11, name: "is_system", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "category_type", kind: "enum", T: proto3.getEnumType(CategoryType) },
  ],
);

/**
 * Evaluation represents a evaluated scorecard.
 * A Evaluation represents a single call and single agent that has been evaluated.
 *
 * @generated from message api.commons.Evaluation
 */
export const Evaluation = proto3.makeMessageType(
  "api.commons.Evaluation",
  () => [
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "scorer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 8, name: "evaluation_state", kind: "enum", T: proto3.getEnumType(EvaluationState) },
    { no: 9, name: "evaluation_sections", kind: "message", T: EvaluationSection, repeated: true },
    { no: 10, name: "completed_at", kind: "message", T: Timestamp },
    { no: 13, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 15, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "custom_fields", kind: "message", T: Evaluation_CustomField, repeated: true },
  ],
);

/**
 * CustomField represents a custom key-value pair defined by users.
 *
 * @generated from message api.commons.Evaluation.CustomField
 */
export const Evaluation_CustomField = proto3.makeMessageType(
  "api.commons.Evaluation.CustomField",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Evaluation_CustomField"},
);

/**
 * EvaluationSection is collection of evaluation questions in a section
 *
 * @generated from message api.commons.EvaluationSection
 */
export const EvaluationSection = proto3.makeMessageType(
  "api.commons.EvaluationSection",
  () => [
    { no: 2, name: "evaluation_section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "points", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "possible_points", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "deleted_at", kind: "message", T: Timestamp },
    { no: 9, name: "created_at", kind: "message", T: Timestamp },
    { no: 10, name: "evaluation_questions", kind: "message", T: EvaluationQuestion, repeated: true },
    { no: 11, name: "auto_evaluation_questions", kind: "message", T: AutoEvaluationQuestion, repeated: true },
  ],
);

/**
 * EvaluationQuestion is a question in an evaluation
 *
 * @generated from message api.commons.EvaluationQuestion
 */
export const EvaluationQuestion = proto3.makeMessageType(
  "api.commons.EvaluationQuestion",
  () => [
    { no: 2, name: "evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "skipped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "answers", kind: "message", T: EvaluationQuestion_Answer, repeated: true },
    { no: 8, name: "evaluation_section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Answer represents an answer option of an evaluation question
 *
 * @generated from message api.commons.EvaluationQuestion.Answer
 */
export const EvaluationQuestion_Answer = proto3.makeMessageType(
  "api.commons.EvaluationQuestion.Answer",
  () => [
    { no: 1, name: "answer_option", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "points", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "result" },
    { no: 3, name: "fail_type", kind: "enum", T: proto3.getEnumType(FailType), oneof: "result" },
  ],
  {localName: "EvaluationQuestion_Answer"},
);

/**
 * AutoEvaluation is an auto evaluation
 *
 * @generated from message api.commons.AutoEvaluation
 */
export const AutoEvaluation = proto3.makeMessageType(
  "api.commons.AutoEvaluation",
  () => [
    { no: 2, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "auto_evaluation_sections", kind: "message", T: AutoEvaluationSection, repeated: true },
    { no: 7, name: "completed_at", kind: "message", T: Timestamp },
    { no: 8, name: "deleted_at", kind: "message", T: Timestamp },
    { no: 9, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 10, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "expression_matched", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "risk_level", kind: "enum", T: proto3.getEnumType(RiskLevel) },
  ],
);

/**
 * AutoEvaluationQuestion is an auto question in an evaluation.
 *
 * @generated from message api.commons.AutoEvaluationQuestion
 */
export const AutoEvaluationQuestion = proto3.makeMessageType(
  "api.commons.AutoEvaluationQuestion",
  () => [
    { no: 2, name: "auto_evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "auto_evaluation_section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "auto_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "flagged", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 7, name: "passed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "risk_level", kind: "enum", T: proto3.getEnumType(RiskLevel) },
    { no: 14, name: "expression_matched", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * AutoEvaluationSection is an auto Section in an evaluation.
 *
 * @generated from message api.commons.AutoEvaluationSection
 */
export const AutoEvaluationSection = proto3.makeMessageType(
  "api.commons.AutoEvaluationSection",
  () => [
    { no: 2, name: "auto_evaluation_section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "deleted_at", kind: "message", T: Timestamp },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
    { no: 8, name: "auto_evaluation_questions", kind: "message", T: AutoEvaluationQuestion, repeated: true },
    { no: 9, name: "risk_level", kind: "enum", T: proto3.getEnumType(RiskLevel) },
  ],
);

/**
 * Question is a question in the Question Library.
 * It is not to be confused with ScorecardQuestion, which represents
 * a question inside of a scorecard.
 *
 * @generated from message api.commons.Question
 */
export const Question = proto3.makeMessageType(
  "api.commons.Question",
  () => [
    { no: 2, name: "question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "categories", kind: "message", T: Category, repeated: true },
  ],
);

/**
 * ScorecardQuestion represents a question inside of a scorecard.
 *
 * @generated from message api.commons.ScorecardQuestion
 */
export const ScorecardQuestion = proto3.makeMessageType(
  "api.commons.ScorecardQuestion",
  () => [
    { no: 2, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "allow_skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "answers", kind: "message", T: ScorecardQuestion_Answer, repeated: true },
    { no: 8, name: "multi_select", kind: "message", T: ScorecardQuestion_MultiSelect },
    { no: 9, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 12, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Answer are all the possible answers for a scorecard question.
 *
 * @generated from message api.commons.ScorecardQuestion.Answer
 */
export const ScorecardQuestion_Answer = proto3.makeMessageType(
  "api.commons.ScorecardQuestion.Answer",
  () => [
    { no: 1, name: "answer_option", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "points", kind: "scalar", T: 13 /* ScalarType.UINT32 */, oneof: "result" },
    { no: 3, name: "fail_type", kind: "enum", T: proto3.getEnumType(FailType), oneof: "result" },
  ],
  {localName: "ScorecardQuestion_Answer"},
);

/**
 * MultiSelect sets parameters for multi-select answer types.
 *
 * @generated from message api.commons.ScorecardQuestion.MultiSelect
 */
export const ScorecardQuestion_MultiSelect = proto3.makeMessageType(
  "api.commons.ScorecardQuestion.MultiSelect",
  () => [
    { no: 1, name: "max_points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "ScorecardQuestion_MultiSelect"},
);

/**
 * Section represents a section of a scorecard (template).
 *
 * @generated from message api.commons.Section
 */
export const Section = proto3.makeMessageType(
  "api.commons.Section",
  () => [
    { no: 2, name: "section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "weight", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 7, name: "questions", kind: "message", T: ScorecardQuestion, repeated: true },
    { no: 8, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "auto_questions", kind: "message", T: AutoQuestion, repeated: true },
  ],
);

/**
 * Scorecard represents a scorecard (template).
 * A scorecard can be used to score a call.
 *
 * @generated from message api.commons.Scorecard
 */
export const Scorecard = proto3.makeMessageType(
  "api.commons.Scorecard",
  () => [
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "pass_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 7, name: "score_type", kind: "enum", T: proto3.getEnumType(ScoreType) },
    { no: 8, name: "evaluation_type", kind: "enum", T: proto3.getEnumType(EvaluationType) },
    { no: 10, name: "allow_feedback", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "distribute_weights", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "category", kind: "message", T: Category },
    { no: 13, name: "sections", kind: "message", T: Section, repeated: true },
    { no: 14, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "state", kind: "enum", T: proto3.getEnumType(ScorecardState) },
    { no: 16, name: "is_ad_hoc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 19, name: "custom_field_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 20, name: "call_types", kind: "enum", T: proto3.getEnumType(CallType_Enum), repeated: true },
  ],
);

/**
 * AutoQuestion represents an automatically scored question.
 *
 * @generated from message api.commons.AutoQuestion
 */
export const AutoQuestion = proto3.makeMessageType(
  "api.commons.AutoQuestion",
  () => [
    { no: 2, name: "auto_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "auto_section_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "flag_expression", kind: "message", T: AutoQuestion_FlagExpr },
    { no: 11, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 14, name: "risk_level", kind: "enum", T: proto3.getEnumType(RiskLevel) },
  ],
);

/**
 * FlagExpr defines a boolean expression of filters.
 *
 * @generated from message api.commons.AutoQuestion.FlagExpr
 */
export const AutoQuestion_FlagExpr = proto3.makeMessageType(
  "api.commons.AutoQuestion.FlagExpr",
  () => [
    { no: 1, name: "and", kind: "message", T: AutoQuestion_FlagExpr, repeated: true },
    { no: 2, name: "or", kind: "message", T: AutoQuestion_FlagExpr, repeated: true },
    { no: 3, name: "flag", kind: "message", T: AutoQuestion_FlagExpr_Flag },
    { no: 4, name: "not", kind: "message", T: AutoQuestion_FlagExpr },
  ],
  {localName: "AutoQuestion_FlagExpr"},
);

/**
 * Filter defines a filter.
 *
 * @generated from message api.commons.AutoQuestion.FlagExpr.Flag
 */
export const AutoQuestion_FlagExpr_Flag = proto3.makeMessageType(
  "api.commons.AutoQuestion.FlagExpr.Flag",
  () => [
    { no: 1, name: "flag_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "AutoQuestion_FlagExpr_Flag"},
);
