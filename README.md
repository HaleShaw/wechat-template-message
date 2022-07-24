# wechat-template-message

Send wechat template message.

## 操作步骤

1. 访问[微信公众平台](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)

2. 登录得到测试号`appID`和`appsecret`

3. 关注自己的测试公众号，得到用户的`openId`

4. 新增消息模板，得到`模板ID`

5. 将APP_ID, APP_SECRET, OPEN_ID_LIST, TEMPLATE_ID配置进js文件，进行发送

## 附录

[模板消息接口文档](https://mp.weixin.qq.com/debug/cgi-bin/readtmpl?t=tmplmsg/faq_tmpl)
