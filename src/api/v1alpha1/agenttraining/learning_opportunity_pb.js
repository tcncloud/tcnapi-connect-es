// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/agenttraining/learning_opportunity.proto (package api.v1alpha1.agenttraining, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { CallIdentifier, LearningOpportunity } from "../../commons/agent_training_pb.js";
import { TimeFilter } from "../../commons/scorecards_pb.js";

/**
 * CreateLearningOpportunityRequest represents a request to create a new learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CreateLearningOpportunityRequest
 */
export const CreateLearningOpportunityRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.CreateLearningOpportunityRequest",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

/**
 * CreateLearningOpportunityResponse represents the created learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CreateLearningOpportunityResponse
 */
export const CreateLearningOpportunityResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.CreateLearningOpportunityResponse",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

/**
 * ListLearningOpportunitiesRequest represents a request to list learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListLearningOpportunitiesRequest
 */
export const ListLearningOpportunitiesRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.ListLearningOpportunitiesRequest",
  () => [
    { no: 2, name: "call_identifiers", kind: "message", T: CallIdentifier, repeated: true },
    { no: 3, name: "transcript_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "agent_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "created_at", kind: "message", T: TimeFilter },
  ],
);

/**
 * ListLearningOpportunitiesResponse represents the listed learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListLearningOpportunitiesResponse
 */
export const ListLearningOpportunitiesResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.ListLearningOpportunitiesResponse",
  () => [
    { no: 1, name: "learning_opportunities", kind: "message", T: LearningOpportunity, repeated: true },
  ],
);

/**
 * ListAgentLearningOpportunitiesRequest represents a request to list learning opportunities by agent.
 *
 * @generated from message api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesRequest
 */
export const ListAgentLearningOpportunitiesRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesRequest",
  () => [
    { no: 2, name: "call_identifiers", kind: "message", T: CallIdentifier, repeated: true },
    { no: 3, name: "transcript_sids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "created_at", kind: "message", T: TimeFilter },
  ],
);

/**
 * ListAgentLearningOpportunitiesResponse represents the listed learning opportunities.
 *
 * @generated from message api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesResponse
 */
export const ListAgentLearningOpportunitiesResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.ListAgentLearningOpportunitiesResponse",
  () => [
    { no: 1, name: "learning_opportunities", kind: "message", T: LearningOpportunity, repeated: true },
  ],
);

/**
 * UpdateLearningOpportunityRequest represents a request to update a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.UpdateLearningOpportunityRequest
 */
export const UpdateLearningOpportunityRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.UpdateLearningOpportunityRequest",
  () => [
    { no: 2, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateLearningOpportunityResponse represents the updated learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.UpdateLearningOpportunityResponse
 */
export const UpdateLearningOpportunityResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.UpdateLearningOpportunityResponse",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

/**
 * CompleteAgentLearningOpportunityRequest represents an agent
 * request to complete a learning opportunity assigned to that agent.
 *
 * @generated from message api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityRequest
 */
export const CompleteAgentLearningOpportunityRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityRequest",
  () => [
    { no: 3, name: "learning_opportunity_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * CompleteAgentLearningOpportunityResponse represents the completed learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityResponse
 */
export const CompleteAgentLearningOpportunityResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.CompleteAgentLearningOpportunityResponse",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

/**
 * DeleteLearningOpportunityRequest represents a request to delete a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.DeleteLearningOpportunityRequest
 */
export const DeleteLearningOpportunityRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.DeleteLearningOpportunityRequest",
  () => [
    { no: 3, name: "learning_opportunity_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * DeleteLearningOpportunityResponse represents the deleted learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.DeleteLearningOpportunityResponse
 */
export const DeleteLearningOpportunityResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.DeleteLearningOpportunityResponse",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

/**
 * GetLearningOpportunityRequest represents a request to get a learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.GetLearningOpportunityRequest
 */
export const GetLearningOpportunityRequest = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.GetLearningOpportunityRequest",
  () => [
    { no: 2, name: "learning_opportunity", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * GetLearningOpportunityResponse represents the gotten learning opportunity.
 *
 * @generated from message api.v1alpha1.agenttraining.GetLearningOpportunityResponse
 */
export const GetLearningOpportunityResponse = proto3.makeMessageType(
  "api.v1alpha1.agenttraining.GetLearningOpportunityResponse",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

