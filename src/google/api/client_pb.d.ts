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

// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file google/api/client.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { LaunchStage } from "./launch_stage_pb.js";

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 *
 * @generated from enum google.api.ClientLibraryOrganization
 */
export declare enum ClientLibraryOrganization {
  /**
   * Not useful.
   *
   * @generated from enum value: CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,

  /**
   * Google Cloud Platform Org.
   *
   * @generated from enum value: CLOUD = 1;
   */
  CLOUD = 1,

  /**
   * Ads (Advertising) Org.
   *
   * @generated from enum value: ADS = 2;
   */
  ADS = 2,

  /**
   * Photos Org.
   *
   * @generated from enum value: PHOTOS = 3;
   */
  PHOTOS = 3,

  /**
   * Street View Org.
   *
   * @generated from enum value: STREET_VIEW = 4;
   */
  STREET_VIEW = 4,

  /**
   * Shopping Org.
   *
   * @generated from enum value: SHOPPING = 5;
   */
  SHOPPING = 5,

  /**
   * Geo Org.
   *
   * @generated from enum value: GEO = 6;
   */
  GEO = 6,

  /**
   * Generative AI - https://developers.generativeai.google
   *
   * @generated from enum value: GENERATIVE_AI = 7;
   */
  GENERATIVE_AI = 7,
}

/**
 * To where should client libraries be published?
 *
 * @generated from enum google.api.ClientLibraryDestination
 */
export declare enum ClientLibraryDestination {
  /**
   * Client libraries will neither be generated nor published to package
   * managers.
   *
   * @generated from enum value: CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0;
   */
  CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,

  /**
   * Generate the client library in a repo under github.com/googleapis,
   * but don't publish it to package managers.
   *
   * @generated from enum value: GITHUB = 10;
   */
  GITHUB = 10,

  /**
   * Publish the library to package managers like nuget.org and npmjs.com.
   *
   * @generated from enum value: PACKAGE_MANAGER = 20;
   */
  PACKAGE_MANAGER = 20,
}

/**
 * Required information for every language.
 *
 * @generated from message google.api.CommonLanguageSettings
 */
export declare class CommonLanguageSettings extends Message<CommonLanguageSettings> {
  /**
   * Link to automatically generated reference documentation.  Example:
   * https://cloud.google.com/nodejs/docs/reference/asset/latest
   *
   * @generated from field: string reference_docs_uri = 1 [deprecated = true];
   * @deprecated
   */
  referenceDocsUri: string;

  /**
   * The destination where API teams want this client library to be published.
   *
   * @generated from field: repeated google.api.ClientLibraryDestination destinations = 2;
   */
  destinations: ClientLibraryDestination[];

  constructor(data?: PartialMessage<CommonLanguageSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.CommonLanguageSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommonLanguageSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommonLanguageSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommonLanguageSettings;

  static equals(a: CommonLanguageSettings | PlainMessage<CommonLanguageSettings> | undefined, b: CommonLanguageSettings | PlainMessage<CommonLanguageSettings> | undefined): boolean;
}

/**
 * Details about how and where to publish client libraries.
 *
 * @generated from message google.api.ClientLibrarySettings
 */
export declare class ClientLibrarySettings extends Message<ClientLibrarySettings> {
  /**
   * Version of the API to apply these settings to. This is the full protobuf
   * package for the API, ending in the version element.
   * Examples: "google.cloud.speech.v1" and "google.spanner.admin.database.v1".
   *
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * Launch stage of this version of the API.
   *
   * @generated from field: google.api.LaunchStage launch_stage = 2;
   */
  launchStage: LaunchStage;

  /**
   * When using transport=rest, the client request will encode enums as
   * numbers rather than strings.
   *
   * @generated from field: bool rest_numeric_enums = 3;
   */
  restNumericEnums: boolean;

  /**
   * Settings for legacy Java features, supported in the Service YAML.
   *
   * @generated from field: google.api.JavaSettings java_settings = 21;
   */
  javaSettings?: JavaSettings;

  /**
   * Settings for C++ client libraries.
   *
   * @generated from field: google.api.CppSettings cpp_settings = 22;
   */
  cppSettings?: CppSettings;

