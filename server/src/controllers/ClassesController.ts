import { Request, Response } from 'express';
import database from '../database/connection';
import { ScheduleItem } from '../interfaces';
import { convertHourToMinutes } from '../utils';

class ClassesController {
  async index (request: Request, response: Response) {
    const filters = request.query;

    if (!filters.weekday || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const weekday = filters.weekday as string;
    const subject = filters.subject as string;
    const time = filters.time as string;
    const minutes = convertHourToMinutes(time);

    const classes = await database('classes')
      .join('users', 'users.id', 'classes.user_id')
      .whereRaw('lower(classes.subject) like ?', [`%${subject.trim()}%`])
      .whereExists(function () {
        this.from('class_schedules')
          .whereRaw('class_id = classes.id')
          .where('weekday', weekday)
          .where('time_from', '<=', minutes)
          .where('time_to', '>=', minutes)
          ;
      });

    return response.json(classes);
  }

  async create (request: Request, response: Response) {
    const { name, avatar, whatsapp, title, bio, subject, cost, schedule } = request.body;

    const transaction = await database.transaction();

    try {
      const idUsers = await transaction('users')
        .insert({ name, avatar, whatsapp, title, bio })
        .returning('id');
      const idClasses = await transaction('classes')
        .insert({ subject, cost, user_id: idUsers[0] })
        .returning('id');

      await transaction('class_schedules').insert(schedule.map((scheduleItem: ScheduleItem) => {
        const { weekday, timeFrom, timeTo } = scheduleItem;
        return {
          weekday: weekday,
          time_from: convertHourToMinutes(timeFrom),
          time_to: convertHourToMinutes(timeTo),
          class_id: idClasses[0]
        };
      }));

      transaction.commit();

      return response.status(201).json({ status: 'ok' });
    } catch (error) {
      console.log(error);
      transaction.rollback();
      return response.status(400).json({ status: 'error' });
    }
  }

}

export default new ClassesController();
