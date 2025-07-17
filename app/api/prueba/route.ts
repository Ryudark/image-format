'use server'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('llega');
    if (req.method === 'POST') {
        try {
        // Acceder a los datos del cuerpo de la solicitud
        const { name, age } = req.body;

        // Realizar alguna operación con los datos
        const responseData = {
            message: `Hola, ${name}, tienes ${age} años.`,
            receivedData: { name, age },
        };

        // Enviar la respuesta
        res.status(200).json(responseData);
        } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}