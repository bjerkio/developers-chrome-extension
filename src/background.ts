const allResourceTypes = Object.values(
  chrome.declarativeNetRequest.ResourceType,
);

const hosts = ['*.bjerk.io/*', '*.bjerk.dev/*'];

const rules: chrome.declarativeNetRequest.Rule[] = [
  ...hosts.map((host, i) => ({
    id: i + 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      requestHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'x-team-id',
          value: 'bjerk',
        },
      ],
    },
    condition: {
      urlFilter: host,
      resourceTypes: allResourceTypes,
    },
  })),
];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: rules.map(rule => rule.id), // remove existing rules
  addRules: rules,
});
