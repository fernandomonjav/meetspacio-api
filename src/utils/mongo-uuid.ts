import { Binary } from 'mongodb'

export function uuidToBinary(uuid: string): Binary {
  return new Binary(Buffer.from(uuid.replace(/-/g, ''), 'hex'), Binary.SUBTYPE_UUID)
}

export function binaryToUuid(binary: Binary): string {
  return binary.toUUID().toString()
}
