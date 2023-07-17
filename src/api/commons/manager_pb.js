// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/commons/manager.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.AgentInfo
 */
export const AgentInfo = proto3.makeEnum(
  "api.commons.AgentInfo",
  [
    {no: 0, name: "AGENT_INFO_ACTIVE_AGENTS", localName: "ACTIVE_AGENTS"},
    {no: 1, name: "AGENT_INFO_IN_CONFERENCE_AGENTS", localName: "IN_CONFERENCE_AGENTS"},
    {no: 2, name: "AGENT_INFO_MANUAL_AGENTS", localName: "MANUAL_AGENTS"},
    {no: 3, name: "AGENT_INFO_PAUSED_AGENTS", localName: "PAUSED_AGENTS"},
    {no: 4, name: "AGENT_INFO_PREVIEW_AGENTS", localName: "PREVIEW_AGENTS"},
    {no: 5, name: "AGENT_INFO_READY_AGENTS", localName: "READY_AGENTS"},
    {no: 6, name: "AGENT_INFO_TOTAL_AGENTS", localName: "TOTAL_AGENTS"},
    {no: 7, name: "AGENT_INFO_TRANSFER_AGENTS", localName: "TRANSFER_AGENTS"},
    {no: 8, name: "AGENT_INFO_WRAP_UP_AGENTS", localName: "WRAP_UP_AGENTS"},
  ],
);

/**
 * @generated from enum api.commons.SkillStats
 */
export const SkillStats = proto3.makeEnum(
  "api.commons.SkillStats",
  [
    {no: 0, name: "SKILL_STATS_AGENT_PEERED_CALLS", localName: "AGENT_PEERED_CALLS"},
    {no: 1, name: "SKILL_STATS_AVERAGE_LENGTH", localName: "AVERAGE_LENGTH"},
    {no: 2, name: "SKILL_STATS_CALL_COUNT", localName: "CALL_COUNT"},
    {no: 3, name: "SKILL_STATS_CALL_SKILL_MAP", localName: "CALL_SKILL_MAP"},
    {no: 4, name: "SKILL_STATS_CALL_TYPE", localName: "CALL_TYPE"},
    {no: 5, name: "SKILL_STATS_CALLS_LIST", localName: "CALLS_LIST"},
    {no: 6, name: "SKILL_STATS_DAILY_BY_SKILLS_KEY", localName: "DAILY_BY_SKILLS_KEY"},
    {no: 7, name: "SKILL_STATS_LONGEST_IN_QUEUE", localName: "LONGEST_IN_QUEUE"},
    {no: 8, name: "SKILL_STATS_MATCHING_AGENTS_MD", localName: "MATCHING_AGENTS_MD"},
    {no: 9, name: "SKILL_STATS_MATCHING_AGENTS_PC", localName: "MATCHING_AGENTS_PC"},
    {no: 10, name: "SKILL_STATS_MATCHING_AGENTS_LI", localName: "MATCHING_AGENTS_LI"},
    {no: 11, name: "SKILL_STATS_MATCHING_AGENTS_OC", localName: "MATCHING_AGENTS_OC"},
    {no: 12, name: "SKILL_STATS_MATCHING_AGENTS_P", localName: "MATCHING_AGENTS_P"},
    {no: 13, name: "SKILL_STATS_MATCHING_AGENTS_W", localName: "MATCHING_AGENTS_W"},
    {no: 14, name: "SKILL_STATS_MATCHING_AGENTS_WU", localName: "MATCHING_AGENTS_WU"},
    {no: 15, name: "SKILL_STATS_MATCHING_AGENTS_TC", localName: "MATCHING_AGENTS_TC"},
    {no: 16, name: "SKILL_STATS_MAXIMUM_LENGTH", localName: "MAXIMUM_LENGTH"},
    {no: 17, name: "SKILL_STATS_MINIMUM_LENGTH", localName: "MINIMUM_LENGTH"},
    {no: 18, name: "SKILL_STATS_PBX_EXTENSION", localName: "PBX_EXTENSION"},
    {no: 19, name: "SKILL_STATS_QUEUED_NOTIFICATION_TYPE", localName: "QUEUED_NOTIFICATION_TYPE"},
    {no: 20, name: "SKILL_STATS_SKILL_SET", localName: "SKILL_SET"},
    {no: 21, name: "SKILL_STATS_TOTAL_LENGTH_FOR_AVERAGE", localName: "TOTAL_LENGTH_FOR_AVERAGE"},
  ],
);

