import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

// import { Project, Service, Skill } from './types'
interface Service {
   Icon: any //TODO fix any
   title: string
   about: string
}

export const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   },
   {
      Icon: RiComputerLine,
      title: 'Whatever',
      about:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   },
]
