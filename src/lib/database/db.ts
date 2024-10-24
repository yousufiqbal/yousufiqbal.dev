import PocketBase from 'pocketbase'
import { TypedPocketBase } from "./types"

export const pb = new PocketBase('https://pb.yousufiqbal.dev/') as TypedPocketBase