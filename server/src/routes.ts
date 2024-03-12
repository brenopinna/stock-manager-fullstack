import { Router } from "express"
import { z } from "zod"
import { Product } from "./models"

const routes = Router()

routes.get("/products", async (_, res) => {
  try {
    const products = await Product.find({})
    res.status(200).send(products)
  } catch (error) {
    res.status(400).send(error)
  }
})

routes.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).send(product)
  } catch (error: any) {
    res.status(error.name === "CastError" ? 404 : 400).send(error)
  }
})

routes.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200).send(deletedProduct)
  } catch (error) {
    res.status(400).send(error)
  }
})

routes.post("/products", async (req, res) => {
  const bodySchema = z.object({
    name: z.string(),
    amount: z.coerce.number(),
    price: z.coerce.number(),
    category: z.string(),
    description: z.string(),
    createdAt: z.date().optional(),
  })

  try {
    const product = bodySchema.parse(req.body)
    product.createdAt = new Date()
    const newProduct = await new Product(product).save()
    res.status(200).send(newProduct)
  } catch (error) {
    res.status(400).send(error)
  }
})

routes.put("/products/:id", async (req, res) => {
  const bodySchema = z.object({
    name: z.string(),
    amount: z.coerce.number(),
    price: z.coerce.number(),
    category: z.string(),
    description: z.string(),
    updatedAt: z.date().optional(),
  })

  try {
    const product = bodySchema.parse(req.body)
    product.updatedAt = new Date()
    const oldProduct = await Product.findByIdAndUpdate(req.params.id, product)
    res.status(200).send(oldProduct)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default routes
