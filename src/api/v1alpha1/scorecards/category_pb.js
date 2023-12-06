// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/scorecards/category.proto (package api.v1alpha1.scorecards, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { Category } from "../../commons/scorecards_pb.js";
import { CallType_Enum } from "../../commons/acd_pb.js";

/**
 * CreateCategoryRequest is request to create a category.
 *
 * @generated from message api.v1alpha1.scorecards.CreateCategoryRequest
 */
export const CreateCategoryRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateCategoryRequest",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
  ],
);

/**
 * CreateCategoryResponse returns the created category.
 *
 * @generated from message api.v1alpha1.scorecards.CreateCategoryResponse
 */
export const CreateCategoryResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.CreateCategoryResponse",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
  ],
);

/**
 * ListCategoriesRequest is the request to list categories by some criteria.
 *
 * @generated from message api.v1alpha1.scorecards.ListCategoriesRequest
 */
export const ListCategoriesRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListCategoriesRequest",
  () => [
    { no: 2, name: "author_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "skill_profiles", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "call_types", kind: "enum", T: proto3.getEnumType(CallType_Enum), repeated: true },
    { no: 5, name: "category_type", kind: "enum", T: proto3.getEnumType(ListCategoriesRequest_CategoryType) },
  ],
);

/**
 * @generated from enum api.v1alpha1.scorecards.ListCategoriesRequest.CategoryType
 */
export const ListCategoriesRequest_CategoryType = proto3.makeEnum(
  "api.v1alpha1.scorecards.ListCategoriesRequest.CategoryType",
  [
    {no: 0, name: "ANY"},
    {no: 1, name: "SYSTEM"},
    {no: 2, name: "USER"},
  ],
);

/**
 * ListCategoriesResponse returns a list of categories.
 *
 * @generated from message api.v1alpha1.scorecards.ListCategoriesResponse
 */
export const ListCategoriesResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.ListCategoriesResponse",
  () => [
    { no: 1, name: "categories", kind: "message", T: Category, repeated: true },
  ],
);

/**
 * UpdateCategoryRequest is the request to update a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateCategoryRequest
 */
export const UpdateCategoryRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateCategoryRequest",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateCategoryResponse returns the updated category.
 *
 * @generated from message api.v1alpha1.scorecards.UpdateCategoryResponse
 */
export const UpdateCategoryResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.UpdateCategoryResponse",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
  ],
);

/**
 * DeleteCategoryRequest is request to delete a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteCategoryRequest
 */
export const DeleteCategoryRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteCategoryRequest",
  () => [
    { no: 2, name: "category_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteCategoryResponse returns the deleted category.
 *
 * @generated from message api.v1alpha1.scorecards.DeleteCategoryResponse
 */
export const DeleteCategoryResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.DeleteCategoryResponse",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
  ],
);

/**
 * GetCategoryRequest is request to get a category by id.
 *
 * @generated from message api.v1alpha1.scorecards.GetCategoryRequest
 */
export const GetCategoryRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetCategoryRequest",
  () => [
    { no: 2, name: "category_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetCategoryResponse returns the category.
 *
 * @generated from message api.v1alpha1.scorecards.GetCategoryResponse
 */
export const GetCategoryResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.GetCategoryResponse",
  () => [
    { no: 1, name: "category", kind: "message", T: Category },
  ],
);

/**
 * SampleCallsByCategoryRequest is a request to get some sample calls for evaluating
 *
 * @generated from message api.v1alpha1.scorecards.SampleCallsByCategoryRequest
 */
export const SampleCallsByCategoryRequest = proto3.makeMessageType(
  "api.v1alpha1.scorecards.SampleCallsByCategoryRequest",
  () => [
    { no: 2, name: "category_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
    { no: 4, name: "end_time", kind: "message", T: Timestamp },
    { no: 5, name: "scorer_max_evaluations", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "sample_percentage", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "agent_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "scorecard_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * SampleCallsByCategoryResponse returns the agent calls
 *
 * @generated from message api.v1alpha1.scorecards.SampleCallsByCategoryResponse
 */
export const SampleCallsByCategoryResponse = proto3.makeMessageType(
  "api.v1alpha1.scorecards.SampleCallsByCategoryResponse",
  () => [
    { no: 1, name: "agent_calls", kind: "message", T: SampleAgentCall, repeated: true },
  ],
);

/**
 * SampleAgentCall is an Agent Call returned by SampleCallsByCategory
 *
 * @generated from message api.v1alpha1.scorecards.SampleAgentCall
 */
export const SampleAgentCall = proto3.makeMessageType(
  "api.v1alpha1.scorecards.SampleAgentCall",
  () => [
    { no: 1, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 3, name: "call_start", kind: "message", T: Timestamp },
    { no: 4, name: "call_duration", kind: "message", T: Duration },
    { no: 5, name: "speech", kind: "message", T: Duration },
    { no: 6, name: "silence", kind: "message", T: Duration },
    { no: 7, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

