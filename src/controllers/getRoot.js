import * as transformNumbersService from '../services/transform.numbers';
import * as magicNumberService from '../services/provide.magic.number';

export default async (ctx) => {
  try {
    const magicNumber = await magicNumberService.get();
    const sqrtRoot = transformNumbersService.sqrt(magicNumber);
    ctx.response.status = 200;
    ctx.response.body = { sqrtRoot };
  } catch (err) {
    ctx.response.status = 400;
    ctx.response.body = { err };
  }
};
