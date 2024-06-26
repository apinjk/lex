const fs = require('fs')
const fetch = require("node-fetch");
const axios = require('axios')

exports.getGroupAdmins = function (participants) {
let admins = [];
for (let i of participants) {
i.admin !== null ? admins.push(i.id) : "";
}
return admins;
};

exports.fetchJson = (url, options) => new Promise(async(resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})
})

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
