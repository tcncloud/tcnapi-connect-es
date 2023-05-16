// @generated by protoc-gen-es v1.2.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/auto_evaluation.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { AutoEvaluation } from "../../commons/scorecards_pb.js";

/**
 * GetAutoEvaluationRequest is the request to get an auto evaluation
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoEvaluationRequest
 */
export const GetAutoEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetAutoEvaluationRequest",
  () => [
    { no: 2, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetAutoEvaluationResponse returns the auto evaluation requested.
 *
 * @generated from message api.v1alpha1.scorecards.GetAutoEvaluationResponse
 */
export const GetAutoEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetAutoEvaluationResponse",
  () => [
    { no: 1, name: "auto_evaluation", kind: "message", T: AutoEvaluation },
  ],
);

/**
 * ListAutoEvaluationsRequest is the request to get a list of auto evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsRequest
 */
export const ListAutoEvaluationsRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListAutoEvaluationsRequest",
  () => [
    { no: 2, name: "scorecard_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * ListAutoEvaluationsResponse returns a list of evaluations.
 *
 * @generated from message api.v1alpha1.scorecards.ListAutoEvaluationsResponse
 */
export const ListAutoEvaluationsResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListAutoEvaluationsResponse",
  () => [
    { no: 1, name: "auto_evaluations", kind: "message", T: AutoEvaluation, repeated: true },
  ],
);

/**
 * DeleteAutoEvaluationRequest is the request to delete an auto evaluation (with sub-entities).
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoEvaluationRequest
 */
export const DeleteAutoEvaluationRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteAutoEvaluationRequest",
  () => [
    { no: 2, name: "auto_evaluation_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteAutoEvaluationResponse returns the deleted auto evaluation.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteAutoEvaluationResponse
 */
export const DeleteAutoEvaluationResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteAutoEvaluationResponse",
  () => [
    { no: 1, name: "auto_evaluation", kind: "message", T: AutoEvaluation },
  ],
);

