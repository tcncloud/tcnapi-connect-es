// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file api/commons/results.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.CallResult
 */
export const CallResult = proto3.makeEnum(
  "api.commons.CallResult",
  [
    {no: 0, name: "CALL_RESULT_UNKNOWN", localName: "UNKNOWN"},
    {no: 1000, name: "CALL_RESULT_PENDING", localName: "PENDING"},
    {no: 2000, name: "CALL_RESULT_ANSWERED", localName: "ANSWERED"},
    {no: 2100, name: "CALL_RESULT_ANSWERED_LINKCALL", localName: "ANSWERED_LINKCALL"},
    {no: 2110, name: "CALL_RESULT_ANSWERED_LINKCALL_ABANDONED", localName: "ANSWERED_LINKCALL_ABANDONED"},
    {no: 2120, name: "CALL_RESULT_ANSWERED_LINKCALL_AGENT_TALK", localName: "ANSWERED_LINKCALL_AGENT_TALK"},
    {no: 2130, name: "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED", localName: "ANSWERED_LINKCALL_SUSPENDED"},
    {no: 2140, name: "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_TIMEOUT", localName: "ANSWERED_LINKCALL_SUSPENDED_TIMEOUT"},
    {no: 2150, name: "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_INBOUND_OVERRIDE", localName: "ANSWERED_LINKCALL_SUSPENDED_INBOUND_OVERRIDE"},
    {no: 2160, name: "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_RESUMED", localName: "ANSWERED_LINKCALL_SUSPENDED_RESUMED"},
    {no: 2200, name: "CALL_RESULT_ANSWERED_HANGUP", localName: "ANSWERED_HANGUP"},
    {no: 2300, name: "CALL_RESULT_ANSWERED_VOICEMAIL", localName: "ANSWERED_VOICEMAIL"},
    {no: 3000, name: "CALL_RESULT_MACHINE", localName: "MACHINE"},
    {no: 3100, name: "CALL_RESULT_MACHINE_DELIVERED", localName: "MACHINE_DELIVERED"},
    {no: 3200, name: "CALL_RESULT_MACHINE_HANGUP", localName: "MACHINE_HANGUP"},
    {no: 3300, name: "CALL_RESULT_MACHINE_FAILED", localName: "MACHINE_FAILED"},
    {no: 4000, name: "CALL_RESULT_FAX", localName: "FAX"},
    {no: 4100, name: "CALL_RESULT_FAX_DELIVERED", localName: "FAX_DELIVERED"},
    {no: 5000, name: "CALL_RESULT_BUSY", localName: "BUSY"},
    {no: 6000, name: "CALL_RESULT_NO_ANSWER", localName: "NO_ANSWER"},
    {no: 7000, name: "CALL_RESULT_INVALID", localName: "INVALID"},
    {no: 7100, name: "CALL_RESULT_INVALID_INCOMPLETE_NUMBER", localName: "INVALID_INCOMPLETE_NUMBER"},
    {no: 7200, name: "CALL_RESULT_INVALID_UNKNOWN_PREFIX", localName: "INVALID_UNKNOWN_PREFIX"},
    {no: 7210, name: "CALL_RESULT_INVALID_UNKNOWN_PREFIX_NPA", localName: "INVALID_UNKNOWN_PREFIX_NPA"},
    {no: 7220, name: "CALL_RESULT_INVALID_UNKNOWN_PREFIX_NPANXX", localName: "INVALID_UNKNOWN_PREFIX_NPANXX"},
    {no: 7230, name: "CALL_RESULT_INVALID_PREFIX_NPANXX_NOT_FOUND", localName: "INVALID_PREFIX_NPANXX_NOT_FOUND"},
    {no: 7300, name: "CALL_RESULT_INVALID_NO_ROUTE", localName: "INVALID_NO_ROUTE"},
    {no: 7400, name: "CALL_RESULT_INVALID_DISCONNECTED", localName: "INVALID_DISCONNECTED"},
    {no: 7410, name: "CALL_RESULT_INVALID_DISCONNECTED_SKIPTRACE", localName: "INVALID_DISCONNECTED_SKIPTRACE"},
    {no: 8000, name: "CALL_RESULT_FAILED", localName: "FAILED"},
    {no: 8100, name: "CALL_RESULT_FAILED_NO_LINES", localName: "FAILED_NO_LINES"},
    {no: 8200, name: "CALL_RESULT_FAILED_CIRCUITS_BUSY", localName: "FAILED_CIRCUITS_BUSY"},
    {no: 8300, name: "CALL_RESULT_FAILED_REFUSED", localName: "FAILED_REFUSED"},
    {no: 8310, name: "CALL_RESULT_FAILED_REFUSED_LEGAL", localName: "FAILED_REFUSED_LEGAL"},
    {no: 8320, name: "CALL_RESULT_FAILED_REFUSED_TECHNICAL", localName: "FAILED_REFUSED_TECHNICAL"},
    {no: 8330, name: "CALL_RESULT_FAILED_INTERNAL_ERROR", localName: "FAILED_INTERNAL_ERROR"},
    {no: 8340, name: "CALL_RESULT_FAILED_REFUSED_RETRIES_EXHAUSTED", localName: "FAILED_REFUSED_RETRIES_EXHAUSTED"},
    {no: 8350, name: "CALL_RESULT_FAILED_REFUSED_BLOCK", localName: "FAILED_REFUSED_BLOCK"},
    {no: 9000, name: "CALL_RESULT_CANCELED", localName: "CANCELED"},
    {no: 9100, name: "CALL_RESULT_CANCELED_TIMEZONE", localName: "CANCELED_TIMEZONE"},
    {no: 9200, name: "CALL_RESULT_CANCELED_TIMEOUT", localName: "CANCELED_TIMEOUT"},
    {no: 9300, name: "CALL_RESULT_CANCELED_DNCL", localName: "CANCELED_DNCL"},
    {no: 9310, name: "CALL_RESULT_CANCELED_CELLULAR_DNCL", localName: "CANCELED_CELLULAR_DNCL"},
    {no: 9320, name: "CALL_RESULT_CANCELED_DNCL_ZIP_CODE", localName: "CANCELED_DNCL_ZIP_CODE"},
    {no: 9400, name: "CALL_RESULT_CANCELED_MAX_RETRY", localName: "CANCELED_MAX_RETRY"},
    {no: 9500, name: "CALL_RESULT_CANCELED_INCOMPLETE_NUMBER", localName: "CANCELED_INCOMPLETE_NUMBER"},
  ],
);

