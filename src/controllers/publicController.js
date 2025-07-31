
class PublicController {
  getPublicData(req, reply) {
    reply.send({ message: 'Public data' });
  } 
}

export default new PublicController();