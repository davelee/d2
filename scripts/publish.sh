NODE_ENV=production npm install
npx webpack -p --config webpack.config.js
aws s3 cp dist/ ${config.deploy.s3Location} --recursive --exclude ".*" --cache-control "public, max-age=31536000"