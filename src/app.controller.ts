import { Controller, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('producer')
@Controller('messages')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('topic_exchange/one/:message')
  publishTopicOneExchange(@Param('message') message: string): string {
    return this.appService.publishTopicOneExchange(message);
  }

  @Post('topic_exchange/two/:message')
  publishTopicTwoExchange(@Param('message') message: string): string {
    return this.appService.publishTopicTwoExchange(message);
  }
  @Post('topic_exchange/all/:message')
  publishTopicAllExchange(@Param('message') message: string): string {
    return this.appService.publishTopicTwoExchange(message);
  }

  @Post('direct_exchange/:message')
  publishDirectExchange(@Param('message') message: string): string {
    return this.appService.publishDirectExchange(message);
  }

  @Post('fanout_exchange/one/:message')
  publishOneOnFanoutExchange(@Param('message') message: string): string {
    return this.appService.publishOneOnFanoutExchange(message);
  }
  @Post('fanout_exchange/two/:message')
  publishTwoOnFanoutExchange(@Param('message') message: string): string {
    return this.appService.publishTwoOnFanoutExchange(message);
  }
}
