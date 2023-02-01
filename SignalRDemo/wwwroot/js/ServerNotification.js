﻿"use strict"
var connection = new signalR.HubConnectionBuilder().withUrl("/notificationHub").build();

connection.start();
connection.on("sendMsg", function (msg) {
    var li = document.createElement("li");
    li.textContent = msg;
    document.getElementById("msgList").appendChild(li);
})