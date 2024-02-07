"use server";

import { connectToDatabase } from "../database/mongoose";

export async function createQuestion(params: any) {
  try {
    await connectToDatabase();
  } catch (error) {
    console.log("Error", error);
  }
}
