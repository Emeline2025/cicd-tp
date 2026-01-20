```markdown
# Deployment

## Prerequisites

- Node.js ≥22.19.0
- npm ≥10.0.0
- Access to a server (e.g., AWS, Heroku, DigitalOcean)

## Deployment Steps

### 1. Configuration

```bash
# Create a .env file
cp .env.example .env

# Modify environment variables
nano .env
```

### 2. Installation
```bash
npm install
```

### 3. Launch
# In development
```bash
npm start
```

# In production (with PM2)
```bash
npm install -g pm2
pm2 start src/server.js --name "greeting-api"
```

### 4. Configuration from the server

With Nginx

```
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

With Docker

```
FROM node:22.19.0

WORKDIR /usr/src/app

COPY package*.json./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### Monitoring
### Logs

# With PM2
```bash
pm2 logs greeting-api
```

# Without PM2
```bash
journalctl -u greeting-api
```

### Metrics

Configure Prometheus and Grafana to monitor:
• Response time
• Number of requests
• Errors
