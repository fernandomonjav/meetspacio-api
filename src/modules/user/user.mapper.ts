import { UserDTO } from './user.dto'
import { User } from './user.entity'

export class UserMapper {
  static toDTO(entity: User): UserDTO {
    return {
      id: entity.getId(),
      name: entity.getName(),
      username: entity.getUsername(),
      bio: entity.getBio(),
      websiteUrl: entity.getWebsiteUrl(),
      createdAt: entity.getCreatedAt().toISOString(),
      updatedAt: entity.getUpdatedAt().toISOString(),
    }
  }
}
