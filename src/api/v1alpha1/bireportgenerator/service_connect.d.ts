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
export declare const BIReportGeneratorService: {
  readonly typeName: "api.v1alpha1.bireportgenerator.BIReportGeneratorService",
  readonly methods: {
    /**
     * CreateReportJob creates a new report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.CreateReportJob
     */
    readonly createReportJob: {
      readonly name: "CreateReportJob",
      readonly I: typeof CreateReportJobRequest,
      readonly O: typeof CreateReportJobResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListReportJobs lists report jobs.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.ListReportJobs
     */
    readonly listReportJobs: {
      readonly name: "ListReportJobs",
      readonly I: typeof ListReportJobsRequest,
      readonly O: typeof ListReportJobsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateReportJob updates a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.UpdateReportJob
     */
    readonly updateReportJob: {
      readonly name: "UpdateReportJob",
      readonly I: typeof UpdateReportJobRequest,
      readonly O: typeof UpdateReportJobResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteReportJob deletes a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.DeleteReportJob
     */
    readonly deleteReportJob: {
      readonly name: "DeleteReportJob",
      readonly I: typeof DeleteReportJobRequest,
      readonly O: typeof DeleteReportJobResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetReportJob gets a report job.
     *
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.GetReportJob
     */
    readonly getReportJob: {
      readonly name: "GetReportJob",
      readonly I: typeof GetReportJobRequest,
      readonly O: typeof GetReportJobResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.bireportgenerator.BIReportGeneratorService.GenerateReport
     */
    readonly generateReport: {
      readonly name: "GenerateReport",
      readonly I: typeof GenerateReportRequest,
      readonly O: typeof GenerateReportResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

