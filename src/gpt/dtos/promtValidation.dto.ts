import { IsString, IsInt, IsOptional } from "class-validator";

export class PromtValidation {
    @IsString()
    readonly prompt: string;

    @IsInt()
    @IsOptional()
    readonly maxTokens?: number;
}