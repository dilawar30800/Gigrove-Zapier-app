module.exports = {
  type: 'custom',
  test: {
    url: 'https://gigrove.com/api/wp/v2/token',
    method: 'POST',
    params: {},
    headers: {
      'X-API-KEY': '{{bundle.authData.api_key}}',
      'X-API-SECRET': '{{bundle.authData.api_secret}}',
    },
    body: {
      api_secret: '{{bundle.authData.api_secret}}',
      api_key: '{{bundle.authData.api_key}}',
    },
    removeMissingValuesFrom: {},
  },
  fields: [
    { computed: false, key: 'api_key', required: true, label: 'API KEY' },
    { computed: false, key: 'api_secret', required: true, label: 'API SECRET' },
  ],
  customConfig: {},
};
