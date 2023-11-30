// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/room303/service.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddRoomMemberRequest, GetRoomMemberRequest, JoinRoomRequest, ListRoomMembersRequest, ListRoomMembersResponse, RemoveRoomMemberRequest, RemoveRoomMemberResponse, SetAdminForRoomMemberRequest, SetAdminForRoomMemberResponse } from "./member_pb.js";
import { Member, Room } from "../../commons/room303_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BulkMarkMessageReadRequest, BulkMarkMessageReadResponse, CreateMessageRequest, CreateMessageResponse, DeleteMessageRequest, DeleteMessageResponse, EditMessageRequest, EditMessageResponse, GetMessagesRequest, GetMessagesResponse, GetUnreadStatsRequest, GetUnreadStatsResponse, ListNewsRoomGlobalMessagesRequest, ListNewsRoomGlobalMessagesResponse, MarkAllMessagesReadRequest, MarkAllMessagesReadResponse, MarkMessageReadRequest, MarkMessageReadResponse, SendNewsRoomGlobalMessageRequest, SendNewsRoomGlobalMessageResponse, StreamMessageUpdatesRequest, StreamMessageUpdatesResponse } from "./message_pb.js";
import { ArchiveRoomRequest, CreateRoomRequest, GetGlobalConfigRequest, GetGlobalConfigResponse, GetRoomRequest, ListAllRoomsRequest, ListRoomsForMemberRequest, ListRoomsResponse, ListUsersNamesRequest, ListUsersNamesResponse, UpdateGlobalConfigRequest, UpdateGlobalConfigResponse, UpdateRoomConfigRequest } from "./room_pb.js";

/**
 * @generated from service api.v1alpha1.room303.Room303API
 */
