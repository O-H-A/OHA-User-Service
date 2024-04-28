import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-apple';

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.get('OAUTH_APPLE_ID'),
      teamID: configService.get('OAUTH_APPLE_TEAM'),
      callbackURL: configService.get('OAUTH_APPLE_REDIRECT'),
      keyID: configService.get('OAUTH_APPLE_KEY_ID'),
      privateKeyString: configService.get('OAUTH_APPLE_KEY_PW'),
      passReqToCallback: true,
    });
  }

  async function(req, accessToken, refreshToken, idToken, profile, cb) {
    console.log(profile);
    // const { provider, id, name, emails } = profile;
    // return {
    //   provider,
    //   providerId: id,
    //   name: name.givenName,
    //   email: emails[0].value,
    // };
  }
}