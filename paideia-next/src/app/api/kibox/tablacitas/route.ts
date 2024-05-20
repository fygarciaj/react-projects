import { RowDataPacket } from 'mysql2';
import { kiboxDatosIpsPool } from '../../../../lib/kibox/dbkiboxDatosIps';
import { NextRequest, NextResponse } from 'next/server';

interface ICita {
  id: BigInt,
  Fecha: String
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // console.log(searchParams);

    let sql: string;
    let queryParams: (string | number)[] = [];
    
    if (searchParams.has('fecha') && searchParams.has('doctor')) {
      const dateAppointment = searchParams.get('fecha');
      const doctor = searchParams.get('doctor');
      sql = 'SELECT * FROM tablacitas WHERE Fecha = ? AND IdMedico = ? ORDER BY Hora ASC;';
      queryParams.push(dateAppointment as string, doctor as string);
    } else if (searchParams.has('fecha')) {
      const dateAppointment = searchParams.get('fecha');
      sql = 'SELECT * FROM tablacitas WHERE Fecha = ? ORDER BY Hora ASC;';
      queryParams.push(dateAppointment as string);
    } else if (searchParams.has('doctor')) {
      const doctor = searchParams.get('doctor');
      sql = 'SELECT * FROM tablacitas WHERE IdMedico = ? ORDER BY Fecha ASC;';
      queryParams.push(doctor as string);
    } else {
      sql = 'SELECT * FROM tablacitas ORDER BY Fecha DESC LIMIT 100;';
    }

    const [rows] = await kiboxDatosIpsPool.query<RowDataPacket[]>(sql, queryParams);

    //console.log(rows);

    return NextResponse.json({ data: rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
