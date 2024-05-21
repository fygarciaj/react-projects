import { GridColDef, DataGrid } from "@mui/x-data-grid";

export function AppointmentGridForToday({data}) {

  const columns : GridColDef[] = [
    {field: 'Id', headerName: 'Id', hideable: true},
    {field: 'Fecha', headerName: 'Fecha', type: 'string', width: 130},
    {field: 'Hora', headerName: 'Hora'},
    {field: 'Paciente', headerName: 'Paciente'},
    {field: 'Entidad', headerName: 'Entidad'},
    {field: 'Telefono', headerName: 'Contacto'},
    {field: 'Estado', headerName: 'Estado', },
  ];

  console.log(data);

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
      />
  );
}
