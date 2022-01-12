import { binaryToUuid, uuidToBinary } from '../../utils/mongo-uuid'
import { MongoUser } from './mongo-user.entity'
import { User } from './user.entity'

export class MongoUserMapper {
  static toDomain(persistence: MongoUser): User {
    return User.generate({
      id: binaryToUuid(persistence._id),
      name: persistence.name,
      username: persistence.username,
      bio: persistence.bio,
      websiteUrl: persistence.websiteUrl,
      createdAt: persistence.createdAt,
      updatedAt: persistence.updatedAt,
    })
  }

  static toPersistence(domain: User): MongoUser {
    return {
      _id: uuidToBinary(domain.getId()),
      name: domain.getName(),
      username: domain.getUsername(),
      bio: domain.getBio(),
      websiteUrl: domain.getWebsiteUrl(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    }
  }
}
