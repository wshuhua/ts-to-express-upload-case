const devConfig = {
    host: '127.0.0.1',
    database: 'ts',
    user: 'root',
    password: 'wsh123456'
};
const prodConfig = {
    host: 'xxx.xxx.xxx.xxx',
    database: 'ts',
    user: 'xxxx',
    port: 'xxxx',
    password: 'xxxxxxx'
}
// const env = process.env.NODE_ENV
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;