/**
 * @generated from enum api.commons.SkillQueues
 */
export const SkillQueues = proto3.makeEnum(
  "api.commons.SkillQueues",
  [
    {no: 0, name: "SKILL_QUEUES_ACD_QUEUE", localName: "ACD_QUEUE"},
    {no: 1, name: "SKILL_QUEUES_MULTI_HOLD", localName: "MULTI_HOLD"},
    {no: 2, name: "SKILL_QUEUES_SIMPLE_HOLD", localName: "SIMPLE_HOLD"},
    {no: 3, name: "SKILL_QUEUES_TRANSFER", localName: "TRANSFER"},
    {no: 4, name: "SKILL_QUEUES_SUSPENDED_CALLBACK", localName: "SUSPENDED_CALLBACK"},
    {no: 5, name: "SKILL_QUEUES_GRAND_TOTALS", localName: "GRAND_TOTALS"},
  ],
);

/**
 * @generated from enum api.commons.AgentStats
 */
export const AgentStats = proto3.makeEnum(
  "api.commons.AgentStats",
  [
    {no: 0, name: "AGENT_STATS_AGENT_NAME", localName: "AGENT_NAME"},
    {no: 1, name: "AGENT_STATS_AGENT_STATUS", localName: "AGENT_STATUS"},
    {no: 2, name: "AGENT_STATS_DURATION_IN_STATUS", localName: "DURATION_IN_STATUS"},
    {no: 3, name: "AGENT_STATS_LOGIN_DATE_TIME", localName: "LOGIN_DATE_TIME"},
    {no: 4, name: "AGENT_STATS_LOGIN_DURATION", localName: "LOGIN_DURATION"},
    {no: 5, name: "AGENT_STATS_AGENT_SKILLS", localName: "AGENT_SKILLS"},
    {no: 6, name: "AGENT_STATS_AGENT_SID", localName: "AGENT_SID"},
    {no: 7, name: "AGENT_STATS_SESSION_ID", localName: "SESSION_ID"},
    {no: 8, name: "AGENT_STATS_HUNT_GROUP_NAME", localName: "HUNT_GROUP_NAME"},
    {no: 9, name: "AGENT_STATS_CALL_COUNT", localName: "CALL_COUNT"},
    {no: 10, name: "AGENT_STATS_PAUSE_CODE", localName: "PAUSE_CODE"},
    {no: 11, name: "AGENT_STATS_RECORDING_STATUS", localName: "RECORDING_STATUS"},
    {no: 12, name: "AGENT_STATS_MULTI_HOLD_COUNT", localName: "MULTI_HOLD_COUNT"},
    {no: 13, name: "AGENT_STATS_SIMPLE_HOLD_COUNT", localName: "SIMPLE_HOLD_COUNT"},
    {no: 14, name: "AGENT_STATS_TOTAL_HOLD_COUNT", localName: "TOTAL_HOLD_COUNT"},
  ],
);

/**
 * @generated from enum api.commons.ManagerBargeInMode
 */
export const ManagerBargeInMode = proto3.makeEnum(
  "api.commons.ManagerBargeInMode",
  [
    {no: 0, name: "MONITOR"},
    {no: 1, name: "FULL_CONFERENCE"},
    {no: 2, name: "AGENT_WHISPER"},
  ],
);

