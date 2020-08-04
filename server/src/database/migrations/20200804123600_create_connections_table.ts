import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('connections');
}
