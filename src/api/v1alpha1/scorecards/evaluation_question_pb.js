// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/evaluation_question.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { EvaluationQuestion } from "../../commons/scorecards_pb.js";

/**
 * CreateEvaluationQuestionRequest is request to create an evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationQuestionRequest
 */
export const CreateEvaluationQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateEvaluationQuestionRequest",
  () => [
    { no: 1, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * CreateEvaluationQuestionResponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationQuestionResponse
 */
export const CreateEvaluationQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateEvaluationQuestionResponse",
  () => [
    { no: 1, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * UpdateEvaluationQuestionRequest is request to update an existing evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationQuestionRequest
 */
export const UpdateEvaluationQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateEvaluationQuestionRequest",
  () => [
    { no: 1, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateEvaluationQuestionResponse is response with updated entity
 *
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationQuestionResponse
 */
export const UpdateEvaluationQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateEvaluationQuestionResponse",
  () => [
    { no: 1, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

/**
 * DeleteEvaluationQuestionRequest is request to delete an evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationQuestionRequest
 */
export const DeleteEvaluationQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteEvaluationQuestionRequest",
  () => [
    { no: 2, name: "evaluation_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteEvaluationQuestionResponse is response with deleted entity
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationQuestionResponse
 */
export const DeleteEvaluationQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteEvaluationQuestionResponse",
  () => [
    { no: 1, name: "evaluation_question", kind: "message", T: EvaluationQuestion },
  ],
);

