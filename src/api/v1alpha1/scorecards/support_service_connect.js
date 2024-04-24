// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/scorecards/support_service.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteEvaluationByOrgIdRequest, DeleteEvaluationResponse, ListEvaluationsByOrgIdRequest, ListEvaluationsResponse } from "./evaluation_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { DeleteAutoEvaluationByOrgIdRequest, DeleteAutoEvaluationResponse, ListAutoEvaluationsByOrgIdRequest, ListAutoEvaluationsResponse } from "./auto_evaluation_pb.js";
import { ListScorecardsByOrgIdRequest, ListScorecardsResponse } from "./scorecard_pb.js";
import { ListCategoriesByOrgIdRequest, ListCategoriesResponse } from "./category_pb.js";

/**
 * ScorecardsSupport provies customer support
 * specific endpoints for Scorecards.
 *
 * @generated from service api.v1alpha1.scorecards.ScorecardsSupport
 */
export const ScorecardsSupport = {
  typeName: "api.v1alpha1.scorecards.ScorecardsSupport",
  methods: {
    /**
     * ListEvaluationsByOrgId gets a list of evaluations by org id
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.ListEvaluationsByOrgId
     */
    listEvaluationsByOrgId: {
      name: "ListEvaluationsByOrgId",
      I: ListEvaluationsByOrgIdRequest,
      O: ListEvaluationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListAutoEvaluationsByOrgId gets a list of auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.ListAutoEvaluationsByOrgId
     */
    listAutoEvaluationsByOrgId: {
      name: "ListAutoEvaluationsByOrgId",
      I: ListAutoEvaluationsByOrgIdRequest,
      O: ListAutoEvaluationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteEvaluationByOrgId delete an evaluation in a specific org
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.DeleteEvaluationByOrgId
     */
    deleteEvaluationByOrgId: {
      name: "DeleteEvaluationByOrgId",
      I: DeleteEvaluationByOrgIdRequest,
      O: DeleteEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAutoEvaluationByOrgId deletes an auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.DeleteAutoEvaluationByOrgId
     */
    deleteAutoEvaluationByOrgId: {
      name: "DeleteAutoEvaluationByOrgId",
      I: DeleteAutoEvaluationByOrgIdRequest,
      O: DeleteAutoEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListScorecardsByOrgId lists scorecards
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.ListScorecardsByOrgId
     */
    listScorecardsByOrgId: {
      name: "ListScorecardsByOrgId",
      I: ListScorecardsByOrgIdRequest,
      O: ListScorecardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListCategoriesByOrgId lists categories
     *
     * @generated from rpc api.v1alpha1.scorecards.ScorecardsSupport.ListCategoriesByOrgId
     */
    listCategoriesByOrgId: {
      name: "ListCategoriesByOrgId",
      I: ListCategoriesByOrgIdRequest,
      O: ListCategoriesResponse,
      kind: MethodKind.Unary,
    },
  }
};
