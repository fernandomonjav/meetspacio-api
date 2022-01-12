import { binaryToUuid, uuidToBinary } from '../../utils/mongo-uuid'
import { Group } from './group.entity'
import { MongoGroup } from './mongo-group.entity'

export class MongoGroupMapper {
  static toDomain(persistence: MongoGroup): Group {
    return Group.generate({
      id: binaryToUuid(persistence._id),
      name: persistence.name,
      username: persistence.username,
      description: persistence.description,
      websiteUrl: persistence.websiteUrl,
      createdAt: persistence.createdAt,
      updatedAt: persistence.updatedAt,
    })
  }

  static toPersistence(domain: Group): MongoGroup {
    return {
      _id: uuidToBinary(domain.getId()),
      name: domain.getName(),
      username: domain.getUsername(),
      description: domain.getDescription(),
      websiteUrl: domain.getWebsiteUrl(),
      createdAt: domain.getCreatedAt(),
      updatedAt: domain.getUpdatedAt(),
    }
  }
}
