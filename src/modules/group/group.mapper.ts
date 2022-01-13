import { GroupDto } from './group.dto'
import { Group } from './group.entity'

export class GroupMapper {
  static toDto(entity: Group): GroupDto {
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
