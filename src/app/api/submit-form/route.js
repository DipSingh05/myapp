// src/app/api/submit-form/route.js
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body from the request
    const { name, rollNumber } = body;

    // Process the data (e.g., save it to a database, perform validation, etc.)
    console.log('Name:', name);
    console.log('Roll Number:', rollNumber);

    // Respond with a success message
    return NextResponse.json({ message: 'Data received successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error processing data' }, { status: 500 });
  }
}
