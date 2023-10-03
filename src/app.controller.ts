import { Controller, Param, Post } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller('producer')
@Controller('messages')
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post('topic_exchange_1/:message')
  publishOnTopicExchangeOne(@Param('message') message: string): void {
    this.amqpConnection.publish('topic_exchange_1', 'topic-route', message, {});
  }

  @Post('topic_exchange_2/:message')
  publishOnTopicExchangeTwo(@Param('message') message: string): void {
    this.amqpConnection.publish('topic_exchange_2', 'topic-route', message);
  }

  @Post('direct_exchange/:message')
  publishOnDirectExchange(@Param('message') message: string): void {
    this.amqpConnection.publish('direct_exchange', 'direct-route', message);
  }

  @Post('fanout_exchange/:message')
  publishOnFanoutExchange(@Param('message') message: string): void {
    this.amqpConnection.publish('fanout_exchange', 'fanout-route', message);
  }
}
