import { kiboxDatosIpsPool } from "@/lib/kibox/dbkKboxDatosIps";
import prisma from "@/lib/prisma";
import { RowDataPacket } from "mysql2";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    console.log(id)
    try {
        const [row] = await kiboxDatosIpsPool.query<RowDataPacket>('SELECT * FROM tablacitas WHERE id=(?);', [id]);
 
        console.log(row)

        if (!row) {
            return new NextResponse('La cita ${id} no existe', { status: 404 });
        }

        return NextResponse.json(row);

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}