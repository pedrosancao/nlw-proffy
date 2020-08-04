import { Request, Response } from 'express';
import database from '../database/connection';
import { ScheduleItem } from '../interfaces';
import { convertHourToMinutes } from '../utils';

export default class ClassesController {
  async create (request: Request, response: Response) {
    const { name, avatar, whatsapp, title, bio, subject, cost, schedule } = request.body;
  
    const transaction = await database.transaction();
  
    try {
      const idUsers = await transaction('users').insert({ name, avatar, whatsapp, title, bio });
      const idClasses = await transaction('classes').insert({ subject, cost, user_id: idUsers[0] });
  
      await transaction('class_schedules').insert(schedule.map((scheduleItem: ScheduleItem) => {
        const { weekday, time_from, time_to } = scheduleItem;
        return {
          weekday: scheduleItem.weekday,
          time_from: convertHourToMinutes(scheduleItem.time_from),
          time_to: convertHourToMinutes(scheduleItem.time_to),
          class_id: idClasses[0]
        };
      }));
  
      transaction.commit();
  
      return response.status(201).json({ status: 'ok' });
    } catch (error) {
      transaction.rollback();
      return response.status(400).json({ status: 'error' });
    }
  }

}
