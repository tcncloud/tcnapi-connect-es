// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file google/api/client.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { LaunchStage } from "./launch_stage_pb.js";

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 *
 * @generated from enum google.api.ClientLibraryOrganization
 */
export const ClientLibraryOrganization = proto3.makeEnum(
  "google.api.ClientLibraryOrganization",
  [
    {no: 0, name: "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED"},
    {no: 1, name: "CLOUD"},
    {no: 2, name: "ADS"},
    {no: 3, name: "PHOTOS"},
    {no: 4, name: "STREET_VIEW"},
    {no: 5, name: "SHOPPING"},
    {no: 6, name: "GEO"},
    {no: 7, name: "GENERATIVE_AI"},
  ],
);

/**
 * To where should client libraries be published?
 *
 * @generated from enum google.api.ClientLibraryDestination
 */
export const ClientLibraryDestination = proto3.makeEnum(
  "google.api.ClientLibraryDestination",
  [
    {no: 0, name: "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"},
    {no: 10, name: "GITHUB"},
    {no: 20, name: "PACKAGE_MANAGER"},
  ],
);

/**
 * Required information for every language.
 *
 * @generated from message google.api.CommonLanguageSettings
 */
export const CommonLanguageSettings = proto3.makeMessageType(
  "google.api.CommonLanguageSettings",
  () => [
    { no: 1, name: "reference_docs_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "destinations", kind: "enum", T: proto3.getEnumType(ClientLibraryDestination), repeated: true },
  ],
);

/**
 * Details about how and where to publish client libraries.
 *
 * @generated from message google.api.ClientLibrarySettings
 */
export const ClientLibrarySettings = proto3.makeMessageType(
  "google.api.ClientLibrarySettings",
  () => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "launch_stage", kind: "enum", T: proto3.getEnumType(LaunchStage) },
    { no: 3, name: "rest_numeric_enums", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 21, name: "java_settings", kind: "message", T: JavaSettings },
    { no: 22, name: "cpp_settings", kind: "message", T: CppSettings },
    { no: 23, name: "php_settings", kind: "message", T: PhpSettings },
    { no: 24, name: "python_settings", kind: "message", T: PythonSettings },
    { no: 25, name: "node_settings", kind: "message", T: NodeSettings },
    { no: 26, name: "dotnet_settings", kind: "message", T: DotnetSettings },
    { no: 27, name: "ruby_settings", kind: "message", T: RubySettings },
    { no: 28, name: "go_settings", kind: "message", T: GoSettings },
  ],
);

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 *
 * @generated from message google.api.Publishing
 */
export const Publishing = proto3.makeMessageType(
  "google.api.Publishing",
  () => [
    { no: 2, name: "method_settings", kind: "message", T: MethodSettings, repeated: true },
    { no: 101, name: "new_issue_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 102, name: "documentation_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 103, name: "api_short_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 104, name: "github_label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 105, name: "codeowner_github_teams", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 106, name: "doc_tag_prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 107, name: "organization", kind: "enum", T: proto3.getEnumType(ClientLibraryOrganization) },
    { no: 109, name: "library_settings", kind: "message", T: ClientLibrarySettings, repeated: true },
    { no: 110, name: "proto_reference_documentation_uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Settings for Java client libraries.
 *
 * @generated from message google.api.JavaSettings
 */
export const JavaSettings = proto3.makeMessageType(
  "google.api.JavaSettings",
  () => [
    { no: 1, name: "library_package", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "service_class_names", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for C++ client libraries.
 *
 * @generated from message google.api.CppSettings
 */
export const CppSettings = proto3.makeMessageType(
  "google.api.CppSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for Php client libraries.
 *
 * @generated from message google.api.PhpSettings
 */
export const PhpSettings = proto3.makeMessageType(
  "google.api.PhpSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for Python client libraries.
 *
 * @generated from message google.api.PythonSettings
 */
export const PythonSettings = proto3.makeMessageType(
  "google.api.PythonSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for Node client libraries.
 *
 * @generated from message google.api.NodeSettings
 */
export const NodeSettings = proto3.makeMessageType(
  "google.api.NodeSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for Dotnet client libraries.
 *
 * @generated from message google.api.DotnetSettings
 */
export const DotnetSettings = proto3.makeMessageType(
  "google.api.DotnetSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
    { no: 2, name: "renamed_services", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 3, name: "renamed_resources", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 4, name: "ignored_resources", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "forced_namespace_aliases", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "handwritten_signatures", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Settings for Ruby client libraries.
 *
 * @generated from message google.api.RubySettings
 */
export const RubySettings = proto3.makeMessageType(
  "google.api.RubySettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Settings for Go client libraries.
 *
 * @generated from message google.api.GoSettings
 */
export const GoSettings = proto3.makeMessageType(
  "google.api.GoSettings",
  () => [
    { no: 1, name: "common", kind: "message", T: CommonLanguageSettings },
  ],
);

/**
 * Describes the generator configuration for a method.
 *
 * @generated from message google.api.MethodSettings
 */
export const MethodSettings = proto3.makeMessageType(
  "google.api.MethodSettings",
  () => [
    { no: 1, name: "selector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "long_running", kind: "message", T: MethodSettings_LongRunning },
  ],
);

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 *
 * @generated from message google.api.MethodSettings.LongRunning
 */
export const MethodSettings_LongRunning = proto3.makeMessageType(
  "google.api.MethodSettings.LongRunning",
  () => [
    { no: 1, name: "initial_poll_delay", kind: "message", T: Duration },
    { no: 2, name: "poll_delay_multiplier", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "max_poll_delay", kind: "message", T: Duration },
    { no: 4, name: "total_poll_timeout", kind: "message", T: Duration },
  ],
  {localName: "MethodSettings_LongRunning"},
);
