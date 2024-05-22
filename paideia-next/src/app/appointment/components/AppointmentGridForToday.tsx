import { GridColDef, DataGrid } from "@mui/x-data-grid";

export function AppointmentGridForToday({data}) {

  const columns : GridColDef[] = [
    {field: 'Id', headerName: 'Id', hideable: true},
    {field: 'Fecha', headerName: 'Fecha', type: 'string', width: 150},
    {field: 'Hora', headerName: 'Hora', width: 80},
    {field: 'Paciente', headerName: 'Paciente', width: 200},
    {field: 'Entidad', headerName: 'Entidad', width: 80},
    {field: 'Telefono', headerName: 'Contacto', width: 150},
    {field: 'Estado', headerName: 'Estado', width: 150 },
  ];

  console.log(data);

  const formatDate = (dateString) => {
    return dateString.split('T')[0];
  };


  return (
      <DataGrid 
      rows={data}
      columns={columns} 
      getRowId={(row) => row.Id}
      autosizeOptions={{
        columns: ['Fecha', 'Paciente', 'Estado'],
        includeOutliers: true,
        includeHeaders: true,
      }}
      autoH
      />
  );
}
