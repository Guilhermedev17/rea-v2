export default {
  apps: [{
    name: 'rea-preview',
    script: 'npx',
    args: 'vite preview --host 0.0.0.0 --port 4173',
    cwd: '/home/user/webapp',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
};