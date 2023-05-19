// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v1alpha1/integrations/service.proto (package api.v1alpha1.integrations, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreatePaymentPortalLinksReq, CreatePaymentPortalLinksRes, DeleteIntegrationConfigReq, DeletePortalConfigReq, Empty, GetAggregatedMetadataReq, GetAggregatedMetadataRes, GetIntegrationConfigReq, GetIntegrationTransactionReportDataReq, GetIntegrationTransactionReportDataRes, GetIntegrationTransactionReportReq, GetIntegrationTransactionReportRes, GetIntegrationTransactionReq, GetPortalConfigReq, GetPortalLinksByDateRangeReq, GetPortalLinksByDateRangeRes, GetPortalLogoReq, IntegrationConfig, IntegrationConfigs, IntegrationInfos, IntegrationTransaction, ListIntegrationConfigNamesReq, ListIntegrationConfigNamesRes, ListIntegrationTemplatesByConfigReq, ListIntegrationTemplatesByConfigRes, ListJourneyConfigsReq, ListNonJourneyConfigsReq, ListPortalConfigsReq, Logo, PortalConfig, PortalConfigs, ProcessReq, ProcessRes, SummaryReq, SummaryRes, UpdateIntegrationConfigReq, UpdatePortalLogoReq } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.integrations.Integrations
 */
export const Integrations = {
  typeName: "api.v1alpha1.integrations.Integrations",
  methods: {
    /**
     * combine rquest parameters with the config parameters and run the integration method
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.Process
     */
    process: {
      name: "Process",
      I: ProcessReq,
      O: ProcessRes,
      kind: MethodKind.Unary,
    },
    /**
     * get an integration transaction
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetIntegrationTransaction
     */
    getIntegrationTransaction: {
      name: "GetIntegrationTransaction",
      I: GetIntegrationTransactionReq,
      O: IntegrationTransaction,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetIntegrationTransactionReport
     */
    getIntegrationTransactionReport: {
      name: "GetIntegrationTransactionReport",
      I: GetIntegrationTransactionReportReq,
      O: GetIntegrationTransactionReportRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetIntegrationTransactionReportData
     */
    getIntegrationTransactionReportData: {
      name: "GetIntegrationTransactionReportData",
      I: GetIntegrationTransactionReportDataReq,
      O: GetIntegrationTransactionReportDataRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetAggregatedMetadata returns the aggregated metrics about the portal links for a specified date range
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetAggregatedMetadata
     */
    getAggregatedMetadata: {
      name: "GetAggregatedMetadata",
      I: GetAggregatedMetadataReq,
      O: GetAggregatedMetadataRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetPortalLinksByDateRange returns portal link metrics and portal linnk data for specific range
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetPortalLinksByDateRange
     */
    getPortalLinksByDateRange: {
      name: "GetPortalLinksByDateRange",
      I: GetPortalLinksByDateRangeReq,
      O: GetPortalLinksByDateRangeRes,
      kind: MethodKind.Unary,
    },
    /**
     * create a integration config
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.CreateIntegrationConfig
     */
    createIntegrationConfig: {
      name: "CreateIntegrationConfig",
      I: IntegrationConfig,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * get an integration config
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetIntegrationConfig
     */
    getIntegrationConfig: {
      name: "GetIntegrationConfig",
      I: GetIntegrationConfigReq,
      O: IntegrationConfig,
      kind: MethodKind.Unary,
    },
    /**
     * update an integration config
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.UpdateIntegrationConfig
     */
    updateIntegrationConfig: {
      name: "UpdateIntegrationConfig",
      I: UpdateIntegrationConfigReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * delete an integration config
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.DeleteIntegrationConfig
     */
    deleteIntegrationConfig: {
      name: "DeleteIntegrationConfig",
      I: DeleteIntegrationConfigReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * list all supported integrations
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListIntegrations
     */
    listIntegrations: {
      name: "ListIntegrations",
      I: Empty,
      O: IntegrationInfos,
      kind: MethodKind.Unary,
    },
    /**
     * lists all the names of the configs for an org's integration type
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListIntegrationConfigNames
     */
    listIntegrationConfigNames: {
      name: "ListIntegrationConfigNames",
      I: ListIntegrationConfigNamesReq,
      O: ListIntegrationConfigNamesRes,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListJourneyConfigs
     */
    listJourneyConfigs: {
      name: "ListJourneyConfigs",
      I: ListJourneyConfigsReq,
      O: IntegrationConfigs,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListNonJourneyConfigs
     */
    listNonJourneyConfigs: {
      name: "ListNonJourneyConfigs",
      I: ListNonJourneyConfigsReq,
      O: IntegrationConfigs,
      kind: MethodKind.Unary,
    },
    /**
     * TODO all services looking for payment portal configs should be using the
     * PortalManagerApi service in this same packages
     * CLUDG for the payment portal configs
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.CreatePortalConfig
     */
    createPortalConfig: {
      name: "CreatePortalConfig",
      I: PortalConfig,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * TODO better signature
     * rpc ListPortalConfigs(ListPortalConfigsReq) returns (ListPortalConfigsRes);
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListPortalConfigs
     */
    listPortalConfigs: {
      name: "ListPortalConfigs",
      I: ListPortalConfigsReq,
      O: PortalConfigs,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrations.Integrations.UpdatePortalConfig
     */
    updatePortalConfig: {
      name: "UpdatePortalConfig",
      I: PortalConfig,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * TODO better signature
     * rpc GetPortalConfig(GetPortalConfigReq) returns (GetPortalConfigRes);
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetPortalConfig
     */
    getPortalConfig: {
      name: "GetPortalConfig",
      I: GetPortalConfigReq,
      O: PortalConfig,
      kind: MethodKind.Unary,
    },
    /**
     * TODO better signature
     * rpc DeletePortalConfig(DeletePortalConfigReq) returns (DeletePortalConfigRes);
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.DeletePortalConfig
     */
    deletePortalConfig: {
      name: "DeletePortalConfig",
      I: DeletePortalConfigReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * TODO deprecate
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.UpdatePortalLogo
     */
    updatePortalLogo: {
      name: "UpdatePortalLogo",
      I: UpdatePortalLogoReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * TODO deprecate
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.GetPortalLogo
     */
    getPortalLogo: {
      name: "GetPortalLogo",
      I: GetPortalLogoReq,
      O: Logo,
      kind: MethodKind.Unary,
    },
    /**
     * TODO deprecate. use CreatePortalLinks on the PortalManagerApi
     * pulls the payment_link_config
     * creates an integration config for each set of data, and generates a url for the specific user
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.CreatePaymentPortalLinks
     */
    createPaymentPortalLinks: {
      name: "CreatePaymentPortalLinks",
      I: CreatePaymentPortalLinksReq,
      O: CreatePaymentPortalLinksRes,
      kind: MethodKind.Unary,
    },
    /**
     * takes a year in YYYY format and returns the summary of transaction for that year
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.Summary
     */
    summary: {
      name: "Summary",
      I: SummaryReq,
      O: SummaryRes,
      kind: MethodKind.Unary,
    },
    /**
     * Lists integration templates that use the passed in integration config
     *
     * @generated from rpc api.v1alpha1.integrations.Integrations.ListIntegrationTemplatesByConfig
     */
    listIntegrationTemplatesByConfig: {
      name: "ListIntegrationTemplatesByConfig",
      I: ListIntegrationTemplatesByConfigReq,
      O: ListIntegrationTemplatesByConfigRes,
      kind: MethodKind.Unary,
    },
  }
};

