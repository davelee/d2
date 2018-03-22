process.env.DEPLOY_ENV = 'dev';

const config = require('../src/config');
const fs = require('fs');
const bluebird = require('bluebird');
const pem = bluebird.promisifyAll(require('pem'));
const url = require('url');

const hostname = url.parse(config.appUrl).hostname;

const v3ExtTemplate =
`authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
DNS.1 = ${hostname}`;

fs.writeFileSync('./src/server/dev_cert/v3.ext', v3ExtTemplate);

pem.createCSRAsync({
  country: 'US',
  state: 'California',
  locality: 'San Mateo',
  organization: 'davelee.io',
  commonName: hostname
})
  .then((data) => {
    return pem.createCertificateAsync({
      extFile: './src/server/dev_cert/v3.ext',
      csr: data.csr,
      days: 1024,
    })
  })
  .then((data) => {
    fs.writeFileSync('./src/server/dev_cert/key.pem', data.serviceKey);
    fs.writeFileSync('./src/server/dev_cert/cert.pem', data.certificate);
  })
  .then(() => {
    console.log('Dev Cert successfully created, Run:');
    console.log('sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain src/server/dev_cert/cert.pem');
  })
  .catch((err) => {
    console.error(err);
  });
