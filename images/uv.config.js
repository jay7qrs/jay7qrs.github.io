self.__uv$config = {
    prefix: '/uv/',

    /* Bare server URL */ 
    bare: 'https://dw5pdmvyc2fs-dw5ibg9ja2vy.io2lx7.workers.dev/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