  /**
   * Settings for PHP client libraries.
   *
   * @generated from field: google.api.PhpSettings php_settings = 23;
   */
  phpSettings?: PhpSettings;

  /**
   * Settings for Python client libraries.
   *
   * @generated from field: google.api.PythonSettings python_settings = 24;
   */
  pythonSettings?: PythonSettings;

  /**
   * Settings for Node client libraries.
   *
   * @generated from field: google.api.NodeSettings node_settings = 25;
   */
  nodeSettings?: NodeSettings;

  /**
   * Settings for .NET client libraries.
   *
   * @generated from field: google.api.DotnetSettings dotnet_settings = 26;
   */
  dotnetSettings?: DotnetSettings;

  /**
   * Settings for Ruby client libraries.
   *
   * @generated from field: google.api.RubySettings ruby_settings = 27;
   */
  rubySettings?: RubySettings;

  /**
   * Settings for Go client libraries.
   *
   * @generated from field: google.api.GoSettings go_settings = 28;
   */
  goSettings?: GoSettings;

  constructor(data?: PartialMessage<ClientLibrarySettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.ClientLibrarySettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientLibrarySettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientLibrarySettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientLibrarySettings;

  static equals(a: ClientLibrarySettings | PlainMessage<ClientLibrarySettings> | undefined, b: ClientLibrarySettings | PlainMessage<ClientLibrarySettings> | undefined): boolean;
}

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 *
 * @generated from message google.api.Publishing
 */
export declare class Publishing extends Message<Publishing> {
  /**
   * A list of API method settings, e.g. the behavior for methods that use the
   * long-running operation pattern.
   *
   * @generated from field: repeated google.api.MethodSettings method_settings = 2;
   */
  methodSettings: MethodSettings[];

  /**
   * Link to a *public* URI where users can report issues.  Example:
   * https://issuetracker.google.com/issues/new?component=190865&template=1161103
   *
   * @generated from field: string new_issue_uri = 101;
   */
  newIssueUri: string;

  /**
   * Link to product home page.  Example:
   * https://cloud.google.com/asset-inventory/docs/overview
   *
   * @generated from field: string documentation_uri = 102;
   */
  documentationUri: string;

  /**
   * Used as a tracking tag when collecting data about the APIs developer
   * relations artifacts like docs, packages delivered to package managers,
   * etc.  Example: "speech".
   *
   * @generated from field: string api_short_name = 103;
   */
  apiShortName: string;

  /**
   * GitHub label to apply to issues and pull requests opened for this API.
   *
   * @generated from field: string github_label = 104;
   */
  githubLabel: string;

  /**
   * GitHub teams to be added to CODEOWNERS in the directory in GitHub
   * containing source code for the client libraries for this API.
   *
   * @generated from field: repeated string codeowner_github_teams = 105;
   */
  codeownerGithubTeams: string[];

  /**
   * A prefix used in sample code when demarking regions to be included in
   * documentation.
   *
   * @generated from field: string doc_tag_prefix = 106;
   */
  docTagPrefix: string;

  /**
   * For whom the client library is being published.
   *
   * @generated from field: google.api.ClientLibraryOrganization organization = 107;
   */
  organization: ClientLibraryOrganization;

  /**
   * Client library settings.  If the same version string appears multiple
   * times in this list, then the last one wins.  Settings from earlier
   * settings with the same version string are discarded.
   *
   * @generated from field: repeated google.api.ClientLibrarySettings library_settings = 109;
   */
  librarySettings: ClientLibrarySettings[];

  /**
   * Optional link to proto reference documentation.  Example:
   * https://cloud.google.com/pubsub/lite/docs/reference/rpc
   *
   * @generated from field: string proto_reference_documentation_uri = 110;
   */
  protoReferenceDocumentationUri: string;

  constructor(data?: PartialMessage<Publishing>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.Publishing";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Publishing;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Publishing;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Publishing;

  static equals(a: Publishing | PlainMessage<Publishing> | undefined, b: Publishing | PlainMessage<Publishing> | undefined): boolean;
}

/**
 * Settings for Java client libraries.
 *
 * @generated from message google.api.JavaSettings
 */
export declare class JavaSettings extends Message<JavaSettings> {
  /**
   * The package name to use in Java. Clobbers the java_package option
   * set in the protobuf. This should be used **only** by APIs
   * who have already set the language_settings.java.package_name" field
   * in gapic.yaml. API teams should use the protobuf java_package option
   * where possible.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      library_package: com.google.cloud.pubsub.v1
   *
   * @generated from field: string library_package = 1;
   */
  libraryPackage: string;

