import { FunctionComponent } from 'react'
import { IconType } from 'react-icons'
export interface Service {
   Icon: IconType
   title: string
   about: string
}

export interface Skill {
   Icon: IconType
   name: string
   level: string
}
