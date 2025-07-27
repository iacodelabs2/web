module.exports = {
  apps: [
    {
      name: 'nextjs',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 8080,
        NODE_ENV: 'production'
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    }
  ]
}; 