var PREFIX = 'component'

// 路由配置
var routes = [
  {
    path: `/`,
    meta: {
      title: '首页',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: `/${PREFIX}/slider`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'slider/Normal', false)
    },
  },
  {
    path: `/${PREFIX}/slider/vertical`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'slider/vertical')
    },
  },
  {
    path: `/${PREFIX}/slider/notice-bar`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'slider/notice-bar')
    },
  },
  {
    path: `/${PREFIX}/classify-list`,
    meta: {
      title: '分类',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'classify-list')
    },
  },
  
 
  {
    path: `/${PREFIX}/media`,
    meta: {
      title: 'Media',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Media', false)
    },
  },
  {
    path: `/${PREFIX}/form`,
    meta: {
      title: '表单',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Form', false)
    },
  },
  {
    path: `/${PREFIX}/calendar`,
    meta: {
      title: '表单',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'calendar')
    },
  },
  {
    path: `/${PREFIX}/list/infinate-load`,
    meta: {
      title: '列表无限加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Infinate-load', false)
    },
  },
  {
    path: `/${PREFIX}/list/no-data`,
    meta: {
      title: '列表无数据',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/No-data', false)
    },
  },
  {
    path: `/${PREFIX}/list/filter`,
    meta: {
      title: '列表搜索条件',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/filter')
    },
  },
  {
    path: `/${PREFIX}/list/pull-refresh`,
    meta: {
      title: '下拉刷新',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/PullRefresh', false)
    },
  },
  {
    path: `/${PREFIX}/list/hor-scroll`,
    meta: {
      title: '横向滚动',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Hor-scroll', false)
    },
  },
  {
    path: `/${PREFIX}/tree-select`,
    meta: {
      title: '分类选择',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'TreeSelect', false)
    },
  },
  {
    path: `/${PREFIX}/img/lazyload`,
    meta: {
      title: '懒加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Lazyload', false)
    },
  },
  {
    path: `/${PREFIX}/img/img-preview`,
    meta: {
      title: '图片预览',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgPreview', false)
    },
  },
  {
    path: `/${PREFIX}/img/img-badge`,
    meta: {
      title: '角标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgBadge', false)
    },
  },
  {
    path: `/${PREFIX}/singer`,
    meta: {
      title: '歌手',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'singer')
    },
  },
  {
    path: `/${PREFIX}/data`,
    meta: {
      title: '数据获取',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Data', false)
    },
  },
  {
    path: `/${PREFIX}/map/:lng/:lat/:name/:address`,
    meta: {
      title: '地图',
      activeTypeIndex: 1,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'map')
    },
  },
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/component/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
