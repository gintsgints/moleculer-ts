'use strict'
import { ServiceSchema } from 'moleculer'
import { TypeOrmDbAdapter } from 'moleculer-db-adapter-typeorm'
import { Post } from './posts.model'

const DbService = require('moleculer-db')

const PostsService: ServiceSchema = {
  name: 'posts',
  adapter: new TypeOrmDbAdapter({
    database: 'memory',
    name: 'memory',
    type: 'sqlite'
  }),
  mixins: [DbService],
  model: Post,
  actions: {
    async vote(ctx) {
      return this.adapter.find()
    }
  }
}

export = PostsService
