// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/scorecard_question.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { ScorecardQuestion } from "../../commons/scorecards_pb.js";

/**
 * GetScorecardQuestionRequest is the request to get a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardQuestionRequest
 */
export const GetScorecardQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetScorecardQuestionRequest",
  () => [
    { no: 2, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetScorecardQuestionResponse returns the scorecard question requested.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardQuestionResponse
 */
export const GetScorecardQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetScorecardQuestionResponse",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * CreateScorecardQuestionRequest is the request to create a new scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardQuestionRequest
 */
export const CreateScorecardQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateScorecardQuestionRequest",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * CreateScorecardQuestionResponse returns the created scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardQuestionResponse
 */
export const CreateScorecardQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateScorecardQuestionResponse",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * UpdateScorecardQuestionRequest is the request to update a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardQuestionRequest
 */
export const UpdateScorecardQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateScorecardQuestionRequest",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateScorecardQuestionResponse returns the updated scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardQuestionResponse
 */
export const UpdateScorecardQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateScorecardQuestionResponse",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

/**
 * DeleteScorecardQuestionRequest is the request to delete a scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardQuestionRequest
 */
export const DeleteScorecardQuestionRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteScorecardQuestionRequest",
  () => [
    { no: 2, name: "scorecard_question_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteScorecardQuestionResponse returns the deleted scorecard question.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardQuestionResponse
 */
export const DeleteScorecardQuestionResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteScorecardQuestionResponse",
  () => [
    { no: 1, name: "scorecard_question", kind: "message", T: ScorecardQuestion },
  ],
);

