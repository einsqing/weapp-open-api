const axios = require("axios");

exports.commit = async function(templateId, extJson, userVersion, userDesc) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/commit?access_token=${accessToken}`;
  const params = {
    template_id: templateId,
    ext_json: extJson,
    user_version: userVersion,
    user_desc: userDesc
  };

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.getExpQrcode = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/get_qrcode?access_token=${accessToken}`;

  return axios(apiUrl, {
    responseType: "stream"
  });
};

exports.modifyDomain = async function(action = "get", domain) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/modify_domain?access_token=${accessToken}`;
  const params = Object.assign(
    {
      action: action
    },
    domain
  );

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.setWebviewDomain = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/setwebviewdomain?access_token=${accessToken}`;
  return this.request(apiUrl, {
    method: "post",
    data: {}
  });
};

exports.getCategory = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/get_category?access_token=${accessToken}`;
  return this.request(apiUrl);
};

exports.getPage = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/get_page?access_token=${accessToken}`;
  return this.request(apiUrl);
};

exports.submitAudit = async function(items) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/submit_audit?access_token=${accessToken}`;
  return this.request(apiUrl, {
    method: "post",
    data: items
  });
};

exports.getAuditstatus = async function(auditid) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/get_auditstatus?access_token=${accessToken}`;
  const params = {
    auditid: auditid
  };

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.getLastAuditstatus = async function(auditid) {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/get_latest_auditstatus?access_token=${accessToken}`;
  const params = {
    auditid: auditid
  };

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.release = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/release?access_token=${accessToken}`;
  const params = {};

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.changeVisitstatus = async function(action = "open") {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/change_visitstatus?access_token=${accessToken}`;
  const params = {
    action: action
  };

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.revertcoderelease = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/revertcoderelease?access_token=${accessToken}`;
  return this.request(apiUrl);
};

exports.getweappsupportversion = async function(action = "open") {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/getweappsupportversion?access_token=${accessToken}`;
  const params = {};

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.setweappsupportversion = async function(version = "1.0.0") {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/cgi-bin/wxopen/setweappsupportversion?access_token=${accessToken}`;
  const params = {
    version: version
  };

  return this.request(apiUrl, {
    method: "post",
    data: params
  });
};

exports.undocodeaudit = async function() {
  const { accessToken } = await this.ensureAccessToken();
  const apiUrl = `https://api.weixin.qq.com/wxa/undocodeaudit?access_token=${accessToken}`;
  return this.request(apiUrl);
};
