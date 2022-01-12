import { GroupDTO } from './group.dto'
import { Group } from './group.entity'

export class GroupMapper {
  static toDTO(entity: Group): GroupDTO {
    return {
      id: entity.getId(),
      name: entity.getName(),
      username: entity.getUsername(),
      description: entity.getDescription(),
      websiteUrl: entity.getWebsiteUrl(),
      createdAt: entity.getCreatedAt().toISOString(),
      updatedAt: entity.getUpdatedAt().toISOString(),
    }
  }
}
