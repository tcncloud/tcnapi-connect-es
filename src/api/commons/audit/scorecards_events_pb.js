// @generated by protoc-gen-es v1.6.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/scorecards_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { AutoEvaluation, Category, Evaluation, EvaluationQuestion, EvaluationType, Question, RiskLevel, Scorecard, ScorecardQuestion, ScorecardState, ScoreType, Section } from "../scorecards_pb.js";
import { CallType_Enum } from "../acd_pb.js";

/**
 * ScorecardsCreateQuestionEvent is event when a question library question is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateQuestionEvent
 */
export const ScorecardsCreateQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateQuestionEvent",
  () => [
    { no: 1, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "question", kind: "message", T: Question },
  ],
);

/**
 * ScorecardsUpdateQuestionEvent is event when a question library question is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateQuestionEvent
 */
export const ScorecardsUpdateQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateQuestionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "update_mask", kind: "message", T: FieldMask },
    { no: 5, name: "question", kind: "message", T: Question },
  ],
);

/**
 * ScorecardsDeleteQuestionEvent is event when a question library question is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteQuestionEvent
 */
export const ScorecardsDeleteQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteQuestionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question_text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "category_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 5, name: "question", kind: "message", T: Question },
  ],
);

/**
 * ScorecardsCreateScorecardEvent is event when a scorecard library scorecard is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateScorecardEvent
 */
export const ScorecardsCreateScorecardEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateScorecardEvent",
  () => [
    { no: 1, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pass_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "score_type", kind: "enum", T: proto3.getEnumType(ScoreType) },
    { no: 6, name: "evaluation_type", kind: "enum", T: proto3.getEnumType(EvaluationType) },
    { no: 7, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * ScorecardsUpdateScorecardEvent is event when a scorecard library scorecard is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateScorecardEvent
 */
export const ScorecardsUpdateScorecardEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateScorecardEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pass_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "score_type", kind: "enum", T: proto3.getEnumType(ScoreType) },
    { no: 6, name: "evaluation_type", kind: "enum", T: proto3.getEnumType(EvaluationType) },
    { no: 7, name: "allow_feedback", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "state", kind: "enum", T: proto3.getEnumType(ScorecardState) },
    { no: 9, name: "update_mask", kind: "message", T: FieldMask },
    { no: 10, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * ScorecardsDeleteScorecardEvent is event when a scorecard library scorecard is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteScorecardEvent
 */
export const ScorecardsDeleteScorecardEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteScorecardEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pass_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "score_type", kind: "enum", T: proto3.getEnumType(ScoreType) },
    { no: 6, name: "evaluation_type", kind: "enum", T: proto3.getEnumType(EvaluationType) },
    { no: 7, name: "state", kind: "enum", T: proto3.getEnumType(ScorecardState) },
    { no: 8, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * ScorecardsCloneScorecardEvent is event when a scorecard library scorecard is cloned
 *
 * @generated from message api.commons.audit.ScorecardsCloneScorecardEvent
 */
export const ScorecardsCloneScorecardEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCloneScorecardEvent",
  () => [
    { no: 1, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pass_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "score_type", kind: "enum", T: proto3.getEnumType(ScoreType) },
    { no: 6, name: "evaluation_type", kind: "enum", T: proto3.getEnumType(EvaluationType) },
    { no: 7, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * ScorecardsCreateEvaluationEvent is event when an evaluation library evaluation is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateEvaluationEvent
 */
export const ScorecardsCreateEvaluationEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateEvaluationEvent",
  () => [
    { no: 1, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * ScorecardsUpdateEvaluationEvent is event when an evaluation library evaluation is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateEvaluationEvent
 */
export const ScorecardsUpdateEvaluationEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateEvaluationEvent",
  () => [
    { no: 1, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * ScorecardsDeleteEvaluationEvent is event when an evaluation library evaluation is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteEvaluationEvent
 */
export const ScorecardsDeleteEvaluationEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteEvaluationEvent",
  () => [
    { no: 1, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * ScorecardsCreateSectionEvent is event when a section library section is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateSectionEvent
 */
export const ScorecardsCreateSectionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateSectionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "weight", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "section", kind: "message", T: Section },
  ],
);

/**
 * ScorecardsUpdateSectionEvent is event when a section library section is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateSectionEvent
 */
export const ScorecardsUpdateSectionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateSectionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "weight", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "update_mask", kind: "message", T: FieldMask },
    { no: 7, name: "section", kind: "message", T: Section },
  ],
);

/**
 * ScorecardsDeleteSectionEvent is event when a section library section is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteSectionEvent
 */
export const ScorecardsDeleteSectionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteSectionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "weight", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "section", kind: "message", T: Section },
  ],
);

/**
 * ScorecardsCreateCategoryEvent is event when a category library category is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateCategoryEvent
 */
export const ScorecardsCreateCategoryEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateCategoryEvent",
  () => [
    { no: 1, name: "author_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "category", kind: "message", T: Category },
  ],
);

/**
 * ScorecardsUpdateCategoryEvent is event when a category library category is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateCategoryEvent
 */
export const ScorecardsUpdateCategoryEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateCategoryEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "update_mask", kind: "message", T: FieldMask },
    { no: 5, name: "category", kind: "message", T: Category },
  ],
);

