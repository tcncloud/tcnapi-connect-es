// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/scorecards/service.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateScorecardRequest, CreateScorecardResponse, DeleteScorecardRequest, DeleteScorecardResponse, GetScorecardRequest, GetScorecardResponse, ListScorecardsRequest, ListScorecardsResponse, UpdateScorecardRequest, UpdateScorecardResponse } from "./scorecard_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BulkCreateQuestionsRequest, BulkCreateQuestionsResponse, CreateQuestionCategoryRequest, CreateQuestionCategoryResponse, CreateQuestionRequest, CreateQuestionResponse, DeleteQuestionCategoryRequest, DeleteQuestionCategoryResponse, DeleteQuestionRequest, DeleteQuestionResponse, GetQuestionRequest, GetQuestionResponse, ListQuestionsRequest, ListQuestionsResponse, UpdateQuestionRequest, UpdateQuestionResponse } from "./question_pb.js";
import { CreateCategoryRequest, CreateCategoryResponse, DeleteCategoryRequest, DeleteCategoryResponse, GetCategoryRequest, GetCategoryResponse, ListCategoriesRequest, ListCategoriesResponse, SampleCallsByCategoryRequest, SampleCallsByCategoryResponse, UpdateCategoryRequest, UpdateCategoryResponse } from "./category_pb.js";
import { CreateScorecardQuestionRequest, CreateScorecardQuestionResponse, DeleteScorecardQuestionRequest, DeleteScorecardQuestionResponse, GetScorecardQuestionRequest, GetScorecardQuestionResponse, UpdateScorecardQuestionRequest, UpdateScorecardQuestionResponse } from "./scorecard_question_pb.js";
import { CreateSectionRequest, CreateSectionResponse, DeleteSectionRequest, DeleteSectionResponse, GetSectionRequest, GetSectionResponse, ListSectionsRequest, ListSectionsResponse, UpdateSectionRequest, UpdateSectionResponse } from "./section_pb.js";
import { CreateEvaluationRequest, CreateEvaluationResponse, DeleteEvaluationRequest, DeleteEvaluationResponse, GetEvaluationRequest, GetEvaluationResponse, ListEvaluationsRequest, ListEvaluationsResponse, PreviewEvaluationScoreRequest, PreviewEvaluationScoreResponse, ScoreEvaluationRequest, ScoreEvaluationResponse, UpdateEvaluationRequest, UpdateEvaluationResponse } from "./evaluation_pb.js";
import { CreateEvaluationQuestionRequest, CreateEvaluationQuestionResponse, DeleteEvaluationQuestionRequest, DeleteEvaluationQuestionResponse, UpdateEvaluationQuestionRequest, UpdateEvaluationQuestionResponse } from "./evaluation_question_pb.js";
import { CreateAutoQuestionRequest, CreateAutoQuestionResponse, DeleteAutoQuestionRequest, DeleteAutoQuestionResponse, GetAutoQuestionRequest, GetAutoQuestionResponse, UpdateAutoQuestionRequest, UpdateAutoQuestionResponse } from "./auto_question_pb.js";
import { DeleteAutoEvaluationRequest, DeleteAutoEvaluationResponse, GetAutoEvaluationRequest, GetAutoEvaluationResponse, ListAutoEvaluationsRequest, ListAutoEvaluationsResponse } from "./auto_evaluation_pb.js";

/**
 * @generated from service api.v1alpha1.scorecards.Scorecards
 */
