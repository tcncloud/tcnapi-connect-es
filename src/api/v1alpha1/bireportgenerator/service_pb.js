// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/bireportgenerator/service.proto (package api.v1alpha1.bireportgenerator, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { ReportJob } from "./entities_pb.js";

/**
 * CreateReportJobRequest is the request for creating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.CreateReportJobRequest
 */
export const CreateReportJobRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.CreateReportJobRequest",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
  ],
);

/**
 * CreateReportJobResponse is the response for creating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.CreateReportJobResponse
 */
export const CreateReportJobResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.CreateReportJobResponse",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
  ],
);

/**
 * ListReportJobsRequest is the request for listing report jobs.
 *
 * @generated from message api.v1alpha1.bireportgenerator.ListReportJobsRequest
 */
export const ListReportJobsRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.ListReportJobsRequest",
  [],
);

/**
 * ListReportJobsResponse is the response for listing report jobs.
 *
 * @generated from message api.v1alpha1.bireportgenerator.ListReportJobsResponse
 */
export const ListReportJobsResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.ListReportJobsResponse",
  () => [
    { no: 1, name: "report_jobs", kind: "message", T: ReportJob, repeated: true },
  ],
);

/**
 * UpdateReportJobRequest is the request for updating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.UpdateReportJobRequest
 */
export const UpdateReportJobRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.UpdateReportJobRequest",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * UpdateReportJobResponse is the response for updating a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.UpdateReportJobResponse
 */
export const UpdateReportJobResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.UpdateReportJobResponse",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
  ],
);

/**
 * DeleteReportJobRequest is the request for deleting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.DeleteReportJobRequest
 */
export const DeleteReportJobRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.DeleteReportJobRequest",
  () => [
    { no: 1, name: "report_job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteReportJobResponse is the response for deleting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.DeleteReportJobResponse
 */
export const DeleteReportJobResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.DeleteReportJobResponse",
  [],
);

/**
 * GetReportJobRequest is the request for getting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GetReportJobRequest
 */
export const GetReportJobRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.GetReportJobRequest",
  () => [
    { no: 1, name: "report_job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetReportJobResponse is the response for getting a report job.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GetReportJobResponse
 */
export const GetReportJobResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.GetReportJobResponse",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
  ],
);

/**
 * GenerateReportRequest is the request for generating a report.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GenerateReportRequest
 */
export const GenerateReportRequest = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.GenerateReportRequest",
  () => [
    { no: 1, name: "report_job", kind: "message", T: ReportJob },
    { no: 2, name: "report_job_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GenerateReportResponse is the response for generating a report.
 *
 * @generated from message api.v1alpha1.bireportgenerator.GenerateReportResponse
 */
export const GenerateReportResponse = proto3.makeMessageType(
  "api.v1alpha1.bireportgenerator.GenerateReportResponse",
  [],
);

