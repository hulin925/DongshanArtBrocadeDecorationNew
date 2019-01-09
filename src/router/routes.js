import HomeWrap from '@/views/HomeWrap'
import Home from '@/views/Home'
import Case from '@/views/Case'
import Budget from '@/views/Budget'
import CaseDetails from '@/views/Casedetails'
import ActivityDetails from '@/views/ActivityDetails'
import HouseGroup from '@/views/homeRouter/HouseGroup'
import Designer from '@/views/homeRouter/Designer'
import Core from '@/views/homeRouter/Core'

export default [
  //首页外壳
  {
    path: '/',
    name: 'HomeWrap',
    component: HomeWrap,
    children: [
      //首页
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      //案例
      {
        path: 'case',
        name: 'Case',
        component: Case
      },
      //预算
      {
        path:'budget',
        name:'Budget',
        component:Budget
      }
    ]
  },
  //案列详情
  {
    path: '/caseDetails',
    name: 'CaseDetails',
    component: CaseDetails
  },
  //活动详情
  {
    path: '/activityDetails',
    name: 'ActivityDetails',
    component: ActivityDetails
  },
  //量房团
  {
    path: '/houseGroup',
    name: 'HouseGroup',
    component: HouseGroup
  },
  //设计师
  {
    path: '/designer',
    name: 'Designer',
    component: Designer
  },
  //核心优势
  {
    path: '/core',
    name: 'Core',
    component: Core
  },
]
