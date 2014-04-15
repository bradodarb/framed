module.exports = {

    server:{
        port:8083,
        bodyParams:{
            maxBodySize: 0,
            mapParams: true,
            mapFiles: false,
            overrideParams: false
        }
    },
    framesApi:{

        baseUrl: '/api/',
        collection: 'frames',
        dbUrl: 'mongodb://127.0.0.1:27017/framed',
        safe: true,
        strict: false
    }




};