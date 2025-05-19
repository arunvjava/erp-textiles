import {Injectable} from '@angular/core';
import {ApiService} from '../../api.service';
import {HttpClient} from '@angular/common/http';
import {Response} from '../../../models/response.model';
import {HSN} from '../../../models/master/hsn.model';

@Injectable({
  providedIn: 'root'
})
export class HsnService extends ApiService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  saveHSN(hsn: string) {
    return this.post<Response<string>>('/hsn', hsn);
  }

  updateHSN(hsn: HSN) {
    return this.put<Response<string>>('/hsn', hsn);

  }

  getAllHSNs() {
    return this.get<Response<HSN[]>>("/hsn/all");
  }

  deleteHSNs(ids: string[]) {
    return this.delete(`/hsn/${ids}`);
  }
}
