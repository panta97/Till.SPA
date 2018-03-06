export let gastoObj: object[] = [
  {
    data: 'id',
    title: 'id',
    readOnly: true,
  },
  {
    data: 'description',
    title: 'Descripción'
  },
  {
    data: 'amount',
    title: 'Monto',
    type: 'numeric',
    numericFormat: {
      pattern: '0,0.00'
    },
  },
];