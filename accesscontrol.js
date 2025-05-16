export const hasAccess = (role, resource, action) => {
  const rules = {
    admin: {
      ships: ['read', 'write'],
      jobs: ['read', 'write'],
      components: ['read', 'write'],
    },
    engineer: {
      ships: ['read'],
      jobs: ['read', 'write'],
      components: ['read'],
    },
    inspector: {
      ships: ['read'],
      jobs: ['read'],
      components: ['read'],
    },
  };

  return rules[role]?.[resource]?.includes(action);
};
