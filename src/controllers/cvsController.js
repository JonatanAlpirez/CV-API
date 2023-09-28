const getAllCvs = (req, res) => {
  res.send(
    `
      <h1> Hello from ${req.url}</h1>
      <h1> Get all Cvs</h1>
    `
  )
}

const getOneCv = (req, res) => {
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Get One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const createOneCv = (req, res) => {
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Create One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const updateOneCv = (req, res) => {
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Update One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const deleteOneCv = (req, res) => {
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Delete One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

module.exports = {
  getAllCvs,
  getOneCv,
  createOneCv,
  updateOneCv,
  deleteOneCv,

}

