import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const citas = await prisma.tablacitas.findMany({
      orderBy: {
        Fecha: 'desc' // Ordenar por Fecha de manera descendente
      },
      take: 1 // Tomar solo el primer registro
    });

    // Obtener la última fecha de la consulta anterior
    const ultimaFecha = citas.length > 0 ? citas[0].Fecha : null;

    if (ultimaFecha) {
      // Consultar registros con la última fecha obtenida
      const registrosEncontrados = await prisma.tablacitas.findMany({
        where: {
          Fecha: ultimaFecha
        }
      });

      // Hacer algo con los registros encontrados
      console.log(registrosEncontrados);

      return NextResponse.json({ data: registrosEncontrados }, { status: 200 });

    }
  } catch (error) {

    return new NextResponse(error.message, { status: 500 });
  }
}
