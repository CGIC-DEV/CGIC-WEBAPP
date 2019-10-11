/**
 * api接口统一管理
 */
import {get, post} from './http'

// 获取社保测试信息
export const getSscTestMsg = p => get('/msg', p);

// 获取社保信息
export const getSscInfo = p => get('/msg', p);
