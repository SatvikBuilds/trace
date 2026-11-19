import { NextResponse } from "next/server";
export async function GET(){ return NextResponse.json({ sample:true, metrics:{ transactions:248842,suspicious:1284,highRiskAccounts:392,networks:47,falsePositiveRate:4.8,averageInvestigationMinutes:18 } }); }
