import { kiboxDatosIpsPool } from "@/lib/kibox/dbkiboxDatosIps";
import { RowDataPacket } from "mysql2";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

    try {
        
        let sql

        sql ='SELECT * FROM tablaripsmedico ORDER BY NumeroDocumento DESC';

        const [rows] = await kiboxDatosIpsPool.query<RowDataPacket[]>(sql);


        return NextResponse.json({ data: rows }, { status: 200 });

    } catch (error) {
      console.error('Error fetching data:', error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }

}