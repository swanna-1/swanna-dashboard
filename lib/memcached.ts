import memjs from 'memjs';

export const memcached = memjs.Client.create(); // defaults to localhost:11211
