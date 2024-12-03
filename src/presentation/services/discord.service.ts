import { envs } from '../../config';

export class DiscordService {
  private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
    // ENVIAR IMAGENES A DISCORD
    //   embeds: [
    //     {
    //       image: {
    //         url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZ4MWkxdHc5MTVxenVzd3Z5bDFhN3k5cmgzOG9ydmo4NnltdXBzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8H38N3BvDUzkc/giphy.gif',
    //       },
    //     },
    //   ],
    };

    const response = await fetch(this.discordWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log('Error sending message to discord');
      return false;
    }

    return true;
  }
}
