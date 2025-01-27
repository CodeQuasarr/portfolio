module.exports = {
    apps: [
        {
            name: 'portfolio',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