  /**
   * Configure the Java class name to use instead of the service's for its
   * corresponding generated GAPIC client. Keys are fully-qualified
   * service names as they appear in the protobuf (including the full
   * the language_settings.java.interface_names" field in gapic.yaml. API
   * teams should otherwise use the service name as it appears in the
   * protobuf.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      service_class_names:
   *        - google.pubsub.v1.Publisher: TopicAdmin
   *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
   *
   * @generated from field: map<string, string> service_class_names = 2;
   */
  serviceClassNames: { [key: string]: string };

  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 3;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<JavaSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.JavaSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JavaSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JavaSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JavaSettings;

  static equals(a: JavaSettings | PlainMessage<JavaSettings> | undefined, b: JavaSettings | PlainMessage<JavaSettings> | undefined): boolean;
}

/**
 * Settings for C++ client libraries.
 *
 * @generated from message google.api.CppSettings
 */
export declare class CppSettings extends Message<CppSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<CppSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.CppSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CppSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CppSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CppSettings;

  static equals(a: CppSettings | PlainMessage<CppSettings> | undefined, b: CppSettings | PlainMessage<CppSettings> | undefined): boolean;
}

/**
 * Settings for Php client libraries.
 *
 * @generated from message google.api.PhpSettings
 */
export declare class PhpSettings extends Message<PhpSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<PhpSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.PhpSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PhpSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PhpSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PhpSettings;

  static equals(a: PhpSettings | PlainMessage<PhpSettings> | undefined, b: PhpSettings | PlainMessage<PhpSettings> | undefined): boolean;
}

/**
 * Settings for Python client libraries.
 *
 * @generated from message google.api.PythonSettings
 */
export declare class PythonSettings extends Message<PythonSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<PythonSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.PythonSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PythonSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PythonSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PythonSettings;

  static equals(a: PythonSettings | PlainMessage<PythonSettings> | undefined, b: PythonSettings | PlainMessage<PythonSettings> | undefined): boolean;
}

/**
 * Settings for Node client libraries.
 *
 * @generated from message google.api.NodeSettings
 */
export declare class NodeSettings extends Message<NodeSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<NodeSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.NodeSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NodeSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NodeSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NodeSettings;

  static equals(a: NodeSettings | PlainMessage<NodeSettings> | undefined, b: NodeSettings | PlainMessage<NodeSettings> | undefined): boolean;
}

/**
 * Settings for Dotnet client libraries.
 *
 * @generated from message google.api.DotnetSettings
 */
export declare class DotnetSettings extends Message<DotnetSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  /**
   * Map from original service names to renamed versions.
   * This is used when the default generated types
   * would cause a naming conflict. (Neither name is
   * fully-qualified.)
   * Example: Subscriber to SubscriberServiceApi.
   *
   * @generated from field: map<string, string> renamed_services = 2;
   */
  renamedServices: { [key: string]: string };

  /**
   * Map from full resource types to the effective short name
   * for the resource. This is used when otherwise resource
   * named from different services would cause naming collisions.
   * Example entry:
   * "datalabeling.googleapis.com/Dataset": "DataLabelingDataset"
   *
   * @generated from field: map<string, string> renamed_resources = 3;
   */
  renamedResources: { [key: string]: string };

  /**
   * List of full resource types to ignore during generation.
   * This is typically used for API-specific Location resources,
   * which should be handled by the generator as if they were actually
   * the common Location resources.
   * Example entry: "documentai.googleapis.com/Location"
   *
   * @generated from field: repeated string ignored_resources = 4;
   */
  ignoredResources: string[];

  /**
   * Namespaces which must be aliased in snippets due to
   * a known (but non-generator-predictable) naming collision
   *
   * @generated from field: repeated string forced_namespace_aliases = 5;
   */
  forcedNamespaceAliases: string[];

  /**
   * Method signatures (in the form "service.method(signature)")
   * which are provided separately, so shouldn't be generated.
   * Snippets *calling* these methods are still generated, however.
   *
   * @generated from field: repeated string handwritten_signatures = 6;
   */
  handwrittenSignatures: string[];

  constructor(data?: PartialMessage<DotnetSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.DotnetSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DotnetSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DotnetSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DotnetSettings;

  static equals(a: DotnetSettings | PlainMessage<DotnetSettings> | undefined, b: DotnetSettings | PlainMessage<DotnetSettings> | undefined): boolean;
}

