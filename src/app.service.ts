import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  publishTopicOneExchange(message: string): string {
    this.amqpConnection.publish('topic_exchange', 'topic.one', message);
    return 'Message sent';
  }

  publishTopicTwoExchange(message: string): string {
    this.amqpConnection.publish('topic_exchange', 'topic.two', message);
    return 'Message sent';
  }
  publishTopicAllExchange(message: string): string {
    this.amqpConnection.publish('topic_exchange', 'topic.all.test', message);
    return 'Message sent';
  }

  publishDirectExchange(message: string): string {
    this.amqpConnection.publish('direct_exchange', 'direct.route', message);
    return 'Message sent';
  }

  publishOneOnFanoutExchange(message: string): string {
    this.amqpConnection.publish('fanout_exchange', 'fanout.route.one', message); //el consumer debe ignorar el routingKey
    return 'Message sent';
  }
  publishTwoOnFanoutExchange(message: string): string {
    this.amqpConnection.publish('fanout_exchange', 'fanout.route.two', message); //el consumer debe ignorar el routingKey
    return 'Message sent';
  }
}
