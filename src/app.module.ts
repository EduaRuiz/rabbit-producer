import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      name: 'RABBITMQ_CONNECTION',
      exchanges: [
        {
          name: 'test',
          type: 'topic',
          createExchangeIfNotExists: true,
          options: {
            durable: false,
            autoDelete: true,
            internal: true,
          },
        },
        {
          name: 'topic_exchange_1',
          type: 'topic',
          createExchangeIfNotExists: true,
        },
        {
          name: 'topic_exchange_2',
          type: 'topic',
        },
        {
          name: 'direct_exchange',
          type: 'direct',
        },
        {
          name: 'fanout_exchange',
          type: 'fanout',
        },
      ],
      uri: 'amqp://root:password@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
