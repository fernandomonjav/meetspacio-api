import { UserDto } from './user.dto'
import { User } from './user.entity'

export class UserMapper {
  static toDto(entity: User): UserDto {
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
