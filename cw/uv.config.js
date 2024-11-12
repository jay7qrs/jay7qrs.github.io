self.__uv$config = {
    prefix: '/cw/',

    /* Bare server URL */ 
    bare: 'https://pabare.laviewddns.com/seal/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/cw/uv.handler.js',
    client: '/cw/uv.client.js',
    bundle: '/cw/uv.bundle.js',
    config: '/cw/uv.config.js',
    sw: '/cw/uv.sw.js',
};
