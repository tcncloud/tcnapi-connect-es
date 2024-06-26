// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/evaluation_question.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EvaluationQuestion } from "../../commons/scorecards_pb.js";

/**
 * CreateEvaluationQuestionRequest is request to create an evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationQuestionRequest
 */
export declare class CreateEvaluationQuestionRequest extends Message<CreateEvaluationQuestionRequest> {
  /**
   * Required - the entity which is requested to be created
   *
   * @generated from field: api.commons.EvaluationQuestion evaluation_question = 1;
   */
  evaluationQuestion?: EvaluationQuestion;

  constructor(data?: PartialMessage<CreateEvaluationQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateEvaluationQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEvaluationQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEvaluationQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEvaluationQuestionRequest;

  static equals(a: CreateEvaluationQuestionRequest | PlainMessage<CreateEvaluationQuestionRequest> | undefined, b: CreateEvaluationQuestionRequest | PlainMessage<CreateEvaluationQuestionRequest> | undefined): boolean;
}

/**
 * CreateEvaluationQuestionResponse is response with requested entity
 *
 * @generated from message api.v1alpha1.scorecards.CreateEvaluationQuestionResponse
 */
export declare class CreateEvaluationQuestionResponse extends Message<CreateEvaluationQuestionResponse> {
  /**
   * Required - the entity which was created
   *
   * @generated from field: api.commons.EvaluationQuestion evaluation_question = 1;
   */
  evaluationQuestion?: EvaluationQuestion;

  constructor(data?: PartialMessage<CreateEvaluationQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.CreateEvaluationQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEvaluationQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEvaluationQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEvaluationQuestionResponse;

  static equals(a: CreateEvaluationQuestionResponse | PlainMessage<CreateEvaluationQuestionResponse> | undefined, b: CreateEvaluationQuestionResponse | PlainMessage<CreateEvaluationQuestionResponse> | undefined): boolean;
}

/**
 * UpdateEvaluationQuestionRequest is request to update an existing evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationQuestionRequest
 */
export declare class UpdateEvaluationQuestionRequest extends Message<UpdateEvaluationQuestionRequest> {
  /**
   * Required - evaluation question that is to be updated
   *
   * @generated from field: api.commons.EvaluationQuestion evaluation_question = 1;
   */
  evaluationQuestion?: EvaluationQuestion;

  /**
   * Required - specification of which fields should be updated
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateEvaluationQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateEvaluationQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEvaluationQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEvaluationQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEvaluationQuestionRequest;

  static equals(a: UpdateEvaluationQuestionRequest | PlainMessage<UpdateEvaluationQuestionRequest> | undefined, b: UpdateEvaluationQuestionRequest | PlainMessage<UpdateEvaluationQuestionRequest> | undefined): boolean;
}

/**
 * UpdateEvaluationQuestionResponse is response with updated entity
 *
 * @generated from message api.v1alpha1.scorecards.UpdateEvaluationQuestionResponse
 */
export declare class UpdateEvaluationQuestionResponse extends Message<UpdateEvaluationQuestionResponse> {
  /**
   * updated evaluation question
   *
   * @generated from field: api.commons.EvaluationQuestion evaluation_question = 1;
   */
  evaluationQuestion?: EvaluationQuestion;

  constructor(data?: PartialMessage<UpdateEvaluationQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.UpdateEvaluationQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEvaluationQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEvaluationQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEvaluationQuestionResponse;

  static equals(a: UpdateEvaluationQuestionResponse | PlainMessage<UpdateEvaluationQuestionResponse> | undefined, b: UpdateEvaluationQuestionResponse | PlainMessage<UpdateEvaluationQuestionResponse> | undefined): boolean;
}

/**
 * DeleteEvaluationQuestionRequest is request to delete an evaluation question
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationQuestionRequest
 */
export declare class DeleteEvaluationQuestionRequest extends Message<DeleteEvaluationQuestionRequest> {
  /**
   * Required - unique id of evaluation question to delete
   *
   * @generated from field: int64 evaluation_question_id = 2;
   */
  evaluationQuestionId: bigint;

  constructor(data?: PartialMessage<DeleteEvaluationQuestionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteEvaluationQuestionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEvaluationQuestionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEvaluationQuestionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEvaluationQuestionRequest;

  static equals(a: DeleteEvaluationQuestionRequest | PlainMessage<DeleteEvaluationQuestionRequest> | undefined, b: DeleteEvaluationQuestionRequest | PlainMessage<DeleteEvaluationQuestionRequest> | undefined): boolean;
}

/**
 * DeleteEvaluationQuestionResponse is response with deleted entity
 *
 * @generated from message api.v1alpha1.scorecards.DeleteEvaluationQuestionResponse
 */
export declare class DeleteEvaluationQuestionResponse extends Message<DeleteEvaluationQuestionResponse> {
  /**
   * evaluation question object deleted
   *
   * @generated from field: api.commons.EvaluationQuestion evaluation_question = 1;
   */
  evaluationQuestion?: EvaluationQuestion;

  constructor(data?: PartialMessage<DeleteEvaluationQuestionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.scorecards.DeleteEvaluationQuestionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEvaluationQuestionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEvaluationQuestionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEvaluationQuestionResponse;

  static equals(a: DeleteEvaluationQuestionResponse | PlainMessage<DeleteEvaluationQuestionResponse> | undefined, b: DeleteEvaluationQuestionResponse | PlainMessage<DeleteEvaluationQuestionResponse> | undefined): boolean;
}

