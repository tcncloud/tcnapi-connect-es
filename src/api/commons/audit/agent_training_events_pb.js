// @generated by protoc-gen-es v1.4.2 with parameter "target=js+dts"
// @generated from file api/commons/audit/agent_training_events.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { LearningOpportunity } from "../agent_training_pb.js";

/**
 * AgentTrainingCreateLearningOpportunityEvent - when a learning opportunity is created
 *
 * @generated from message api.commons.audit.AgentTrainingCreateLearningOpportunityEvent
 */
export const AgentTrainingCreateLearningOpportunityEvent = proto3.makeMessageType(
  "api.commons.audit.AgentTrainingCreateLearningOpportunityEvent",
  () => [
    { no: 1, name: "learning_opportunity", kind: "message", T: LearningOpportunity },
  ],
);

