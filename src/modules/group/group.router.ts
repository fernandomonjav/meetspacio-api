import { Router } from 'express'
import { GroupController } from './group.controller'
import { GroupService } from './group.service'
import { MongoGroupRepository } from './mongo-group.repository'

const groupRouter = Router()

const groupRepository = new MongoGroupRepository()
const groupService = new GroupService(groupRepository)
const groupController = new GroupController(groupService)

groupRouter.get('/', groupController.getGroups)
groupRouter.post('/', groupController.createGroup)

groupRouter.get('/:username', groupController.getGroup)
groupRouter.patch('/:username', groupController.updateGroup)
groupRouter.delete('/:username', groupController.deleteGroup)

export default groupRouter
