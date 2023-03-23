import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as crypto from 'crypto';
import { firstValueFrom } from 'rxjs';
import axios from 'axios';

@Injectable()
export class SmsService {
  constructor(
    private httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  private makeSignature(): string {
    const message = [];
    const hmac = crypto.createHmac(
      'sha256',
      this.configService.get('NCP_SENS_SECRET_KEY'),
    );
    const space = ' ';
    const newLine = '\n';
    const method = 'POST';
    const timestamp = Date.now().toString();
    message.push(method);
    message.push(space);
    message.push(
      `/sms/v2/services/${this.configService.get('NCP_SENS_ID')}/messages`,
    );
    message.push(newLine);
    message.push(timestamp);
    message.push(newLine);
    message.push(this.configService.get('NCP_SENS_ACCESS_KEY'));
    //message 배열에 위의 내용들을 담아준 후에
    const signature = hmac.update(message.join('')).digest('base64');
    //message.join('') 으로 만들어진 string 을 hmac 에 담고, base64로 인코딩한다
    return signature.toString(); // toString()이 없었어서 에러가 자꾸 났었는데, 반드시 고쳐야함.
  }

  async sendSMS(phoneNumber: string, content: string): Promise<any> {
    const body = {
      type: 'SMS',
      contentType: 'COMM',
      countryCode: '82',
      from: `01076370623`, // 발신자 번호
      content: `구매해주셔서 감사합니다. ${content} `,
      messages: [
        {
          to: phoneNumber, // 수신자 번호
        },
      ],
    };

    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'x-ncp-apigw-timestamp': Date.now().toString(),
      'x-ncp-iam-access-key': this.configService.get('NCP_SENS_ACCESS_KEY'),
      'x-ncp-apigw-signature-v2': this.makeSignature(),
    };
    const options = {
      headers,
    };

    /*    axios
      .post(
        `${this.configService.get('NCP_SENS_URI')}/${this.configService.get(
          'NCP_SENS_ID',
        )}/messages`,
        body,
        options,
      )
      .then(async (res) => {
        // 성공 이벤트
      })
      .catch((err) => {
        console.error(err.response.data);
        throw new InternalServerErrorException();
      }); */
    try {
      const response = await firstValueFrom(
        this.httpService.post(
          `${this.configService.get('NCP_SENS_URI')}/${this.configService.get(
            'NCP_SENS_ID',
          )}/messages`,
          body,
          options,
        ),
      );
      return response.status === 202;
    } catch (error) {
      // console.error(error);
      return false;
    }
  }
}