/**
 * Settings for Ruby client libraries.
 *
 * @generated from message google.api.RubySettings
 */
export declare class RubySettings extends Message<RubySettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<RubySettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.RubySettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RubySettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RubySettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RubySettings;

  static equals(a: RubySettings | PlainMessage<RubySettings> | undefined, b: RubySettings | PlainMessage<RubySettings> | undefined): boolean;
}

/**
 * Settings for Go client libraries.
 *
 * @generated from message google.api.GoSettings
 */
export declare class GoSettings extends Message<GoSettings> {
  /**
   * Some settings.
   *
   * @generated from field: google.api.CommonLanguageSettings common = 1;
   */
  common?: CommonLanguageSettings;

  constructor(data?: PartialMessage<GoSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.GoSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GoSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GoSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GoSettings;

  static equals(a: GoSettings | PlainMessage<GoSettings> | undefined, b: GoSettings | PlainMessage<GoSettings> | undefined): boolean;
}

/**
 * Describes the generator configuration for a method.
 *
 * @generated from message google.api.MethodSettings
 */
export declare class MethodSettings extends Message<MethodSettings> {
  /**
   * The fully qualified name of the method, for which the options below apply.
   * This is used to find the method to apply the options.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * Describes settings to use for long-running operations when generating
   * API methods for RPCs. Complements RPCs that use the annotations in
   * google/longrunning/operations.proto.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    method_settings:
   *      - selector: google.cloud.speech.v2.Speech.BatchRecognize
   *        long_running:
   *          initial_poll_delay:
   *            seconds: 60 # 1 minute
   *          poll_delay_multiplier: 1.5
   *          max_poll_delay:
   *            seconds: 360 # 6 minutes
   *          total_poll_timeout:
   *             seconds: 54000 # 90 minutes
   *
   * @generated from field: google.api.MethodSettings.LongRunning long_running = 2;
   */
  longRunning?: MethodSettings_LongRunning;

  constructor(data?: PartialMessage<MethodSettings>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.MethodSettings";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodSettings;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodSettings;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodSettings;

  static equals(a: MethodSettings | PlainMessage<MethodSettings> | undefined, b: MethodSettings | PlainMessage<MethodSettings> | undefined): boolean;
}

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 *
 * @generated from message google.api.MethodSettings.LongRunning
 */
export declare class MethodSettings_LongRunning extends Message<MethodSettings_LongRunning> {
  /**
   * Initial delay after which the first poll request will be made.
   * Default value: 5 seconds.
   *
   * @generated from field: google.protobuf.Duration initial_poll_delay = 1;
   */
  initialPollDelay?: Duration;

  /**
   * Multiplier to gradually increase delay between subsequent polls until it
   * reaches max_poll_delay.
   * Default value: 1.5.
   *
   * @generated from field: float poll_delay_multiplier = 2;
   */
  pollDelayMultiplier: number;

  /**
   * Maximum time between two subsequent poll requests.
   * Default value: 45 seconds.
   *
   * @generated from field: google.protobuf.Duration max_poll_delay = 3;
   */
  maxPollDelay?: Duration;

  /**
   * Total polling timeout.
   * Default value: 5 minutes.
   *
   * @generated from field: google.protobuf.Duration total_poll_timeout = 4;
   */
  totalPollTimeout?: Duration;

  constructor(data?: PartialMessage<MethodSettings_LongRunning>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "google.api.MethodSettings.LongRunning";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodSettings_LongRunning;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodSettings_LongRunning;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodSettings_LongRunning;

  static equals(a: MethodSettings_LongRunning | PlainMessage<MethodSettings_LongRunning> | undefined, b: MethodSettings_LongRunning | PlainMessage<MethodSettings_LongRunning> | undefined): boolean;
}

