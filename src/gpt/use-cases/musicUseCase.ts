import OpenAI from "openai";

interface Options {
    prompt: string;

}

export const musicUseCase = async(openai: OpenAI, options: Options) => {
    const { prompt } = options;
    const completion = openai.responses.create({
        model: "gpt-4o-mini",
        temperature: 0.3,
        store: true,
        input: [
          {"role": "user", "content": `Eres un profesor experto de música, tu misión será sugerir al estudiante 
            la mejor manera de abordar las tareas que el estudiente te entregue. Deberás entregarle el cómo  abordar cada tarea, proporcionar definiciones o contexto relevante
             de acuerdo a la pregunta o lista de tareas a continuacion: 
            ${prompt}. Las respuestas deben ser muy técnicas y estar basadas en el contexto musical, si las tareas no tienen que ver con música, debes informarle al usuario y darle alguna sugerencia.
            `},
        ],
       
      });

      //const response = JSON.parse((await completion).choices[0].message.content)
    
    
    return (await completion).output[0];
    
}