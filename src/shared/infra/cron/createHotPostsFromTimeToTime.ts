import cron from 'node-cron'
import CreateHotPostsService from '../../../services/CreateHotPostsService'
import GetHotPostsFromRedditAPIService from '../../../services/GetHotPostsFromRedditAPIService'

const CRON_SCHEDULE = '*/1 * * * *'
const createHotPostsFromTimeToTime = async (): Promise<void> => {
  const createHotPostsService = new CreateHotPostsService() 
  const getHotPostsFromRedditAPI = new GetHotPostsFromRedditAPIService()
  const hotpostsParams = await getHotPostsFromRedditAPI.execute()
  await createHotPostsService.execute(hotpostsParams)
}
export default cron.schedule(CRON_SCHEDULE, createHotPostsFromTimeToTime)
