export default function () {
  this.get('/files', () => {
    return {
      data: [
        {
          id: 1,
          type: 'files',
          attributes: {
            name: 'smss.exe',
            device: 'Stark',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
            status: 'scheduled'
          }
        },
        {
          id: 2,
          type: 'files',
          attributes: {
            name: 'netsh.exe',
            device: 'Targaryen',
            path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
            status: 'available'
          }
        },
        {
          id: 3,
          type: 'files',
          attributes: {
            name: 'uxtheme.dll',
            device: 'Lannister',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
            status: 'available'
          }
        },
        {
          id: 4,
          type: 'files',
          attributes: {
            name: 'cryptbase.dll',
            device: 'Martell',
            path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
            status: 'scheduled'
          }
        },
        {
          id: 5,
          type: 'files',
          attributes: {
            name: '7za.exe',
            device: 'Baratheon',
            path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
            status: 'scheduled'
          }
        }
      ]
    };
  });
}