export const Scorecards = {
  typeName: "api.v1alpha1.scorecards.Scorecards",
  methods: {
    /**
     * CreateScorecard creates a new scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateScorecard
     */
    createScorecard: {
      name: "CreateScorecard",
      I: CreateScorecardRequest,
      O: CreateScorecardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListScorecards lists scorecards
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListScorecards
     */
    listScorecards: {
      name: "ListScorecards",
      I: ListScorecardsRequest,
      O: ListScorecardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateScorecard updates an existing scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateScorecard
     */
    updateScorecard: {
      name: "UpdateScorecard",
      I: UpdateScorecardRequest,
      O: UpdateScorecardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteScorecard deletes a scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteScorecard
     */
    deleteScorecard: {
      name: "DeleteScorecard",
      I: DeleteScorecardRequest,
      O: DeleteScorecardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetScorecard gets a scorecard by ID
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetScorecard
     */
    getScorecard: {
      name: "GetScorecard",
      I: GetScorecardRequest,
      O: GetScorecardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateQuestion creates a new library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateQuestion
     */
    createQuestion: {
      name: "CreateQuestion",
      I: CreateQuestionRequest,
      O: CreateQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListQuestions lists library questions
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListQuestions
     */
    listQuestions: {
      name: "ListQuestions",
      I: ListQuestionsRequest,
      O: ListQuestionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateQuestion updates a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateQuestion
     */
    updateQuestion: {
      name: "UpdateQuestion",
      I: UpdateQuestionRequest,
      O: UpdateQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteQuestion deletes a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteQuestion
     */
    deleteQuestion: {
      name: "DeleteQuestion",
      I: DeleteQuestionRequest,
      O: DeleteQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetQuestion gets a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetQuestion
     */
    getQuestion: {
      name: "GetQuestion",
      I: GetQuestionRequest,
      O: GetQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * BulkCreateQuestions creates library questions by a scorecard id
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.BulkCreateQuestions
     */
    bulkCreateQuestions: {
      name: "BulkCreateQuestions",
      I: BulkCreateQuestionsRequest,
      O: BulkCreateQuestionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateCategory creates a new scorecards category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateCategory
     */
    createCategory: {
      name: "CreateCategory",
      I: CreateCategoryRequest,
      O: CreateCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListCategories lists scorecards categories
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListCategories
     */
    listCategories: {
      name: "ListCategories",
      I: ListCategoriesRequest,
      O: ListCategoriesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCategory updates a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateCategory
     */
    updateCategory: {
      name: "UpdateCategory",
      I: UpdateCategoryRequest,
      O: UpdateCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteCategory deletes a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteCategory
     */
    deleteCategory: {
      name: "DeleteCategory",
      I: DeleteCategoryRequest,
      O: DeleteCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetCategory gets a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetCategory
     */
    getCategory: {
      name: "GetCategory",
      I: GetCategoryRequest,
      O: GetCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateScorecardQuestion creates a scorecard scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateScorecardQuestion
     */
    createScorecardQuestion: {
      name: "CreateScorecardQuestion",
      I: CreateScorecardQuestionRequest,
      O: CreateScorecardQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateScorecardQuestion updates a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateScorecardQuestion
     */
    updateScorecardQuestion: {
      name: "UpdateScorecardQuestion",
      I: UpdateScorecardQuestionRequest,
      O: UpdateScorecardQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteScorecardQuestion deletes a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteScorecardQuestion
     */
    deleteScorecardQuestion: {
      name: "DeleteScorecardQuestion",
      I: DeleteScorecardQuestionRequest,
      O: DeleteScorecardQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetScorecardQuestion gets a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetScorecardQuestion
     */
    getScorecardQuestion: {
      name: "GetScorecardQuestion",
      I: GetScorecardQuestionRequest,
      O: GetScorecardQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateSection creates a new scorecards section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateSection
     */
    createSection: {
      name: "CreateSection",
      I: CreateSectionRequest,
      O: CreateSectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListSections lists scorecards sections
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListSections
     */
    listSections: {
      name: "ListSections",
      I: ListSectionsRequest,
      O: ListSectionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSection updates a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateSection
     */
    updateSection: {
      name: "UpdateSection",
      I: UpdateSectionRequest,
      O: UpdateSectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetSection gets a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetSection
     */
    getSection: {
      name: "GetSection",
      I: GetSectionRequest,
      O: GetSectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteSection deletes a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteSection
     */
    deleteSection: {
      name: "DeleteSection",
      I: DeleteSectionRequest,
      O: DeleteSectionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateQuestionCategory links a scorecard question and category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateQuestionCategory
     */
    createQuestionCategory: {
      name: "CreateQuestionCategory",
      I: CreateQuestionCategoryRequest,
      O: CreateQuestionCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteQuestionCategory deletes link between a scorecard question and category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteQuestionCategory
     */
    deleteQuestionCategory: {
      name: "DeleteQuestionCategory",
      I: DeleteQuestionCategoryRequest,
      O: DeleteQuestionCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateEvaluation creates a new evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateEvaluation
     */
    createEvaluation: {
      name: "CreateEvaluation",
      I: CreateEvaluationRequest,
      O: CreateEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteEvaluation
     */
    deleteEvaluation: {
      name: "DeleteEvaluation",
      I: DeleteEvaluationRequest,
      O: DeleteEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ScoreEvaluation
     */
    scoreEvaluation: {
      name: "ScoreEvaluation",
      I: ScoreEvaluationRequest,
      O: ScoreEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateEvaluation updates an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateEvaluation
     */
    updateEvaluation: {
      name: "UpdateEvaluation",
      I: UpdateEvaluationRequest,
      O: UpdateEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetEvaluation
     */
    getEvaluation: {
      name: "GetEvaluation",
      I: GetEvaluationRequest,
      O: GetEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListEvaluations gets a list of evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListEvaluations
     */
    listEvaluations: {
      name: "ListEvaluations",
      I: ListEvaluationsRequest,
      O: ListEvaluationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DEPRECATED. Use CreateEvaluation to create evaluation sub-entities.
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateEvaluationQuestion
     * @deprecated
     */
    createEvaluationQuestion: {
      name: "CreateEvaluationQuestion",
      I: CreateEvaluationQuestionRequest,
      O: CreateEvaluationQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateEvaluationQuestion updates an existing evaluation question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateEvaluationQuestion
     */
    updateEvaluationQuestion: {
      name: "UpdateEvaluationQuestion",
      I: UpdateEvaluationQuestionRequest,
      O: UpdateEvaluationQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteEvaluationQuestion creates an evaluation question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteEvaluationQuestion
     */
    deleteEvaluationQuestion: {
      name: "DeleteEvaluationQuestion",
      I: DeleteEvaluationQuestionRequest,
      O: DeleteEvaluationQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SampleCallsByCategory
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.SampleCallsByCategory
     */
    sampleCallsByCategory: {
      name: "SampleCallsByCategory",
      I: SampleCallsByCategoryRequest,
      O: SampleCallsByCategoryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateAutoQuestion creates an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateAutoQuestion
     */
    createAutoQuestion: {
      name: "CreateAutoQuestion",
      I: CreateAutoQuestionRequest,
      O: CreateAutoQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateAutoQuestion updates an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateAutoQuestion
     */
    updateAutoQuestion: {
      name: "UpdateAutoQuestion",
      I: UpdateAutoQuestionRequest,
      O: UpdateAutoQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAutoQuestion deletes an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteAutoQuestion
     */
    deleteAutoQuestion: {
      name: "DeleteAutoQuestion",
      I: DeleteAutoQuestionRequest,
      O: DeleteAutoQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAutoQuestion gets an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetAutoQuestion
     */
    getAutoQuestion: {
      name: "GetAutoQuestion",
      I: GetAutoQuestionRequest,
      O: GetAutoQuestionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetAutoEvaluation gets an auto evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetAutoEvaluation
     */
    getAutoEvaluation: {
      name: "GetAutoEvaluation",
      I: GetAutoEvaluationRequest,
      O: GetAutoEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListAutoEvaluations gets a list of auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListAutoEvaluations
     */
    listAutoEvaluations: {
      name: "ListAutoEvaluations",
      I: ListAutoEvaluationsRequest,
      O: ListAutoEvaluationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteAutoEvaluation deletes an auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteAutoEvaluation
     */
    deleteAutoEvaluation: {
      name: "DeleteAutoEvaluation",
      I: DeleteAutoEvaluationRequest,
      O: DeleteAutoEvaluationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PreviewEvaluationScore previews the score for an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.PreviewEvaluationScore
     */
    previewEvaluationScore: {
      name: "PreviewEvaluationScore",
      I: PreviewEvaluationScoreRequest,
      O: PreviewEvaluationScoreResponse,
      kind: MethodKind.Unary,
    },
  }
};

