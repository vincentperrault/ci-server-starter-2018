import { findAll, findById, register, unregister, update, build } from '../services/projects'
import express from 'express'

const router = express.Router()

router.get('/projects', (req, res, next) => {
  res.json(findAll())
})

router.get('/projects/:id', (req, res, next) => {
  const found = findById(req.params.id)
  if (found) {
    res.status(200).json(found).send()
  } else {
    res.sendStatus(404)
  }
})

router.post('/projects', (req, res, next) => {
  res.status(201).json(register(req.body)).send()
})

router.delete('/projects/:id', (req, res, next) => {
  unregister(req.params.id)
  res.sendStatus(204)
})

router.put('/projects/:id', (req, res, next) => {
  res.status(200).json(update(req.params.id, req.body)).send()
})

router.post('/projects/:id/builds', (req, res, next) => {
  const built = build(req.params.id)
  if (built) {
    res.status(201).json(built).send()
  } else {
    res.sendStatus(500)
  }
})

export default router
