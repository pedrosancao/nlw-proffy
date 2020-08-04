import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('class_schedules', table => {
    table.increments('id').primary();
    table.integer('weekday').notNullable();
    table.integer('time_from').notNullable();
    table.integer('time_to').notNullable();
    table.integer('class_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('class_schedules');
}