export declare const Room303API: {
  readonly typeName: "api.v1alpha1.room303.Room303API",
  readonly methods: {
    /**
     *
     * Member
     *
     * Add a new member to a room, you must be a room admin in order to do that
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.AddRoomMember
     */
    readonly addRoomMember: {
      readonly name: "AddRoomMember",
      readonly I: typeof AddRoomMemberRequest,
      readonly O: typeof Member,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Remove room member (kick), the room member will not receive notifications from that room
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.RemoveRoomMember
     */
    readonly removeRoomMember: {
      readonly name: "RemoveRoomMember",
      readonly I: typeof RemoveRoomMemberRequest,
      readonly O: typeof RemoveRoomMemberResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List the members of this room
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.ListRoomMembers
     */
    readonly listRoomMembers: {
      readonly name: "ListRoomMembers",
      readonly I: typeof ListRoomMembersRequest,
      readonly O: typeof ListRoomMembersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Set a room member as admin, you must be a room admin in order to do this.
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.SetAdminForRoomMember
     */
    readonly setAdminForRoomMember: {
      readonly name: "SetAdminForRoomMember",
      readonly I: typeof SetAdminForRoomMemberRequest,
      readonly O: typeof SetAdminForRoomMemberResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * adds new member to a room and does not require the member to be admin
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.JoinRoom
     */
    readonly joinRoom: {
      readonly name: "JoinRoom",
      readonly I: typeof JoinRoomRequest,
      readonly O: typeof Room,
      readonly kind: MethodKind.Unary,
    },
    /**
     * gets the member entity from the provided room if it exists
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.GetRoomMember
     */
    readonly getRoomMember: {
      readonly name: "GetRoomMember",
      readonly I: typeof GetRoomMemberRequest,
      readonly O: typeof Member,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Message
     *
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.CreateMessage
     */
    readonly createMessage: {
      readonly name: "CreateMessage",
      readonly I: typeof CreateMessageRequest,
      readonly O: typeof CreateMessageResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.EditMessage
     */
    readonly editMessage: {
      readonly name: "EditMessage",
      readonly I: typeof EditMessageRequest,
      readonly O: typeof EditMessageResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.DeleteMessage
     */
    readonly deleteMessage: {
      readonly name: "DeleteMessage",
      readonly I: typeof DeleteMessageRequest,
      readonly O: typeof DeleteMessageResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetMessages
     */
    readonly getMessages: {
      readonly name: "GetMessages",
      readonly I: typeof GetMessagesRequest,
      readonly O: typeof GetMessagesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.StreamMessageUpdates
     */
    readonly streamMessageUpdates: {
      readonly name: "StreamMessageUpdates",
      readonly I: typeof StreamMessageUpdatesRequest,
      readonly O: typeof StreamMessageUpdatesResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetUnreadStats
     */
    readonly getUnreadStats: {
      readonly name: "GetUnreadStats",
      readonly I: typeof GetUnreadStatsRequest,
      readonly O: typeof GetUnreadStatsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.MarkMessageRead
     */
    readonly markMessageRead: {
      readonly name: "MarkMessageRead",
      readonly I: typeof MarkMessageReadRequest,
      readonly O: typeof MarkMessageReadResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.MarkAllMessagesRead
     */
    readonly markAllMessagesRead: {
      readonly name: "MarkAllMessagesRead",
      readonly I: typeof MarkAllMessagesReadRequest,
      readonly O: typeof MarkAllMessagesReadResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.BulkMarkMessageRead
     */
    readonly bulkMarkMessageRead: {
      readonly name: "BulkMarkMessageRead",
      readonly I: typeof BulkMarkMessageReadRequest,
      readonly O: typeof BulkMarkMessageReadResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     *
     * Room
     *
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.CreateRoom
     */
    readonly createRoom: {
      readonly name: "CreateRoom",
      readonly I: typeof CreateRoomRequest,
      readonly O: typeof Room,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetRoom
     */
    readonly getRoom: {
      readonly name: "GetRoom",
      readonly I: typeof GetRoomRequest,
      readonly O: typeof Room,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ListAllRooms
     */
    readonly listAllRooms: {
      readonly name: "ListAllRooms",
      readonly I: typeof ListAllRoomsRequest,
      readonly O: typeof ListRoomsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ListRoomsForMember
     */
    readonly listRoomsForMember: {
      readonly name: "ListRoomsForMember",
      readonly I: typeof ListRoomsForMemberRequest,
      readonly O: typeof ListRoomsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ArchiveRoom
     */
    readonly archiveRoom: {
      readonly name: "ArchiveRoom",
      readonly I: typeof ArchiveRoomRequest,
      readonly O: typeof Room,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListUsersNames returns a list of users with names and ids
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.ListUsersNames
     */
    readonly listUsersNames: {
      readonly name: "ListUsersNames",
      readonly I: typeof ListUsersNamesRequest,
      readonly O: typeof ListUsersNamesResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * allow room configurations to be updated
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.UpdateRoomConfig
     */
    readonly updateRoomConfig: {
      readonly name: "UpdateRoomConfig",
      readonly I: typeof UpdateRoomConfigRequest,
      readonly O: typeof Room,
      readonly kind: MethodKind.Unary,
    },
    /**
     * update global configuration
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.UpdateGlobalConfig
     */
    readonly updateGlobalConfig: {
      readonly name: "UpdateGlobalConfig",
      readonly I: typeof UpdateGlobalConfigRequest,
      readonly O: typeof UpdateGlobalConfigResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * get global configuration
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.GetGlobalConfig
     */
    readonly getGlobalConfig: {
      readonly name: "GetGlobalConfig",
      readonly I: typeof GetGlobalConfigRequest,
      readonly O: typeof GetGlobalConfigResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListNewsRoomGlobalMessages returns a list of global messages for newsroom
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.ListNewsRoomGlobalMessages
     */
    readonly listNewsRoomGlobalMessages: {
      readonly name: "ListNewsRoomGlobalMessages",
      readonly I: typeof ListNewsRoomGlobalMessagesRequest,
      readonly O: typeof ListNewsRoomGlobalMessagesResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SendNewsRoomGlobalMessage - send global message for newsroom to be added
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.SendNewsRoomGlobalMessage
     */
    readonly sendNewsRoomGlobalMessage: {
      readonly name: "SendNewsRoomGlobalMessage",
      readonly I: typeof SendNewsRoomGlobalMessageRequest,
      readonly O: typeof SendNewsRoomGlobalMessageResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

