'use strict';

module.exports = [
  {
    method: 'POST',
    path: '/logs/send',
    handler: 'log.send',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.create'],
          },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/logs/count',
    handler: 'log.count',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.read'],
          },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/logs',
    handler: 'log.find',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.read'],
          },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/logs/:id',
    handler: 'log.findOne',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.read'],
          },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/logs',
    handler: 'log.create',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.create'],
          },
        },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/logs/:id',
    handler: 'log.update',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.update'],
          },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/logs/:id',
    handler: 'log.delete',
    config: {
      policies: [
        {
          name: 'admin::hasPermissions',
          config: {
            actions: ['plugin::users-permissions.roles.delete'],
          },
        },
      ],
    },
  },
];
