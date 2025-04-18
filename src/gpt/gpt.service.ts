import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { musicUseCase } from './use-cases/musicUseCase';
import { PromtValidation } from './dtos';
@Injectable()
export class GptService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    })

  async  myMusicTasks(promtValidation: PromtValidation) {
        return await musicUseCase(this.openai,{
            prompt: promtValidation.prompt

        });
    }
}
