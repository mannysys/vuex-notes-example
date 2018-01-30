/*
 在应用中获取数据，通过getters做
 返回数据
 */
import moment from 'moment'
import _ from 'lodash'
moment.locale('zh-CN')

export const entities = state => {
  return state.entities
}

export const updated = state => entity => {
  return moment(entity.meta.updated).fromNow()
}

export const words = state => entity => {
  return entity.body.length
}

export const header = state => entity => {
  return _.truncate(entity.body, { length: 30 })
}
