// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/scorecard.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { EvaluationType, Scorecard, ScorecardState } from "../../commons/scorecards_pb.js";
import { CallType_Enum } from "../../commons/acd_pb.js";

/**
 * CreateScorecardRequest is the request to create a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardRequest
 */
export const CreateScorecardRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateScorecardRequest",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * CreateScorecardResponse contains the scorecard that was created.
 *
 * @generated from message api.v1alpha1.scorecards.CreateScorecardResponse
 */
export const CreateScorecardResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateScorecardResponse",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * ListScorecardsRequest is the request for listing scorecards by certain criteria.
 *
 * @generated from message api.v1alpha1.scorecards.ListScorecardsRequest
 */
export const ListScorecardsRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListScorecardsRequest",
  () => [
    { no: 2, name: "author_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "category_ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "states", kind: "enum", T: proto3.getEnumType(ScorecardState), repeated: true },
    { no: 5, name: "evaluation_types", kind: "enum", T: proto3.getEnumType(EvaluationType), repeated: true },
    { no: 6, name: "call_types", kind: "enum", T: proto3.getEnumType(CallType_Enum), repeated: true },
  ],
);

/**
 * ListScorecardsResponse includes a list of scorecards.
 *
 * @generated from message api.v1alpha1.scorecards.ListScorecardsResponse
 */
export const ListScorecardsResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListScorecardsResponse",
  () => [
    { no: 1, name: "scorecards", kind: "message", T: Scorecard, repeated: true },
  ],
);

/**
 * UpdateScorecardRequest is the request for updating a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardRequest
 */
export const UpdateScorecardRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateScorecardRequest",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateScorecardResponse returns the updated scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateScorecardResponse
 */
export const UpdateScorecardResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateScorecardResponse",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * DeleteScorecardRequest is the request to delete a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardRequest
 */
export const DeleteScorecardRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteScorecardRequest",
  () => [
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteScorecardResponse contains the deleted scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteScorecardResponse
 */
export const DeleteScorecardResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteScorecardResponse",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

/**
 * GetScorecardRequest is the request for getting a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardRequest
 */
export const GetScorecardRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetScorecardRequest",
  () => [
    { no: 2, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "use_default", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * GetScorecardResponse contains a scorecard.
 *
 * @generated from message api.v1alpha1.scorecards.GetScorecardResponse
 */
export const GetScorecardResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetScorecardResponse",
  () => [
    { no: 1, name: "scorecard", kind: "message", T: Scorecard },
  ],
);

