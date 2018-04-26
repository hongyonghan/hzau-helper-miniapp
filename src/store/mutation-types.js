/**
 * 定义mutation-type
 * @time 2018/04/24
 * @author lxfriday
 */

// 用户注册登录
export const USER_SIGNIN_LOADING_TRUE = 'USER_SIGNIN_LOADING_TRUE'; // 登录的时候加载中
export const USER_SIGNIN_LOADING_FALSE = 'USER_SIGNIN_LOADING_FALSE'; // 登录的时候没有加载
export const USER_SIGNUP_LOADING_TRUE = 'USER_SIGNUP_LOADING_TRUE'; // 注册的时候加载中
export const USER_SIGNUP_LOADING_FALSE = 'USER_SIGNUP_LOADING_FALSE'; // 注册的时候没有加载
export const USER_SIGNIN = 'USER_SIGNIN'; // 用户登录
export const USER_SIGNUP = 'USER_SIGNUP'; // 用户注册
export const USER_SIGNOUT = 'USER_SIGNOUT'; // 用户退出登录
// 获取用户登录之后存储在本地的信息
export const USER_SIGNIN_FROM_LOCAL = 'USER_SIGNIN_FROM_LOCAL';
export const USER_SIGNUP_SEND_VERIFYCODE = 'USER_SIGNUP_SEND_VERIFYCODE'; // 注册的时候发送验证码

// publicarea
export const PUBLICAREA_SUBMIT_LOADING_TRUE = 'PUBLICAREA_SUBMIT_LOADING_TRUE'; // 发布的时候加载中
export const PUBLICAREA_SUBMIT_LOADING_FALSE = 'PUBLICAREA_SUBMIT_LOADING_FALSE'; // 发布的时候加载结束
export const PUBLICAREA_SUBMIT = 'PUBLICAREA_SUBMIT'; // 发布动态

export const PUBLICAREA_LOADING_TRUE = 'PUBLICAREA_LOADING_TRUE'; // 广场加载中
export const PUBLICAREA_LOADING_FALSE = 'PUBLICAREA_LOADING_FALSE'; // 广场结束加载
export const PUBLICAREA_LIST = 'PUBLICAREA_LIST'; // 获取广场列表
export const PUBLICAREA_LIST_REFRESH = 'PUBLICAREA_LIST_REFRESH'; // 刷新广场列表
export const PUBLICAREA_LIST_CLEAN = 'PUBLICAREA_LIST_CLEAN'; // 清空列表

// lostAndFound
export const LOSTANDFOUND_LOADING_TRUE = 'LOSTANDFOUND_LOADING_TRUE'; // 列表加载中
export const LOSTANDFOUND_LOADING_FALSE = 'LOSTANDFOUND_LOADING_FALSE'; // 列表结束加载
export const LOSTANDFOUND_LIST = 'LOSTANDFOUND_LIST'; // 获取列表
export const LOSTANDFOUND_LIST_RESET = 'LOSTANDFOUND_LIST_RESET'; // 重置store数据

// eatAndHaveFun
export const EATANDHAVEFUN_LOADING_TRUE = 'EATANDHAVEFUN_LOADING_TRUE'; // 列表加载中
export const EATANDHAVEFUN_LOADING_FALSE = 'EATANDHAVEFUN_LOADING_FALSE'; // 列表结束加载
export const EATANDHAVEFUN_LIST = 'EATANDHAVEFUN_LIST'; // 获取列表
export const EATANDHAVEFUN_LIST_RESET = 'EATANDHAVEFUN_LIST_RESET'; // 重置store数据
