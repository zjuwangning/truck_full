/**
 * Created by Reid
 *
 * host 统一管理
 */

const Host1 = "localhost:3000";				// 本地测试
const Host2 = "47.107.120.52:3000";			// 服务器部署

let host = Host1


export const getRootUrl = () => "http://"+host

export const getHost = () => host