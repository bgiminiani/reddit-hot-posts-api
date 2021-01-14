import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ running: true })
})

app.listen('3334', () => console.log('Server is running on port 3334'))
