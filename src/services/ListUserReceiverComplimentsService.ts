import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";


class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        userReceiver: user_id
      },
      relations: ['userSender', 'userReceiver']
    });

    return compliments;
  }
}

export { ListUserReceiverComplimentsService }
