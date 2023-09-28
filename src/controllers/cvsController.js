const cvsService = require("../services/cvsService")

const getAllCvs = (req, res) => {
  const allCvs = cvsService.getAllCvs()
  res.send({data: allCvs})
}

const getOneCv = (req, res) => {
  const oneCv = cvsService.getOneCv()
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Get One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const createOneCv = (req, res) => {
  const  createdCv = cvsService.createOneCv(req.paras.cvId)
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Create One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const updateOneCv = (req, res) => {
  const updatedCv = cvsService.updateOneCv(req.paras.cvId)
  res.send(
      `
        <h1> Hello from ${req.url}</h1>
        <h1> Update One Cvs Id: ${req.params.cvId}</h1>
      `
  )
}

const deleteOneCv = (req, res) => {
  const deletedCv = cvsService.deleteOneCv(req.paras.cvId)
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


