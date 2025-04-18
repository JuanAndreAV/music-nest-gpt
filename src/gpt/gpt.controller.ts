import { Controller, Post, Body } from '@nestjs/common';
import { GptService } from './gpt.service';
import { PromtValidation } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('music-tasks')
  myMusicTasks(@Body() promtValidation: PromtValidation ) {
  
    return this.gptService.myMusicTasks(promtValidation)
  }

}

