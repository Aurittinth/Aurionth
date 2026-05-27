import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({fallback: '404.html'}),
        paths: {
            base: process.argv.includes('dev') ? '' : '/Aurionth'
        },
        prerender: {
            handleHttpError: 'warn'
        },
        alias: {
            '$assets': 'src/lib/assets',
            '$fonts': 'src/lib/assets/fonts',
            '$images': 'src/lib/assets/images',
            '$components': 'src/lib/components',
            '$styles': 'src/lib/styles',
            '$utils': 'src/lib/utils',
            '$data': 'src/lib/data'
        }
    }
};