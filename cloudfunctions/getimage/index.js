// 云函数入口文件
const cloud = require('wx-server-sdk')

var rp = require('request-promise')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

    return rp('http://192.168.43.220/capture')
        .then(function (res) {
            console.log(res)
            return res
            // Process html...
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err)
            return err
        });
}