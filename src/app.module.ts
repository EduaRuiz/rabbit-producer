import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { AppService } from './app.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      // name: 'RABBITMQ_CONNECTION',
      exchanges: [
        // {
        //   name: 'test',
        //   type: 'topic',
        //   createExchangeIfNotExists: true,
        //   options: {
        //     durable: false, //por defecto es true
        //     autoDelete: true, //por defecto es false
        //     internal: true, //por defecto es false
        //   },
        // },
        {
          name: 'topic_exchange',
          type: 'topic',
          createExchangeIfNotExists: true,
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
  providers: [AppService],
  exports: [],
})
export class AppModule {}
