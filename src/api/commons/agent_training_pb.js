// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/agent_training.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CallType_Enum } from "./acd_pb.js";

/**
 * LearningOpportunityStatus describes the status of the learning opportunity.
 *
 * @generated from enum api.commons.LearningOpportunityStatus
 */
export const LearningOpportunityStatus = proto3.makeEnum(
  "api.commons.LearningOpportunityStatus",
  [
    {no: 0, name: "STATUS_OPEN"},
    {no: 1, name: "STATUS_COMPLETED"},
  ],
);

/**
 * LearningOpportunity represents a single learning opportunity entity.
 *
 * @generated from message api.commons.LearningOpportunity
 */
export const LearningOpportunity = proto3.makeMessageType(
  "api.commons.LearningOpportunity",
  () => [
    { no: 2, name: "learning_opportunity_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "call_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "call_type", kind: "enum", T: proto3.getEnumType(CallType_Enum) },
    { no: 5, name: "transcript_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "agent_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "start_offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "end_offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 9, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "status", kind: "enum", T: proto3.getEnumType(LearningOpportunityStatus) },
  ],
);

