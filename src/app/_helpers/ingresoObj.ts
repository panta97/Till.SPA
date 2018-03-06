export let ingresoObj: object[] = [
  {
    data: 'id',
    title: 'id',
    readOnly: true
  },
  {
    data: 'type',
    title: 'Tipo',
    readOnly: true
  },
  {
    data: 'denomination',
    title: 'Denominación',
    type: 'numeric',
    numericFormat: {
      pattern: '0,0.00'
    },
    readOnly: true,
  },
  {
    data: 'amount',
    title: 'Cantidad',
    type: 'numeric',
    numericFormat: {
      pattern: '0,0.00'
    },
  },
];