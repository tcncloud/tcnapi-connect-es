// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/evaluation.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { Evaluation, TimeFilter } from "../../commons/scorecards_pb.js";

/**
 * CreateEvaluationRequest is request to create a new evaluation
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationRequest
 */
export const CreateEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateEvaluationRequest",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * CreateEvaluationResponse is response with created entity
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationResponse
 */
export const CreateEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateEvaluationResponse",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationRequest
 */
export const UpdateEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateEvaluationRequest",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationResponse
 */
export const UpdateEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateEvaluationResponse",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * DeleteEvaluationRequest is request to delete an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationRequest
 */
export const DeleteEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteEvaluationRequest",
  () => [
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteEvaluationReponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationResponse
 */
export const DeleteEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteEvaluationResponse",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * GetEvaluationRequest is request to get an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.GetEvaluationRequest
 */
export const GetEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetEvaluationRequest",
  () => [
    { no: 2, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetEvaluationReponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.GetEvaluationResponse
 */
export const GetEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetEvaluationResponse",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * ScoreEvaluationRequest is request to score an evaluation
 *
 * @generated from message api.v1alpha1.scorecards.ScoreEvaluationRequest
 */
export const ScoreEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ScoreEvaluationRequest",
  () => [
    { no: 3, name: "evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ScoreEvaluationResponse returns the evaluation that was scored
 *
 * @generated from message api.v1alpha1.scorecards.ScoreEvaluationResponse
 */
export const ScoreEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ScoreEvaluationResponse",
  () => [
    { no: 1, name: "evaluation", kind: "message", T: Evaluation },
  ],
);

/**
 * ListEvaluationsRequest is request to get list of evaluations
 *
 * @generated from message api.v1alpha1.scorecards.ListEvaluationsRequest
 */
export const ListEvaluationsRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListEvaluationsRequest",
  () => [
    { no: 2, name: "scorer_id", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "completed_at", kind: "message", T: TimeFilter },
    { no: 4, name: "category_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 5, name: "agent_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "scorecard_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * ListEvaluationsResponse returns a list of evaluations
 *
 * @generated from message api.v1alpha1.scorecards.ListEvaluationsResponse
 */
export const ListEvaluationsResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListEvaluationsResponse",
  () => [
    { no: 1, name: "evaluations", kind: "message", T: Evaluation, repeated: true },
  ],
);

