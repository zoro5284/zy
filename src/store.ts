import { createStore } from 'vuex'
import { column, post } from './mock/testData'

export interface ColumnProps {
  id: string,
  title: string,
  avatar?: string,
  description: string
}

export interface PostProps {
  id: string,
  title: string,
  content: string,
  image?: string,
  createdAt?: string
}

export interface UserProps {
  id?: string,
  name?: string,
  isLogin: boolean
}

interface ListProps<P> {
  [id: string]: P
}

export interface GlobalDataProps {
  columns: { data: ListProps<ColumnProps>;currentPage: number; total:number};
  posts: { data: ListProps<PostProps>};
  user: UserProps;
}

export default createStore<GlobalDataProps>({
  state: {
    columns: { data: {}, currentPage: 0, total: 0 },
    posts: { data: {} },
    user: { isLogin: false }
  },
  getters: {

  },
  mutations: {},
  actions: {}
})
