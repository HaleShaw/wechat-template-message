const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 使用前请填写好以下4个字段：
// APP_ID, APP_SECRET, OPEN_ID_LIST, TEMPLATE_ID
const APP_ID = '';
const APP_SECRET = '';
const OPEN_ID_LIST = [''];
const TEMPLATE_ID = '';

const axiosPost = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const axiosGet = function (url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

async function getToken() {
  const params = {
    grant_type: 'client_credential',
    appid: APP_ID,
    secret: APP_SECRET,
  };
  let res = await axiosGet('https://api.weixin.qq.com/cgi-bin/token', params);
  return res.data.access_token;
}

async function sendMessage(token, openId, templateId) {
  const url = 'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' + token;
  const params = {
    touser: openId,
    template_id: templateId,
    url: '',
    topcolor: '#FF0000',
    data: {
      express: {
        value: '菜鸟驿站',
        color: '#173177',
      },
      code: {
        value: '4-2-1111',
        color: '#1731FF',
      },
      time: {
        value: '2022-06-18 20:00:00',
        color: '#173177'
      }
    },
  };
  let res = await axiosPost(url, params);
  console.log('Response: ', res.data);
}

async function batchSendMessage(token, openIds, templateId) {
  for (index in openIds) {
    sendMessage(token, openIds[index], templateId);
  }
}

async function main() {
  const token = await getToken();
  batchSendMessage(token, OPEN_ID_LIST, TEMPLATE_ID);
}

main();
