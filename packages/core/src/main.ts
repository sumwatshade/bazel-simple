import {NAME} from './name';
import getName from '@package/utils'

function greeting(name?: string): string {
  return `${NAME} ${name || getName()}!`;
}

export default greeting
