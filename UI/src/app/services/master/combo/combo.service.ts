import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {HttpClient} from '@angular/common/http';
import {Master} from '../../../models/master/master.model';
import {PageableResponse} from '../../../models/response.pageable.model';
import {Response} from '../../../models/response.model';
import {Combo} from '../../../models/master/combo.model';

@Injectable({
  providedIn: 'root'
})
export class ComboService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllCombos() {
    return this.get<PageableResponse<Combo[]>>("/combo/all");
  }

  saveCombo(combo: string) {
    return this.post<Response<string>>('/combo', combo);
  }

}
