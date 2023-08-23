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
import { DeleteAutoEvaluationRequest, DeleteAutoEvaluationResponse, GetAutoEvaluationRequest, GetAutoEvaluationResponse, ListAutoEvaluationsRequest, ListAutoEvaluationsResponse, StreamAutoEvaluationsRequest, StreamAutoEvaluationsResponse } from "./auto_evaluation_pb.js";

/**
 * @generated from service api.v1alpha1.scorecards.Scorecards
 */
export declare const Scorecards: {
  readonly typeName: "api.v1alpha1.scorecards.Scorecards",
  readonly methods: {
    /**
     * CreateScorecard creates a new scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateScorecard
     */
    readonly createScorecard: {
      readonly name: "CreateScorecard",
      readonly I: typeof CreateScorecardRequest,
      readonly O: typeof CreateScorecardResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListScorecards lists scorecards
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListScorecards
     */
    readonly listScorecards: {
      readonly name: "ListScorecards",
      readonly I: typeof ListScorecardsRequest,
      readonly O: typeof ListScorecardsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateScorecard updates an existing scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateScorecard
     */
    readonly updateScorecard: {
      readonly name: "UpdateScorecard",
      readonly I: typeof UpdateScorecardRequest,
      readonly O: typeof UpdateScorecardResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteScorecard deletes a scorecard
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteScorecard
     */
    readonly deleteScorecard: {
      readonly name: "DeleteScorecard",
      readonly I: typeof DeleteScorecardRequest,
      readonly O: typeof DeleteScorecardResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetScorecard gets a scorecard by ID
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetScorecard
     */
    readonly getScorecard: {
      readonly name: "GetScorecard",
      readonly I: typeof GetScorecardRequest,
      readonly O: typeof GetScorecardResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateQuestion creates a new library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateQuestion
     */
    readonly createQuestion: {
      readonly name: "CreateQuestion",
      readonly I: typeof CreateQuestionRequest,
      readonly O: typeof CreateQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListQuestions lists library questions
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListQuestions
     */
    readonly listQuestions: {
      readonly name: "ListQuestions",
      readonly I: typeof ListQuestionsRequest,
      readonly O: typeof ListQuestionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateQuestion updates a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateQuestion
     */
    readonly updateQuestion: {
      readonly name: "UpdateQuestion",
      readonly I: typeof UpdateQuestionRequest,
      readonly O: typeof UpdateQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteQuestion deletes a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteQuestion
     */
    readonly deleteQuestion: {
      readonly name: "DeleteQuestion",
      readonly I: typeof DeleteQuestionRequest,
      readonly O: typeof DeleteQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetQuestion gets a library question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetQuestion
     */
    readonly getQuestion: {
      readonly name: "GetQuestion",
      readonly I: typeof GetQuestionRequest,
      readonly O: typeof GetQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * BulkCreateQuestions creates library questions by a scorecard id
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.BulkCreateQuestions
     */
    readonly bulkCreateQuestions: {
      readonly name: "BulkCreateQuestions",
      readonly I: typeof BulkCreateQuestionsRequest,
      readonly O: typeof BulkCreateQuestionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateCategory creates a new scorecards category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateCategory
     */
    readonly createCategory: {
      readonly name: "CreateCategory",
      readonly I: typeof CreateCategoryRequest,
      readonly O: typeof CreateCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListCategories lists scorecards categories
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListCategories
     */
    readonly listCategories: {
      readonly name: "ListCategories",
      readonly I: typeof ListCategoriesRequest,
      readonly O: typeof ListCategoriesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCategory updates a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateCategory
     */
    readonly updateCategory: {
      readonly name: "UpdateCategory",
      readonly I: typeof UpdateCategoryRequest,
      readonly O: typeof UpdateCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteCategory deletes a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteCategory
     */
    readonly deleteCategory: {
      readonly name: "DeleteCategory",
      readonly I: typeof DeleteCategoryRequest,
      readonly O: typeof DeleteCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetCategory gets a scorecard category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetCategory
     */
    readonly getCategory: {
      readonly name: "GetCategory",
      readonly I: typeof GetCategoryRequest,
      readonly O: typeof GetCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateScorecardQuestion creates a scorecard scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateScorecardQuestion
     */
    readonly createScorecardQuestion: {
      readonly name: "CreateScorecardQuestion",
      readonly I: typeof CreateScorecardQuestionRequest,
      readonly O: typeof CreateScorecardQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateScorecardQuestion updates a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateScorecardQuestion
     */
    readonly updateScorecardQuestion: {
      readonly name: "UpdateScorecardQuestion",
      readonly I: typeof UpdateScorecardQuestionRequest,
      readonly O: typeof UpdateScorecardQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteScorecardQuestion deletes a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteScorecardQuestion
     */
    readonly deleteScorecardQuestion: {
      readonly name: "DeleteScorecardQuestion",
      readonly I: typeof DeleteScorecardQuestionRequest,
      readonly O: typeof DeleteScorecardQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetScorecardQuestion gets a scorecard question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetScorecardQuestion
     */
    readonly getScorecardQuestion: {
      readonly name: "GetScorecardQuestion",
      readonly I: typeof GetScorecardQuestionRequest,
      readonly O: typeof GetScorecardQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateSection creates a new scorecards section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateSection
     */
    readonly createSection: {
      readonly name: "CreateSection",
      readonly I: typeof CreateSectionRequest,
      readonly O: typeof CreateSectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListSections lists scorecards sections
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListSections
     */
    readonly listSections: {
      readonly name: "ListSections",
      readonly I: typeof ListSectionsRequest,
      readonly O: typeof ListSectionsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateSection updates a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateSection
     */
    readonly updateSection: {
      readonly name: "UpdateSection",
      readonly I: typeof UpdateSectionRequest,
      readonly O: typeof UpdateSectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetSection gets a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetSection
     */
    readonly getSection: {
      readonly name: "GetSection",
      readonly I: typeof GetSectionRequest,
      readonly O: typeof GetSectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteSection deletes a scorecard section
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteSection
     */
    readonly deleteSection: {
      readonly name: "DeleteSection",
      readonly I: typeof DeleteSectionRequest,
      readonly O: typeof DeleteSectionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateQuestionCategory links a scorecard question and category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateQuestionCategory
     */
    readonly createQuestionCategory: {
      readonly name: "CreateQuestionCategory",
      readonly I: typeof CreateQuestionCategoryRequest,
      readonly O: typeof CreateQuestionCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteQuestionCategory deletes link between a scorecard question and category
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteQuestionCategory
     */
    readonly deleteQuestionCategory: {
      readonly name: "DeleteQuestionCategory",
      readonly I: typeof DeleteQuestionCategoryRequest,
      readonly O: typeof DeleteQuestionCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateEvaluation creates a new evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateEvaluation
     */
    readonly createEvaluation: {
      readonly name: "CreateEvaluation",
      readonly I: typeof CreateEvaluationRequest,
      readonly O: typeof CreateEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteEvaluation
     */
    readonly deleteEvaluation: {
      readonly name: "DeleteEvaluation",
      readonly I: typeof DeleteEvaluationRequest,
      readonly O: typeof DeleteEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ScoreEvaluation
     */
    readonly scoreEvaluation: {
      readonly name: "ScoreEvaluation",
      readonly I: typeof ScoreEvaluationRequest,
      readonly O: typeof ScoreEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateEvaluation updates an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateEvaluation
     */
    readonly updateEvaluation: {
      readonly name: "UpdateEvaluation",
      readonly I: typeof UpdateEvaluationRequest,
      readonly O: typeof UpdateEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetEvaluation gets an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetEvaluation
     */
    readonly getEvaluation: {
      readonly name: "GetEvaluation",
      readonly I: typeof GetEvaluationRequest,
      readonly O: typeof GetEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListEvaluations gets a list of evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListEvaluations
     */
    readonly listEvaluations: {
      readonly name: "ListEvaluations",
      readonly I: typeof ListEvaluationsRequest,
      readonly O: typeof ListEvaluationsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DEPRECATED. Use CreateEvaluation to create evaluation sub-entities.
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateEvaluationQuestion
     * @deprecated
     */
    readonly createEvaluationQuestion: {
      readonly name: "CreateEvaluationQuestion",
      readonly I: typeof CreateEvaluationQuestionRequest,
      readonly O: typeof CreateEvaluationQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateEvaluationQuestion updates an existing evaluation question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateEvaluationQuestion
     */
    readonly updateEvaluationQuestion: {
      readonly name: "UpdateEvaluationQuestion",
      readonly I: typeof UpdateEvaluationQuestionRequest,
      readonly O: typeof UpdateEvaluationQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteEvaluationQuestion creates an evaluation question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteEvaluationQuestion
     */
    readonly deleteEvaluationQuestion: {
      readonly name: "DeleteEvaluationQuestion",
      readonly I: typeof DeleteEvaluationQuestionRequest,
      readonly O: typeof DeleteEvaluationQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SampleCallsByCategory
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.SampleCallsByCategory
     */
    readonly sampleCallsByCategory: {
      readonly name: "SampleCallsByCategory",
      readonly I: typeof SampleCallsByCategoryRequest,
      readonly O: typeof SampleCallsByCategoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateAutoQuestion creates an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.CreateAutoQuestion
     */
    readonly createAutoQuestion: {
      readonly name: "CreateAutoQuestion",
      readonly I: typeof CreateAutoQuestionRequest,
      readonly O: typeof CreateAutoQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateAutoQuestion updates an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.UpdateAutoQuestion
     */
    readonly updateAutoQuestion: {
      readonly name: "UpdateAutoQuestion",
      readonly I: typeof UpdateAutoQuestionRequest,
      readonly O: typeof UpdateAutoQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteAutoQuestion deletes an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteAutoQuestion
     */
    readonly deleteAutoQuestion: {
      readonly name: "DeleteAutoQuestion",
      readonly I: typeof DeleteAutoQuestionRequest,
      readonly O: typeof DeleteAutoQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetAutoQuestion gets an auto question
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetAutoQuestion
     */
    readonly getAutoQuestion: {
      readonly name: "GetAutoQuestion",
      readonly I: typeof GetAutoQuestionRequest,
      readonly O: typeof GetAutoQuestionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetAutoEvaluation gets an auto evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.GetAutoEvaluation
     */
    readonly getAutoEvaluation: {
      readonly name: "GetAutoEvaluation",
      readonly I: typeof GetAutoEvaluationRequest,
      readonly O: typeof GetAutoEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListAutoEvaluations gets a list of auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.ListAutoEvaluations
     */
    readonly listAutoEvaluations: {
      readonly name: "ListAutoEvaluations",
      readonly I: typeof ListAutoEvaluationsRequest,
      readonly O: typeof ListAutoEvaluationsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * StreamAutoEvaluations streams a list of auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.StreamAutoEvaluations
     */
    readonly streamAutoEvaluations: {
      readonly name: "StreamAutoEvaluations",
      readonly I: typeof StreamAutoEvaluationsRequest,
      readonly O: typeof StreamAutoEvaluationsResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * DeleteAutoEvaluation deletes an auto evaluations
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.DeleteAutoEvaluation
     */
    readonly deleteAutoEvaluation: {
      readonly name: "DeleteAutoEvaluation",
      readonly I: typeof DeleteAutoEvaluationRequest,
      readonly O: typeof DeleteAutoEvaluationResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * PreviewEvaluationScore previews the score for an evaluation
     *
     * @generated from rpc api.v1alpha1.scorecards.Scorecards.PreviewEvaluationScore
     */
    readonly previewEvaluationScore: {
      readonly name: "PreviewEvaluationScore",
      readonly I: typeof PreviewEvaluationScoreRequest,
      readonly O: typeof PreviewEvaluationScoreResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

