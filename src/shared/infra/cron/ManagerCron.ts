import { ScheduledTask } from 'node-cron';
import createHotPostsFromTimeToTime from '../../../shared/infra/cron/createHotPostsFromTimeToTime'

class ManagerCron {
  private jobs: ScheduledTask[];

  constructor() {
    this.jobs = [createHotPostsFromTimeToTime];
  }

  public run() {
    this.jobs.map(job => job.start())
  }
}
export default new ManagerCron();
