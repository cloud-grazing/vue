const convertCookies = (cookies) => {
    let result = '';
    Object.keys(cookies).forEach((key) => {
        result += `${key}=${cookies[key]};`;
    });
    return result;
};

const headers = {
    Cookie: convertCookies({
        lang: 'zh-tw',
        langx: 'zh-tw'
    })
};

const proxyConfig = {
    target: 'http://test.com/', // 測試網頁
    headers,
    changeOrigin: true,
    ws: false
};

module.exports = {
    '/fake': {
        ...proxyConfig,
        target: 'http://test.com/'
    }
};
