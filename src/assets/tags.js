module.exports = [
    {
      name: 'Rock',
      state: 'off',
      children: [
        {
          name: 'Hard Rock',
          state: 'off',
          children: []
        },
        {
          name: 'Alternative',
          state: 'off',
          children: []
        },
        {
          name: 'Chill',
          state: 'off',
          children: [
            {
              name: 'Stoner',
              state: 'off',
              children: []
            },
            {
              name: 'Ambient',
              state: 'off',
              children: []
            }
          ]
        },
        {
          name: 'Classic',
          state: 'off',
          children: []
        }
      ]
    },
    {
      name: 'Metal',
      state: 'off',
      children: [
        {
          name: 'Metalcore',
          state: 'off',
          children: []
        },
        {
          name: 'Black Metal',
          state: 'off',
          children: []
        }
      ]
    }
  ]