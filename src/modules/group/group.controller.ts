import { Handler } from 'express'
import { GroupMapper } from './group.mapper'
import { GroupService } from './group.service'

export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  getGroups: Handler = async (req, res, next) => {
    try {
      const groups = await this.groupService.getGroups()

      res.json({ groups: groups.map((group) => GroupMapper.toDTO(group)) })
    } catch (error) {
      next(error)
    }
  }

  createGroup: Handler = async (req, res, next) => {
    try {
      const group = await this.groupService.createGroup(req.body)

      res.json({ groups: GroupMapper.toDTO(group) })
    } catch (error) {
      next(error)
    }
  }

  getGroup: Handler = async (req, res, next) => {
    try {
      const group = await this.groupService.getGroup(req.params.groupId)

      res.json({ group: GroupMapper.toDTO(group) })
    } catch (error) {
      next(error)
    }
  }

  updateGroup: Handler = async (req, res, next) => {
    try {
      const group = await this.groupService.updateGroup(req.params.groupId, req.body)

      res.json({ group: GroupMapper.toDTO(group) })
    } catch (error) {
      next(error)
    }
  }

  deleteGroup: Handler = async (req, res, next) => {
    try {
      const group = await this.groupService.deleteGroup(req.params.groupId)

      res.json({ group: GroupMapper.toDTO(group) })
    } catch (error) {
      next(error)
    }
  }
}
