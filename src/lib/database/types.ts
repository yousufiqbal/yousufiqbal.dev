/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Academics = "academics",
	Bio = "bio",
	Categories = "categories",
	Meta = "meta",
	Projects = "projects",
	Services = "services",
	Smtp = "smtp",
	Techs = "techs",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AcademicsRecord = {
	description?: HTMLString
	end?: IsoDateString
	start?: IsoDateString
	title?: string
}

export type BioRecord = {
	email?: string
	first_name?: string
	last_name?: string
	phone?: string
}

export type CategoriesRecord = {
	icon?: string
	name?: string
}

export type MetaRecord = {
	name?: string
	value?: HTMLString
}

export enum ProjectsRepoTypeOptions {
	"public" = "public",
	"private" = "private",
}
export type ProjectsRecord = {
	description?: HTMLString
	icon?: string
	name?: string
	repo_link?: string
	repo_type?: ProjectsRepoTypeOptions
}

export type ServicesRecord = {
	category_id?: RecordIdString
	description?: HTMLString
	icon?: string
	name?: string
}

export type SmtpRecord = {
	from_verified_email?: string
	host?: string
	password?: string
	port?: number
	to_email?: string
	username?: string
}

export type TechsRecord = {
	description?: HTMLString
	icon_url?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AcademicsResponse<Texpand = unknown> = Required<AcademicsRecord> & BaseSystemFields<Texpand>
export type BioResponse<Texpand = unknown> = Required<BioRecord> & BaseSystemFields<Texpand>
export type CategoriesResponse<Texpand = unknown> = Required<CategoriesRecord> & BaseSystemFields<Texpand>
export type MetaResponse<Texpand = unknown> = Required<MetaRecord> & BaseSystemFields<Texpand>
export type ProjectsResponse<Texpand = unknown> = Required<ProjectsRecord> & BaseSystemFields<Texpand>
export type ServicesResponse<Texpand = unknown> = Required<ServicesRecord> & BaseSystemFields<Texpand>
export type SmtpResponse<Texpand = unknown> = Required<SmtpRecord> & BaseSystemFields<Texpand>
export type TechsResponse<Texpand = unknown> = Required<TechsRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	academics: AcademicsRecord
	bio: BioRecord
	categories: CategoriesRecord
	meta: MetaRecord
	projects: ProjectsRecord
	services: ServicesRecord
	smtp: SmtpRecord
	techs: TechsRecord
}

export type CollectionResponses = {
	academics: AcademicsResponse
	bio: BioResponse
	categories: CategoriesResponse
	meta: MetaResponse
	projects: ProjectsResponse
	services: ServicesResponse
	smtp: SmtpResponse
	techs: TechsResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'academics'): RecordService<AcademicsResponse>
	collection(idOrName: 'bio'): RecordService<BioResponse>
	collection(idOrName: 'categories'): RecordService<CategoriesResponse>
	collection(idOrName: 'meta'): RecordService<MetaResponse>
	collection(idOrName: 'projects'): RecordService<ProjectsResponse>
	collection(idOrName: 'services'): RecordService<ServicesResponse>
	collection(idOrName: 'smtp'): RecordService<SmtpResponse>
	collection(idOrName: 'techs'): RecordService<TechsResponse>
}
