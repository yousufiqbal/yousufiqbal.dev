import PocketBase from 'pocketbase'
import { TypedPocketBase } from "./pocketbase-types"

export const pb = new PocketBase('http://139.59.102.118:8091/') as TypedPocketBase