/**
 * ScorecardsDeleteCategoryEvent is event when a category library category is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteCategoryEvent
 */
export const ScorecardsDeleteCategoryEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteCategoryEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "deleted_at", kind: "message", T: Timestamp },
    { no: 5, name: "category", kind: "message", T: Category },
  ],
);

/**
 * ScorecardsCreateEvaluationQuestionEvent is event when an evaluation question is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateEvaluationQuestionEvent
 */
export const ScorecardsCreateEvaluationQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateEvaluationQuestionEvent",
  () => [
    { no: 1, name: "evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * ScorecardsUpdateEvaluationQuestionEvent is event when an evaluation question is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateEvaluationQuestionEvent
 */
export const ScorecardsUpdateEvaluationQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateEvaluationQuestionEvent",
  () => [
    { no: 1, name: "evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "skipped", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "update_mask", kind: "message", T: FieldMask },
    { no: 8, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * ScorecardsDeleteEvaluationQuestionEvent is event when an evaluation question is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteEvaluationQuestionEvent
 */
export const ScorecardsDeleteEvaluationQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteEvaluationQuestionEvent",
  () => [
    { no: 1, name: "evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "evaluation_questions", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * ScorecardsCreateScorecardQuestionEvent is event when a scorecard question library scorecard question is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateScorecardQuestionEvent
 */
export const ScorecardsCreateScorecardQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateScorecardQuestionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "allow_skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "max_points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "allow_multi_select", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * ScorecardsUpdateScorecardQuestionEvent is event when a scorecard question library scorecard question is updated
 *
 * @generated from message api.commons.audit.ScorecardsUpdateScorecardQuestionEvent
 */
export const ScorecardsUpdateScorecardQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsUpdateScorecardQuestionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "allow_skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "max_points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "allow_multi_select", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "sort_order", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "update_mask", kind: "message", T: FieldMask },
    { no: 9, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * ScorecardsDeleteScorecardQuestionEvent is event when a scorecard question library scorecard question is deleted
 *
 * @generated from message api.commons.audit.ScorecardsDeleteScorecardQuestionEvent
 */
export const ScorecardsDeleteScorecardQuestionEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsDeleteScorecardQuestionEvent",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "allow_skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "max_points", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "allow_multi_select", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * ScorecardsCreateAutoEvaluationEvent is event when an auto evaluation library auto evaluation is created
 *
 * @generated from message api.commons.audit.ScorecardsCreateAutoEvaluationEvent
 */
export const ScorecardsCreateAutoEvaluationEvent = proto3.makeMessageType(
  "api.commons.audit.ScorecardsCreateAutoEvaluationEvent",
  () => [
    { no: 1, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 6, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "risk_level", kind: "enum", T: proto3.getEnumType(RiskLevel) },
    { no: 8, name: "auto_evaluation", kind: "message", T: AutoEvaluation },
  ],
);

