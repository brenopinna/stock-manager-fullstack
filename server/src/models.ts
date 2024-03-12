import mongoose from "mongoose"

const { Schema, model } = mongoose

const productSchema = new Schema({
  createdAt: { type: Date, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
})

export const Product = model("Product", productSchema)
