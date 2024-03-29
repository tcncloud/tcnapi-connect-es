// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/bireportgenerator/service.proto (package api.v1alpha1.bireportgenerator, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateReportJobRequest, CreateReportJobResponse, DeleteReportJobRequest, DeleteReportJobResponse, GenerateReportRequest, GenerateReportResponse, GetReportJobRequest, GetReportJobResponse, ListReportJobsRequest, ListReportJobsResponse, UpdateReportJobRequest, UpdateReportJobResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * BIReportGeneratorService is the service for generating BI reports.
 *
 * @generated from service api.v1alpha1.bireportgenerator.BIReportGeneratorService
 */
export const BIReportGeneratorService = {
  typeName: "api.v1alpha1.bireportgenerator.BIReportGeneratorService",
  methods: {
    /**
     * CreateReportJob creates a new report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.CreateReportJob
     */
    createReportJob: {
      name: "CreateReportJob",
      I: CreateReportJobRequest,
      O: CreateReportJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListReportJobs lists report jobs.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.ListReportJobs
     */
    listReportJobs: {
      name: "ListReportJobs",
      I: ListReportJobsRequest,
      O: ListReportJobsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateReportJob updates a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.UpdateReportJob
     */
    updateReportJob: {
      name: "UpdateReportJob",
      I: UpdateReportJobRequest,
      O: UpdateReportJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteReportJob deletes a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.DeleteReportJob
     */
    deleteReportJob: {
      name: "DeleteReportJob",
      I: DeleteReportJobRequest,
      O: DeleteReportJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetReportJob gets a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.GetReportJob
     */
    getReportJob: {
      name: "GetReportJob",
      I: GetReportJobRequest,
      O: GetReportJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.GenerateReport
     */
    generateReport: {
      name: "GenerateReport",
      I: GenerateReportRequest,
      O: GenerateReportResponse,
      kind: MethodKind.Unary,
    },
  }
};

