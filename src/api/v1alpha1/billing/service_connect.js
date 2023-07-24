// @generated by protoc-gen-connect-es v0.11.0
// @generated from file api/v1alpha1/billing/service.proto (package api.v1alpha1.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ExportGeneratedInvoiceReq, ExportGeneratedInvoiceRes, GetBillingPlanReq, GetBillingPlanRes, GetInvoiceReq, GetInvoiceRes, UpdateBillingPlanReq, UpdateBillingPlanRes } from "./entities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Billing service for handling billing requests.
 *
 * @generated from service api.v1alpha1.billing.Billing
 */
export const Billing = {
  typeName: "api.v1alpha1.billing.Billing",
  methods: {
    /**
     * GetBillingPlan - returns the billing plan for the provided organization.
     *
     * @generated from rpc api.v1alpha1.billing.Billing.GetBillingPlan
     */
    getBillingPlan: {
      name: "GetBillingPlan",
      I: GetBillingPlanReq,
      O: GetBillingPlanRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateBillingPlan - updates the provided billing plan and it's details.
     * If some details are not provided, they will be left as is. However, if
     * deletion is desired, the DeleteBillingDetails method should be used. The
     * billing plan still follows the constraint of only having one billing detail
     * with a specific config type and event type, and so if the request contains
     * more than one billing detail with a config type and event type, the request
     * is malformed and will result in potentially unexpected behavior.
     *
     * @generated from rpc api.v1alpha1.billing.Billing.UpdateBillingPlan
     */
    updateBillingPlan: {
      name: "UpdateBillingPlan",
      I: UpdateBillingPlanReq,
      O: UpdateBillingPlanRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetInvoice - returns the invoice for the organization.
     * If a date is provided, this will return the invoice for the
     * organization that corresponds to the billing cycle that contains
     * the provided date. If no date is provided, this will return the
     * invoice as it currently stands for the current billing cycle.
     *
     * @generated from rpc api.v1alpha1.billing.Billing.GetInvoice
     */
    getInvoice: {
      name: "GetInvoice",
      I: GetInvoiceReq,
      O: GetInvoiceRes,
      kind: MethodKind.Unary,
    },
    /**
     * ExportGeneratedInvoice - returns the invoice for the organization.
     * If a date is provided, this will return the invoice for the
     * organization that corresponds to the billing cycle that contains
     * the provided date. If no date is provided, this will return the
     * invoice, as it has been last generated, for the current billing cycle.
     * This differs from GetInvoice in that it returns the invoice as
     * it was last generated. It will not take into account new billing
     * events since the last generation.
     *
     * @generated from rpc api.v1alpha1.billing.Billing.ExportGeneratedInvoice
     */
    exportGeneratedInvoice: {
      name: "ExportGeneratedInvoice",
      I: ExportGeneratedInvoiceReq,
      O: ExportGeneratedInvoiceRes,
      kind: MethodKind.Unary,
    },
  }
};

