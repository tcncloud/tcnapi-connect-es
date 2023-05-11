// @generated by protoc-gen-connect-es v0.8.6
// @generated from file api/v1alpha1/room303/service.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddRoomMemberRequest, GetRoomMemberRequest, JoinRoomRequest, ListRoomMembersRequest, ListRoomMembersResponse, RemoveRoomMemberRequest, RemoveRoomMemberResponse, SetAdminForRoomMemberRequest, SetAdminForRoomMemberResponse } from "./member_pb.js";
import { Member, Room } from "../../commons/room303_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BulkMarkMessageReadRequest, BulkMarkMessageReadResponse, CreateMessageRequest, CreateMessageResponse, DeleteMessageRequest, DeleteMessageResponse, EditMessageRequest, EditMessageResponse, GetMessagesRequest, GetMessagesResponse, GetUnreadStatsRequest, GetUnreadStatsResponse, MarkAllMessagesReadRequest, MarkAllMessagesReadResponse, MarkMessageReadRequest, MarkMessageReadResponse, StreamMessageUpdatesRequest, StreamMessageUpdatesResponse } from "./message_pb.js";
import { ArchiveRoomRequest, CreateRoomRequest, GetRoomRequest, ListAllRoomsRequest, ListRoomsForMemberRequest, ListRoomsResponse } from "./room_pb.js";

/**
 * @generated from service api.v1alpha1.room303.Room303API
 */
export const Room303API = {
  typeName: "api.v1alpha1.room303.Room303API",
  methods: {
    /**
     *
     * Member
     *
     * Add a new member to a room, you must be a room admin in order to do that
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.AddRoomMember
     */
    addRoomMember: {
      name: "AddRoomMember",
      I: AddRoomMemberRequest,
      O: Member,
      kind: MethodKind.Unary,
    },
    /**
     * Remove room member (kick), the room member will not receive notifications from that room
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.RemoveRoomMember
     */
    removeRoomMember: {
      name: "RemoveRoomMember",
      I: RemoveRoomMemberRequest,
      O: RemoveRoomMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * List the members of this room
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.ListRoomMembers
     */
    listRoomMembers: {
      name: "ListRoomMembers",
      I: ListRoomMembersRequest,
      O: ListRoomMembersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set a room member as admin, you must be a room admin in order to do this.
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.SetAdminForRoomMember
     */
    setAdminForRoomMember: {
      name: "SetAdminForRoomMember",
      I: SetAdminForRoomMemberRequest,
      O: SetAdminForRoomMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * adds new member to a room and does not require the member to be admin
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.JoinRoom
     */
    joinRoom: {
      name: "JoinRoom",
      I: JoinRoomRequest,
      O: Room,
      kind: MethodKind.Unary,
    },
    /**
     * gets the member entity from the provided room if it exists
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.GetRoomMember
     */
    getRoomMember: {
      name: "GetRoomMember",
      I: GetRoomMemberRequest,
      O: Member,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Message
     *
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.CreateMessage
     */
    createMessage: {
      name: "CreateMessage",
      I: CreateMessageRequest,
      O: CreateMessageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.EditMessage
     */
    editMessage: {
      name: "EditMessage",
      I: EditMessageRequest,
      O: EditMessageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.DeleteMessage
     */
    deleteMessage: {
      name: "DeleteMessage",
      I: DeleteMessageRequest,
      O: DeleteMessageResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetMessages
     */
    getMessages: {
      name: "GetMessages",
      I: GetMessagesRequest,
      O: GetMessagesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.StreamMessageUpdates
     */
    streamMessageUpdates: {
      name: "StreamMessageUpdates",
      I: StreamMessageUpdatesRequest,
      O: StreamMessageUpdatesResponse,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetUnreadStats
     */
    getUnreadStats: {
      name: "GetUnreadStats",
      I: GetUnreadStatsRequest,
      O: GetUnreadStatsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.MarkMessageRead
     */
    markMessageRead: {
      name: "MarkMessageRead",
      I: MarkMessageReadRequest,
      O: MarkMessageReadResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.MarkAllMessagesRead
     */
    markAllMessagesRead: {
      name: "MarkAllMessagesRead",
      I: MarkAllMessagesReadRequest,
      O: MarkAllMessagesReadResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.BulkMarkMessageRead
     */
    bulkMarkMessageRead: {
      name: "BulkMarkMessageRead",
      I: BulkMarkMessageReadRequest,
      O: BulkMarkMessageReadResponse,
      kind: MethodKind.Unary,
    },
    /**
     *
     * Room
     *
     *
     * @generated from rpc api.v1alpha1.room303.Room303API.CreateRoom
     */
    createRoom: {
      name: "CreateRoom",
      I: CreateRoomRequest,
      O: Room,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.GetRoom
     */
    getRoom: {
      name: "GetRoom",
      I: GetRoomRequest,
      O: Room,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ListAllRooms
     */
    listAllRooms: {
      name: "ListAllRooms",
      I: ListAllRoomsRequest,
      O: ListRoomsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ListRoomsForMember
     */
    listRoomsForMember: {
      name: "ListRoomsForMember",
      I: ListRoomsForMemberRequest,
      O: ListRoomsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.room303.Room303API.ArchiveRoom
     */
    archiveRoom: {
      name: "ArchiveRoom",
      I: ArchiveRoomRequest,
      O: Room,
      kind: MethodKind.Unary,
    },
  }
};

