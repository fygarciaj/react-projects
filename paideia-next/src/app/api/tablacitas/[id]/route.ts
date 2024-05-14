import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    console.log(id)
    try {
        const cita = await prisma.tablacitas.findFirst({
            where: { Id: id },
        });
        if (!cita) {
            return new NextResponse('La cita ${id} no existe', { status: 404 });
        }

        return NextResponse.json(cita);

    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}